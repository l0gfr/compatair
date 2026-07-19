---
title: "Atelier poids lourds à plusieurs baies : mesurer la simultanéité avant de dimensionner"
seoTitle: "Atelier PL multi-baies : simultanéité de l’air"
description: "Méthode de relevé et de calcul pour dimensionner plusieurs baies poids lourds sans sommer tout l’inventaire ni minorer les pointes réelles."
pubDate: 2026-07-19
category: "Installer"
audiences: [professionnel]
metiers: [atelier-poids-lourds]
readingTime: 16
featured: true
relatedCalculatorTool: chicago-pneumatic-cp5000
sources:
  - https://tools.cp.com/tr-tr/products/impactwrenches/cp5000-skuT024585
  - https://tools.cp.com/en-us/products/impactwrenches/cp7776-sku8941077760
  - https://www.energy.gov/cmei/ito/compressed-air-systems
  - https://www.energy.gov/sites/prod/files/2014/05/f16/compressed_air_sourcebook.pdf
  - https://www.inrs.fr/dms/inrs/CataloguePapier/ED/TI-ED-6282/ed6282.pdf
---

Dimensionner un atelier multi-baies en additionnant tous les outils donne souvent un projet surdimensionné. Appliquer un coefficient de simultanéité générique peut produire l’erreur inverse. La méthode défendable consiste à relever les usages, conserver les pointes plausibles et tester les états qui engagent réellement la production.

## Réponse directe

Construisez une matrice dont les lignes sont les consommateurs exacts et les colonnes des scénarios de travail. Pour chaque case, indiquez **actif**, **inactif** ou **indéterminé**. Sommez uniquement les débits en charge des outils actifs dans le scénario, puis ajoutez les demandes variables calculables et les fuites mesurées.

Une étude multi-baies doit publier au moins :

- le scénario courant ;
- la pointe courte plausible ;
- le scénario de reprise après pause ou changement d’équipe ;
- le scénario dégradé avec une production indisponible, si la continuité est critique ;
- les cas non calculables faute de volume, de cadence ou de données FAD.

<div class="article-infographic" tabindex="0" role="group" aria-label="Infographie technique défilable horizontalement sur petit écran">
<svg viewBox="0 0 760 390" role="img" aria-labelledby="multi-bay-title multi-bay-desc" xmlns="http://www.w3.org/2000/svg" style="display:block;margin-bottom:1.5rem">
  <title id="multi-bay-title">Matrice de simultanéité de trois baies poids lourds</title><desc id="multi-bay-desc">Trois scénarios illustratifs activent différents outils. Les cellules ne représentent pas des observations réelles et doivent être remplacées par le relevé de l’atelier.</desc>
  <rect width="760" height="390" rx="22" fill="#eef2e9"/><text x="38" y="45" fill="#143426" font-size="22" font-weight="700">Scénarios, pas coefficient universel</text>
  <text x="256" y="92" fill="#19704f" font-size="13" font-weight="700">COURANT</text><text x="404" y="92" fill="#b45f2f" font-size="13" font-weight="700">POINTE</text><text x="548" y="92" fill="#143426" font-size="13" font-weight="700">REPRISE</text>
  <text x="38" y="143" fill="#143426" font-size="14" font-weight="700">Baie 1, clé 1 pouce</text><rect x="260" y="119" width="58" height="34" rx="8" fill="#19704f"/><text x="282" y="142" fill="white" font-size="13" font-weight="700">actif</text><rect x="408" y="119" width="58" height="34" rx="8" fill="#19704f"/><text x="430" y="142" fill="white" font-size="13" font-weight="700">actif</text><rect x="552" y="119" width="58" height="34" rx="8" fill="#d3eb56"/><text x="570" y="142" fill="#143426" font-size="13" font-weight="700">non</text>
  <text x="38" y="205" fill="#143426" font-size="14" font-weight="700">Baie 2, clé 1 pouce</text><rect x="260" y="181" width="58" height="34" rx="8" fill="#d3eb56"/><text x="278" y="204" fill="#143426" font-size="13" font-weight="700">non</text><rect x="408" y="181" width="58" height="34" rx="8" fill="#19704f"/><text x="430" y="204" fill="white" font-size="13" font-weight="700">actif</text><rect x="552" y="181" width="58" height="34" rx="8" fill="#19704f"/><text x="574" y="204" fill="white" font-size="13" font-weight="700">actif</text>
  <text x="38" y="267" fill="#143426" font-size="14" font-weight="700">Baie 3, gonflage</text><rect x="260" y="243" width="58" height="34" rx="8" fill="#d3eb56"/><text x="278" y="266" fill="#143426" font-size="13" font-weight="700">non</text><rect x="408" y="243" width="58" height="34" rx="8" fill="#d4834b"/><text x="419" y="266" fill="white" font-size="13" font-weight="700">à saisir</text><rect x="552" y="243" width="58" height="34" rx="8" fill="#d4834b"/><text x="563" y="266" fill="white" font-size="13" font-weight="700">à saisir</text>
  <path d="M38 316h684" stroke="#b8c5bc" stroke-width="2"/><text x="38" y="352" fill="#56685e" font-size="13">Illustration méthodologique. Remplacer chaque état par une observation datée.</text>
</svg>
</div>

## Inventorier par référence, pas par famille

