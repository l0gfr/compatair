---
title: "Purgeur SMC AD402-A : pourquoi le modèle normalement ouvert peut fuir au démarrage"
seoTitle: "SMC AD402-A : purgeur NO ou NC pour le compresseur"
description: "SMC AD402-A : versions NO/NC, pressions minimales et condition de 400 L/min ANR. Vérifiez la variante avant de chercher une panne du compresseur."
pubDate: 2026-09-30
category: Choisir
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "garage-automobile"]
readingTime: 4
reviewStatus: internal
relatedGuides: ["purgeur-condensats-temporise-detection-niveau", "compresseur-ne-monte-plus-en-pression", "groupe-frl-filtre-regulateur-lubrificateur"]
sources:
  - https://www.smcworld.com/catalog/en/airpreparation/AD402-A-E/7-8-2-p0487-0495-AD402-A_en/data/7-8-2-p0487-0495-AD402-A_en.pdf
---

Un compresseur remplit lentement la ligne et de l’air sort par le purgeur pendant le départ. **Sur un SMC AD402-A normalement ouvert, cette observation peut venir d’une variante inadaptée à l’alimentation.** Le raccord et la pression maximale ne sont pas les seuls critères de choix.

## NO et NC décrivent l’état sans pression

Le [catalogue SMC AD402-A, page 490](https://www.smcworld.com/catalog/en/airpreparation/AD402-A-E/7-8-2-p0487-0495-AD402-A_en/data/7-8-2-p0487-0495-AD402-A_en.pdf) précise que le NO, normalement ouvert, a son orifice de purge ouvert sans pression, tandis que le NC le garde fermé. Le tableau donne une plage de service de **0,1 à 1,0 MPa pour NO**, soit **1 à 10 bar**, et de **0,15 à 1,0 MPa pour NC**, soit **1,5 à 10 bar**.

Il ajoute pour le NO une condition de débit restitué du compresseur d’au moins **400 L/min ANR**. Une note prévient d’un risque de fuite au démarrage si le compresseur est inférieur à 3,7 kW ou si son débit restitué est inférieur à ce seuil, et recommande alors le type NC. Cette recommandation concerne cette série.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 290" role="img" aria-labelledby="purgeur-smc-ad402-normalement-ouvert-petit-compresseur-title purgeur-smc-ad402-normalement-ouvert-petit-compresseur-desc" style="font-family:system-ui,sans-serif"><title id="purgeur-smc-ad402-normalement-ouvert-petit-compresseur-title">AD402-A : lire la variante</title><desc id="purgeur-smc-ad402-normalement-ouvert-petit-compresseur-desc">Valeurs SMC page 490. Le seuil de 400 L/min est en ANR et concerne la version NO.</desc><rect width="440" height="290" rx="16" fill="#10281e"/><text x="24" y="33" font-size="18" fill="#d3eb56" font-weight="700">AD402-A : lire la variante</text><rect x="20" y="50" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="72" font-size="18" fill="#d3eb56" font-weight="700">NO : 1 à 10 bar</text><text x="32" y="97" font-size="16" fill="#eef2e9">Ouvert sans pression ; ≥ 400 L/min ANR</text><rect x="20" y="120" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="142" font-size="18" fill="#d3eb56" font-weight="700">NC : 1,5 à 10 bar</text><text x="32" y="167" font-size="16" fill="#eef2e9">Fermé sans pression</text><rect x="20" y="190" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="212" font-size="18" fill="#d3eb56" font-weight="700">Au démarrage</text><text x="32" y="237" font-size="16" fill="#eef2e9">Comparer variante et alimentation réelle</text></svg>
<figcaption>Valeurs SMC page 490. Le seuil de 400 L/min est en ANR et concerne la version NO.</figcaption>
</figure>

## Vérifier le code avant de démonter

Relevez la référence complète et la lettre de variante de purge. Rassemblez le débit restitué du compresseur avec sa base de volume, puis la pression au purgeur pendant la mise en service. Le débit aspiré ne répond pas à la condition SMC exprimée en ANR.

La présence d’un compresseur de puissance supérieure ne dispense pas de lire le débit documenté. La note réunit deux critères ; elle ne propose aucune règle de conversion universelle entre kilowatts et litres par minute.

## Le choix NC change aussi l’arrêt

La même documentation indique que du condensat résiduel peut rester dans une version NC sans pression lorsque le mécanisme automatique ne s’est pas déclenché. Elle recommande son évacuation avant la fin des opérations. Conservez cette instruction dans la routine applicable à l’installation ; ne considérez pas « automatique » comme une absence d’entretien.

Notre [comparaison des principes de purge](/guides/purgeur-condensats-temporise-detection-niveau/) concerne un autre niveau de sélection. Ici, deux variantes d’un même purgeur à flotteur peuvent avoir un comportement différent.

## Un relevé court pour le mainteneur

Préparez le code de l’AD402-A, la fiche du compresseur, la pression de départ et le moment où l’échappement cesse ou persiste. Notez aussi l’emplacement dans la préparation d’air. Le [guide FRL](/guides/groupe-frl-filtre-regulateur-lubrificateur/) aide à identifier les composants voisins.

Si la variante et les conditions sont conformes, le diagnostic continue selon la notice : montage, contamination et état du purgeur. Si la pression du réseau reste faible, le [parcours du compresseur qui ne monte pas en pression](/guides/compresseur-ne-monte-plus-en-pression/) permet de ne pas attribuer tous les symptômes au même organe.

Le remplacement doit être confirmé sur la référence exacte, puis contrôlé au démarrage et à l’arrêt. Les seuils publiés ci-dessus ne sont étendus à aucun autre purgeur automatique.
