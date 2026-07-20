---
title: "Fiche d’intervention air comprimé : documenter l’avant, l’action et l’après"
seoTitle: "Fiche d’intervention air comprimé | Méthode"
description: "Construire une fiche d’intervention exploitable avec symptôme, mesures initiales, action réalisée, contre-mesure et statut de clôture vérifiable."
pubDate: 2026-07-20
category: "Utiliser"
audiences: [professionnel]
metiers: [maintenance-industrielle]
readingTime: 13
series: audit-suivi-maintenance-air-comprime
relatedGuides:
  - audit-reseau-air-comprime-protocole-mesures
  - indicateurs-maintenance-air-comprime
  - maintenance-preventive-reseau-air-comprime
  - diagnostiquer-chute-pression-air-comprime
sources:
  - https://www.energy.gov/sites/default/files/2016/03/f30/Improving%20Compressed%20Air%20Sourcebook%20version%203.pdf
  - https://www.iso.org/fr/standard/46580.html
  - https://www.inrs.fr/media.html?refINRS=ED+6109
---

Une fiche d’intervention ne sert pas seulement à prouver qu’un technicien est passé. Elle doit montrer ce qui a déclenché l’action, ce qui a été observé avant, ce qui a réellement été fait, puis ce que la même mesure indique après l’intervention.

