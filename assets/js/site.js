/* Effets propres à LASP Sécurité (direction « Ronde de nuit »). Le socle gère l'ouverture, le voile en iris,
   l'en-tête, le menu, les mesures et la bibliothèque d'effets (lignes, cascade, rideau, parallaxe, trace).
   Effets du plan, chacun marqué data-effet="nom" :
   faisceau (lampe qui balaie l'ouverture, suit la souris, descend au défilement), sceau (tourne au défilement),
   cadran (24 segments qui s'allument), allumage (cartes qui s'allument), rangee (secteurs qui glissent),
   dispositif (outil, voyants qui balaient puis se posent), pointage (ronde en quatre temps), carte (plan qui pulse),
   balayage (faisceau de l'appel final), point-de-fuite, vue-descend, radar, valeurs, gestes, trace-ville. */
import { demarrer, boucle, versObjet } from './socle/index.js?v=1';
import { init as initFormulaire } from './modules/formulaire-par-etapes/module.js?v=1';

const gsap = window.gsap;
const ST = window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const souris = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const borne = (v, a, b) => Math.min(b, Math.max(a, v));

/* ---------- Faisceau de l'ouverture ---------- */
const F = { hero: null, nuit: null, cone: null, sceau: null, W: 0, H: 0, ox: 0, oy: 0, repos: { x: 0, y: 0 }, p: { x: 0, y: 0 }, descente: 0, qx: null, qy: null, pret: false };

function mesurerFaisceau() {
  const h = F.hero; if (!h) return;
  const r = h.getBoundingClientRect(), s = F.sceau.getBoundingClientRect();
  F.W = r.width; F.H = r.height;
  F.ox = s.left - r.left + s.width / 2; F.oy = s.top - r.top + s.height / 2;
  const tel = F.W < 761;
  F.repos = tel ? { x: F.W * 0.42, y: F.H * 0.42 } : { x: F.W * 0.6, y: F.H * 0.48 };
  F.base = Math.max(window.innerWidth, window.innerHeight);
}

function rendreFaisceau() {
  if (!F.hero || !gsap) return;
  const x = F.p.x, y = F.p.y + F.descente;
  gsap.set(F.nuit, { x: x - F.W / 2, y: y - F.H / 2 });
  const dx = x - F.ox, dy = y - F.oy, d = Math.hypot(dx, dy);
  gsap.set(F.cone, { x: F.ox, y: F.oy, rotation: (Math.atan2(dy, dx) * 180) / Math.PI, scaleX: Math.max(0.05, (d * 1.12) / F.base) });
}

function preparerFaisceau() {
  F.hero = $('.hero'); if (!F.hero || !gsap) return;
  F.nuit = $('.hero-nuit', F.hero); F.cone = $('.hero-faisceau', F.hero); F.sceau = $('.sceau', F.hero);
  mesurerFaisceau();
  F.p = { ...F.repos };
  rendreFaisceau();
  const proxy = F.p;
  F.qx = gsap.quickTo(proxy, 'x', { duration: 0.9, ease: 'power3.out', onUpdate: rendreFaisceau });
  F.qy = gsap.quickTo(proxy, 'y', { duration: 0.9, ease: 'power3.out', onUpdate: rendreFaisceau });
  /* La lampe descend avec la page : le faisceau glisse vers le bas quand on quitte l'ouverture. */
  ST && ST.create({ trigger: F.hero, start: 'top top', end: 'bottom top', scrub: 0.4,
    onUpdate: (st) => { F.descente = st.progress * F.H * 0.35; rendreFaisceau(); } });
  window.addEventListener('resize', () => { mesurerFaisceau(); if (!F.suit) { F.p.x = F.repos.x; F.p.y = F.repos.y; } rendreFaisceau(); });
  /* Ordinateur : le faisceau suit la souris (et s'arrête avec elle). */
  if (souris) {
    F.hero.addEventListener('pointermove', (e) => {
      if (!F.pret) return;
      const r = F.hero.getBoundingClientRect();
      if (!F.suit) { F.suit = true; F.qx(F.p.x, F.p.x); F.qy(F.p.y, F.p.y); }
      F.qx(borne(e.clientX - r.left, F.W * 0.08, F.W * 0.95));
      F.qy(borne(e.clientY - r.top - F.descente, F.H * 0.12, F.H * 0.92));
    });
  }
  /* Tant que la souris n'a pas pris la lampe (et toujours sur écran tactile), le faisceau balaie seul, lentement :
     la ronde continue. Boucle arrêtée hors écran et onglet caché ; elle s'efface dès que la souris bouge. */
  let t0 = null;
  boucle(F.hero, (dt, t) => {
    if (!F.pret || F.suit) return;
    if (t0 === null) t0 = t;
    const u = t - t0, amorce = Math.min(1, u / 1.5);
    F.p.x = F.repos.x + Math.sin(u * 0.42) * F.W * (F.W < 761 ? 0.26 : 0.16) * amorce;
    F.p.y = F.repos.y + Math.sin(u * 0.29) * F.H * 0.07 * amorce;
    rendreFaisceau();
  });
}

