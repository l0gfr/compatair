---
title: "Éjecteur de vide Schmalz SBPL : quel débit demander au compresseur ?"
seoTitle: "Schmalz SBPL : débit aspiré et air comprimé consommé"
description: "SBPL 25 HF ou HV : distinguer aspiration, vide atteint et air comprimé consommé, puis préparer le bilan d’un poste à ventouses sans verdict de levage abusif."
pubDate: 2026-09-26
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "menuiserie-agencement"]
readingTime: 5
reviewStatus: internal
relatedGuides:
  - amplificateur-air-exair-consommation-debit
  - utiliser-plusieurs-outils-pneumatiques
  - convertir-cfm-l-min-nl-min-air-comprime
sources:
  - https://pimmedia.schmalz.com/MAM_Library/Dokumente/Datenblatt_Produktfamilie/0_/050/05050/ff4cfffb7ff4_Datasheet_Basic%20Ejectors%20SBPL_en-EN.pdf
updatedDate: 2026-09-26
---

Un éjecteur pneumatique produit du vide avec de l’air comprimé. Sur un **Schmalz SBPL 25 HV**, les **300 L/min de capacité d’aspiration** ne signifient pas que le compresseur doit fournir 300 L/min : la fiche indique séparément **105 L/min d’air consommé à la pression optimale**. Il faut conserver ces deux flux et leurs conditions.

Ce guide porte sur l’alimentation d’un générateur de vide. Il ne valide pas la capacité de levage d’un ensemble de ventouses ni la tenue d’une pièce en cas de perte d’énergie.

## HF et HV ne visent pas le même besoin

