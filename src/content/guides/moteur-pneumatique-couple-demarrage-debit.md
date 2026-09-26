---
title: "Moteur pneumatique : dimensionner le couple de démarrage et le débit d’air"
seoTitle: "Moteur pneumatique : couple de démarrage et débit"
description: "Couple minimal de démarrage, puissance utile et consommation à vide : lire les caractéristiques d’un moteur pneumatique avant de choisir son alimentation."
pubDate: 2026-09-26
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 6
reviewStatus: internal
relatedGuides:
  - pression-travail-6-3-bar-outils-pneumatiques
  - comparer-puissance-specifique-compresseurs
  - diagnostiquer-chute-pression-air-comprime
sources:
  - https://www.atlascopco.com/en-us/itba/industry-solutions/Airmotors/technicalguide/performance
  - https://www.atlascopco.com/en-uk/itba/industry-solutions/airmotors/technicalguide/choose-air-motor
  - https://www.atlascopco.com/content/dam/pim/itba/atlas-copco/leaflets/global-leaflets/Leaflet-AtlasCopco-Pocket-Guide-to-Air-motors.pdf
---

Un moteur pneumatique peut fournir la puissance voulue une fois lancé et **ne pas garantir le couple nécessaire au démarrage**. Pour un entraînement d’atelier, il faut donc vérifier au moins trois états : le départ sous charge, le point de travail et la vitesse libre éventuelle. Une seule valeur en kW ne suffit pas à choisir le moteur ni le compresseur.

## Commencer par le travail mécanique demandé

