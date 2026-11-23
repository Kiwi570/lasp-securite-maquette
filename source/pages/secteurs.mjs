/* Secteurs : la zone logistique vue d'en haut (la vue descend au défilement, un radar balaie),
   quatre secteurs reliés par un sommaire collant, références, appel final. */
import { html } from '../../outils/gabarit.mjs';
import { monogramme } from '../gabarits/commun.mjs';
import { surtitre, references, fin, fleche, apercu } from '../gabarits/blocs.mjs';

export const page = { cle: 'secteurs', fichier: 'secteurs' };

export default (c) => {
  const T = (k) => c.t(`secteurs.${k}`);
  const S = c.donnees.secteurs;
  const P = Object.fromEntries(c.donnees.prestations.map((p) => [p.id, p]));
  return html`
<section class="ouv-vue s-nuit" id="debut" data-plein-ecran>
  <div class="ouv-vue-cadre" data-effet="vue-descend">
    ${apercu(c, 'grok/secteurs-ouverture', '50% 60%')}
    ${c.media({ nom: 'grok/secteurs-ouverture', alt: c.s('secteurs.alt'), cadrage: '50% 60%', priorite: true, classe: 'ouv-vue-media' })}
  </div>
  <div class="conteneur ouv-vue-contenu">
    ${surtitre(T('surtitre'), 'ouv-surtitre')}
    <h1 class="ouv-titre" data-anime="gsap"><span class="hero-masque"><span class="hero-ligne">${T('titre1')}</span></span><span class="hero-masque"><span class="hero-ligne"><em>${T('titre2')}</em></span></span></h1>
    <p class="ouv-texte masque-ecran-bas" data-anime="gsap">${T('texte')}</p>
    <div class="ouv-actions" data-anime="gsap">
      <a class="bouton" href="#industrie" data-action-principale>${S[0].titre}</a>
      <p class="hero-info" data-info-cle>${T('info')}</p>
    </div>
  </div>
  <div class="radar" data-iris-centre="disque" aria-hidden="true"><span class="radar-balai" data-effet="radar"></span>${monogramme(c, 'radar-mono')}</div>
</section>

<nav class="onglets s-clair" aria-label="${c.s('secteurs.onglets')}" data-sommaire>
  <ul class="conteneur">${S.map((s) => html`<li><a href="#${s.id}">${s.titre}</a></li>`)}</ul>
</nav>

${S.map((s, i) => html`<section class="secteur s-clair${i % 2 ? ' secteur--inverse' : ''}" id="${s.id}">
  <div class="conteneur secteur-grille">
    <div class="secteur-visuel" data-vigilance>
      ${c.media({ nom: s.image, alt: s.titre, classe: 'secteur-grand-media', sizes: '(max-width: 760px) 100vw, 40vw', attrs: 'data-anime="rideau"' })}
      ${s.points.map(([x, y], k) => html`<span class="vigie" style="left:${x}%;top:${y}%" data-vigie="${k}" data-effet="vigilance" aria-hidden="true" data-superpose><span>${k + 1}</span></span>`)}
    </div>
    <div class="secteur-texte">
      ${surtitre(s.court)}
      <h2 data-anime="lignes">${s.titre}</h2>
      <p class="intro" data-anime>${s.texte}</p>
      <div class="secteur-colonnes">
        <div>
          <h3>${T('besoins')}</h3>
          <ol class="vigilance-liste" data-anime="cascade">${s.besoins.map((b, k) => html`<li data-vigie-lien="${k}"><span class="vl-num" aria-hidden="true">${k + 1}</span>${b}</li>`)}</ol>
          <p class="vigilance-note">${T('vigilance')}</p>
        </div>
        <div>
          <h3>${T('conseille')}</h3>
          <ul class="jetons">${s.prestations.map((id) => html`<li>${c.lien('prestations', { ancre: id, texte: P[id].titre, classe: 'jeton' })}</li>`)}</ul>
        </div>
      </div>
      <p>${c.lien('devis', { ancre: 'demande', params: `site=${s.id}`, classe: 'bouton', texte: T('devis') })}</p>
    </div>
  </div>
</section>`)}

<section class="refs-bande s-nuit" id="references">
  <div class="conteneur refs-grille">
    <div>
      ${surtitre(T('refsTitre'))}
      <h2 data-anime="lignes">${T('refsTexte')}</h2>
    </div>
    ${references(c, 'refs--nuit')}
  </div>
</section>

${fin(c)}
`;
};
