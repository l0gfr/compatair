---
title: "Panduit PPTEH : un collier lâche ne demande pas toujours plus de tension"
seoTitle: "Panduit PPTEH : collier lâche et position de l’outil"
description: "Un collier reste lâche malgré le réglage du PPTEH. Examiner la perpendicularité, les obstacles et le geste de traction avant de monter la tension."
pubDate: "2026-10-08"
category: "Utiliser"
audiences:
  - "professionnel"
metiers:
  - "maintenance-industrielle"
readingTime: 3
reviewStatus: "internal"
relatedGuides:
  - "atlas-lms08-hr10-air-temps-serrage"
  - "cle-a-chocs-couple-serrage-roues-dynamometrique"
  - "maintenance-preventive-reseau-air-comprime"
sources:
  - "https://www.panduit.com/content/dam/panduit/en/products/media/8/88/988/4988/101114988.pdf"
---

Le PPTEH coupe le collier, mais celui-ci reste trop lâche. La [fiche Panduit, tableau de dépannage page 4](https://www.panduit.com/content/dam/panduit/en/products/media/8/88/988/4988/101114988.pdf#page=4) ne cite pas uniquement un sélecteur trop bas : l’angle de l’outil, un obstacle contre le faisceau et une traction de l’opérateur pendant la tension figurent aussi parmi les causes.

Augmenter le réglage avant d’observer le geste peut masquer le problème et changer le résultat sur les faisceaux où la position est correcte. La décision utile est de vérifier d’abord que l’outil peut se placer comme prévu, puis de comparer la tension à celle prescrite pour le collier utilisé.

## Regarder le contact avec le faisceau

Panduit demande de tenir l’outil perpendiculaire au faisceau dans les deux directions. Un collier déjà installé, un support ou un autre objet peut empêcher son approche. La fiche demande aussi de laisser l’outil trouver sa position pendant la mise en tension plutôt que de le tirer.

Le relevé proposé par CompatAir conserve la référence du collier et du faisceau, le réglage initial et une vue du contact. Faites comparer les gestes dans une procédure de production autorisée. Une photo de l’outil seul ne montre pas l’obstacle qui peut apparaître sur le faisceau.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 332" role="img" aria-labelledby="panduit-ppteh-collier-lache-angle-tension-title panduit-ppteh-collier-lache-angle-tension-desc" style="display:block;width:100%;height:auto;font-family:'Manrope Variable',Arial,sans-serif"><title id="panduit-ppteh-collier-lache-angle-tension-title">Le contact fait partie du résultat</title><desc id="panduit-ppteh-collier-lache-angle-tension-desc">Causes de collier lâche nommées par Panduit. Schéma qualitatif, sans force de serrage inventée.</desc><rect width="520" height="332" rx="22" fill="#10281e"/><text x="26" y="42" font-size="22" fill="#d3eb56" font-weight="700">Le contact fait partie du résultat</text><rect x="26" y="74" width="224" height="230" rx="16" fill="#203f31"/><text x="41" y="109" font-size="21" fill="#d3eb56" font-weight="700">Position conforme</text><text x="41" y="151" font-size="21" fill="#eef2e9">Outil perpendiculaire</text><text x="41" y="193" font-size="21" fill="#eef2e9">Approche libre</text><text x="41" y="235" font-size="21" fill="#eef2e9">Traction évitée</text><rect x="270" y="74" width="224" height="230" rx="16" fill="#203f31"/><text x="285" y="109" font-size="21" fill="#d3eb56" font-weight="700">Position à reprendre</text><text x="285" y="151" font-size="21" fill="#eef2e9">Angle du PPTEH</text><text x="285" y="193" font-size="21" fill="#eef2e9">Support interposé</text><text x="285" y="235" font-size="21" fill="#eef2e9">Traction sur l’outil</text></svg>
<figcaption>Causes de collier lâche nommées par Panduit. Schéma qualitatif ; la force de serrage n’est pas représentée.</figcaption>
</figure>


## Séparer une boucle lâche d’une coupe absente

| Symptôme | Première direction de contrôle |
| --- | --- |
| Collier lâche avec coupe effectuée | Position, obstacle, traction et réglage approprié |
| Collier trop serré | Réglage retenu pour ce collier |
| Collier qui glisse dans la pince | État de la prise selon le tableau fabricant |
| Coupe non effectuée | Ligne de dépannage distincte, pas la seule tension |

Le tableau cite des causes différentes pour une absence de coupe. Classer précisément le résultat évite de modifier la tension pour corriger une autre fonction. Toute intervention ou changement d’accessoire se prépare avec l’outil séparé de son alimentation, conformément aux précautions page 2.

Le système automatique PAT 4.0 a ses propres diagnostics de [pression pendant pose](/guides/panduit-pat4-erreur3-pression-pendant-cycle/) et de [collier dans le flexible](/guides/panduit-pat4-erreur7-collier-flexible-transfert/). Ces procédures ne se transposent pas au PPTEH.

## Vérifier le résultat sur le montage prévu

Après correction du positionnement, évaluez le résultat avec le critère accepté pour le faisceau. Choisissez le réglage correspondant au collier selon la notice. La valeur d’un sélecteur n’est pas une mesure de la tension effective de chaque boucle.

Le [dossier Atlas sur temps et résultat de serrage](/guides/atlas-lms08-hr10-air-temps-serrage/) et celui du [contrôle de serrage des roues](/guides/cle-a-chocs-couple-serrage-roues-dynamometrique/) illustrent cette séparation entre commande et résultat sur d’autres outils. Ils ne fournissent aucun réglage pour les colliers Panduit.

Conservez le geste retenu avec la référence du consommable dans le [suivi de maintenance](/guides/maintenance-preventive-reseau-air-comprime/). Si le défaut persiste malgré la configuration correcte, le tableau fabricant oriente la recherche de l’état de l’outil ; il ne justifie pas une augmentation illimitée du réglage.

## Sources et méthode

Sources fabricant consultées le **8 octobre 2026**. Rédaction assistée par IA, revue documentaire interne, sans essai physique ni validation professionnelle externe. Les démarches de diagnostic proposées par CompatAir sont séparées des caractéristiques et instructions citées.
