# Rapport d’audit

Projet : `lasp-securite-maquette` · 20/11/2026 21:57:15 · 19 min · 6 page(s) · audit standard

## Résumé

- Statut : **33 échec(s)**
- Passe : `20261120-203822-standard` · version ?v=1
- Échecs : **33**
- À regarder : **53**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (3), mesures (66), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), parcours du projet (1), tient dans l’écran (15), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (15), souris immobile (6), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### premier écran : information clé hors de l’écran (5)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.conteneur.hero-contenu:nth-of-type(3) > p.hero-info:nth-of-type(3) « RÉACTIFS 24H/24 ET 7J/7 » _(320×568 normal, 390×844 sansJs, 1366×768 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/404` — section#debut > div.conteneur.ouv-404-contenu > p.hero-info:nth-of-type(4) « RÉACTIFS 24H/24 ET 7J/7 » _(1366×768 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/devis` — div.conteneur.ouv-devis-grille > div.ouv-devis-texte:nth-of-type(1) > div.ouv-actions > p.hero-info « RÉACTIFS 24H/24 ET 7J/7 » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/prestations` — section#debut > div.conteneur.ouv-fuite-contenu:nth-of-type(2) > div.ouv-actions > p.hero-info « ADS · SSIAP 1, 2 ET 3 · AGENTS CYNOPHILES » _(1366×768 sansJs, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/secteurs` — section#debut > div.conteneur.ouv-vue-contenu:nth-of-type(2) > div.ouv-actions > p.hero-info « ENTREPRISES, SITES INDUSTRIELS, ÉVÉNEMENTS, COLLEC » _(320×568 normal, 320×568 sansJs)_

### photo faible affichée en grand (8)

