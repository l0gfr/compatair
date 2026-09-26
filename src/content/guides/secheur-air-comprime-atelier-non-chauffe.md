---
title: "Sécheur frigorifique ou adsorption dans un atelier non chauffé ?"
seoTitle: "Quel sécheur d’air pour un atelier non chauffé ?"
description: "Un sécheur frigorifique suffit-il quand le réseau passe au froid ? Comparez point de rosée, température minimale, capacité réelle et consommation de purge."
pubDate: 2026-09-25
category: "Choisir"
audiences: [professionnel]
metiers: [maintenance-industrielle, carrosserie-peinture, btp-chantier]
readingTime: 6
relatedGuides: [point-rosee-secheur-filtre-air-comprime, qualite-air-comprime-iso-8573-1, entretien-compresseur-purge-condensats]
sources:
  - https://www.atlascopco.com/en-uk/compressors/wiki/compressed-air-articles/choosing-a-dryer
  - https://www.atlascopco.com/en-ca/compressors/air-dryers-compressed-air
  - https://www.cagi.org/resource-library
updatedDate: 2026-09-26
---

**Un sécheur se choisit en fonction du point le plus froid du réseau et de la qualité exigée par le procédé.** Le chauffage du local compresseur ne suffit pas si une conduite traverse ensuite une zone froide. Inversement, l’expression « atelier non chauffé » ne permet pas de prescrire automatiquement un modèle par adsorption : la température réelle et les conditions garanties restent à établir.

Cette page traite le choix pour un réseau exposé au froid. Pour distinguer d’abord eau liquide, vapeur et filtration, commencez par le guide [point de rosée, sécheur et filtre](/guides/point-rosee-secheur-filtre-air-comprime/).

## Le point de rosée doit être comparé à la bonne température

