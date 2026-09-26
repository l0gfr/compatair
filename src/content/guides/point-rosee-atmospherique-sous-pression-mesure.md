---
title: "Point de rosée atmosphérique ou sous pression : comparer deux mesures sans erreur"
seoTitle: "Point de rosée : atmosphérique ou sous pression ?"
description: "Deux hygromètres donnent des points de rosée différents ? Vérifiez la pression de mesure, le prélèvement et la stabilisation avant de déclarer le sécheur défaillant."
pubDate: "2026-09-26"
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "carrosserie-peinture", "menuiserie-agencement"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["point-rosee-secheur-filtre-air-comprime", "secheur-air-comprime-atelier-non-chauffe", "qualite-air-comprime-iso-8573-1"]
sources: ["https://www.vaisala.com/en/blog/2019-09/what-dew-point-and-how-measure-it", "https://www.vaisala.com/sites/default/files/documents/CompAir-Sampling-Cell-AppNote-B211229EN.pdf"]
---

**Un point de rosée sans pression de référence est incomplet pour comparer deux mesures d’air comprimé.** Une sonde dans le réseau et une sonde après détente peuvent donner des températures différentes sans que l’une soit nécessairement défectueuse. Il faut d’abord vérifier ce que chaque instrument mesure ou calcule.

Cette distinction devient décisive lorsqu’un rapport de contrôle semble contredire l’affichage du sécheur. Avant de remplacer un équipement, reconstituez le point de prélèvement et les conditions de chaque valeur.

## Le même mot, deux conditions possibles

[Vaisala](https://www.vaisala.com/en/blog/2019-09/what-dew-point-and-how-measure-it) rappelle que le changement de pression modifie le point de rosée. Une mesure réalisée après expansion à la pression atmosphérique doit être corrigée si l’on veut l’exprimer comme point de rosée sous pression. La correction exige les conditions nécessaires ; elle ne consiste pas à ajouter une température constante.

L’humidité mesurée, la pression du gaz et l’unité affichée doivent donc figurer ensemble dans le relevé. Le signe négatif d’une température ne prouve pas à lui seul une meilleure qualité que celle d’une autre mesure effectuée sous une pression différente.

<figure class="article-infographic article-infographic--compact">
<svg viewBox="0 0 520 390" role="img" aria-labelledby="point-rosee-atmospherique-sous-pression-mesure-title point-rosee-atmospherique-sous-pression-mesure-desc" xmlns="http://www.w3.org/2000/svg">
<title id="point-rosee-atmospherique-sous-pression-mesure-title">La pression fait partie de la mesure</title><desc id="point-rosee-atmospherique-sous-pression-mesure-desc">Le même gaz peut donner des températures de rosée différentes selon sa pression.</desc>
<rect width="520" height="390" rx="20" fill="#10281e"/>
<rect x="24" y="24" width="472" height="156" rx="12" fill="#203f31"/><text x="44" y="60" fill="#d3eb56" font-size="24" font-weight="700">Mesure dans le réseau</text><text x="44" y="104" fill="white" font-size="22">Pression du procédé</text><text x="44" y="146" fill="#8abfa3" font-size="21">Résultat sous cette pression</text>
<rect x="24" y="204" width="472" height="156" rx="12" fill="#203f31"/><text x="44" y="240" fill="#d3eb56" font-size="24" font-weight="700">Mesure après détente</text><text x="44" y="284" fill="white" font-size="22">Pression de la cellule</text><text x="44" y="326" fill="#8abfa3" font-size="21">Résultat à cette autre pression</text>
</svg>
<figcaption>La pression fait partie de la mesure. Le même gaz peut donner des températures de rosée différentes selon sa pression.</figcaption>
</figure>

## La question à poser devant deux résultats discordants

Demandez où se trouvait la sonde par rapport à la détente et quelle pression existait dans la cellule. L’écran peut afficher une mesure directe ou une grandeur convertie. Notre méthode consiste à recopier le nom du paramètre tel que l’instrument le présente, puis à vérifier sa définition dans la notice.

| Donnée à conserver | Exemple de description, sans valeur imposée |
| --- | --- |
| Point de prélèvement | Sortie du sécheur ou poste distant |
| Pression à la sonde | Valeur, unité et référence absolue ou relative |
| Paramètre affiché | Rosée mesurée ou calculée à une pression donnée |
| État de fonctionnement | Débit, charge et température du procédé |
| Instrument | Modèle et statut métrologique connu |

Une ligne de rapport limitée à « air sec : −20 °C » laisse trop d’inconnues. Elle ne doit pas être utilisée pour classer des installations sans retrouver ces conditions.

## Le prélèvement peut lui-même changer le résultat

La [note de prélèvement de Vaisala](https://www.vaisala.com/sites/default/files/documents/CompAir-Sampling-Cell-AppNote-B211229EN.pdf) décrit plusieurs causes d’écart : chute de pression, condensation dans la ligne, entrée d’humidité par fuite ou diffusion et réponse trop lente dans un échantillon stagnant. Elle recommande un montage représentatif du gaz à mesurer et des matériaux adaptés.

Notre proposition de compte rendu ajoute un croquis de la ligne de prélèvement : position des organes, longueur connue, matériaux, point de rejet et mesure de pression. Cette description rend le résultat interprétable lors d’un contrôle ultérieur. Un chiffre précis sans montage décrit peut être moins utile qu’un résultat accompagné de limites explicites.

## Peut-on convertir une valeur trouvée sur une fiche ?

Seulement si les conditions requises par la méthode de conversion sont connues. Pour une comparaison contractuelle, demandez au fournisseur la valeur dans les conditions du cahier des charges, avec sa méthode. Ne combinez pas une pression relative avec une formule exigeant une pression absolue ; notre [guide bar, psi et références de pression](/guides/bar-psi-pression-absolue-relative/) explique cette différence.

Ce dossier ne fournit volontairement aucune correspondance universelle entre « atmosphérique » et « sous pression ». La bonne conversion est celle qui conserve les conditions du gaz et la convention de résultat, pas celle qui produit le nombre le plus favorable.

## Décider si le sécheur doit être examiné

Une fois les conditions harmonisées, comparez la mesure à l’exigence du poste et au domaine du sécheur. Si l’écart reste présent, transmettez le relevé complet, les variations de charge et les conditions thermiques au mainteneur. Le [dimensionnement d’un sécheur en été](/guides/dimensionner-secheur-frigorifique-ete/) traite les effets de ces conditions de service.

Enfin, le point de rosée concerne l’eau. Il ne certifie pas à lui seul les particules ou l’huile. Pour une exigence globale, revenez à la [lecture des classes ISO 8573-1](/guides/qualite-air-comprime-iso-8573-1/) et au point de contrôle réellement demandé.

Le glossaire précise le terme [point de rosée atmosphérique](/glossaire/#point-rosee-atmospherique).

## Sources et méthode

Sources consultées le **26 septembre 2026**. Rédaction avec assistance d’IA et relecture interne, sans essai physique ni validation professionnelle externe. Les grilles de décision sont proposées par CompatAir ; les valeurs constructeur et les exemples hypothétiques sont distingués dans le texte.

- [Vaisala, définition et mesure du point de rosée](https://www.vaisala.com/en/blog/2019-09/what-dew-point-and-how-measure-it)
- [Vaisala, prélèvement pour la mesure du point de rosée](https://www.vaisala.com/sites/default/files/documents/CompAir-Sampling-Cell-AppNote-B211229EN.pdf)
