---
title: "KAESER SX 3 : une perceuse de 270 L/min suffit-elle ?"
seoTitle: "KAESER SX 3 : une perceuse de 270 L/min suffit-elle ?"
description: "Le SX 3 annonce 340 L/min à 7,5 bar. Calcul de la marge disponible pour une perceuse de 270 L/min, avec les limites du point FAD et du réseau."
pubDate: "2026-10-01"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
featured: false
relatedGuides: ["bosch-0607154101-compresseur-270-litres-minute", "comparatif-compresseurs-debit-restitue"]
sources: ["https://nl.kaeser.com/download.ashx?id=tcm:32-5919", "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf", "https://us.kaeser.com/compressed-air-resources/applications/automotive-services/"]
---

Le KAESER SX 3 en version 8 bar peut couvrir, sur les données déclarées, une demande continue de 270 L/min à 6,3 bar. Sa marge brute est de 70 L/min. Ce résultat concerne la version qui fournit **340 L/min à 7,5 bar**, et suppose que l’installation maintient la pression requise jusqu’à l’outil.

## Le bon SX 3 sur le devis

La [brochure SX, tableau de la version de base](https://nl.kaeser.com/download.ashx?id=tcm:32-5919#page=8) publie deux configurations : 0,34 m³/min à 7,5 bar, avec une pression maximale de 8 bar ; 0,26 m³/min à 10 bar, avec un maximum de 11 bar. Les deux lignes ont le même moteur de 2,2 kW. Commander « un SX 3 » sans préciser sa configuration laisse donc ouverte une différence de 80 L/min entre les points annoncés.

Pour la [Bosch 0 607 154 101](/outils-pneumatiques/perceuse-bosch-0-607-154-101-0607154101/), la [fiche consacrée à la consommation en charge](/guides/bosch-0607154101-compresseur-270-litres-minute/) établit un besoin de 270 L/min à 6,3 bar. Ces 270 L/min proviennent des 4,5 L/s du [tableau Bosch en charge](https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf#page=12), sous les conditions de 6,3 bar du préambule page PDF 4. Le point à 7,5 bar du SX constitue une borne de comparaison à une pression supérieure. Il ne devient pas une mesure directe du débit à 6,3 bar.

<figure class="article-infographic article-infographic--compact" style="margin-bottom:2rem"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 272" role="img" aria-labelledby="sx3-bosch-t sx3-bosch-d"><title id="sx3-bosch-t">Budget d’air du scénario</title><desc id="sx3-bosch-d">Le seuil de 337,5 L/min est un scénario CompatAir. Il ne vient pas d’une prescription KAESER ou Bosch.</desc><rect width="480" height="272" rx="16" fill="#10281e"/><text x="24" y="34" fill="#d3eb56" font-size="16">Budget d’air du scénario</text><text x="24" y="68" fill="#eef2e9" font-size="14">SX 3, FAD à 7,5 bar</text><text x="456" y="68" text-anchor="end" fill="#eef2e9" font-size="14">340</text><rect x="24" y="78" width="432" height="9" rx="4" fill="#315341"/><rect x="24" y="78" width="432.00" height="9" rx="4" fill="#d3eb56"/><text x="24" y="124" fill="#eef2e9" font-size="14">Perceuse, débit en charge</text><text x="456" y="124" text-anchor="end" fill="#eef2e9" font-size="14">270</text><rect x="24" y="134" width="432" height="9" rx="4" fill="#315341"/><rect x="24" y="134" width="343.06" height="9" rx="4" fill="#d3eb56"/><text x="24" y="180" fill="#eef2e9" font-size="14">Sélection avec marge de 25 %</text><text x="456" y="180" text-anchor="end" fill="#eef2e9" font-size="14">337.5</text><rect x="24" y="190" width="432" height="9" rx="4" fill="#315341"/><rect x="24" y="190" width="428.82" height="9" rx="4" fill="#d3eb56"/><text x="24" y="253" fill="#eef2e9" font-size="13">L/min ; marge de sélection choisie</text></svg><figcaption>Le seuil de 337,5 L/min est un scénario CompatAir. Il ne vient pas d’une prescription KAESER ou Bosch.</figcaption></figure>

## Une couverture numérique avec peu de réserve supplémentaire

Avec une marge de sélection explicite de 25 %, le seuil atteint 270 × 1,25 = 337,5 L/min. Le point de 340 L/min le dépasse de 2,5 L/min seulement. Il serait trompeur de transformer cette proximité en promesse de fonctionnement confortable pour un atelier comportant d’autres consommateurs.

Un second outil, une fuite ou un poste de soufflage n’est pas compris dans ces 270 L/min. Relevez les équipements qui peuvent fonctionner ensemble, puis ajoutez leurs demandes documentées. Une valeur moyenne ne peut pas être traitée comme un débit en charge pour compléter ce bilan.

KAESER annonce explicitement un [cycle de service à 100 % pour les séries SX, SM et SK](https://us.kaeser.com/compressed-air-resources/applications/automotive-services/). Cette indication concerne une installation conforme aux conditions du fabricant. Elle ne garantit ni le débit d’un coupleur rapide ni la qualité de l’air après un flexible.

## Réceptionner le poste avec la perceuse en fonctionnement

Le contrôle utile porte sur la pression à l’entrée de la perceuse pendant le perçage. Une mesure prise sur la cuve, outil arrêté, ne vérifie pas la pression disponible sous débit. Faites relever le comportement pendant un cycle de travail représentatif, ainsi que les autres usages simultanés.

La [KAESER SX 3](/compresseurs/kaeser-sx-3-base-sans-cuve-8-bar/) conserve le point FAD et sa source. Le [comparatif des débits restitués](/guides/comparatif-compresseurs-debit-restitue/) explique les différences de conditions de mesure. Si le bilan du poste dépasse le seuil retenu, il faut examiner la configuration suivante avant l’achat plutôt qu’attribuer au petit SX une réserve qu’il ne documente pas.