- **photo faible affichée en grand** — `/` — a > figure.media.secteur-media > picture > img — grok/secteur-industrie (4/5, faible, 46 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/` — a > figure.media.secteur-media > picture > img — grok/secteur-commerce (4/5, faible, 46 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/` — a > figure.media.secteur-media > picture > img — grok/secteur-evenement (4/5, faible, 46 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/` — a > figure.media.secteur-media > picture > img — grok/secteur-entreprise (4/5, faible, 46 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/secteurs` — div.conteneur.secteur-grille > figure.media.secteur-grand-media > picture > img « Industrie et logistique » — grok/secteur-industrie (4/5, faible, 26 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/secteurs` — div.conteneur.secteur-grille > figure.media.secteur-grand-media > picture > img « Commerces » — grok/secteur-commerce (4/5, faible, 26 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal, 1920×1080 normal)_
- **photo faible affichée en grand** — `/secteurs` — div.conteneur.secteur-grille > figure.media.secteur-grand-media > picture > img « Événements » — grok/secteur-evenement (4/5, faible, 26 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/secteurs` — div.conteneur.secteur-grille > figure.media.secteur-grand-media > picture > img « Entreprises et collectivités » — grok/secteur-entreprise (4/5, faible, 26 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal, 1920×1080 normal)_

### texte coupé (11)

- **texte coupé** — `/` — section#fin > div.conteneur.fin-contenu:nth-of-type(2) > h2.fin-titre « UN SITE À PROTÉGER ? PARLONS-EN MAINTENANT. » — coupé par section#fin « UN SITE À PROTÉGER ? PARLONS-EN MAINTENANT. Décriv » _(320×568 normal, 320×568 sansJs)_
- **texte coupé** — `/` — section#fin > div.conteneur.fin-contenu:nth-of-type(2) > h2.fin-titre > em « PARLONS-EN MAINTENANT. » — coupé par section#fin « UN SITE À PROTÉGER ? PARLONS-EN MAINTENANT. Décriv » _(320×568 normal, 320×568 sansJs)_
- **texte coupé** — `/agence` — section#fin > div.conteneur.fin-contenu:nth-of-type(2) > h2.fin-titre « UN SITE À PROTÉGER ? PARLONS-EN MAINTENANT. » — coupé par section#fin « UN SITE À PROTÉGER ? PARLONS-EN MAINTENANT. Décriv » _(320×568 normal, 320×568 sansJs)_
- **texte coupé** — `/agence` — section#fin > div.conteneur.fin-contenu:nth-of-type(2) > h2.fin-titre > em « PARLONS-EN MAINTENANT. » — coupé par section#fin « UN SITE À PROTÉGER ? PARLONS-EN MAINTENANT. Décriv » _(320×568 normal, 320×568 sansJs)_
- **texte coupé** — `/devis` — section#appel > div.conteneur.fin-contenu:nth-of-type(2) > h2.fin-titre « UN SITE À PROTÉGER ? PARLONS-EN MAINTENANT. » — coupé par section#appel « UN SITE À PROTÉGER ? PARLONS-EN MAINTENANT. Décriv » _(320×568 normal, 320×568 sansJs)_
- **texte coupé** — `/devis` — section#appel > div.conteneur.fin-contenu:nth-of-type(2) > h2.fin-titre > em « PARLONS-EN MAINTENANT. » — coupé par section#appel « UN SITE À PROTÉGER ? PARLONS-EN MAINTENANT. Décriv » _(320×568 normal, 320×568 sansJs)_
- **texte coupé** — `/prestations` — section#debut > div.ouv-fuite-cadre:nth-of-type(1) > figure.media.ouv-fuite-media > figcaption.mention-ia « Illustration générée » — coupé par section#debut « Illustration générée PRESTATIONS SIX MÉTIERS, UN S » _(320×568 normal)_
- **texte coupé** — `/prestations` — section#fin > div.conteneur.fin-contenu:nth-of-type(2) > h2.fin-titre « UN SITE À PROTÉGER ? PARLONS-EN MAINTENANT. » — coupé par section#fin « UN SITE À PROTÉGER ? PARLONS-EN MAINTENANT. Décriv » _(320×568 normal, 320×568 sansJs)_
- **texte coupé** — `/prestations` — section#fin > div.conteneur.fin-contenu:nth-of-type(2) > h2.fin-titre > em « PARLONS-EN MAINTENANT. » — coupé par section#fin « UN SITE À PROTÉGER ? PARLONS-EN MAINTENANT. Décriv » _(320×568 normal, 320×568 sansJs)_
- **texte coupé** — `/secteurs` — section#fin > div.conteneur.fin-contenu:nth-of-type(2) > h2.fin-titre « UN SITE À PROTÉGER ? PARLONS-EN MAINTENANT. » — coupé par section#fin « UN SITE À PROTÉGER ? PARLONS-EN MAINTENANT. Décriv » _(320×568 normal, 320×568 sansJs)_
- **texte coupé** — `/secteurs` — section#fin > div.conteneur.fin-contenu:nth-of-type(2) > h2.fin-titre > em « PARLONS-EN MAINTENANT. » — coupé par section#fin « UN SITE À PROTÉGER ? PARLONS-EN MAINTENANT. Décriv » _(320×568 normal, 320×568 sansJs)_

### premier écran : bouton principal hors de l’écran (4)

- **premier écran : bouton principal hors de l’écran** — `/` — section#debut > div.conteneur.hero-contenu:nth-of-type(3) > div.hero-actions > a.bouton:nth-of-type(1) « Demander un devis » _(1366×768 sansJs, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.conteneur.ouv-404-contenu > p.ouv-actions:nth-of-type(3) > a.bouton « Revenir à l'accueil » _(1366×768 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/devis` — div.conteneur.ouv-devis-grille > div.ouv-devis-texte:nth-of-type(1) > div.ouv-actions > a.bouton « Votre demande de devis » _(320×568 normal, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/prestations` — section#debut > div.conteneur.ouv-fuite-contenu:nth-of-type(2) > div.ouv-actions > a.bouton « Demander un devis » _(1366×768 sansJs)_

### débordement horizontal (2)

- **débordement horizontal** — `/` — page large de 339 px — largeurs : 320, 360 px _(balayage 320–1920 normal)_
- **débordement horizontal** — `/agence` — page large de 1023 px — largeurs : 1000, 1040, 1080, 1120, 1160, 1200 px _(balayage 320–1920 normal)_

### retour arrière : image isolée différente (flash) (1)

- **retour arrière : image isolée différente (flash)** — `/` — à 113 ms (films/retour-arrière-390.png) _(390×844 retour arrière)_

### retour avant : image isolée différente (flash) (1)

- **retour avant : image isolée différente (flash)** — `/prestations` — à 87 ms (films/retour-avant-390.png) _(390×844 retour avant)_

### lien profond (1)

- **lien profond** — `/ → /devis?site=industrie&plage=nuit&prestations=maitre-chien,rondes,agent#demande` — choix « prestations=maitre-chien,rondes,agent » non prérempli (valeur : agent) _(1366×768 lien profond)_

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `devis.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### section sans visuel (5)

- **section sans visuel** — `/` — section#etapes « COMMENT ÇA SE PASSE QUATRE TEMPS, UNE SEULE ÉQUIPE » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **section sans visuel** — `/agence` — section#engagements « NOS ENGAGEMENTS UNE PRÉSENCE CONTINUE, DES AGENTS  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/agence` — section#qualifications « QUALIFICATIONS DES QUALIFICATIONS RECONNUES ADS Ag » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/devis` — section#demande « DEVIS & CONTACT VOTRE DEMANDE DE DEVIS Votre devis » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/secteurs` — section#references « ILS NOUS FONT CONFIANCE DES ENTREPRISES QUI NOUS C » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### texte de contenu sous 13 px (ordinateur) (33)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > figure.media.hero-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-prestation:nth-of-type(1) > a.carte-lien > figure.media.carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-prestation:nth-of-type(2) > a.carte-lien > figure.media.carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-prestation:nth-of-type(2) > a.carte-lien > span.carte-corps:nth-of-type(2) > span.carte-qualif:nth-of-type(1) « AGENTS CYNOPHILES » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-prestation:nth-of-type(3) > a.carte-lien > figure.media.carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-prestation:nth-of-type(3) > a.carte-lien > span.carte-corps:nth-of-type(2) > span.carte-qualif:nth-of-type(1) « SSIAP 1, 2 ET 3 » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-prestation:nth-of-type(4) > a.carte-lien > figure.media.carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-prestation:nth-of-type(5) > a.carte-lien > figure.media.carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-prestation:nth-of-type(6) > a.carte-lien > figure.media.carte-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-prestation:nth-of-type(6) > a.carte-lien > span.carte-corps:nth-of-type(2) > span.carte-qualif:nth-of-type(1) « RONDIERS, INTERVENANTS » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-secteur:nth-of-type(1) > a > figure.media.secteur-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-secteur:nth-of-type(2) > a > figure.media.secteur-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-secteur:nth-of-type(3) > a > figure.media.secteur-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-secteur:nth-of-type(4) > a > figure.media.secteur-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-prestation:nth-of-type(2) > a.carte-lien > span.carte-corps > span.carte-qualif:nth-of-type(1) « AGENTS CYNOPHILES » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-prestation:nth-of-type(3) > a.carte-lien > span.carte-corps > span.carte-qualif:nth-of-type(1) « SSIAP 1, 2 ET 3 » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — li.carte-prestation:nth-of-type(6) > a.carte-lien > span.carte-corps > span.carte-qualif:nth-of-type(1) « RONDIERS, INTERVENANTS » — 12.2 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.ouv-404-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/agence` — div.conteneur.ouv-agence-grille > div.ouv-agence-visuel:nth-of-type(2) > figure.media.ouv-agence-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl, 1366×768 sansJs)_
- **texte de contenu sous 13 px (ordinateur)** — `/devis` — section#demande > div.conteneur.fpe__cadre > div.fpe__tete:nth-of-type(1) > p.fpe__note:nth-of-type(3) « Maquette : l'envoi est simulé, rien n'est transmis » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/devis` — div.fpe__carton:nth-of-type(2) > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 4 · VOTRE SITE » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/prestations` — section#debut > div.ouv-fuite-cadre:nth-of-type(1) > figure.media.ouv-fuite-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/prestations` — section#agent > div.conteneur.rp-grille > figure.media.rp-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/prestations` — section#maitre-chien > div.conteneur.rp-grille > figure.media.rp-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/prestations` — section#incendie > div.conteneur.rp-grille > figure.media.rp-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- … et 8 autres (rapport.json)

### typographie française (6)

- **typographie française** — `/prestations` — div.conteneur.rp-grille > div.rp-texte > p:nth-of-type(4) > a.lien-fleche « Demander un devis : Agent de sécurité » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/prestations` — div.conteneur.rp-grille > div.rp-texte > p:nth-of-type(4) > a.lien-fleche « Demander un devis : Maître-chien » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/prestations` — div.conteneur.rp-grille > div.rp-texte > p:nth-of-type(4) > a.lien-fleche « Demander un devis : Sécurité incendie » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/prestations` — div.conteneur.rp-grille > div.rp-texte > p:nth-of-type(4) > a.lien-fleche « Demander un devis : Événementiel » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/prestations` — div.conteneur.rp-grille > div.rp-texte > p:nth-of-type(4) > a.lien-fleche « Demander un devis : Magasin » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/prestations` — div.conteneur.rp-grille > div.rp-texte > p:nth-of-type(4) > a.lien-fleche « Demander un devis : Intervention et rondes » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### rechargement au milieu de la page (4)

- **rechargement au milieu de la page** — `/agence` — écran différent à la même position après rechargement (7.4 %), voir comparaisons/rechargement-agence-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/devis` — écran différent à la même position après rechargement (7.0 %), voir comparaisons/rechargement-devis-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/prestations` — écran différent à la même position après rechargement (17.3 %), voir comparaisons/rechargement-prestations-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/secteurs` — écran différent à la même position après rechargement (10.2 %), voir comparaisons/rechargement-secteurs-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 5 étape(s) notée(s), 60 min de travail pour 115 min de budget, 35 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /agence, /devis, /prestations, /secteurs.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2680 ms depuis le premier octet
- Ouverture /agence (1366×768) : 2514 ms depuis le premier octet
- film de l'ouverture /agence 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /devis (1366×768) : 2596 ms depuis le premier octet
- Ouverture /prestations (1366×768) : 2570 ms depuis le premier octet
- Ouverture /secteurs (1366×768) : 2531 ms depuis le premier octet
- Ouverture / (390×844) : 2611 ms depuis le premier octet
- Ouverture /agence (390×844) : 2502 ms depuis le premier octet
- Ouverture /devis (390×844) : 2547 ms depuis le premier octet
- Ouverture /prestations (390×844) : 2561 ms depuis le premier octet
- Ouverture /secteurs (390×844) : 2505 ms depuis le premier octet
- film de l'ouverture /secteurs 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 441 images d’intro, 15 de voile et 143 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /agence : aucune section épinglée ou plein écran.
- Tient dans l'écran /devis : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 394, tâche la plus longue 0 ms
- Fluidité /agence 1366×768 (molette) : 0 % d'images lentes sur 291, tâche la plus longue 0 ms
- Fluidité /devis 1366×768 (molette) : 0 % d'images lentes sur 177, tâche la plus longue 0 ms
- Fluidité /prestations 1366×768 (molette) : 0 % d'images lentes sur 337, tâche la plus longue 0 ms
- Fluidité /secteurs 1366×768 (molette) : 0 % d'images lentes sur 286, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1425, tâche la plus longue 0 ms
- Fluidité /agence 390×844 (doigt) : 0 % d'images lentes sur 1352, tâche la plus longue 0 ms
- Fluidité /devis 390×844 (doigt) : 0 % d'images lentes sur 1352, tâche la plus longue 0 ms
- Fluidité /prestations 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /secteurs 390×844 (doigt) : 0 % d'images lentes sur 1418, tâche la plus longue 50 ms
- Vitesse / : 0.49 s de calcul au chargement (téléphone ralenti).
- Vitesse /agence : 0.28 s de calcul au chargement (téléphone ralenti).
- Vitesse /devis : 0.35 s de calcul au chargement (téléphone ralenti).
- Vitesse /prestations : 0.41 s de calcul au chargement (téléphone ralenti).
- Vitesse /secteurs : 0.29 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,mesures,films,parcours
```
