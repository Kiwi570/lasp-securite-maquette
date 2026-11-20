# LASP Sécurité — maquette

Maquette du futur site de **Lion Agence Sécurité Privée (LASP)**, sécurité privée à Lyon 9e.
Direction « Ronde de nuit » : nuit bleue et clair, rouge et bleu du logo, Archivo étendu, faisceau de lampe.

Adresse de la maquette : https://lasp-securite-maquette.vercel.app

## Pages

- Accueil : ouverture de nuit dans le faisceau d'une lampe, engagements autour du « 24/7 », six prestations, secteurs, outil « Votre dispositif », comment ça se passe, références et plan, appel final.
- Prestations : les six métiers en détail (agent de sécurité, maître-chien, sécurité incendie SSIAP, événementiel, magasin, intervention et rondes).
- Secteurs : industrie et logistique, commerces, événements, entreprises et collectivités.
- L'agence : valeurs, engagements, moyens (PTI, radios, véhicules), qualifications, images « en tenue LASP », plan.
- Devis & contact : demande de devis en trois étapes avec récapitulatif (préremplie depuis l'outil ou une prestation), téléphones, plan.
- 404 : « Accès non autorisé ».

## À fournir par le client (à compléter)

- **Numéro d'autorisation d'exercice CNAPS** : obligatoire sur tout document de l'entreprise, site compris, avec la mention de l'article L612-14 du Code de la sécurité intérieure (déjà rédigée dans le pied de page, numéro « à compléter »).
- **Mentions légales** : raison sociale, forme juridique, capital, adresse du siège, SIRET, RCS, directeur de la publication, hébergeur (Vercel Inc., adresse à vérifier sur le site de Vercel au moment de la mise en ligne).
- **Politique de confidentialité** (RGPD) : données recueillies par le formulaire de devis, finalité, durée de conservation, droits.
- **Assurance responsabilité civile professionnelle** : à citer si le client le souhaite.
- **Crédits des illustrations** : les images marquées « Illustration générée » ont été créées par intelligence artificielle (Grok) ; la mention reste sur le site final.

## Ce qui a été retiré ou formulé autrement faute d'information

- Aucun chiffre (effectif, années d'expérience, nombre de clients, délais d'intervention), aucun tarif et aucun avis client : le site actuel n'en donne pas. À ajouter si le client les fournit (Accueil, L'agence).
- Zone d'intervention : seule « Lyon » est connue ; le plan montre l'agence (Lyon 9e) sans dessiner de rayon d'intervention.
- Horaires de bureau : non connus ; seule la réactivité « 24h/24 et 7j/7 » du site actuel est reprise.
- « Ils nous font confiance » : SERIS, JTEKT, APR, STEF, en texte (pas de logos sur le site actuel). Logos à fournir avec l'accord de ces entreprises.
- Protection rapprochée et vidéosurveillance (citées seulement sur une page en russe du site actuel) : non reprises. La protection physique des personnes demande une autorisation CNAPS distincte.
- Textes des prestations : la page « Nos services » du site actuel contient encore le texte de modèle de Wix ; les descriptions de la maquette sont rédigées à partir des intitulés et des engagements du site, à relire par le client.

## Incohérences relevées sur le site actuel

- Page « Nos services » : texte de modèle Wix (« Paragraphe. Cliquez ici… ») et photos de banque d'images.
- Page « inquiry-services-page » : textes en russe.
- Aucun numéro d'autorisation CNAPS affiché.

## Outils de la maquette (simulés)

- « Votre dispositif » (accueil) : suggestion indicative de prestations selon le site, les horaires et la priorité ; elle préremplit la demande de devis.
- Demande de devis en trois étapes : l'envoi est simulé, rien n'est transmis.

## À la mise en ligne définitive

- Retirer : la consigne `noindex` (balise robots dans `source/gabarits/commun.mjs` et en-tête X-Robots-Tag dans `vercel.json`), la mention « Maquette de démonstration » du pied de page, l'envoi simulé du formulaire (brancher un vrai traitement ou un service de formulaires), les mentions « à compléter » une fois les informations fournies.
- Garder : la mention « Illustration générée » sur les images créées par IA ; la mention CNAPS et l'article L612-14 dans le pied de page.
- Remplacer les illustrations par de vraies photos des agents et des sites dès que possible (avec l'accord des personnes photographiées).

## Technique

Site statique (HTML, CSS, JavaScript), sans étape de construction, prêt pour Vercel. Textes et données dans `donnees/`, pages générées par `node outils/generer.mjs` (ne jamais modifier les `.html` à la main). Images produites par le pipeline de la bibliothèque des maquettes. Audit : `node _audit/audit.mjs`.
