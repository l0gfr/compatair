---
title: "Surpresseur pneumatique Festo DPA : doubler la pression, mais à quel débit ?"
seoTitle: "Surpresseur Festo DPA : pression, débit et consommation"
description: "Festo DPA : ce que signifie le doublement de pression, différence entre débit entrant et sortant, usage intermittent et décompression du circuit."
pubDate: 2026-09-26
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
featured: false
reviewStatus: "internal"
relatedGuides: ["stockage-primaire-secondaire-air-comprime", "bar-psi-pression-absolue-relative", "groupe-frl-filtre-regulateur-lubrificateur"]
sources:
  - https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Documentation/2026/EN/DPA_EN.PDF
  - https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Documentation/2026/EN/PRESSURE-BOOSTER-ADD_EN.PDF
updatedDate: 2026-09-26
---

**Un surpresseur pneumatique peut répondre à un besoin local de pression supérieure, mais il ne crée pas gratuitement du débit.** Pour la gamme DPA, Festo décrit un fonctionnement à double piston alimenté par l’air comprimé du réseau, avec une pression de sortie pouvant atteindre deux fois celle d’entrée. Le débit disponible dépend du point de fonctionnement et de la variante. [DPA, documentation du 26 mai 2026](https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Documentation/2026/EN/DPA_EN.PDF).

## Doubler la pression ne signifie pas doubler le débit

La documentation trace séparément le débit entrant `q(in)` et le débit sortant `q(out)`, selon la pression de sortie et la pression d’entrée. Ces courbes utilisent des litres normalisés par minute. Le débit prélevé au réseau doit donc être distingué de celui livré à l’application.

Festo précise que les courbes présentées sont théoriques, sans pertes de commutation ni frottement. Nous ne lisons pas une valeur approximative sur un graphique pour la transformer en performance garantie. Le devis doit identifier la taille du DPA, la variante et le point de fonctionnement retenu, puis faire confirmer le résultat par le fournisseur.

<div class="article-infographic" tabindex="0" role="group" aria-label="Deux débits dans le même circuit">
<svg viewBox="0 0 680 404" role="img" aria-labelledby="surpresseur-title surpresseur-desc" xmlns="http://www.w3.org/2000/svg">
<title id="surpresseur-title">Deux débits dans le même circuit</title><desc id="surpresseur-desc">Réseau amont : Fournit q(in) au surpresseur. Surpresseur pneumatique : Utilise l’air pour produire une pression supérieure. Application aval : Reçoit q(out), au point de pression demandé. q(in) et q(out) doivent rester deux lignes du devis.</desc>
<rect width="680" height="404" rx="20" fill="#10281e"/><text x="28" y="43" fill="#d3eb56" font-size="25" font-weight="700">Deux débits dans le même circuit</text>
<rect x="24" y="70" width="632" height="73" rx="10" fill="#203f31"/><text x="40" y="98" fill="#d3eb56" font-size="22" font-weight="700">Réseau amont</text><text x="40" y="126" fill="white" font-size="20">Fournit q(in) au surpresseur.</text>
<rect x="24" y="158" width="632" height="73" rx="10" fill="#203f31"/><text x="40" y="186" fill="#d3eb56" font-size="22" font-weight="700">Surpresseur pneumatique</text><text x="40" y="214" fill="white" font-size="20">Utilise l’air pour produire une pression supérieure.</text>
<rect x="24" y="246" width="632" height="73" rx="10" fill="#203f31"/><text x="40" y="274" fill="#d3eb56" font-size="22" font-weight="700">Application aval</text><text x="40" y="302" fill="white" font-size="20">Reçoit q(out), au point de pression demandé.</text>
<text x="28" y="379" fill="white" font-size="19">q(in) et q(out) doivent rester deux lignes du devis.</text>
</svg>
</div>

## Pourquoi « 6 bar vers 12 bar » ne qualifie pas un poste

`6 × 2 = 12` illustre seulement le rapport maximal annoncé. Cette multiplication ne promet pas 12 bar à n’importe quel débit et ne valide aucune variante particulière. Les limites d’entrée et de sortie, le réglage et la courbe de débit doivent tous être compatibles avec la référence retenue.

