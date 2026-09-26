---
title: "Buse de sablage : quel débit selon le diamètre et la pression ?"
seoTitle: "Buse de sablage : diamètre, pression et débit"
description: "Tableau Clemco vérifié, conversions cfm en L/min et effet de l’usure : dimensionnez l’air d’une buse sans confondre débit de buse et installation complète."
pubDate: 2026-09-26
category: "Choisir"
audiences: ["particulier", "professionnel"]
metiers: ["btp-chantier", "maintenance-industrielle", "carrosserie-peinture"]
readingTime: 7
featured: false
reviewStatus: "internal"
relatedGuides: ["compresseur-pour-sablage-pneumatique", "convertir-cfm-l-min-nl-min-air-comprime", "diametre-longueur-flexible-air-comprime"]
sources:
  - https://www.clemcoindustries.com/s/Compressed_Air-wxh8.pdf
  - https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8
  - https://www.clemcoindustries.com/s/NozzleWear.pdf
  - https://www.clemcoindustries.com/s/AirVolume_Est.pdf
  - https://www.clemcoindustries.com/charts
---

**Le diamètre de la buse et la pression à la buse changent fortement le besoin d’air d’une installation de sablage.** Dans le tableau Clemco, une buse n° 3 demande 30 cfm à 60 psi, contre 54 cfm pour une n° 4 à la même pression. Cela représente environ **850 et 1 529 L/min**, avant de dimensionner les autres besoins de l’installation. [Clemco, tableau de consommation d’air et d’abrasif](https://www.clemcoindustries.com/s/Compressed_Air-wxh8.pdf).

Ces ordres de grandeur concernent les buses du tableau constructeur. Ils ne doivent pas être appliqués tels quels à tous les pistolets à aspiration ou à toute aérogommeuse. Commencez par identifier le système de projection et sa notice. Le [guide général du sablage pneumatique](/guides/compresseur-pour-sablage-pneumatique/) traite notamment un pistolet Metabo ; le présent dossier approfondit le choix de la buse.

## Tableau : quatre diamètres à 60 et 100 psi

Les données d’air suivantes sont celles de Clemco. Les conversions métriques sont nos calculs, arrondis au litre par minute et au centième de bar.

<p class="article-table-hint">Sur petit écran, faites défiler le tableau horizontalement.</p>

<div class="article-table-scroll" tabindex="0" role="region" aria-label="Tableau : quatre diamètres à 60 et 100 psi">

| Buse | Orifice en pouces | Diamètre converti | À 60 psi, soit ≈ 4,14 bar | À 100 psi, soit ≈ 6,89 bar |
| --- | --- | --- | --- | --- |
| n° 2 | 1/8 | 3,175 mm | 13 cfm ≈ 368 L/min | 20 cfm ≈ 566 L/min |
| n° 3 | 3/16 | 4,7625 mm | 30 cfm ≈ 850 L/min | 45 cfm ≈ 1 274 L/min |
| n° 4 | 1/4 | 6,35 mm | 54 cfm ≈ 1 529 L/min | 81 cfm ≈ 2 294 L/min |
| n° 5 | 5/16 | 7,9375 mm | 89 cfm ≈ 2 520 L/min | 137 cfm ≈ 3 879 L/min |


</div>

Source des cfm : [tableau Clemco](https://www.clemcoindustries.com/s/Compressed_Air-wxh8.pdf). Conversion : `1 cfm = 28,316846592 L/min`, `1 pouce = 25,4 mm`, `1 psi ≈ 0,06894757 bar`, à partir des relations du [NIST, Guide for the Use of the International System of Units](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8). Convertir l’unité ne change pas les conditions de référence du débit : un cfm sans conditions précisées ne devient pas automatiquement un Nl/min.

<div class="article-infographic" tabindex="0" role="group" aria-label="À 100 psi : effet du diamètre de buse">
<svg viewBox="0 0 680 530" role="img" aria-labelledby="sablage-buses-title sablage-buses-desc" xmlns="http://www.w3.org/2000/svg">
<title id="sablage-buses-title">À 100 psi : effet du diamètre de buse</title><desc id="sablage-buses-desc">n° 2 : 1/8 pouce : 566 L/min; n° 3 : 3/16 pouce : 1274 L/min; n° 4 : 1/4 pouce : 2294 L/min; n° 5 : 5/16 pouce : 3879 L/min. L/min arrondis ; données Clemco converties.</desc>
<rect width="680" height="530" rx="20" fill="#10281e"/><text x="30" y="43" fill="#d3eb56" font-size="25" font-weight="700">À 100 psi : effet du diamètre de buse</text>
<text x="30" y="83" fill="white" font-size="23">n° 2 : 1/8 pouce</text><rect x="30" y="100" width="64.2" height="30" rx="7" fill="#81a58f"/><text x="109.2" y="123" fill="#d3eb56" font-size="23" font-weight="700">566</text>
<text x="30" y="183" fill="white" font-size="23">n° 3 : 3/16 pouce</text><rect x="30" y="200" width="144.5" height="30" rx="7" fill="#81a58f"/><text x="189.5" y="223" fill="#d3eb56" font-size="23" font-weight="700">1274</text>
<text x="30" y="283" fill="white" font-size="23">n° 4 : 1/4 pouce</text><rect x="30" y="300" width="260.2" height="30" rx="7" fill="#81a58f"/><text x="305.2" y="323" fill="#d3eb56" font-size="23" font-weight="700">2294</text>
<text x="30" y="383" fill="white" font-size="23">n° 5 : 5/16 pouce</text><rect x="30" y="400" width="440.0" height="30" rx="7" fill="#81a58f"/><text x="485.0" y="423" fill="#d3eb56" font-size="23" font-weight="700">3879</text>
<text x="30" y="503" fill="white" font-size="20">L/min arrondis ; données Clemco converties.</text>
</svg>
</div>

## La pression à retenir est celle de la buse en fonctionnement

Le tableau indique une pression **à la buse**. Il ne dit pas qu’un réglage identique à la sortie du compresseur produira automatiquement cette pression à l’extrémité de votre montage. Dans votre consultation, demandez au fournisseur de relier le FAD garanti, le réseau et la mesure prévue au point d’utilisation.

Notre fiche de relevé proposée comprend : modèle de sableuse, référence de buse, diamètre mesuré ou état neuf, pression de travail retenue, longueur et diamètre des liaisons, accessoires alimentés et autres consommateurs actifs. Sans ces éléments, une affirmation « compresseur compatible sablage » reste trop générale pour justifier un achat.

Le [guide des chutes de pression](/guides/diagnostiquer-chute-pression-air-comprime/) aide à séparer le manque de production d’air des restrictions du réseau. Une hausse de consigne ne remplace pas ce diagnostic.

## L’usure peut changer le dimensionnement

Dans son [tableau sur l’usure des buses](https://www.clemcoindustries.com/s/NozzleWear.pdf), Clemco compare notamment 81 cfm pour l’orifice n° 4 et 137 cfm pour le n° 5, soit environ 69 % de plus. Le tableau de consommation permet de retrouver ces valeurs à 100 psi. Ce rapprochement décrit un changement d’orifice ; il ne prédit pas le temps nécessaire pour atteindre cette usure.

Pour l’atelier, la conséquence pratique est de conserver le diamètre de référence dans le dossier de maintenance. Si un poste qui fonctionnait correctement réclame davantage d’air, contrôler la buse est une piste à examiner avant de remplacer le compresseur. Le critère de remplacement et la méthode de contrôle doivent venir du fabricant de la buse installée ; nous ne publions pas ici un intervalle universel en heures.

## Débit de buse et débit total : deux lignes différentes

Le [tableau Clemco d’estimation d’une installation](https://www.clemcoindustries.com/s/AirVolume_Est.pdf) sépare l’air de la buse, un besoin auxiliaire pour le casque et une réserve. Cela montre pourquoi la consommation de la seule buse ne constitue pas le dimensionnement complet. Les valeurs de ce tableau ne sont pas reprises comme une prescription universelle : il faut identifier les équipements et leurs besoins réels.

Un casque à adduction d’air nécessite une alimentation répondant à ses exigences propres de qualité et de sécurité. Ajouter quelques L/min au devis ne démontre pas que l’air est respirable. La [page de ressources Clemco](https://www.clemcoindustries.com/charts) rappelle également le danger des abrasifs contenant de la silice cristalline. Ce guide ne valide ni le choix de l’abrasif ni l’organisation de la protection du chantier.

## Comment rédiger une demande de devis exploitable

Plutôt que demander « un 200 litres pour sabler », nous proposons cette formulation :

> Mon équipement est identifié par sa référence et sa notice. Je souhaite travailler avec telle buse, à telle pression mesurée à la buse. Merci d’indiquer le débit restitué garanti, les consommations auxiliaires prises en compte, les pertes de pression retenues et les conditions de fonctionnement continu.

Joignez ensuite le système de séchage envisagé et les conditions du site. La [qualité de l’air et le point de rosée](/guides/point-rosee-secheur-filtre-air-comprime/) sont des sujets distincts de la puissance du moteur.

## Faut-il réduire la buse pour conserver le compresseur ?

Le tableau permet de chiffrer la baisse de consommation correspondant à un orifice plus petit. Il ne permet pas de conclure que le résultat de décapage ou la productivité restera identique. Faites valider la buse avec la sableuse, l’abrasif et le travail attendu, puis comparez le coût complet de l’opération.

Pour les pistolets déjà documentés dans CompatAir, partez du [guide de compatibilité sablage](/guides/compresseur-pour-sablage-pneumatique/) et de leurs fiches exactes. Pour un système industriel à buse, exigez d’abord son point de fonctionnement documenté ; aucun classement de compresseurs ne compense cette donnée manquante.

## Sources et périmètre

Données et documents consultés le **26 septembre 2026**. Ce guide repose sur une analyse documentaire ; CompatAir n’a pas réalisé d’essai physique de ces équipements. Les exemples de calcul sont identifiés comme tels.

- [Clemco, tableau de consommation d’air et d’abrasif](https://www.clemcoindustries.com/s/Compressed_Air-wxh8.pdf)
- [NIST, Guide for the Use of the International System of Units](https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8)
- [tableau sur l’usure des buses](https://www.clemcoindustries.com/s/NozzleWear.pdf)
- [tableau Clemco d’estimation d’une installation](https://www.clemcoindustries.com/s/AirVolume_Est.pdf)
- [page de ressources Clemco](https://www.clemcoindustries.com/charts)
