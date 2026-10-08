# Lot compresseurs du 8 octobre 2026

Ce lot ajoute 200 références constructeur distinctes au baseline `cf46ffaac88d9a4c05c4cda47573175bfbe7cdf3`, qui contient 4 959 compresseurs. Les modèles, codes et alias sont dédoublonnés contre ce catalogue avant dérivation. Les tableaux servent à identifier des groupes effectivement nommés par les fabricants ; aucun modèle n'est créé par combinaison de pressions ou de fréquences.

| Fabricant | Références | Débit restitué à pression connue | Cuve en litres | Cycle 100 % publié | Puissance kW native | Masse nette ou en service, kg | Fréquence connue |
|---|---:|---:|---:|---:|---:|---:|---:|
| Rolair | 97 | 97 | 11 | 3 | 0 | 0 | 94 |
| Sullivan-Palatek | 38 | 38 | 0 | 0 | 0 | 0 | 0 |
| AIRMAN | 48 | 48 | 0 | 0 | 0 | 48 | 0 |
| Anest Iwata | 17 | 17 | 8 | 0 | 17 | 17 | 17 |
| Total | 200 | 200 | 19 | 3 | 17 | 65 | 111 |

Les 200 pressions de débit sont qualifiées. Cela ne rend pas tous les verdicts conclusifs : 197 profils restent sans cycle de service numérique, et 181 sans cuve qualifiée en litres. Ces inconnues doivent rester visibles. Aucun essai physique CompatAir ni record de couverture du marché n'est revendiqué.

## Rolair : débit livré, alimentation et volumes natifs