La [CP5000](https://tools.cp.com/tr-tr/products/impactwrenches/cp5000-skuT024585) publie 25 L/s en charge à 6,3 bar, soit 1 500 L/min. La [CP7776](https://tools.cp.com/en-us/products/impactwrenches/cp7776-sku8941077760) publie 15 L/s sur sa page métrique, soit 900 L/min dans cette présentation, avec 13 mm sur 5 m.

Deux lignes « clé 1 pouce » ne suffisent donc pas. Enregistrez marque, modèle, MPN, débit qualifié, pression et passage recommandé. Faites de même pour les gonfleurs, soufflets, ponceuses, lève-essieux ou tout auxiliaire raccordé au réseau.

Un outil dont la consommation est absente reste indéterminé. Ne lui attribuez pas une moyenne de catégorie pour boucler le tableur.

## Observer avant de choisir un coefficient

Sur une période représentative, relevez l’heure de début et de fin de chaque phase consommatrice. Une précision à la seconde n’est pas toujours nécessaire, mais les chevauchements doivent être visibles.

Pour chaque baie, consignez :

- référence de l’outil ;
- durée cumulée sous charge ;
- plus longue rafale ;
- heure des chevauchements ;
- pression locale pendant la phase ;
- état de commande de la production ;
- incident ou attente attribuable à l’air.

Le résultat n’est pas un coefficient abstrait. C’est un ensemble de scénarios rejouables et datés.

## Construire le scénario courant

Le scénario courant décrit une période fréquente, pas une moyenne annuelle. Activez les outils réellement simultanés et utilisez leur demande en charge. Pour un outil par action, ajoutez sa cadence observée. Pour un gonflage, utilisez le volume, les pressions initiale et cible et le temps visé.

Si une donnée manque, publiez l’état `insufficient_data`. Le reste du scénario peut être calculé, mais la capacité totale n’est pas démontrée.

## Construire la pointe plausible

La pointe plausible doit correspondre à une organisation autorisée : deux baies qui déposent des roues en même temps, un gonflage lancé pendant un serrage ou une soufflette utilisée pendant une phase de maintenance.

N’inventez pas une simultanéité impossible pour gonfler le projet. Ne l’écartez pas non plus parce qu’elle est rare si son occurrence bloque l’atelier. La décision peut être technique ou organisationnelle : augmenter la capacité, séquencer les usages ou réserver certains postes.

Le [calculateur CompatAir](/calculateur/#scenario=poids-lourds-cp5000) permet d’ajouter plusieurs outils et d’activer l’utilisation simultanée. Dupliquez le scénario avant de comparer une autre organisation, afin de conserver les hypothèses.

## Séparer production, stockage et distribution

La production doit couvrir le débit durable attendu. Le stockage amortit certaines pointes selon sa plage de pression et la durée. La distribution doit transporter le débit sans consommer la pression nécessaire aux outils.

Une grande cuve ne compense pas durablement un manque de FAD. Un compresseur suffisamment dimensionné ne corrige pas un coupleur restrictif. Un réseau généreux ne résout pas une stratégie de commande incohérente entre plusieurs machines.

Le programme du département américain de l’Énergie sur les [systèmes d’air comprimé](https://www.energy.gov/cmei/ito/compressed-air-systems) encourage une lecture système intégrant demande, fuites, stockage, commande et maintenance. Son [sourcebook](https://www.energy.gov/sites/prod/files/2014/05/f16/compressed_air_sourcebook.pdf) fournit une méthode générale. Utilisez ces documents pour structurer l’audit, puis revenez aux données des équipements exacts.

## Ajouter les fuites mesurées

Une fuite n’est pas une marge de confort. Elle constitue une demande mesurée qui doit être corrigée, suivie et, tant qu’elle existe, intégrée au bilan. Évitez les pourcentages génériques si l’atelier peut mesurer un débit ou un temps de charge à l’arrêt.

Conservez la date, la méthode et l’état de production de chaque mesure. Après réparation, refaites le relevé et mettez le scénario à jour.

## Préparer un mode dégradé

Si plusieurs compresseurs partagent le réseau, testez la disponibilité réellement exigée. Le fonctionnement avec une machine indisponible peut devenir un scénario séparé. La conclusion peut être « service réduit » plutôt que « compatible », avec les baies ou usages maintenus clairement identifiés.

Ne supposez pas qu’une séquence de commande ou qu’une redondance est opérationnelle parce qu’elle apparaît sur un schéma. Une recette doit provoquer les états de bascule prévus dans un cadre maîtrisé.

## Réceptionner avec les équipes

Rejouez le scénario courant puis la pointe convenue. Mesurez la pression aux baies, enregistrez les états de commande, le temps de récupération et tout écart de cadence. Le guide [INRS ED 6282](https://www.inrs.fr/dms/inrs/CataloguePapier/ED/TI-ED-6282/ed6282.pdf) rappelle l’importance d’intégrer les conditions réelles d’utilisation des machines portatives à la prévention.

La feuille finale doit distinguer capacité pneumatique, organisation du travail, disponibilité et prévention. Elle donne à l’atelier un plan d’action, pas seulement une puissance installée.

## Tableau de décision

| Scénario | Demande calculée | Données manquantes | Pression mesurée | Décision |
| --- | ---: | --- | ---: | --- |
| Courant | à calculer | liste explicite | au point critique | accepté ou à corriger |
| Pointe | à calculer | liste explicite | dans chaque baie active | accepté, séquencé ou refusé |
| Reprise | à calculer | liste explicite | pendant la relance | capacité et délai |
| Dégradé | à calculer | liste explicite | production réduite | services maintenus |

Cette matrice reste valable lorsque l’atelier ajoute une baie : il suffit de modifier les références, les états actifs et les mesures, sans réinventer une règle de simultanéité.
