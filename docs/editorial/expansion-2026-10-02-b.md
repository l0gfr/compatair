# Lot documentaire du 2 octobre 2026, B

## Reprise canonique du 3 octobre 2026

Le lot A est désormais vérifié publiquement au SHA `2057292e3aa6c4ec551e6f61ad1c09b742ddc8c5` : 2 619 compresseurs, 11 087 outils et 486 guides. Le contrôle des signatures et des verdicts représentatifs a réussi, ainsi que le contrôle SEO complet des 4 048 pages détail du sitemap. Cette vérification indépendante distingue la publication effectivement servie du workflow de déploiement annulé le 2 octobre.

Les 4 908 fichiers du delta B ont été importés sur une branche issue de ce `main`, après vérification de toutes les préimages et conservation des correctifs de déploiement. Aucun original privé de fabricant n'a été copié dans Git. Les 50 dates de publication prévues ont été alignées sur le 3 octobre, avec conservation des empreintes des drafts et des captures du 2 octobre dans [l'amendement de publication](expansion-2026-10-03-b.publication-amendment.json). Deux lignes blanches finales ont ensuite été retirées des guides enrichis, avec [trace distincte](expansion-2026-10-03-b.whitespace-amendment.json) ; le contrôle du diff stagé a également normalisé la fin de 49 nouveaux articles, avec [amendement supplémentaire](expansion-2026-10-03-b.guide-eof-amendment.json). Les assertions, SVG, sources et anciens ledgers n'ont pas été réécrits.

Le contrôle canonique du catalogue valide 16 106 références ; l'audit éditorial valide 536 guides, 986 sources déclarées et 1 653 citations externes rattachées. Les tests ciblés du déploiement et de la protection du rollback ont réussi. La qualification canonique complète, la CI et la publication B restent à effectuer à ce stade ; les paragraphes ci-dessous conservent l'état historique de préparation du 2 octobre.

Demande : 50 guides supplémentaires, 400 compresseurs et 2 000 outils, avec sources identifiées, marques variées et production après validation.

Ce rapport décrit les livraisons figées et la préparation de leur intégration. Au 2 octobre 2026, 19:29 UTC, les fichiers décrits restent sous `/tmp` ; ce document ne constate ni import du lot B dans le dépôt, ni build complet, ni CI réussie, ni activation en production. Les compteurs ci-dessous sont ceux attendus après intégration.

## Périmètre et compteurs

| Catalogue | Avant B | Ajout B | Total attendu après B |
| --- | ---: | ---: | ---: |
| Configurations de compresseurs | 2 619 | 400 | 3 019 |
| Références d’outils | 11 087 | 2 000 | 13 087 |
| Guides | 486 | 50 | 536 |

Les 400 configurations de compresseurs correspondent à **164 noms de modèle** et **193 combinaisons modèle/fréquence/régulation**. Les points ou équipements imprimés distinguent les configurations ; le lot ne contient pas 400 noms de modèle différents. Les 20 guides existants enrichis par des liens retour restent dans les 486 guides de départ : les 536 guides attendus comprennent exactement 50 nouveaux articles.

La factory réelle des outils B contient 1 994 profils `variable-volume`, 4 profils `fixed-flow` dont la base est `unqualified`, et 2 profils `per-action`. Les 551 mentions de consommation moyenne présentes dans les sources ou spécifications ne deviennent pas 551 champs `airflowBasis: average` ; le compteur public de 854 profils classés avec cette base demeure inchangé. Les champs de base sont absents pour les 1 996 profils variables ou par action, conformément à leur schéma.

Le périmètre attendu après B est de 7 881 outils fixes et 5 206 autres profils : 96 par action, 5 gonflage et 5 105 incomplets. Les 39 509 653 paires explorables sont le produit arithmétique de 3 019 configurations par 13 087 outils : 23 792 739 paires à profils fixes et 15 716 914 autres paires. Ce volume de combinaisons ne mesure ni des compatibilités concluantes, ni des essais, ni des pages admises à l’indexation.

