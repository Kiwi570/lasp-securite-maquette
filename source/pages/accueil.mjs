/* Accueil LASP : ouverture de nuit dans le faisceau d'une lampe, engagements autour du « 24/7 »,
   six prestations qui s'allument, secteurs en rangée, outil « votre dispositif », ronde en quatre temps,
   références et plan, appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { monogramme } from '../gabarits/commun.mjs';
import { surtitre, plan, references, fin, fleche, apercu } from '../gabarits/blocs.mjs';
import { icone } from '../gabarits/icones.mjs';

export const page = { cle: 'accueil', fichier: 'index' };

const segments = () => Array.from({ length: 24 }, (_, i) => {
  const a0 = (i / 24) * Math.PI * 2 - Math.PI / 2 + 0.03, a1 = ((i + 1) / 24) * Math.PI * 2 - Math.PI / 2 - 0.03;
  const p = (r, a) => `${(100 + r * Math.cos(a)).toFixed(2)} ${(100 + r * Math.sin(a)).toFixed(2)}`;
  return brut(`<path class="cadran-seg" d="M${p(92, a0)} A92 92 0 0 1 ${p(92, a1)} L${p(78, a1)} A78 78 0 0 0 ${p(78, a0)} Z"/>`);
});

/* Tracé de ronde : une onde douce qui passe exactement par le centre des quatre pastilles (x = 125, 375, 625, 875). */
const onde = () => Array.from({ length: 41 }, (_, i) => {
  const x = i * 25, y = 60 + 26 * Math.sin((2 * Math.PI * (x - 125)) / 500);
  return `${i ? 'L' : 'M'}${x} ${y.toFixed(1)}`;
}).join(' ');

