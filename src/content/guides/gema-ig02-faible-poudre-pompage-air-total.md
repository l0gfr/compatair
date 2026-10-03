---
title: "OptiFlow IG02 : stabiliser un faible débit de poudre sans perdre l’air de transport"
seoTitle: "Gema IG02 : poudre irrégulière à faible convoyage"
description: "Pourquoi baisser la poudre peut rendre le transport irrégulier sur un IG02. Lire air total, diamètre intérieur et conditions du tableau Gema."
pubDate: 2026-10-03
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["carrosserie-peinture", "maintenance-industrielle"]
readingTime: 4
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["mesurer-pression-dynamique-pistolet-peinture", "diametre-longueur-flexible-air-comprime", "convertir-cfm-l-min-nl-min-air-comprime"]
sources: ["https://www.gemapowdercoating.com/fileadmin/documents/User_Manuals/English/Injectors_and_Pumps/Venturi_Injectors/OptiFlow-IG02-en.pdf"]
---

Le débit de poudre devient irrégulier après avoir réduit le réglage de convoyage. Sur l’OptiFlow IG02, cette succession peut correspondre à un manque d’air total dans le tuyau, même si l’alimentation en air comprimé n’a pas changé. **Baisser la poudre et conserver un transport régulier sont deux réglages liés.**

## Pourquoi la baisse de poudre peut provoquer le « pumping »

Gema décrit un injecteur qui crée une dépression pour aspirer la poudre. Réduire la pression de l’air de convoyage réduit cette aspiration, mais diminue aussi le volume d’air qui transporte le mélange jusqu’au pistolet. Lorsque ce volume devient trop faible, le transport devient irrégulier, phénomène nommé « pumping » dans la [notice IG02, page PDF 6, imprimée 4](https://www.gemapowdercoating.com/fileadmin/documents/User_Manuals/English/Injectors_and_Pumps/Venturi_Injectors/OptiFlow-IG02-en.pdf#page=6).

L’air supplémentaire sert à rétablir le volume de transport. Cette fonction se distingue de l’air d’atomisation d’un procédé liquide : le [relevé des pressions d’un pistolet peinture](/guides/mesurer-pression-dynamique-pistolet-peinture/) reste utile pour comprendre une mesure sous débit, mais ses réglages ne constituent pas une recette pour la poudre.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 346" role="img" aria-labelledby="gema-ig02-faible-poudre-pompage-air-total-title gema-ig02-faible-poudre-pompage-air-total-desc" style="display:block;width:100%;height:auto;font-family:system-ui,sans-serif"><title id="gema-ig02-faible-poudre-pompage-air-total-title">IG02 : préserver le transport quand la poudre baisse</title><desc id="gema-ig02-faible-poudre-pompage-air-total-desc">Réduire l’air de convoyage réduit aussi l’air total. L’air supplémentaire maintient le transport ; la notice donne des valeurs guides selon le diamètre du tuyau.</desc><rect width="520" height="346" rx="22" fill="#10281e"/><text x="25" y="42" fill="#d3eb56" font-size="25" font-weight="700">Deux airs · deux effets</text><path d="M45 124H230M45 236H230M270 180H479" stroke="#8abfa3" stroke-width="8"/><path d="M230 124l40 56-40 56" fill="none" stroke="#8abfa3" stroke-width="8"/><text x="35" y="100" fill="#eef2e9" font-size="22">Convoyage</text><text x="35" y="152" fill="#eef2e9" font-size="18">Aspiration de poudre</text><text x="35" y="213" fill="#eef2e9" font-size="22">Supplémentaire</text><text x="35" y="265" fill="#eef2e9" font-size="18">Transport dans le tuyau</text><text x="288" y="155" fill="#eef2e9" font-size="24">Air total</text><text x="290" y="213" fill="#eef2e9" font-size="19">Ø intérieur</text><text x="35" y="313" fill="#eef2e9" font-size="22">11 mm : guide 4–5 m³/h</text></svg>
<figcaption>Réduire l’air de convoyage réduit aussi l’air total. L’air supplémentaire maintient le transport ; la notice donne des valeurs guides selon le diamètre du tuyau.</figcaption>
</figure>

## Le diamètre du tuyau change la valeur guide

La [page PDF 7, imprimée 5](https://www.gemapowdercoating.com/fileadmin/documents/User_Manuals/English/Injectors_and_Pumps/Venturi_Injectors/OptiFlow-IG02-en.pdf#page=7) propose comme valeurs guides **4–5 m³/h pour un diamètre intérieur de 11 mm** et **5–6 m³/h pour 12 mm**. Elle demande de choisir d’abord la fermeté du nuage ou l’air total, puis la quantité de poudre. Elle indique aussi que des conditions particulières peuvent permettre un air total plus bas avec le tuyau standard de 11 mm.

| Ce qui a changé | Observation à comparer |
| --- | --- |
| Réglage de convoyage réduit | Air total et régularité du transport |
| Tuyau plus long ou comportant davantage de boucles | Nouvelle géométrie, sans réutiliser une valeur d’essai comme garantie |
| Passage de 11 à 12 mm intérieur | Valeur guide correspondant au diamètre installé |
| Réglage inchangé mais débit de poudre en baisse | État de la douille d’insertion et usure citée par Gema |

Gema relie également la sortie de poudre à son type, à la longueur du tuyau, aux boucles, à la différence de hauteur et à la buse. La [lecture du diamètre intérieur](/guides/diametre-longueur-flexible-air-comprime/) aide à identifier le tuyau ; son diamètre extérieur ne suffit pas.

## Garder les unités et les conditions du tableau

Le texte des valeurs guides emploie **m³/h**, tandis que les en-têtes du tableau de sortie de poudre emploient **Nm³/h**. Nous conservons cette différence documentaire sans fournir une conversion dont les conditions de référence ne sont pas indiquées sur cette page. Le [guide des unités d’air](/guides/convertir-cfm-l-min-nl-min-air-comprime/) explique pourquoi cette précision compte.

Le tableau associe une poudre époxy/polyester, un tuyau de **10 m et 11 mm intérieur**, une pression d’entrée de **5 bar** et des buses d’air de **1,6 et 1,4 mm**. Ses sorties en g/min sont des valeurs guides sensibles à l’environnement et à l’usure. Un pourcentage identique sur un autre montage ne garantit donc pas la même masse déposée.

Pour un défaut apparu après baisse de poudre, la première comparaison utile porte sur l’air total avant et après, avec le même tuyau. Une irrégularité persistante malgré un transport cohérent demande ensuite l’examen des autres causes documentées, notamment la douille et la géométrie.

## Sources et méthode

Documents fabricant consultés le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne, sans essai physique ni validation professionnelle externe. Les calculs hypothétiques et les interprétations de CompatAir sont signalés dans le texte.

- [Gema OptiFlow IG02, mode d’emploi](https://www.gemapowdercoating.com/fileadmin/documents/User_Manuals/English/Injectors_and_Pumps/Venturi_Injectors/OptiFlow-IG02-en.pdf)
