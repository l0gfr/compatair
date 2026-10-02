---
title: "MAX CN890F3 : passer du volume par clou à une cadence de chantier"
seoTitle: "MAX CN890F3 : combien d’air à 20 ou 40 clous/min ?"
description: "0,11 ft³ par cycle à 100 psi : calculez la demande moyenne de deux cadences explicites, sans confondre ce résultat avec la capacité de frappe."
pubDate: 2026-10-02
category: Choisir
audiences: ["professionnel"]
metiers: ["btp-chantier", "menuiserie-agencement"]
readingTime: 5
reviewStatus: internal
relatedGuides: ["cadence-clouage-pneumatique-chantier", "compresseur-portatif-clouage-chantier"]
sources:
  - https://www.maxusacorp.com/wp-content/uploads/CN890F3_SellSheet.pdf
  - https://www.maxusacorp.com/wp-content/uploads/%E3%80%90%E5%AE%8C%E6%88%90%E7%89%88%E3%80%91_CN890F_5L_c6_250822_MAX.pdf
---

Un cloueur peut publier un volume par cycle, alors que le compresseur affiche un débit par minute. La MAX CN890F3 fournit les données nécessaires pour relier ces deux grandeurs, à condition d’ajouter une cadence explicite. Cette conversion ne donne pas, à elle seule, la tenue de la pression pendant chaque frappe ni la cadence maximale de l’outil.

## Un volume documenté à 100 psi

La [CN890F3](/outils-pneumatiques/agrafeuse-cloueuse-max-cn890f3/) est annoncée à **0,11 ft³ par cycle**, à **100 psi**. La brochure et le manuel permettent d’identifier le point de pression et la bonne colonne du modèle. Le manuel indique également une plage de pression recommandée de **85 à 100 psi** et un magasin de **300 clous**. [Brochure, page PDF 2](https://www.maxusacorp.com/wp-content/uploads/CN890F3_SellSheet.pdf#page=2), [manuel commun, page PDF 5](https://www.maxusacorp.com/wp-content/uploads/%E3%80%90%E5%AE%8C%E6%88%90%E7%89%88%E3%80%91_CN890F_5L_c6_250822_MAX.pdf#page=5).

Avec 1 ft³ = 28,316846592 litres, le volume converti vaut **3,114853 litres par cycle**, avant arrondi. CompatAir conserve la consommation par action ; aucune cadence implicite n’est attachée à cette caractéristique. Le magasin de 300 clous décrit un chargement, sans définir le rythme de travail.

## Deux cadences hypothétiques, deux demandes moyennes

À **20 cycles par minute**, le calcul donne 3,114853 × 20, soit environ **62,3 L/min**. À **40 cycles par minute**, il donne environ **124,6 L/min**. Les deux cadences sont des scénarios de travail choisis pour montrer la méthode. Elles ne représentent ni une observation de chantier ni une promesse de cadence fabricant.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 259" role="img" aria-labelledby="max-cadence-title max-cadence-desc">
<title id="max-cadence-title">Conversion du volume par action en débit moyen</title><desc id="max-cadence-desc">Calculs CompatAir à partir du volume déclaré. La demande pendant la frappe n’est pas un débit constant de ce niveau.</desc><rect width="440" height="259" rx="14" fill="#073d2b"/>
<g font-family="system-ui,sans-serif" font-size="16"><text x="24" y="32" fill="#d3eb56">Point de la CN890F3</text><text x="24" y="56" fill="#eef2e9">0,11 ft³/cycle à 100 psi</text><text x="24" y="89" fill="#d3eb56">Scénario : 20 cycles/min</text><text x="24" y="113" fill="#eef2e9">Environ 62,3 L/min</text><text x="24" y="146" fill="#d3eb56">Scénario : 40 cycles/min</text><text x="24" y="170" fill="#eef2e9">Environ 124,6 L/min</text></g></svg>
<figcaption>Calculs CompatAir à partir du volume déclaré. La demande pendant la frappe n’est pas un débit constant de ce niveau.</figcaption>
</figure>

## Relever le rythme sur une période définie

Compter les cycles et leur durée sur une séquence représentative, en distinguant les pauses et les phases de travail. Un nombre de clous sur une journée ne décrit pas la demande d’une rafale locale. Le [guide de cadence de clouage](/guides/cadence-clouage-pneumatique-chantier/) aide à organiser ce relevé.

Pour plusieurs cloueurs, additionner les demandes correspondant aux phases réellement simultanées. Conserver les volumes par action et leurs pressions propres. Les hypothèses de cadence doivent être visibles dans le dossier ; elles ne doivent pas devenir des caractéristiques permanentes d’un modèle de cloueur.

## Ne pas utiliser ce calcul comme réserve de cuve garantie

Le volume par cycle publié ne décrit pas la chute de pression dans une cuve particulière. Il manque notamment les conditions du circuit, le comportement du régulateur et la production pendant la séquence. La présente conversion ne promet donc pas un nombre de clous réalisable avec une cuve de 24, 50 ou 100 litres.

Comparer le [FAD du compresseur](/guides/debit-restitue-fad-vs-debit-aspire/) au débit moyen du scénario est une étape de dimensionnement. Il faut aussi vérifier que la pression prescrite reste disponible au cloueur pendant le travail. Le [guide compresseur portatif pour clouage](/guides/compresseur-portatif-clouage-chantier/) traite les contraintes du poste mobile.

## Garder la colonne CN890F3

Le manuel réunit plusieurs modèles. Les volumes et pressions des autres colonnes ne doivent pas être attribués à la CN890F3. Sa colonne indique **0,11 ft³ à 100 psi**, avec une valeur métrique imprimée de **3,0 L à 7 bar**. Ces valeurs sont des indications arrondies de source ; les calculs ci-dessus partent explicitement de 0,11 ft³, sans mélanger les arrondis. [Tableau technique](https://www.maxusacorp.com/wp-content/uploads/%E3%80%90%E5%AE%8C%E6%88%90%E7%89%88%E3%80%91_CN890F_5L_c6_250822_MAX.pdf#page=5).

La conclusion est conditionnelle et calculable : une cadence renseignée fournit une demande moyenne de séquence au point publié. En l’absence de cadence, la comparaison reste incomplète. Même lorsqu’elle est connue, le contrôle du circuit et le respect de la notice restent nécessaires pour valider le poste réel.
