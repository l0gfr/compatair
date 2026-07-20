---
title: "Maintenance préventive d’un réseau d’air comprimé : preuves, mesures et priorités"
seoTitle: "Maintenance réseau d’air comprimé | CompatAir"
description: "Organiser une maintenance reproductible du compresseur au point d’usage, sans calendrier universel ni économie de fuite estimée sans mesure."
pubDate: 2026-07-15
updatedDate: 2026-07-20
category: "Utiliser"
audiences: [professionnel]
metiers: [maintenance-industrielle]
readingTime: 9
featured: true
series: audit-suivi-maintenance-air-comprime
relatedGuides:
  - audit-reseau-air-comprime-protocole-mesures
  - indicateurs-maintenance-air-comprime
  - fiche-intervention-air-comprime
  - detecter-mesurer-fuites-air-comprime
sources:
  - https://www.energy.gov/sites/prod/files/2014/05/f16/compressed_air_sourcebook.pdf
  - https://www.energy.gov/cmei/ito/compressed-air-systems
  - https://www.cagi.org/working-with-compressed-air
---

Une maintenance utile laisse des traces exploitables : le composant visé, la notice applicable, une mesure avant intervention, la date et le contrôle final. Les intervalles appartiennent à chaque machine ; le coût d’une fuite, lui, dépend de données d’exploitation mesurées.

<svg viewBox="0 0 760 330" role="img" aria-labelledby="maintenance-title maintenance-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="maintenance-title">Boucle de maintenance documentée</title><desc id="maintenance-desc">La boucle enregistre une référence, mesure un état initial, priorise une action, exécute la correction puis compare le nouvel état.</desc>
  <rect width="760" height="330" rx="20" fill="#eef2e9"/><text x="38" y="46" fill="#143426" font-size="22" font-weight="700">Une action n’est close qu’après comparaison</text>
  <g fill="#19704f"><circle cx="120" cy="155" r="65"/><circle cx="275" cy="155" r="65"/><circle cx="430" cy="155" r="65"/><circle cx="585" cy="155" r="65"/></g><g fill="white" font-size="15" font-weight="700" text-anchor="middle"><text x="120" y="150">Référencer</text><text x="120" y="174" font-size="12">notice + actif</text><text x="275" y="150">Mesurer</text><text x="275" y="174" font-size="12">état initial</text><text x="430" y="150">Corriger</text><text x="430" y="174" font-size="12">action datée</text><text x="585" y="150">Comparer</text><text x="585" y="174" font-size="12">état final</text></g><path d="M185 155h25m130 0h25m130 0h25" stroke="#e39a5e" stroke-width="4"/><path d="M585 230C585 285 120 285 120 230" fill="none" stroke="#56685e" stroke-width="3"/><text x="352" y="306" text-anchor="middle" fill="#56685e" font-size="14">Le prochain cycle repart de la nouvelle ligne de base.</text>
</svg>

## Le calendrier appartient à la machine

Le [Compressed Air Sourcebook du Department of Energy américain](https://www.energy.gov/sites/prod/files/2014/05/f16/compressed_air_sourcebook.pdf) rassemble les composantes courantes d’un programme de maintenance. Il renvoie néanmoins aux recommandations du fabricant et aux conditions d’exploitation pour les tâches applicables.

Un registre solide rattache donc chaque intervalle à la notice, à sa version et, lorsque l’information existe, au compteur de la machine. Une échéance dépourvue de cette filiation reste à documenter.

## Photographier le système avec des mesures

Avant une correction, conservez une [ligne de base](/glossaire/#ligne-base). Selon le problème, elle peut comprendre :

- la pression en charge à plusieurs points du réseau ;
- le temps de fonctionnement dans des conditions définies ;
- les fuites localisées et identifiées ;
- l’état des filtres, purges, flexibles et raccords ;
- la demande des postes actifs pendant la mesure ;
- la date, l’instrument et la personne ayant réalisé le relevé.

Ce relevé empêche de confondre la disparition d’un bruit avec une amélioration démontrée.

## Réparer dans un ordre défendable

Pour les fuites, le Sourcebook déroule une boucle concrète : identifier, documenter, prioriser, réparer, ajuster les contrôles si besoin, comparer avec la ligne de base, puis reprendre le cycle. Cette séquence fonctionne avant même de disposer d’un chiffrage financier.

Le guide [détecter et mesurer les fuites](/guides/detecter-mesurer-fuites-air-comprime/) distingue localisation, quantification et suivi. Le passage aux euros demande encore un débit ou une consommation mesurée, une durée d’exploitation et un prix de l’énergie daté. Tant que l’un manque, l’impact financier reste `insufficient_data`.

## Filtre, raccord ou conduite : localiser avant de remplacer

Le [CAGI](https://www.cagi.org/working-with-compressed-air) cite les filtres encrassés ou sous-dimensionnés parmi les causes possibles de restriction et aborde la chute de pression à l’échelle du système. Cela désigne une piste de contrôle, pas un coupable automatique.

Le [profil de pression](/guides/diagnostiquer-chute-pression-air-comprime/) situe l’écart entre deux points durant le même scénario de débit. Après entretien, le même protocole est répété au même endroit. La comparaison gagne alors un sens, avec les limites consignées.

## Quand le terrain contredit le document

Notice, fiche fabricant, distributeur et mesure terrain peuvent diverger. Une moyenne effacerait le désaccord. Chaque valeur garde donc son canal, sa date et son unité ; une contradiction est ouverte lorsqu’elles portent sur le même champ dans des conditions comparables.

Le [radar des contradictions](/radar-contradictions/) maintient cette séparation. Depuis le [graphe de preuve](/graphe-preuve/), on peut ensuite repérer les verdicts tributaires du champ contesté et simuler sa correction.

## Le tableau qui ferme réellement une intervention

Chaque ligne d’intervention devrait contenir : actif, composant, exigence de source, observation initiale, action, observation finale, écart, statut et prochaine échéance. Un statut « terminé » signifie que la vérification finale existe, pas seulement que la pièce a été remplacée.

Les snapshots mensuels de l’[observatoire documentaire](/observatoire-qualite-documentaire/) peuvent suivre la stabilité des références et le délai de correction, tandis que le registre de maintenance conserve le détail opérationnel local.

## Sources

- [US Department of Energy, Compressed Air System Sourcebook](https://www.energy.gov/sites/prod/files/2014/05/f16/compressed_air_sourcebook.pdf)
- [US Department of Energy, Compressed Air Systems](https://www.energy.gov/cmei/ito/compressed-air-systems)
- [Compressed Air and Gas Institute, Working with Compressed Air](https://www.cagi.org/working-with-compressed-air)
