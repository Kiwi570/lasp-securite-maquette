/* L'agence : ouverture scindée (texte, deux agents au crépuscule, monogramme), valeurs qui s'allument une à une,
   engagements, moyens dessinés au trait, qualifications, images « en tenue LASP », plan, appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { monogramme } from '../gabarits/commun.mjs';
import { surtitre, plan, fin, apercu } from '../gabarits/blocs.mjs';
import { icone, ecusson } from '../gabarits/icones.mjs';

export const page = { cle: 'agence', fichier: 'agence' };

const ICONES = {
  pti: '<rect x="32" y="22" width="36" height="58" rx="9"/><circle cx="50" cy="44" r="9"/><path d="M44 64h12M44 70h12M68 34h6v16h-6M41 22V12h8"/>',
  radio: '<rect x="33" y="30" width="34" height="56" rx="7"/><path d="M42 30V8M40 44h20M40 50h20M40 56h20"/><circle cx="50" cy="72" r="5"/><path d="M60 30v-6h6"/>',
  vehicule: '<path d="M8 72V42h52l16 16 14 3v11H8z"/><path d="M60 42v16h16M30 42v16"/><circle cx="26" cy="74" r="8"/><circle cx="74" cy="74" r="8"/>',
};

export default (c) => {
  const T = (k) => c.t(`agence.${k}`);
  const L = c.donnees.listes;
  return html`
<section class="ouv-agence s-nuit" id="debut">
  <div class="conteneur ouv-agence-grille">
    <div class="ouv-agence-texte">
      ${surtitre(T('surtitre'), 'ouv-surtitre')}
      <h1 class="ouv-titre" data-anime="gsap"><span class="hero-masque"><span class="hero-ligne">${T('titre1')}</span></span><span class="hero-masque"><span class="hero-ligne"><em>${T('titre2')}</em></span></span></h1>
      <p class="ouv-texte masque-ecran-bas" data-anime="gsap">${T('texte')}</p>
      <div class="ouv-actions" data-anime="gsap">
        ${c.lien('devis', { ancre: 'demande', classe: 'bouton', texte: c.t('commun.actionEntete'), attrs: 'data-action-principale' })}
        <p class="hero-info" data-info-cle>${T('info')}</p>
      </div>
    </div>
    <div class="ouv-agence-visuel">
      ${apercu(c, 'grok/agence-ouverture', '70% 50%')}
      ${c.media({ nom: 'grok/agence-ouverture', alt: c.s('agence.alt'), cadrage: '70% 50%', cadrageMobile: '72% 50%', priorite: true, classe: 'ouv-agence-media', sizes: '(max-width: 760px) 100vw, 55vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })}
      <span class="badge-mono" data-iris-centre="disque" aria-hidden="true">${monogramme(c, 'badge-mono-svg')}</span>
    </div>
  </div>
</section>

<section class="valeurs s-clair" id="valeurs">
  <div class="conteneur valeurs-grille">
    <div>
      ${surtitre(T('valeursTitre'))}
      <p class="intro" data-anime>${T('valeursTexte')}</p>
    </div>
    <ul class="valeurs-mots" data-visuel>${L.valeurs.map((v) => html`<li data-effet="valeurs">${v}</li>`)}</ul>
  </div>
</section>

<section class="engagements-agence s-nuit" id="engagements">
  <div class="conteneur">
    <div class="tete-section">
      ${surtitre(T('engagementsTitre'))}
      <h2 data-anime="lignes">${c.t('accueil.engagements.titre')}</h2>
    </div>
    <ul class="engagements-cartes" data-anime="cascade" data-visuel>${c.donnees.engagements.map((e, i) => html`<li><span class="ec-tete"><span class="ec-num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>${icone(e.icone, 'picto ec-picto')}</span><strong>${e.titre}</strong><span>${e.texte}</span></li>`)}</ul>
  </div>
</section>

<section class="moyens s-clair" id="moyens">
  <div class="conteneur">
    <div class="tete-section tete-section--ligne">
      <div>${surtitre(T('moyensSurtitre'))}<h2 data-anime="lignes">${T('moyensTitre')}</h2><p class="intro" data-anime>${T('moyensTexte')}</p></div>
    </div>
    <ul class="moyens-liste">${['pti', 'radio', 'vehicule'].map((k) => html`<li class="moyen">
      <svg class="moyen-icone" viewBox="0 0 100 100" aria-hidden="true" focusable="false" data-fx="trace" data-visuel>${brut(ICONES[k])}</svg>
      <h3>${T(`moyens.${k}.titre`)}</h3><p>${T(`moyens.${k}.texte`)}</p>
    </li>`)}</ul>
  </div>
</section>

<section class="qualifs s-nuit" id="qualifications">
  <div class="conteneur qualifs-grille">
    <div>${surtitre(T('qualifsSurtitre'))}<h2 data-anime="lignes">${T('qualifsTitre')}</h2></div>
    <ul class="qualifs-liste">${L.qualifs.map((q) => html`<li><span class="qualif-ecusson" data-fx="trace" data-visuel>${ecusson()}</span><span class="qualif-sigle" data-anime>${q.sigle}</span><span data-anime>${q.texte}</span></li>`)}</ul>
  </div>
</section>

<section class="tenue s-clair" id="tenue">
  <div class="conteneur">
    <div class="tete-section tete-section--ligne">
      <div>${surtitre(T('tenueSurtitre'))}<h2 data-anime="lignes">${T('tenueTitre')}</h2><p class="intro" data-anime>${T('tenueTexte')}</p></div>
    </div>
    <ul class="tenue-trio" data-anime="cascade">
      <li>${c.media({ nom: 'lasp-incendie', alt: 'Agent LASP en polo rouge de sécurité incendie', cadrage: '45% 40%', classe: 'tenue-media', sizes: '(max-width: 760px) 100vw, 33vw' })}</li>
      <li>${c.media({ nom: 'lasp-evenementiel', alt: 'Agent LASP face au public d’un concert', cadrage: '50% 40%', classe: 'tenue-media', sizes: '(max-width: 760px) 100vw, 33vw' })}</li>
      <li>${c.media({ nom: 'lasp-maitre-chien', alt: 'Maître-chien LASP et son chien, la nuit', cadrage: '55% 45%', classe: 'tenue-media', sizes: '(max-width: 760px) 100vw, 33vw' })}</li>
    </ul>
  </div>
</section>

<section class="lieu s-nuit" id="lieu">
  <div class="conteneur lieu-grille">
    <div>
      ${surtitre(T('lieuTitre'))}
      <h2 data-anime="lignes">${c.t('accueil.confiance.zoneTitre')}</h2>
      <p data-anime>${c.t('accueil.confiance.zoneTexte')}</p>
    </div>
    ${plan(c, { classe: 'plan--nuit' })}
  </div>
</section>

${fin(c)}
`;
};
