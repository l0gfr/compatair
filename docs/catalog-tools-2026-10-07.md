# Outils documentés du 7 octobre 2026

Ce lot ajoute 1 000 modèles d’outils portatifs et configurations réellement proposées par leurs fabricants. Les configurations de buse, chapeau et alimentation restent identifiées séparément. Le nombre de fiches ne représente pas 1 000 conceptions mécaniques indépendantes.

Le snapshot `src/data/imports/documented-tools-2026-10-07.json` versionne les URL primaires, dates de capture, statut HTTP, taille et SHA-256 des réponses originales. Les extraits contiennent les cellules techniques, tableaux et clauses nécessaires au régime de consommation. Les notices complètes, photographies de contrôle et redirections temporaires restent dans les captures privées. Les caractéristiques reposent sur des déclarations constructeur ; aucun essai physique CompatAir n’est revendiqué.

| Marque documentaire | Fiches | Points minute qualifiés | Volumes par action qualifiés | Profils insuffisants |
| --- | ---: | ---: | ---: | ---: |
| Walcom | 231 | 158 | 0 | 73 |
| Meiji | 105 | 105 | 0 | 0 |
| UHT | 17 | 0 | 0 | 17 |
| Prevost | 158 | 98 | 0 | 60 |
| Yutani | 128 | 0 | 0 | 128 |
| Binks | 68 | 0 | 0 | 68 |
| EXAIR | 112 | 0 | 0 | 112 |
| Hitachi | 11 | 0 | 11 | 0 |
| Metabo HPT | 6 | 0 | 6 | 0 |
| Paslode | 17 | 0 | 0 | 17 |
| Haubold | 14 | 0 | 0 | 14 |
| Unior | 26 | 0 | 0 | 26 |
| DeVilbiss | 13 | 13 | 0 | 0 |
| Walther Pilot | 94 | 70 | 0 | 24 |
| **Total** | **1 000** | **444** | **17** | **539** |

Les 14 marques documentaires ne sont pas présentées comme 14 fabricants indépendants. Les identités Hitachi, HiKoki et Metabo HPT sont réunies lors du dédoublonnage. La marque historique de chaque notice reste affichée sur la fiche concernée. La présence d’une référence archivée ne garantit pas sa disponibilité actuelle en France.

## Portée des consommations

Les 444 points minute utilisent des L/min natifs appariés à une pression et à une opération de soufflage ou d’atomisation. Chaque profil conserve un seul point ; il ne prétend pas couvrir toute la plage de pression autorisée ni tous les réglages de jet. Une pompe pneumatique ou un réservoir de produit partageant le compresseur constitue une demande supplémentaire, distincte de l’air d’atomisation.

Les 17 notices Hitachi/Metabo HPT donnent des L/cycle et une formule constructeur qui multiplie ce volume par la cadence pour dimensionner la capacité du compresseur. Le profil conserve le point natif 6,2 bar. Les points 5,5 et 6,9 bar restent consultables en faits, sans interpolation. Le moteur de comparaison produit ne déduit aucune cadence : le dimensionnement par action exige le nombre réel d’actions par minute. Le facteur de sécurité de l’exemple constructeur reste distinct de la marge choisie par l’utilisateur.

Les 31 Paslode/Haubold publient des L/tir à une pression déterminée, mais ces pages ne qualifient pas la base air libre ni les conditions volumétriques. Ces volumes demeurent documentaires. Ils ne deviennent ni un débit permanent en L/min, ni un profil calculable par action sans cette qualification.

Les débits Nm³/min, NL/min, SCFM et CFM ne deviennent jamais automatiquement des L/min utilisables avec le FAD. EXAIR précise ses conditions standard de référence, mais la position de gâchette et le régime de mesure des configurations retenues restent insuffisamment qualifiés. Les deux valeurs originales 37 SCFM et 1 039 SLPM des versions HP1230/HP1330 sont conservées, sans correction silencieuse. Les trois références 1219SS ne reçoivent aucune pression empruntée au tableau d’une autre buse.

Chez Unior, sept fiches donnent une pression recommandée explicite et un débit au régime indéfini : `airflowBasis=unqualified`. Les 19 autres ne donnent qu’une pression maximale, qui reste en faits et ne devient pas une pression de mesure. Les consommations à vide Prevost, les volumes normalisés UHT/Yutani et les tableaux Binks non qualifiés restent `insufficient_data`.

## Modèles et configurations

Walcom et Meiji sont recensés à partir des modèles et configurations de buse/alimentation effectivement proposés dans leurs catalogues. Les motifs de commande restent des motifs ; aucun code complet n’est fabriqué. Les conflits de pression et de débit entre générations ou sources restent bloquants.

Le lot EXAIR comprend 85 pistolets complets de base et 27 ensembles Back Blow complets à références littérales. Ces offres utilisent six familles de poignées et plusieurs buses. Les 602 autres combinaisons de rallonge ou tuyau recensées dans le catalogue sont exclues de l’import. Une buse, une rallonge ou un accessoire autonome n’est pas compté comme un nouvel outil.

Le lot Walther comporte 56 références complètes littérales et 38 configurations Mini/Trend offertes dans les configurateurs constructeur. Les 38 configurations n’ont pas de MPN reconstruit. Les 24 Pilot 2K Bonding restent insuffisants, car les codes actuels et la buse A de 1,4 mm ne permettent pas d’établir la continuité exacte avec la notice d’air capturée.

La matrice DeVilbiss SRi PRO Lite donne 13 combinaisons recommandées : TE5, HV5 et RS1 avec buses 0,8 / 1,0 / 1,2 / 1,4 mm ; MC1 seulement avec buse 0,6 mm. Le point MC1 de 1 bar est conservé malgré le réglage générique de 2 bar figurant ailleurs dans la notice. Les codes de chapeaux, buses et aiguilles sont des pièces, pas des MPN de pistolet complet.

Les cloueurs NR65AK2 long/court et les agrafeuses de couronnes différentes sont distincts uniquement lorsque leur notice fournit la différence fonctionnelle. Les modèles Yutani de serrage de tubes restent des bases configurables, avec leurs motifs et diamètres proposés ; aucun diamètre de douille n’est choisi à la place du fabricant. La contradiction SCH-2/SHC-2 reste visible et empêche un verdict technique.

## Contrôles et publication

La factory déterministe protège le snapshot relu par un digest canonique. Elle vérifie les captures primaires, hôtes HTTPS autorisés, pages, unités, identités, régime et provenance. Les tests couvrent notamment les échecs de source, mutations de données, volumes par action, unités normalisées, pressions maximales, conflits de génération et configurations effectivement recommandées.

Les 1 000 images sont les SVG exacts des cartes techniques CompatAir en 1 200 × 800, pour 1 525 945 octets au total, avec une limite inchangée de 250 Kio par fichier et une limite cumulée testée de 12 Mio. Les WebP initiaux du lot ont été retirés après un dépassement mesuré du budget de release. La comparaison exacte au générateur vérifie les données affichées et refuse tout SVG arbitraire ; seul le chemin de l'image change dans chaque produit. Aucun PDF constructeur complet ni photographie de produit non nécessaire n’est ajouté à Git.

Ce lot ne demande aucune nouvelle admission SEO. La présence d’une fiche dans la base, le statut HTTP de sa source et un point de consommation calculable ne suffisent pas à rendre sa page indexable. Les admissions éditoriales et le quota quotidien restent gérés séparément.
