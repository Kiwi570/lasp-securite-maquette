/* Prestations : un agent s'éloigne au point de fuite d'un parking souterrain, puis les six métiers
   en grandes rangées photo et texte, la bande des cinq gestes, l'appel final. */
import { html } from '../../outils/gabarit.mjs';
import { surtitre, fin, fleche, apercu } from '../gabarits/blocs.mjs';

export const page = { cle: 'prestations', fichier: 'prestations' };

export default (c) => {
  const T = (k) => c.t(`prestations.${k}`);
  const P = c.donnees.prestations;
  return html`
<section class="ouv-fuite s-nuit" id="debut" data-plein-ecran>
  <div class="ouv-fuite-cadre" data-effet="point-de-fuite">
    ${apercu(c, 'grok/prestations-ouverture')}
    ${c.media({ nom: 'grok/prestations-ouverture', alt: c.s('prestations.alt'), cadrage: '50% 50%', priorite: true, classe: 'ouv-fuite-media' })}
  </div>
  <span class="fuite-point" data-iris-centre="disque" aria-hidden="true"><span></span></span>
  <div class="conteneur ouv-fuite-contenu">
    ${surtitre(T('surtitre'), 'ouv-surtitre')}
    <h1 class="ouv-titre" data-anime="gsap"><span class="hero-masque"><span class="hero-ligne">${T('titre1')}</span></span><span class="hero-masque"><span class="hero-ligne">${T('titre2')}</span></span><span class="hero-masque"><span class="hero-ligne"><em>${T('titre3')}</em></span></span></h1>
    <p class="ouv-texte masque-ecran-bas" data-anime="gsap">${T('texte')}</p>
    <div class="ouv-actions" data-anime="gsap">
      ${c.lien('devis', { ancre: 'demande', classe: 'bouton', texte: T('devis'), attrs: 'data-action-principale' })}
      <p class="hero-info" data-info-cle>${T('info')}</p>
    </div>
  </div>
</section>

<nav class="sommaire-prestations s-clair" aria-label="${c.s('prestations.sommaire')}">
  <ul class="conteneur" data-anime="cascade">${P.map((p, i) => html`<li><a href="#${p.id}"><span class="sp-num">${String(i + 1).padStart(2, '0')}</span>${p.titre}</a></li>`)}</ul>
</nav>

${P.map((p, i) => html`<section class="rangee-prestation s-clair${i % 2 ? ' rangee-prestation--inverse' : ''}" id="${p.id}">
  <div class="conteneur rp-grille">
    ${c.media({ nom: p.image, alt: c.s('prestations.missions') + ' : ' + p.titre, cadrage: p.cadrage, classe: 'rp-media', sizes: '(max-width: 760px) 100vw, 50vw', attrs: 'data-anime="rideau"' })}
    <div class="rp-texte">
      ${surtitre(p.qualif)}
      <h2 data-anime="lignes">${p.titre}</h2>
      <p class="rp-court">${p.court}</p>
      <p data-anime>${p.texte}</p>
      <ul class="coches" data-anime="cascade">${p.points.map((x) => html`<li>${x}</li>`)}</ul>
      <p>${c.lien('devis', { ancre: 'demande', params: `prestation=${p.id}`, classe: 'lien-fleche', texte: html`${T('devis')} : ${p.titre} ${fleche()}` })}</p>
    </div>
  </div>
</section>`)}

<section class="gestes s-nuit" id="gestes">
  <div class="conteneur gestes-grille">
    <div>
      ${surtitre(T('dispositifsTitre'))}
      <h2 data-anime="lignes">${T('dispositifsTexte')}</h2>
    </div>
    <ol class="gestes-liste" data-visuel>${c.donnees.listes.dispositifs.map((d, i) => html`<li style="--i:${i}" data-effet="gestes"><span class="geste-trait" aria-hidden="true"></span>${d}</li>`)}</ol>
  </div>
</section>

${fin(c)}
`;
};