## Compresseurs : données conservées et limites

Les 400 configurations se répartissent entre BOGE (220), ELGi (128), Chicago Pneumatic (50) et Ingersoll Rand (2). Chacune possède un FAD relié à sa propre source critique. Aucun débit aspiré n’est traité comme un FAD et aucune performance manquante n’est extrapolée. Le snapshot contient 29 entrées de source, issues de 24 réponses originales distinctes ; ces nombres ne doivent pas être additionnés aux documents d’outils ou de guides pour prétendre à un total de documents uniques.

Les courbes VFD sont regroupées. Les versions sur réservoir E DR/FDR sont retenues lorsque leur propre ligne publie un FAD. Une pression maximale de configuration fixe et la borne haute d’une plage variable conservent leurs portées respectives. Les fréquences ou cycles de service inconnus restent inconnus. Les 64 configurations documentées à 60 Hz ne reçoivent aucune performance 50 Hz déduite.

Une déclaration de fonctionnement continu est conservée pour 129 configurations dans le périmètre du document utilisé. La tenue permanente reste indéterminée pour les 271 autres. Les points contradictoires ELGi EG90-P et certaines incohérences m³/min/cfm ont été exclus ; les configurations Chicago Pneumatic dont le point FAD dépasse le plafond imprimé n’ont pas reçu de correction automatique.

## Outils : identité documentée et demande d’air

Le lot comporte exactement 2 000 nouvelles identités issues de 20 marques : Cleco, Dotco, Draper, Du-Pas, FACOM, FAR, HAZET, Henrytools, Ingersoll Rand, JET, KUKEN, Master Power, Metabo HPT, Michigan Pneumatic, NPK, Omer, Rodcraft, Sealey, Tranmax et VESSEL. Les références proviennent des cellules et pages réelles, sans génération de suffixes. La déduplication documentée porte sur la marque et le MPN normalisés, ou le modèle lorsque le MPN est absent, dans le lot et contre les 11 087 outils existants.

**1 998 outils restent insuffisamment qualifiés pour un dimensionnement conclusif.** Les quatre souffleurs Sealey SA9231, SA9232, SA9233 et SA9252 publient un débit à 8 bar, mais son régime n’est pas établi ; `unqualified` reste hors du verdict conclusif. Les 1 994 autres profils variables gardent les informations documentaires et les inconnues, sans convertir une moyenne, une valeur à vide, une pression recommandée ou un plafond en demande maximale mesurée en charge.

