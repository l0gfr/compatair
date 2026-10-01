---
title: "KAESER AIRCENTER 8 : les 200 L changent quoi ?"
seoTitle: "KAESER AIRCENTER 8 : les 200 L changent quoi ?"
description: "L’AIRCENTER 8 associe sécheur et cuve de 200 L. Calcul de la réserve entre deux pressions, séparé du FAD et des conditions réelles du poste."
pubDate: "2026-10-01"
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
reviewStatus: "internal"
featured: false
relatedGuides: ["comparatif-compresseurs-debit-restitue"]
sources: ["https://nl.kaeser.com/download.ashx?id=tcm:32-5919"]
---

L’AIRCENTER 8 réunit le compresseur SX, un sécheur et une cuve de 200 L. La cuve apporte une réserve. Elle ne transforme pas les **800 L/min à 7,5 bar** de la configuration 8 bar en un débit continu supérieur.

## Le volume vient de la description de l’AIRCENTER

La [présentation AIRCENTER](https://nl.kaeser.com/download.ashx?id=tcm:32-5919#page=5) annonce une cuve de 200 litres. Le [tableau technique](https://nl.kaeser.com/download.ashx?id=tcm:32-5919#page=8) donne à l’AIRCENTER 8 une masse de 300 kg et des dimensions de 590 × 1 090 × 1 560 mm, dans l’ordre largeur, profondeur, hauteur. Ces repères appartiennent à l’ensemble intégré, et non au SX 8 seul.

Au point à 7,5 bar, les versions de base, T et AIRCENTER publient le même FAD de 0,80 m³/min. La présence de la cuve est donc un changement d’équipement identifiable, pas une nouvelle mesure de production d’air.

## Calculer une réserve avec des hypothèses visibles

Prenons un exemple théorique de baisse de pression de 8 à 6 bar dans une cuve de 200 L. Sous une approximation isotherme et avec une pression atmosphérique de référence choisie à 1 bar, la quantité d’air libre correspondant à cette différence vaut 200 × (8 − 6) / 1 = **400 L**.

<figure class="article-infographic article-infographic--compact" style="margin-bottom:2rem"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 216" role="img" aria-labelledby="aircenter8-t aircenter8-d"><title id="aircenter8-t">Réserve théorique entre deux seuils</title><desc id="aircenter8-d">Les 400 L résultent d’un scénario isotherme à 1 bar atmosphérique. Ils ne constituent pas une mesure d’autonomie de l’AIRCENTER.</desc><rect width="480" height="216" rx="16" fill="#10281e"/><text x="24" y="34" fill="#d3eb56" font-size="16">Réserve théorique entre deux seuils</text><text x="24" y="68" fill="#eef2e9" font-size="14">Volume géométrique de cuve</text><text x="456" y="68" text-anchor="end" fill="#eef2e9" font-size="14">200</text><rect x="24" y="78" width="432" height="9" rx="4" fill="#315341"/><rect x="24" y="78" width="216.00" height="9" rx="4" fill="#d3eb56"/><text x="24" y="124" fill="#eef2e9" font-size="14">Air libre pour une baisse de 2 bar</text><text x="456" y="124" text-anchor="end" fill="#eef2e9" font-size="14">400</text><rect x="24" y="134" width="432" height="9" rx="4" fill="#315341"/><rect x="24" y="134" width="432.00" height="9" rx="4" fill="#d3eb56"/><text x="24" y="197" fill="#eef2e9" font-size="13">L ; deux grandeurs distinctes</text></svg><figcaption>Les 400 L résultent d’un scénario isotherme à 1 bar atmosphérique. Ils ne constituent pas une mesure d’autonomie de l’AIRCENTER.</figcaption></figure>

À une demande hypothétique de 400 L/min, ces 400 L correspondent à une minute, si le compresseur n’apporte aucun air pendant cette période. Ce quotient décrit seulement le scénario. L’échauffement, le refroidissement, les seuils de commande et la pression minimale réelle du consommateur peuvent modifier la réserve utilisable.

La version 8 bar n’autorise pas à commencer un calcul à 10 bar. Un seuil de cuve inférieur à la pression requise au poste ne constitue pas davantage de l’air encore utilisable pour ce travail. Les deux seuils doivent appartenir au fonctionnement possible de la version commandée.

## Dimensionner ensuite la récupération

Après un pic de consommation, la cuve doit retrouver son niveau de pression. La durée de récupération dépend du débit effectivement disponible à cette pression et des demandes qui continuent pendant la recharge. Les 800 L/min du tableau ont un point de mesure précis ; ils ne fournissent pas à eux seuls une courbe complète de remplissage.

La [KAESER AIRCENTER 8](/compresseurs/kaeser-aircenter-8-secheur-et-cuve-integres-8-bar/) documente l’ensemble. Pour poser les hypothèses d’un poste intermittent, consultez le [guide de réserve d’air et d’autonomie](/guides/gentilin-smart-225-250-reserve/). Une cuve adaptée peut absorber un pic défini. Une demande durable supérieure à la production demeure un déficit à traiter dans le choix du compresseur.
