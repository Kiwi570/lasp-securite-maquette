# Rapport d’audit

Projet : `lasp-securite-maquette` · 20/11/2026 22:31:58 · 7 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **7 échec(s)**
- Passe : `20261120-212440-complet-partiel` · version ?v=1
- Échecs : **7**
- À regarder : **4**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5), tient dans l’écran (24)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-203822-standard | standard | toutes | toutes | 33 | 53 | 1 | échecs |
| 20261120-210214-standard | standard | toutes | toutes | 9 | 13 | 1 | échecs |
| 20261120-212251-standard-cible-partiel | standard | /,/404,/devis,/prestations,/secteurs | fichiers, mesures | 0 | 3 | 0 | complet |
| **20261120-212440-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 7 | 4 | 0 | échecs |

## Échecs

### contenu inaccessible (1)

- **contenu inaccessible** — `/` — section#secteurs > div.rangee-fenetre:nth-of-type(2) > ul.rangee > li.carte-secteur:nth-of-type(4) « Illustration générée Entreprises et collectivités  » — 1 élément(s) de galerie hors de l'écran, sans défilement possible _(844×390 sansJs, 768×1024 sansJs)_

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/agence` — div.conteneur.ouv-agence-grille > div.ouv-agence-texte:nth-of-type(1) > div.ouv-actions > p.hero-info « LYON 9E · 24H/24, 7J/7 » _(1000×560 sansJs)_
- **premier écran : information clé hors de l’écran** — `/devis` — div.conteneur.ouv-devis-grille > div.ouv-devis-texte:nth-of-type(1) > div.ouv-actions > p.hero-info « RÉACTIFS 24H/24 ET 7J/7 » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

### texte coupé (1)

- **texte coupé** — `/devis` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(3) > span.fpe__nom:nth-of-type(2) « Vos coordonnées » — le contenu dépasse de son cadre _(1024×768 normal, 1000×560 normal, 1024×768 sansWebgl, 1000×560 sansWebgl)_

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/devis` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(3) > span.fpe__nom:nth-of-type(2) « Vos coordonnées » — avec div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(4) > span.fpe__num:nth-of-type(1) « 4 » _(1024×768 normal, 1000×560 normal, 1024×768 sansWebgl, 1000×560 sansWebgl)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/devis` — div.conteneur.ouv-devis-grille > div.ouv-devis-texte:nth-of-type(1) > div.ouv-actions > a.bouton « Votre demande de devis » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

### débordement horizontal (1)

- **débordement horizontal** — `/agence` — page large de 1223 px — largeurs : 1220 px _(balayage 320–1920 normal)_

## À regarder

### section sans visuel (4)

- **section sans visuel** — `/agence` — section#engagements « NOS ENGAGEMENTS UNE PRÉSENCE CONTINUE, DES AGENTS  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/agence` — section#qualifications « QUALIFICATIONS DES QUALIFICATIONS RECONNUES ADS Ag » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/devis` — section#demande « DEVIS & CONTACT VOTRE DEMANDE DE DEVIS Votre devis » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/secteurs` — section#references « ILS NOUS FONT CONFIANCE DES ENTREPRISES QUI NOUS C » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran /agence : aucune section épinglée ou plein écran.
- Tient dans l'écran /devis : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/agence,/devis --seulement=fichiers,mesures
```