Les cloueurs Metabo HPT NR90AD(S1) et NR90AE(S1) publient 2,5 L par cycle à 6,9 bar dans leur [notice officielle, pages PDF 9 et 11](https://www.metabo-hpt.com/docs/default-source/product-owners-manuals/bf9aff2e3a40407cb9486114fc12e71e.pdf?sfvrsn=e4dabf4c_2#page=11). Ces deux références nécessitent une cadence explicitement déclarée. Sans cette cadence, le verdict reste `insufficient_data`. Le scénario local à 40 coups/min produit 100 L/min de demande et 125 L/min recommandés avec une marge de 25 % explicitement choisie ; ce scénario ne décrit pas une cadence constatée sur le terrain et ne supprime pas la question de la pointe instantanée.

Les 32 Rodcraft B conservent seulement la pression d’entrée maximale de 6,3 bar fournie par le [glossaire du catalogue, page PDF 4](https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf#page=4). La recommandation d’alimentation de la page 5 ne démontre pas une pression exacte de mesure de consommation. Aucun minimum ou typique n’est fabriqué. Les corrections du lot A relatives aux 57 Rodcraft restent un historique distinct de B.

La relecture a exclu les kits HAZET 9012M-1/4 et 9012ECO/4, corrigé les cellules HAZET, les identités Omer extraites de texte tourné et plusieurs catégories ou localisations de source. La contradiction Draper 09709 «43 psi (2 Bar)» demeure explicite, sans pression choisie arbitrairement. Michigan MP-PD55, enfonce-poteaux autonome, est exclu faute de catégorie exacte, sans reclassement opportuniste. Le snapshot conserve 23 exclusions explicites ; aucun contrôle ne revendique l’absence universelle de rebadgage OEM.

## Guides et maillage

Les 50 guides possèdent chacun un sujet distinct, des sources localisées, un SVG adapté au mécanisme et des liens vers les références exactes disponibles. Leurs angles couvrent notamment réglage d’arasage et précision, alimentation de visseuse, seuil de débit forcé à zéro, persistance du cumul après coupure, circuits de pilotage, énergie retenue, décolmatage, commandes de sablage, décompression, défauts plasma, déplacement de palan et mécanismes de marques de ventouse. Les articles limitent leurs décisions à la version et au problème documentés ; ils ne construisent aucun classement commercial ni résultat d’essai inventé.

Le [ledger B proposé](guides-2026-10-02-b.sources.json) conserve 93 assertions critiques : 87 faits documentaires, 2 calculs explicitement identifiés, 2 confrontations de documents, 1 inférence et 1 assertion de portée. Les 44 captures primaires utilisées sont intactes. La revue documentaire et éditoriale interne assistée par IA n’est ni une validation professionnelle externe, ni un essai physique, ni une attestation de conformité.

Le maillage préparé ajoute cinq associations outil-guide seulement lorsqu’aucun guide préféré n’est déjà défini. Vingt anciens articles reçoivent un court paragraphe contextuel vers un cas nouveau, avec mécanisme précis, sources primaires et ancre contrôlée. Les autres fragments et valeurs des frontmatters YAML sont conservés ; seuls les ajouts de sources et de guides liés sont préparés. Les 72 cibles de l’import éditorial sont : 50 nouveaux articles, 20 anciens articles enrichis, le fichier d’associations et le ledger B.

Les six anciens ledgers portant des empreintes d’articles ciblés restent inchangés. Douze empreintes historiques sont consignées dans `existingGuideRevisions` : huit concordaient avec le fichier lu avant B et quatre différaient déjà. Les 20 révisions enregistrent le SHA réellement lu avant/après, le paragraphe, les sources et les assertions ajoutées. Une ancienne empreinte de fin de revue n’est pas remplacée silencieusement par une empreinte actuelle. Les 50 lignes d’articles nouveaux et toutes leurs assertions, sources et empreintes SVG demeurent identiques au ledger de drafts figé.

## Santé des sources et historique ALMiG

Un audit antérieur enregistré le 2 octobre 2026 à 19:09:26 UTC porte sur 4 233 URLs : 4 155 joignables, 1 cassée et 77 non vérifiées. L’enquête ciblée finalisée à 19:20:41 UTC confirme un HTTP 404 sur le catalogue ALMiG de juillet 2026, sans remplacement officiel exact vérifié. Cette disponibilité concerne des preuves historiques de 86 compresseurs et 18 guides déjà présents, pas des ajouts ALMiG dans B.

Le document historique conserve son édition, sa date de collecte, sa taille de 4 383 400 octets et son SHA-256 `f5ca167dedaab25352808dc5001ba9badc7acffb2c37168c6d9f89182b752a0e`, concordants avec les snapshots versionnés. L’incident est mis en évidence ; il ne crée pas une nouvelle source technique et n’efface pas les observations antérieures. Aucune URL n’est remplacée par une page générique ou une ancienne édition différente. Une URL officielle fonctionnelle du document exact et une comparaison des octets, ou des modèles/pages/points si l’édition diffère, sont nécessaires avant un transfert de preuve. Les 77 états non vérifiés ne sont pas reclassés en 404.

Les 44 URLs des nouveaux guides disposent de captures HTTPS réussies le 2 octobre, entre 07:42:36 et 08:36:53 UTC. La finalisation vérifie les captures locales ; aucun nouveau passage HTTP complet sur ces 44 URLs n’a été effectué. Une erreur interne de l’outil web sur Hypertherm n’est pas une réponse HTTP 404.

## Contrôles exécutés et livraison restant à qualifier

Les handoffs figés indiquent les validations locales suivantes :

- Compresseurs : 400 schémas réels valides, 400 produits reproduits, preuves critiques vérifiées et 23 mutations invalides rejetées après la normalisation des identifiants de preuve.
- Outils : 14 tests Vitest réels réussis, 2 000 schémas valides, modules et factory concordants, aucune collision normalisée avec le catalogue existant ; 435 captures vérifiées. La revue indépendante a contrôlé les cellules à risque et la portée des données, sans nouvelle campagne HTTP complète.
- Guides : 50 SHA Markdown et 50 SHA SVG concordants, 44 captures intègres, 93 assertions relues, dont une assertion FQE relue après la revue initiale, citations et liens internes contrôlés ; rendu réel Astro des 70 articles préparés et vérification des ancres du maillage. Aucune phrase longue répétée dans au moins trois corps hors déclaration commune de méthode n’a été détectée par la revue indépendante ; cela ne constitue pas une certification anti-spam de Google.
- Vérification locale préalable à l’amendement, à 19:29 UTC : 2 003 fichiers du manifeste outils et 51 fichiers du manifeste guides concordent avec leurs empreintes ; 50 SHA SVG, 92 rattachements d’assertions à leurs sources, snapshots et factory compresseurs concordent. Le contrôle préalable d’import a passé sous Node v24.19.0 pour 72 cibles et 63 entrées protégées, en mode lecture seule, avec `applied: false`.

Le snapshot outils pèse 7 696 037 octets, celui des compresseurs 1 047 757 octets. Les réponses HTML/PDF, rendus PNG et pièces de recherche restent locales ; la provenance, les extraits nécessaires, les dates et les empreintes sont les éléments versionnables. Le plafond d’archive de production demeure de 176 MiB ; aucun poids d’archive B ni respect de ce plafond n’est attesté avant le build. Les rétentions et objets Actions relèvent du contrôle de stockage distinct, sans suppression opérée par la préparation éditoriale.

Les vérifications ci-dessus concernent les sorties et propositions locales. Les factories doivent encore être intégrées avec les index, titres, images, preuves historiques et règles d’admission. Le build complet, les tests communs, la CI et la publication du SHA exact doivent être exécutés et constatés séparément. Le nombre de références ou de paires ne démontre ni meilleures ventes, ni disponibilité commerciale actuelle, ni leadership sectoriel, ni classement Google.

## Amendement borné après répétition

Le premier contrôle de valeur a signalé `missing-useful-next-step` pour le seul guide mark-free : ses guides liés figuraient dans les métadonnées, sans lien interne dans le corps. Root a autorisé une prochaine action précise, avant une éventuelle dépose d’inspection. Pour la **ventouse enfichée du FQE de la notice 30.30.01.02497-01**, §10.9 page 40 décrit une extraction destructive, une remplaçante montée par-dessous la plaque et sa restriction de débit montée par-dessus. Le lien mène au guide FQE détaillé pour préparer les pièces et la procédure du préhenseur réellement installé. Cette règle n’est pas attribuée au revêtement mark-free ni à toutes les fixations.

La capture primaire FQE a été relue et son SHA confirmé ; elle était déjà utilisée dans le lot. Le registre passe de 92 à 93 assertions, avec 87 faits documentaires et les mêmes 44 captures. Le guide corrigé est au SHA `11ed46b76e37df74d94113833f23b5da7bf201deecdad164a65281e27bfc555e`. Les 49 autres nouveaux MD, les 50 SVG, les 20 enrichissements et les 5 mappings restent byte-identiques. Les six ledgers historiques restent intacts. Le ledger de répétition conserve son `publicationScope` complet, au SHA `c4ae1124d4d09486fcf2c2bd3fcee41c23e2834aa745545c5953cd4b09d512ec` ; cette copie ne constitue aucun import canonique.

Après synchronisation, sous Node 24.19.0, les 50 schémas et rendus Astro des drafts passent ; les 70 articles proposés sont rendus et leurs citations/ancres contrôlées. Le contrôle préalable des 72 cibles et 63 entrées protégées passe avec `applied:false`. La répétition passe l’audit éditorial : **536 guides, 986 sources déclarées, 1 653 citations externes rattachées**. L’audit page-value passe sur 29 729 candidats avec 0 échec structurel ; il distingue 28 924 états `mechanical-checks-passed`, 77 `consolidated` et 728`needs-review`. Ces derniers ne deviennent pas une admission automatique. Le guide corrigé a un lien vers la procédure FQE et aucune raison structurelle restante. Les scripts de contrôle sont byte-identiques au dépôt principal.

Les empreintes initiales et la revue indépendante du ledger à 92 assertions restent archivées. La relecture limitée de cet ajout et ses nouveaux SHA sont consignés séparément ; aucune nouvelle revue indépendante complète ou validation professionnelle externe n’est revendiquée. La préparation finale reste hors du dépôt, sans Git, Zen, build ou typecheck exécuté par l’agent éditorial. Les validations et preuves de livraison exécutées par root relèvent de leurs propres attestations.

## Amendement d’encodage des snapshots

Un amendement distinct autorisé par root remplace le caractère U+2014 par son échappement littéral `\u2014` dans les deux snapshots B et trois modules Cleco. Les égalités JSON décodées des deux snapshots ont aussi été vérifiées pour ce bilan : leurs valeurs restent identiques. Les sources originales et leurs observations ne changent pas. Les cartes et données techniques ne reçoivent pas de mesure nouvelle.

Les SHA initiaux des snapshots outils (`072fb1dd94d1a6dc88179f7671a43ce6ed59a478b6c4d9d6ba6441968c91eb14`) et compresseurs (`ce3b794b46b98a79359be67ee1b2154335868779889bd5a04d057a15018f2070`) restent dans les archives d’amendement. Le tableau ci-dessous donne les SHA des octets courants. `encoding-amendment-2026-10-02-b/encoding-equality.json` et `artifact-synchronization.json` décrivent l’opération distincte et les artefacts de provenance synchronisés ; les anciennes attestations indépendantes ne sont pas réécrites comme si elles avaient examiné ces octets nouveaux.

Un correctif distinct de provenance normalise les identifiants de 46 preuves BOGE E et leurs références de champ, en conservant les identifiants bruts dans les sources. Il ne modifie aucun chiffre, observation primaire ou image. Le contrôle autonome porte désormais sur 23 mutations invalides ; le handoff compresseurs consigne 19 tests Vitest ciblés réussis dans la répétition, sur la factory B et l’historique de preuve. Ce correctif ne réécrit pas les six ledgers historiques de guides.

## Empreintes de livraison

| Artefact | SHA-256 |
| --- | --- |
| Snapshot outils B | `eed6ab2e2b9fe6fdc87e4f38cef69bdce982f2c451c557eead0570f92fed945a` |
| Snapshot compresseurs B | `d5d7b726f6a9ae1ffbfe7feb5ef5d1b7745d28a6cfe28defd3081041e8b3d3bc` |
| Ledger guides figé, drafts | `6e97a5aace48a77acdd11e7e2ddb38b099d66cc7c4e12f840b45ae0900161f89` |
| Ledger guides proposé, avec révisions et mappings | `29e7786529e67c8b17c5afd4f2d1a807b4533e8bac988622c53b5664d73f0691` |
| Manifeste des 72 cibles éditoriales | `1e99f48994c022ef0962f210d8395e7b0d90503e44deac102bbffc229e53bbdd` |

La provenance de ce bilan est constituée des handoffs figés outils et compresseurs, des attestations indépendantes, du manifeste et du rapport d’intégration éditoriale, de la vérification locale des empreintes, du relevé des compteurs des factories et de l’audit de santé des sources enregistré. Les rapports de préparation et les archives originales restent sous `/tmp` ; ce bilan n’introduit aucune observation technique nouvelle.