Atlas Copco définit le [point de travail](https://www.atlascopco.com/en-us/itba/industry-solutions/Airmotors/technicalguide/performance) par le couple et la vitesse requis. Pour les moteurs à palettes décrits, la puissance maximale se situe vers la moitié de la vitesse libre ; la consommation d’air augmente avec la vitesse. Le [couple minimal de démarrage](/glossaire/#couple-minimal-demarrage) est une caractéristique distincte, liée notamment à la position des palettes au départ.

**Exemple de calcul CompatAir, entièrement hypothétique :** un mécanisme doit fournir 8 N·m à 300 tr/min et demande 12 N·m pour démarrer. Sa puissance mécanique en régime vaut :

`P en W = 2 × π × couple en N·m × vitesse en tr/min / 60`

`P = 2 × π × 8 × 300 / 60 ≈ 251 W`, soit **0,251 kW**.

Il faut vérifier que la courbe du moteur traverse le point 8 N·m / 300 tr/min **et** que son couple minimal de démarrage satisfait le besoin de 12 N·m dans les conditions retenues. Un catalogue annonçant seulement « 0,3 kW » ne démontre ni l’un ni l’autre.

<p class="article-table-hint">Sur petit écran, faites défiler le schéma horizontalement.</p>

<div class="article-infographic" tabindex="0" role="group" aria-label="Un besoin mécanique, deux vérifications">
<svg viewBox="0 0 720 330" role="img" aria-labelledby="motor-title motor-desc" xmlns="http://www.w3.org/2000/svg">
<title id="motor-title">Un besoin mécanique, deux vérifications</title><desc id="motor-desc">Exemple hypothétique : 8 Nm à 300 tr/min nécessitent environ 251 W mécaniques. Le démarrage exige séparément un minimum de 12 Nm.</desc>
<rect width="720" height="330" rx="20" fill="#10281e"/>
<text x="28" y="42" fill="#d3eb56" font-size="23" font-weight="700">Un besoin mécanique, deux vérifications</text>
<rect x="28" y="82" width="310" height="154" rx="12" fill="#203f31"/><rect x="382" y="82" width="310" height="154" rx="12" fill="#203f31"/><text x="48" y="119" fill="#d3eb56" font-size="22">En fonctionnement</text><text x="48" y="160" fill="white" font-size="21">8 N·m à 300 tr/min</text><text x="48" y="205" fill="white" font-size="24">≈ 251 W mécaniques</text><text x="402" y="119" fill="#d3eb56" font-size="22">Au démarrage</text><text x="402" y="165" fill="white" font-size="26">12 N·m minimum</text><text x="402" y="203" fill="white" font-size="17">Besoin distinct à vérifier</text><text x="28" y="292" fill="white" font-size="18">Scénario pédagogique, sans référence moteur sélectionnée.</text>
</svg>
</div>


## Ne pas confondre couple de calage et couple de départ

Dans le [guide de performance Atlas Copco](https://www.atlascopco.com/en-us/itba/industry-solutions/Airmotors/technicalguide/performance), le couple de calage décrit un moteur freiné jusqu’à l’arrêt depuis un état en rotation. Cela n’est pas le minimum garanti lorsqu’il repart depuis une position quelconque. Assimiler les deux pourrait conduire à retenir un entraînement qui fonctionne après une aide extérieure mais ne redémarre pas seul.

Le fabricant fournit un exemple concret dans son [Pocket Guide, page 19](https://www.atlascopco.com/content/dam/pim/itba/atlas-copco/leaflets/global-leaflets/Leaflet-AtlasCopco-Pocket-Guide-to-Air-motors.pdf) : un besoin de 20 N·m à 150 tr/min, avec 35 N·m au démarrage. Le LZB 42 AR004 satisfait le point de travail de l’exemple mais son minimum de départ de 26,8 N·m ne suffit pas ; le guide retient un autre rapport avec 44 N·m. C’est une illustration publiée, pas une recommandation de produit pour votre machine.

## Le bilan d’air doit suivre le cycle mécanique

Demandez la consommation au point de travail et pendant les phases rapides. Une ligne « consommation à puissance maximale » ne couvre pas nécessairement la vitesse libre. Le guide Atlas précise aussi qu’un moteur immobilisé sous pression peut encore consommer à cause des fuites internes. On ne peut donc pas supposer que « arbre arrêté » signifie « aucun air consommé ».

Pour préparer le compresseur, notre fiche de besoin sépare : durée du travail chargé, durée des déplacements rapides, fréquence des démarrages, arrêts alimentés et autres consommateurs simultanés. Chaque état doit avoir un débit documenté ou être marqué comme non renseigné. La somme pondérée sert au volume consommé ; la demande simultanée sert à la tenue de pression.

Ne transformez pas 0,251 kW mécaniques en puissance électrique du compresseur par une égalité. Le calcul ci-dessus porte sur l’arbre du moteur. Le [bilan de puissance spécifique](/guides/comparer-puissance-specifique-compresseurs/) traite la production d’air avec ses propres mesures.

## Pression et réduction : conserver la courbe applicable

Le [guide de sélection](https://www.atlascopco.com/en-uk/itba/industry-solutions/airmotors/technicalguide/choose-air-motor) explique que plusieurs rapports peuvent satisfaire un point de travail, avec des différences de comportement et d’usure. Le choix ne se réduit donc pas à prendre le plus petit modèle trouvé dans un tableau.

Exigez une courbe pour la pression **à l’entrée du moteur pendant le fonctionnement**, la version, le sens de rotation et le rapport concernés. Une pression de réseau nominale ne démontre pas la pression reçue après distributeur, régulation, raccords et flexible. Si elle manque, commencez par le [diagnostic de chute de pression](/guides/diagnostiquer-chute-pression-air-comprime/).

## Contrôler aussi l’unité de la formule

La formule `π × M × n / 30`, avec M en N·m et n en tr/min, donne des **watts**. La page de performance affiche pourtant « kW » dans sa légende ; l’exemple chiffré du Pocket Guide, page 19, donne bien 314 W puis 0,314 kW. Nous explicitons ici la conversion par 1 000 pour éviter une erreur d’échelle.

Avant de valider un entraînement, faites confirmer les efforts admissibles, la commande et les conditions de montage par l’intégrateur. Le calcul du couple et de l’air ne valide pas à lui seul la sécurité ni la tenue mécanique de la machine.

## Sources et méthode

Sources consultées le **26 septembre 2026**. Analyse documentaire préparée avec assistance d’IA ; aucun essai physique ni validation professionnelle externe. Les calculs CompatAir et les hypothèses sont identifiés dans le texte.

- [Atlas Copco, performances des moteurs pneumatiques à palettes](https://www.atlascopco.com/en-us/itba/industry-solutions/Airmotors/technicalguide/performance)
- [Atlas Copco, choisir un moteur à palettes](https://www.atlascopco.com/en-uk/itba/industry-solutions/airmotors/technicalguide/choose-air-motor)
- [Atlas Copco, Pocket Guide to Air Motors, notamment pages 9 à 15 et 19](https://www.atlascopco.com/content/dam/pim/itba/atlas-copco/leaflets/global-leaflets/Leaflet-AtlasCopco-Pocket-Guide-to-Air-motors.pdf)
