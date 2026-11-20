/* Pont entre les modules de la bibliothèque (pret([...]) de leur socle) et le socle du projet :
   GSAP est déjà chargé par la page, pas de mode calme, défilement natif ou adouci géré par le socle,
   rafraichir() regroupe le recalcul des positions quand la hauteur change. */
import { rafraichir } from './socle/index.js?v=1';

export async function pret() {
  return { gsap: window.gsap, ScrollTrigger: window.ScrollTrigger, calme: false, lenis: null, rafraichir };
}
