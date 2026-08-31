# Matrice fonctionnelle CompatAir

État au 15 juillet 2026. Cette matrice distingue le code livré des fonctions qui dépendent encore d’un flux partenaire ou d’une opération administrateur sur le serveur.

## Livré dans le dépôt

- site statique responsive, navigation, recherche, fil d’Ariane, pages 404 et 410, correction des données et partage des simulations ;
- historique public append-only des preuves, empreintes de versions et baromètre annuel de transparence documentaire ;
- catalogue de compresseurs filtrable et paginé, fiches sourcées, courbes FAD, limites, confiance et alternatives comparables ;
- catalogue d’outils et taxonomie extensible, fiches sourcées et exigences non documentées signalées ;
- calculateur multi-outils avec simultanéité, fréquence, durée, flexible, modèle existant et saisie personnalisée ;
- recommandation contrefactuelle déterministe : recherche du plus petit changement unique vérifié sur la pression disponible, la chute mesurée du réseau, la simultanéité, les fuites mesurées, la cadence explicite ou la machine documentée ;
- dossier de dimensionnement local avec synthèse de configuration, recommandations prioritaires, filtres par verdict et copie texte ;
- Passeport CompatAir gratuit : installation encodée dans une URL versionnée, recalcul local, sources, marges, points de vigilance, évolutions possibles, données manquantes et PDF généré dans le navigateur ;
- carnet d’exploitation local avec recette de référence, contrôles périodiques, signaux de dérive explicites, diagnostic guidé par famille d’écart, intervention consignée, contre-mesure et clôture déterministe en PDF ou JSON ;
- plan de maintenance préventive local : échéances datées ou liées au compteur depuis une source déclarée, alertes sans intervalle inventé, récurrences mesurées, chronologie, fiche atelier imprimable, export JSON et petit parc de 20 Passeports ;
- Scanner et vérifier : saisie exacte MPN normalisé, EAN/GTIN ou SKU distributeur sourcé, photo locale, lecture code-barres et OCR natif lorsque disponible, confirmation humaine obligatoire, preuves et compatibilités recalculées ;
- API HTTP `v1` de compatibilité en lecture seule et widget marchand sans cookie, tous deux fondés sur le même moteur et les mêmes sources ;
- frontière produit explicite : aucune sauvegarde serveur dans la version gratuite ; la sauvegarde de plusieurs ateliers, les exports de dossiers et les alertes restent le périmètre envisagé d’une version professionnelle non disponible ;
- verdicts `continuous`, `intermittent`, `incompatible` et `insufficient_data` ;
- conversions, interpolation bornée, débit de pointe, débit moyen, réserve de cuve, récupération conditionnelle et version des formules ;
- recherche globale, comparateur de deux ou trois modèles, pages par marque et pages par usage ; le périmètre compte 22 400 combinaisons explorables, dont 20 860 verdicts fixes audités et 1 540 combinaisons paramétriques nécessitant des entrées utilisateur ;
- frontière SEO programmatique : aucune génération quadratique sous `/compatibilite/`, anciennes URL exactes migrées vers le calculateur et retraits inconnus servis en `410`, avec fiches et pages d’usage comme surfaces indexables ;
- guides Astro validés par Zod, parcours Particuliers et Professionnels, quatre hubs métiers sans duplication d’article, glossaire sourcé, sommaires, statut de revue explicite et contenus associés ;
- schémas d’offres, liste blanche des marchands, fraîcheur de 48 heures, redirection fermée et compteur agrégé ;
- catalogue JSON normalisé par EAN/GTIN/MPN et SKU distributeur, familles de variantes, index de provenance et couverture champ par champ avec dénominateurs explicites ;
- rôles de preuve séparant source primaire, corroboration indépendante et reprise secondaire marchande ; SLA public de fraîcheur par type de donnée ;
- snapshots JSON du catalogue et des 20 860 verdicts fixes, validation, checksums, détection des doublons et rapports de différences ;
- contribution facultative aux priorités du catalogue, agrégée sans événement brut, cookie, identifiant de navigateur ni adresse IP persistée ;
- rapport privé de priorisation avec seuil minimal de cinq contributions par dimension, couverture pondérée par la demande observée et objectif opérationnel explicite de 80 % ;
- funnel du calculateur agrégé sans URL, referrer, cookie ni identifiant, avec affichage, famille fermée, sélection et recalcul réussi de la recommandation contrefactuelle, rapport privé et contrôle de cohérence des taux ;
- serveur MCP Streamable HTTP en lecture seule, sept tools decision-core sur l’endpoint principal, quatre tools avancés et neuf outils historiques sur des endpoints séparés, bridge UCP, onze ressources, trois prompts, enveloppes de sortie compactes dans `tools/list`, contrats exhaustifs en ressource, deux portées de verdict, reçus vérifiables, pagination, quotas, limite de taille, contrôle Origin, santé et télémétrie qualifiée ;
- benchmark public de fidélité des agents avec 100 scénarios déterministes, évaluateur local et leaderboard soumis à une preuve d’exécution complète ;
- banc MCP distinct de 50 requêtes pour mesurer la sélection du profil, du tool et des arguments sur au moins deux couples modèle-client-tokenizer, sans score public simulé ;
- Compatibility Impact Feed JSON/NDJSON reliant les changements de preuve aux produits, portefeuilles et couples à recalculer sans inventer de delta avant/après ;
- acquisition agrégée séparant organic, agent/referral, widget, API, MCP et UCP par gabarit, sans URL, referrer brut, cookie ni identifiant ;
- workflows CI, déploiement, sécurité, snapshot et disponibilité, avec permissions minimales et actions épinglées ;
- CSP, HSTS, politiques de sécurité, signalement responsable, confidentialité, cookies, affiliation et sources ;
- HTML statique, cartes sociales PNG 1200 × 630 dédiées aux surfaces indexables et carte mutualisée pour les couples `noindex`, budget automatisé de 50 Ko gzip maximum pour les scripts client externes d’une page, images dimensionnées, focus visible et réduction des animations.
- rapport GoAccess privé sans cookie, adresses IP masquées, paramètres d’URL supprimés, fenêtre de 90 jours et actualisation systemd toutes les 15 minutes.

