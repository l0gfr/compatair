# Matrice fonctionnelle CompatAir

État au 13 juillet 2026. Cette matrice distingue le code livré des fonctions qui dépendent encore d’un flux partenaire ou d’une opération administrateur sur le serveur.

## Livré dans le dépôt

- site statique responsive, navigation, recherche, fil d’Ariane, pages 404 et 410, correction des données et partage des simulations ;
- catalogue de compresseurs filtrable et paginé, fiches sourcées, courbes FAD, limites, confiance et alternatives comparables ;
- catalogue d’outils, taxonomie de dix catégories, fiches sourcées et exigences non documentées signalées ;
- calculateur multi-outils avec simultanéité, fréquence, durée, flexible, modèle existant et saisie personnalisée ;
- verdicts `continuous`, `intermittent`, `incompatible` et `insufficient_data` ;
- conversions, interpolation bornée, débit de pointe, débit moyen, réserve de cuve, récupération conditionnelle et version des formules ;
- recherche globale, comparateur de deux ou trois modèles, pages par marque, pages par usage et pages de compatibilité limitées aux données concluantes ;
- guides Astro validés par Zod, glossaire, sommaires, auteurs, relecteurs et contenus associés ;
- schémas d’offres, liste blanche des marchands, fraîcheur de 48 heures, redirection fermée et compteur agrégé ;
- snapshots JSON versionnés, validation, checksum d’import, détection des doublons et rapport de différences ;
- serveur MCP Streamable HTTP en lecture seule, neuf outils, six ressources, trois prompts, pagination, quotas, limite de taille, contrôle Origin, santé et métriques agrégées ;
- workflows CI, déploiement, sécurité, snapshot et disponibilité, avec permissions minimales et actions épinglées ;
- CSP, HSTS, politiques de sécurité, signalement responsable, confidentialité, cookies, affiliation et sources ;
- HTML statique, scripts inférieurs à 35 Ko compressés par page, images dimensionnées, focus visible et réduction des animations.

## Prêt mais sans données partenaires

- Les offres Amazon et ManoMano restent vides tant qu’aucun flux autorisé et aucune convention d’affiliation ne sont fournis.
- Le tri par prix, les frais de livraison, la disponibilité et les données structurées `Offer` ne s’activent qu’après validation d’un flux.
- Les catégories d’outils sans référence constructeur sont indiquées comme à documenter. Aucun besoin générique n’est fabriqué.
- L’import JSON et CSV est disponible. Un connecteur XML ne sera écrit qu’à partir du schéma officiel du flux concerné, avec interdiction des entités externes.

## Opérations administrateur requises

- Installer et activer le service MCP systemd et les règles Apache avec `deploy/server/install-mcp.sh`.
- Définir la variable GitHub `MCP_ENABLED=true` après le test HTTPS de `/mcp-health`.
- Activer dans GitHub les règles de branche, les checks obligatoires, la protection des secrets et l’épinglage obligatoire des Actions si le plan du dépôt le permet.
- Enregistrer les propriétés du domaine dans Google Search Console et Bing Webmaster Tools. Cette opération exige les comptes du propriétaire.
- Configurer les destinataires d’alertes GitHub. Les workflows échoués sont déjà visibles dans Actions.

## Réservé après lancement

Les comptes, alertes de prix, historique détaillé des prix, export PDF, sauvegarde serveur de configurations, marché belge ou suisse, API commerciale, leads installateurs et stockage D1 ou KV restent volontairement hors MVP.
