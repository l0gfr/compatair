---
title: "Quel compresseur pour une agrafeuse-cloueuse pneumatique ?"
description: "Calcul du débit moyen à partir du volume d’air par tir et de la cadence, avec les limites à connaître pour dimensionner une agrafeuse pneumatique."
pubDate: 2026-07-13
category: "Choisir"
readingTime: 8
featured: false
relatedCalculatorTool: einhell-tc-pn-50
sources:
  - https://www.einhell.fr/p/4137790-tc-pn-50/
  - https://d2c5rvsfjg2eub.cloudfront.net/asset/208244749100/document_698oi8nul919b1objb9nq34k5m/4137790_11018_001_SPK9.pdf
---

Une agrafeuse-cloueuse peut être documentée en litres par tir plutôt qu’en litres par minute. Dans ce cas, la cadence doit rester une entrée explicite. Elle ne peut pas être devinée à partir du nom de l’outil.

La notice de l’[Einhell TC-PN 50](https://www.einhell.fr/p/4137790-tc-pn-50/) publie environ **0,66 L d’air par tir**, une pression recommandée de **6,3 bar**, une pression maximale autorisée de **8,3 bar** et un flexible de **9 mm** de diamètre intérieur.

<svg viewBox="0 0 760 315" role="img" aria-labelledby="tir-title tir-desc" xmlns="http://www.w3.org/2000/svg" style="display:block;margin-bottom:1.5rem">
  <title id="tir-title">Débit moyen selon trois cadences explicites</title><desc id="tir-desc">À 0,66 litre par tir, dix tirs par minute donnent 6,6 litres par minute, trente tirs donnent 19,8 litres par minute et soixante tirs donnent 39,6 litres par minute.</desc>
  <rect width="760" height="315" rx="18" fill="#eef2e9"/><text x="38" y="44" fill="#102018" font-size="22" font-weight="700">0,66 L par tir, à 6,3 bar</text>
  <text x="38" y="91" fill="#35473d" font-size="15">10 tirs/min</text><rect x="170" y="72" width="99" height="28" rx="6" fill="#81a58f"/><text x="285" y="93" fill="#102018" font-size="16">6,6 L/min</text>
  <text x="38" y="159" fill="#35473d" font-size="15">30 tirs/min</text><rect x="170" y="140" width="297" height="28" rx="6" fill="#19704f"/><text x="483" y="161" fill="#102018" font-size="16">19,8 L/min</text>
  <text x="38" y="227" fill="#35473d" font-size="15">60 tirs/min</text><rect x="170" y="208" width="500" height="28" rx="6" fill="#d3eb56"/><text x="571" y="259" fill="#102018" font-size="16">39,6 L/min</text>
  <text x="38" y="286" fill="#56685e" font-size="14">Exemples arithmétiques, pas cadences recommandées.</text>
</svg>

## La formule reproductible

Le débit moyen se calcule ainsi :

`volume par tir × tirs par minute × nombre d’outils`.

Pour un seul TC-PN 50, 30 tirs par minute donnent `0,66 × 30 = 19,8 L/min`. Pour deux outils utilisés au même rythme et simultanément, le résultat moyen devient 39,6 L/min.

Les cadences du graphique sont uniquement des exemples de calcul. Elles ne sont pas présentées comme des rythmes recommandés par Einhell.

## Ce que ce débit moyen ne prouve pas

Le déclenchement libère une demande brève. Une moyenne sur une minute ne décrit pas cette pointe instantanée. Un compresseur dont le FAD couvre la moyenne peut encore subir une chute locale si le flexible, le raccord ou la réserve disponible ne fournit pas l’air assez rapidement.

Le calculateur affiche donc « débit moyen couvert » pour ce mode. Il ne transforme pas ce résultat en validation de la pointe. La [cuve](/guides/choisir-volume-cuve-24-50-90-litres/) peut amortir une demande, mais elle ne remplace pas la vérification du débit produit et du réseau.

## Saisir un cas réel

Ouvrez le [calculateur avec la TC-PN 50](/calculateur/?outil=einhell-tc-pn-50), puis indiquez le nombre d’outils et votre cadence mesurée ou prévue. La consommation de 0,66 L par tir reste issue de la notice. Seule la cadence vient de votre scénario.

Si vous ne connaissez pas encore la cadence, chronométrez une séquence représentative sans modifier les consignes de sécurité du fabricant. CompatAir ne fournit aucune cadence par défaut.

## Sources

- [Einhell, fiche officielle TC-PN 50](https://www.einhell.fr/p/4137790-tc-pn-50/)
- [Einhell, notice TC-PN 50](https://d2c5rvsfjg2eub.cloudfront.net/asset/208244749100/document_698oi8nul919b1objb9nq34k5m/4137790_11018_001_SPK9.pdf)
