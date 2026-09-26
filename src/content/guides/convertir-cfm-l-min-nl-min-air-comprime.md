---
title: "CFM, L/min, Nl/min : convertir un débit d’air sans fausser la comparaison"
seoTitle: "CFM en L/min : conversion, Nl/min et pièges"
description: "Tableau CFM, L/s et m³/h, exemples de conversion et distinction entre air libre, débit normalisé et FAD. Comparez les fiches sans mélanger les conditions."
pubDate: 2026-09-25
updatedDate: 2026-09-26
category: "Comprendre"
audiences: [particulier, professionnel]
metiers: [maintenance-industrielle, garage-automobile]
readingTime: 5
relatedGuides: [debit-restitue-fad-vs-debit-aspire, bar-psi-pression-absolue-relative, consommation-moyenne-en-charge-cle-a-chocs]
sources:
  - https://www.cejn.com/guides-support/toolbox/conversion-tables/
  - https://www.cagi.org/resource-library
  - https://www.atlascopco.com/en-in/compressors/wiki/compressed-air-articles/physics-physicalunits2
---

**Pour convertir des CFM en L/min, multipliez par environ 28,32.** Ce changement d’unité conserve les conditions auxquelles le débit était exprimé. Il ne transforme pas un débit aspiré en débit restitué et ne rend pas automatiquement comparables des litres « normaux » et des litres d’air libre.

Le problème apparaît lors d’un achat : une fiche américaine annonce des CFM, un outil européen des L/s et un pistolet des Nl/min. Avant de les classer, il faut conserver le libellé complet de chaque donnée. Voici une méthode pour faire le calcul tout en gardant ce qui lui donne un sens.

## Tableau de conversion : les opérations qui changent seulement l’unité

