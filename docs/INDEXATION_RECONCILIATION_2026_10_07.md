# Réconciliation éditoriale de l’indexation du 7 octobre 2026

Le lot ouvert à `2026-10-07T12:21:04.959Z` a admis dix URL alors que la revue du matin bloquait sa publication. Le registre éditorial suspend ces dix admissions et la référence voisine AS881-R. L’historique du lot et le quota consommé restent inchangés ; aucune URL de remplacement ni nouvelle admission n’est ajoutée.

## Preuves et périmètre

Le rapport historique privé `.astro/seo/revue-2026-10-07/rapport.md` documente un refus explicite pour AS881, un apport insuffisant pour EUROHV109, LA 50165 et MISTRAL 50301, et une revue primaire ou finale incomplète pour les six autres pages. Il constate à `08:17:26.058Z` les dix pages en `noindex,follow`, avec canonical propre, hors sitemap. Ces décisions ne sont pas dix refus identiques.

Le rapport externe privé `compatair-seo-20261007-evening/incident.md` rapporte un contrôle HTTPS achevé à `18:25:57.050Z` sous `cc5d36a36aed7c9f4bdecaa5a3bf90543461df6b` : dix pages indexables et dans les sitemaps, sans correction éditoriale entre les deux révisions. Cette observation externe est distincte du contrôle local ci-dessous ; aucune nouvelle requête production n’a été effectuée pour cette réconciliation.

Le contrôle local du 7 octobre relit les rapports, les fiches et leurs voisins, puis le build `221ab4177b26fdd562b30d6e0e1e9b438fd126c3`. Le manifeste conserve exactement le lot de dix ouvert à 12:21 UTC. Le plan affiche `released:0`, ce qui conserve les admissions historiques. AS881 et AS881-R ont une canonical vers AS1007 mais une directive `index,follow`. EUROHV109, LA 50165 et MISTRAL 50301 restent indexables avec canonical propre. Le registre précédent contenait huit blocages ZIPP, tous conservés.

La comparaison actuelle AS881/AS881-R confirme des tableaux `verifiedFacts`, `limitations` et `specifications` identiques ; leur introduction change seulement le modèle. Cela justifie le blocage supplémentaire AS881-R, admis le 5 octobre, sans déclarer les deux produits physiques identiques. Les autres comparaisons conservent leurs différences : buses EUROHV, composants LA/HYDROJET et MISTRAL/SUPERMISTRAL, contradiction Draper, profil SATA, variantes ABAC et FIAC. Les deux guides répondent à des intentions distinctes de leurs voisins. Cette lecture du dépôt ne remplace pas la revue primaire encore requise et n’efface aucune donnée documentée.

## Chemins inscrits au registre

Chaque entrée porte `reviewedAt: 2026-10-07` et un motif propre dans `config/indexation-editorial-holds.json`.

| Chemin exact | Motif du blocage |
| --- | --- |
| `/compresseurs/abac-formula-7-5-8-400-50/` | Revue primaire partielle : validation finale de masse, alimentation et portée du fonctionnement continu manquante |
| `/compresseurs/fiac-ax-153bd-13-400-50-ce/` | Revue primaire de la fiche exacte et du catalogue incomplète |
| `/guides/buse-pistolet-peinture-chapeau-air-consommation/` | Intention distincte et apport plausible, valeurs décisives et comparaison de configuration non validées définitivement |
| `/guides/paslode-f150s-pp-cloueur-connecteurs-air-fixations/` | Intention distincte, revue finale de notice et prescriptions de fixation incomplète |
| `/outils-pneumatiques/pistolet-nettoyage-asturomec-la-50165/` | Apport propre insuffisant face au HYDROJET 50160/B |
| `/outils-pneumatiques/pistolet-peinture-hvlp-astro-pneumatic-eurohv109/` | Portée de la différence avec EUROHV107 non expliquée par un critère propre sourcé |
| `/outils-pneumatiques/pistolet-peinture-hvlp-draper-09709/` | Contradiction de pression et utilité finale à revalider face à 09708 |
| `/outils-pneumatiques/pistolet-peinture-hvlp-hymair-as881/` | Refus explicite, distinction utile face à AS881-R absente |
| `/outils-pneumatiques/pistolet-peinture-hvlp-sata-jet-x-hvlp-1-1-o-basic-1200055/` | Revue primaire et apport du profil O face au profil I incomplets |
| `/outils-pneumatiques/sableuse-asturomec-mistral-50301/` | Portée du modèle face au SUPERMISTRAL 50300 non expliquée |
| `/outils-pneumatiques/pistolet-peinture-hvlp-hymair-as881-r/` | Voisin actuellement indistinct, admission antérieure et alias encore indexable |

## Propagation aux sélections de compresseurs

`applyEditorialHolds` propage chaque blocage outil vers sa route de sélection. Les sept routes ci-dessous existent dans le build contrôlé, restent déjà en `noindex,follow` avec canonical propre et ne figurent pas explicitement dans les lots. Elles sont couvertes automatiquement, sans entrée de registre doublée :

- `/quel-compresseur-pour/pistolet-nettoyage-asturomec-la-50165/`
- `/quel-compresseur-pour/pistolet-peinture-hvlp-astro-pneumatic-eurohv109/`
- `/quel-compresseur-pour/pistolet-peinture-hvlp-draper-09709/`
- `/quel-compresseur-pour/pistolet-peinture-hvlp-hymair-as881/`
- `/quel-compresseur-pour/pistolet-peinture-hvlp-sata-jet-x-hvlp-1-1-o-basic-1200055/`
- `/quel-compresseur-pour/sableuse-asturomec-mistral-50301/`
- `/quel-compresseur-pour/pistolet-peinture-hvlp-hymair-as881-r/`

Ces onze entrées ajoutent dix-huit chemins protégés avec la propagation. AS1007 n’est pas ajouté au blocage : ce correctif vise les admissions non validées et le voisin dont l’indistinction actuelle a été constatée.

Contrôles du registre exécutés : dix premiers chemins ajoutés exactement égaux au batch de 12:21 UTC, AS881-R comme seule entrée supplémentaire, dix-neuf entrées uniques au total, huit motifs ZIPP inchangés, dates et schéma acceptés par `validateEditorialHolds`, toutes les cibles présentes dans les sources. Le contrôle de `applyEditorialHolds` conserve le marqueur de blocage sur les routes attendues. Les sept routes de sélection ont été relues dans le HTML local ; ce contrôle ne valide pas encore le futur rendu des admissions suspendues.

## Conditions de réouverture et contrôles restants

Les blocages sont réversibles après une vraie revue, URL par URL : sources primaires effectivement relues, référence exacte, unités et conditions conservées, différence avec les voisins et résolution utile documentées. Les lacunes critiques restent explicites et produisent `insufficient_data` lorsqu’elles empêchent un verdict technique ; aucun débit ni arbitrage fabricant n’est inventé. Les points FAD documentés des compresseurs restent conservés.

La réconciliation ne modifie ni le moteur, ni les produits, ni les guides, ni la politique, ni le batch et ses plafonds `2/2/6` en Europe/Paris. Le nouveau lot de contenu conserve son périmètre de 30 guides, 200 compresseurs et 1 000 outils, sans nouvelle admission d’indexation.

L’application effective des blocages aux admissions historiques et aux alias, la sortie des sitemaps, le rebuild, la validation et les vérifications HTTPS restent à contrôler dans le correctif de projection et la publication racine. La modification du registre seule ne constitue pas une preuve de production corrigée.
