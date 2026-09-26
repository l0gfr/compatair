---
title: "Installer un réseau d’air comprimé dans un atelier : pression, diamètre, condensats et raccords"
description: "Concevoir le trajet entre compresseur et outils sans masquer les pertes : architecture, diamètre intérieur, boucle, filtration, purge et points de contrôle."
pubDate: 2026-07-13
updatedDate: 2026-09-26
category: "Installer"
audiences: [professionnel]
metiers: [garage-automobile, atelier-poids-lourds, carrosserie-peinture, menuiserie-agencement, btp-chantier, maintenance-industrielle]
readingTime: 13
featured: true
sources:
  - https://www.atlascopco.com/content/dam/atlas-copco/local-countries/france/documents/compressor-technique/Compressed-Air-Manual-9th-edition_compressed.pdf
  - https://www.einhell.fr/p/4133330-tc-pe-150/
  - https://www.einhell.fr/p/4010393-tc-ac-240-50-10-of
---

Un [compresseur correctement dimensionné](/guides/guide-complet-dimensionner-compresseur-air/) peut mal alimenter un outil si le réseau situé entre les deux est restrictif. Le problème ne vient alors ni de la cuve ni de la pression maximale, mais des pertes produites par les conduites, les flexibles, les raccords, les vannes, les filtres et les changements de direction.

Le chapitre consacré à la distribution dans le [Compressed Air Manual d’Atlas Copco](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/france/documents/compressor-technique/Compressed-Air-Manual-9th-edition_compressed.pdf) fixe trois objectifs : limiter la chute de pression, réduire les fuites et séparer efficacement les condensats lorsqu’aucun sécheur n’est installé.

<svg viewBox="0 0 760 350" role="img" aria-labelledby="network-title network-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="network-title">Chaîne d’un réseau d’air comprimé d’atelier</title><desc id="network-desc">Le flux part du compresseur, passe par la cuve, le traitement d’air, la conduite principale, une descente, un flexible puis l’outil. Chaque composant peut ajouter une chute de pression.</desc>
  <rect width="760" height="350" rx="22" fill="#10281e"/><text x="38" y="45" fill="#d3eb56" font-size="15" font-weight="700">DU COMPRESSEUR AU POINT D’UTILISATION</text>
  <path d="M95 175H665" stroke="#6a8e7c" stroke-width="5" stroke-linecap="round"/><g fill="#eef2e9" stroke="#19704f" stroke-width="3">
    <circle cx="95" cy="175" r="42"/><circle cx="210" cy="175" r="42"/><circle cx="325" cy="175" r="42"/><circle cx="440" cy="175" r="42"/><circle cx="555" cy="175" r="42"/><circle cx="665" cy="175" r="42"/>
  </g><g fill="#143426" font-size="13" font-weight="700" text-anchor="middle">
    <text x="95" y="172">COMPRES-</text><text x="95" y="190">SEUR</text><text x="210" y="180">CUVE</text><text x="325" y="172">FILTRE /</text><text x="325" y="190">RÉGUL.</text><text x="440" y="172">CONDUITE</text><text x="440" y="190">FIXE</text><text x="555" y="180">FLEXIBLE</text><text x="665" y="180">OUTIL</text>
  </g><g fill="#9fb3a8" font-size="12" text-anchor="middle"><text x="95" y="245">production</text><text x="210" y="245">tampon + purge</text><text x="325" y="245">perte à suivre</text><text x="440" y="245">diamètre calculé</text><text x="555" y="245">raccords inclus</text><text x="665" y="245">bar requis</text></g>
  <text x="38" y="310" fill="#e39a5e" font-size="14">La pression utile se vérifie à droite, au point d’utilisation, pas seulement sur la cuve.</text>
</svg>

## Partir d’un plan et d’une liste d’outils

Atlas Copco recommande de commencer par une liste de tous les consommateurs et un schéma de leur emplacement. Cette étape permet d’identifier les longueurs, les branches, les postes éloignés et les outils susceptibles de fonctionner simultanément.

Dans un petit atelier, ce plan peut rester simple : compresseur, conduite principale, deux descentes et flexibles terminaux. Il doit néanmoins comporter les longueurs réelles et les composants. Un coude ou un raccord produit une résistance qui peut être traduite en longueur équivalente lors d’un calcul détaillé.

Le débit de calcul n’est pas le débit aspiré du compresseur. Le manuel emploie le FAD, c’est-à-dire le débit utile délivré. Le réseau doit être dimensionné pour le débit qui le traverse dans chaque portion.

