---
title: "Ceccato CSM 25 : choisir 10 ou 13 bar"
seoTitle: "Ceccato CSM 25 : choisir 10 ou 13 bar"
description: "Le CSM 25 délivre 2 700 ou 2 310 L/min selon sa version. Comparez les pressions de référence avant de retenir un compresseur pour votre atelier."
pubDate: "2026-10-01"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
featured: false
relatedGuides: ["compresseur-vis-8-10-13-bar-versions", "diagnostiquer-chute-pression-air-comprime", "ceccato-csm21-kaeser-sk25-fad-comparaison"]
sources: ["https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/csm-from-5-hp-on/csm-21---40-hp/CSM_21-40_FR.pdf"]
---

Le passage de la version 10 bar à la version 13 bar coûte **390 L/min de FAD publié** sur le Ceccato CSM 25. Le moteur reste annoncé à 18,5 kW. Pour un réseau qui n'a besoin que de la version 10 bar, la pression supplémentaire ne constitue donc pas un gain de capacité.

## Deux versions, deux points de mesure

Le [tableau constructeur](https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/csm-from-5-hp-on/csm-21---40-hp/CSM_21-40_FR.pdf#page=5) indique 2 700 L/min pour la version dont la pression maximale est 10 bar, et 2 310 L/min pour celle limitée à 13 bar. La note du tableau place les mesures respectivement à **9,5 et 12,5 bar**. Le débit de 2 700 L/min n'est pas documenté à 13 bar, ni même exactement à 10 bar.

| Configuration | Pression maximale | Pression du FAD | FAD publié |
| --- | --- | --- | --- |
| CSM 25, version 10 bar | 10 bar | 9,5 bar | 2 700 L/min |
| CSM 25, version 13 bar | 13 bar | 12,5 bar | 2 310 L/min |

Les fiches [Ceccato CSM 25](/compresseurs/ceccato-csm-25-fm-au-sol-10-bar/) et [Ceccato CSM 25](/compresseurs/ceccato-csm-25-fm-au-sol-13-bar/) conservent ces couples pression-débit séparés. Il s'agit de versions du constructeur, pas de deux points d'une courbe mesurée sur une même machine.

<figure class="article-infographic article-infographic--compact" style="margin-bottom:2rem"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 216" role="img" aria-labelledby="ceccato-csm25-10-13-bar-debit-perdu-t ceccato-csm25-10-13-bar-debit-perdu-d"><title id="ceccato-csm25-10-13-bar-debit-perdu-t">CSM 25 : débit selon la version</title><desc id="ceccato-csm25-10-13-bar-debit-perdu-d">Source Ceccato, page 5. Chaque barre correspond à une version et à sa pression de référence.</desc><rect width="480" height="216" rx="16" fill="#10281e"/><text x="24" y="34" fill="#d3eb56" font-size="16">CSM 25 : débit selon la version</text><text x="24" y="68" fill="#eef2e9" font-size="14">Version 10 bar, mesure à 9,5</text><text x="456" y="68" text-anchor="end" fill="#eef2e9" font-size="14">2700</text><rect x="24" y="78" width="432" height="9" rx="4" fill="#315341"/><rect x="24" y="78" width="432.00" height="9" rx="4" fill="#d3eb56"/><text x="24" y="124" fill="#eef2e9" font-size="14">Version 13 bar, mesure à 12,5</text><text x="456" y="124" text-anchor="end" fill="#eef2e9" font-size="14">2310</text><rect x="24" y="134" width="432" height="9" rx="4" fill="#315341"/><rect x="24" y="134" width="369.60" height="9" rx="4" fill="#d3eb56"/><text x="24" y="197" fill="#eef2e9" font-size="13">FAD publié, L/min</text></svg><figcaption>Source Ceccato, page 5. Chaque barre correspond à une version et à sa pression de référence.</figcaption></figure>

## Un poste de travail qui demande 2 000 L/min

Prenons un besoin simultané de 2 000 L/min, correctement documenté à la pression des outils. Avec une réserve de dimensionnement choisie de 25 %, la cible devient 2 500 L/min. Cette marge est une hypothèse de calcul ; Ceccato ne la prescrit pas dans le tableau.

La version 10 bar dépasse cette cible de 200 L/min. La version 13 bar lui manque de 190 L/min. Le résultat change alors que le nom CSM 25 et la puissance moteur restent identiques. Ce calcul ne garantit toutefois ni la pression en bout de flexible, ni le débit net après un traitement d'air supplémentaire.

L'écart relatif entre les deux FAD vaut 390 / 2 700, soit **14,4 %** après arrondi. Ce pourcentage décrit une différence entre les versions publiées. Il ne permet pas de calculer une économie annuelle d'électricité : les heures de charge, la puissance absorbée et la régulation manquent.

## Quelle version retenir sur le devis ?

Si le procédé exige plus que les 10 bar maximaux de la première version, celle-ci est exclue par la pression. Si le procédé fonctionne en dessous, demandez d'abord sa pression minimale dynamique et les pertes du réseau. Une pression plus haute inscrite sur une fiche ne répond pas à cette question.

Faites figurer la version exacte, le FAD à sa pression de référence, le sécheur éventuel et le point auquel la pression sera réceptionnée. Pour un besoin entre les deux conditions de mesure, demandez une courbe au fournisseur ; CompatAir n'interpole pas entre deux configurations distinctes.

La version 10 bar est mieux placée sur le scénario de débit ci-dessus. Un usage qui impose réellement 13 bar conduira à une autre sélection, éventuellement plus grosse. Le guide [versions 8, 10 et 13 bar](/guides/compresseur-vis-8-10-13-bar-versions/) détaille la lecture de ces familles ; celui sur la [pression dynamique](/guides/diagnostiquer-chute-pression-air-comprime/) aide à vérifier le poste.
