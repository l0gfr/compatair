---
title: "Dimensionner un poste pneumatique pour poids lourds à partir de la clé exacte"
seoTitle: "Poste pneumatique poids lourds : dimensionnement"
description: "Dossier de dimensionnement d’un poste de roues poids lourds fondé sur la consommation en charge, la pression et le flexible de la référence utilisée."
pubDate: 2026-07-15
category: "Choisir"
audiences: [professionnel]
metiers: [garage-automobile]
readingTime: 14
featured: true
sources:
  - https://tools.cp.com/fr-fr/products/impactwrenches/cp5000-skuT024585
  - https://tools.cp.com/en-ca/products/impactwrenches/cp7748-sku8941077481
  - https://www.atlascopco.com/en-uk/compressors/air-compressor-blog/sizing-compressed-air-pipe
  - https://www.inrs.fr/dam/inrs/CataloguePapier/ED/TI-ED-961.pdf
---

Le carré d’entraînement et le couple maximal ne dimensionnent pas, à eux seuls, le réseau d’un poste poids lourds. La demande d’air se construit avec la clé réellement installée, sa pression en fonctionnement, son flexible, la cadence du poste et les autres consommateurs présents au même moment.

## Un exemple documenté : la CP5000

Chicago Pneumatic présente la [CP5000](https://tools.cp.com/fr-fr/products/impactwrenches/cp5000-skuT024585) comme une clé à chocs pneumatique de **1 pouce**, destinée notamment au travail des pneus de camions, autobus et équipements lourds. Sa fiche publie :

- **25 L/s** de consommation d’air en charge ;
- **6,3 bar** de pression dynamique maximale de service ;
- **13 mm** de diamètre intérieur minimal pour un flexible de 5 m ;
- la référence **T024585**.

La conversion de débit est directe : `25 L/s × 60 = 1 500 L/min`. Cette valeur calculée conserve la qualification « en charge ». Elle ne devient ni une moyenne de garage ni un débit permanent de toutes les clés de 1 pouce.

Pour mesurer l’écart d’échelle, la [CP7748](https://tools.cp.com/en-ca/products/impactwrenches/cp7748-sku8941077481), clé de 1/2 pouce destinée aux véhicules légers dans la présentation du fabricant, est donnée à 12 L/s en charge avec un flexible minimal de 10 mm sur 5 m. Comparer ces deux fiches ne crée pas une règle par taille de carré. Cela montre seulement que le poste doit conserver le modèle exact.

<div class="article-infographic" tabindex="0" role="group" aria-label="Infographie technique défilable horizontalement sur petit écran">
<svg viewBox="0 0 760 360" role="img" aria-labelledby="truck-station-title truck-station-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="truck-station-title">Chaîne de dimensionnement d’un poste poids lourds</title><desc id="truck-station-desc">La consommation en charge de la clé CP5000 est convertie en litres par minute, combinée avec les usages simultanés, puis comparée au débit restitué et à la pression mesurée au poste.</desc>
  <rect width="760" height="360" rx="22" fill="#eef2e9"/><text x="38" y="46" fill="#143426" font-size="22" font-weight="700">Le poste se calcule de l’outil vers la centrale</text>
  <rect x="38" y="82" width="204" height="104" rx="16" fill="#143426"/><text x="58" y="116" fill="#d3eb56" font-size="13" font-weight="700">DONNÉE FABRICANT</text><text x="58" y="149" fill="white" font-size="25" font-weight="700">25 L/s</text><text x="58" y="172" fill="#bed0c6" font-size="13">CP5000 en charge</text>
  <path d="M242 134h52" stroke="#d27f43" stroke-width="3"/><rect x="294" y="82" width="172" height="104" rx="16" fill="#fff"/><text x="314" y="116" fill="#19704f" font-size="13" font-weight="700">CALCUL</text><text x="314" y="149" fill="#143426" font-size="25" font-weight="700">1 500 L/min</text><text x="314" y="172" fill="#56685e" font-size="13">25 × 60</text>
  <path d="M466 134h52" stroke="#d27f43" stroke-width="3"/><rect x="518" y="82" width="204" height="104" rx="16" fill="#d3eb56"/><text x="538" y="116" fill="#143426" font-size="13" font-weight="700">SCÉNARIO D’ATELIER</text><text x="538" y="147" fill="#143426" font-size="19" font-weight="700">+ simultanéité</text><text x="538" y="172" fill="#56685e" font-size="13">cadence réellement relevée</text>
  <path d="M140 230h480" stroke="#7c9588" stroke-width="2"/><circle cx="140" cy="230" r="5" fill="#19704f"/><circle cx="380" cy="230" r="5" fill="#19704f"/><circle cx="620" cy="230" r="5" fill="#19704f"/><text x="140" y="263" text-anchor="middle" fill="#143426" font-size="14" font-weight="700">Flexible 13 mm / 5 m</text><text x="380" y="263" text-anchor="middle" fill="#143426" font-size="14" font-weight="700">6,3 bar en charge</text><text x="620" y="263" text-anchor="middle" fill="#143426" font-size="14" font-weight="700">FAD comparable</text><text x="38" y="326" fill="#56685e" font-size="14">Toute donnée absente reste visible : elle n’est pas remplacée par un profil « poids lourds ».</text>
</svg>
</div>

## Décrire une séquence réelle de travail

Le débit en charge répond à une phase de fonctionnement. Pour dimensionner le poste, observez une période représentative et consignez : durée d’appui, intervalle entre deux roues, enchaînement des véhicules et autres outils actifs. Une seconde clé, une soufflette ou un dispositif de gonflage peuvent se superposer à la demande principale.

Deux scénarios doivent rester distincts :

1. **pointe transitoire**, lorsque la clé travaille quelques secondes et que le stockage se reconstitue entre les opérations ;
2. **charge soutenue ou simultanée**, lorsque les reprises sont trop rapprochées pour que la pression se stabilise.

La cuve intervient dans le premier scénario. Dans le second, le [FAD du compresseur](/glossaire/#fad) et la stratégie de commande deviennent déterminants. Le volume de stockage ne crée pas de débit continu.

## Conserver le flexible prescrit dans le calcul

La valeur de 13 mm publiée par Chicago Pneumatic concerne 5 m de flexible sur la CP5000. Elle ne permet pas de valider automatiquement un enrouleur plus long, un coupleur réduit ou une succession d’adaptateurs.

Atlas Copco précise que les pertes des flexibles, coupleurs et autres raccords doivent être ajoutées à celles du réseau fixe. Le fabricant recommande aussi de dimensionner séparément les différentes portions d’un réseau important. Pour un poste lourd éloigné, la longueur totale et les singularités doivent donc apparaître sur le plan, pas seulement le diamètre de la dernière section.

Le contrôle final s’effectue sous débit. Une mesure de pression à la sortie du régulateur, une autre avant le flexible et une troisième au raccord de la clé localisent la portion qui consomme la marge disponible.

## Comparer des grandeurs comparables

La demande de 1 500 L/min provient de la consommation en charge de la CP5000 convertie. Côté production, la donnée recherchée est un débit restitué à une pression proche de la pression utile. La [différence entre FAD et débit aspiré](/guides/debit-restitue-fad-vs-debit-aspire/) interdit de placer un chiffre d’aspiration en face de cette demande.

Le dossier d’achat doit comporter au minimum :

| Élément | Preuve attendue |
| --- | --- |
| Outil | modèle, consommation qualifiée, pression, flexible |
| Production | courbe ou points FAD aux pressions concernées |
| Distribution | plan, longueurs, diamètres, raccords, traitement |
| Exploitation | cadence, chevauchements, pression dynamique mesurée |
| Stockage | volume, plage de pression et fonction assignée |

Sans point FAD exploitable, on peut documenter la demande du poste, mais pas conclure sur une compatibilité continue.

## Ne pas mélanger dimensionnement et sécurité du gonflage

Un poste de roues ne se résume pas à la clé. Le guide INRS [ED 961 sur les opérations d’entretien des pneumatiques](https://www.inrs.fr/dam/inrs/CataloguePapier/ED/TI-ED-961.pdf) traite séparément le gonflage, la position de l’opérateur, la longueur du tuyau et l’emploi d’une cage pour certaines catégories de pneus.

Ces règles n’augmentent pas le débit calculé de la clé, mais elles modifient l’aménagement du poste. Le flexible de gonflage, sa commande et sa zone de sécurité ne doivent pas être confondus avec le flexible d’alimentation de la CP5000. Le dossier [organiser un poste de gonflage](/guides/poste-gonflage-pneus-atelier-mesure-securite/) reprend ce volet.

## Recette après modification

Après l’installation ou le remplacement d’un composant, rejouez le scénario relevé : même clé, même flexible terminal, même durée et mêmes consommateurs simultanés. Conservez les pressions aux points témoins et les états de commande du compresseur.

Un poste est documenté lorsque l’atelier peut expliquer la demande, retrouver les sources, localiser les pertes et reproduire l’essai. L’étiquette « spécial poids lourds » ne remplit aucune de ces fonctions.

## Sources

- [Chicago Pneumatic, fiche officielle CP5000](https://tools.cp.com/fr-fr/products/impactwrenches/cp5000-skuT024585)
- [Chicago Pneumatic, fiche officielle CP7748](https://tools.cp.com/en-ca/products/impactwrenches/cp7748-sku8941077481)
- [Atlas Copco, dimensionnement des canalisations d’air comprimé](https://www.atlascopco.com/en-uk/compressors/air-compressor-blog/sizing-compressed-air-pipe)
- [INRS, ED 961, Opérations d’entretien et de remplacement des pneumatiques](https://www.inrs.fr/dam/inrs/CataloguePapier/ED/TI-ED-961.pdf)