/* Balayage d'arrivée : la lampe s'allume et passe de gauche à droite jusqu'à sa position de repos. */
function balayer() {
  if (!F.hero || !gsap) return;
  mesurerFaisceau();
  F.p.x = F.W * 0.08; F.p.y = F.H * 0.78;
  gsap.to(F.cone, { opacity: 1, duration: 0.35, ease: 'power1.out' });
  gsap.to(F.p, { x: F.repos.x, y: F.repos.y, duration: 1.25, ease: 'power2.inOut', onUpdate: rendreFaisceau, onComplete: () => { F.pret = true; } });
}
function faisceauFinal() {
  if (!F.hero || !gsap) return;
  mesurerFaisceau(); F.p.x = F.repos.x; F.p.y = F.repos.y; F.pret = true;
  gsap.set(F.cone, { opacity: 1 }); rendreFaisceau();
}

/* ---------- Entrée du premier écran (intro, voile) ---------- */
function premierEcran() {
  const h1 = $('main h1[data-anime="gsap"]');
  const autres = $$('main section:first-of-type [data-anime="gsap"]').filter((e) => e !== h1);
  return { h1, lignes: h1 ? $$('.hero-ligne', h1) : [], autres };
}
function entree(tl, t) {
  const { h1, lignes, autres } = premierEcran();
  if (h1) { tl.set(h1, { opacity: 1 }, t); h1.classList.add('vu'); }
  if (lignes.length) tl.fromTo(lignes, { yPercent: 120, y: 0 }, { yPercent: 0, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }, t);
  if (autres.length) tl.fromTo(autres, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out', onStart: () => autres.forEach((a) => a.classList.add('vu')) }, t + 0.25);
  return tl;
}

/* ---------- Sceau, cadran, cartes, rangée ---------- */
function preparerSceau() {
  const s = $('.sceau-texte'); if (!s || !ST) return;
  gsap.to(s, { rotation: 200, transformOrigin: '50% 50%', ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.5 } });
}

function preparerCadran() {
  const c = $('.cadran'); if (!c || !ST) return;
  const segs = $$('.cadran-seg', c);
  gsap.fromTo(c, { rotation: -60 }, { rotation: 0, transformOrigin: '50% 50%', ease: 'none', scrollTrigger: { trigger: '#engagements', start: 'top bottom', end: 'center 40%', scrub: 0.5 } });
  let n = -1;
  ST.create({ trigger: '#engagements', start: 'top 80%', end: 'center 40%', scrub: true,
    onUpdate: (st) => { const k = Math.round(st.progress * segs.length); if (k !== n) { n = k; segs.forEach((s, i) => s.classList.toggle('allume', i < k)); } } });
}

