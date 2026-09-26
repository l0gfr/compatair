---
title: "Sécheur par adsorption : calculer l’air de purge et le débit net disponible"
seoTitle: "Sécheur par adsorption : air de purge et débit net"
description: "Un sécheur de 1 000 L/min délivre-t-il 1 000 L/min utiles ? Clarifier la base du débit, calculer la purge et comparer les régénérations sans économie inventée."
pubDate: 2026-09-26
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "carrosserie-peinture"]
readingTime: 6
reviewStatus: internal
relatedGuides:
  - point-rosee-secheur-filtre-air-comprime
  - dimensionner-secheur-frigorifique-ete
  - secheur-air-comprime-atelier-non-chauffe
sources:
  - https://us.kaeser.com/download.ashx?id=tcm%3A46-37748
  - https://us.kaeser.com/compressed-air-resources/compressed-air-tips/compressed-air-treatment-guide/dryer-selection-guide.aspx
---

Un sécheur par adsorption peut prélever une partie de l’air produit pour régénérer son dessiccant avec de l’[air de purge](/glossaire/#air-purge-regeneration). Si le débit annoncé décrit l’entrée, il n’est pas automatiquement égal au débit disponible pour l’atelier. Avant de sélectionner le compresseur, demandez si la capacité de séchage, la consommation de purge et le débit net de sortie sont exprimés sur la même base.

La question ne se résout pas par « ajouter 15 % » à tous les besoins. Le pourcentage, son dénominateur et les conditions de fonctionnement doivent être connus.

## Ce que les exemples KAESER permettent d’affirmer

Dans sa [brochure de traitement d’air, page 8](https://us.kaeser.com/download.ashx?id=tcm%3A46-37748), KAESER indique jusqu’à **15 % du débit** utilisé pour la régénération des gammes sans apport de chaleur DC-HF et KAD aux conditions nominales. La même page décrit une purge chauffée pour les KED et une régénération par air ambiant chauffé avec peu ou pas d’air comprimé pour les KBD.

Ces indications décrivent des familles. Elles ne sont ni un taux garanti pour tous les sécheurs à adsorption, ni une comparaison de coût total pour votre installation. Le [guide KAESER](https://us.kaeser.com/compressed-air-resources/compressed-air-tips/compressed-air-treatment-guide/dryer-selection-guide.aspx) relie le choix de technologie à la régénération du dessiccant et aux conditions de service.

## Le calcul correct quand la purge est une fraction de l’entrée

**Hypothèse pédagogique :** la purge moyenne vaut exactement 15 % du débit d’entrée, et les deux débits utilisent les mêmes conditions de référence. On ignore ici les autres prélèvements.

`Débit net = débit entrant × (1 − 0,15)`

Avec 1 000 L/min entrants, on obtient **850 L/min nets**, 150 L/min servant à la purge. Pour disposer au contraire de 1 000 L/min nets :

`Débit entrant = 1 000 / 0,85 ≈ 1 176 L/min`

Ajouter simplement 15 % donnerait 1 150 L/min en entrée et `1 150 × 0,85 = 977,5 L/min` en sortie. L’écart de 22,5 L/min montre pourquoi le dénominateur compte. Il ne s’agit pas de la sélection d’un modèle KAESER : le taux exact de 15 % et sa base sont les hypothèses de l’exercice.

<p class="article-table-hint">Sur petit écran, faites défiler le schéma horizontalement.</p>

<div class="article-infographic" tabindex="0" role="group" aria-label="Où vont 1 000 L/min entrants ?">
<svg viewBox="0 0 720 330" role="img" aria-labelledby="purge-title purge-desc" xmlns="http://www.w3.org/2000/svg">
<title id="purge-title">Où vont 1 000 L/min entrants ?</title><desc id="purge-desc">Exemple théorique avec une purge de 15 % du débit entrant : 850 L/min utiles et 150 L/min de purge. Tous les débits sont exprimés sur la même base.</desc>
<rect width="720" height="330" rx="20" fill="#10281e"/>
<text x="28" y="42" fill="#d3eb56" font-size="23" font-weight="700">Où vont 1 000 L/min entrants ?</text>
<text x="28" y="92" fill="white" font-size="21">Hypothèse : purge = 15 % de l’entrée</text><rect x="28" y="123" width="561" height="76" fill="#d3eb56"/><rect x="589" y="123" width="99" height="76" fill="#bb9666"/><text x="290" y="168" text-anchor="middle" fill="#10281e" font-size="27" font-weight="700">850 L/min utiles</text><text x="589" y="238" text-anchor="end" fill="white" font-size="21">150 L/min pour régénérer</text><text x="28" y="294" fill="white" font-size="17">Pour 1 000 L/min utiles : 1 000 ÷ 0,85 ≈ 1 176 entrants.</text>
</svg>
</div>


## Une purge fixe ne se comporte pas comme une fraction constante

**Autre scénario hypothétique :** une purge prélève 150 L/min pendant une phase donnée. Si l’entrée vaut 1 000 L/min, il en reste 850. Si l’entrée tombe à 500 L/min mais que cette purge reste identique, il n’en reste que 350. Le taux apparent passe alors de 15 à 30 %.

On ne peut donc pas transposer une fraction nominale à toute la journée sans connaître la commande. Demandez si le débit de purge varie, si la régénération est temporisée ou adaptée au besoin, et quelles phases sont comprises dans le chiffre fourni. Une moyenne de cycle et un prélèvement pendant une phase ne sont pas interchangeables.

## Les cinq lignes à obtenir dans le devis

<p class="article-table-hint">Sur petit écran, faites défiler le tableau horizontalement.</p>

<div class="article-table-scroll" tabindex="0" role="region" aria-label="Données nécessaires au bilan d’un sécheur à adsorption">

| Ligne du devis | Précision à demander | Utilité |
| --- | --- | --- |
| Capacité de traitement | Entrée ou sortie nette | Éviter un manque de débit utile |
| Purge | Débit, pourcentage, dénominateur et cycle | Reconstituer le bilan d’air |
| Conditions nominales | Pression, température et référence du volume | Comparer des chiffres compatibles |
| Point de rosée garanti | Conditions et plage de fonctionnement | Relier le traitement au besoin |
| Auxiliaires | Puissance, énergie et cycle du chauffage ou souffleur | Compléter la comparaison énergétique |

</div>


Cette grille est une proposition CompatAir. Elle complète le [choix du point de rosée](/guides/point-rosee-secheur-filtre-air-comprime/), qui doit précéder la recherche de la technologie la moins coûteuse.

## Débit net et pression disponible sont deux contraintes

Après le bilan volumique, conservez un bilan de pression distinct : pression en amont, pertes du traitement et pression minimale utile en aval. Une installation peut fournir assez de volume sur le papier et ne pas tenir le niveau requis au procédé.

Précisez aussi la position d’un éventuel débitmètre. En amont, il peut inclure l’air destiné à la purge ; en aval, il renseigne une autre frontière. Comparer les deux enregistrements demande des périodes cohérentes, les mêmes références de volume et la prise en compte des variations de stockage. Le [guide de mesure du débit](/guides/debitmetre-air-comprime-diametre-conditions-reference/) explicite ces précautions.

## Comparer les régénérations sur un bilan complet

Une solution qui consomme moins d’air de purge peut utiliser du chauffage ou un souffleur. Nous proposons donc de comparer, sur une période représentative, le volume d’air prélevé, l’énergie des auxiliaires, la qualité délivrée et la maintenance applicable. L’étiquette « sans chaleur » ou « sans perte » ne constitue pas un coût complet.

Sans ces mesures et les conditions locales, nous ne donnons ni pourcentage d’économie ni délai de retour. La décision utile est d’abord de savoir quel débit net et quel point de rosée seront effectivement garantis pour votre atelier.

## Sources et méthode

Sources consultées le **26 septembre 2026**. Analyse documentaire préparée avec assistance d’IA ; aucun essai physique ni validation professionnelle externe. Les calculs CompatAir et les hypothèses sont identifiés dans le texte.

- [KAESER, Air Treatment Solutions, page 8](https://us.kaeser.com/download.ashx?id=tcm%3A46-37748)
- [KAESER, guide de sélection des sécheurs](https://us.kaeser.com/compressed-air-resources/compressed-air-tips/compressed-air-treatment-guide/dryer-selection-guide.aspx)
