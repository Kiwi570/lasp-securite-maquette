/* Effets propres à LASP Sécurité (direction « Ronde de nuit »). Le socle gère l'ouverture, le voile en iris,
   l'en-tête, le menu, les mesures et la bibliothèque d'effets (lignes, cascade, rideau, parallaxe, trace).
   Effets du plan, chacun marqué data-effet="nom" :
   faisceau (lampe qui balaie l'ouverture, suit la souris, descend au défilement), sceau (tourne au défilement),
   cadran (24 segments qui s'allument), allumage (cartes qui s'allument), rangee (secteurs qui glissent),
   dispositif (outil, voyants qui balaient puis se posent), pointage (ronde en quatre temps), carte (plan qui pulse),
   balayage (faisceau de l'appel final), point-de-fuite, vue-descend, radar, valeurs, gestes, trace-ville. */
import { demarrer, boucle, versObjet } from './socle/index.js?v=2';
import { init as initFormulaire } from './modules/formulaire-par-etapes/module.js?v=2';

const gsap = window.gsap;
const ST = window.ScrollTrigger;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const souris = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const borne = (v, a, b) => Math.min(b, Math.max(a, v));

/* ---------- Faisceau : la lampe de la ronde (accueil et 404) ----------
   Un voile de nuit percé d'un halo (translation seule) et un cône de lumière (rotation et étirement) partent d'une origine
   (le sceau de l'accueil, le coin bas de la 404). Il balaie seul tant que la souris ne l'a pas pris ; sur ordinateur il suit
   la souris et s'arrête avec elle ; sur écran tactile, toucher la photo l'y dirige. Une pluie fine n'est visible que dans le cône. */
const lampes = [];
function creerLampe(section, { origine, repos, pluie = true }) {
  const L = { section, nuit: $('.hero-nuit', section), cone: $('.hero-faisceau', section), W: 0, H: 0, ox: 0, oy: 0, base: 1,
    repos: { x: 0, y: 0 }, p: { x: 0, y: 0 }, descente: 0, pret: false, suit: false, angle: 0, longueur: 0, pluie: null };
  const mesurer = () => {
    const r = section.getBoundingClientRect();
    L.W = r.width; L.H = r.height; L.base = Math.max(window.innerWidth, window.innerHeight);
    const o = origine(r); L.ox = o.x; L.oy = o.y;
    L.repos = repos(r);
  };
  const rendre = () => {
    const x = L.p.x, y = L.p.y + L.descente;
    gsap.set(L.nuit, { x: x - L.W / 2, y: y - L.H / 2 });
    const dx = x - L.ox, dy = y - L.oy, d = Math.hypot(dx, dy);
    L.angle = Math.atan2(dy, dx); L.longueur = d * 1.12;
    gsap.set(L.cone, { x: L.ox, y: L.oy, rotation: (L.angle * 180) / Math.PI, scaleX: Math.max(0.05, L.longueur / L.base) });
  };
  L.mesurer = mesurer; L.rendre = rendre;
  mesurer(); L.p = { ...L.repos }; rendre();
  const qx = gsap.quickTo(L.p, 'x', { duration: 0.9, ease: 'power3.out', onUpdate: rendre });
  const qy = gsap.quickTo(L.p, 'y', { duration: 0.9, ease: 'power3.out', onUpdate: rendre });
  const viser = (x, y) => { qx(borne(x, L.W * 0.06, L.W * 0.96)); qy(borne(y - L.descente, L.H * 0.1, L.H * 0.94)); };
  ST && ST.create({ trigger: section, start: 'top top', end: 'bottom top', scrub: 0.4, onUpdate: (st) => { L.descente = st.progress * L.H * 0.35; rendre(); } });
  window.addEventListener('resize', () => { mesurer(); rendre(); });
  if (souris) {
    section.addEventListener('pointermove', (e) => {
      if (!L.pret || e.pointerType !== 'mouse') return;
      const r = section.getBoundingClientRect();
      L.suit = true; viser(e.clientX - r.left, e.clientY - r.top);
    });
    /* La souris quitte la photo : l'agent reprend sa ronde. */
    section.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') L.suit = false; });
  }
  /* Écran tactile : toucher la photo y dirige la lampe, qui reprend sa ronde 3,5 s plus tard. */
  let reprise = 0;
  section.addEventListener('pointerdown', (e) => {
    if (!L.pret || e.pointerType === 'mouse' || e.target.closest('a, button, input, label')) return;
    const r = section.getBoundingClientRect();
    L.suit = true; viser(e.clientX - r.left, e.clientY - r.top);
    clearTimeout(reprise); reprise = setTimeout(() => { L.suit = false; }, 3500);
  });
  /* Ronde lente tant que personne ne tient la lampe (boucle arrêtée hors écran et onglet caché). */
  let t0 = null;
  /* Une boucle par élément (le socle en garde une seule par élément) : la ronde sur le voile, la pluie sur sa toile. */
  boucle(L.nuit, (dt, t) => {
    if (!L.pret || L.suit) return;
    if (t0 === null) t0 = t;
    const u = t - t0, amorce = Math.min(1, u / 1.5), tel = L.W < 761;
    viser(L.repos.x + Math.sin(u * 0.42) * L.W * (tel ? 0.26 : 0.16) * amorce, L.repos.y + L.descente + Math.sin(u * 0.29) * L.H * 0.07 * amorce);
  });
  if (pluie) L.pluie = creerPluie(L);
  L.balayer = () => {
    mesurer(); L.p.x = L.W * 0.08; L.p.y = L.H * 0.78;
    gsap.to(L.cone, { opacity: 1, duration: 0.35, ease: 'power1.out' });
    gsap.to(L.p, { x: L.repos.x, y: L.repos.y, duration: 1.25, ease: 'power2.inOut', onUpdate: rendre, onComplete: () => { L.pret = true; } });
  };
  L.final = () => { mesurer(); L.p.x = L.repos.x; L.p.y = L.repos.y; L.pret = true; gsap.set(L.cone, { opacity: 1 }); rendre(); };
  lampes.push(L);
  return L;
}

