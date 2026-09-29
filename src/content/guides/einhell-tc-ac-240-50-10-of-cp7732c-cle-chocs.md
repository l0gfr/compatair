---
title: "Einhell TC-AC 240/50/10 OF et CP7732C : une clé à chocs trop gourmande ?"
description: "Débit restitué, consommation en charge et réserve de 50 L : comprendre les limites documentées du couple Einhell TC-AC 240/50/10 OF et CP7732C."
pubDate: 2026-09-29
category: Choisir
audiences: ["particulier", "professionnel"]
metiers: ["garage-automobile"]
readingTime: 4
featured: false
reviewStatus: internal
relatedCalculatorTool: chicago-pneumatic-cp7732c
relatedGuides: ["compresseur-pour-cle-a-chocs-pneumatique", "consommation-moyenne-en-charge-cle-a-chocs", "choisir-volume-cuve-24-50-90-litres"]
sources:
  - https://www.einhell.fr/p/4010393-tc-ac-240-50-10-of
  - https://tools.cp.com/content/dam/brands/Chicago%20Pneumatic/cp-tools-literature/leaflets-and-brochures/cp7732c-impact-wrench/CP7732C_Leaflet_EN.pdf
  - https://tools.cp.com/en/products/impactwrenches/cp7732c-sku8941077321
---

**Le TC-AC 240/50/10 OF ne constitue pas une alimentation continue adaptée à la CP7732C.** Sa cuve peut fournir une réserve momentanée, mais les débits publiés ne suivent pas la demande de la clé en charge. Cette analyse documentaire ne garantit ni le desserrage d’un écrou donné ni une durée d’utilisation mesurée.

## Les deux références à identifier

La comparaison porte sur le [compresseur Einhell TC-AC 240/50/10 OF](/compresseurs/einhell-tc-ac-240-50-10-of/), référence 4010393, et la [Chicago Pneumatic CP7732C](/outils-pneumatiques/cle-a-chocs-chicago-pneumatic-cp7732c/), référence 8941077321. Une autre clé, même avec un carré de 1/2 pouce, peut avoir un besoin différent.

[Einhell publie](https://www.einhell.fr/p/4010393-tc-ac-240-50-10-of) 76 L/min en sortie à 7 bar, 107 L/min à 4 bar et 173 L/min à 0 bar. Les 240 L/min sont le débit aspiré. La cuve fait 50 L, la pression maximale 10 bar et le service moteur indiqué est S3 25 %.

Dans sa [brochure de 2016, page 2](https://tools.cp.com/content/dam/brands/Chicago%20Pneumatic/cp-tools-literature/leaflets-and-brochures/cp7732c-impact-wrench/CP7732C_Leaflet_EN.pdf), Chicago Pneumatic distingue 2,6 L/s moyens et 10,2 L/s en charge à 6,3 bar. La conversion donne respectivement 156 et 612 L/min. La [fiche web actuelle](https://tools.cp.com/en/products/impactwrenches/cp7732c-sku8941077321) affiche 10 L/s en charge, soit 600 L/min. Le fabricant n’explique pas cet écart dans les documents consultés. CompatAir retient les 612 L/min documentés pour le besoin conservateur.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 242" role="img" aria-labelledby="einhell-tc-ac-240-50-10-of-cp7732c-cle-chocs-title einhell-tc-ac-240-50-10-of-cp7732c-cle-chocs-desc" style="font-family:system-ui,sans-serif">
<title id="einhell-tc-ac-240-50-10-of-cp7732c-cle-chocs-title">Production et consommation de la CP7732C</title><desc id="einhell-tc-ac-240-50-10-of-cp7732c-cle-chocs-desc">Valeurs fabricant : 76 L/min à 7 bar pour le compresseur ; 612 L/min en charge à 6,3 bar pour la clé dans la brochure. Ce graphique ne représente pas un essai.</desc>
<rect width="440" height="242" rx="16" fill="#10281e"/>
<text x="24" y="32" fill="#d3eb56" font-size="16" text-anchor="start" font-weight="700">L/min publiés, conditions différentes</text><text x="24" y="68" fill="#eef2e9" font-size="17" text-anchor="start" font-weight="400">Einhell : sortie à 7 bar</text><text x="416" y="68" fill="#eef2e9" font-size="17" text-anchor="end" font-weight="700">76</text><rect x="24" y="80" width="392" height="14" rx="8" fill="#315341"/><rect x="24" y="80" width="45.83" height="14" rx="8" fill="#d3eb56"/><text x="24" y="134" fill="#eef2e9" font-size="17" text-anchor="start" font-weight="400">CP7732C : charge, brochure</text><text x="416" y="134" fill="#eef2e9" font-size="17" text-anchor="end" font-weight="700">612</text><rect x="24" y="146" width="392" height="14" rx="8" fill="#315341"/><rect x="24" y="146" width="369.08" height="14" rx="8" fill="#d3eb56"/><text x="24" y="200" fill="#eef2e9" font-size="15" text-anchor="start" font-weight="400">Comparer aussi la pression et le service.</text>
</svg>
<figcaption>Valeurs fabricant : 76 L/min à 7 bar pour le compresseur ; 612 L/min en charge à 6,3 bar pour la clé dans la brochure. Ce graphique ne représente pas un essai.</figcaption>
</figure>

## Pourquoi une utilisation brève ne valide pas le dimensionnement

Un premier desserrage réussi renseigne sur cette opération, avec cette réserve et ce réseau. Il ne démontre pas que la pompe peut reconstituer l’air au rythme d’une série de roues. La pression de cuve, la pression à l’entrée de la clé et le débit produit sont trois informations différentes.

À titre de calcul idéal, une cuve de 50 L passant de 10 à 7 bar relatifs libère environ 150 L ramenés à une référence de 1 bar absolu, à température supposée constante : 50 × (10 − 7). Ce volume théorique ne devient pas un nombre garanti d’écrous. Le débit varie avec la pression, les pertes du flexible comptent et le pressostat commande les redémarrages.

Le [guide de consommation moyenne et en charge](/guides/consommation-moyenne-en-charge-cle-a-chocs/) explique pourquoi employer les 156 L/min moyens pour dimensionner le passage d’air crée une comparaison trompeuse.

## Décider avant d’acheter

| Travail envisagé | Décision technique |
| --- | --- |
| Série de desserrages avec peu de pauses | Écarter ce couple comme alimentation durable |
| Intervention isolée, cuve initialement chargée | Un essai représentatif reste nécessaire ; résultat non garanti |
| Achat de la clé pour un atelier existant | Vérifier le débit disponible et la pression en fonctionnement au poste |

La fiche CP demande un flexible de 10 mm intérieur dans sa configuration annoncée de 5 m. Ce repère ne valide pas automatiquement une rallonge plus longue ou un enrouleur restrictif. La [sélection technique pour la CP7732C](/quel-compresseur-pour/cle-a-chocs-chicago-pneumatic-cp7732c/) relie le besoin aux données réellement disponibles dans la base.

Si l’objectif est un usage suivi, cherchez d’abord un débit restitué documenté à la pression pertinente et un service compatible avec la cadence. Passer à une cuve plus grande sur une pompe similaire ne règle pas, à lui seul, ce déficit de production.
