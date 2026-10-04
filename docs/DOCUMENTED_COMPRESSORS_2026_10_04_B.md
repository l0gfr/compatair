# Lot compresseurs du 4 octobre 2026, complément B

Ce lot ajoute 420 identités constructeur absentes du baseline `dbfbe1fb72d5f9abb04bc9c7cb5ea48a33122f20`. Le baseline contenait 3 619 configurations et 2 305 identités normalisées ; le catalogue comporte après ajout 4 039 configurations de compresseurs. Les compteurs globaux et la compilation de publication sont vérifiés séparément.

Les variantes seules de pression, de tension, de contrôleur et de démarreur sont consolidées. Les cuves, sécheurs et traitements de cuve distincts sont retenus lorsque le fabricant donne une référence et un équipement différents. Les décimales restent distinctes : 18,5 et 18.5 représentent la même taille ; 185 en représente une autre. Mercury Mech/Tronic 4.0 et Ghibli SE/4.0 ont été consolidés par prudence lorsque les différences documentées portaient sur la commande.

La sélection favorise les FAD fixes, le service continu et les volumes de cuve explicites. Les 153 Nuair/Shamal à FAD fixe remplacent 131 modèles industriels moins complets. Les pistons Shamal ne publiant que l’air aspiré sont exclus. Les 103 Hertz/Dalgakiran/Lupamat retenus disposent de points FAD fixes. Les 15 Puska PKE VF utilisent le minimum de la plage FAD publiée à une pression précise, sans inventer un régime de vitesse. Les Quincy QGSV publient un point FAD à pression précise ; le régime de vitesse reste non qualifié.

| Marque | Identités / FAD qualifiés | Service continu explicite | Cuve qualifiée | Cuve inconnue | Fréquence explicite | Fréquence inconnue |
|---|---:|---:|---:|---:|---:|---:|
| Dalgakiran | 34 | 0 | 0 | 34 | 0 | 34 |
| Fini | 23 | 23 | 23 | 0 | 23 | 0 |
| Hertz | 34 | 0 | 0 | 34 | 0 | 34 |
| Lupamat | 35 | 0 | 0 | 35 | 0 | 35 |
| Nuair | 85 | 59 | 40 | 45 | 0 | 85 |
| Puska | 118 | 0 | 79 | 39 | 118 | 0 |
| Quincy | 23 | 0 | 0 | 23 | 0 | 23 |
| Shamal | 68 | 42 | 33 | 35 | 0 | 68 |
| Total | 420 | 124 | 175 | 245 | 141 | 279 |

Une cuve inconnue est omise du champ numérique `tankLiters` et affichée « Non documentée ». Aucun tiret, NA ou absence de colonne ne devient zéro. Les sept valeurs de stockage nul Fini sont reliées au montage « FLOOR MOUNTED » explicitement rendu et revu. Les Quincy utilisent `gallon` sans qualifier sa définition ; la valeur originale est affichée, sans conversion supposée en litres.

Puska, page PDF 18 : la colonne L/min utilise le point comme séparateur de milliers (`1.332` = 1 332 L/min, `1.860` = 1 860 L/min). La puissance `5,5` est décimale. Le parseur impose `spanish-thousands` uniquement aux cellules L/min correspondantes ; `1.332` en m³/min reste 1,332 m³/min avant conversion. La puissance CNR 100/270 est suspendue : le tableau indique 5,5 kW, tandis que la version de base CNR 100 indique 7,5 kW. Les deux lignes sont conservées comme divergence à confirmer.

Quincy : les unités originales psig et cfm restent visibles. NIST SP811 B.8 donne 1 psi = 6 894,757 Pa et 1 ft³/min = 0,4719474 L/s. Les conversions utilisent ces coefficients, puis arrondissent à trois décimales. La fréquence 60 Hz mentionnée pour certains sécheurs n’est pas attribuée au compresseur.

## Sources primaires et cellules

Les réponses HTTP originales ont été reçues le 4 octobre 2026, statut 200, puis revérifiées sur disque par longueur et SHA-256. Les PDF originaux sont archivés en privé. Le snapshot versionne les pages extraites nécessaires, les références exactes de page/table/ligne/colonne et les textes de qualification. Les transcriptions visuelles Fini portent aussi le SHA-256 du rendu de page. La factory scelle les transcriptions, les métadonnées HTTP et les pages par SHA-256.

