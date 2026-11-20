/* 404 : un cadenas dans le faisceau d'une lampe, « Accès non autorisé ». */
import { html } from '../../outils/gabarit.mjs';
import { surtitre, apercu } from '../gabarits/blocs.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="ouv-404 s-nuit" id="debut" data-plein-ecran>
  ${apercu(c, 'grok/404', '70% 55%')}
  ${c.media({ nom: 'grok/404', alt: c.s('introuvable.alt'), cadrage: '50% 50%', priorite: true, classe: 'ouv-404-media' })}
  <span class="spot-404" data-iris-centre="disque" aria-hidden="true"></span>
  <div class="conteneur ouv-404-contenu">
    ${surtitre(c.t('introuvable.surtitre'), 'ouv-surtitre')}
    <h1 class="ouv-titre" data-anime="lignes">${c.t('introuvable.titre')}</h1>
    <p class="ouv-texte" data-anime>${c.t('introuvable.texte')}</p>
    <p class="ouv-actions" data-anime>${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}</p>
    <p class="hero-info" data-info-cle>${c.t('commun.disponible')}</p>
  </div>
</section>
`;
