---
title: "Cisaille ou grignoteuse pneumatique : quel compresseur faut-il ?"
seoTitle: "Compresseur pour cisaille ou grignoteuse pneumatique"
description: "Comparer une cisaille et une grignoteuse pneumatiques sans confondre capacité de coupe, consommation en charge et débit restitué du compresseur."
pubDate: 2026-08-28
updatedDate: 2026-09-26
category: "Choisir"
audiences: [professionnel]
metiers: [carrosserie-peinture, maintenance-industrielle]
readingTime: 12
featured: false
relatedCalculatorTool: chicago-pneumatic-cp835
sources:
  - https://tools.cp.com/fr-fr/products/specialtycutting/cp785s-skuT023200
  - https://tools.cp.com/en-ca/products/specialtycutting/cp835-skuT022550
  - https://tools.cp.com/content/dam/brands/cp/tools/web/shared/literature/catalogs/cp_general-industry/cp-general-industry-ENG.pdf
  - https://www.cp.com/content/dam/pim/itba/cp/technical-documents/8940171901.pdf
---

Une cisaille et une grignoteuse pneumatiques ne réalisent pas la même coupe et ne demandent pas le même débit. Le choix doit d’abord porter sur l’opération et la capacité documentée de l’outil. Le dimensionnement du compresseur vient ensuite, à partir de la consommation en charge et de la pression de la référence exacte.

La comparaison avec un autre procédé demande ses propres données : voyez les [tronçonneuses CP861 et CP9116](/guides/compresseur-pour-tronconneuse-pneumatique/) pour la coupe au disque, ou le [Powermax45 SYNC](/guides/compresseur-decoupeur-plasma-powermax45-sync/) pour les exigences d’air d’un découpeur plasma.

## Réponse directe

Les deux références Chicago Pneumatic étudiées demandent un débit élevé à 6,3 bar :

| Référence | Fonction décrite par le fabricant | Consommation en charge | Passage documenté |
| --- | --- | ---: | ---: |
| [CP785S](/outils-pneumatiques/cisaille-chicago-pneumatic-cp785s/) | cisaille pour la découpe de métaux | 7,3 L/s, soit **438 L/min** à **6,3 bar** | flexible intérieur **10 mm sur 5 m** |
| [CP835](/outils-pneumatiques/grignoteuse-chicago-pneumatic-cp835/) | grignoteuse pour angles serrés et cercles | 8 L/s, soit **480 L/min** à **6,3 bar** | flexible intérieur **10 mm sur 5 m** |

