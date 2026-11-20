# Rapport d’audit

Projet : `lasp-securite-maquette` · 20/11/2026 22:21:07 · 19 min · 6 page(s) · audit standard

## Résumé

- Statut : **9 échec(s)**
- Passe : `20261120-210214-standard` · version ?v=1
- Échecs : **9**
- À regarder : **13**
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

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-203822-standard | standard | toutes | toutes | 33 | 53 | 1 | échecs |
| **20261120-210214-standard** (celle-ci) | standard | toutes | toutes | 9 | 13 | 1 | échecs |

## Échecs

### contraste sur image (6)

- **contraste sur image** — `/` — section#debut > div.conteneur.hero-contenu:nth-of-type(4) > p.surtitre.hero-surtitre:nth-of-type(1) « SÉCURITÉ PRIVÉE · LYON » — 3.84:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/404` — section#debut > div.conteneur.ouv-404-contenu:nth-of-type(2) > p.surtitre.ouv-surtitre:nth-of-type(1) « ERREUR 404 » — 3.45:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/prestations` — section#debut > div.conteneur.ouv-fuite-contenu:nth-of-type(2) > p.surtitre.ouv-surtitre:nth-of-type(1) « PRESTATIONS » — 1.91:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/prestations` — h1.ouv-titre > span.hero-masque:nth-of-type(3) > span.hero-ligne > em « D'EXIGENCE. » — 2.13:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(390×844 normal)_
- **contraste sur image** — `/prestations` — section#debut > div.conteneur.ouv-fuite-contenu:nth-of-type(2) > p.surtitre.ouv-surtitre:nth-of-type(1) « PRESTATIONS » — 1.44:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/secteurs` — section#debut > div.conteneur.ouv-vue-contenu:nth-of-type(2) > p.surtitre.ouv-surtitre:nth-of-type(1) « SECTEURS » — 3.74:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_

### zone tactile sous 44 px (2)

- **zone tactile sous 44 px** — `/devis` — div.ouv-devis-texte:nth-of-type(1) > ul.tel-grands > li:nth-of-type(1) > a « 04 82 333 999 » — 163 × 40 px _(320×568 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/devis` — div.ouv-devis-texte:nth-of-type(1) > ul.tel-grands > li:nth-of-type(2) > a « 07 74 34 25 35 » — 172 × 40 px _(320×568 normal, 320×568 sansJs)_

### débordement horizontal (1)

- **débordement horizontal** — `/` — page large de 339 px — largeurs : 320, 360 px _(balayage 320–1920 normal)_

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

### section sans visuel (4)

- **section sans visuel** — `/agence` — section#engagements « NOS ENGAGEMENTS UNE PRÉSENCE CONTINUE, DES AGENTS  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/agence` — section#qualifications « QUALIFICATIONS DES QUALIFICATIONS RECONNUES ADS Ag » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/devis` — section#demande « DEVIS & CONTACT VOTRE DEMANDE DE DEVIS Votre devis » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/secteurs` — section#references « ILS NOUS FONT CONFIANCE DES ENTREPRISES QUI NOUS C » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### rechargement au milieu de la page (4)

- **rechargement au milieu de la page** — `/agence` — écran différent à la même position après rechargement (7.3 %), voir comparaisons/rechargement-agence-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/devis` — écran différent à la même position après rechargement (7.2 %), voir comparaisons/rechargement-devis-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/prestations` — écran différent à la même position après rechargement (17.5 %), voir comparaisons/rechargement-prestations-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/secteurs` — écran différent à la même position après rechargement (9.9 %), voir comparaisons/rechargement-secteurs-*.png _(1366×768)_

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
- Ouverture / (1366×768) : 2612 ms depuis le premier octet
- Ouverture /agence (1366×768) : 2518 ms depuis le premier octet
- Ouverture /devis (1366×768) : 2563 ms depuis le premier octet
- Ouverture /prestations (1366×768) : 2580 ms depuis le premier octet
- Ouverture /secteurs (1366×768) : 2550 ms depuis le premier octet
- Ouverture / (390×844) : 2638 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /agence (390×844) : 2503 ms depuis le premier octet
- Ouverture /devis (390×844) : 2559 ms depuis le premier octet
- Ouverture /prestations (390×844) : 2575 ms depuis le premier octet
- Ouverture /secteurs (390×844) : 2505 ms depuis le premier octet
- bords de l’écran / 1920×1080 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 425 images d’intro, 15 de voile et 140 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Tient dans l'écran /agence : aucune section épinglée ou plein écran.
- Tient dans l'écran /devis : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 1 % d'images lentes sur 382, tâche la plus longue 50 ms
- Fluidité /agence 1366×768 (molette) : 0 % d'images lentes sur 291, tâche la plus longue 0 ms
- Fluidité /devis 1366×768 (molette) : 0 % d'images lentes sur 180, tâche la plus longue 0 ms
- Fluidité /prestations 1366×768 (molette) : 0 % d'images lentes sur 330, tâche la plus longue 0 ms
- Fluidité /secteurs 1366×768 (molette) : 0 % d'images lentes sur 299, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1375, tâche la plus longue 0 ms
- Fluidité /agence 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Fluidité /devis 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Fluidité /prestations 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /secteurs 390×844 (doigt) : 0 % d'images lentes sur 1415, tâche la plus longue 0 ms
- Vitesse / : 0.44 s de calcul au chargement (téléphone ralenti).
- Vitesse /agence : 0.30 s de calcul au chargement (téléphone ralenti).
- Vitesse /devis : 0.30 s de calcul au chargement (téléphone ralenti).
- Vitesse /prestations : 0.37 s de calcul au chargement (téléphone ralenti).
- Vitesse /secteurs : 0.34 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/404,/devis,/prestations,/secteurs --seulement=fichiers,mesures
```
