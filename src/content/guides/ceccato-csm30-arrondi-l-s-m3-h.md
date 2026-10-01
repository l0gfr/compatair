---
title: "CSM 30 : pourquoi 53,6 L/s et 193 m³/h diffèrent"
seoTitle: "CSM 30 : pourquoi 53,6 L/s et 193 m³/h diffèrent"
description: "Le tableau Ceccato CSM 30 présente plusieurs unités de FAD. Vérifiez les conversions et les arrondis avant de déclarer une contradiction technique."
pubDate: "2026-10-01"
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
featured: false
relatedGuides: ["contradiction-debit-cfm-m3-min-catalogues", "debit-restitue-fad-vs-debit-aspire", "ceccato-csm25-10-13-bar-debit-perdu"]
sources: ["https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/csm-from-5-hp-on/csm-21---40-hp/CSM_21-40_FR.pdf"]
---

À 9,5 bar de référence, le CSM 30 est annoncé à **53,6 L/s, 193 m³/h et 3 216 L/min**. La conversion exacte de 193 m³/h donne 3 216,67 L/min. Cet écart de 0,67 L/min s'explique par la précision d'affichage du tableau ; il ne justifie pas de signaler une contradiction fabricant.

## Refaire les conversions sur la même ligne

La [brochure CSM 21 à 40](https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/csm-from-5-hp-on/csm-21---40-hp/CSM_21-40_FR.pdf#page=5) regroupe les unités sur une ligne de version 10 bar maximum. Sa note précise une pression de référence de 9,5 bar. Il faut conserver cette condition en recopiant les nombres.

| Valeur imprimée | Conversion en L/min | Précision affichée |
| --- | --- | --- |
| 53,6 L/s | 53,6 × 60 = 3 216 | Un dixième de L/s |
| 193 m³/h | 193 × 1 000 / 60 = 3 216,67 | Un m³/h |
| 3 216 L/min | 3 216 | Un L/min |

La fiche [Ceccato CSM 30](/compresseurs/ceccato-csm-30-fm-au-sol-10-bar/) retient la colonne L/min, explicitement publiée. La petite différence avec la colonne m³/h n'est pas corrigée en inventant une quatrième valeur prétendument plus exacte.

<figure class="article-infographic article-infographic--compact" style="margin-bottom:2rem"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 272" role="img" aria-labelledby="ceccato-csm30-arrondi-l-s-m3-h-t ceccato-csm30-arrondi-l-s-m3-h-d"><title id="ceccato-csm30-arrondi-l-s-m3-h-t">Même débit, unités arrondies</title><desc id="ceccato-csm30-arrondi-l-s-m3-h-d">Conversions arithmétiques des trois colonnes de la page 5. Une échelle commune rend leur proximité visible.</desc><rect width="480" height="272" rx="16" fill="#10281e"/><text x="24" y="34" fill="#d3eb56" font-size="16">Même débit, unités arrondies</text><text x="24" y="68" fill="#eef2e9" font-size="14">Colonne L/min</text><text x="456" y="68" text-anchor="end" fill="#eef2e9" font-size="14">3216</text><rect x="24" y="78" width="432" height="9" rx="4" fill="#315341"/><rect x="24" y="78" width="431.91" height="9" rx="4" fill="#d3eb56"/><text x="24" y="124" fill="#eef2e9" font-size="14">Conversion de 53,6 L/s</text><text x="456" y="124" text-anchor="end" fill="#eef2e9" font-size="14">3216</text><rect x="24" y="134" width="432" height="9" rx="4" fill="#315341"/><rect x="24" y="134" width="431.91" height="9" rx="4" fill="#d3eb56"/><text x="24" y="180" fill="#eef2e9" font-size="14">Conversion de 193 m³/h</text><text x="456" y="180" text-anchor="end" fill="#eef2e9" font-size="14">3216.67</text><rect x="24" y="190" width="432" height="9" rx="4" fill="#315341"/><rect x="24" y="190" width="432.00" height="9" rx="4" fill="#d3eb56"/><text x="24" y="253" fill="#eef2e9" font-size="13">L/min ; les différences sont inférieures à 1</text></svg><figcaption>Conversions arithmétiques des trois colonnes de la page 5. Une échelle commune rend leur proximité visible.</figcaption></figure>

## Mesure, conversion et arrondi

Une valeur affichée à l'entier ne révèle pas ses décimales d'origine. Sous l'hypothèse d'un arrondi au plus proche, 193 m³/h représente une plage de 192,5 à 193,5 m³/h, soit environ 3 208,33 à 3 225 L/min. Les 3 216 L/min se trouvent à l'intérieur de cette plage.

Cette plage est un contrôle de cohérence numérique. Elle ne constitue pas une tolérance de performance, une incertitude d'essai ni un engagement de livraison. La brochure mentionne des performances de l'unité selon ISO 1217, annexe C ; elle ne donne pas ici le rapport complet d'essai du numéro de série acheté.

Une comparaison de fiches peut présenter un écart beaucoup plus sérieux si l'une reprend le débit à 7,5 bar et l'autre celui à 12,5 bar. Le même tableau donne 3 720 et 2 784 L/min à ces deux conditions, pour des versions différentes. Ce changement de pression a un autre sens que l'arrondi de 0,67 L/min.

## Comment comparer une offre distributeur

Relevez d'abord la version de pression, l'équipement et la date de la documentation. Convertissez ensuite les unités dans un même système. Comparez les colonnes de la ligne correspondante, puis examinez leur précision affichée. Ce contrôle permet de séparer une erreur d'unité, une différence de configuration et un simple arrondi.

Si le vendeur annonce 193 L/min au lieu de 193 m³/h, la conversion ne colle plus : le facteur de conversion est 16,6667. Si son document annonce 3 216 L/min à 13 bar, demandez le document qui soutient cette condition, puisque la brochure retenue l'associe à 9,5 bar de référence.

Pour le CSM 30, les trois colonnes examinées sont cohérentes à la précision publiée. Gardez la ligne constructeur dans le devis et consultez le guide sur les [unités contradictoires](/guides/contradiction-debit-cfm-m3-min-catalogues/) lorsqu'un écart dépasse réellement les arrondis.