function preparerAllumage() {
  $$('.carte-prestation').forEach((carte) => {
    const lien = $('.carte-lien', carte); if (!lien) return;
    const voile = document.createElement('span'); voile.className = 'carte-nuit'; voile.setAttribute('aria-hidden', 'true');
    lien.prepend(voile);
    gsap.set(voile, { opacity: 0.8 }); gsap.set(lien, { '--trait': 0 });
    ST.create({ trigger: carte, start: 'top 72%', once: true, onEnter: () => {
      gsap.to(voile, { opacity: 0, duration: 0.9, ease: 'power2.out' });
      gsap.to(lien, { '--trait': 1, duration: 0.9, ease: 'power3.out', delay: 0.1 });
    } });
  });
}
function allumageFinal() { $$('.carte-nuit').forEach((v) => gsap.set(v, { opacity: 0 })); $$('.carte-lien').forEach((l) => gsap.set(l, { '--trait': 1 })); }

function preparerRangee() {
  const sec = $('.secteurs-accueil'); if (!sec || !ST) return;
  const fen = $('.rangee-fenetre', sec), piste = $('.rangee', sec);
  const mm = gsap.matchMedia();
  mm.add('(min-width: 761px)', () => {
    const attrs = ['tabindex', 'role', 'aria-label'].map((a) => [a, fen.getAttribute(a)]);
    attrs.forEach(([a]) => fen.removeAttribute(a));
    const course = () => Math.max(0, piste.scrollWidth - (fen.clientWidth - parseFloat(getComputedStyle(fen).paddingLeft) * 2));
    const tw = gsap.to(piste, { x: () => -course(), ease: 'none',
      scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: 0.6, invalidateOnRefresh: true } });
    /* Au clavier : la carte qui reçoit le focus est amenée à l'écran par le défilement de la page. */
    const focus = (e) => {
      const carte = e.target.closest('.carte-secteur'); if (!carte) return;
      fen.scrollLeft = 0;
      const st = tw.scrollTrigger, c = course(); if (!st || !c) return;
      const p = borne((carte.offsetLeft - fen.clientWidth / 2 + carte.offsetWidth / 2) / c, 0, 1);
      window.scrollTo({ top: st.start + p * (st.end - st.start) });
    };
    fen.addEventListener('focusin', focus);
    return () => { fen.removeEventListener('focusin', focus); attrs.forEach(([a, v]) => v != null && fen.setAttribute(a, v)); gsap.set(piste, { clearProps: 'transform' }); };
  });
  /* Téléphone : défilement au doigt, les cartes arrivent en cascade. */
  mm.add('(max-width: 760px)', () => {
    const cartes = $$('.carte-secteur', piste);
    const tw = gsap.fromTo(cartes, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: 'power3.out', paused: true });
    const st = ST.create({ trigger: piste, start: 'top 88%', once: true, onEnter: () => tw.play() });
    return () => { st.kill(); tw.progress(1).kill(); gsap.set(cartes, { clearProps: 'transform,opacity' }); };
  });
}

