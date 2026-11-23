/* Blocs partagés par les pages LASP : en-tête de section, appel final, plan de Lyon, références. */
import { html, brut } from '../../outils/gabarit.mjs';
import { monogramme } from './commun.mjs';

/* Aperçu flou (20 px) de l'image d'ouverture, sous la figure : au retour arrière ou avant, l'image passe du flou au net
   au lieu d'une case unie (leçon matchyourtrip). Version téléphone dans --flou-m. */
export const apercu = (c, nom, cadrage = '50% 50%') => {
  const a = c.donnees.apercus[nom];
  return a ? brut(`<div class="apercu-flou" aria-hidden="true" data-audit-ignorer style="--flou:url(${a.d});--flou-m:url(${a.m});--cadrage:${cadrage}"></div>`) : '';
};

/* Surtitre en mono, avec un point rouge. */
export const surtitre = (texte, classe = '') => html`<p class="surtitre ${classe}">${texte}</p>`;

/* Plan schématique de Lyon : Saône et Rhône qui se tracent, 9e arrondissement, agence qui pulse. */
export function plan(c, { classe = '', iris = false, effet = 'carte' } = {}) {
  return html`<figure class="plan ${classe}" data-visuel role="img" aria-label="${c.s('commun.plan')}">
  <svg viewBox="0 0 400 300" aria-hidden="true" focusable="false" data-fx="trace">
    <rect class="plan-fond" x="0" y="0" width="400" height="300" rx="14"/>
    <g class="plan-grille">${brut(Array.from({ length: 9 }, (_, i) => `<line x1="${(i + 1) * 40}" y1="0" x2="${(i + 1) * 40}" y2="300"/>`).join('') + Array.from({ length: 6 }, (_, i) => `<line x1="0" y1="${(i + 1) * 43}" x2="400" y2="${(i + 1) * 43}"/>`).join(''))}</g>
    <path class="plan-zone" d="M44 52 L132 34 L150 92 L138 150 L104 176 L52 160 L30 104 Z"/>
    <path class="plan-eau" data-fx-trait d="M128 6 C 136 46, 112 78, 140 118 S 176 200, 196 262 L 204 300"/>
    <path class="plan-eau" data-fx-trait d="M394 34 C 330 70, 268 104, 240 156 S 210 236, 196 262"/>
    <path class="plan-route" data-fx-trait d="M96 128 C 150 140, 190 150, 236 168"/>
    <text class="plan-nom" x="148" y="44">Saône</text>
    <text class="plan-nom" x="318" y="118">Rhône</text>
    <text class="plan-nom plan-nom--zone" x="50" y="196">Lyon 9e</text>
  </svg>
  <span class="plan-point" style="left:24%;top:42.6%"${brut(iris ? ' data-iris-centre="disque"' : '')}><span class="plan-onde" data-effet="${effet}"></span><span class="plan-onde plan-onde--2"></span>${monogramme(c, 'plan-mono')}</span>
  <figcaption class="plan-legende"><strong>LASP</strong> · 203 rue Marcel Cerdan</figcaption>
</figure>`;
}

/* Références citées sur le site actuel (noms seuls). */
export const references = (c, classe = '') => html`<ul class="refs ${classe}" data-anime="cascade">${c.donnees.listes.references.map((r) => html`<li>${r}</li>`)}</ul>`;

/* Appel final de chaque page (nuit) : le faisceau repasse sur le titre. */
export function fin(c, { id = 'fin', params = '' } = {}) {
  const k = c.site.contact;
  return html`<section class="fin s-nuit" id="${id}">
  <div class="fin-decor" data-visuel aria-hidden="true">${monogramme(c, 'fin-mono')}<span class="fin-faisceau" data-effet="balayage"></span></div>
  <div class="conteneur fin-contenu">
    <div class="fin-titre-bloc" data-anime>
      <h2 class="fin-titre">${c.t('commun.finTitre1')}<br><em>${c.t('commun.finTitre2')}</em></h2>
      <p class="fin-titre fin-lumiere" aria-hidden="true" data-audit-ignorer data-effet="lumiere-titre" data-grille="typo">${c.t('commun.finTitre1')}<br><em>${c.t('commun.finTitre2')}</em></p>
    </div>
    <p class="fin-texte" data-anime>${c.t('commun.finTexte')}</p>
    <div class="fin-actions" data-anime>
      ${c.lien('devis', { ancre: 'demande', params, classe: 'bouton', texte: c.t('commun.finDevis'), attrs: 'data-survol="magnetique"' })}
      <p class="fin-tel">${c.t('commun.ou')} <a href="tel:${k.telephoneLien}">${k.telephone}</a> · <a href="tel:${k.telephone2Lien}">${k.telephone2}</a></p>
    </div>
  </div>
</section>`;
}

/* Petite icône de flèche. */
export const fleche = () => brut('<svg class="fleche" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
