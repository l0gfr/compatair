---
title: "Ceccato CSM 15 : que signifie le service continu ?"
seoTitle: "Ceccato CSM 15 : que signifie le service continu ?"
description: "La brochure CSM annonce un cycle continu à 100 %. Voici ce que cette donnée permet de calculer pour le CSM 15 et les limites à conserver."
pubDate: "2026-10-01"
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
featured: false
relatedGuides: ["compresseur-piston-ou-vis-profil-charge", "ceccato-csm25-10-13-bar-debit-perdu", "diagnostiquer-chute-pression-air-comprime"]
sources: ["https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/csm-from-5-hp-on/csm-7-5-20-hp-leaflet/Ceccato-CSM-7-5-20-HP-FR.pdf"]
---

Ceccato annonce un **cycle de service continu à 100 %** pour la série CSM 7,5 à 20 hp. Cette indication permet de distinguer le CSM 15 d'une machine dont le temps de charge autorisé serait inconnu. Elle ne donne toutefois pas une puissance électrique constante ni une permission de négliger l'installation et l'entretien.

## La donnée qui manquait à un simple tableau de débit

La [page de présentation de la série](https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/csm-from-5-hp-on/csm-7-5-20-hp-leaflet/Ceccato-CSM-7-5-20-HP-FR.pdf#page=3) précise explicitement le fonctionnement continu. Le [tableau de performances](https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/csm-from-5-hp-on/csm-7-5-20-hp-leaflet/Ceccato-CSM-7-5-20-HP-FR.pdf#page=5) annonce pour le CSM 15 un moteur de 11 kW et les points suivants, associés à des versions de pression distinctes.

| Pression maximale de version | Pression du FAD | FAD converti depuis les L/s |
| --- | --- | --- |
| 8 bar | 7,5 bar | 27 × 60 = 1 620 L/min |
| 10 bar | 9,5 bar | 23,6 × 60 = 1 416 L/min |
| 13 bar | 12,5 bar | 19,2 × 60 = 1 152 L/min |

Le [Ceccato CSM 15](/compresseurs/ceccato-csm-15-fm-sur-chassis-8-bar/) conserve le point 1 620 L/min à 7,5 bar et la source du cycle continu. Il ne reprend pas une courbe extrapolée entre les trois versions.

<figure class="article-infographic article-infographic--compact" style="margin-bottom:2rem"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 272" role="img" aria-labelledby="ceccato-csm15-cycle-continu-100-pourcent-t ceccato-csm15-cycle-continu-100-pourcent-d"><title id="ceccato-csm15-cycle-continu-100-pourcent-t">CSM 15 : FAD des versions de pression</title><desc id="ceccato-csm15-cycle-continu-100-pourcent-d">Le service continu est annoncé page 3. Les performances de version proviennent de la page 5.</desc><rect width="480" height="272" rx="16" fill="#10281e"/><text x="24" y="34" fill="#d3eb56" font-size="16">CSM 15 : FAD des versions de pression</text><text x="24" y="68" fill="#eef2e9" font-size="14">8 bar maxi, mesure à 7,5</text><text x="456" y="68" text-anchor="end" fill="#eef2e9" font-size="14">1620</text><rect x="24" y="78" width="432" height="9" rx="4" fill="#315341"/><rect x="24" y="78" width="432.00" height="9" rx="4" fill="#d3eb56"/><text x="24" y="124" fill="#eef2e9" font-size="14">10 bar maxi, mesure à 9,5</text><text x="456" y="124" text-anchor="end" fill="#eef2e9" font-size="14">1416</text><rect x="24" y="134" width="432" height="9" rx="4" fill="#315341"/><rect x="24" y="134" width="377.60" height="9" rx="4" fill="#d3eb56"/><text x="24" y="180" fill="#eef2e9" font-size="14">13 bar maxi, mesure à 12,5</text><text x="456" y="180" text-anchor="end" fill="#eef2e9" font-size="14">1152</text><rect x="24" y="190" width="432" height="9" rx="4" fill="#315341"/><rect x="24" y="190" width="307.20" height="9" rx="4" fill="#d3eb56"/><text x="24" y="253" fill="#eef2e9" font-size="13">L/min, conversions de la colonne L/s</text></svg><figcaption>Le service continu est annoncé page 3. Les performances de version proviennent de la page 5.</figcaption></figure>

## Un exemple de poste permanent

Avec une demande documentée de 1 200 L/min et une marge choisie de 25 %, la cible de dimensionnement est 1 500 L/min. La version 8 bar dépasse cette cible de 120 L/min à son point publié. La version 10 bar lui manque de 84 L/min, et la version 13 bar de 348 L/min.

Cette comparaison est exploitable uniquement si la pression du poste et celle livrée par le réseau sont compatibles. Le débit publié à 7,5 bar ne prouve pas que le poste reçoit 7,5 bar après les filtres, raccords et flexibles. La marge de 25 % appartient au scénario, sans prétention de règle universelle.

Une cuve peut amortir une demande ponctuelle. Elle ne rend pas durable une consommation qui dépasse la production. Pour un atelier intermittent, le [profil de charge](/guides/compresseur-piston-ou-vis-profil-charge/) mérite aussi d'être examiné, car la seule étiquette « continu » ne décrit pas la régulation ni les périodes de marche à vide.

## La réception de l'installation

Le devis doit confirmer la version, la tension, les options, le point de FAD et les conditions de fonctionnement autorisées. Demandez la notice correspondant à la machine livrée pour les exigences de ventilation, les accès et les intervalles de maintenance. Le document commercial retenu ne suffit pas à établir toutes ces conditions.

Ne multipliez pas simplement 11 kW par les heures d'ouverture pour annoncer une consommation annuelle : le tableau donne une puissance moteur, sans historique de charge ni mesure électrique de l'installation.

Le service continu documenté enlève une incertitude précise du dimensionnement. Il ne supprime pas les autres. Pour le scénario de 1 200 L/min, la version 8 bar présente la marge de débit calculée ; une conclusion complète exige encore la pression dynamique, la simultanéité des autres postes et le traitement d'air prévu.
