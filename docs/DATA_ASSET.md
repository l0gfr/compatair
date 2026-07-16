# Actif de données CompatAir

CompatAir sépare strictement le catalogue technique, le moteur, la demande agrégée, le funnel produit agrégé et les offres marchandes. Une offre ne peut jamais modifier une caractéristique technique ou un verdict.

Le catalogue technique est physiquement découpé en un fichier par référence sous `src/data/products/compressors` et `src/data/products/tools`. `src/data/catalog.ts` reste la façade publique : il agrège les modules, applique les schémas Zod et conserve les exports historiques utilisés par Astro, les snapshots et le serveur MCP.

## Catalogue normalisé

`/data/catalog.json` publie le catalogue source et une vue `normalized` :

- EAN et GTIN réduits à leur forme numérique canonique ;
- MPN normalisés pour l’appariement exact sans séparateur ni différence de casse ;
- alias acceptés uniquement avec un identifiant de preuve ;
- familles de variantes explicites lorsqu’elles sont documentées ;
- index de sources et rattachement des champs critiques à leurs preuves.

Le validateur bloque les identifiants dupliqués, les références vers une preuve inconnue et les caractéristiques critiques sans provenance.

L’ajout d’une référence passe par les commandes reproductibles suivantes :

```bash
pnpm catalog:add -- compressors chemin/compresseur.json
pnpm catalog:index
pnpm catalog:check
```

Le fichier JSON doit satisfaire le schéma strict du domaine. L’index n’est plus maintenu à la main : il est régénéré dans l’ordre alphabétique. Le contrôle catalogue vérifie aussi le nom de fichier, l’unicité globale de l’identifiant, l’image locale, les références de preuves, les URL HTTPS et la présence des titres SEO éditoriaux. Après `catalog:add`, le contributeur doit donc ajouter les titres explicites du nouveau produit dans `src/data/product-seo-titles.ts` avant que la CI puisse passer.

## Historique des preuves

`src/data/evidence-history.snapshot.json` constitue le registre public append-only. Sa baseline du 14 juillet 2026 archive les 67 preuves alors présentes, sans reconstruire artificiellement un passé antérieur. Toute modification d’une source doit ajouter un événement conservant l’ancien instantané ; le test d’intégrité bloque une preuve courante qui ne correspond pas à la dernière version archivée. Les contrats publics sont `/preuves/` et `/data/evidence-history.json`.

Le baromètre annuel est calculé uniquement depuis les compresseurs et preuves du catalogue. Ses six critères, son périmètre, son échantillon et ses résultats sont exposés sur `/barometre-transparence/` et `/data/transparency-barometer.json`.

## Verdicts versionnés

`/data/verdicts.json` contient toutes les paires entre un compresseur et un outil à débit fixe, y compris `insufficient_data`. Le snapshot lie :

- la version du catalogue ;
- la version du moteur ;
- le verdict, son facteur limitant et les valeurs réellement comparées ;
- un `verdictVersion` SHA-256 reproductible.

Le workflow quotidien compare ce snapshot à la production et conserve le rapport pendant 30 jours.

## AirGraph et contrat MCP

Le serveur MCP utilise le snapshot de verdicts publié comme autorité par défaut. Il ne recalcule pas silencieusement un autre verdict lorsque la paire versionnée existe. Les produits conservent leurs identifiants de catalogue et reçoivent une forme globale stable `ca:compressor:<id>` ou `ca:tool:<id>`. Une configuration reçoit un identifiant `ca:configuration:<digest>` calculé uniquement depuis le compresseur, les outils triés et le mode d’usage.

Le contrat de verdict `2.0.0` sépare `air_supply_verdict` de `overall_system_verdict`. Le champ historique `verdict` reste disponible mais sa portée obligatoire voyage dans `verdict_scope`. Chaque tool publie son propre `outputSchema` fermé ; les structures de compatibilité, accessoires, alternatives, AirGraph, reçus et erreurs ne reposent plus sur un objet générique ouvert.

## UCP et distributions pour agents

La capability `fr.compatair.air.compatibility` transforme une configuration structurée en décision technique, accessoires obligatoires, limites, alternatives, système complet, attribution et preuves. Elle ne constitue pas un service de checkout. REST et MCP utilisent le même moteur et les mêmes règles d’échec fermé.

Le corpus agent regroupe les guides en texte intégral, le glossaire et les fiches produit. Chaque document reçoit une empreinte SHA-256 et une langue explicite. Les traductions anglaises automatiques portent le statut `machine_translated_unreviewed`; une validation explicite est nécessaire pour `human_reviewed`. Le manifeste expose les deux nombres et les deux taux. Les distributions JSON et NDJSON, les citations, l’historique de preuve, le changefeed, la fraîcheur, l’intégrité et le catalogue DCAT sont construits à partir des mêmes sources que le site.

L’AirGraph `0.1.0` relie les produits aux exigences de débit et de pression, au cycle d’usage, à la cuve, au flexible, aux raccords, au traitement d’air, au verdict et aux preuves disponibles. Une exigence absente reste `null` et alimente `limitations` ; elle n’est jamais remplacée par une valeur générique. Les schémas et exemples sont publiés dans `bluetouff/compatair-mcp` et leur miroir source reste sous `contracts/mcp`.

