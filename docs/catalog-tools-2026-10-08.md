# Outils documentés du 8 octobre 2026

Ce lot ajoute 1 000 références et configurations proposées dans les documents primaires de sept marques. Il distingue 204 familles de catalogue, dont 43 corps Hutchins et 30 corps Asturo. Une famille de catalogue n’équivaut pas nécessairement à une conception mécanique indépendante ; les configurations de buse, chapeau et alimentation ne sont pas présentées comme 1 000 outils conçus séparément.

Les identités ont été dédoublonnées contre les 19 087 outils du catalogue publié `cf46ffaac88d9a4c05c4cda47573175bfbe7cdf3`, avec les modèles, MPN et alias de référence. Hitachi, HiKoki et Metabo HPT partagent la même clé de contrôle. Le lot contient 403 codes complets littéralement observés ; les 597 autres fiches conservent leur désignation et configuration sans MPN fabriqué.

| Marque documentaire | Fiches | Familles de catalogue | Points minute qualifiés | Profils insuffisants |
| --- | ---: | ---: | ---: | ---: |
| Anest Iwata | 144 | 33 | 57 | 87 |
| ANI | 204 | 25 | 134 | 70 |
| Sagola | 56 | 8 | 48 | 8 |
| Prona | 332 | 40 | 78 | 254 |
| Schneider Airsystems | 82 | 25 | 0 | 82 |
| Hutchins | 43 | 43 | 0 | 43 |
| Asturo | 139 | 30 | 0 | 139 |
| **Total** | **1 000** | **204** | **317** | **683** |

Le résultat ne réduit pas la part de profils insuffisants par rapport au lot du 7 octobre. Les documents disponibles n’autorisent pas à qualifier un régime, une pression ou une référence volumique absents pour améliorer ce ratio. Les fiches demeurent utiles pour identifier une version, comparer les configurations offertes et connaître précisément la donnée qui manque au dimensionnement.

## Captures et provenance

Le snapshot `src/data/imports/documented-tools-2026-10-08.json` versionne 69 sources primaires : 23 PDF et 46 pages HTML. Il conserve aussi les 39 tableaux techniques sous forme d’images explicitement liés par les pages Prona. Ces 108 réponses originales ont un statut HTTP 200, une date de capture du 8 octobre 2026, un MIME, un nombre d’octets et un SHA-256 vérifiés sur les fichiers originaux. Les extraits versionnés se limitent à 147 ensembles de cellules techniques et clauses nécessaires aux faits. Les originaux complets et les rendus de contrôle restent privés.

Les données reposent sur les déclarations constructeur. Aucun essai physique CompatAir, classement de ventes ou disponibilité française n’est déduit de ces captures. Les catalogues anciens encore liés par le fabricant gardent leur édition et leur limite de continuité avec les générations actuelles. Les pages HTML n’obtiennent aucun numéro de page PDF fictif. Chaque tableau Prona garde son URL de fichier, son hash et le lien avec sa page fabricant dans la provenance.

## Portée des points de consommation

Les 317 profils calculables utilisent des L/min natifs au point de fonctionnement documenté. Le calcul reste limité à ce point, sans extrapolation à toute la plage de pression ou à un autre réglage de jet. La consommation d’une pompe de produit, d’un réservoir pressurisé ou d’un autre utilisateur du réseau reste une demande supplémentaire lorsqu’elle n’appartient pas au montage de référence.

Chez ANI, 134 points décrivent le montage constructeur de référence. RP1 est la lecture amont ; TMD1, lorsqu’elle est publiée, est une pression interne distincte. Le profil d’alimentation retient RP1 avec la consommation de ce montage et explique sa portée. Il ne transforme pas RP1 en pression mesurée au pistolet après n’importe quel tuyau. Les modes air chaud et haut volume d’un même outil ne créent pas deux références. Les configurations TMD2 actuelles ne reçoivent pas les caractéristiques d’un ensemble TMD1 ancien.

