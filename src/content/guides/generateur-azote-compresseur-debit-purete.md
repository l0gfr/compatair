---
title: "Générateur d’azote : quel débit de compresseur selon la pureté demandée ?"
seoTitle: "Générateur d’azote : débit d’air et pureté à distinguer"
description: "Le débit d’azote produit ne dimensionne pas le compresseur. Exemple NGP 8+, conditions de référence et données à demander pour une alimentation vérifiable."
pubDate: "2026-09-26"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["compresseur-decoupe-laser-air-azote", "qualite-air-comprime-iso-8573-1", "cout-metre-cube-air-comprime"]
sources: ["https://www.atlascopco.com/content/dam/atlas-copco/local-countries/mexico/compressor-technique/files-and-pdf/NGP%2B8-130%20EN.pdf"]
---

**Pour dimensionner un compresseur alimentant un générateur d’azote, il faut connaître sa consommation d’air à la pureté et au débit d’azote réellement exigés.** Une capacité de production en azote ne constitue pas une consommation d’air comprimé. Cette confusion peut fausser le choix de toute la centrale.

Le bon point de départ est le procédé : pureté requise, débit utile, pression à la machine et durée des appels. Un nom de gamme ou une puissance électrique ne remplace pas ces quatre informations.

## Pourquoi la pureté change la capacité annoncée

La [brochure Atlas Copco NGP+ 8-130, tableau de la page 2](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/mexico/compressor-technique/files-and-pdf/NGP%2B8-130%20EN.pdf) publie plusieurs capacités pour une même référence. Voici trois colonnes de la ligne **NGP 8+**, sans extrapolation vers d’autres modèles.

| Pureté indiquée | Capacité d’azote publiée |
| --- | --- |
| 95 % | 18,2 Nm³/h |
| 99,9 % | 5,7 Nm³/h |
| 99,999 % | 1,9 Nm³/h |

Les conditions annoncées sont une admission à **7 bar(g)**, une température ambiante et d’entrée de **20 °C**, et un air de classe **[1:4:1] selon ISO 8573-1:2010**. La brochure exprime la pureté par **100 % moins la teneur en oxygène** et indique une tolérance de capacité de **±5 %**. Ce sont des conditions documentaires, pas des mesures CompatAir.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Capacité NGP 8+ selon la pureté">
<svg viewBox="0 0 520 390" role="img" aria-labelledby="generateur-azote-compresseur-debit-purete-title generateur-azote-compresseur-debit-purete-desc" xmlns="http://www.w3.org/2000/svg">
<title id="generateur-azote-compresseur-debit-purete-title">Capacité NGP 8+ selon la pureté</title><desc id="generateur-azote-compresseur-debit-purete-desc">Capacités publiées à 7 bar(g) et 20 °C : 18,2 Nm³/h à 95 %, 5,7 à 99,9 %, 1,9 à 99,999 %. Convention et autres conditions précisées dans le texte.</desc>
<rect width="520" height="390" rx="20" fill="#10281e"/>
<text x="28" y="43" fill="#d3eb56" font-size="24" font-weight="700">Azote produit, Nm³/h</text>
<text x="28" y="84" fill="white" font-size="22" font-weight="400">Pureté 95 %</text>
<text x="355" y="84" fill="#d3eb56" font-size="22" font-weight="700">18,2</text>
<rect x="28" y="99" width="464.0" height="25" rx="4" fill="#8abfa3"/>
<text x="28" y="174" fill="white" font-size="22" font-weight="400">Pureté 99,9 %</text>
<text x="355" y="174" fill="#d3eb56" font-size="22" font-weight="700">5,7</text>
<rect x="28" y="189" width="145.32" height="25" rx="4" fill="#8abfa3"/>
<text x="28" y="264" fill="white" font-size="22" font-weight="400">Pureté 99,999 %</text>
<text x="355" y="264" fill="#d3eb56" font-size="22" font-weight="700">1,9</text>
<rect x="28" y="279" width="48.44" height="25" rx="4" fill="#8abfa3"/>
<text x="28" y="366" fill="white" font-size="19" font-weight="400">Source : Atlas Copco NGP+ 8-130</text>

