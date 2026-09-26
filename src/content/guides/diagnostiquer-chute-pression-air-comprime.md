---
title: "Chute de pression d’air comprimé : construire un profil et trouver la restriction"
description: "Mesurer la pression du compresseur jusqu’à l’outil pour localiser les pertes dans les filtres, conduites, raccords et flexibles sans augmenter le réglage au hasard."
pubDate: 2026-07-13
updatedDate: 2026-09-26
category: "Installer"
audiences: [professionnel]
metiers: [garage-automobile, carrosserie-peinture, menuiserie-agencement, maintenance-industrielle]
readingTime: 12
featured: false
series: audit-suivi-maintenance-air-comprime
sources:
  - https://www1.eere.energy.gov/manufacturing/tech_assistance/pdfs/compressed_air_sourcebook.pdf
  - https://www.atlascopco.com/content/dam/atlas-copco/local-countries/france/documents/compressor-technique/Compressed-Air-Manual-9th-edition_compressed.pdf
relatedGuides: [compresseur-ne-monte-plus-en-pression, audit-reseau-air-comprime-protocole-mesures, indicateurs-maintenance-air-comprime, fiche-intervention-air-comprime]
---

Un manomètre à 8 bar sur la cuve ne prouve pas que l’outil reçoit 6,3 bar pendant qu’il consomme de l’air. Entre les deux se trouvent éventuellement un sécheur, des filtres, une conduite, des vannes, un régulateur, des raccords et un flexible. Chacun peut contribuer à la chute de pression.

