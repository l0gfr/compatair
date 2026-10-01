---
title: "OBER AMI22AT : pourquoi 300 Nl/ciclo pose problème"
seoTitle: "OBER AMI22AT : pourquoi 300 Nl/ciclo pose problème"
description: "Le catalogue OBER indique 300 Nl/ciclo pour l’AMI22AT, sans définir le cycle ni la pression. Voici les données à obtenir avant de choisir le compresseur."
pubDate: "2026-10-01"
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
featured: false
relatedGuides: ["contradiction-debit-cfm-m3-min-catalogues", "visseuse-pneumatique-demarrage-appui-gachette", "visseuse-pneumatique-coupure-automatique"]
sources: ["https://www.ober.it/download/13ALd55cbw"]
relatedCalculatorTool: "visseuse-ober-ami22at-8301052"
---

La visseuse OBER AMI22AT, code **8301052**, est accompagnée d'une consommation de **300 Nl/ciclo** dans le catalogue industriel 2020 révision 2. Ce libellé ne doit pas être réécrit en 300 L/min. Le document examiné ne définit pas le cycle ni la pression de cette valeur.

## Une unité à conserver avant de la clarifier

À la [page PDF de la série AMI](https://www.ober.it/download/13ALd55cbw#page=16), le tableau donne 1 200 tr/min à vide, une masse de 0,5 kg et une longueur de 215 mm pour l'AMI22AT. La ligne de consommation est intitulée « CONSUMO ARIA (Nl/ciclo) » et porte le nombre 300.

La même page donne 300 pour les AMI44AT et AMI66AT, alors que leurs vitesses à vide sont 800 et 500 tr/min. Ces valeurs ne permettent pas d'identifier la durée du cycle. Les tours par minute du moteur ne sont pas des cycles de vissage par minute.

| Repère | AMI22AT | AMI44AT | AMI66AT |
| --- | --- | --- | --- |
| Code constructeur | 8301052 | 8301054 | 8301056 |
| Vitesse à vide | 1 200 tr/min | 800 tr/min | 500 tr/min |
| Consommation imprimée | 300 Nl/ciclo | 300 Nl/ciclo | 300 Nl/ciclo |

La fiche [OBER AMI22AT](/outils-pneumatiques/visseuse-ober-ami22at-8301052/) conserve l'unité dans ses repères documentaires, hors calcul. Aucun besoin en L/min n'est déduit de la puissance de 70 W présentée pour la série.

<figure class="article-infographic article-infographic--compact" style="margin-bottom:2rem"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 272" role="img" aria-labelledby="ober-ami22at-300-nl-ciclo-unite-t ober-ami22at-300-nl-ciclo-unite-d"><title id="ober-ami22at-300-nl-ciclo-unite-t">AMI : vitesses à vide distinctes</title><desc id="ober-ami22at-300-nl-ciclo-unite-d">Source OBER, page PDF 16. Les trois cellules de consommation portent 300 Nl/ciclo, sans définition de cycle dans ce tableau.</desc><rect width="480" height="272" rx="16" fill="#10281e"/><text x="24" y="34" fill="#d3eb56" font-size="16">AMI : vitesses à vide distinctes</text><text x="24" y="68" fill="#eef2e9" font-size="14">AMI22AT</text><text x="456" y="68" text-anchor="end" fill="#eef2e9" font-size="14">1200</text><rect x="24" y="78" width="432" height="9" rx="4" fill="#315341"/><rect x="24" y="78" width="432.00" height="9" rx="4" fill="#d3eb56"/><text x="24" y="124" fill="#eef2e9" font-size="14">AMI44AT</text><text x="456" y="124" text-anchor="end" fill="#eef2e9" font-size="14">800</text><rect x="24" y="134" width="432" height="9" rx="4" fill="#315341"/><rect x="24" y="134" width="288.00" height="9" rx="4" fill="#d3eb56"/><text x="24" y="180" fill="#eef2e9" font-size="14">AMI66AT</text><text x="456" y="180" text-anchor="end" fill="#eef2e9" font-size="14">500</text><rect x="24" y="190" width="432" height="9" rx="4" fill="#315341"/><rect x="24" y="190" width="180.00" height="9" rx="4" fill="#d3eb56"/><text x="24" y="253" fill="#eef2e9" font-size="13">tr/min ; ce ne sont pas des cycles de vissage</text></svg><figcaption>Source OBER, page PDF 16. Les trois cellules de consommation portent 300 Nl/ciclo, sans définition de cycle dans ce tableau.</figcaption></figure>

## Pourquoi les conversions habituelles ne résolvent pas le manque

Un volume par cycle et un débit par minute sont deux grandeurs différentes. Pour passer de l'un à l'autre, il faut une cadence de cycles définis. Ici, même cette multiplication resterait prématurée : le document ne précise pas ce qu'il compte comme un cycle ni les conditions de référence des litres normalisés.

Il est possible qu'une clarification du fabricant corrige ou complète l'en-tête. Ce guide ne tranche pas cette hypothèse. Il conserve le libellé imprimé et signale le manque ; il ne prétend pas que la visseuse consomme réellement 300 litres à chaque vis.

La pression de fonctionnement n'est pas établie par ce tableau. Reprendre 6,3 bar par habitude ajouterait donc une seconde donnée non documentée à une première unité déjà ambiguë.

## La demande utile à adresser au fournisseur

Transmettez le code 8301052, l'édition du catalogue et la page du tableau. Demandez si la consommation est exprimée par cycle ou par minute, comment le cycle est défini, quelles conditions de référence sont retenues et à quelle pression le chiffre est mesuré. Faites préciser le régime : à vide, en charge, maximum ou moyenne.

Cette demande est plus exploitable qu'une question générale sur « le débit de la série AMI ». Les trois références ont des vitesses et couples différents ; une réponse doit correspondre au modèle exact. Vérifiez ensuite le démarrage par poussée, l'embrayage et les accessoires avec la notice du poste.

Le verdict CompatAir reste en données insuffisantes pour l'air. Les vitesses, masses et codes documentés sont utilisables pour identifier l'outil, sans garantir l'alimentation. Le [guide des contradictions d'unités](/guides/contradiction-debit-cfm-m3-min-catalogues/) et celui sur le [démarrage des visseuses](/guides/visseuse-pneumatique-demarrage-appui-gachette/) complètent cette vérification.
