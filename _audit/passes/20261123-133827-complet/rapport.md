# Rapport d’audit

Projet : `lasp-securite-maquette` · 23/11/2026 15:02:09 · 24 min · 6 page(s) · audit complet

## Résumé

- Statut : **54 échec(s)**
- Passe : `20261123-133827-complet` · version ?v=2
- Échecs : **54**
- À regarder : **9**
- Non lancé : **2**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (234), balayage (5), films d’ouverture (10), films de transition (10), bords de l’écran (6), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (5), tient dans l’écran (24), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (18), souris immobile (7), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✓ présent | accueil |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 5 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en iris |
| 4. Quelque chose relie les sections et les pages | ✓ présent | sur les 5 page(s) |
| 5. Un titre fait l’événement sur chaque page | ✓ présent | sur les 5 page(s) |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur /devis |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### texte sous 12 px (4)

- **texte sous 12 px** — `/` — div.cadran-bloc > svg.cadran > g.cadran-heures:nth-of-type(2) > text:nth-of-type(1) — 9.0 px _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **texte sous 12 px** — `/` — div.cadran-bloc > svg.cadran > g.cadran-heures:nth-of-type(2) > text:nth-of-type(2) — 9.0 px _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **texte sous 12 px** — `/` — div.cadran-bloc > svg.cadran > g.cadran-heures:nth-of-type(2) > text:nth-of-type(3) — 9.0 px _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **texte sous 12 px** — `/` — div.cadran-bloc > svg.cadran > g.cadran-heures:nth-of-type(2) > text:nth-of-type(4) — 9.0 px _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### contraste insuffisant (50)

- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li.actif:nth-of-type(4) > span.vl-num « 4 » — 4.45:1 (minimum 4.5:1) _(320×568 normal, 1440×900 normal, 320×568 sansWebgl, 1024×768 sansWebgl)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(4) > span.vl-num « 4 » — 1.26:1 (minimum 4.5:1) _(375×667 normal, 1728×1000 normal, 375×667 sansWebgl, 1024×768 sansWebgl)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(3) > span.vl-num « 3 » — 3.11:1 (minimum 4.5:1) _(375×667 normal, 1366×768 normal, 375×667 sansWebgl, 1024×768 sansWebgl, 2560×1440 sansWebgl)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li.actif:nth-of-type(4) > span.vl-num « 4 » — 1.19:1 (minimum 4.5:1) _(375×667 normal, 1728×1000 normal, 375×667 sansWebgl, 1024×768 sansWebgl)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(3) > span.vl-num « 3 » — 3.31:1 (minimum 4.5:1) _(390×844 normal)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(4) > span.vl-num « 4 » — 4.41:1 (minimum 4.5:1) _(844×390 normal, 1280×720 normal)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(4) > span.vl-num « 4 » — 3.22:1 (minimum 4.5:1) _(1024×768 normal)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(3) > span.vl-num « 3 » — 2.17:1 (minimum 4.5:1) _(1024×768 normal)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li.actif:nth-of-type(4) > span.vl-num « 4 » — 2.01:1 (minimum 4.5:1) _(1024×768 normal)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(3) > span.vl-num « 3 » — 4.41:1 (minimum 4.5:1) _(1024×768 normal, 1280×720 normal, 2560×1440 sansWebgl)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(4) > span.vl-num « 4 » — 1.28:1 (minimum 4.5:1) _(768×1024 normal, 1280×720 sansWebgl)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li.actif:nth-of-type(4) > span.vl-num « 4 » — 4.11:1 (minimum 4.5:1) _(768×1024 normal, 1920×1080 sansWebgl)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(3) > span.vl-num « 3 » — 2.10:1 (minimum 4.5:1) _(768×1024 normal)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(2) > span.vl-num « 2 » — 4.09:1 (minimum 4.5:1) _(768×1024 normal, 1920×1080 sansWebgl)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li.actif:nth-of-type(3) > span.vl-num « 3 » — 4.11:1 (minimum 4.5:1) _(768×1024 normal, 1920×1080 sansWebgl)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(4) > span.vl-num « 4 » — 2.10:1 (minimum 4.5:1) _(1000×560 normal)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li.actif:nth-of-type(4) > span.vl-num « 4 » — 3.69:1 (minimum 4.5:1) _(1000×560 normal, 390×844 sansWebgl)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(4) > span.vl-num « 4 » — 4.49:1 (minimum 4.5:1) _(1280×720 normal)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(3) > span.vl-num « 3 » — 1.85:1 (minimum 4.5:1) _(1280×720 normal)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li.actif:nth-of-type(4) > span.vl-num « 4 » — 4.38:1 (minimum 4.5:1) _(1280×720 normal, 1440×900 normal, 1440×900 sansWebgl)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(4) > span.vl-num « 4 » — 3.11:1 (minimum 4.5:1) _(1366×768 normal)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li.actif:nth-of-type(4) > span.vl-num « 4 » — 3.18:1 (minimum 4.5:1) _(1366×768 normal, 1000×560 sansWebgl, 2560×1440 sansWebgl)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(4) > span.vl-num « 4 » — 3.34:1 (minimum 4.5:1) _(1440×900 normal)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(3) > span.vl-num « 3 » — 4.42:1 (minimum 4.5:1) _(1440×900 normal, 1000×560 sansWebgl)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(3) > span.vl-num « 3 » — 1.16:1 (minimum 4.5:1) _(1440×900 normal)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(2) > span.vl-num « 2 » — 4.42:1 (minimum 4.5:1) _(1440×900 normal, 768×1024 sansWebgl)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li.actif:nth-of-type(3) > span.vl-num « 3 » — 4.45:1 (minimum 4.5:1) _(1440×900 normal)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(4) > span.vl-num « 4 » — 3.18:1 (minimum 4.5:1) _(1728×1000 normal)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(3) > span.vl-num « 3 » — 3.85:1 (minimum 4.5:1) _(1728×1000 normal)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(3) > span.vl-num « 3 » — 1.26:1 (minimum 4.5:1) _(1728×1000 normal)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li.actif:nth-of-type(4) > span.vl-num « 4 » — 3.68:1 (minimum 4.5:1) _(1920×1080 normal)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li.actif:nth-of-type(4) > span.vl-num « 4 » — 3.24:1 (minimum 4.5:1) _(1920×1080 normal, 2560×1440 sansWebgl)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li.actif:nth-of-type(3) > span.vl-num « 3 » — 1.93:1 (minimum 4.5:1) _(1920×1080 normal)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li.actif:nth-of-type(3) > span.vl-num « 3 » — 2.59:1 (minimum 4.5:1) _(2560×1440 normal)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(4) > span.vl-num « 4 » — 3.64:1 (minimum 4.5:1) _(390×844 sansWebgl, 768×1024 sansWebgl)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(3) > span.vl-num « 3 » — 3.28:1 (minimum 4.5:1) _(390×844 sansWebgl)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(4) > span.vl-num « 4 » — 2.50:1 (minimum 4.5:1) _(844×390 sansWebgl)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(3) > span.vl-num « 3 » — 2.11:1 (minimum 4.5:1) _(768×1024 sansWebgl)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li.actif:nth-of-type(3) > span.vl-num « 3 » — 3.69:1 (minimum 4.5:1) _(768×1024 sansWebgl)_
- **contraste insuffisant** — `/secteurs` — div:nth-of-type(1) > ol.vigilance-liste.fx-fini > li:nth-of-type(4) > span.vl-num « 4 » — 2.11:1 (minimum 4.5:1) _(1000×560 sansWebgl)_
- … et 10 autres (rapport.json)