</svg>
</div>

*Capacité d’azote du NGP 8+ selon la pureté. Valeurs de la brochure, conditions détaillées ci-dessus ; il ne s’agit pas de l’air consommé.*

## Attention à la définition du mètre cube dans la fiche

Cette brochure référence ses « Nm³/h » à **20 °C, 1 bar absolu et 0 % d’humidité relative**. Conservez cette convention lorsque vous rapprochez les chiffres d’un autre équipement. Le simple préfixe « N » ne permet pas de supposer ici une référence à 0 °C.

Notre [guide des unités de débit](/guides/convertir-cfm-l-min-nl-min-air-comprime/) explique comment relever les conditions avant conversion. Dans le dossier de consultation, recopiez l’unité et sa note de bas de page sur la même ligne : cela évite de comparer deux valeurs dont les apparences sont identiques et les bases différentes.

## Ce tableau ne donne pas le débit du compresseur

Les trois capacités ci-dessus correspondent au gaz produit. Elles ne fournissent ni consommation d’air d’alimentation ni débit net disponible après votre traitement. Il serait donc incorrect d’acheter un compresseur de 18,2 m³/h à partir de la première ligne.

Demandez au fournisseur une consommation d’air garantie pour le point de fonctionnement retenu, avec sa pression d’entrée et ses conditions de référence. Faites préciser ce qu’elle inclut : régime de production, séquences transitoires et éventuels auxiliaires. Tant que cette réponse manque, le dimensionnement amont reste incomplet.

## Construire le besoin à partir de la machine cliente

Préparez un tableau par usage : gaz accepté, pureté demandée, pression minimale, débit pendant le fonctionnement et cadence. Pour une découpe, le [guide air et azote au laser](/guides/compresseur-decoupe-laser-air-azote/) aide à distinguer l’alimentation de service du gaz du procédé.

Identifiez ensuite les usages simultanés. Un débit moyen journalier peut servir à un bilan, mais il ne décrit pas nécessairement l’appel le plus exigeant. Faites valider les besoins de stockage et la régulation par l’intégrateur, sans inventer une marge unique valable pour toutes les machines.

## Inclure la qualité d’air et la réception

Le fournisseur doit confirmer le traitement nécessaire à son générateur pour vos conditions d’exploitation. La classe citée dans l’exemple appartient à cette brochure ; elle ne devient pas une règle universelle de production d’azote. Le [guide ISO 8573-1](/guides/qualite-air-comprime-iso-8573-1/) aide à lire la spécification.

À la réception, prévoyez les preuves de débit, de pression et de pureté exigées par le procédé, les points de mesure et le comportement en cas d’écart. Demandez une validation des conditions d’installation et des risques liés au gaz par les responsables compétents. Le calcul de débit ne valide pas à lui seul cette installation.

## Comparer le coût sur un volume d’azote accepté

Pour comparer des offres, proposez un même programme de production et une même qualité de gaz en sortie. Faites chiffrer la consommation de l’ensemble : compression, traitement, génération et auxiliaires retenus. Le [coût du mètre cube d’air](/guides/cout-metre-cube-air-comprime/) n’est qu’une composante de ce dossier.

Aucune économie par rapport à une livraison de gaz ne peut être déduite des capacités du tableau seules. Il manque notamment le besoin réel, les consommations garanties et vos conditions commerciales.

## Sources et méthode

Sources consultées le **26 septembre 2026**. Rédaction avec assistance d’IA et relecture éditoriale interne, sans essai physique ni validation professionnelle externe. Les exemples chiffrés explicitement hypothétiques ne sont pas des mesures de terrain.

- [Atlas Copco, NGP+ 8-130, tableau de capacités et conditions de référence](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/mexico/compressor-technique/files-and-pdf/NGP%2B8-130%20EN.pdf)