## Fixer une chute de pression acceptable

Pour les réseaux fixes, Atlas Copco recommande dans son manuel une chute totale ne dépassant pas 0,1 bar entre le compresseur et le point de consommation le plus éloigné. Le document répartit cet ordre de grandeur entre colonnes montantes, conduites de distribution et conduites de service.

Cette valeur de 0,1 bar concerne la tuyauterie fixe décrite dans le manuel. Les flexibles, raccords rapides et autres accessoires doivent être ajoutés. Atlas Copco précise que les plus fortes pertes se rencontrent fréquemment dans ces connexions.

CompatAir ne transforme pas ces recommandations industrielles en garantie pour n’importe quel atelier. Elles donnent un objectif de conception et rappellent qu’un flexible terminal ne disparaît pas du bilan.

## Choisir le diamètre intérieur

Le calcul d’une conduite dépend du débit, de la pression absolue à l’entrée, de la longueur totale, du diamètre intérieur et de la chute autorisée. Les coudes, vannes et raccords ajoutent des longueurs équivalentes.

Le diamètre extérieur ou la désignation commerciale d’un flexible ne suffisent donc pas. Le guide consacré au [diamètre et à la longueur du flexible](/guides/diametre-longueur-flexible-air-comprime/) précise les données nécessaires au calcul. Pour la [ponceuse Einhell TC-PE 150](https://www.einhell.fr/p/4133330-tc-pe-150/), le fabricant recommande un flexible d’au moins 9 mm de diamètre intérieur pour obtenir les meilleures performances. Cette recommandation concerne ce modèle et ne devient pas automatiquement la règle de tous les outils.

Le manuel Atlas Copco indique que le coût initial d’une conduite et de raccords plus grands reste faible par rapport à une reconstruction ultérieure du réseau. La remarque porte sur les réseaux fixes : elle ne dispense pas de calculer le diamètre adapté au débit et à la longueur.

## Comprendre l’intérêt d’une boucle

Atlas Copco présente la boucle fermée autour de la zone de consommation comme la meilleure solution générale pour un réseau distribué. L’air peut atteindre un poste par deux directions, ce qui améliore l’uniformité lors de pointes intermittentes.

Une boucle n’est pas toujours nécessaire dans un petit garage avec un seul poste. Elle devient pertinente lorsque plusieurs zones sont desservies ou lorsque la longueur cumulée augmente. Un consommateur important et éloigné peut aussi justifier une conduite principale séparée.

<svg viewBox="0 0 760 330" role="img" aria-labelledby="loop-title loop-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="loop-title">Réseau en ligne et réseau en boucle</title><desc id="loop-desc">Une ligne alimente les postes dans une seule direction. Une boucle peut alimenter chaque poste par deux directions.</desc>
  <rect width="760" height="330" rx="22" fill="#eef2e9"/><text x="40" y="45" fill="#143426" font-size="22" font-weight="700">Deux architectures, deux comportements</text>
  <text x="40" y="91" fill="#56685e" font-size="14" font-weight="700">LIGNE SIMPLE</text><path d="M65 130H325" stroke="#b95d26" stroke-width="8" stroke-linecap="round"/><circle cx="65" cy="130" r="13" fill="#143426"/><circle cx="180" cy="130" r="9" fill="#b95d26"/><circle cx="325" cy="130" r="9" fill="#b95d26"/><text x="40" y="172" fill="#56685e" font-size="14">Un seul chemin vers le poste le plus éloigné</text>
  <text x="420" y="91" fill="#56685e" font-size="14" font-weight="700">BOUCLE FERMÉE</text><rect x="445" y="110" width="230" height="100" rx="45" fill="none" stroke="#19704f" stroke-width="8"/><circle cx="445" cy="160" r="13" fill="#143426"/><circle cx="560" cy="110" r="9" fill="#19704f"/><circle cx="675" cy="160" r="9" fill="#19704f"/><text x="420" y="250" fill="#56685e" font-size="14">Deux directions possibles vers les postes</text>
  <text x="40" y="298" fill="#143426" font-size="15" font-weight="700">Le choix dépend du nombre de postes, des distances et des débits, pas d’une préférence esthétique.</text>
</svg>

## Installer les descentes et gérer les condensats

L’air comprimé refroidit dans la cuve et les conduites, ce qui favorise la condensation de l’humidité qu’il contient. Atlas Copco précise que le réservoir participe au refroidissement et collecte des condensats. Il doit donc disposer d’un dispositif de purge.

Le réseau doit faciliter la séparation et l’évacuation de l’eau lorsqu’aucun sécheur n’est présent. Les points bas non purgés et les prises mal disposées peuvent transporter de l’eau vers les outils. La conception exacte dépend de l’architecture, de la température et du traitement d’air retenu.

La notice officielle de l’[Einhell TC-AC 240/50/10 OF](https://www.einhell.fr/p/4010393-tc-ac-240-50-10-of) demande de vidanger l’eau de condensation après chaque utilisation et de contrôler la cuve avant chaque service pour détecter rouille ou détérioration. Le dossier [purge, cuve et entretien](/guides/entretien-compresseur-purge-condensats/) reprend exactement le périmètre de cette notice. Cette fréquence appartient à ce modèle précis. Pour un autre compresseur, il faut suivre sa propre documentation.

## Placer régulation, filtration et séchage

Un filtre, un sécheur ou un détendeur répond à un besoin défini. Chaque composant ajoute aussi une chute de pression et exige un entretien. Atlas Copco indique que les filtres ont une faible perte initiale, mais qu’elle augmente lorsqu’ils se chargent.

Le niveau de traitement doit être lié à l’application. Une soufflette, une ponceuse, une opération de peinture et un procédé sensible à l’huile ne partagent pas nécessairement les mêmes exigences. Ajouter des équipements sans objectif mesuré peut augmenter pertes et maintenance sans résoudre le problème principal.

Le régulateur doit être lu au plus près de l’utilisation pertinente. Sur la notice Einhell citée, le régulateur règle la pression indiquée par le manomètre de sortie. Une pression correcte à vide ne prouve toutefois pas qu’elle restera identique lorsque l’outil consomme son débit nominal.

## Ne pas compenser les pertes par une pression excessive

Atlas Copco donne l’exemple d’un réseau dont la chute est compensée en augmentant la pression du compresseur. Le manuel juge cette solution moins économique et note que la pression au poste peut ensuite dépasser la valeur autorisée lorsque la consommation diminue.

Pour un atelier, la séquence logique est donc : mesurer la pression en charge, localiser la restriction, vérifier diamètre et raccords, contrôler l’état des filtres, puis corriger la cause. Augmenter le réglage sans diagnostic peut masquer temporairement la perte.

## Préparer une réception mesurable

Avant de considérer le réseau terminé, documentez :

- la pression dans la cuve et au poste ;
- la pression au poste lorsque l’outil fonctionne ;
- la longueur et le diamètre intérieur des conduites et flexibles ;
- le type et le nombre de raccords ;
- les points de purge ;
- les filtres et leur indicateur de colmatage lorsqu’il existe ;
- les débits simultanés prévus ;
- la date des contrôles et opérations d’entretien.

Ces mesures permettent de distinguer un compresseur insuffisant d’un réseau restrictif. Sans elles, remplacer la machine peut laisser le problème intact.

L’implantation se complète par deux dossiers : [ventilation du local compresseur](/guides/ventilation-local-compresseur-surchauffe/) pour le chemin de l’air chaud, et [traitement huile/eau des condensats](/guides/separateur-huile-eau-condensats-compresseur/) pour le devenir du liquide collecté.

Pour prolonger cette vérification, vous pouvez [vérifier pourquoi un tube PVC de plomberie ne valide pas un réseau d’air](/guides/tuyau-pvc-reseau-air-comprime-risques/).

Le [cas d’alimentation d’une CNC Haas VF-4](/guides/compresseur-machine-cnc-haas-pression-debit/) distingue le débit publié, la pression minimale et le besoin des accessoires.

Le [guide des vannes de démarrage progressif](/guides/vanne-demarrage-progressif-air-comprime-remise-pression/) prépare les vérifications de pression et de comportement lors de la remise en service.

## Sources

- [Atlas Copco, Compressed Air Manual, 9e édition, chapitre 3.6](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/france/documents/compressor-technique/Compressed-Air-Manual-9th-edition_compressed.pdf)
- [Einhell, TC-PE 150 et diamètre intérieur recommandé](https://www.einhell.fr/p/4133330-tc-pe-150/)
- [Einhell, TC-AC 240/50/10 OF, fiche et notice officielles](https://www.einhell.fr/p/4010393-tc-ac-240-50-10-of)