/* ---------- Votre dispositif ---------- */
const BASE = { industrie: ['agent', 'maitre-chien', 'rondes', 'incendie'], commerces: ['magasin', 'agent'], evenements: ['evenementiel', 'agent', 'incendie'], entreprises: ['agent', 'incendie', 'rondes'] };
function conseil(site, plage, priorite) {
  const s = new Set();
  const ajoute = (...ids) => ids.forEach((i) => s.add(i));
  if (priorite === 'acces') ajoute(site === 'evenements' ? 'evenementiel' : 'agent');
  if (priorite === 'perimetre') ajoute(site === 'commerces' ? 'agent' : 'maitre-chien', 'rondes');
  if (priorite === 'incendie') ajoute('incendie');
  if (priorite === 'vols') ajoute('magasin', 'agent');
  if (plage === 'nuit' && (site === 'industrie' || site === 'entreprises')) ajoute('rondes');
  if (plage === 'continu') ajoute('agent', 'rondes');
  BASE[site].slice(0, 2).forEach((i) => ajoute(i));
  return [...s];
}
function preparerDispositif() {
  const form = $('[data-dispositif]'), panneau = $('.dispositif-resultat'); if (!form || !panneau) return;
  const items = $$('[data-prestation]', panneau), lien = $('[data-dispositif-lien]', panneau);
  const base = lien.getAttribute('href').split('#')[0];
  const maj = () => {
    const v = Object.fromEntries(new FormData(form));
    const ids = conseil(v.site, v.plage, v.priorite);
    items.forEach((li) => { const on = ids.includes(li.dataset.prestation); li.classList.toggle('allume', on); $('.dl-etat', li).textContent = on ? 'Conseillé' : ''; });
    lien.href = `${base}?site=${v.site}&plage=${v.plage}&conseil=${ids.join(',')}#demande`;
  };
  form.addEventListener('change', maj);
  /* À l'entrée dans l'écran, les voyants balaient la liste puis se posent sur le conseil. */
  gsap.set(items, { opacity: 0.5 });
  gsap.set(panneau, { y: 40, opacity: 0 });
  ST.create({ trigger: panneau, start: 'top 85%', once: true, onEnter: () => {
    const tl = gsap.timeline();
    tl.to(panneau, { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' }, 0);
    items.forEach((li, i) => tl.call(() => li.classList.add('allume'), null, i * 0.09).call(() => li.classList.remove('allume'), null, i * 0.09 + 0.16));
    tl.to(items, { opacity: 1, duration: 0.4, stagger: 0.06 }, 0).call(maj, null, items.length * 0.09 + 0.2);
  } });
  maj();
}
function dispositifFinal() { gsap.set('.dispositif-liste [data-prestation]', { opacity: 1 }); gsap.set('.dispositif-resultat', { y: 0, opacity: 1 }); }

/* ---------- La ronde en quatre temps ---------- */
function preparerPointage() {
  const r = $('.ronde'); if (!r || !ST) return;
  const progres = $('.ronde-progres', r), points = $$('.ronde-point', r);
  ST.create({ trigger: r, start: 'top 78%', end: 'bottom 62%', scrub: 0.4, onUpdate: (st) => {
    const p = st.progress;
    if (progres) progres.style.strokeDashoffset = String(1 - p);
    r.style.setProperty('--p', p.toFixed(3));
    points.forEach((pt, i) => { if (p >= 0.1 + 0.25 * i) pt.classList.add('pointe'); });
  } });
}
function pointageFinal() { const p = $('.ronde-progres'); if (p) p.style.strokeDashoffset = '0'; $$('.ronde-point').forEach((pt) => pt.classList.add('pointe')); }

/* ---------- Plan, appel final, ouvertures intérieures ---------- */
function preparerPlans() {
  $$('.plan').forEach((plan) => {
    const point = $('.plan-point', plan); if (!point || point.hasAttribute('data-iris-centre')) return;
    gsap.set(point, { scale: 0 });
    ST.create({ trigger: plan, start: 'top 80%', once: true, onEnter: () => gsap.to(point, { scale: 1, duration: 0.7, ease: 'back.out(2)', delay: 0.5 }) });
  });
}
function plansFinal() { $$('.plan-point').forEach((p) => gsap.set(p, { scale: 1 })); }

function preparerBalayage() {
  $$('.fin').forEach((fin) => {
    const f = $('.fin-faisceau', fin); if (!f) return;
    gsap.fromTo(f, { x: () => -0.45 * window.innerWidth }, { x: () => 1.1 * window.innerWidth, ease: 'none', scrollTrigger: { trigger: fin, start: 'top bottom', end: 'bottom top', scrub: 0.5, invalidateOnRefresh: true } });
  });
}

function preparerOuvertures() {
  if (!ST) return;
  const fuite = $('.ouv-fuite-cadre');
  if (fuite) gsap.to(fuite, { scale: 1.22, ease: 'none', scrollTrigger: { trigger: '.ouv-fuite', start: 'top top', end: 'bottom top', scrub: 0.4 } });
  const vue = $('.ouv-vue-cadre');
  if (vue) gsap.fromTo(vue, { yPercent: -3 }, { yPercent: 4, ease: 'none', scrollTrigger: { trigger: '.ouv-vue', start: 'top top', end: 'bottom top', scrub: 0.4 } });
  const balai = $('.radar-balai');
  if (balai) {
    let angle = 0;
    boucle($('.radar'), (dt) => { angle = (angle + dt * 50) % 360; gsap.set(balai, { rotation: angle }); });
  }
  /* Valeurs et gestes : chaque ligne s'allume une fois, quand elle arrive à hauteur de lecture. */
  $$('.valeurs-mots li, .gestes-liste li').forEach((li) => ST.create({ trigger: li, start: 'top 72%', once: true, onEnter: () => li.classList.add('allume') }));
}
function ouverturesFinal() { $$('.valeurs-mots li, .gestes-liste li').forEach((li) => li.classList.add('allume')); }

/* ---------- Demande de devis : préremplie par l'adresse, module formulaire-par-etapes ---------- */
function preparerDevis() {
  const fpe = $('.fpe'); if (!fpe) return;
  const q = new URLSearchParams(location.search);
  const cocher = (nom, valeur) => { const i = fpe.querySelector(`input[name="${nom}"][value="${CSS.escape(valeur)}"]`); if (i) i.checked = true; };
  if (q.get('site')) cocher('site', q.get('site'));
  if (q.get('plage')) cocher('plage', q.get('plage'));
  (q.get('conseil') || q.get('prestation') || '').split(',').filter(Boolean).forEach((p) => cocher('prestations', p));
  initFormulaire(fpe, { sujet: 'Demande de devis LASP' }).catch((err) => console.error('[devis]', err));
  fpe.addEventListener('formulaire:envoye', () => {
    const fin = $('.fpe__fin', fpe);
    requestAnimationFrame(() => { if (fin) window.scrollTo({ top: window.scrollY + fin.getBoundingClientRect().top - (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--entete-h')) || 72) - 24 }); });
  });
}

function toutFinal() {
  faisceauFinal(); allumageFinal(); dispositifFinal(); pointageFinal(); plansFinal(); ouverturesFinal();
}

demarrer({
  preparer() {
    if (!gsap) return;
    const etapes = [preparerFaisceau, preparerSceau, preparerCadran, preparerAllumage, preparerRangee, preparerDispositif,
      preparerPointage, preparerPlans, preparerBalayage, preparerOuvertures, preparerDevis];
    etapes.forEach((f) => { try { f(); } catch (err) { console.error('[site]', f.name, err); } });
  },
  /* Intro (≈ 2,4 s) : le L rouge et le A bleu s'emboîtent, le monogramme glisse vers l'objet d'ouverture de la page
     (sceau de la lampe, point de fuite, radar, badge, agence sur le plan), le panneau s'ouvre en cercle de lumière,
     puis le titre monte ligne à ligne et, sur l'accueil, le faisceau balaie la cour (hors de la timeline). */
  jouer() {
    if (!gsap) return null;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.ouverture-mono .mono-l', { x: -46, opacity: 0 }, { x: 0, opacity: 1, duration: 0.55 }, 0.05)
      .fromTo('.ouverture-mono .mono-a', { x: 46, opacity: 0 }, { x: 0, opacity: 1, duration: 0.55 }, 0.15)
      .fromTo('.ouverture-trait', { scaleX: 0 }, { scaleX: 1, duration: 0.45 }, 0.3)
      .fromTo('.ouverture-ligne', { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35 }, 0.4)
      .to('.ouverture-trait, .ouverture-ligne', { opacity: 0, duration: 0.22 }, 0.82);
    versObjet(tl, { a: 0.95 });
    entree(tl, 1.42);
    if (F.hero) tl.call(balayer, null, 1.45);
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    const { h1, lignes, autres } = premierEcran();
    if (h1) { gsap.set(h1, { opacity: 1 }); h1.classList.add('vu'); }
    if (lignes.length) gsap.set(lignes, { yPercent: 0, y: 0 });
    if (autres.length) { gsap.set(autres, { y: 0, opacity: 1 }); autres.forEach((a) => a.classList.add('vu')); }
    toutFinal();
  },
  arrivee() {
    if (!gsap) return;
    entree(gsap.timeline({ delay: 0.12 }), 0);
    if (F.hero) balayer();
  },
});
