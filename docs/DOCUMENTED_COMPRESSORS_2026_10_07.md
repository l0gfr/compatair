# Lot compresseurs du 7 octobre 2026

Ce lot ajoute 200 identités constructeur au baseline `cc5d36a36aed7c9f4bdecaa5a3bf90543461df6b`, qui contient 4 759 profils de compresseurs. La sélection ne crée aucune référence à partir d'une fréquence ou d'une pression alternative. Les quatre marques sont absentes de ce baseline. Le nombre de modèles documentés ne démontre pas leur disponibilité commerciale actuelle en France.

| Fabricant | Nouveaux modèles | FAD à pression qualifiée | Cycle 100 % explicite | Cuve qualifiée | Puissance kW qualifiée | Fréquence qualifiée |
|---|---:|---:|---:|---:|---:|---:|
| FS-Curtis | 87 | 87 | 31 | 0 | 0 | 0 |
| Comprag | 61 | 61 | 0 | 26 | 61 | 61 |
| Rotair | 24 | 24 | 0 | 0 | 0 | 0 |
| SWAN | 28 | 28 | 0 | 1 | 19 | 0 |
| Total | 200 | 200 | 31 | 27 | 80 | 61 |

## Références et portée des preuves

FS-Curtis : 87 fiches déclaratives constructeur au format CAGI, accessibles dans les [ressources officielles](https://us.fscurtis.com/support/resources/), donnent un débit de sortie et sa pression de fonctionnement sous ISO 1217. La mention ACFM aux conditions d'entrée exprime les conditions de référence du débit mesuré ; elle n'est pas interprétée comme un volume d'aspiration disponible au raccord. Le suffixe de pression est consolidé avant de compter un modèle. Les configurations ECO-Pure à refroidissement par air ou par eau restent distinguées par leur propre nom constructeur. Aucune puissance moteur en hp n'est convertie silencieusement en puissance absorbée de l'ensemble.

Les pages [NX 4–15 kW](https://us.fscurtis.com/product/nx-series-4-15kw-5-20hp/) et [NX 15–185 kW](https://us.fscurtis.com/product/nx-series-15-185kw-20-250hp/) associent explicitement un cycle de service de 100 % aux modèles présents dans leurs tableaux. La preuve du cycle inclut le nom exact de la ligne correspondante : huit petits NX et 23 NXD/NXV de la gamme supérieure. Les autres familles, ainsi que les anciens NXB18/22/30/37, restent sans cycle numérique qualifié dans ce lot.

Comprag : les catalogues [F, version 2.5](https://www.comprag.com/en/comprag/docs/pdf_manual/Catalog_Stationary_Screw_Compressors_F_EN_v_2_5.pdf), [A, version 1.2](https://www.comprag.com/en/comprag/docs/pdf_manual/Catalog_Stationary_Screw_Compressors_A_EN_v_1_2_web.pdf) et [D, version 1.0](https://www.comprag.com/en/comprag/docs/pdf_manual/Comprag_Catalog_Screw_Compressors_D_series_EN_v_1_0_0.pdf) sont conservés sur la [page documentaire du fabricant](https://www.comprag.com/en/comprag/documentation.php). Seules les références à 8 bar sont importées. Les groupes sur réservoir et ceux intégrant un sécheur possèdent leurs propres codes article et équipements ; ils sont distingués dans le catalogue. Les continuations à cellules fusionnées, notamment certaines cuves de 500 L, sont exclues lorsqu'une ligne complète indépendante ne permet pas de vérifier la configuration. Les tirets ne deviennent jamais un volume de cuve nul.

Rotair : les tables des gammes [MDVN](https://www.rotairspa.com/portable-compressors-diesel/mdvn-range/) et [MDVS](https://www.rotairspa.com/portable-compressors-diesel/mdvs-range/) donnent le débit restitué pour plusieurs versions de pression. Chaque modèle retenu utilise un seul point explicitement publié. Le réservoir de carburant ou d'huile n'est jamais renseigné comme stockage d'air. Les valeurs natives bar/psi et L/min/cfm sont également affichées dans les spécifications.

SWAN : les PDF Oil-less Compressor Series et Oil-free Scroll Compressor Series de la [bibliothèque officielle](https://www.swan-aircompressor.com/en/download) comportent des tableaux de groupes complets. Les pages PDF 6 et 9 du premier, et 6 du second, ont été rendues depuis les originaux capturés puis transcrites après revue visuelle. Le snapshot conserve la grille, les intitulés et le SHA-256 de chaque image de page revue. Les pompes seules sont exclues. La puissance de plusieurs moteurs reste affichée dans son écriture native, par exemple `5.5x4 kW` pour SKR-30M ; elle ne devient pas un champ `powerKw: 22`. Les pressions `kg/cm²` sont conservées dans les cellules originales et explicitement interprétées comme kgf/cm² dans la conversion.

## Pression maximale et point documentaire

Le champ public `maxPressureBasis`, avec sa propre source, distingue deux portées :

- `explicit-maximum-working-pressure` pour les 61 Comprag dont l'en-tête constructeur indique « Max. working pressure (bar) » ;
- `selected-working-pressure-ceiling` pour les 139 autres profils, dont la source qualifie seulement le point de fonctionnement retenu.

Un point CAGI à 100 psig ne prouve pas le maximum matériel du compresseur. Un besoin supérieur à ce seul point doit produire `insufficient_data`. Un besoin supérieur à une pression maximale explicitement publiée peut produire `incompatible`. Aucune pression de soupape ni marge de réglage n'est déduite d'un tableau de FAD. Les 200 profils gardent un seul point : aucune interpolation ni extrapolation entre versions n'est créée.

Les conversions utilisent les [facteurs NIST SP811 B.8](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8) : 1 psi = 6 894,757 Pa ; 1 ft³/min = 0,4719474 L/s ; 1 kgf/cm² = 98 066,5 Pa. Les produits dérivés sont arrondis à trois décimales ; le snapshot conserve les valeurs et unités natives. Les minima de variation de vitesse sont affichés séparément du FAD maximal disponible, sans supposer le régime moteur ou l'efficacité à charge partielle.

## Contradictions et exclusions

La page Rotair MDVN publie pour le libellé incomplet `26 Y` une cellule `2650 lt/min – 88 cfm`, dont les deux valeurs diffèrent d'environ 6 % après conversion NIST. Elle donne également `12 bar / 14 psi`, tandis que `52 Eco5` donne `12 bar – 14 psi`. Les trois contradictions, les valeurs natives et les références exactes de cellules sont versionnées dans `review.documentedConflicts`. Ces deux identités ne sont pas ajoutées. `D 800 D` reste exclu en attendant de résoudre son éventuelle relation avec MDVS 255 D.

Les brochures SWAN présentant seulement le déplacement de piston, les pompes sans groupe complet, les variantes de pression répétées, les lignes Comprag fusionnées non vérifiables et les modèles dont la nomenclature reste incertaine sont exclus. Les catalogues historiques encore accessibles ne sont pas présentés comme une preuve de commercialisation actuelle.

## Traçabilité et validation

Les 97 sources retenues ont été capturées le 7 octobre en HTTP 200 : 62 041 647 octets de réponses originales. Les originaux restent privés. Le snapshot versionné contient les seules pages, tableaux et cellules utiles, avec URL canonique, date d'observation, type MIME, taille et SHA-256. Les URL de stockage SWAN issues d'une redirection temporaire restent dans les métadonnées privées ; leur empreinte et leur origine suffisent au dossier versionné, sans publier une URL éphémère.

Le factory dérive les données depuis ces cellules et citations puis vérifie les empreintes des transcriptions, des réponses et de la revue. Ses tests couvrent unités, FAD, pressions, portée du cycle, cuves inconnues, codes article, bornes de variation de vitesse, contradictions préservées et altérations de preuves. La vérification privée initiale a exécuté 23 cas avec succès. Après installation du contrat public de pression et synchronisation de l'index partagé, les 25 cas du nouveau lot passent, dont la parité des 200 profils agrégés et les frontières entre point documentaire et maximum réel. Les 200 cartes techniques publiques utilisent le SVG exact du générateur CompatAir, en 1 200 × 800, pour 294 479 octets au total. Les WebP initiaux du lot ont été retirés après un dépassement mesuré du budget de release ; seul le chemin de l'image change dans chaque produit, sans modification des faits ni des preuves. La comparaison exacte au générateur et le plafond de 250 Kio par image restent obligatoires.

Aucun essai physique CompatAir n'est revendiqué. Les cycles, fréquences et volumes inconnus restent absents des champs numériques. L'import n'ouvre aucun nouveau quota d'indexation : l'admission SEO de chaque URL relève du contrôle éditorial partagé. CI, déploiement et vérification HTTPS de production restent des étapes distinctes.

## Migration des plafonds documentaires antérieurs

Les quatre snapshots antérieurs distinguaient déjà les plafonds documentaires dans leurs transcriptions, mais cette qualification ne traversait pas le schéma public. La migration ajoute `maxPressureBasis: selected-working-pressure-ceiling` et sa citation existante à 941 profils. Les factories dérivent ce champ uniquement lorsque le snapshot le déclare.

| Lot | Plafonds documentaires migrés | Maxima explicites conservés | Autres caractéristiques | Images et snapshot |
|---|---:|---:|---|---|
| 4 octobre | 114 | 86 | Identiques | Empreintes identiques |
| 4 octobre, B | 284 | 136 | Identiques | Empreintes identiques |
| 4 octobre, C | 338 | 82 | Identiques | Empreintes identiques |
| 5 octobre | 205 | 95 | Identiques | Empreintes identiques |
| Total | 941 | 399 | Identiques | Empreintes identiques |

Aucune transcription, valeur FAD, cuve, puissance, image, identité ou référence de preuve n'est modifiée. Les champs préexistants des 1 340 profils sont comparés aux objets canoniques sauvegardés avant migration, après retrait des deux ajouts. Les quatre snapshots et toutes les images sont contrôlés par SHA-256. Les 941 demandes témoins au-dessus d'un plafond documentaire produisent `insufficient_data`. Les 399 demandes au-dessus d'un maximum explicitement publié restent `incompatible`. Ces résultats ne préjugent pas d'une installation réelle.

Les trois anciens tests qui assimilaient une pression de configuration Puska ou Kaishan OX à un maximum matériel ont été corrigés pour attendre des données insuffisantes au-delà du seul point documenté. Les baselines historiques conservent leurs nombres antérieurs et excluent explicitement les 200 ajouts du 7 octobre. Les six suites dédiées, quatre historiques, une pour le nouveau lot et une pour la migration, passent : 135 tests exécutés avec succès.