/* Pluie fine : des traits obliques qui tombent partout, mais qu'on ne voit que dans le cône de la lampe. */
function creerPluie(L) {
  const toile = document.createElement('canvas');
  toile.className = 'hero-pluie'; toile.setAttribute('aria-hidden', 'true');
  toile.setAttribute('data-effet', 'pluie'); toile.setAttribute('data-audit-ignorer', '');
  L.cone.after(toile);
  const ctx = toile.getContext('2d');
  let gouttes = [];
  const dimensionner = () => {
    toile.width = Math.round(L.W); toile.height = Math.round(L.H);
    const n = L.W < 761 ? 100 : 210;
    gouttes = Array.from({ length: n }, () => ({ x: Math.random() * L.W, y: Math.random() * L.H, v: 620 + Math.random() * 420, l: 9 + Math.random() * 12 }));
  };
  dimensionner();
  window.addEventListener('resize', dimensionner);
  const demi = (17 * Math.PI) / 180, vent = -0.16;
  boucle(toile, (dt) => {
    if (!gsap.getProperty(L.cone, 'opacity')) return;
    ctx.clearRect(0, 0, toile.width, toile.height);
    ctx.lineWidth = 1.5; ctx.lineCap = 'round';
    const pas = Math.min(dt, 0.05);
    for (const g of gouttes) {
      g.y += g.v * pas; g.x += g.v * pas * vent;
      if (g.y > L.H + 20) { g.y = -20; g.x = Math.random() * L.W * 1.15; }
      const dx = g.x - L.ox, dy = g.y - L.oy, d = Math.hypot(dx, dy);
      if (d > L.longueur || d < 30) continue;
      let ecart = Math.abs(Math.atan2(dy, dx) - L.angle); if (ecart > Math.PI) ecart = 2 * Math.PI - ecart;
      if (ecart > demi) continue;
      const a = Math.min(1, (1 - ecart / demi) * (1.15 - d / L.longueur) * 0.95);
      ctx.strokeStyle = `rgba(255, 244, 222, ${a.toFixed(3)})`;
      ctx.beginPath(); ctx.moveTo(g.x, g.y); ctx.lineTo(g.x - g.l * vent, g.y - g.l); ctx.stroke();
    }
  });
  return toile;
}

