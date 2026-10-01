---
title: "ZAR0921 et ZAR0921V : lire 0,03 ft³ par coup"
seoTitle: "ZAR0921 et ZAR0921V : lire 0,03 ft³ par coup"
description: "Le catalogue ZIPP indique un volume moyen par coup pour ces riveteuses. Convertissez l’unité sans confondre cadence, pression de mesure et aspiration."
pubDate: "2026-10-01"
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
featured: false
relatedGuides: ["gison-gp101rn-litres-cycle-cadence", "gison-gp250rm-gp250ri-ecrous-cadence", "diagnostiquer-chute-pression-air-comprime"]
sources: ["https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf"]
relatedCalculatorTool: "riveteuse-zipp-zar0921"
---

La consommation des riveteuses ZIPP ZAR0921 et ZAR0921V est donnée à **0,03 ft³ par coup en moyenne**. La conversion produit environ 0,85 L par coup. Elle ne produit pas un débit en L/min tant que la cadence n'est pas connue, et ne précise pas à elle seule toutes les conditions de la mesure.

## Lire le libellé complet de la cellule

Le [tableau constructeur des riveteuses](https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=49) regroupe les deux références sur une ligne de caractéristiques. L'en-tête de consommation comporte à la fois « Avg. » et l'unité « cu.ft/stroke ». La plage de pression de fonctionnement est 60 à 90 psi.

Le tableau publie une course de 19 mm, une traction de 860 kgf et une masse de 1,4 kg. La présentation distingue la ZAR0921V par sa fonction de collecte avec aspiration. Le document ne détaille pas ici le débit séparé de cette aspiration ni la pression exacte associée aux 0,03 ft³ par coup.

Les fiches [ZIPP ZAR0921](/outils-pneumatiques/riveteuse-zipp-zar0921/) et [ZIPP ZAR0921V](/outils-pneumatiques/riveteuse-zipp-zar0921v/) conservent donc cette consommation hors du calcul de compatibilité. Elles ne choisissent pas arbitrairement 60 ou 90 psi comme pression de mesure du volume.

## Une conversion utile, puis un scénario clairement séparé

Un pied cube vaut 28,316846592 L. Le calcul est 0,03 × 28,316846592 = **0,849505 L par coup**, arrondis à 0,85 L. Cet arrondi ne rend pas le nombre plus précis que les 0,03 ft³ imprimés dans le catalogue.

<figure class="article-infographic article-infographic--compact" style="margin-bottom:2rem"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 272" role="img" aria-labelledby="zipp-zar0921-zar0921v-volume-par-coup-t zipp-zar0921-zar0921v-volume-par-coup-d"><title id="zipp-zar0921-zar0921v-volume-par-coup-t">Volume moyen appliqué à des cadences</title><desc id="zipp-zar0921-zar0921v-volume-par-coup-d">Scénarios arithmétiques issus de 0,03 ft³ par coup. Ils ne valent pas validation du débit maximal ou de l’aspiration.</desc><rect width="480" height="272" rx="16" fill="#10281e"/><text x="24" y="34" fill="#d3eb56" font-size="16">Volume moyen appliqué à des cadences</text><text x="24" y="68" fill="#eef2e9" font-size="14">10 coups par minute</text><text x="456" y="68" text-anchor="end" fill="#eef2e9" font-size="14">8.49505</text><rect x="24" y="78" width="432" height="9" rx="4" fill="#315341"/><rect x="24" y="78" width="72.00" height="9" rx="4" fill="#d3eb56"/><text x="24" y="124" fill="#eef2e9" font-size="14">30 coups par minute</text><text x="456" y="124" text-anchor="end" fill="#eef2e9" font-size="14">25.4852</text><rect x="24" y="134" width="432" height="9" rx="4" fill="#315341"/><rect x="24" y="134" width="216.00" height="9" rx="4" fill="#d3eb56"/><text x="24" y="180" fill="#eef2e9" font-size="14">60 coups par minute</text><text x="456" y="180" text-anchor="end" fill="#eef2e9" font-size="14">50.9703</text><rect x="24" y="190" width="432" height="9" rx="4" fill="#315341"/><rect x="24" y="190" width="432.00" height="9" rx="4" fill="#d3eb56"/><text x="24" y="253" fill="#eef2e9" font-size="13">L/min calculés ; conditions de mesure à confirmer</text></svg><figcaption>Scénarios arithmétiques issus de 0,03 ft³ par coup. Ils ne valent pas validation du débit maximal ou de l’aspiration.</figcaption></figure>

À 30 coups par minute, la multiplication donnerait environ 25,5 L/min en moyenne. La cadence est une hypothèse. La page évoque des cycles de 2 secondes en moyenne dans sa présentation, mais cela ne constitue pas une cadence garantie de l'opérateur, accessoires et manipulation de pièce compris.

Cette arithmétique est utile pour comprendre l'unité. Elle ne suffit pas à attribuer un verdict positif : le volume est moyen, ses conditions de référence et la prise en compte de l'aspiration restent à confirmer.

## Ce qui manque pour dimensionner le poste

Demandez au fabricant le volume d'air par cycle dans des conditions explicites, la durée et le débit de pointe de la traction, puis la consommation de collecte si elle peut fonctionner entre les poses. Relevez la cadence réelle et les autres stations actives simultanément.

La plage 60 à 90 psi indique des pressions d'emploi dans le tableau. Elle ne permet pas de supposer qu'un volume par coup sera identique sur toute la plage. Le flexible et les raccords doivent maintenir la pression pendant la pose, pas seulement à l'arrêt.

Pour le choix de l'outil, vérifiez également le matériau, les rivets admis, la course et les embouts de la notice. Une conversion correcte d'air ne garantit pas un assemblage correctement serti.

Le [GP-101RN](/guides/gison-gp101rn-litres-cycle-cadence/) présente un autre cas où le catalogue exprime explicitement des litres par cycle. Le [GP-250RM et RI](/guides/gison-gp250rm-gp250ri-ecrous-cadence/) montre pourquoi le volume d'air et la compatibilité des éléments de pose doivent rester deux vérifications distinctes.