| Source | Pages PDF / section utilisée | Octets originaux | SHA-256 |
|---|---|---:|---|
| [Hertz, catalogue constructeur](https://www.hertz-kompressoren.com/Files/compressor-catalog.pdf) | 9, 12, 13, 16, 27, 28, 29, 30, 33 | 6798749 | `e35f62157b67dcb57d28a0a30b4a0984c996af066a85d60939c70ad4529b6339` |
| [Dalgakiran, catalogue constructeur](https://www.dalgakiran.com/Files/compressor-catalogue.pdf) | 9, 12, 13, 16, 27, 28, 29, 30, 33, 34 | 5925276 | `aabb3138e3f934f46cf268df131ac7aa179a19ac716715bf2661475fef36438b` |
| [Lupamat, catalogue constructeur](https://lupamat.com/pdf/Lupamat-EN-Katalog.pdf) | 10, 11, 12 | 15871017 | `3330cc258da3e7cf4f293c5af0da2ae3ced11d881237b550687f50e1f01fd978` |
| [Puska, catalogue constructeur 2025](https://www.puska.com/content/dam/brands/Puska/catalogos/Cat%C3%A1logo%20Puska%202025.pdf) | 18, 26, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40 | 7784396 | `62ce74f8e02f84d3c021f7162c9e8fd8cd9fc17fa41131797a1d7b3465e92454` |
| [FINI, brochure constructeur MiniCUBE 2.2 kW](https://finicompressors.com/wp-content/uploads/Catalogo-Minicube-Fini_EN_04-2024_9990399.pdf) | 3 | 774724 | `ae9080bae3535de170f91db99852b2aa9cfd64c479340b249149724f40a08c4c` |
| [FINI, brochure constructeur CUBE 4-7.5 kW](https://finicompressors.com/wp-content/uploads/Catalogo-Cube-Fini_EN_04-2024_9990397.pdf) | 1, 3 | 745100 | `270d2f554801e15883dd85b3f3b6089c641adf51dd59c15f31e0fd06c7b88e1a` |
| [NUAIR, catalogue Mercury Sirio constructeur](https://www.nuair.it/index.php/en/products/screw-compressors/2-2-75-kw-mercury-sirio/item/download/233_e5ecc2c63ad302ab5dbd9a36ad2a22ff) | 5, 9, 11, 13, 15, 17, 19 | 3619836 | `8bb805eb71b9abbbd8ebf0c77804627936254c8b8c227e0fe7673395e13c04b8` |
| [NUAIR, catalogue POLAR constructeur](https://www.nuair.it/index.php/it/novita/item/download/238_6f1e475d0a61e0c63a810e034e847e55) | 20, 22 | 3776326 | `6f1dce9f0026ce320c9dbf5a77633d6ff8cda2d2f4e9cfef3f7591917a4ae0c4` |
| [NUAIR, catalogue Star Vega constructeur](https://www.nuair.it/index.php/en/products/screw-compressors/7-5-22-kw-star-vega/item/download/180_63ea4e42712a56cfeaeb57e7958480b4) | 2, 5 | 2099082 | `64ff835de391da58b7ae2870a5dc681fb577355b5ad0ba94e7f39b07a389bb78` |
| [Shamal, catalogue BORA constructeur](https://www.shamalcompressors.com/en/screw-compressors/download/139_7c4312e2be9d86b4e8f229e8083c3e9e.html) | 1, 20, 22 | 6674702 | `10939b0bee12283ce3b990ddccbe5fdb13030a13993cabd6be79d26d276f6a04` |
| [Shamal, catalogue Ghibli Storm constructeur](https://www.shamalcompressors.com/en/screw-compressors/download/137_6eec044a62a122f209e5a0d5e9e7f0f3.html) | 1, 8, 11, 13, 15, 17, 19, 22 | 5361334 | `1b5133ca855ed01c80f35e95347f5df15414a9ac7138dfe459137b4bca7c55c8` |
| [Quincy, QGS et QGSV](https://www.quincycompressor.com/wp-content/uploads/2023/12/QC-QGS-QGSV-4p-AP-1-min.pdf) | 2 | 128228 | `3846893a6d89c68cf8053db3ba68ff0fdc4a1b20e9f71940c73a2813bb8245f8` |
| [NIST, Guide to the SI, appendix B.8](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) | Table B.8, lignes psi et ft³/min | 169319 | `d3ba38edef97bc380f20879b3c5b16067cc25bf230584cc7af67638b500c8c30` |

Hertz et Dalgakiran : ISO 1217:2009 annexes C/E selon la famille, à la pression bar indiquée dans la même ligne ; aucune fréquence présumée. Lupamat : ISO 1217:2009 annexe C pour les gammes D, annexe C/E pour la famille EVO retenue. Puska : ISO 1217 annexe C. Fini, Nuair et Shamal : ISO 1217 avec les pressions de mesure précisées en pied du tableau ; Fini 7,5/9,5 bar de mesure sont conservés distincts des plafonds 8/10 bar. Quincy : ISO 1217 annexe E, édition 4:2009.

## Vérification des verdicts

Avec un outil témoin de demande fixe 100 L/min à 6,3 bar et marge 25 %, les 420 profils produisent 124 verdicts `continuous`, 296 `insufficient_data`, zéro `intermittent` et zéro `incompatible`. Ce témoin contrôle la qualification des dimensions, il ne représente pas une installation réelle. Aucun verdict continu n’est déduit d’un cycle absent. Un plafond de pression inférieur au besoin reste conclusivement incompatible.

Un scénario de pointe 600 L/min, moyenne 120 L/min, FAD 325 L/min et cycle continu, sans cuve documentée, reste `insufficient_data` pour le fonctionnement intermittent ; réserve utile, durée de travail, récupération et scénario de rafale restent absents.

Validation locale initiale : factory 25 tests réussis ; tests ciblés catalogue/normalisation/cartes/titres/imports 96 tests sur 5 fichiers réussis ; `catalog:check` sous Node 24 réussit avec 20 126 produits (4 039 compresseurs, 16 087 outils). Le contrat de cuve facultative fait aussi l’objet de tests frontière/failure séparés. Le build, les audits globaux, les compteurs et la taille d’archive restent traités par la tâche principale. Aucun nouveau lot d’indexation n’est ouvert ; aucune publication Git ou production n’est effectuée par cet import.

Le registre public reçoit 294 observations MPN `added`, toutes datées du 4 octobre et issues des références effectivement documentées. L’historique append-only reçoit 759 nouvelles preuves ; aucune correction de preuve antérieure ni modification de photographie mensuelle. Les compteurs des documents publics et de la découverte agent sont alignés avec les 4 039 compresseurs. Tests observatoire/dossier : 20 réussis ; contrats de périmètre, import, gouvernance et plage industrielle : 25 réussis.