function preparerLampes() {
  const hero = $('.hero');
  if (hero) {
    const sceau = $('.sceau', hero);
    creerLampe(hero, {
      origine: (r) => { const s = sceau.getBoundingClientRect(); return { x: s.left - r.left + s.width / 2, y: s.top - r.top + s.height / 2 }; },
      repos: (r) => (r.width < 761 ? { x: r.width * 0.42, y: r.height * 0.42 } : { x: r.width * 0.6, y: r.height * 0.48 }),
    });
  }
  const s404 = $('.ouv-404');
  if (s404) {
    const spot = $('.spot-404', s404);
    creerLampe(s404, {
      origine: (r) => ({ x: r.width * 0.97, y: r.height * 1.04 }),
      repos: (r) => { const b = spot.getBoundingClientRect(); return b.width ? { x: b.left - r.left + b.width / 2, y: b.top - r.top + b.height / 2 } : { x: r.width * 0.5, y: r.height * 0.4 }; },
    });
  }
}
const balayer = () => lampes.forEach((L) => L.balayer());
const lampesFinal = () => lampes.forEach((L) => L.final());

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
    majBande(form);
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
    points.forEach((pt, i) => {
      if (p >= 0.1 + 0.25 * i && !pt.classList.contains('pointe')) { pt.classList.add('pointe', 'bip'); setTimeout(() => pt.classList.remove('bip'), 950); }
    });
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


/* ---------- v2 : heure de Lyon, bande des 24 h, numéros, vigilance, lumière du titre, tampon, fil ---------- */
function heureLyon() {
  const parts = new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date());
  const v = (t) => +(parts.find((p) => p.type === t) || { value: 0 }).value;
  return { h: v('hour') % 24, m: v('minute') };
}
function preparerHeure() {
  const c = $('.cadran'); if (!c) return;
  const segs = $$('.cadran-seg', c), maintenant = $('[data-cadran-maintenant]', c), marque = $('[data-cadran-marque]', c), val = $('[data-heure-valeur]');
  const maj = () => {
    const { h, m } = heureLyon();
    if (val) val.textContent = `${h} h ${String(m).padStart(2, '0')}`;
    if (maintenant && segs[h]) { maintenant.setAttribute('d', segs[h].getAttribute('d')); maintenant.classList.add('actif'); }
    if (marque) marque.setAttribute('transform', `rotate(${(((h + m / 60) / 24) * 360).toFixed(2)} 100 100)`);
  };
  maj(); setInterval(maj, 30000);
}

const PLAGES = { jour: (h) => h >= 7 && h < 19, nuit: (h) => h >= 19 || h < 7, continu: () => true };
function majBande(form) {
  const bande = $('[data-bande]'); if (!bande || !form) return;
  const plage = (form.querySelector('input[name="plage"]:checked') || {}).value || 'nuit';
  const lib = form.querySelector('input[name="plage"]:checked + span');
  $$('[data-h]', bande).forEach((c, i) => setTimeout(() => c.classList.toggle('on', PLAGES[plage](+c.dataset.h)), i * 14));
  const l = $('[data-bande-libelle]', bande); if (l && lib) l.textContent = lib.textContent;
}

function preparerNumeros() {
  $$('.rp-numero').forEach((n) => gsap.fromTo(n, { yPercent: 22 }, { yPercent: -22, ease: 'none', scrollTrigger: { trigger: n.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.5 } }));
}

/* Secteurs : les points de vigilance se posent un à un sur la photo, puis la ronde les allume dans l'ordre ;
   survoler ou toucher une ligne de la liste allume son point. */