export default (c) => {
  const T = (k) => c.t(`accueil.${k}`);
  const P = c.donnees.prestations, S = c.donnees.secteurs;
  return html`
<section class="hero s-nuit" id="debut" data-plein-ecran>
  ${apercu(c, 'grok/accueil-ouverture', '64% 55%')}
  ${c.media({ nom: 'grok/accueil-ouverture', alt: c.s('accueil.hero.alt'), cadrage: '64% 55%', cadrageMobile: '62% 50%', priorite: true, classe: 'hero-media' })}
  <div class="hero-nuit" aria-hidden="true" data-audit-ignorer></div>
  <div class="hero-faisceau" aria-hidden="true" data-effet="faisceau" data-souris data-grille="manipuler" data-audit-ignorer><span></span></div>
  <div class="conteneur hero-contenu">
    ${surtitre(T('hero.surtitre'), 'hero-surtitre')}
    <h1 class="hero-titre" data-anime="gsap"><span class="hero-masque"><span class="hero-ligne">${T('hero.ligne1')}</span></span><span class="hero-masque"><span class="hero-ligne">${T('hero.ligne2')}</span></span><span class="hero-masque"><span class="hero-ligne"><em>${T('hero.ligne3')}</em></span></span></h1>
    <p class="hero-texte masque-ecran-bas" data-anime="gsap">${T('hero.texte')}</p>
    <div class="hero-actions" data-anime="gsap">
      ${c.lien('devis', { ancre: 'demande', classe: 'bouton', texte: T('hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      ${c.lien('prestations', { classe: 'lien-fleche masque-ecran-tres-bas', texte: html`${T('hero.voir')} ${fleche()}` })}
    </div>
    <p class="hero-info" data-info-cle data-anime="gsap"><span class="pastille-live" aria-hidden="true"></span>${T('hero.info')}</p>
  </div>
  <div class="sceau" data-iris-centre="disque">
    <svg class="sceau-texte" viewBox="0 0 200 200" aria-hidden="true" focusable="false" data-effet="sceau" data-audit-ignorer>
      <defs><path id="sceau-cercle" d="M100 100 m-78 0 a78 78 0 1 1 156 0 a78 78 0 1 1 -156 0"/></defs>
      <text><textPath href="#sceau-cercle" textLength="482">${T('hero.sceau')}${T('hero.sceau')}</textPath></text>
    </svg>
    <span class="sceau-coeur">${monogramme(c, 'sceau-mono')}</span>
  </div>
</section>

<section class="engagements s-nuit" id="engagements">
  <div class="conteneur engagements-grille">
    <div class="cadran-col">
    <div class="cadran-bloc" data-visuel>
      <svg class="cadran" viewBox="0 0 200 200" data-effet="cadran" role="img" aria-label="${c.s('accueil.engagements.cadran')}">${segments()}${brut('<path class="cadran-maintenant" data-cadran-maintenant d=""/><g class="cadran-marque" data-cadran-marque><path d="M100 1.5 L106 10 L94 10 Z"/></g>')}</svg>
      <ul class="cadran-heures" aria-hidden="true"><li style="left:50%;top:19%">${T('engagements.h00')}</li><li style="left:81%;top:50%">${T('engagements.h06')}</li><li style="left:50%;top:81%">${T('engagements.h12')}</li><li style="left:19%;top:50%">${T('engagements.h18')}</li></ul>
      <p class="cadran-grand" aria-hidden="true">${T('engagements.grand')}</p>
    </div>
    <p class="cadran-heure" data-heure aria-live="off"><strong><span>${T('engagements.heure')}</span> <span data-heure-valeur>…</span> <span>${T('engagements.heureA')}</span></strong> ${T('engagements.heureTexte')}</p>
    </div>
    <div class="engagements-texte">
      ${surtitre(T('engagements.surtitre'))}
      <h2 data-anime="lignes">${T('engagements.titre')}</h2>
      <p class="intro" data-anime>${T('engagements.grandTexte')}</p>
      <ul class="engagements-liste" data-anime="cascade">${c.donnees.engagements.map((e) => html`<li>${icone(e.icone)}<strong>${e.titre}</strong><span>${e.texte}</span></li>`)}</ul>
    </div>
  </div>
</section>

<section class="prestations-accueil s-clair" id="prestations">
  <div class="conteneur">
    <div class="tete-section">
      ${surtitre(T('prestations.surtitre'))}
      <h2 data-anime="lignes">${T('prestations.titre1')}<br><em>${T('prestations.titre2')}</em></h2>
      <p class="intro" data-anime>${T('prestations.texte')}</p>
    </div>
    <ul class="cartes-prestations">${P.map((p) => html`<li class="carte-prestation">
      <a href="${c.url('prestations', p.id)}" data-libelle="${c.libelle('prestations')}" class="carte-lien" data-effet="allumage" data-survol="incline">
        ${c.media({ nom: p.image, alt: '', cadrage: p.cadrage, classe: 'carte-media', sizes: '(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 400px' })}
        <span class="carte-corps"><span class="carte-picto">${icone(p.id)}</span><span class="carte-qualif">${p.qualif}</span><span class="carte-titre">${p.titre}</span><span class="carte-court">${p.court}</span><span class="carte-voir">${T('prestations.voir')} ${fleche()}</span></span>
      </a>
    </li>`)}</ul>
    <p class="centre" data-anime>${c.lien('prestations', { classe: 'bouton bouton--contour', texte: T('prestations.tout') })}</p>
  </div>
</section>

<section class="secteurs-accueil s-nuit" id="secteurs">
  <div class="conteneur tete-section tete-section--ligne">
    <div>
      ${surtitre(T('secteurs.surtitre'))}
      <h2 data-anime="lignes">${T('secteurs.titre')}</h2>
    </div>
    <p class="intro" data-anime>${T('secteurs.texte')}</p>
  </div>
  <div class="rangee-fenetre" tabindex="0" role="region" aria-label="${c.s('accueil.secteurs.region')}">
    <ul class="rangee" data-galerie data-effet="rangee">${S.map((s) => html`<li class="carte-secteur">
      <a href="${c.url('secteurs', s.id)}" data-libelle="${c.libelle('secteurs')}">
        ${c.media({ nom: s.image, alt: '', classe: 'secteur-media', sizes: '(max-width: 760px) 78vw, 30vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
        <span class="secteur-corps"><span class="secteur-titre">${s.titre}</span><span class="secteur-court">${s.court}</span><span class="carte-voir">${T('secteurs.voir')} ${fleche()}</span></span>
      </a>
    </li>`)}</ul>
  </div>
</section>

<section class="dispositif s-clair" id="dispositif">
  <div class="conteneur dispositif-grille">
    <div class="dispositif-questions">
      ${surtitre(T('dispositif.surtitre'))}
      <h2 data-anime="lignes">${T('dispositif.titre')}</h2>
      <p class="intro" data-anime>${T('dispositif.texte')}</p>
      <form class="dispositif-form" data-dispositif action="${c.url('devis', 'demande')}" method="get">
        <fieldset><legend>${T('dispositif.q1')}</legend><div class="puces">${['industrie', 'commerces', 'evenements', 'entreprises'].map((k, i) => html`<label class="puce"><input type="radio" name="site" value="${k}"${i === 0 ? brut(' checked') : ''}><span>${T(`dispositif.site.${k}`)}</span></label>`)}</div></fieldset>
        <fieldset><legend>${T('dispositif.q2')}</legend><div class="puces">${['jour', 'nuit', 'continu'].map((k, i) => html`<label class="puce"><input type="radio" name="plage" value="${k}"${i === 1 ? brut(' checked') : ''}><span>${T(`dispositif.plage.${k}`)}</span></label>`)}</div></fieldset>
        <fieldset><legend>${T('dispositif.q3')}</legend><div class="puces">${['acces', 'perimetre', 'incendie', 'vols'].map((k, i) => html`<label class="puce"><input type="radio" name="priorite" value="${k}"${i === 1 ? brut(' checked') : ''}><span>${T(`dispositif.priorite.${k}`)}</span></label>`)}</div></fieldset>
      </form>
    </div>
    <div class="dispositif-resultat" data-visuel data-effet="dispositif">
      <p class="dispositif-titre">${T('dispositif.resultat')}</p>
      <ul class="dispositif-liste" aria-live="polite">${P.map((p) => html`<li data-prestation="${p.id}"><span class="voyant" aria-hidden="true"></span><span class="dl-titre">${p.titre}</span><span class="dl-etat"></span></li>`)}</ul>
      <div class="bande-24" data-bande aria-hidden="true">
        <p class="bande-titre">${T('dispositif.bande')} · <span data-bande-libelle>${T('dispositif.bandeNuit')}</span></p>
        <div class="bande-cases">${brut(Array.from({ length: 24 }, (_, h) => `<span data-h="${h}"></span>`).join(''))}</div>
        <div class="bande-reperes"><span>0 h</span><span>6 h</span><span>12 h</span><span>18 h</span><span>24 h</span></div>
      </div>
      <p class="dispositif-note">${T('dispositif.note')}</p>
      <a class="bouton" href="${c.url('devis', 'demande')}" data-libelle="${c.libelle('devis')}" data-dispositif-lien>${T('dispositif.action')}</a>
    </div>
  </div>
</section>

<section class="etapes s-nuit" id="etapes">
  <div class="conteneur">
    <div class="tete-section">
      ${surtitre(T('etapes.surtitre'))}
      <h2 data-anime="lignes">${T('etapes.titre')}</h2>
    </div>
    <div class="ronde" data-effet="pointage">
      <svg class="ronde-trace" viewBox="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true" data-visuel>${brut(`<path class="ronde-base" d="${onde()}"/><path class="ronde-progres" d="${onde()}" pathLength="1"/>`)}</svg>
      <ol class="ronde-points" data-visuel>${c.donnees.etapes.map((e, i) => html`<li class="ronde-point" style="--i:${i}"><span class="ronde-pastille" aria-hidden="true"><span>${i + 1}</span></span><h3>${e.titre}</h3><p>${e.texte}</p></li>`)}</ol>
    </div>
  </div>
</section>

<section class="confiance s-clair" id="confiance">
  <div class="conteneur confiance-grille">
    <div>
      ${surtitre(T('confiance.surtitre'))}
      <h2 data-anime="lignes">${T('confiance.titre')}</h2>
      ${references(c)}
    </div>
    <div class="confiance-zone">
      ${plan(c)}
      <h3 data-anime>${T('confiance.zoneTitre')}</h3>
      <p data-anime>${T('confiance.zoneTexte')}</p>
      <p data-anime>${c.lien('devis', { ancre: 'agence', classe: 'lien-fleche', texte: html`${T('confiance.itineraire')} ${fleche()}` })}</p>
    </div>
  </div>
</section>

${fin(c)}
`;
};