Le [CAGI définit le point de rosée sous pression](https://www.cagi.org/resource-library) comme une température de condensation à la pression considérée. La valeur doit donc être accompagnée de sa pression de référence. Une mesure à pression atmosphérique ne se compare pas directement à une mesure dans le réseau.

Le critère de choix est le suivant : dans les conditions étudiées, l’air ne doit pas atteindre sa température de condensation dans la partie de l’installation que l’on veut maintenir sèche. Cette exigence s’ajoute aux besoins du procédé. Une peinture, un instrument ou une machine peuvent imposer une qualité plus sévère que la seule prévention de condensation dans les tuyaux.

Préparez un plan simple : local de production, zone de stockage, traversée extérieure, atelier, poste. Affectez à chacun une température minimale documentée ou une case « à mesurer ». La température du bureau, ou celle relevée au milieu d’un après-midi, ne représente pas forcément ces points.

## Ce que change la technologie du sécheur

[Atlas Copco décrit](https://www.atlascopco.com/en-uk/compressors/wiki/compressed-air-articles/choosing-a-dryer) un séchage frigorifique autour de **+3 °C de point de rosée sous pression** pour certaines configurations usuelles. Il présente l’adsorption pour atteindre des points de rosée négatifs, avec une régénération par air, chaleur ou combinaison de procédés. Ces ordres de grandeur ne sont pas une garantie applicable à chaque appareil.

| Option étudiée | Question décisive sur le devis |
| --- | --- |
| Frigorifique | Quel point de rosée est garanti à notre débit et à nos températures ? |
| Adsorption | Quel point de rosée, quelle régénération et quel débit de purge ? |
| Traitement local d’une branche froide | Le dispositif est-il prévu pour cet environnement et cette demande ? |
| Modification du parcours du réseau | La nouvelle température minimale est-elle réellement maîtrisée ? |

Le [dossier Atlas Copco sur les sécheurs](https://www.atlascopco.com/en-ca/compressors/air-dryers-compressed-air) rappelle que l’eau peut geler dans des lignes de commande exposées au froid. L’analyse doit porter sur toute la branche concernée, pas uniquement sur la sortie du sécheur.

<div class="article-infographic" tabindex="0" role="group" aria-label="Deux situations fictives de température de réseau">
<svg viewBox="0 0 760 295" role="img" aria-labelledby="froid-title froid-desc" xmlns="http://www.w3.org/2000/svg">
<title id="froid-title">La portion froide décide</title><desc id="froid-desc">Deux exemples fictifs supposent un point de rosée garanti de plus trois degrés Celsius. Un réseau à plus dix reste au-dessus ; une portion à moins cinq passe au-dessous. Ce schéma ne dimensionne pas une installation réelle.</desc>
<rect width="760" height="295" rx="20" fill="#eef2e9"/><text x="32" y="42" font-size="22" font-weight="700" fill="#143426">Exemples fictifs, à pression identique</text>
<rect x="32" y="78" width="333" height="137" rx="12" fill="#143426"/><rect x="395" y="78" width="333" height="137" rx="12" fill="#d3eb56"/>
<g font-size="17" text-anchor="middle"><text x="198" y="113" fill="white">Réseau le plus froid : +10 °C</text><text x="198" y="153" fill="white">Point de rosée : +3 °C</text><text x="198" y="188" fill="white">Au-dessus du point de rosée</text><text x="561" y="113" fill="#143426">Portion extérieure : −5 °C</text><text x="561" y="153" fill="#143426">Point de rosée : +3 °C</text><text x="561" y="188" fill="#143426">Risque de condensation</text></g>
<text x="32" y="253" font-size="14" fill="#35473d">Vérifier aussi le procédé, les conditions garanties et l’ambiance admise du sécheur.</text>
</svg>
</div>

## Deux cas de décision, sans inventer une marge universelle

**Hypothèse A :** le point de rosée garanti est +3 °C et aucune partie du réseau ne descend sous +10 °C à la pression considérée. L’écart est favorable à la prévention de condensation dans ce scénario. Il ne prouve ni la classe d’huile, ni la propreté particulaire, ni la qualité demandée par un pistolet.

**Hypothèse B :** le même air traverse une portion à −5 °C. Cette portion passe sous le point de rosée supposé. Le traitement précédent ne permet plus de conclure que la branche restera sèche. Il faut revoir le séchage, la température du parcours ou l’architecture, puis obtenir une garantie correspondant au scénario retenu.

Ces températures sont des **hypothèses pédagogiques**, pas des mesures d’un atelier. La marge de conception et les conditions de réception doivent être fixées avec le fournisseur en tenant compte des incertitudes de mesure et du procédé.

## Vérifier le débit utile après traitement

Le [guide du débit net après un sécheur à adsorption](/guides/secheur-adsorption-air-purge-debit-net/) donne les formules et un contre-exemple montrant pourquoi ajouter simplement un pourcentage peut sous-estimer le besoin entrant.

Le débit annoncé en tête de catalogue n’est pas forcément la capacité du sécheur dans votre installation. Demandez les conditions nominales et les corrections nécessaires pour la température d’entrée, la pression et la température ambiante. Une sélection sans ces données reste incomplète.

L’adsorption appelle une question supplémentaire : la régénération consomme-t-elle de l’air comprimé, combien et quand ? Le débit de purge communiqué par le fabricant doit apparaître dans le bilan de la centrale. N’appliquez pas un pourcentage générique à toutes les technologies. Consignez aussi la perte de pression du traitement et la puissance électrique lorsqu’elle est pertinente.

Le dossier [utiliser plusieurs outils pneumatiques](/guides/utiliser-plusieurs-outils-pneumatiques/) aide à définir la demande des postes. Le sécheur et ses auxiliaires complètent ce bilan ; ils ne disparaissent pas du calcul parce qu’ils ne sont pas des outils.

## La température admissible de la machine est une autre limite

Un sécheur capable de produire un point de rosée négatif n’est pas, pour cette seule raison, autorisé à fonctionner dehors ou dans un local à température négative. Le dossier d’achat doit donc comporter deux lignes différentes : **qualité de l’air délivré** et **ambiance de fonctionnement de l’équipement**.

Faites préciser le démarrage après un arrêt prolongé, le drainage des condensats, l’entretien et les éventuelles protections prévues par le constructeur. Le [guide de purge et d’entretien](/guides/entretien-compresseur-purge-condensats/) complète ces contrôles sans imposer une procédure unique à toutes les machines.

## Réceptionner une installation adaptée à l’hiver

La fiche de réception proposée par CompatAir rassemble : point de rosée requis et garanti, pression de mesure, température minimale retenue, débit traité, débit de purge éventuel, conditions d’entrée, ambiance admissible, points de prélèvement et critères d’alerte.

Une réception réalisée en ambiance douce doit préciser ce qui est mesuré et ce qui reste couvert seulement par la garantie de performance du fournisseur. La [qualité selon ISO 8573-1](/guides/qualite-air-comprime-iso-8573-1/) se décrit contaminant par contaminant ; l’absence d’eau visible ne suffit pas à attester toute la qualité de l’air.

Sources consultées le 25 septembre 2026. Les choix et scénarios présentés sont une méthode de préparation du besoin, sans prescription d’un sécheur particulier.

Avant de comparer deux hygromètres, consultez le [guide point de rosée atmosphérique ou sous pression](/guides/point-rosee-atmospherique-sous-pression-mesure/) et ses conditions de prélèvement.