## À regarder

### « à compléter » visible (1)

- **« à compléter » visible** — `devis.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 2 de donnees/site.json

### section sans visuel (3)

- **section sans visuel** — `/agence` — section#engagements « NOS ENGAGEMENTS UNE PRÉSENCE CONTINUE, DES AGENTS  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/devis` — section#demande « DEVIS & CONTACT VOTRE DEMANDE DE DEVIS Votre devis » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/secteurs` — section#references « ILS NOUS FONT CONFIANCE DES ENTREPRISES QUI NOUS C » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 1024×768 normal, 768×1024 normal, +33)_

### rechargement au milieu de la page (4)

- **rechargement au milieu de la page** — `/agence` — écran différent à la même position après rechargement (7.0 %), voir comparaisons/rechargement-agence-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/devis` — écran différent à la même position après rechargement (7.1 %), voir comparaisons/rechargement-devis-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/prestations` — écran différent à la même position après rechargement (6.6 %), voir comparaisons/rechargement-prestations-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/secteurs` — écran différent à la même position après rechargement (23.0 %), voir comparaisons/rechargement-secteurs-*.png _(1366×768)_

## Non lancé

- **parcours:projet** : locator.check: Clicking the checkbox did not change its state
- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2635 ms depuis le premier octet
- Ouverture /agence (1366×768) : 2496 ms depuis le premier octet
- Ouverture /devis (1366×768) : 2561 ms depuis le premier octet
- Ouverture /prestations (1366×768) : 2587 ms depuis le premier octet
- film de l'ouverture /prestations 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /secteurs (1366×768) : 2521 ms depuis le premier octet
- Ouverture / (390×844) : 2636 ms depuis le premier octet
- Ouverture /agence (390×844) : 2518 ms depuis le premier octet
- Ouverture /devis (390×844) : 2552 ms depuis le premier octet
- Ouverture /prestations (390×844) : 2587 ms depuis le premier octet
- Ouverture /secteurs (390×844) : 2532 ms depuis le premier octet
- Bords de l’écran : 425 images d’intro, 13 de voile et 142 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /agence : aucune section épinglée ou plein écran.
- Tient dans l'écran /devis : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 2 % d'images lentes sur 366, tâche la plus longue 68 ms
- Fluidité /agence 1366×768 (molette) : 0 % d'images lentes sur 301, tâche la plus longue 0 ms
- Fluidité /devis 1366×768 (molette) : 0 % d'images lentes sur 187, tâche la plus longue 0 ms
- Fluidité /prestations 1366×768 (molette) : 0 % d'images lentes sur 389, tâche la plus longue 0 ms
- Fluidité /secteurs 1366×768 (molette) : 0 % d'images lentes sur 284, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1418, tâche la plus longue 0 ms
- Fluidité /agence 390×844 (doigt) : 0 % d'images lentes sur 1367, tâche la plus longue 0 ms
- Fluidité /devis 390×844 (doigt) : 0 % d'images lentes sur 1371, tâche la plus longue 0 ms
- Fluidité /prestations 390×844 (doigt) : 0 % d'images lentes sur 1344, tâche la plus longue 0 ms
- Fluidité /secteurs 390×844 (doigt) : 0 % d'images lentes sur 1443, tâche la plus longue 0 ms
- Vitesse / : 0.55 s de calcul au chargement (téléphone ralenti).
- Vitesse /agence : 0.38 s de calcul au chargement (téléphone ralenti).
- Vitesse /devis : 0.34 s de calcul au chargement (téléphone ralenti).
- Vitesse /prestations : 0.40 s de calcul au chargement (téléphone ralenti).
- Vitesse /secteurs : 0.47 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --seulement=fichiers,mesures,parcours
```