Le [Sourcebook du Department of Energy américain](https://www.energy.gov/sites/default/files/2016/03/f30/Improving%20Compressed%20Air%20Sourcebook%20version%203.pdf) recommande une maintenance documentée et une comparaison régulière des performances. L’[ISO 11011:2013](https://www.iso.org/fr/standard/46580.html) inclut l’analyse, le rapport et la documentation des résultats dans l’évaluation d’un système complet. La fiche ci-dessous traduit ces principes en dossier opérationnel, sans imposer un logiciel ou un intervalle universel.

<div class="article-infographic" tabindex="0" role="group" aria-label="Infographie technique défilable horizontalement sur petit écran">
<svg viewBox="0 0 760 365" role="img" aria-labelledby="work-order-title work-order-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="work-order-title">Cycle d’une fiche d’intervention air comprimé</title><desc id="work-order-desc">La fiche relie le signal initial, le diagnostic, l’action et une contre-mesure avant la clôture.</desc>
  <rect width="760" height="365" rx="24" fill="#eef2e9"/><text x="38" y="48" fill="#143426" font-size="22" font-weight="700">Une réparation terminée n’est pas toujours un écart clos</text>
  <g font-family="Manrope, sans-serif"><rect x="38" y="87" width="151" height="112" rx="15" fill="#19704f"/><text x="58" y="120" fill="white" font-size="17" font-weight="700">01 · Signal</text><text x="58" y="151" fill="#d8e6de" font-size="12">mesure, alarme</text><text x="58" y="173" fill="#d8e6de" font-size="12">ou observation</text>
  <rect x="216" y="87" width="151" height="112" rx="15" fill="#28533f"/><text x="236" y="120" fill="white" font-size="17" font-weight="700">02 · Diagnostic</text><text x="236" y="151" fill="#d8e6de" font-size="12">faits séparés</text><text x="236" y="173" fill="#d8e6de" font-size="12">des hypothèses</text>
  <rect x="394" y="87" width="151" height="112" rx="15" fill="#28533f"/><text x="414" y="120" fill="white" font-size="17" font-weight="700">03 · Action</text><text x="414" y="151" fill="#d8e6de" font-size="12">geste et pièce</text><text x="414" y="173" fill="#d8e6de" font-size="12">réellement appliqués</text>
  <rect x="572" y="87" width="150" height="112" rx="15" fill="#d3eb56"/><text x="592" y="120" fill="#10281e" font-size="17" font-weight="700">04 · Contrôle</text><text x="592" y="151" fill="#28533f" font-size="12">même scénario</text><text x="592" y="173" fill="#28533f" font-size="12">résultat comparé</text></g>
  <path d="M189 143h27m151 0h27m151 0h27" stroke="#e39a5e" stroke-width="3"/><rect x="130" y="245" width="500" height="73" rx="16" fill="#143426"/><text x="380" y="275" text-anchor="middle" fill="white" font-size="17" font-weight="700">Clôturé, à surveiller ou encore ouvert</text><text x="380" y="299" text-anchor="middle" fill="#c8d7cf" font-size="12">Le statut dépend de la contre-mesure, pas de la seule action.</text>
</svg>
</div>

## Réponse directe : les quatre preuves à conserver

Une fiche exploitable contient au minimum :

1. un signal initial daté et rattaché à un actif ;
2. des observations séparées des causes supposées ;
3. l’action réellement exécutée, avec les écarts par rapport au plan ;
4. une contre-mesure comparable et un statut de clôture explicite.

Sans mesure initiale, l’intervention peut être nécessaire mais son effet ne sera pas quantifiable. Sans mesure finale, la pièce est remplacée mais le problème reste techniquement ouvert.

## Identifier l’actif et la configuration

Un nom comme « compresseur atelier » devient ambigu dès qu’une machine est déplacée ou remplacée. La fiche doit rattacher l’action à une identité stable : fabricant, modèle, MPN ou numéro interne, emplacement et numéro de série lorsque sa conservation est autorisée par le site.

Ajoutez les composants qui définissent le scénario : sécheur, filtre, cuve, vanne, branche, régulateur, raccord, flexible et outil. Une modification de l’un d’eux entre l’avant et l’après peut rendre la comparaison invalide.

Pour une configuration préparée dans CompatAir, le [Passeport](/passeport/) conserve la chaîne d’air et le verdict documentaire. Il reste local au navigateur. Le dossier d’intervention doit encore enregistrer les observations de terrain.

## Décrire le signal sans conclure trop tôt

Le motif d’ouverture peut être une alarme, une pression insuffisante, une hausse du temps à vide, une fuite localisée, un défaut de qualité d’air ou une échéance issue de la notice. Écrivez le signal tel qu’il est observé.

Exemple : « pression au poste P4 inférieure à la ligne de base pendant le scénario S2 » est une observation. « filtre colmaté » est une cause possible tant qu’un différentiel, une inspection ou un autre contrôle ne l’a pas confirmé.

Le [diagnostic d’une chute de pression](/guides/diagnostiquer-chute-pression-air-comprime/) montre comment localiser l’écart par tronçon. Le [diagnostic d’intervention CompatAir](/diagnostic-intervention/) ordonne les contrôles sans transformer une piste en certitude.

## Conserver l’état initial

Pour chaque mesure avant intervention, notez :

- variable et unité ;
- point de mesure ;
- date et heure ;
- instrument, plage et précision disponibles ;
- scénario de demande ;
- réglages de commande et de pression ;
- consommateurs, purges et compresseurs actifs ;
- valeur brute et éventuel calcul dérivé.

Une photographie d’un cadran peut compléter la fiche, mais elle ne remplace pas le contexte. Deux photos prises avec des charges différentes ne démontrent pas l’effet d’une réparation.

## Distinguer le diagnostic de l’action

La partie diagnostic réunit les contrôles réalisés et leur résultat. Elle doit pouvoir contenir une conclusion négative : « aucune restriction établie autour du filtre » est une information utile. Elle évite de remplacer un composant identique lors de la prochaine occurrence.

La partie action décrit ensuite ce qui a réellement été fait : réglage, nettoyage, réparation, remplacement, isolement, mise à jour documentaire ou aucune action. Pour une pièce, conservez sa référence et la notice appliquée lorsque ces informations sont disponibles.

Toute opération sur un équipement électrique, sous pression ou susceptible de redémarrer relève des personnes compétentes et des procédures de consignation du site. Le guide [INRS ED 6109](https://www.inrs.fr/media.html?refINRS=ED+6109) cadre la maîtrise des énergies avant intervention et la vérification de l’état sûr. CompatAir décrit le dossier de preuve, pas une procédure de mise en sécurité applicable à toutes les installations.

La fiche doit toutefois attester que la procédure applicable a été identifiée et exécutée par les personnes compétentes. L’arrêt d’une machine ou une pression nulle observée en un seul point ne prouve pas à lui seul la dissipation des énergies résiduelles ni l’impossibilité d’un redémarrage.

## Enregistrer les écarts au plan

Le terrain impose parfois une autre action que celle prévue. Ne réécrivez pas le plan initial pour le faire correspondre au résultat. Conservez :

- l’action prévue ;
- l’action exécutée ;
- le motif de l’écart ;
- les pièces ou réglages réellement utilisés ;
- les contrôles impossibles et leur cause.

Cette séparation est précieuse lors d’une récidive. Elle permet de savoir si la solution testée a échoué ou si elle n’a jamais été appliquée.

## Réaliser la contre-mesure

La mesure finale reprend autant que possible le même point, le même instrument et le même scénario. Elle ajoute son propre horodatage et tout changement de contexte. Si les conditions diffèrent, le statut peut être « à recontrôler » plutôt que « clos ».

| Statut | Signification |
| --- | --- |
| Clos | La contre-mesure confirme le retour dans l’état attendu pour le scénario décrit |
| À surveiller | L’écart est réduit, mais la stabilité ou un autre scénario reste à vérifier |
| Ouvert | L’écart demeure ou la cause n’est pas établie |
| Données insuffisantes | La comparaison n’est pas possible avec les éléments conservés |

Le statut n’est pas une note de performance générale. Il vaut pour l’écart, l’actif et le scénario de la fiche.

## Préparer la prochaine occurrence

Une intervention clôturée alimente la maintenance préventive lorsqu’elle laisse des données réutilisables : type d’écart, composant, date, compteur, action, résultat et délai avant récidive. Une seule occurrence ne suffit pas à déclarer une périodicité.

Le [plan de maintenance préventive](/maintenance-preventive/) regroupe localement les échéances déclarées et les tendances. Le guide [maintenance préventive du réseau](/guides/maintenance-preventive-reseau-air-comprime/) explique pourquoi l’intervalle doit rester relié à la notice ou à une règle explicitement adoptée par le site.

## Modèle de fiche à reprendre

La structure suivante peut être transposée dans une GMAO, un tableur ou un formulaire papier :

- identifiant du dossier et statut ;
- actif, emplacement et configuration ;
- signal, date d’ouverture et criticité déclarée ;
- ligne de base ou exigence applicable ;
- mesures initiales et conditions ;
- faits établis, hypothèses et contrôles ;
- action prévue puis action réalisée ;
- pièces, réglages, notice et intervenant ;
- contre-mesures et conditions ;
- conclusion, limites et prochaine échéance ;
- liens vers documents, photographies et dossiers connexes.

## Sources

- [U.S. Department of Energy, Improving Compressed Air System Performance, version 3](https://www.energy.gov/sites/default/files/2016/03/f30/Improving%20Compressed%20Air%20Sourcebook%20version%203.pdf)
- [ISO 11011:2013, Air comprimé, efficacité énergétique, évaluation](https://www.iso.org/fr/standard/46580.html)
- [INRS, ED 6109, Consignations et déconsignations](https://www.inrs.fr/media.html?refINRS=ED+6109)
