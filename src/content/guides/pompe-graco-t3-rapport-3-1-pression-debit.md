---
title: "Pompe Graco T3 3:1 : pourquoi le rapport ne donne pas la consommation d’air"
seoTitle: "Graco T3 3:1 : pression produit et débit d’air"
description: "Le rapport 3:1 de la Graco T3 concerne les pressions. Lire les limites air et produit, puis demander la courbe de consommation avant de dimensionner."
pubDate: 2026-09-30
category: Comprendre
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "btp-chantier"]
readingTime: 4
reviewStatus: internal
relatedGuides: ["pompe-membrane-aro-66605-debit-air", "surpresseur-pneumatique-festo-dpa-pression-debit", "raccord-air-comprime-bsp-npt-1-4"]
sources:
  - https://www.graco.com/us/en/in-plant-manufacturing/product/26a304-t3-stainless-steel.html
---

Un devis mentionne une pompe « 3:1 » et le réseau fournit assez de pression. **Cela ne suffit pas à choisir le compresseur.** Sur la Graco T3, le rapport désigne la relation entre pression du produit et pression motrice ; il ne signifie pas trois litres de produit pour un litre d’air.

## Lire la référence avant le rapport

La [fiche Graco T3 inox 26A304](https://www.graco.com/us/en/in-plant-manufacturing/product/26a304-t3-stainless-steel.html) décrit une pompe à piston pneumatique de rapport 3:1, avec une pression d’entrée d’air maximale de **6,9 bar** et une pression de service produit maximale publiée de **21,7 bar**. L’entrée d’air est filetée 1/4 NPT femelle. Ces trois mentions répondent à des questions différentes : alimentation, limite du circuit produit et raccordement.

La fiche présente un écart à faire clarifier : **6,9 × 3 = 20,7 bar**, alors que la pression produit maximale affichée est de **21,7 bar**. Nous conservons les deux valeurs publiées et signalons cette différence, sans lui attribuer une cause. Demandez à Graco la notice applicable à la pompe livrée et la confirmation des limites avant de dimensionner le circuit produit.

Le rapport idéal aide à comprendre la multiplication de pression. Il ne remplace ni ces limites ni la courbe en débit. Une correction supposée de la fiche commerciale ne doit pas devenir une pression de réglage.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 290" role="img" aria-labelledby="pompe-graco-t3-rapport-3-1-pression-debit-title pompe-graco-t3-rapport-3-1-pression-debit-desc" style="font-family:system-ui,sans-serif"><title id="pompe-graco-t3-rapport-3-1-pression-debit-title">Trois données indépendantes</title><desc id="pompe-graco-t3-rapport-3-1-pression-debit-desc">Les limites publiées de la 26A304 ne constituent pas une courbe de débit ni un essai de la pompe.</desc><rect width="440" height="290" rx="16" fill="#10281e"/><text x="24" y="33" font-size="18" fill="#d3eb56" font-weight="700">Trois données indépendantes</text><rect x="20" y="50" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="72" font-size="18" fill="#d3eb56" font-weight="700">3:1</text><text x="32" y="97" font-size="16" fill="#eef2e9">Rapport de pression, pas rapport de volumes</text><rect x="20" y="120" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="142" font-size="18" fill="#d3eb56" font-weight="700">6,9 bar air maximum</text><text x="32" y="167" font-size="16" fill="#eef2e9">Limite d’alimentation publiée</text><rect x="20" y="190" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="212" font-size="18" fill="#d3eb56" font-weight="700">Consommation d’air</text><text x="32" y="237" font-size="16" fill="#eef2e9">À documenter au point de travail</text></svg>
<figcaption>Les limites publiées de la 26A304 ne constituent pas une courbe de débit ni un essai de la pompe.</figcaption>
</figure>

## Le point de travail manque encore

Pour consulter un fournisseur, indiquez le produit réellement transféré, sa température, sa viscosité documentée, le débit demandé, la longueur de ligne et la pression nécessaire au récepteur. Demandez la courbe correspondant à la configuration : débit produit, pression et consommation d’air au même point.

La fiche commerciale consultée ne fournit pas une consommation d’air utilisable pour tous ces scénarios. La case reste donc à compléter dans le bilan du compresseur. Notre [lecture de courbe de pompe à membrane](/guides/pompe-membrane-aro-66605-debit-air/) montre la méthode générale, sans attribuer les courbes ARO à la T3.

| Donnée reçue | Décision qu’elle permet |
| --- | --- |
| Rapport 3:1 | Comprendre la multiplication de pression |
| Pression air maximale | Borner l’alimentation de cette pompe |
| Pression produit maximale | Vérifier les limites du circuit produit |
| Courbe au débit demandé | Évaluer la consommation motrice |
| Référence des matériaux mouillés | Faire confirmer la compatibilité du produit |

## Un système de transfert comprend deux circuits

Dessinez séparément l’arrivée d’air et la ligne produit. Faites apparaître les limites et les organes prévus sur chacun. Un accessoire sélectionné pour la pression d’air ne devient pas un accessoire compatible avec la pression, la chimie et la température du produit.

Le [dossier du surpresseur d’air](/guides/surpresseur-pneumatique-festo-dpa-pression-debit/) traite un autre appareil qui transforme une pression. Dans les deux cas, une pression de sortie supérieure ne renseigne pas à elle seule la capacité de production en continu.

## Acheter la bonne pompe, puis son alimentation

La fiche 26A304 décrit des applications polyuréthane et polyurée. Elle ne valide pas par analogie tous les fluides d’atelier. Envoyez la fiche de sécurité et les conditions de service au fournisseur pour obtenir une réponse écrite sur les matériaux et accessoires.

Pour le raccord d’air, gardez la désignation NPT : « 1/4 » seul est trop vague. Le [guide BSP et NPT](/guides/raccord-air-comprime-bsp-npt-1-4/) explique les contrôles à faire avant d’assembler. Clôturez le devis avec un point de fonctionnement documenté ; sans consommation d’air confirmée, CompatAir ne peut donner un compresseur « suffisant ».
