---
title: "Azote à 99 % : lire l’oxygène résiduel et la part d’argon d’un générateur PSA"
seoTitle: "Azote 99 % : oxygène résiduel, argon et ppm"
description: "La pureté d’un générateur PSA peut être exprimée par l’oxygène restant. Exemple Parker DB5–20, conversion en ppm et périmètre de l’analyse."
pubDate: 2026-09-30
updatedDate: 2026-11-16
category: Comprendre
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: internal
relatedGuides: ["generateur-azote-compresseur-debit-purete", "qualite-air-comprime-iso-8573-1", "filtre-air-sterile-perte-pression-contamination"]
sources:
  - https://test.parker.com/content/dam/Parker-com/Literature/IGFG/PDF-Files/PKR_IOM_DB5-20_082022.pdf
---

**Une pureté calculée à partir de l’oxygène résiduel ne décrit pas nécessairement la fraction de molécules N₂ seules.** Pour consulter un fournisseur de générateur PSA, il faut demander ce que la pureté annoncée signifie et quelles autres exigences du procédé sont contrôlées.

## Le cas explicite Parker DB5–20

La [notice Parker DB5–20, référence imprimée PKR_IOM_DB5-20_082022, © 2022](https://test.parker.com/content/dam/Parker-com/Literature/IGFG/PDF-Files/PKR_IOM_DB5-20_082022.pdf), page 6, indique que le gaz PSA produit contient aussi de l’argon. Elle exprime la pureté par l’oxygène résiduel : son exemple **1 % d’oxygène correspond à 99 % de N₂ + argon**.

La page 7 distingue les versions d’analyseur d’oxygène PCT, pour une indication en pourcentage, et PPM, pour les faibles teneurs résiduelles. Le choix de cette mesure doit correspondre à l’exigence du procédé. Pour connaître la proportion N₂/argon ou d’autres contaminants, il faut demander une analyse portant sur ces constituants.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 290" role="img" aria-labelledby="generateur-azote-purete-oxygene-argon-ppm-title generateur-azote-purete-oxygene-argon-ppm-desc" style="font-family:system-ui,sans-serif"><title id="generateur-azote-purete-oxygene-argon-ppm-title">Nommer la fraction contrôlée</title><desc id="generateur-azote-purete-oxygene-argon-ppm-desc">Convention explicitée par Parker pour DB5–20. Les ppm sont convertis sur la même base de fraction.</desc><rect width="440" height="290" rx="16" fill="#10281e"/><text x="24" y="33" font-size="18" fill="#d3eb56" font-weight="700">Nommer la fraction contrôlée</text><rect x="20" y="50" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="72" font-size="18" fill="#d3eb56" font-weight="700">Oxygène résiduel : 1 %</text><text x="32" y="97" font-size="16" fill="#eef2e9">Équivaut à 10 000 ppm sur la même base</text><rect x="20" y="120" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="142" font-size="18" fill="#d3eb56" font-weight="700">Complément : 99 %</text><text x="32" y="167" font-size="16" fill="#eef2e9">N₂ + argon dans l’exemple Parker</text><rect x="20" y="190" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="212" font-size="18" fill="#d3eb56" font-weight="700">Autres exigences</text><text x="32" y="237" font-size="16" fill="#eef2e9">À contrôler avec leurs propres méthodes</text></svg>
<figcaption>Convention explicitée par Parker pour DB5–20. Les ppm sont convertis sur la même base de fraction.</figcaption>
</figure>

## Convertir la même fraction sans changer son sens

Pour une même base de fraction, **1 % = 10 000 ppm** et **0,1 % = 1 000 ppm**. Ces conversions arithmétiques ne disent rien du point de prélèvement, de l’incertitude ou de la méthode de mesure. Gardez la base annoncée par le fournisseur ; ne mélangez pas pourcentage volumique, fraction molaire et concentrations massiques sans justification.

Demandez si l’exigence porte sur l’oxygène maximal, sur la teneur N₂ seule ou sur un autre critère du procédé. « Azote pur » est une demande trop imprécise pour comparer des offres.

## Un débit plus élevé peut changer la pureté obtenue

Le tableau de la page 7 associe, pour chaque modèle DB5–20, plusieurs débits de gaz produit à différentes teneurs résiduelles en oxygène. Ses notes précisent les conditions d’entrée, la dépendance à la pression, à la température et au débit, ainsi que le caractère moyen des consommations d’air publiées. Le [dimensionnement du générateur d’azote](/guides/generateur-azote-compresseur-debit-purete/) doit donc conserver le débit produit et la pureté au même point de fonctionnement.

Une valeur maximale de pureté et une valeur maximale de débit présentées séparément ne prouvent pas que l’appareil les atteint ensemble. Demandez le tableau applicable, ses conditions d’alimentation et le domaine garanti.

## Écrire un résultat à contrôler

Notre proposition de cahier des charges contient le débit produit demandé, l’oxygène maximal avec sa base, le point de contrôle, les conditions de démarrage et la conduite en cas de gaz hors exigence. Ajoutez la méthode et les conditions de maintenance de l’analyseur fournies par son fabricant.

La [qualité d’air comprimé](/guides/qualite-air-comprime-iso-8573-1/) concerne l’air d’alimentation. Pour un gaz produit exigeant une filtration particulière, le [dossier de filtre stérile](/guides/filtre-air-sterile-perte-pression-contamination/) traite un contrôle différent de celui de l’oxygène.

## Conserver les limites de la mesure

Le compte rendu doit indiquer le point de prélèvement, les unités, le débit en service et les conditions de contrôle de l’analyseur. Une indication conforme à un instant ne devient pas une garantie générale sur le gaz de tous les points du réseau.

Aucune mesure de pureté ni performance de générateur sur site n’est réalisée par CompatAir dans ce guide. Le document DB5–20, portant © 2022, a été relu le 16 novembre 2026 pour cet exemple. La configuration achetée doit être confirmée avec ses documents applicables.