Les valeurs proviennent des fiches officielles [CP785S](https://tools.cp.com/fr-fr/products/specialtycutting/cp785s-skuT023200) et [CP835](https://tools.cp.com/en-ca/products/specialtycutting/cp835-skuT022550). Les conversions sont exactes : `7,3 × 60 = 438` et `8 × 60 = 480`.

<div class="article-infographic" tabindex="0" role="group" aria-label="Infographie technique défilable horizontalement sur petit écran">
<svg viewBox="0 0 760 350" role="img" aria-labelledby="sheet-flow-title sheet-flow-desc" xmlns="http://www.w3.org/2000/svg" style="display:block;margin-bottom:1.5rem">
  <title id="sheet-flow-title">Consommation en charge d’une cisaille et d’une grignoteuse pneumatiques</title>
  <desc id="sheet-flow-desc">La cisaille CP785S demande 438 litres par minute et la grignoteuse CP835 demande 480 litres par minute, toutes deux à 6,3 bar.</desc>
  <rect width="760" height="350" rx="22" fill="#10281e"/>
  <text x="40" y="46" fill="#d3eb56" font-size="15" font-weight="700">LA FORME DE COUPE ET LE BESOIN D’AIR SONT DEUX DÉCISIONS</text>
  <text x="40" y="84" fill="white" font-size="24" font-weight="700">Débit publié à 6,3 bar</text>
  <text x="40" y="145" fill="#bed0c6" font-size="16">Cisaille CP785S</text><rect x="220" y="119" width="383" height="40" rx="8" fill="#d3eb56"/><text x="620" y="146" fill="white" font-size="17" font-weight="700">438 L/min</text>
  <text x="40" y="225" fill="#bed0c6" font-size="16">Grignoteuse CP835</text><rect x="220" y="199" width="420" height="40" rx="8" fill="#19704f"/><text x="657" y="226" fill="white" font-size="17" font-weight="700">480 L/min</text>
  <text x="40" y="289" fill="#bed0c6" font-size="13">Les barres représentent la consommation en charge, pas une consommation moyenne d’atelier.</text>
  <text x="40" y="318" fill="#bed0c6" font-size="13">Source : fiches Chicago Pneumatic CP785S et CP835.</text>
  <text x="40" y="339" fill="#bed0c6" font-size="13">Méthode : conversion exacte des litres par seconde par multiplication par 60.</text>
</svg>
</div>

## Choisir d’abord le geste de coupe

La fiche CP785S décrit une cisaille destinée à la découpe de métaux et cite notamment les carrés et les angles. La fiche CP835 présente une grignoteuse conçue pour les angles serrés et les cercles dans l’aluminium, l’acier, l’étain et le plastique. Ces descriptions sont propres à ces deux modèles. Elles ne suffisent pas à transformer toute cisaille en outil de coupe droite ou toute grignoteuse en solution universelle pour les courbes.

La CP835 publie une capacité de **2,5 mm dans l’aluminium** et **1,6 mm dans l’acier**, un poinçon de **4,5 mm** et une cadence de **2 750 courses/min** sur sa [fiche technique](https://tools.cp.com/en-ca/products/specialtycutting/cp835-skuT022550). Ces valeurs décrivent sa capacité mécanique. Elles ne changent pas son besoin de 480 L/min à 6,3 bar.

## La fiche CP785S contient une contradiction

La page officielle CP785S n’est pas cohérente sur deux caractéristiques non pneumatiques :

- son texte de présentation et ses bénéfices annoncent **370 W** et une coupe d’acier jusqu’à **1,1 mm** ;
- son tableau technique affiche **258 W** et une capacité acier de **1,3 mm**.

Ces deux couples figurent sur la même [page Chicago Pneumatic](https://tools.cp.com/fr-fr/products/specialtycutting/cp785s-skuT023200). CompatAir ne choisit pas silencieusement l’un des deux. Pour une décision sur la capacité de coupe ou la puissance, il faut demander au fabricant une documentation attribuée au MPN **T023200** et à la révision livrée.

Les données pneumatiques utiles au présent calcul sont, elles, publiées sans contradiction visible dans le tableau de la fiche : **7,3 L/s en charge**, **6,3 bar**, entrée **1/4 pouce** et flexible intérieur minimal de **10 mm sur 5 m**. Le guide peut donc dimensionner l’air sans prétendre résoudre les deux autres écarts documentaires.

## Comparer au débit restitué, pas au nom du compresseur

Le compresseur doit publier un [FAD](/guides/debit-restitue-fad-vs-debit-aspire/) exploitable autour de 6,3 bar. Le premier seuil est 438 L/min pour la CP785S et 480 L/min pour la CP835. Un débit aspiré de 500 L/min ne prouve pas que 438 ou 480 L/min sont disponibles à 6,3 bar.

Avec la marge CompatAir réglée par défaut à 25 %, les repères deviennent 547,5 L/min pour la CP785S et 600 L/min pour la CP835. Cette majoration reste une réserve de calcul affichée séparément, pas une prescription du fabricant.

Une grande cuve peut soutenir une action transitoire, puis elle doit être rechargée. Elle ne rend pas compatible en continu une production dont le FAD reste inférieur au besoin. Le guide [utiliser plusieurs outils pneumatiques](/guides/utiliser-plusieurs-outils-pneumatiques/) explique aussi quand additionner les demandes si une découpe se déroule réellement en même temps qu’un autre poste.

## Le flexible documenté ne vaut que pour la configuration publiée

Chicago Pneumatic publie 10 mm de diamètre intérieur minimal sur 5 m pour les deux outils. Il ne faut pas prolonger cette indication à 10, 20 ou 50 m sans vérifier la perte de charge de la chaîne complète. Coupleurs, enrouleur, filtre, régulateur et flexibles supplémentaires restent à inventorier.

Mesurez la pression en circulation au raccord de l’outil. Si elle chute pendant la coupe, comparez un point en amont et un point au poste avant de relever la consigne du compresseur. Le guide [diagnostiquer une chute de pression](/guides/diagnostiquer-chute-pression-air-comprime/) décrit ce profil de mesure.

## Ne pas réduire la consommation avec un facteur arbitraire

Les fiches publient une consommation en charge. Elles ne donnent pas la part d’une minute pendant laquelle l’utilisateur maintient la commande, ni la longueur des coupes, ni les pauses, ni la coactivité. Appliquer un coefficient de 30 ou 50 % sans observation créerait une consommation moyenne fictive.

Pour une étude transitoire, relevez le temps de coupe cumulé, les intervalles, le matériau, l’épaisseur, la forme, l’état du poinçon ou des lames et les autres outils actifs. Le besoin instantané reste 438 ou 480 L/min pendant la phase en charge documentée.

## La sécurité forme un verdict séparé

Les [consignes Chicago Pneumatic pour cisailles et grignoteuses](https://www.cp.com/content/dam/pim/itba/cp/technical-documents/8940171901.pdf) demandent notamment de couper et purger l’alimentation avant un changement d’accessoire, de fixer la pièce, de diriger les copeaux métalliques sans créer de danger, de ne pas dépasser la capacité nominale et de traiter les arêtes ainsi que les outils de coupe qui peuvent être chauds.

Elles imposent aussi de ne pas dépasser 6,3 bar, de vérifier les flexibles et les raccords, puis de prendre en compte projections, bruit, vibrations et poussières. Une compatibilité compresseur-outil ne constitue donc ni une validation du matériau, ni une procédure de prévention.

## Dossier minimal avant achat

1. Identifier la forme de coupe et le matériau.
2. Vérifier le modèle, le MPN, la capacité publiée et les éventuelles contradictions de source.
3. Comparer 438 ou 480 L/min au FAD du compresseur à 6,3 bar.
4. Reproduire le flexible intérieur de 10 mm sur 5 m, ou recalculer la distribution réellement prévue.
5. Décrire la durée de coupe et les usages simultanés sans facteur générique.
6. Mesurer la pression pendant une séquence représentative.
7. Valider séparément accessoire, fixation de la pièce, projections, arêtes, bruit, vibrations et poussières.

Testez la [CP835 dans le calculateur](/calculateur/#outil=chicago-pneumatic-cp835), puis comparez le résultat avec la CP785S. Le débit supérieur de la grignoteuse doit rester visible, même si les deux outils partagent la même pression et le même diamètre de flexible publié.

## Sources

- [Chicago Pneumatic, fiche officielle CP785S](https://tools.cp.com/fr-fr/products/specialtycutting/cp785s-skuT023200)
- [Chicago Pneumatic, fiche officielle CP835](https://tools.cp.com/en-ca/products/specialtycutting/cp835-skuT022550)
- [Chicago Pneumatic, catalogue General Industry](https://tools.cp.com/content/dam/brands/cp/tools/web/shared/literature/catalogs/cp_general-industry/cp-general-industry-ENG.pdf)
- [Chicago Pneumatic, consignes de sécurité des cisailles et grignoteuses](https://www.cp.com/content/dam/pim/itba/cp/technical-documents/8940171901.pdf)