Le benchmark de fidélité publie exactement 100 scénarios, un évaluateur reproductible et un leaderboard vide tant qu’aucune soumission complète n’est vérifiée. Le reçu de compatibilité fige les deux portées, la configuration, les versions, les sources et la date sous une empreinte SHA-256 ; cette empreinte prouve l’intégrité du contenu, pas une signature d’identité. Le Compatibility Impact Feed relie les changements de preuve aux couples et portefeuilles concernés, mais n’affirme aucun delta de verdict sans snapshot précédent signé.

## Signature des publications

Le déploiement de production signe octet pour octet, avec Ed25519, les six publications JSON : catalogue complet, catalogue d’exécution allégé, offres, verdicts, historique des preuves et baromètre. Le manifeste détaché est publié sous `/data/signatures.json`; le registre des clés publiques est disponible sous `/data/signing-keys.json`.

La clé privée n’existe pas dans Git. Le workflow échoue si le secret GitHub `COMPATAIR_PUBLICATION_SIGNING_KEY` est absent ou si la clé ne correspond pas à l’empreinte publique enregistrée. La vérification locale d’un artifact signé s’effectue avec `pnpm data:verify-signatures`. Une rotation ajoute d’abord une nouvelle clé publique au registre ; une clé déjà utilisée ne doit pas être retirée, afin de préserver la vérification des publications archivées.

## Demande agrégée

La contribution est désactivée par défaut. Lorsqu’une personne l’active dans le calculateur, le serveur accepte uniquement un schéma fermé : identifiants d’outils connus et tranches prédéfinies de débit, pression et durée. Il rejette le texte libre, les dimensions inconnues et les outils absents du catalogue.

Le serveur incrémente directement des compteurs marginaux. Il ne conserve ni ligne d’événement, ni cookie, ni identifiant de navigateur, ni adresse IP dans cet actif. Les rapports masquent les dimensions de moins de cinq contributions.

Ce dispositif suit les principes de minimisation et de statistiques anonymes exposés par la CNIL. Il ne constitue pas une certification juridique et doit être réévalué avant tout ajout de traceur, identifiant persistant, recoupement ou transmission à un tiers.

## Funnel produit agrégé

Le calculateur transmet au plus un signal `started` et un signal `completed` par chargement de page. Pour la recommandation contrefactuelle, il peut aussi transmettre une fois par famille et par chargement les étapes fermées `recommendation_displayed`, `recommendation_selected` et `recalculation_succeeded`. La famille appartient obligatoirement à la liste `pressure`, `flexible`, `simultaneity`, `leak`, `cadence` ou `machine`.

Le serveur conserve uniquement les compteurs globaux et les compteurs par famille dans `/var/lib/compatair/product-funnel-aggregates.json`. Aucun chemin, URL, referrer, identifiant, référence produit, valeur saisie ou contenu de formulaire n’atteint cet actif statistique. Le schéma `2.0.0` migre le précédent fichier à deux compteurs sans inventer d’activité contrefactuelle. Si des pertes réseau ou des requêtes invalides conduisent à davantage de complétions que de démarrages, de sélections que d’affichages ou de recalculs que de sélections, le taux concerné est laissé à `null` et une alerte de qualité est produite.

## Acquisition et attribution agrégées

L’acquisition utilise uniquement des dimensions fermées : canal (`organic`, `agent_referral`, `referral`, `direct`, `widget`, `api`, `mcp`, `ucp`), gabarit, action et résultat. Le navigateur classe localement le domaine référent puis envoie seulement le bucket ; une navigation interne ne crée pas un nouveau signal d’acquisition. Le serveur ne conserve ni URL, ni query string, ni referrer, ni agent utilisateur, ni cookie, ni identifiant.

Le rapport privé se génère avec `pnpm data:report-acquisition -- /var/lib/compatair/acquisition-aggregates.json /chemin/prive/acquisition-report.json`. Il sépare volume, succès, `insufficient_data`, suivi explicite de l’URL canonique, conversion et accusé de citation par canal et gabarit. Une URL canonique émise n’est jamais comptée comme citée sans accusé explicite de l’intégration. Les impressions et clics GSC restent absents tant qu’un export agrégé du compte propriétaire n’est pas importé ; aucun volume GSC n’est inventé.

Le rapport hebdomadaire de demande existant reste produit séparément avec `pnpm data:rank-demand`. Il masque les dimensions sous cinq contributions, pondère les déficits par la demande observée et remonte les vingt couples `insufficient_data` prioritaires.

## Usage MCP pseudonymisé puis publié sous forme agrégée

Le serveur conserve `/var/lib/compatair/mcp-telemetry.json` pendant 91 jours. Il compte les initialisations, les familles fermées de `clientInfo`, les appels et résultats par tool, les identifiants de catalogue demandés, les couples de compatibilité et les consultations attribuées via `canonical_follow_url`. Un nom de client inconnu devient `other` ; aucun nom libre n'est stocké.

L'estimation des appelants repose sur un préfixe réseau tronqué et un agent utilisateur normalisé, protégés par HMAC avec `/var/lib/compatair/.mcp-telemetry-secret`. L'agrégat privé contient donc des empreintes pseudonymes, jamais des adresses IP ni des agents utilisateurs bruts. Le rapport public `/data/mcp-usage.json` ne contient aucune empreinte, masque les clients, produits et compatibilités sous cinq observations et décrit explicitement les limites de la mesure.

## Offres ManoMano

Le flux Awin enrichit uniquement la couche commerciale. L’appariement échoue sans EAN, GTIN ou MPN normalisé déjà relié à une fiche technique. Le prix, le stock ou la commission ne participent jamais au moteur de compatibilité.
