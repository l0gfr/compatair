---
title: "Débit contradictoire entre deux catalogues : le cas CFM et m³/min"
seoTitle: "Débit d’outil : repérer une contradiction CFM et m³/min"
description: "Le Cleco 34RAA08AL3 porte 0,96 dans deux éditions avec des unités différentes. Pourquoi suspendre le verdict et demander une confirmation fabricant."
pubDate: 2026-09-26
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
relatedGuides: ["compresseur-reference-erp-nom-commercial", "cle-impulsions-consommation-vide-charge"]
sources: ["https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf", "https://cptmarketing.paperturn-view.com/en-cleco-catalog-sp-1081-online?pid=ODg8808063"]
---

Un chiffre identique peut masquer un changement majeur quand l’unité de sa colonne change. Dans une base de compatibilité, la bonne réaction n’est pas de choisir l’unité qui donne le résultat le plus commode : il faut conserver la contradiction et suspendre la valeur tant qu’elle n’est pas résolue.

La référence **Cleco 34RAA08AL3** fournit un exemple documentaire précis. Dans le [catalogue GI-1250-EU, page PDF 75](https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=75), sa consommation est **0,96** sous une colonne en **m³/min**. Dans le [catalogue SP-1081 en ligne, page 41](https://cptmarketing.paperturn-view.com/en-cleco-catalog-sp-1081-online?pid=ODg8808063), la ligne correspondante porte également **0,96**, mais sous une colonne intitulée **SCFM**.

| Document | Valeur affichée | Unité de la colonne |
| --- | --- | --- |
| GI-1250-EU, page 75 | 0,96 | m³/min |
| SP-1081, page 41 | 0,96 | SCFM |

Ce constat porte sur les documents consultés, pas sur une mesure du produit. Il ne permet pas d’affirmer quelle édition contient l’erreur ni de conclure à une modification physique de l’outil.

## Pourquoi une conversion immédiate serait trompeuse

La première lecture donnerait 960 L/min par conversion de volume. La seconde désigne des pieds cubes standard par minute et ne représente pas ce même débit. Copier seulement « 0,96 » puis appliquer l’unité habituelle du reste du catalogue effacerait le problème.

Il faut aussi distinguer les conditions de référence de l’air et le régime de consommation. Même après clarification de l’unité, il resterait à savoir si la valeur correspond au fonctionnement à vide, en charge, au maximum ou à une moyenne définie.

<div class="article-infographic article-infographic--compact" tabindex="0" role="group" aria-label="Une contradiction doit rester visible">
<svg viewBox="0 0 380 434" role="img" aria-labelledby="unitconflict-title unitconflict-desc" xmlns="http://www.w3.org/2000/svg"><title id="unitconflict-title">Une contradiction doit rester visible</title><desc id="unitconflict-desc">Deux documents: Même référence ; même chiffre ; unités différentes ; Statut de la donnée: Débit non tranché, comparaison technique suspendue ; Preuve attendue: Confirmation fabricant avec unité et conditions</desc><rect width="380" height="434" rx="18" fill="#eef2e9"/><text x="20" y="34" font-size="20" font-weight="700" fill="#143426">Une contradiction doit</text><text x="20" y="60" font-size="20" font-weight="700" fill="#143426">rester visible</text><circle cx="32" cy="107" r="14" fill="#19704f"/><text x="32" y="112" text-anchor="middle" font-size="14" fill="white">1</text><text x="58" y="112" font-size="17" font-weight="700" fill="#143426">Deux documents</text><text x="58" y="135" font-size="15" font-weight="400" fill="#35473d">Même référence ; même chiffre ;</text><text x="58" y="156" font-size="15" font-weight="400" fill="#35473d">unités différentes</text><circle cx="32" cy="199" r="14" fill="#19704f"/><text x="32" y="204" text-anchor="middle" font-size="14" fill="white">2</text><text x="58" y="204" font-size="17" font-weight="700" fill="#143426">Statut de la donnée</text><text x="58" y="227" font-size="15" font-weight="400" fill="#35473d">Débit non tranché, comparaison</text><text x="58" y="248" font-size="15" font-weight="400" fill="#35473d">technique suspendue</text><circle cx="32" cy="291" r="14" fill="#19704f"/><text x="32" y="296" text-anchor="middle" font-size="14" fill="white">3</text><text x="58" y="296" font-size="17" font-weight="700" fill="#143426">Preuve attendue</text><text x="58" y="319" font-size="15" font-weight="400" fill="#35473d">Confirmation fabricant avec unité</text><text x="58" y="340" font-size="15" font-weight="400" fill="#35473d">et conditions</text><text x="20" y="388" font-size="13" font-weight="400" fill="#35473d">Schéma de lecture ; aucune mesure physique</text><text x="20" y="407" font-size="13" font-weight="400" fill="#35473d">CompatAir.</text></svg>
</div>

## La demande utile au fabricant

Transmettez le code exact, les deux éditions et les pages concernées. Demandez la consommation avec son unité, la pression d’essai, le régime de fonctionnement et, si nécessaire, les conditions de référence du volume d’air. Une réponse « le débit du site est correct » reste insuffisante si elle ne désigne pas la valeur et son contexte.

Conservez la réponse datée dans le dossier. Si une correction est obtenue, elle doit expliquer quelle donnée remplace quelle publication, sans faire disparaître l’historique de la divergence.

## La conséquence dans CompatAir

Les références concernées par cette contradiction ont été écartées du présent lot d’import. Aucune conversion silencieuse n’a été utilisée pour leur attribuer un compresseur compatible. Cette absence est plus utile qu’un verdict construit sur une unité incertaine.

Le [guide consommation à vide et en charge](/guides/cle-impulsions-consommation-vide-charge/) traite un autre cas : plusieurs débits peuvent être cohérents quand leurs régimes sont distincts. Il faut donc qualifier la différence avant de la présenter comme une erreur.

Le tableau des [meuleuses Top Cat 520V et 54V](/guides/top-cat-520v-54v-consommation-maximale/) contient un désaccord entre unités à vitesse libre. L’article sépare cette ligne du maximum publié afin de conserver une comparaison exploitable sans corriger une donnée constructeur à sa place.
