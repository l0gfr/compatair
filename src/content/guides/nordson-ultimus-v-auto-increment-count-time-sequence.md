---
title: "Ultimus V : distinguer Count, Time et la boucle Auto Sequence"
seoTitle: "Ultimus V : Count, Time et retour Auto Sequence"
description: "Le Trigger Ultimus V compte des tirs ou des secondes selon le mode. Vérifiez chaque cellule et le retour au début en Sequence avant de qualifier la recette."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["diagnostiquer-chute-pression-air-comprime", "nordson-ultimus-v-vide-antigoutte-bulles-depot", "nordson-ultimus-v-optimeter-vidage-seringue"]
sources: ["https://nc-p-001.sitecorecontenthub.cloud/api/public/content/ad6ce7f8a8c34b72bd5295efa895fc74"]
---

**Une Ultimus V peut changer de cellule parce qu’un nombre de tirs a été atteint, parce qu’un temps s’est écoulé ou parce qu’une séquence recommence.** Ces règles ne donnent pas le même parcours de paramètres. Une évolution de pression affichée pendant une série peut donc provenir de la recette programmée.

Les [pages 29–30 du manuel](https://nc-p-001.sitecorecontenthub.cloud/api/public/content/ad6ce7f8a8c34b72bd5295efa895fc74#page=29) décrivent quatre modes : Off, Count, Time et Sequence. L’appareil prévoit **400 cellules** de combinaisons temps de dosage, pression et vide. La valeur Trigger appartient à chaque cellule ; passer à la suivante peut donc aussi charger un autre critère de progression.

## Relire l’unité du Trigger

En **Count**, Trigger est un nombre de cycles de dosage, de **1 à 99 999**. En **Time**, il est un nombre de secondes écoulées, dans la même plage numérique. Le même nombre sur l’écran ne signifie donc pas le même événement.

Le compteur de tirs de la cellule est remis à zéro au passage de cellule en Count. Le compteur temporel l’est au passage en Time. Conservez l’adresse courante et le mode avec le compteur avant d’interpréter un changement. Les règles précises d’intégration et d’arrêt doivent aussi être vérifiées ; aucune hypothèse de pause de compteur machine n’est ajoutée ici.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg viewBox="0 0 520 350" role="img" aria-labelledby="nordson-ultimus-v-auto-increment-count-time-sequence-svg-title nordson-ultimus-v-auto-increment-count-time-sequence-svg-desc" xmlns="http://www.w3.org/2000/svg">
<title id="nordson-ultimus-v-auto-increment-count-time-sequence-svg-title">Trois critères de progression à distinguer</title><desc id="nordson-ultimus-v-auto-increment-count-time-sequence-svg-desc">Count progresse après le nombre de tirs prévu ; Time après le nombre de secondes prévu ; Sequence revient à la cellule de départ après la dernière. Schéma logique sans recette ni performance qualifiée.</desc>
<rect width="520" height="350" rx="20" fill="#10281e"/>
<g font-family="Manrope Variable, sans-serif"><text x="28" y="43" fill="white" font-size="22">Ultimus V : pourquoi la cellule a changé ?</text><rect x="37" y="88" width="193" height="65" rx="10" fill="#203f31"/><rect x="286" y="88" width="193" height="65" rx="10" fill="#203f31"/><text x="54" y="128" fill="white" font-size="22">Count : cycles</text><text x="303" y="128" fill="white" font-size="20">Time : secondes</text><path d="M72 229h375v51H72v-51m375 0-14-8m14 8-14 8" stroke="#d3eb56" stroke-width="3" fill="none"/><text x="116" y="214" fill="white" font-size="20">Sequence : dernière → première</text><text x="28" y="333" fill="white" font-size="22">Trigger est propre à chaque cellule.</text></g>
</svg>
<figcaption>Count progresse après le nombre de tirs prévu ; Time après le nombre de secondes prévu ; Sequence revient à la cellule de départ après la dernière. Schéma logique sans recette ni performance qualifiée.</figcaption>
</figure>

## Sequence revient au début

La page 30 indique qu’en Sequence, après le Trigger de la dernière adresse, l’appareil revient à la première et continue. L’alarme d’Auto Increment n’est pas déclenchée dans ce mode.

Cette boucle change une décision de procédé. Une recette dont la dernière cellule devait marquer la fin d’un matériau ou d’un lot ne doit pas être qualifiée sur le seul fait que toutes ses cellules ont été parcourues une fois. Il faut vérifier que le retour au début est bien le comportement souhaité.

| Mode | Ce qui fait avancer | Ce qu’il faut conserver dans le relevé |
| --- | --- | --- |
| Off | Auto Increment désactivé | Cellule et paramètres utilisés |
| Count | Nombre de cycles de la cellule | Trigger en cycles et compteur de tirs |
| Time | Secondes écoulées pour la cellule | Trigger en secondes et compteur temporel |
| Sequence | Nombre de cycles, avec boucle finale | Début, fin et retour à la première cellule |

## Une compensation programmée n’est pas une mesure de dose

Le manuel présente Auto Increment pour adapter des paramètres lorsque la viscosité évolue. Le critère de passage décrit reste un compte ou un temps, et non une mesure intégrée de quantité déposée. La recette doit être construite et vérifiée sur les conditions du fluide et du procédé.

Avant de modifier la pression d’air réseau, exportez les cellules, les Trigger et le mode observé. Si la modification coïncide avec un passage de cellule, examinez d’abord la consigne programmée. Le [guide de chute de pression](/guides/diagnostiquer-chute-pression-air-comprime/) traite une variation d’alimentation mesurée, différente de ce changement volontaire.

Le [guide vide antigoutte](/guides/nordson-ultimus-v-vide-antigoutte-bulles-depot/) examine la stabilité après le tir. Le [guide Optimeter](/guides/nordson-ultimus-v-optimeter-vidage-seringue/) traite la compensation mécanique liée au vidage. La prochaine action est de comparer la progression effective à celle attendue, puis de réceptionner les dépôts à chaque transition utile, avec le comportement de fin de série explicitement vérifié.

## Sources et méthode

Sources fabricant consultées le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios de calcul et les procédures de réception proposées par CompatAir sont identifiés dans le texte.
