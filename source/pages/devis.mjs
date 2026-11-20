/* Devis & contact : la carte de Lyon se trace jusqu'à l'agence (objet d'ouverture : le point de l'agence),
   téléphones en grand, puis la demande de devis en trois étapes et son récapitulatif (module formulaire-par-etapes). */
import { html, brut } from '../../outils/gabarit.mjs';
import { surtitre, plan, fin } from '../gabarits/blocs.mjs';

export const page = { cle: 'devis', fichier: 'devis' };

const ICONES = {
  industrie: '<path d="M4 28V14l8 5v-5l8 5v-5l8 5V6h4v22z"/><path d="M8 22h4M16 22h4"/>',
  commerces: '<path d="M5 12h26l-2-6H7zM6 12v16h24V12"/><path d="M14 28v-8h8v8"/>',
  evenements: '<path d="M6 28l4-16h16l4 16"/><path d="M10 12l8-6 8 6M18 6v-2"/><circle cx="18" cy="20" r="3"/>',
  entreprises: '<rect x="8" y="4" width="20" height="24" rx="1"/><path d="M13 9h3M20 9h3M13 14h3M20 14h3M13 19h3M20 19h3M16 28v-4h4v4"/>',
};

export default (c) => {
  const T = (k) => c.t(`devis.${k}`);
  const k = c.site.contact;
  const P = c.donnees.prestations;
  const sites = ['industrie', 'commerces', 'evenements', 'entreprises'];
  return html`
<section class="ouv-devis s-nuit" id="debut">
  <div class="conteneur ouv-devis-grille">
    <div class="ouv-devis-texte">
      ${surtitre(T('surtitre'), 'ouv-surtitre')}
      <h1 class="ouv-titre" data-anime="gsap"><span class="hero-masque"><span class="hero-ligne">${T('titre1')}</span></span><span class="hero-masque"><span class="hero-ligne"><em>${T('titre2')}</em></span></span></h1>
      <p class="ouv-texte masque-ecran-bas" data-anime="gsap">${T('texte')}</p>
      <ul class="tel-grands" data-anime="gsap">
        <li><span>${T('telFixe')}</span><a href="tel:${k.telephoneLien}">${k.telephone}</a></li>
        <li><span>${T('telMobile')}</span><a href="tel:${k.telephone2Lien}">${k.telephone2}</a></li>
      </ul>
      <div class="ouv-actions" data-anime="gsap">
        <a class="bouton" href="#demande" data-action-principale>${T('formTitre')}</a>
        <p class="hero-info" data-info-cle><span class="pastille-live" aria-hidden="true"></span>${T('info')}</p>
      </div>
    </div>
    <div class="ouv-devis-plan" id="agence">
      ${plan(c, { classe: 'plan--nuit plan--grand', iris: true, effet: 'trace-ville' })}
      <p class="adresse-bloc"><strong>${c.t('commun.nomComplet')}</strong><br>${k.adresse}<br><span class="email-texte">${k.email}</span></p>
    </div>
  </div>
</section>

<section class="fpe demande s-clair" id="demande" data-module="formulaire-par-etapes">
  <div class="conteneur fpe__cadre">
    <div class="fpe__tete">
      ${surtitre(T('surtitre'))}
      <h2 class="fpe__h2" data-anime="lignes">${T('formTitre')}</h2>
      <p class="fpe__intro" data-anime>${c.t('pages.devis.accroche')}</p>
      <p class="fpe__note">${T('simule')}</p>
    </div>
    <div class="fpe__carton" data-anime>
      <form class="fpe__form" action="#" novalidate>
        <fieldset class="fpe__etape" data-etape="${c.s('devis.etape1')}">
          <legend class="fpe__legende"><h3 class="fpe__titre" tabindex="-1">${T('q1')}</h3></legend>
          <div class="fpe__groupe fpe__cartes" data-libelle="${c.s('devis.etape1')}">
            ${sites.map((s) => html`<label class="fpe__carte"><input type="radio" name="site" value="${s}" required><svg class="fpe__icone" viewBox="0 0 36 32" aria-hidden="true">${brut(ICONES[s])}</svg><span class="fpe__carte-titre">${c.t(`accueil.dispositif.site.${s}`)}</span></label>`)}
          </div>
          <div class="fpe__champ"><label for="d-lieu">${T('lieu')}</label><input id="d-lieu" name="lieu" autocomplete="address-level2" required data-libelle="${c.s('devis.lieu')}"></div>
        </fieldset>
        <fieldset class="fpe__etape" data-etape="${c.s('devis.etape2')}">
          <legend class="fpe__legende"><h3 class="fpe__titre" tabindex="-1">${T('q2')}</h3></legend>
          <fieldset class="fpe__groupe" data-min="1" data-libelle="${c.s('devis.prestationsGroupe')}">
            <legend class="fpe__groupe-titre">${T('prestationsGroupe')}</legend>
            <div class="fpe__puces">${P.map((p) => html`<label class="fpe__puce"><input type="checkbox" name="prestations" value="${p.id}"><span>${p.titre}</span></label>`)}</div>
          </fieldset>
          <fieldset class="fpe__groupe" data-libelle="${c.s('devis.quand')}">
            <legend class="fpe__groupe-titre">${T('quand')}</legend>
            <div class="fpe__puces">${['jour', 'nuit', 'continu'].map((p) => html`<label class="fpe__puce"><input type="radio" name="plage" value="${p}" required><span>${c.t(`accueil.dispositif.plage.${p}`)}</span></label>`)}</div>
          </fieldset>
          <div class="fpe__champ"><label for="d-debut">${T('debut')}</label><input id="d-debut" name="debut" type="date" data-libelle="${c.s('devis.debut')}"></div>
        </fieldset>
        <fieldset class="fpe__etape" data-etape="${c.s('devis.etape3')}">
          <legend class="fpe__legende"><h3 class="fpe__titre" tabindex="-1">${T('q3')}</h3></legend>
          <div class="fpe__grille">
            <div class="fpe__champ"><label for="d-nom">${T('nom')}</label><input id="d-nom" name="nom" autocomplete="name" required data-libelle="${c.s('devis.nom')}"></div>
            <div class="fpe__champ"><label for="d-societe">${T('societe')}</label><input id="d-societe" name="societe" autocomplete="organization" data-libelle="${c.s('devis.societe')}"></div>
            <div class="fpe__champ"><label for="d-tel">${T('tel')}</label><input id="d-tel" name="tel" type="tel" autocomplete="tel" required pattern="[0-9 +().-]{10,}" data-libelle="${c.s('devis.tel')}"></div>
            <div class="fpe__champ"><label for="d-email">${T('email')}</label><input id="d-email" name="email" type="email" autocomplete="email" required data-libelle="${c.s('devis.email')}"></div>
          </div>
          <div class="fpe__champ"><label for="d-message">${T('message')}</label><textarea id="d-message" name="message" rows="4" data-libelle="Précisions"></textarea></div>
          <label class="fpe__case"><input type="checkbox" name="accord" required data-hors-recap><span>${T('accord')}</span></label>
          <p class="mention-donnees">${T('donnees')}</p>
        </fieldset>
        <fieldset class="fpe__etape" data-etape="${c.s('devis.etape4')}" data-recap>
          <legend class="fpe__legende"><h3 class="fpe__titre" tabindex="-1">${T('q4')}</h3></legend>
          <div class="fpe__recap"></div>
        </fieldset>
        <div class="fpe__nav">
          <button type="button" class="fpe__bouton fpe__bouton--ligne" data-precedent>${T('retour')}</button>
          <button type="button" class="fpe__bouton" data-suivant>${T('continuer')}</button>
          <button type="submit" class="fpe__bouton">${T('envoyer')}</button>
        </div>
      </form>
      <div class="fpe__fin" hidden>
        <svg class="fpe__coche" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="28"/><path d="M20 33l8 8 16-18"/></svg>
        <h3 tabindex="-1">${T('merci')}</h3>
        <p>${T('merciTexte')}</p>
        <p data-resume></p>
        <div class="fpe__fin-actions"><button type="button" class="fpe__bouton fpe__bouton--ligne" data-recommencer>${T('recommencer')}</button></div>
      </div>
    </div>
  </div>
</section>

${fin(c, { id: 'appel' })}
`;
};