La [fiche Schmalz SBPL](https://pimmedia.schmalz.com/MAM_Library/Dokumente/Datenblatt_Produktfamilie/0_/050/05050/ff4cfffb7ff4_Datasheet_Basic%20Ejectors%20SBPL_en-EN.pdf) distingue les versions HF pour les pièces poreuses et HV pour les pièces étanches. Son tableau fournit les repères suivants :

<p class="article-table-hint">Sur petit écran, faites défiler le tableau horizontalement.</p>

<div class="article-table-scroll" tabindex="0" role="region" aria-label="Deux variantes SBPL 25">

| Variante | Aspiration publiée | Air consommé à la pression optimale | Degré d’évacuation publié |
| --- | --- | --- | --- |
| SBPL 25 HF | 290 L/min | 80 L/min | 60 % |
| SBPL 25 HV | 300 L/min | 105 L/min | 90 % |

</div>


La plage de service indiquée est de 2 à 6 bar. **Elle n’autorise pas à appliquer la même consommation à toute cette plage.** La note du tableau rattache la consommation à la pression optimale. Avant de comparer avec un compresseur à un point précis, faites confirmer ce point et la base de référence du débit.

## Pourquoi 300 L/min ne sont pas disponibles à tout niveau de vide

Les courbes de la fiche décrivent une aspiration qui varie avec le degré d’évacuation. La valeur maximale d’aspiration et le vide final ne sont donc pas deux performances à cumuler comme si elles étaient obtenues ensemble.

Pour choisir, notre démarche consiste à partir du besoin au niveau des ventouses : fuite à compenser, vide utile validé, volume à évacuer et temps disponible. Le maximum imprimé sur la première page ne répond pas seul à ces quatre questions. Un matériau poreux ajoute une entrée d’air qu’une simple durée d’évacuation d’un volume étanche ne représente pas.

<p class="article-table-hint">Sur petit écran, faites défiler le schéma horizontalement.</p>

<div class="article-infographic" tabindex="0" role="group" aria-label="Deux flux traversent le générateur">
<svg viewBox="0 0 720 330" role="img" aria-labelledby="vacuum-title vacuum-desc" xmlns="http://www.w3.org/2000/svg">
<title id="vacuum-title">Deux flux traversent le générateur</title><desc id="vacuum-desc">L’air du compresseur alimente l’éjecteur. L’air retiré du circuit de ventouses rejoint l’échappement. Le débit aspiré n’est pas le débit comprimé consommé.</desc>
<rect width="720" height="330" rx="20" fill="#10281e"/>
<text x="28" y="42" fill="#d3eb56" font-size="23" font-weight="700">Deux flux traversent le générateur</text>
<text x="28" y="102" fill="white" font-size="19">Air du compresseur</text><path d="M28 128H286" stroke="#d3eb56" stroke-width="12"/><rect x="286" y="86" width="206" height="100" rx="12" fill="#203f31"/><text x="389" y="142" text-anchor="middle" fill="white" font-size="25">Éjecteur</text><path d="M492 128H674m-17-12 17 12-17 12" stroke="#8abfa3" stroke-width="5" fill="none"/><text x="533" y="101" fill="white" font-size="18">Échappement</text><path d="M389 264V199m-10 13 10-13 10 13" stroke="#8abfa3" stroke-width="5" fill="none"/><text x="389" y="295" text-anchor="middle" fill="white" font-size="20">Air retiré du circuit de ventouses</text>
</svg>
</div>


## Construire un budget de poste, puis un budget d’atelier

**Calcul CompatAir, à conditions identiques à la consommation publiée :** quatre SBPL 25 HF alimentés simultanément représentent `4 × 80 = 320 L/min` d’air comprimé selon le tableau. Quatre SBPL 25 HV représentent `4 × 105 = 420 L/min`. Ces sommes ne sont valables que si le point d’alimentation et les références sont ceux du tableau ; elles ne constituent pas une sélection de compresseur.

Dans une hypothèse où les quatre HF prélèvent de l’air pendant 6 secondes sur un cycle de 20 secondes, avec prélèvement nul pendant le reste du cycle, la moyenne serait `320 × 6 / 20 = 96 L/min`. **La demande pendant l’activation resterait de 320 L/min.** L’arrêt du prélèvement est une hypothèse de commande à vérifier, pas une fonction présumée de tout montage SBPL.

C’est la distinction utile pour un poste répétitif : compter les cycles aide à estimer le volume d’air ; observer les activations simultanées aide à dimensionner l’alimentation. La [méthode de simultanéité](/guides/utiliser-plusieurs-outils-pneumatiques/) complète ce calcul.

## Un essai de pièce doit produire autre chose qu’un « ça tient »

Nous proposons un compte rendu séparant le résultat de préhension et la consommation. Côté pièce, faire définir par l’intégrateur les conditions acceptables de maintien, les états dégradés à considérer et le temps du cycle. Côté air, relever la pression d’alimentation, le vide au point pertinent et le volume consommé pendant une séquence identifiée.

Conservez le type de pièce, son état de surface, la configuration des ventouses et le comportement de la commande. Si l’on change le matériau ou la porosité, on ne réutilise pas automatiquement le verdict précédent. Si la consommation semble correcte mais le vide insuffisant, le problème ne se résume pas nécessairement au compresseur.

## Comparer des solutions sur le même service

Comparer un éjecteur avec une pompe à vide électrique demande un même résultat accepté : pièce, durée, niveau de vide et cadence. Le rapport entre litres aspirés et litres comprimés n’est pas un rendement énergétique complet. Il ne contient ni la dépense électrique de production d’air ni la qualité de la préhension.

Une logique voisine existe pour les [amplificateurs d’air](/guides/amplificateur-air-exair-consommation-debit/) : un débit entraîné ou aspiré ne doit pas être présenté comme du FAD fourni sous pression. Pour votre dossier, gardez les deux colonnes distinctes jusqu’à la décision finale.

Pour prolonger cette vérification, vous pouvez [préparer une préhension par le vide sur bois ou carton poreux](/guides/ventouse-piece-poreuse-debit-vide/).

Le [guide des pinces pneumatiques](/guides/pince-pneumatique-force-doigt-longueur-prehension/) examine une autre solution de préhension, avec la force par mors et la géométrie des doigts.

Le [guide de lecture du vacuomètre et du vacuostat](/guides/vacuometre-vacuostat-bar-absolu-pourcentage-vide/) détaille les références absolue et relative avec un exemple de pourcentage de vide.

## Sources et méthode

Sources consultées le **26 septembre 2026**. Analyse documentaire préparée avec assistance d’IA ; aucun essai physique ni validation professionnelle externe. Les calculs CompatAir et les hypothèses sont identifiés dans le texte.

- [Schmalz, fiche de famille SBPL générée le 28 juillet 2026, pages 1, 4 à 7](https://pimmedia.schmalz.com/MAM_Library/Dokumente/Datenblatt_Produktfamilie/0_/050/05050/ff4cfffb7ff4_Datasheet_Basic%20Ejectors%20SBPL_en-EN.pdf)
