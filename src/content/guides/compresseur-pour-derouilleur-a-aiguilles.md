---
title: "Quel compresseur pour un dérouilleur à aiguilles ?"
seoTitle: "Compresseur pour dérouilleur à aiguilles | CompatAir"
description: "Dimensionner l’air d’un dérouilleur à aiguilles à partir du modèle exact, avec les CP7115 et CP7120, leurs débits, flexibles et limites d’usage."
pubDate: 2026-08-28
updatedDate: 2026-09-26
category: "Choisir"
audiences: [professionnel]
metiers: [garage-automobile, carrosserie-peinture, maintenance-industrielle]
readingTime: 13
featured: false
relatedCalculatorTool: chicago-pneumatic-cp7120
sources:
  - https://tools.cp.com/en-ca/products/percussivetools/cp7115-sku8941071150
  - https://tools.cp.com/en/products/percussivetools/cp7120-sku8941071200
  - https://tools.cp.com/content/dam/brands/cp/tools/web/shared/literature/catalogs/cp_vehicle-services/cp-vehicle-services-eng.pdf
  - https://www.cp.com/content/dam/pim/itba/cp/technical-documents/8940169840.pdf
  - https://www.cp.com/content/dam/pim/itba/cp/technical-documents/8940162094.pdf
  - https://www.inrs.fr/media.html?refINRS=ED+6342
---

Le terme « dérouilleur à aiguilles » ne fournit ni une consommation d’air, ni une cadence, ni une capacité de travail universelles. Deux références de la même marque peuvent imposer des productions très différentes. Le compresseur doit donc être choisi depuis le modèle exact et sa consommation en charge, puis vérifié avec le flexible, la pression au poste et la durée réelle d’exposition.

## Réponse directe

Les deux dérouilleurs Chicago Pneumatic documentés par CompatAir fonctionnent à 6,3 bar avec un flexible intérieur minimal de 10 mm sur 5 m. Leur besoin en air n’est pourtant pas voisin :

| Référence | Configuration publiée | Consommation en charge | Données de percussion |
| --- | --- | ---: | ---: |
| [CP7115](/outils-pneumatiques/derouilleur-a-aiguilles-chicago-pneumatic-cp7115/) | 12 aiguilles de 3 mm | 2 L/s, soit **120 L/min** à **6,3 bar** | 4 000 coups/min, 2,2 J |
| [CP7120](/outils-pneumatiques/derouilleur-a-aiguilles-chicago-pneumatic-cp7120/) | 19 aiguilles de 3 mm, convertible en marteau burineur | 7,4 L/s, soit **444 L/min** à **6,3 bar** | 4 800 coups/min, 5,3 J |

