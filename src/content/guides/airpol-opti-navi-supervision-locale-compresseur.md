---
title: "Airpol OPTI/NAVI : préparer une supervision locale avec les données effectivement exposées"
seoTitle: "Airpol OPTI/NAVI : données de supervision locale"
description: "Préparer le suivi local OPTI/NAVI avec capteurs, événements et compteurs documentés. Identifier les limites de cadence, export et API avant intégration."
pubDate: 2026-10-03
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["indicateurs-maintenance-air-comprime", "audit-reseau-air-comprime-protocole-mesures", "sequencer-plusieurs-compresseurs"]
sources: ["https://airpol.com.pl/wp-content/uploads/2026/08/EN-Katalog-Airpol-mEnergy-18-55kW.pdf"]
---

Préparer une supervision d’un mEnergy nécessite de connaître les données disponibles, mais aussi le contrôleur effectivement installé. Airpol décrit un serveur web local et plusieurs vues de fonctionnement. **Une interface consultable dans un navigateur ne prouve pas l’existence d’une API de collecte.**

## Ce qui est documenté pour OPTI et NAVI

La [brochure Airpol, page 11](https://airpol.com.pl/wp-content/uploads/2026/08/EN-Katalog-Airpol-mEnergy-18-55kW.pdf#page=11) présente OPTI et NAVI, leur suivi des paramètres et un serveur embarqué sur le contrôleur, sans dépendance au cloud. Elle annonce un fonctionnement en réseau jusqu’à **quatre compresseurs** en cascade ou en séquence.

La [page 14](https://airpol.com.pl/wp-content/uploads/2026/08/EN-Katalog-Airpol-mEnergy-18-55kW.pdf#page=14) précise que l’application est hébergée directement sur **OPTI Airpol Power Control** et consultable depuis les appareils du réseau local, avec accès simultané de plusieurs utilisateurs. Cette précision doit être conservée lorsqu’on prépare le contrôle d’une variante NAVI : elle ne documente pas à elle seule l’identité de toutes ses interfaces ou de toutes les révisions.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 349" role="img" aria-labelledby="airpol-opti-navi-supervision-locale-compresseur-title airpol-opti-navi-supervision-locale-compresseur-desc" style="display:block;width:100%;height:auto;font-family:system-ui,sans-serif"><title id="airpol-opti-navi-supervision-locale-compresseur-title">Airpol : la supervision décrite reste locale</title><desc id="airpol-opti-navi-supervision-locale-compresseur-desc">Sur OPTI, le serveur est hébergé sur le contrôleur et consulté depuis le réseau local. La brochure expose capteurs, événements et compteurs, sans définir une API.</desc><rect width="520" height="349" rx="22" fill="#10281e"/><text x="25" y="43" fill="#d3eb56" font-size="22" font-weight="700">Contrôleur → réseau local → navigateur</text><rect x="54" y="111" width="149" height="90" rx="15" fill="#26775b"/><rect x="318" y="111" width="149" height="90" rx="15" fill="#26775b"/><path d="M203 155H318" stroke="#8abfa3" stroke-width="6"/><text x="70" y="152" fill="#eef2e9" font-size="21">OPTI</text><text x="332" y="152" fill="#eef2e9" font-size="21">Navigateur</text><text x="81" y="183" fill="#eef2e9" font-size="17">Contrôleur</text><text x="339" y="183" fill="#eef2e9" font-size="17">Poste local</text><text x="35" y="266" fill="#eef2e9" font-size="23">Capteurs · historique · service</text><text x="35" y="310" fill="#eef2e9" font-size="22">Aucune API déduite de cet écran</text></svg>
<figcaption>Sur OPTI, le serveur est hébergé sur le contrôleur et consulté depuis le réseau local. La brochure expose capteurs, événements et compteurs, sans définir une API.</figcaption>
</figure>

## Trois familles de données pour trois questions

La page 14 annonce les valeurs des capteurs connectés, des statistiques et graphiques, l’historique des messages et événements, les compteurs de service, ainsi que les événements configurés ponctuels ou récurrents.

| Question de suivi | Fonction documentaire pertinente |
| --- | --- |
| Le défaut correspond-il à un changement de fonctionnement ? | Historique des messages et événements |
| Le prochain entretien est-il proche ? | Compteurs de service |
| Quelle grandeur varie durant un cycle ? | Valeurs des capteurs connectés et graphiques |
| Un démarrage suit-il une programmation ? | Événements ponctuels ou récurrents configurés |

Ce classement est une proposition de lecture de CompatAir. Il ne présume ni liste universelle de capteurs, ni cadence d’enregistrement. Le [guide des indicateurs de maintenance](/guides/indicateurs-maintenance-air-comprime/) aide à choisir les grandeurs utiles au problème recherché.

## Ce que la brochure ne fournit pas pour une intégration

Les pages citées ne spécifient pas une API, un format d’export, une durée de conservation, une fréquence de journalisation ou les modalités exactes d’authentification et de chiffrement. Les mentions commerciales de sécurité ne permettent pas de compléter ces paramètres par supposition.

Pour préparer un raccordement, demander la documentation du contrôleur, sa révision et les fonctions de lecture réellement disponibles. Conserver la frontière locale décrite par Airpol sans en déduire une ouverture à Internet ou un protocole externe. Aucun changement réseau n’est proposé ici.

Le [protocole de mesure d’un réseau](/guides/audit-reseau-air-comprime-protocole-mesures/) distingue mesure et enregistrement ; le [séquencement de plusieurs machines](/guides/sequencer-plusieurs-compresseurs/) décrit les transitions à observer. Une capture d’écran peut identifier un état, mais ne remplace pas une série horodatée avec une cadence connue pour analyser ces transitions.

## Sources et méthode

Documents fabricant consultés le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne, sans essai physique ni validation professionnelle externe. Les calculs hypothétiques et les interprétations de CompatAir sont signalés dans le texte.

- [Airpol mEnergy, brochure constructeur août 2026](https://airpol.com.pl/wp-content/uploads/2026/08/EN-Katalog-Airpol-mEnergy-18-55kW.pdf)