Pour formuler le besoin, nous proposons de décrire la pression minimale à l’application, le volume d’air par action s’il est documenté, la cadence et les chevauchements possibles. Si seul un débit instantané est connu, gardez-le comme tel. Ne le convertissez pas en consommation par cycle sans durée de fonctionnement vérifiée.

Le [guide des unités de débit](/guides/convertir-cfm-l-min-nl-min-air-comprime/) aide à conserver une base commune entre demande, courbe du DPA et production du compresseur.

## Un appareil pour des besoins intermittents

Festo réserve ces surpresseurs au prélèvement occasionnel d’air sous pression et indique qu’ils ne remplacent pas un compresseur pour un fonctionnement continu sans pauses, qui accroît l’usure. Les [notes d’application d’avril 2026](https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Documentation/2026/EN/PRESSURE-BOOSTER-ADD_EN.PDF) décrivent aussi l’association à un réservoir aval pour limiter les fluctuations.

Pour un poste qui demande de l’air en continu, il faut donc étudier une solution dont ce régime est documenté. Pour un poste intermittent, le réservoir et sa recharge doivent être dimensionnés ensemble. Une réserve vide au mauvais moment ne se juge pas seulement sur sa contenance nominale.

Nous proposons de demander un chronogramme simple au fournisseur : début de séquence, demande de l’application, pression minimale pendant l’action et récupération avant la suivante. Ce document fait apparaître la question à laquelle la seule mention « doubleur de pression » ne répond pas.

## Ne pas augmenter tout le réseau sans comparer les solutions

Un besoin local peut conduire à étudier plusieurs architectures : adaptation du procédé, alimentation dédiée ou surpresseur. Ce guide ne présume pas laquelle est la moins coûteuse. Pour les comparer, il faut décrire le même service et inclure l’air consommé par la solution, son régime et sa maintenance.

Demandez des données vérifiables plutôt qu’un pourcentage d’économie universel. Dans un devis de DPA, le débit entrant est une charge supplémentaire pour le réseau ; l’absence de moteur électrique sur le surpresseur ne supprime pas le coût de production de l’air qui l’alimente. Cette conclusion découle de son alimentation pneumatique, sans chiffrage de rendement ajouté par CompatAir.

## L’aval doit pouvoir être dépressurisé

Les notes Festo décrivent des clapets anti-retour et des dispositifs distincts pour la mise à l’échappement côté sortie. Pour les versions sans régulateur, elles demandent une mise à l’échappement externe. Couper uniquement l’arrivée ne constitue donc pas la preuve que toute la partie aval est à pression nulle.

Faites définir le schéma, les organes de protection et la procédure de mise en sécurité par l’intégrateur, selon la variante et le réservoir. Ce guide n’est pas un plan de montage. La pression admissible doit être vérifiée pour chaque équipement situé dans la partie surpressée, y compris les composants ajoutés lors d’une modification.

## Réception : les preuves à conserver

Nous proposons de conserver la référence complète, la version du document, les pressions d’entrée et de sortie prévues, les deux débits, le cycle et le schéma validé. À la réception, confrontez le fonctionnement réel au scénario convenu et consignez les écarts.

Si le débit aval garanti ou le temps de recharge restent inconnus, une pression atteinte à l’arrêt ne valide pas la production. Le [guide du stockage secondaire](/guides/stockage-primaire-secondaire-air-comprime/) complète cette analyse. Ne confondez pas ce surpresseur avec un [amplificateur d’air par entraînement](/guides/amplificateur-air-exair-consommation-debit/) : ce dernier augmente le volume du jet en mélangeant de l’air ambiant, selon un autre principe.

Pour un mouvement angulaire limité, le [guide des vérins rotatifs](/guides/verin-rotatif-pneumatique-couple-angle-inertie/) relie le couple, l’angle et le dossier d’inertie de la charge.

## Sources et périmètre

Sources consultées le **26 septembre 2026**. Analyse documentaire interne : CompatAir n’a pas réalisé d’essai physique de ces équipements. Les scénarios et calculs pédagogiques sont distingués des caractéristiques publiées.

- [Festo, Pressure booster DPA, édition du 26 mai 2026](https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Documentation/2026/EN/DPA_EN.PDF)
- [Festo, Application notes pressure booster, avril 2026](https://ftp.festo.com/Public/PNEUMATIC/SOFTWARE_SERVICE/Documentation/2026/EN/PRESSURE-BOOSTER-ADD_EN.PDF)
