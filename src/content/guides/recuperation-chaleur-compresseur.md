---
title: "Récupération de chaleur sur compresseur : mesurer le gisement et le besoin utile"
seoTitle: "Récupération de chaleur compresseur : méthode"
description: "Dossier pour séparer chaleur produite, fraction récupérable, besoin saisonnier et intégration avant de calculer une économie."
pubDate: 2026-07-15
updatedDate: 2026-09-26
category: "Installer"
audiences: [professionnel]
metiers: [maintenance-industrielle]
readingTime: 15
sources:
  - https://www1.eere.energy.gov/manufacturing/tech_assistance/pdfs/compressed_air_sourcebook.pdf
  - https://www.atlascopco.com/en-us/compressors/waste-heat-recovery/energy-recovery-air-compressors
---

Le compresseur transforme une grande partie de l’électricité en chaleur, mais une chaleur disponible n’est pas encore une chaleur utile. Le projet doit faire coïncider la machine en charge, le niveau de température, le besoin du site, les horaires et la solution d’échange.

## Deux sources, deux périmètres à conserver

Le guide du [U.S. Department of Energy](https://www1.eere.energy.gov/manufacturing/tech_assistance/pdfs/compressed_air_sourcebook.pdf) indique que **80 à 93 %** de l’énergie électrique utilisée par un compresseur industriel peut être convertie en chaleur. Il précise qu’une récupération correctement conçue peut remettre au travail **50 à 90 % de cette énergie thermique disponible**, notamment pour chauffer de l’air ou de l’eau.

La page actuelle d’[Atlas Copco sur la récupération d’énergie](https://www.atlascopco.com/en-us/compressors/waste-heat-recovery/energy-recovery-air-compressors) annonce jusqu’à **94 %** d’énergie récupérable et réutilisable grâce à la conception fermée de compresseurs modernes. Elle détaille des solutions par air chaud et par échangeur vers l’eau.

Ces pourcentages ne doivent pas être fusionnés en une valeur moyenne. Le premier vient d’un guide système DOE ; le second est une affirmation de fabricant sur les conceptions concernées. Le calcul du site doit utiliser les données de ses machines et de son récupérateur.

<div class="article-infographic" tabindex="0" role="group" aria-label="Infographie technique défilable horizontalement sur petit écran">
<svg viewBox="0 0 760 370" role="img" aria-labelledby="heat-recovery-title heat-recovery-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="heat-recovery-title">Chaîne de preuve d’une récupération de chaleur</title><desc id="heat-recovery-desc">L’électricité mesurée alimente le compresseur, une partie devient chaleur disponible, une fraction est captée et seule la chaleur coïncidant avec un besoin est utile.</desc>
  <rect width="760" height="370" rx="22" fill="#eef2e9"/><text x="38" y="46" fill="#143426" font-size="22" font-weight="700">Le gisement ne vaut que s’il rencontre un usage</text><rect x="38" y="92" width="152" height="102" rx="16" fill="#143426"/><text x="58" y="126" fill="#d3eb56" font-size="13" font-weight="700">ÉLECTRICITÉ</text><text x="58" y="159" fill="white" font-size="17" font-weight="700">kWh mesurés</text><path d="M190 143h45" stroke="#d27f43" stroke-width="4"/><rect x="235" y="92" width="152" height="102" rx="16" fill="#925e35"/><text x="255" y="126" fill="white" font-size="13" font-weight="700">CHALEUR</text><text x="255" y="159" fill="#f5e6d8" font-size="17" font-weight="700">disponible</text><path d="M387 143h45" stroke="#d27f43" stroke-width="4"/><rect x="432" y="92" width="152" height="102" rx="16" fill="#d9a66f"/><text x="452" y="126" fill="#143426" font-size="13" font-weight="700">CAPTAGE</text><text x="452" y="159" fill="#143426" font-size="17" font-weight="700">air ou eau</text><path d="M584 143h45" stroke="#d27f43" stroke-width="4"/><rect x="629" y="92" width="93" height="102" rx="16" fill="#d3eb56"/><text x="675" y="126" text-anchor="middle" fill="#143426" font-size="13" font-weight="700">USAGE</text><text x="675" y="159" text-anchor="middle" fill="#143426" font-size="16" font-weight="700">utile</text><path d="M114 242h570" stroke="#7c9588" stroke-width="2"/><circle cx="114" cy="242" r="6" fill="#19704f"/><circle cx="304" cy="242" r="6" fill="#19704f"/><circle cx="494" cy="242" r="6" fill="#19704f"/><circle cx="684" cy="242" r="6" fill="#19704f"/><text x="114" y="277" text-anchor="middle" fill="#56685e" font-size="12">charge machine</text><text x="304" y="277" text-anchor="middle" fill="#56685e" font-size="12">température</text><text x="494" y="277" text-anchor="middle" fill="#56685e" font-size="12">rendement réel</text><text x="684" y="277" text-anchor="middle" fill="#56685e" font-size="12">calendrier</text><text x="38" y="333" fill="#143426" font-size="14" font-weight="700">Économie = énergie substituée, pas chaleur théoriquement récupérable.</text>
</svg>
</div>

## Mesurer le profil du compresseur

Relevez la puissance et les heures en charge selon les saisons. Un compresseur arrêté ne fournit pas de chaleur ; un compresseur à vide peut produire de la chaleur tout en signalant une inefficacité que le projet ne doit pas pérenniser.

Le profil [charge et marche à vide](/guides/mesurer-temps-charge-vide-compresseur/) vient donc avant le calcul de récupération. La chaleur liée à une exploitation évitable ne doit pas être considérée comme une ressource garantie à long terme.

## Décrire le besoin thermique

Pour chaque usage candidat, consignez température d’entrée et de sortie, puissance, énergie, horaires et saison. Atlas Copco cite le chauffage d’ateliers, le séchage, le préchauffage d’air de combustion et la production d’eau chaude de service ou de procédé.

Ces exemples ne prouvent pas la compatibilité d’un site. Un besoin hivernal peut bien correspondre à une centrale en charge ; le même réseau de gaines doit prévoir le rejet estival. Un besoin d’eau exige un échangeur, des températures et des règles sanitaires ou de procédé adaptées.

## Calculer l’énergie substituée

La base de l’économie n’est pas le prix de l’électricité du compresseur multiplié par un pourcentage. Il faut calculer la chaleur réellement livrée pendant les heures où elle remplace une autre source, puis utiliser le rendement et le prix de cette source de référence.

Conservez séparément : électricité absorbée, chaleur théorique, chaleur mesurée après récupération, chaleur utile et énergie achetée évitée. Les tarifs, émissions et rendements doivent être ceux du site et de la période étudiée, sourcés au moment du calcul.

## Intégrer sans dégrader le refroidissement

Le DOE avertit que le réseau de gaines et les ventilateurs doivent éviter une contre-pression sur le refroidissement du compresseur. Atlas Copco indique que la conception et l’installation de l’intégration relèvent généralement du client ou d’un tiers spécialisé.

La réception doit donc contrôler à la fois la chaleur livrée et les conditions de fonctionnement de la machine : températures, alarmes, pression dans les gaines, bascule été/hiver et comportement en panne.

## Vérifier la performance dans le temps

Publiez une ligne de base avant travaux, puis des bilans mensuels : heures en charge, énergie électrique, chaleur récupérée, chaleur utile, taux d’utilisation et incidents. Une année partielle ne doit pas être extrapolée sans expliquer la saisonnalité.

Cette série alimente l’[observatoire de la qualité documentaire](/observatoire-qualite-documentaire/) : la preuve ne se limite pas au pourcentage de brochure, elle suit la disponibilité réelle de la donnée et les corrections apportées au modèle.

Le [guide de ventilation du local compresseur](/guides/ventilation-local-compresseur-surchauffe/) aide à préparer l’évacuation de chaleur, les pertes dans les conduits et la réception de l’installation, y compris lorsque le bâtiment ne demande pas de chauffage.

## Sources

- [U.S. Department of Energy, Improving Compressed Air System Performance](https://www1.eere.energy.gov/manufacturing/tech_assistance/pdfs/compressed_air_sourcebook.pdf)
- [Atlas Copco, Smart energy recovery with your compressor](https://www.atlascopco.com/en-us/compressors/waste-heat-recovery/energy-recovery-air-compressors)
