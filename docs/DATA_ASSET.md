# Actif de données CompatAir

CompatAir sépare strictement quatre couches : catalogue technique, moteur, demande agrégée et offres marchandes. Une offre ne peut jamais modifier une caractéristique technique ou un verdict.

## Catalogue normalisé

`/data/catalog.json` publie le catalogue source et une vue `normalized` :

- EAN et GTIN réduits à leur forme numérique canonique ;
- MPN normalisés pour l’appariement exact sans séparateur ni différence de casse ;
- alias acceptés uniquement avec un identifiant de preuve ;
- familles de variantes explicites lorsqu’elles sont documentées ;
- index de sources et rattachement des champs critiques à leurs preuves.

Le validateur bloque les identifiants dupliqués, les références vers une preuve inconnue et les caractéristiques critiques sans provenance.

## Verdicts versionnés

`/data/verdicts.json` contient toutes les paires entre un compresseur et un outil à débit fixe, y compris `insufficient_data`. Le snapshot lie :

- la version du catalogue ;
- la version du moteur ;
- le verdict, son facteur limitant et les valeurs réellement comparées ;
- un `verdictVersion` SHA-256 reproductible.

Le workflow quotidien compare ce snapshot à la production et conserve le rapport pendant 30 jours.

## Demande agrégée

La contribution est désactivée par défaut. Lorsqu’une personne l’active dans le calculateur, le serveur accepte uniquement un schéma fermé : identifiants d’outils connus et tranches prédéfinies de débit, pression et durée. Il rejette le texte libre, les dimensions inconnues et les outils absents du catalogue.

Le serveur incrémente directement des compteurs marginaux. Il ne conserve ni ligne d’événement, ni cookie, ni identifiant de navigateur, ni adresse IP dans cet actif. Les rapports masquent les dimensions de moins de cinq contributions.

Ce dispositif suit les principes de minimisation et de statistiques anonymes exposés par la CNIL. Il ne constitue pas une certification juridique et doit être réévalué avant tout ajout de traceur, identifiant persistant, recoupement ou transmission à un tiers.

## Offres ManoMano

Le flux Awin enrichit uniquement la couche commerciale. L’appariement échoue sans EAN, GTIN ou MPN normalisé déjà relié à une fiche technique. Le prix, le stock ou la commission ne participent jamais au moteur de compatibilité.
