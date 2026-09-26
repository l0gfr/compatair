---
title: "Faut-il couper l’air comprimé des machines la nuit et le week-end ?"
seoTitle: "Couper l’air comprimé la nuit : méthode pour l’atelier"
description: "Réduire la consommation hors production sans compromettre les fonctions machine : définir les zones, l’état de veille et les conditions de redémarrage."
pubDate: "2026-09-26"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "menuiserie-agencement"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["detecter-mesurer-fuites-air-comprime", "mesurer-temps-charge-vide-compresseur", "regler-vitesse-verin-pneumatique-echappement"]
sources: ["https://press.festo.com/en/technologies-and-products-1/festo-adds-two-new-solutions-to-its-compressed-air-energy-saving-platform?country_code=hk", "https://natural-resources.canada.ca/energy-efficiency/energy-star/energy-efficiency-reference-guide-compressed-air"]
---

**Couper les usages inutiles hors production peut réduire la demande d’air, mais la décision se prend machine par machine.** Une vanne fermée n’est pas, à elle seule, une preuve de dépressurisation ou de consignation. La bonne question est : quel état la machine doit-elle conserver pendant l’arrêt, puis retrouver au redémarrage ?

Ce dossier propose une méthode pour organiser cette décision avec l’exploitation et la maintenance. Il ne remplace pas l’analyse de sécurité de l’équipement.

## Commencer par mesurer ce qui reste actif

Le [guide de Ressources naturelles Canada](https://natural-resources.canada.ca/energy-efficiency/energy-star/energy-efficiency-reference-guide-compressed-air) recommande de réduire les usages inutiles, d’arrêter les équipements non nécessaires et de gérer ensemble la demande, le stockage et les commandes des compresseurs. Il ne fournit pas un pourcentage d’économie applicable à tout atelier.

Nous proposons de relever, sur une période sans production, les machines alimentées, les usages conservés volontairement, le débit observé et les états du compresseur. Le [protocole de recherche de fuites](/guides/detecter-mesurer-fuites-air-comprime/) aide à distinguer un défaut d’étanchéité d’une consommation connue. Ne baptisez pas toute la consommation nocturne « fuite » avant cet inventaire.

## La fermeture automatique peut conserver une pression

La [présentation Festo du MSE6-C2M](https://press.festo.com/en/technologies-and-products-1/festo-adds-two-new-solutions-to-its-compressed-air-energy-saving-platform?country_code=hk) décrit une coupure après une durée d’inactivité définie, tout en maintenant un niveau de pression de veille configuré. Cet exemple montre qu’une fonction d’économie peut volontairement éviter la dépressurisation complète.

Il faut donc documenter le rôle du dispositif installé. Demandez au constructeur ce qui doit rester pressurisé, ce qui peut être isolé et ce qui nécessite un autre état sûr. Ne transposez pas les fonctions du C2M à une électrovanne ordinaire ou à un robinet manuel.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Trois états à ne pas confondre">
<svg viewBox="0 0 520 390" role="img" aria-labelledby="couper-air-comprime-machine-arret-week-end-title couper-air-comprime-machine-arret-week-end-desc" xmlns="http://www.w3.org/2000/svg">
<title id="couper-air-comprime-machine-arret-week-end-title">Trois états à ne pas confondre</title><desc id="couper-air-comprime-machine-arret-week-end-desc">La production, la veille sous pression et la consignation pour intervention répondent à des objectifs différents.</desc>
<rect width="520" height="390" rx="20" fill="#10281e"/>
<rect x="24" y="24" width="472" height="94" rx="12" fill="#203f31"/><text x="44" y="59" fill="#d3eb56" font-size="24" font-weight="700">Production</text><text x="44" y="93" fill="white" font-size="21">Air requis par les cycles</text>
<path d="M260 121v13m-6-5 6 6 6-6" fill="none" stroke="#8abfa3" stroke-width="2"/>
<rect x="24" y="140" width="472" height="94" rx="12" fill="#203f31"/><text x="44" y="175" fill="#d3eb56" font-size="24" font-weight="700">Veille définie par le concepteur</text><text x="44" y="209" fill="white" font-size="21">Pression et fonctions nécessaires</text>
<path d="M260 237v13m-6-5 6 6 6-6" fill="none" stroke="#8abfa3" stroke-width="2"/>
<rect x="24" y="256" width="472" height="94" rx="12" fill="#203f31"/><text x="44" y="291" fill="#d3eb56" font-size="24" font-weight="700">Intervention</text><text x="44" y="325" fill="white" font-size="21">Procédure de consignation dédiée</text>
</svg>
</div>

*Trois états à ne pas confondre : schéma de lecture CompatAir, expliqué dans le texte.*

## Préparer une matrice des zones

Pour chaque machine ou départ réseau, nous suggérons de remplir quatre colonnes : fonction pendant l’arrêt, état d’air autorisé, responsable de la décision et procédure de reprise. Ajoutez les exceptions comme les équipements qui poursuivent un cycle après le départ des opérateurs.

Une zone partagée demande une attention particulière : isoler un atelier peut également interrompre un autre usage. Faites confirmer les limites du réseau sur le plan avant tout essai. Cette préparation évite de rechercher l’économie sur la mauvaise frontière.

## Organiser un essai avant de généraliser

Choisissez une zone dont la mise en veille a été validée. Comparez deux périodes représentatives avec les mêmes usages nécessaires et des durées connues. Consignez le volume d’air, l’énergie électrique si elle est mesurée, et le temps de redémarrage. Si la production ou la température ont changé, mentionnez-le au lieu d’attribuer tout l’écart à la fermeture.

Le [suivi des temps en charge et à vide](/guides/mesurer-temps-charge-vide-compresseur/) est utile pour comprendre la réponse de la centrale. Une baisse de débit sur un départ n’est pas encore une économie électrique chiffrée. Le [guide du coût de l’air](/guides/cout-metre-cube-air-comprime/) permet de poser les mesures nécessaires.

## Vérifier le premier cycle du lundi

Demandez au concepteur de préciser les conditions de remise en pression, les contrôles préalables et les états des actionneurs. Le [guide du redémarrage des vérins](/guides/regler-vitesse-verin-pneumatique-echappement/) explique pourquoi ce premier mouvement doit être distingué du cycle établi.

La réception proposée comporte un volet exploitation : disponibilité de la machine, alarmes, délai de reprise et qualité des premières pièces. Elle comporte aussi la validation technique et de sécurité de l’état de veille. Ne réduisez pas le succès à « le compresseur ne tourne plus la nuit » si un usage nécessaire a simplement été privé d’air.

## Transformer l’essai en règle d’atelier

Une fois la solution validée, identifiez les organes de commande, les horaires ou conditions de veille et la personne qui peut modifier les exceptions. Conservez un relevé de référence après mise en place. Si la consommation nocturne remonte, il devient possible de vérifier l’état des zones et les changements de production avant de modifier les réglages du compresseur.

## Sources et méthode

Sources consultées le **26 septembre 2026**. Rédaction avec assistance d’IA et relecture éditoriale interne, sans essai physique ni validation professionnelle externe. Les exemples chiffrés explicitement hypothétiques ne sont pas des mesures de terrain.

- [Festo, modules de gestion d’énergie MSE6-C2M et MSE6-D2M](https://press.festo.com/en/technologies-and-products-1/festo-adds-two-new-solutions-to-its-compressed-air-energy-saving-platform?country_code=hk)
- [Ressources naturelles Canada, Energy Efficiency Reference Guide: Compressed Air](https://natural-resources.canada.ca/energy-efficiency/energy-star/energy-efficiency-reference-guide-compressed-air)