Les [tables stationnaires du fabricant](https://www.rolair.com/air-compressors/stationary-electric-air-compressors/15-3-hp-single-stage) documentent 76 références effectivement différentes : cuve horizontale ou verticale, taille et phase électrique. Les 21 autres références viennent des fiches individuelles de groupes portatifs et sur roues. Les FC229MK103 et FCOL22LS6 du baseline sont exclus. Aucune version australienne 50 Hz n'est utilisée pour compléter une référence américaine 60 Hz.

La [FAQ primaire](https://www.rolair.com/service-support/frequently-asked-questions) définit CFM Delivered comme le débit effectivement livré à une pression précise, et CFM Displacement comme une quantité théorique. Chaque point importé cite à la fois la cellule Delivered et cette définition. Les déplacements restent dans les spécifications natives et ne deviennent jamais `intakeFlowLpm` ou FAD. La source ne précise pas les conditions atmosphériques de ces points ; elle ne permet pas de revendiquer ISO 1217.

Le mot Gallons ne suffit pas à choisir US ou impérial. Le volume numérique reste donc absent pour 86 Rolair. Onze fiches bilingues officielles liées aux modèles exacts publient directement des litres : 5715K17, AB5PLUS, D2002HPV5, FC1500HS3, FC2002, FC2002HBP6, GD5000PV5H, JC20, VT20ST, VT20TB et VT25BIG. Les litres natifs sont conservés, sans conversion de gallons ni décimales supplémentaires supposées.

Les fiches exactes [3095K18](https://www.rolair.com/air-compressors/wheeled-electric-air-compressors/3095k18), [5230K30CS](https://www.rolair.com/air-compressors/wheeled-electric-air-compressors/5230k30cs) et [5715MK103](https://www.rolair.com/air-compressors/wheeled-electric-air-compressors/5715mk103) lient des feuilles constructeur présentant un cycle 100 %. Leurs pages image ont été rendues et relues ; le modèle et la cellule de cycle sont conservés ensemble. Un moteur S1, une description Continuous Duty ou le fonctionnement à vitesse constante optionnel du manuel de famille ne suffisent pas à qualifier les autres configurations.

Les fréquences 60 Hz proviennent des paragraphes moteur des sept familles stationnaires et de 18 fiches portatives. Les phases Single et Three des 76 lignes stationnaires restent attachées à leur propre modèle. Les alternatives de tension triphasée ne deviennent pas des variantes supplémentaires. Les poids Rolair intitulés Shipping Weight restent des masses d'expédition natives, sans import dans `weightKg`.

## Sullivan-Palatek : points ISO et vraies versions VFD

Les [Legacy](https://www.sullivan-palatek.com/product-detail/legacy-series-15-40-hp/), SPM, SP11, SP13, SP16+, SP20+, SP25 et SP32 fournissent 28 modèles à vitesse fixe. La [table VFD](https://www.sullivan-palatek.com/product-detail/vfd-variable-frequency-compressor-series/) fournit dix versions à variateur dont le point retenu porte la qualification CAGI/ISO 1217. Chaque ligne cite sa capacité, sa pression et la note normative exacte.

Un seul point est retenu par identité commerciale. Les différentes pressions d'une famille peuvent correspondre à des configurations différentes ; elles ne sont pas assemblées en une courbe de machine mesurée. Les VFD sont nommés séparément par le constructeur et représentent un équipement de commande réel. Aucun débit minimal, taux de modulation ou rendement à charge partielle n'est inventé.

Les hp moteur sont affichés dans leur unité native. Ils ne deviennent ni une puissance absorbée totale en kW ni un cycle de service. Les cuves, tensions et sécheurs proposés en option ne sont pas attribués au groupe de base. Les SPM H/HH, Legacy H, modèles ECC non qualifiés et entraînements sans groupe complet sont exclus de ce lot.

## AIRMAN : FAD natif et masse en service

Les [familles de compresseurs thermiques](https://www.airman.co.jp/en/product/category-1/series-1/) et les 48 fiches individuelles retenues publient explicitement Free Air Delivery, pression nominale MPa, moteur, émissions, robinets de sortie, dimensions et masses à sec/en service. Les valeurs natives m³/min et MPa sont utilisées : m³/min × 1 000 donne L/min ; MPa × 10 donne bar. Les CFM et psi secondaires restent des cellules originales, sans remplacement des unités SI par des conversions arrondies.

La masse entre parenthèses du champ Dry (Operating) weight est la masse en service ; les valeurs à sec sont affichées séparément dans les spécifications. Les niveaux de pression sonore mesurés à 7 m dans quatre directions restent des données natives avec leur protocole, sans être fusionnés avec le bruit à 1 m d'autres fabricants.

La puissance du moteur diesel n'est pas celle de l'ensemble pneumatique : `powerKw` reste absent. Les capacités de carburant, huile et liquide de refroidissement ne renseignent jamais une cuve d'air. Le type Trailer qualifie les groupes mobiles ; aucun montage sur roues n'est déduit pour les groupes Box. L'équipement et les normes d'émissions du catalogue international ne démontrent pas l'homologation ou la disponibilité actuelle en France.

Les modèles à plages de pression/débit, les doubles pressions et les codes incomplets ne sont pas retenus. Le lot utilise 48 références mono-point de groupe complet, chacune capturée sur sa fiche individuelle actuelle.

## Anest Iwata : cellules partagées relues et configurations australiennes

Le [catalogue Air Energy d'Anest Iwata Australia](https://anest-iwata.com.au/product-guides/100-oil-free-scroll/air-energy-catalogue.pdf) documente 17 groupes 8 bar sur les pages PDF 4, 5 et 6. Ces pages ont été rendues et relues pour vérifier l'application des cellules fusionnées de pression, alimentation, commande et cuve aux modèles exacts. Le snapshot conserve les grilles utiles et le SHA-256 de chaque image de page revue.

Les 07E/07ED possèdent une cuve interne 5 L ; six groupes ont une cuve 90 L, dont trois avec sécheur. Les versions standard ou multiplex dont la colonne cuve contient un tiret gardent un volume numérique inconnu. Le sécheur membrane du 07ED et les montages ED ne sont pas de simples alias : leurs équipements, débit ou masse sont documentés séparément.

La dernière colonne normalisée de la page 4 est `Dryer pressure dew point (°C)`, distincte des colonnes d'équipement des autres pages. La cellule native `15` du SLPA-07ED produit le fait sourcé « point de rosée sous pression du sécheur : 15 °C ». Le tiret du SLPA-07E reste une cellule non chiffrée ; il ne démontre ni une température ni une absence de sécheur. Les libellés de configuration n'incorporent aucun chiffre sans unité.

La note constructeur situe le FAD au maximum de travail publié. La pression 8 bar constitue donc un maximum explicite pour ces 17 configurations. L'alimentation native 240/50/1 ou 415/50/3 est conservée ; aucune version française 230/400 V n'est substituée. Le bruit cite la distance 1 m, ISO 11201 et la tolérance ±3 dB.

Pour les multiplex, le total kW publié précède la composition des moteurs, par exemple `11(3x3.7)`. Le profil conserve 11 kW, sans substituer 11,1 kW. Les m³/h secondaires, arrondis différemment des L/min, restent affichés tels que publiés. Le caractère oil-free ne démontre pas une aptitude à l'air respirable ni la propreté d'une installation située en aval.

## Maximum matériel et plafond documentaire

Le champ `maxPressureBasis` et sa source distinguent 18 maxima explicitement publiés, les 17 Anest Iwata et PS200PC, de 182 points de fonctionnement seulement documentaires. PS200PC publie 200 psi maximum, mais son seul débit livré est donné à 90 psi. Une demande située entre ces pressions manque donc encore de FAD et ne doit pas devenir compatible.

Au-dessus d'un point documentaire, `insufficient_data` s'applique ; au-dessus d'un maximum démontré, `incompatible` peut s'appliquer. Aucun réglage de coupure, chiffre de soupape ou cadran gradué à 200 psi n'est traité comme une nouvelle mesure de capacité. Les points et conversions sont arrondis à trois décimales, avec les unités natives préservées. Les conversions psi et cfm citent les [facteurs NIST SP811 B.8](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8).

## Contradictions conservées et exclusions

- JC10PLUS : la fiche bilingue annonce 2,5 gallons en anglais et 8,7 L en espagnol. Les deux cellules restent visibles ; `tankLiters` est absent.
- FC2002HBP6 : le tableau donne 5,3 gallons en anglais et 20 L en espagnol ; le texte promotionnel annonce 6 gallons et 23 L. Les 20 L proviennent du tableau technique exact, et les mentions promotionnelles contraires restent sourcées dans la fiche.
- PDS670SD-4C5 : la famille publie `19.0 [71]`, la fiche individuelle `19.0 [671]`. Les deux cellules sont conservées. Le FAD utilise les 19,0 m³/min présents dans les deux documents, sans corriger silencieusement la valeur CFM.
- PDSF100SC-5C3 : deux familles publient des pressions et des moteurs incompatibles ; la référence est exclue. PDS100LC-5C5 est également exclu pour une différence non résolue d'équipement After cooler.
- Les PDF Rolair dont le nom omet le suffixe A ou D ne complètent pas 5520MK103A, 6820K17D ou 6820MK103D.
- Les lignes Anest Iwata 10 bar à conversions L/min/m³/h incohérentes, les anciens liens JUN-AIR redirigés vers un HTML Gast générique, et les SCFM Powerex sans conditions de référence qualifiées ne sont pas utilisés comme données FAD.

## Traçabilité, images et contrôles

Les 108 sources retenues ont été capturées en HTTP 200 le 8 octobre : 59 781 071 octets originaux conservés en privé. Le snapshot versionné contient uniquement les extraits techniques nécessaires, URL, URL finale, date, MIME, octets et SHA-256. Un audit privé a vérifié les 108 tailles et empreintes contre les originaux, les citations et 1 572 lignes techniques contre le texte primaire. Six pages image PDF sont documentées par leur revue manuelle et empreinte de rendu. Aucun PDF complet, capture d'écran ou texte de navigation/cookies n'est versionné.

Le factory scelle le snapshot relu puis dérive les valeurs depuis les cellules et citations. Les tests couvrent identités/alias, altérations des sources, unités, débits aspirés et livrés, maxima documentaires, cuves inconnues, masses d'expédition, bruit, cellules contradictoires et cycles attribués au modèle exact. Les 200 cartes sont les SVG exacts du générateur CompatAir en 1 200 × 800 : 295 583 octets au total, 1 498 octets au maximum, avec plafond contractuel 250 Kio par image.

La dérivation privée et l'audit documentaire passent. Après synchronisation de l'index partagé, la suite Vitest dédiée passe sous Node 24.19.0 : 29 tests exécutés, dont la parité exacte des 200 produits agrégés, les frontières de pression et le contrat des 200 SVG. Les contrôles globaux et la preuve HTTPS du SHA actif restent à effectuer par le responsable du lot partagé. L'admission SEO garde son quota et ses réserves éditoriales indépendamment de l'ajout au catalogue. Les tests locaux ne démontrent ni une activation en production ni une indexation Google.