Le [Department of Energy](https://www1.eere.energy.gov/manufacturing/tech_assistance/pdfs/compressed_air_sourcebook.pdf) recommande de construire un profil de pression avec des instruments appariés et étalonnés. Le manuel Atlas Copco traite également les pertes de distribution et insiste sur la pression au point de consommation.

<svg viewBox="0 0 760 350" role="img" aria-labelledby="pressure-title pressure-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="pressure-title">Profil de pression d’un réseau d’air comprimé</title><desc id="pressure-desc">Les mesures sont prises après le compresseur, le traitement, la distribution, le régulateur et le flexible.</desc>
  <rect width="760" height="350" rx="22" fill="#eef2e9"/><text x="38" y="48" fill="#143426" font-size="22" font-weight="700">Localiser la perte, composant par composant</text>
  <path d="M55 105L190 120L325 136L460 178L595 194L705 263" fill="none" stroke="#19704f" stroke-width="6" stroke-linecap="round"/>
  <g fill="#143426" font-family="Manrope, sans-serif" font-size="13"><circle cx="55" cy="105" r="10" fill="#d3eb56"/><text x="34" y="83">Cuve</text><circle cx="190" cy="120" r="10" fill="#d3eb56"/><text x="150" y="96">Traitement</text><circle cx="325" cy="136" r="10" fill="#d3eb56"/><text x="290" y="112">Conduite</text><circle cx="460" cy="178" r="10" fill="#e39a5e"/><text x="420" y="154">Régulateur</text><circle cx="595" cy="194" r="10" fill="#d3eb56"/><text x="564" y="170">Raccord</text><circle cx="705" cy="263" r="10" fill="#e39a5e"/><text x="675" y="294">Outil</text></g>
  <text x="38" y="322" fill="#56685e" font-size="14">La pente doit être mesurée sous débit. Une valeur statique ne reproduit pas la restriction en fonctionnement.</text>
</svg>

## Mesurer sous débit, pas seulement au repos

Lorsque l’air ne circule pas, les pressions tendent à s’équilibrer. Une restriction peut alors rester invisible. La mesure déterminante est prise pendant que l’outil ou le procédé demande son débit normal.

La pression de la cuve et celle du point d’utilisation doivent être observées au même moment. Si l’une est lue pendant la remontée en pression et l’autre plusieurs secondes plus tard, la différence mélange la perte du réseau et le fonctionnement du compresseur.

Pour un outil intermittent, plusieurs séquences peuvent être enregistrées. Pour un usage continu, il faut attendre une condition représentative, sans dépasser le cycle de service autorisé par les notices.

## Dessiner la chaîne réelle

Avant de relever une valeur, représentez les composants dans leur ordre :

1. admission et compresseur ;
2. sortie du groupe et cuve ;
3. refroidissement ou traitement ;
4. conduite principale ;
5. dérivation vers le poste ;
6. filtre ou régulateur local ;
7. raccord rapide ;
8. flexible ;
9. outil.

Le schéma doit correspondre à l’installation, pas à un réseau idéal. Une dérivation condamnée, une vanne partiellement fermée ou un ancien filtre comptent s’ils restent dans le passage de l’air.

Le [guide d’installation du réseau](/guides/installer-reseau-air-comprime-atelier/) détaille le rôle des diamètres, des longueurs, des boucles et des condensats.

## Utiliser des instruments comparables

Le Department of Energy cite des manomètres appariés et étalonnés ou des manomètres différentiels. Deux cadrans de précision inconnue peuvent afficher un écart qui appartient aux instruments plutôt qu’au réseau.

Chaque point doit être associé à :

- un emplacement identifié ;
- une date et une heure ;
- l’état des consommateurs ;
- le débit ou l’outil actif ;
- la pression observée ;
- la plage et la précision de l’instrument ;
- la configuration des vannes et régulateurs.

Un manomètre monté sur une cuve indique souvent une [pression relative](/glossaire/#pression-relative). Les conversions et calculs doivent préciser s’ils emploient une pression relative ou absolue.

## Lire la chute par tronçon

Le Department of Energy recommande notamment d’examiner les différentiels autour des refroidisseurs, sécheurs, filtres et différentes parties de la distribution. Une perte importante par rapport à la spécification du fabricant peut indiquer qu’un entretien est nécessaire.

La démarche consiste à calculer la différence entre deux points adjacents pris sous le même débit. Une grande différence autour d’un filtre oriente le diagnostic vers ce composant. Une baisse principalement située entre la conduite et l’outil oriente vers la dérivation, le régulateur, le raccord ou le flexible.

Cette localisation ne donne pas automatiquement la cause. Un filtre peut être chargé, sous-dimensionné ou utilisé au-delà de sa plage. Un régulateur peut être trop petit, mal réglé ou défectueux. Il faut ensuite consulter la documentation du composant.

## Ajouter le temps au profil

Un profil pris à un instant montre où se situe la pression à ce moment. Il ne révèle pas forcément une pointe intermittente ou un cycle de machine.

Le Department of Energy recommande l’enregistrement dans le temps des pressions et du débit pour identifier les charges intermittentes, les perturbations et les changements de fonctionnement. Son exemple suit pression et débit pendant trente minutes, mais cette durée appartient à l’illustration. La période utile dépend du cycle réel à observer.

Un journal temporel peut répondre à plusieurs questions :

- la pression chute-t-elle à chaque activation du même outil ?
- le débit augmente-t-il avant ou après la chute ?
- le compresseur atteint-il sa limite avant que le point d’utilisation baisse ?
- une purge ou une autre machine se déclenche-t-elle au même moment ?
- la pression récupère-t-elle immédiatement ou lentement ?

## Ne pas compenser en augmentant la pression

Augmenter la pression de décharge peut masquer temporairement une restriction tout en augmentant la consommation des usages non régulés et des fuites. Le Department of Energy décrit cette consommation supplémentaire comme une demande artificielle.

Le manuel Atlas Copco explique également qu’une pression générale plus élevée peut devenir économiquement défavorable. La réponse correcte consiste à traiter la perte localisée, puis à régler le système au niveau réellement nécessaire.

Une pression plus élevée ne crée pas non plus un [débit restitué](/glossaire/#debit-restitue) absent. Si le compresseur ne produit pas le débit requis, réduire la perte du réseau améliore la situation sans garantir que la capacité nominale devient suffisante.

## Distinguer quatre diagnostics

Le profil permet de séparer :

- un compresseur dont le débit disponible chute sous la demande ;
- un traitement d’air qui introduit un différentiel excessif ;
- une distribution restrictive ;
- un équipement terminal trop petit ou dégradé.

Il peut aussi révéler une demande excessive causée par des [fuites](/guides/detecter-mesurer-fuites-air-comprime/) ou des usages simultanés.

Le diagnostic devient défendable lorsque le schéma, les instruments, les conditions et les valeurs brutes sont conservés. Sans ces éléments, l’écart constaté ne peut pas être reproduit.

## Quand le problème semble venir du compresseur

Si la cuve elle-même paraît ne plus charger, le guide [compresseur qui ne monte plus en pression](/guides/compresseur-ne-monte-plus-en-pression/) sépare production, réglage de sortie et demande excessive. Identifiez le rôle du manomètre avant d’attribuer sa lecture au réservoir.

Pour prolonger cette vérification, vous pouvez [comprendre le réglage de vitesse à l’échappement d’un vérin](/guides/regler-vitesse-verin-pneumatique-echappement/).

## Sources

- [U.S. Department of Energy, Improving Compressed Air System Performance, Using Block Diagrams, Pressure Profiles, and Demand Profiles](https://www1.eere.energy.gov/manufacturing/tech_assistance/pdfs/compressed_air_sourcebook.pdf)
- [Atlas Copco, Compressed Air Manual, 9e édition, chapitre 3.6](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/france/documents/compressor-technique/Compressed-Air-Manual-9th-edition_compressed.pdf)
