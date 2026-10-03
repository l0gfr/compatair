---
title: "Ultimus V Optimeter : vérifier le dosage du début à la fin de seringue"
seoTitle: "Ultimus V Optimeter : compensation du vidage de seringue"
description: "Nordson présente Optimeter pour compenser le vidage. Distinguez niveau, évolution du fluide et recette, puis contrôlez les dépôts sur la plage utilisée."
pubDate: "2026-10-03"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["nordson-ultimus-v-auto-increment-count-time-sequence", "nordson-ultimus-v-vide-antigoutte-bulles-depot", "diagnostiquer-chute-pression-air-comprime"]
sources: ["https://www.nordson.com/en/products/efd-products/ultimus-v-dispensers", "https://nc-p-001.sitecorecontenthub.cloud/api/public/content/ad6ce7f8a8c34b72bd5295efa895fc74"]
---

**Un réglage de dosage validé sur une seringue pleine ne suffit pas à documenter le résultat jusqu’à sa fin.** Nordson présente l’Optimeter de l’Ultimus V comme une compensation mécanique liée au vidage. Cette fonction doit être distinguée d’une progression de recette selon le temps ou le nombre de tirs.

La [page fabricant Ultimus V, section « The Optimeter Advantage »](https://www.nordson.com/en/products/efd-products/ultimus-v-dispensers) décrit une régulation mécanique de pression et de volume d’air pendant le déplacement du piston. Elle annonce une augmentation automatique du débit d’air lorsque la seringue se vide, destinée à conserver la cohérence des dépôts du début à la fin. Cette annonce est celle du fabricant ; elle ne constitue pas un essai comparatif réalisé par CompatAir.

## Identifier ce qui est effectivement monté

Le [manuel Ultimus V](https://nc-p-001.sitecorecontenthub.cloud/api/public/content/ad6ce7f8a8c34b72bd5295efa895fc74#page=34) liste les références d’accessoires et d’Optimeter. La liste de pièces sert à retrouver l’équipement, mais ne démontre pas à elle seule sa fonction : l’explication ci-dessus provient de la page fabricant, pas d’une déduction sur le nom de la pièce.

Conservez la référence de seringue, le piston et l’ensemble d’adaptation utilisés. Avant achat ou remplacement, faites confirmer leur association dans le montage prévu. Aucune compatibilité de seringue ou d’accessoire non publiée n’est inventée à partir de la photographie.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg viewBox="0 0 520 350" role="img" aria-labelledby="nordson-ultimus-v-optimeter-vidage-seringue-svg-title nordson-ultimus-v-optimeter-vidage-seringue-svg-desc" xmlns="http://www.w3.org/2000/svg">
<title id="nordson-ultimus-v-optimeter-vidage-seringue-svg-title">Le niveau de seringue est une variable de réception</title><desc id="nordson-ultimus-v-optimeter-vidage-seringue-svg-desc">Le fabricant présente Optimeter comme une compensation mécanique pendant le vidage. Ce schéma de deux niveaux ne représente pas une coupe technique de l’accessoire ni un résultat de dosage mesuré.</desc>
<rect width="520" height="350" rx="20" fill="#10281e"/>
<g font-family="Manrope Variable, sans-serif"><text x="28" y="43" fill="white" font-size="21">Ultimus V : comparer début et fin de seringue</text><rect x="105" y="84" width="95" height="170" rx="10" fill="#203f31" stroke="#9ebdad" stroke-width="2"/><rect x="320" y="84" width="95" height="170" rx="10" fill="#203f31" stroke="#9ebdad" stroke-width="2"/><rect x="110" y="112" width="85" height="137" fill="#d3eb56"/><rect x="325" y="212" width="85" height="37" fill="#d3eb56"/><text x="110" y="288" fill="white" font-size="22">Début</text><text x="321" y="288" fill="white" font-size="22">Fin</text><text x="28" y="335" fill="white" font-size="21">Mêmes paramètres, même critère de dépôt.</text></g>
</svg>
<figcaption>Le fabricant présente Optimeter comme une compensation mécanique pendant le vidage. Ce schéma de deux niveaux ne représente pas une coupe technique de l’accessoire ni un résultat de dosage mesuré.</figcaption>
</figure>

## Faire varier le niveau sans changer toutes les autres conditions

Une comparaison proposée peut porter sur des dépôts en début, milieu et fin de seringue. Gardez les paramètres et la méthode de mesure, et relevez les conditions du fluide qui changent pendant la série. Le niveau et le temps écoulé évoluent ensemble dans une production normale ; il faut les distinguer pour attribuer une dérive.

Si la viscosité change pendant l’opération, une différence de dépôt ne prouve pas que la compensation du vidage est défaillante. Inversement, un résultat favorable sur un fluide et une plage de niveau ne garantit pas la même répétabilité pour tous les matériaux.

| Variable à conserver | Pourquoi elle compte dans la comparaison |
| --- | --- |
| Niveau ou position dans la seringue | Tester le périmètre de compensation annoncé |
| Temps écoulé et condition du fluide | Séparer vidage et évolution du matériau |
| Paramètres de dosage | Éviter de comparer des recettes différentes |
| Ensemble seringue/piston/adaptation | Identifier le montage réellement testé |
| Mesure du dépôt | Juger le résultat du procédé, avec sa tolérance |

## Trois corrections répondent à trois mécanismes

L’Optimeter est présenté pour la compensation du vidage. Le [mode Auto Increment](/guides/nordson-ultimus-v-auto-increment-count-time-sequence/) permet une progression programmée de paramètres, notamment pour une évolution de viscosité. Le [vide antigoutte](/guides/nordson-ultimus-v-vide-antigoutte-bulles-depot/) traite le comportement entre les tirs et peut être excessif. Les trois fonctions ne doivent pas recevoir la même explication de dérive.

Pour une instabilité du réseau, le [diagnostic sous charge](/guides/diagnostiquer-chute-pression-air-comprime/) complète le relevé d’alimentation. La prochaine action utile est de faire confirmer l’ensemble compatible, puis de réceptionner le dépôt sur la plage de niveau réellement utilisée. Ce contrôle donne une limite de procédé observée ; aucune précision numérique ou économie d’air n’est déduite ici de l’argument de compensation du fabricant.

## Sources et méthode

Sources fabricant consultées le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios de calcul et les procédures de réception proposées par CompatAir sont identifiés dans le texte.