## Prêt mais sans données partenaires

- Les offres Amazon et ManoMano restent vides tant qu’aucun flux autorisé et aucune convention d’affiliation ne sont fournis. Le connecteur CSV Awin pour ManoMano FR est prêt et documenté.
- Le tri par prix, les frais de livraison, la disponibilité et les données structurées `Offer` ne s’activent qu’après validation d’un flux.
- Les catégories d’outils sans référence constructeur sont indiquées comme à documenter. Aucun besoin générique n’est fabriqué.
- L’import ManoMano accepte le CSV Awin, y compris compressé, et publie uniquement les lignes appariées par EAN, GTIN ou MPN. Un connecteur XML ne sera écrit qu’à partir du schéma officiel du flux concerné, avec interdiction des entités externes.
- La gouvernance éditoriale, le protocole de publication et le statut de revue sont publics. Aucun professionnel externe n’est présenté comme relecteur tant qu’une personne qualifiée n’a pas accepté ce rôle, avec son nom et sa fonction.

## Opérations administrateur requises

- Installer et activer le service MCP systemd et les règles Apache avec `deploy/server/install-mcp.sh`.
- Réinstaller une fois le service MCP après l’ajout des actifs agrégés et des gardes root afin de créer l’état acquisition, approuver le vhost et installer les commandes de convergence et de preuve de drill.
- Exécuter un drill staging réel et conserver son rapport `1.1.0`; aucun rapport d’exploitation n’est fabriqué par les tests locaux.
- Définir la variable GitHub `MCP_ENABLED=true` après le test HTTPS de `/mcp-health`.
- Activer dans GitHub les règles de branche, les checks obligatoires, la protection des secrets et l’épinglage obligatoire des Actions si le plan du dépôt le permet.
- Enregistrer les propriétés du domaine dans Google Search Console et Bing Webmaster Tools. Cette opération exige les comptes du propriétaire.
- Configurer les destinataires d’alertes GitHub. Les workflows échoués sont déjà visibles dans Actions.

## Réservé après lancement

Les comptes, alertes de prix, historique détaillé des prix, sauvegarde serveur de configurations, marché belge ou suisse, API commerciale, leads installateurs et stockage D1 ou KV restent volontairement hors MVP.