Les [tables CEJN](https://www.cejn.com/guides-support/toolbox/conversion-tables/) publient les facteurs de conversion du débit. Les facteurs décimaux ci-dessous sont arrondis lorsque nécessaire ; les relations entre litre, mètre cube, seconde et minute sont exactes.

| Départ | Arrivée | Opération |
| --- | --- | --- |
| CFM | L/min | × 28,32 environ |
| L/min | CFM | ÷ 28,32 environ |
| L/s | L/min | × 60 |
| m³/min | L/min | × 1 000 |
| m³/h | L/min | × 1 000 ÷ 60 |
| L/min | m³/h | × 0,06 |

Exemples purement arithmétiques, **sans référence à un produit** : 5 CFM correspondent à environ 141,6 L/min ; 10 CFM à 283,2 L/min ; 20 CFM à 566,4 L/min. De même, 8 L/s donnent 480 L/min, et 30 m³/h donnent 500 L/min.

Conservez la précision initiale. Un affichage « environ 10 CFM » ne devient pas une mesure précise au centième parce qu’une calculatrice affiche davantage de décimales.

<div class="article-infographic" tabindex="0" role="group" aria-label="Conversion et comparaison des débits">
<svg viewBox="0 0 760 270" role="img" aria-labelledby="unites-title unites-desc" xmlns="http://www.w3.org/2000/svg">
<title id="unites-title">Convertir puis qualifier</title><desc id="unites-desc">Exemple arithmétique : dix CFM deviennent environ 283,2 litres par minute, mais leur régime et leurs conditions de référence restent à vérifier.</desc>
<rect width="760" height="270" rx="20" fill="#eef2e9"/><text x="32" y="42" font-size="22" font-weight="700" fill="#143426">Une conversion ne change pas la nature du débit</text>
<rect x="32" y="78" width="185" height="94" rx="12" fill="#143426"/><text x="124" y="120" text-anchor="middle" font-size="24" fill="white">10 CFM</text><text x="124" y="150" text-anchor="middle" font-size="14" fill="white">exemple fictif</text>
<text x="259" y="130" font-size="22" fill="#143426">× 28,32 ≈</text><rect x="409" y="78" width="315" height="94" rx="12" fill="#d3eb56"/><text x="566" y="130" text-anchor="middle" font-size="25" fill="#143426">283,2 L/min</text>
<text x="32" y="215" font-size="16" fill="#143426">Toujours joindre : régime, pression et conditions de référence.</text><text x="32" y="244" font-size="14" fill="#35473d">Facteur arrondi d’après CEJN. Aucune performance produit n’est déduite.</text>
</svg>
</div>

## Que signifient CFM, ACFM et SCFM ?

**CFM** désigne une unité de débit volumique, en pieds cubes par minute. Le [glossaire CAGI](https://www.cagi.org/resource-library) distingue cette unité des débits rattachés à des conditions : ACFM et SCFM. Pour SCFM, il décrit un débit ramené à des conditions de référence ; son entrée cite notamment la température et l’humidité.

La conséquence pratique est simple : gardez le préfixe. Si le fournisseur annonce un débit en SCFM, votre feuille doit indiquer « équivalent en L/min aux mêmes conditions standard », avec la définition utilisée. Recopier uniquement « L/min » ferait perdre une information nécessaire à une comparaison ultérieure.

Ne présumez pas que tous les catalogues utilisent une convention identique. Une fiche sans conditions de référence appelle une demande de précision, particulièrement lorsque les deux équipements semblent proches de la limite.

## Nl/min : le N n’est pas décoratif

Un débit normalisé exprime un volume rapporté à des conditions de référence. [Atlas Copco explique que ces conditions doivent être identifiées](https://www.atlascopco.com/en-in/compressors/wiki/compressed-air-articles/physics-physicalunits2), notamment température et pression, et peuvent différer suivant le contexte de publication.

Passer de **Nl/s à Nl/min** exige seulement de multiplier par 60, en conservant le N. Passer de **Nl/min à un débit exprimé selon une autre référence** est un autre problème : il faut les deux jeux de conditions et, selon la précision recherchée, le traitement de l’humidité. Ce guide n’applique donc aucun coefficient universel entre Nl/min et L/min.

Pour préparer une comparaison professionnelle, demandez : température de référence, pression **absolue**, air sec ou humide, puis norme ou protocole utilisé. Notre guide [bar, psi, pression absolue et relative](/guides/bar-psi-pression-absolue-relative/) explique pourquoi une pression de service lue au manomètre ne se substitue pas à une pression absolue.

## Le FAD n’est pas une nouvelle unité

Le [FAD](/glossaire/#fad) décrit le débit effectivement délivré, rapporté à des conditions d’air libre identifiées. Il peut être exprimé en L/min, L/s ou CFM. La pression de refoulement à laquelle cette capacité a été déterminée doit également accompagner la valeur.

Une inscription « 300 L/min aspirés » et une inscription « 300 L/min restitués à 7 bar » partagent une unité, mais décrivent deux grandeurs différentes. Aucun changement d’unité ne comble cette différence. Le dossier [débit restitué contre débit aspiré](/guides/debit-restitue-fad-vs-debit-aspire/) traite précisément cette lecture.

Même après normalisation des unités, vérifiez aussi le régime de l’outil : [moyenne et consommation en charge](/guides/consommation-moyenne-en-charge-cle-a-chocs/) ne répondent pas à la même question.

## Une feuille de comparaison qui reste vérifiable

Pour les relevés sur site, le [cas VPFlowScope M Thermal In-line](/guides/debitmetre-air-comprime-diametre-conditions-reference/) montre comment deux paramètres de référence peuvent créer un écart apparent sans changement du débit massique.

Pour chaque ligne de devis, gardez six colonnes : référence exacte, valeur et unité originales, libellé original, conditions, conversion réalisée, source et date. Ajoutez une colonne de conclusion laissée vide tant qu’un élément critique manque.

Exemple de saisie proposé par CompatAir : « Outil A, 8 L/s en charge, pression indiquée dans la notice, conversion × 60, soit 480 L/min en charge ». La ligne du compresseur doit ensuite fournir son propre débit restitué à une pression comparable. Le nombre 480 ne suffit pas à choisir la machine.

Le [calculateur](/calculateur/) permet de poursuivre avec les références de la base et leurs limites documentaires. Il ne faut pas y remplacer un débit absent par le résultat d’une conversion appliquée à une donnée d’une autre nature.

Le guide [buse de sablage : débit selon le diamètre et la pression](/guides/buse-sablage-diametre-pression-debit-compresseur/) applique ces conversions à un tableau Clemco tout en conservant les unités et conditions publiées.

## Sources

- [CEJN, Conversion Tables](https://www.cejn.com/guides-support/toolbox/conversion-tables/) : facteurs d’unité.
- [CAGI, Resource Library, entrées CFM, ACFM, SCFM et FAD](https://www.cagi.org/resource-library) : définitions et conditions.
- [Atlas Copco, Understanding air compressor measurements](https://www.atlascopco.com/en-in/compressors/wiki/compressed-air-articles/physics-physicalunits2) : débits normaux et références de comparaison.

Sources consultées le 25 septembre 2026. Les exemples numériques sont des conversions explicites, sans mesure de matériel.