Ces valeurs proviennent des fiches [CP7115](https://tools.cp.com/en-ca/products/percussivetools/cp7115-sku8941071150) et [CP7120](https://tools.cp.com/en/products/percussivetools/cp7120-sku8941071200). Les conversions sont exactes : `2 × 60 = 120` et `7,4 × 60 = 444`. La CP7120 demande ainsi **3,7 fois** le débit en charge publié pour la CP7115. Ce rapport ne mesure ni la productivité, ni la vitesse de dérouillage sur une surface donnée.

<div class="article-infographic" tabindex="0" role="group" aria-label="Infographie technique défilable horizontalement sur petit écran">
<svg viewBox="0 0 760 370" role="img" aria-labelledby="needle-flow-title needle-flow-desc" xmlns="http://www.w3.org/2000/svg" style="display:block;margin-bottom:1.5rem">
  <title id="needle-flow-title">Écart de consommation entre deux dérouilleurs à aiguilles</title>
  <desc id="needle-flow-desc">Le CP7115 demande 120 litres par minute à 6,3 bar. Le CP7120 demande 444 litres par minute à 6,3 bar, soit trois virgule sept fois plus.</desc>
  <rect width="760" height="370" rx="22" fill="#10281e"/>
  <text x="40" y="46" fill="#d3eb56" font-size="15" font-weight="700">LE MODÈLE EXACT CHANGE LE DIMENSIONNEMENT</text>
  <text x="40" y="84" fill="white" font-size="24" font-weight="700">Consommation en charge à 6,3 bar</text>
  <text x="40" y="145" fill="#bed0c6" font-size="16">CP7115</text><rect x="155" y="119" width="144" height="40" rx="8" fill="#d3eb56"/><text x="318" y="146" fill="white" font-size="17" font-weight="700">120 L/min</text>
  <text x="40" y="231" fill="#bed0c6" font-size="16">CP7120</text><rect x="155" y="205" width="533" height="40" rx="8" fill="#19704f"/><text x="596" y="232" fill="white" font-size="17" font-weight="700">444 L/min</text>
  <text x="40" y="292" fill="#d3eb56" font-size="21" font-weight="700">Rapport des débits publiés : 444 ÷ 120 = 3,7</text>
  <text x="40" y="329" fill="#bed0c6" font-size="13">Le rapport ne prédit pas le temps nécessaire pour traiter une surface.</text>
  <text x="40" y="350" fill="#bed0c6" font-size="13">Source : Chicago Pneumatic. Conversion L/s vers L/min par multiplication par 60.</text>
</svg>
</div>

## Le petit modèle ne représente pas la catégorie

Chicago Pneumatic présente la CP7115 pour l’élimination de rouille sur châssis, le nettoyage de tambours de roue et la préparation de surfaces. Sa fiche publie 12 aiguilles de 3 mm, 4 000 coups/min, 2,2 J, 120 L/min à 6,3 bar et un flexible intérieur minimal de 10 mm sur 5 m.

La CP7120 est un autre outil : elle reçoit 19 aiguilles de 3 mm et peut être convertie en marteau burineur avec un emmanchement carré de 12,7 mm. Sa fiche publie 4 800 coups/min, 5,3 J et 444 L/min à 6,3 bar. Le fabricant la destine à la maintenance générale et aux ateliers de carrosserie, sans publier une surface traitée par heure.

Il serait donc faux d’attribuer 120 L/min à tous les dérouilleurs à aiguilles. Il serait également faux de conclure que la CP7120 travaille 3,7 fois plus vite parce qu’elle consomme 3,7 fois plus d’air. Matériau, corrosion, aiguilles, effort appliqué, accès et état de l’outil restent nécessaires pour évaluer le travail produit.

## Le compresseur doit couvrir la consommation en charge

Pour la CP7115, le premier seuil est un [FAD](/guides/debit-restitue-fad-vs-debit-aspire/) de 120 L/min à une pression exploitable pour 6,3 bar. Pour la CP7120, il est de 444 L/min à 6,3 bar. Les débits aspirés et les litres de cuve ne doivent pas être substitués à ces points.

Avec la marge CompatAir par défaut de 25 %, les repères affichés deviennent 150 L/min pour la CP7115 et 555 L/min pour la CP7120. Cette marge est un choix de calcul explicite. Elle ne modifie pas les consommations Chicago Pneumatic.

Une réserve locale peut soutenir une séquence courte, mais son calcul exige volume, pressions de départ et de fin, durée et recharge. Sans ces entrées, la cuve ne permet pas de déclarer la CP7120 compatible avec un compresseur inférieur à 444 L/min en fonctionnement durable.

## Conserver le flexible et la pression dynamique

Les deux fiches publient un diamètre intérieur minimal de 10 mm pour 5 m. Une autre longueur ne bénéficie pas automatiquement de la même validation. Le passage réel comprend le traitement d’air, les coupleurs, l’enrouleur et chaque réduction.

Mesurez la pression au raccord pendant que les aiguilles frappent. Si elle est correcte à vide mais chute en charge, comparez la pression avant et après les principaux organes. Le guide [flexible, enrouleur et raccords de garage](/guides/flexible-enrouleur-raccords-garage-debit/) décrit cette recherche de restriction.

## La lubrification vient de la notice

Les manuels CP7115 et CP7120 demandent une alimentation en air propre et sec à 6,3 bar. Ils prescrivent un lubrificateur de ligne avec une huile SAE 10 réglé à deux gouttes par minute. Si ce dispositif ne peut pas être utilisé, les notices demandent d’ajouter quotidiennement de l’huile pour moteur pneumatique à l’entrée. Elles demandent aussi une légère lubrification de l’ensemble d’aiguilles lors de l’entretien.

Ces instructions sont propres aux [manuels CP7115](https://www.cp.com/content/dam/pim/itba/cp/technical-documents/8940169840.pdf) et [CP7120](https://www.cp.com/content/dam/pim/itba/cp/technical-documents/8940162094.pdf). Elles ne constituent pas une règle pour tout outil raccordé au même réseau. Un circuit de peinture, par exemple, ne doit pas recevoir de l’huile simplement parce qu’un dérouilleur en exige. La séparation des usages et le positionnement du lubrificateur doivent être étudiés en conséquence.

## Le débit ne couvre pas le risque vibratoire

Les fiches actuelles des CP7115 et CP7120 publient chacune une valeur vibratoire de **11,4 m/s²**, avec des incertitudes respectives de **1,6 m/s²** et **3,4 m/s²**. Le [manuel CP7120](https://www.cp.com/content/dam/pim/itba/cp/technical-documents/8940162094.pdf) précise que les valeurs déclarées proviennent d’essais de type en laboratoire et ne doivent pas remplacer les valeurs d’exposition propres au poste.

Le guide [INRS ED 6342](https://www.inrs.fr/media.html?refINRS=ED+6342) demande d’identifier les tâches vibrantes, leurs conditions et leur durée afin d’évaluer l’exposition quotidienne. Il rappelle aussi que posture, effort de poussée, préhension, poids et gestes répétés participent à l’analyse.

CompatAir ne transforme donc pas 11,4 m/s² en durée de travail autorisée. Le verdict pneumatique et l’évaluation du risque vibratoire restent deux dossiers séparés.

## Ne pas inventer un facteur d’utilisation

Les consommations de 120 et 444 L/min décrivent la charge. Elles ne publient pas un temps de gâchette moyen. Pour une étude de poste, relevez le temps de frappe cumulé, les pauses, la surface, le support, l’état des aiguilles, la pression dynamique et les autres outils actifs.

Une demande moyenne calculée depuis une durée observée peut servir à analyser l’énergie ou la recharge. Elle ne remplace pas le débit instantané nécessaire lorsque le dérouilleur fonctionne.

## Procédure de réception

1. Photographier la plaque et relever le MPN.
2. Vérifier le nombre et le diamètre des aiguilles installées.
3. Comparer 120 ou 444 L/min au FAD du compresseur à 6,3 bar.
4. Documenter le flexible intérieur de 10 mm sur 5 m, ou la configuration différente réellement déployée.
5. Appliquer la lubrification de la notice sans contaminer les usages qui exigent un air non huilé.
6. Mesurer la pression pendant une séquence représentative.
7. Consigner durée, support, état des aiguilles, résultat et récupération de la production.
8. Évaluer séparément vibrations, bruit, projections, poussières et ergonomie.

Testez la [CP7120 dans le calculateur](/calculateur/#outil=chicago-pneumatic-cp7120), puis comparez-la à la CP7115. Le moteur doit conserver l’écart de 324 L/min entre les deux besoins et ne jamais le remplacer par une moyenne de catégorie.

Un autre outil à percussion peut avoir un usage et une consommation très différents. Le dossier [marteaux à river RRH et RRN](/guides/compresseur-pour-marteau-a-river-pneumatique/) compare débit, énergie par coup et emmanchements sans transformer les coups par minute en cadence de production.

## Sources

- [Chicago Pneumatic, fiche officielle CP7115](https://tools.cp.com/en-ca/products/percussivetools/cp7115-sku8941071150)
- [Chicago Pneumatic, fiche officielle CP7120](https://tools.cp.com/en/products/percussivetools/cp7120-sku8941071200)
- [Chicago Pneumatic, catalogue Vehicle Services](https://tools.cp.com/content/dam/brands/cp/tools/web/shared/literature/catalogs/cp_vehicle-services/cp-vehicle-services-eng.pdf)
- [Chicago Pneumatic, manuel CP7115](https://www.cp.com/content/dam/pim/itba/cp/technical-documents/8940169840.pdf)
- [Chicago Pneumatic, manuel CP7120](https://www.cp.com/content/dam/pim/itba/cp/technical-documents/8940162094.pdf)
- [INRS, ED 6342, Vibrations mains-bras](https://www.inrs.fr/media.html?refINRS=ED+6342)
