/* Pictogrammes au trait (24 × 24), dessinés pour LASP : métiers, engagements, qualifications.
   Traits en currentColor, sans remplissage ; le point rouge (classe pi-r) porte l'accent. */
import { brut } from '../../outils/gabarit.mjs';

const T = {
  /* Métiers */
  agent: '<path d="M12 3l7 3v5.2c0 4.4-2.9 7.8-7 9.8-4.1-2-7-5.4-7-9.8V6z"/><path d="M8.8 12.2l2.2 2.2 4.2-4.4"/>',
  'maitre-chien': '<ellipse cx="12" cy="15.6" rx="4.2" ry="3.6"/><circle cx="6.2" cy="10.4" r="1.8"/><circle cx="9.6" cy="6.6" r="1.8"/><circle cx="14.4" cy="6.6" r="1.8"/><circle cx="17.8" cy="10.4" r="1.8"/>',
  incendie: '<path d="M12 3c.8 3 4.6 5 4.6 9.6a4.6 4.6 0 0 1-9.2 0c0-2.2 1.1-3.6 2.3-4.6 0 1.8.8 3 2 3.2C11.4 8.6 10.8 6 12 3z"/><path class="pi-r" d="M12 14.2c.9.9 1.6 1.8 1.6 2.9a1.6 1.6 0 0 1-3.2 0c0-1 .7-1.9 1.6-2.9z"/>',
  evenementiel: '<path d="M3.5 8h17v3a2 2 0 0 0 0 4v3h-17v-3a2 2 0 0 0 0-4z"/><path d="M14.5 8v10" stroke-dasharray="1.6 1.8"/>',
  magasin: '<path d="M5.5 8.5h13l-1.2 11.5H6.7z"/><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5"/>',
  rondes: '<path d="M3 10h8.5l4-2.8v9.6l-4-2.8H3z"/><path class="pi-r" d="M18.5 8.5l2.5-1.6M18.5 12H21.5M18.5 15.5l2.5 1.6"/>',
  /* Engagements */
  qualifies: '<circle cx="12" cy="9" r="5.5"/><path d="M8.6 13.4L7 21l5-2.6 5 2.6-1.6-7.6"/><path class="pi-r" d="M9.8 9.1l1.5 1.5 2.9-3"/>',
  horloge: '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3.4 2"/><path class="pi-r" d="M12 2.5v1.6M21.5 12h-1.6M12 21.5v-1.6M2.5 12h1.6"/>',
  usine: '<path d="M3 20V10.5l5 3v-3l5 3v-3l5 3V4h3v16z"/><path d="M6.5 17h2M11 17h2M15.5 17h2"/>',
  radio: '<rect x="7" y="8" width="10" height="13" rx="2"/><path d="M9.5 8V3M9.5 12h5M9.5 14.5h5"/><circle class="pi-r" cx="12" cy="18" r="1.2"/>',
  suivi: '<path d="M4 20V4M4 20h16"/><path class="pi-r" d="M7.5 15l3.5-3.6 3 2.6 5-6"/>',
  /* Écusson des qualifications */
  ecusson: '<path d="M32 4l24 9v15c0 15-10.4 27-24 32C18.4 55 8 43 8 28V13z"/><path d="M32 12l17 6.4v10.2c0 10.6-7.3 19-17 22.6-9.7-3.6-17-12-17-22.6V18.4z"/>',
};

export const icone = (nom, classe = 'picto') => brut(`<svg class="${classe}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">${T[nom] || ''}</svg>`);
export const ecusson = (classe = 'ecusson') => brut(`<svg class="${classe}" viewBox="0 0 64 64" aria-hidden="true" focusable="false">${T.ecusson}</svg>`);