function preparerVigilance() {
  $$('[data-vigilance]').forEach((v) => {
    const sec = v.closest('section'), pins = $$('.vigie', v), items = $$('[data-vigie-lien]', sec);
    pins.forEach((p, k) => p.style.setProperty('--k', k));
    const allumer = (k, on) => { pins[k] && pins[k].classList.toggle('actif', on); items[k] && items[k].classList.toggle('actif', on); };
    items.forEach((li, k) => {
      li.addEventListener('pointerenter', () => allumer(k, true));
      li.addEventListener('pointerleave', () => allumer(k, false));
      li.addEventListener('click', () => { pins.forEach((_, j) => allumer(j, j === k)); });
    });
    gsap.set(pins, { scale: 0 });
    ST.create({ trigger: v, start: 'top 70%', once: true, onEnter: () => {
      const tl = gsap.timeline({ delay: 0.55 });
      tl.to(pins, { scale: 1, duration: 0.5, stagger: 0.16, ease: 'back.out(2.4)' });
      pins.forEach((_, k) => tl.call(() => allumer(k, true), null, 0.75 + k * 0.42).call(() => allumer(k, false), null, 1.1 + k * 0.42));
    } });
  });
}
function vigilanceFinal() { $$('.vigie').forEach((p) => gsap.set(p, { scale: 1 })); }

function preparerLumiereTitre() {
  $$('.fin').forEach((fin) => {
    const l = $('.fin-lumiere', fin); if (!l) return;
    gsap.fromTo(l, { '--lum': 0.92 }, { '--lum': 0.08, ease: 'none', scrollTrigger: { trigger: fin, start: 'top 85%', end: 'bottom 35%', scrub: 0.6 } });
  });
}

/* Fil de la ronde : un point de pointage par section, allumé à mesure de la lecture (grands écrans). */
function preparerFil() {
  const nav = $('.fil-ronde'); if (!nav || !ST) return;
  const sections = $$('main > section[id]');
  if (sections.length < 3) { nav.remove(); return; }
  const ol = $('ol', nav), aller = nav.dataset.fil || '';
  const liens = sections.map((sec) => {
    const nom = ((sec.querySelector('.surtitre') || sec.querySelector('h1, h2') || {}).textContent || sec.id).trim();
    const li = document.createElement('li'), a = document.createElement('a'), sp = document.createElement('span');
    a.href = `#${sec.id}`; a.setAttribute('aria-label', `${aller} ${nom}`); sp.textContent = nom; sp.setAttribute('aria-hidden', 'true');
    a.append(sp); li.append(a); ol.append(li);
    return a;
  });
  ST.create({ start: 0, end: 'max', onUpdate: (st) => ol.style.setProperty('--p', st.progress.toFixed(3)) });
  sections.forEach((sec, i) => ST.create({ trigger: sec, start: 'top 55%', end: 'bottom 55%',
    onToggle: (st) => { if (st.isActive) liens.forEach((a, j) => { a.classList.toggle('actuel', j === i); a.classList.toggle('passe', j < i); }); } }));
}

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
    const fin = $('.fpe__fin', fpe), tampon = $('.tampon', fpe), carton = $('.fpe__carton', fpe);
    if (tampon) gsap.fromTo(tampon, { scale: 2.6, rotation: -26, opacity: 0 }, { scale: 1, rotation: -8, opacity: 1, duration: 0.42, ease: 'power4.in', delay: 0.2,
      onComplete: () => carton && gsap.fromTo(carton, { y: 0 }, { y: 5, duration: 0.06, yoyo: true, repeat: 1, ease: 'power1.out' }) });
    requestAnimationFrame(() => { if (fin) window.scrollTo({ top: window.scrollY + fin.getBoundingClientRect().top - (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--entete-h')) || 72) - 24 }); });
  });
}

function toutFinal() {
  lampesFinal(); vigilanceFinal(); allumageFinal(); dispositifFinal(); pointageFinal(); plansFinal(); ouverturesFinal();
}

demarrer({
  preparer() {
    if (!gsap) return;
    const etapes = [preparerLampes, preparerSceau, preparerCadran, preparerHeure, preparerAllumage, preparerRangee, preparerDispositif,
      preparerPointage, preparerPlans, preparerBalayage, preparerOuvertures, preparerDevis, preparerNumeros, preparerVigilance, preparerLumiereTitre, preparerFil];
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
    if (lampes.length) tl.call(balayer, null, 1.45);
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
    if (lampes.length) balayer();
  },
});
