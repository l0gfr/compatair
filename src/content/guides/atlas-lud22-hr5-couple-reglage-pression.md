---
title: "Atlas LUD22 HR5 : obtenir un couple ne suffit pas à qualifier une visseuse d’assemblage"
seoTitle: "LUD22 HR5 : couple, pression et assemblage à 5 Nm"
description: "Un besoin de 5 Nm entre dans la plage de la LUD22 HR5. Vérifier le réglage par pression, le type d’entraînement et l’essai sur l’assemblage avant de choisir."
pubDate: 2026-10-02
category: Choisir
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "menuiserie-agencement"]
readingTime: 5
reviewStatus: internal
relatedGuides: ["jonnesway-jab2011-jab2022-assemblage-deux-nm", "acheter-outil-industriel-reference-documentation", "utiliser-plusieurs-outils-pneumatiques"]
sources:
  - https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf
---

Une prescription d’assemblage de **5 Nm** entre dans la plage publiée de l’Atlas Copco **LUD22 HR5**. Cela permet de retenir cette visseuse parmi les candidates à examiner. Le catalogue ne transforme pourtant pas cette correspondance en réglage de pression, en précision de serrage ni en validation du joint réellement assemblé.

Le point décisif apparaît au pied du tableau : la plage de couple de cette famille est obtenue en réglant la pression entre **3 et 6 bar**. La LUD22 figure dans la section des modèles à entraînement direct. L’achat doit donc commencer par le procédé de serrage et son contrôle, avant de sélectionner un compresseur à partir d’un seul débit.

## Lire le tableau avec sa note de pression

La [page PDF 12 du catalogue Atlas Copco](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf#page=12) donne pour la référence 8431 0269 18 :

| Caractéristique publiée | LUD22 HR5 |
| --- | ---: |
| Couple sur assemblage tendre | 2,8 à 5,5 Nm |
| Vitesse à vide | 1 650 tr/min |
| Masse | 0,65 kg |
| Longueur | 125 mm |
| Consommation à vide | 8 L/s |

La note de 3 à 6 bar concerne l’obtention de la plage de couple. Elle ne fournit aucune courbe couple-pression de la HR5. Calculer un réglage à 5 Nm par interpolation linéaire entre les deux bornes ajouterait une relation que le fabricant ne publie pas dans ce tableau.

La [convention générale de la page PDF 4](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf#page=4) annonce 6,3 bar pour les données, sauf indication contraire. La plage particulière de 3 à 6 bar oblige ici à conserver l’exception. Elle ne permet pas de rattacher automatiquement les 8 L/s à un point de mesure de 6,3 bar. CompatAir garde ce débit documentaire hors du calcul de compatibilité tant que sa pression de référence demeure inconnue.

## Comparer les mécanismes avant les vitesses

La [page PDF 13](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/united-states/documents/itba/catalogs/Atlas%20Copco%20Industrial%20Tools%20and%20Solutions.pdf#page=13) présente des modèles à embrayage glissant. La TWIST22 HR6, référence 8431 0269 70, publie une plage de 2,2 à 6,5 Nm sur assemblage tendre, une vitesse à vide de 1 600 tr/min, une masse de 0,95 kg et une longueur de 195 mm. Cette page indique explicitement que toutes ses données sont à 6,3 bar.

Les deux plages englobent 5 Nm. Leurs mécanismes et leurs conditions de réglage diffèrent. La comparaison des vitesses à vide ne donne ni le temps d’un serrage réel ni la dispersion du couple final. Aucun résultat d’essai sur votre assemblage ne figure dans ces lignes.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 230" role="img" aria-labelledby="lud-title lud-desc">
<title id="lud-title">Cinq newtons-mètres appartiennent aux deux plages publiées</title>
<desc id="lud-desc">La LUD22 HR5 couvre 2,8 à 5,5 newtons-mètres. La TWIST22 HR6 couvre 2,2 à 6,5. La cible hypothétique de 5 ne qualifie pas le résultat d’assemblage.</desc>
<rect width="440" height="230" rx="14" fill="#073d2b"/>
<g fill="#eef2e9" font-family="system-ui,sans-serif" font-size="15">
<text x="24" y="34">Plages publiées sur assemblage tendre</text>
<text x="24" y="73">LUD22 HR5 : 2,8 à 5,5 Nm</text>
<text x="24" y="142">TWIST22 HR6 : 2,2 à 6,5 Nm</text>
<text x="24" y="207">Cible de scénario : 5 Nm, à qualifier par essai</text>
</g><path d="M164 92H299M134 161H349" stroke="#d3eb56" stroke-width="16"/>
<path d="M274 83V172" stroke="#eef2e9" stroke-width="3" stroke-dasharray="4 4"/>
</svg>
<figcaption>L’axe utilise la même échelle de couple pour les deux plages. Le type de mécanisme et les conditions d’air restent à comparer.</figcaption>
</figure>

## Préparer un essai qui répond au problème de production

Pour sélectionner un outil, décrivez le joint réel : pièces, vis, prescription de serrage, méthode de contrôle et cadence. Faites préciser au fournisseur comment le couple de la LUD22 HR5 se règle et comment il sera vérifié sur ce joint. La pression retenue doit être consignée pendant l’utilisation, avec les conditions d’alimentation du poste.

Le tableau distingue explicitement le couple sur assemblage tendre. Une exigence issue d’un autre assemblage ne devient pas équivalente parce que son nombre est identique. Le [dossier des visseuses Jonnesway à faible couple](/guides/jonnesway-jab2011-jab2022-assemblage-deux-nm/) développe la même étape de qualification à partir d’autres plages documentées.

Enfin, demandez le besoin d’air de la référence exacte au réglage retenu. Convertir 8 L/s en 480 L/min reste une opération d’unité ; cela ne comble ni la pression manquante ni le profil de serrage. La [fiche LUD22 HR5](/outils-pneumatiques/visseuse-atlas-copco-lud22-hr5-8431026918/) expose cette limite. Pour un poste partagé, le [relevé des usages simultanés](/guides/utiliser-plusieurs-outils-pneumatiques/) complète ensuite le dossier d’alimentation avec les autres besoins de l’atelier.