Les 57 points Iwata retenus sont associés à la pression d’atomisation à l’entrée, gâchette ouverte, explicitée par la notice. Les 23 lignes dont les valeurs SI MPa et bar divergent dans la même cellule sont classées `contradictory`. Aucune valeur n’est choisie entre 0,24 MPa et 2,5 bar, ou entre 0,29 MPa et 3,0 bar, pour produire un verdict conclusif. Les 53 configurations AIRGUNSA dont l’air est publié en Nℓ/min restent hors du calcul FAD faute de conditions volumétriques de référence. Les onze outils de garage du même catalogue conservent leur construction et leurs codes, avec consommation absente lorsque le tableau ne la donne pas.

Prona fournit 78 grilles de configuration à pression fixe appariée à une consommation et un débit de produit. Les cellules kg/cm² et MPa restent visibles ; seule la valeur MPa expressément publiée est convertie dimensionnellement en bar, avec une limite sur l’arrondi des unités. Ces cellules ne représentent pas deux essais distincts. Les 254 configurations à plage de pression restent documentaires : aucun débit n’est associé artificiellement à une borne.

Sagola définit une pression dynamique de référence de 2 bar pour ses consommations de chapeau. Les pressions recommandées pour une peinture restent distinctes de cette mesure. Huit configurations sont bloquées par une divergence de valeur actuelle ou par une paire d’unités incohérente. Les renames qui conservent un MPN déjà présent, les changements de godet et les versions d’affichage numérique ne sont pas comptés comme de nouvelles références.

## Données insuffisantes conservées

Schneider donne des besoins d’air, moyennes et volumes par course dans des tableaux différents. Aucun `Luftbedarf` n’est déclaré en charge sans qualification explicite. Les L/Hub et L/Schlag restent par action, sans cadence inventée ni assimilation au FAD : neuf profils mentionnent précisément l’absence de base air libre et de référence volumique. Le maximum des ES 150 reste une limite mécanique, pas une pression de mesure. Les quatre gonfleurs RF n’obtiennent aucun débit par défaut. Les deux passages contradictoires de SBS 700 SYS et les codes D/G non arbitrés de trois outils sont conservés avec leur pagination et leurs cellules complémentaires. Quatre coffrets et deux pompes à graisse sont exclus de ce lot.

Les 139 configurations Asturo couvrent tous les 30 corps transcrits, avec diamètres de buse réellement proposés. Le code d’article de base et le code de buse restent séparés ; aucun MPN complet n’est reconstitué. Le catalogue ne précise pas suffisamment le régime et la base volumique de sa consommation. Les 28 configurations Asturo supplémentaires réellement observées mais non retenues sont recensées dans les exclusions, en privilégiant la diversité de corps des autres marques.

Hutchins conserve 43 corps différents, avec un seul montage de plateau par corps. Les différences de fixation ou de largeur du seul plateau ne multiplient pas les fiches. Les CFM restent natifs ; aucun chiffre d’un voisin ne remplace la pression absente des modèles 500, 600 ou 700. Le fabricant annonce la fermeture des nouvelles ventes et une suspension de fabrication sans calendrier de reprise : les sources documentent l’outil et ne promettent pas un achat disponible.

## Contrôles et publication

La factory déterministe vérifie captures HTTPS, hôtes, MIME, pagination, liens des tableaux Prona, unités, régimes, identités et provenance, puis protège le snapshot relu par un digest canonique. Les tests couvrent les mutations de données, échecs de source, unités normalisées, pression maximale, loci RP1/TMD1, contradictions, consommation par action et cadence réelle. Le contrôle des fichiers canoniques conserve les 1 000 fiches et utilise des lectures bornées à 32.

Les 1 000 cartes sont les SVG exacts du générateur existant, en 1 200 × 800, pour 1 522 719 octets au total. La limite reste de 250 Kio par carte, sans image externe ou SVG arbitraire. Aucun PDF complet n’est ajouté à Git. Les titres produit et d’usage identifient les modèles et configurations, sans troncature automatique ; ils sont uniques et ne dépassent pas 54 caractères dans le lot.

La présence d’une fiche dans la base ne constitue pas une admission SEO. La revue éditoriale positive, les limites quotidiennes et la vérification de la publication restent gérées séparément par les mécanismes d’indexation du projet.
