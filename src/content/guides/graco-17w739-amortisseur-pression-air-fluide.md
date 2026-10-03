---
title: "Graco 17W739 : pourquoi 21 bar de fluide ne signifie pas 21 bar d’air"
seoTitle: "Graco 17W739 : pression d’air et pression de fluide"
description: "Amortisseur Graco 17W739 : 21 bar de fluide, 7 bar d’air maximal et condition de charge. Lire les deux circuits avant de choisir l’alimentation."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["cuve-peinture-sous-pression-air-produit-agitation", "regulateur-air-comprime-fuit-event-decompression", "fiche-intervention-air-comprime"]
sources: ["https://www.graco.com/content/dam/graco/tech_documents/manuals/3A6/3A6103/3A6103EN-D.pdf", "https://www.graco.com/us/en/in-plant-manufacturing/product/17w739.html"]
---

Le **Graco 17W739** est un amortisseur actif de pulsations de fluide alimenté en air comprimé. Sa pression admissible de fluide et celle de sa charge d’air sont deux caractéristiques différentes. La notice 3A6103D donne **21 bar au maximum côté fluide** et **7 bar au maximum côté charge d’air**. [Technical Specifications](https://www.graco.com/content/dam/graco/tech_documents/manuals/3A6/3A6103/3A6103EN-D.pdf#page=21) ; [Page de la référence 17W739](https://www.graco.com/us/en/in-plant-manufacturing/product/17w739.html).

Commander un compresseur de 21 bar en recopiant la valeur fluide dans la case « pression d’air » serait donc une mauvaise lecture du besoin. La plaque, les deux raccordements et la notice doivent rester associés dans le dossier de l’appareil.

## Relire la condition de charge

Graco indique que l’amortisseur ajuste automatiquement sa charge d’air et qu’un fonctionnement efficace exige une pression d’air d’au moins **un tiers de la pression de fluide**. Cette condition est accompagnée des limites de service de l’appareil. Elle ne donne pas l’autorisation d’augmenter l’air au-delà de 7 bar. [Charge the Suppressor](https://www.graco.com/content/dam/graco/tech_documents/manuals/3A6/3A6103/3A6103EN-D.pdf#page=11).

| Caractéristique | Valeur publiée | Circuit concerné |
|---|---|---|
| Pression maximale de fluide | 21 bar | Ligne de produit |
| Pression maximale de charge d’air | 7 bar | Alimentation de l’amortisseur |
| Condition de fonctionnement efficace | Air au moins égal au tiers de la pression de fluide | Relation des deux circuits |

À **21 bar de fluide**, le tiers vaut **7 bar**, par calcul de 21 ÷ 3. Ce calcul situe la condition documentaire à la limite maximale de charge d’air ; il ne définit pas une marge de réglage pour une installation réelle.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Deux circuits reliés par une membrane" style="margin-bottom:1.5rem">
<svg viewBox="0 0 520 550" font-family="Manrope Variable, Arial, sans-serif" role="img" aria-labelledby="graco-17w739-amortisseur-pression-air-fluide-title graco-17w739-amortisseur-pression-air-fluide-desc" xmlns="http://www.w3.org/2000/svg"><title id="graco-17w739-amortisseur-pression-air-fluide-title">Deux circuits reliés par une membrane</title><desc id="graco-17w739-amortisseur-pression-air-fluide-desc">21 bar de fluide et 7 bar de charge d’air sont les limites de la notice 3A6103D.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="25" y="38" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Deux circuits reliés par une</text><text x="25" y="67" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">membrane</text><rect x="160" y="164" width="211" height="207" rx="70" fill="#244b36" stroke="#d3eb56" stroke-width="2"/><path d="M177 270q38-37 88 0q50 37 88 0" fill="none" stroke="#d3eb56" stroke-width="4"/><text x="188" y="221" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="400">Air ≤ 7 bar</text><text x="174" y="333" fill="#ffffff" font-size="21" text-anchor="start" font-weight="400">Fluide ≤ 21 bar</text><path d="M60 208L160 208" fill="none" stroke="#d3eb56" stroke-width="3"/><path d="M153.0 211.8L160 208L153.0 204.2" fill="none" stroke="#d3eb56" stroke-width="3"/><path d="M60 330L160 330" fill="none" stroke="#ffffff" stroke-width="3"/><path d="M153.0 333.8L160 330L153.0 326.2" fill="none" stroke="#ffffff" stroke-width="3"/><text x="28" y="445" fill="#d3eb56" font-size="21" text-anchor="start" font-weight="400">Condition : air ≥ pression fluide ÷ 3</text><text x="28" y="493" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Au maximum fluide : 21 ÷ 3 = 7 bar</text></svg>
</div>
*21 bar de fluide et 7 bar de charge d’air sont les limites de la notice 3A6103D.*

## Relever la ligne complète

Pour préparer un diagnostic, nous proposons de consigner la pression du produit, la pression d’air disponible à l’amortisseur et les conditions de débit du procédé. Ajouter la pompe, le produit, le flexible et les vannes identifiés permet de traiter la pulsation comme un phénomène de ligne.

La notice donne des débits maximaux recommandés pour les performances de l’amortisseur et indique qu’un dépassement réduit son efficacité. Les débits de produit sont exprimés en volume de liquide par minute. Ils ne représentent pas la consommation d’air comprimé de l’appareil. [Technical Specifications et note de débit](https://www.graco.com/content/dam/graco/tech_documents/manuals/3A6/3A6103/3A6103EN-D.pdf#page=21).

Le guide sur les [circuits d’une cuve de peinture](/guides/cuve-peinture-sous-pression-air-produit-agitation/) complète cette lecture séparée de l’air et du produit. Il ne permet pas de transposer une limite d’une autre cuve au 17W739.

## Une pulsation persistante demande plusieurs contrôles

Le tableau de dépannage Graco associe une réduction insuffisante des pulsations à plusieurs causes : amortisseur sous-dimensionné, temps de commutation de pompe prolongé, membrane rompue ou joint de piston usé. Une observation de pulsation ne suffit donc pas à attribuer le défaut au compresseur. [Troubleshooting](https://www.graco.com/content/dam/graco/tech_documents/manuals/3A6/3A6103/3A6103EN-D.pdf#page=12).

La préparation du diagnostic peut conserver l’état de la pompe, la référence de l’amortisseur et l’historique de maintenance. La dépose ou l’examen interne relève ensuite de la procédure de service, après la décompression documentée. Le contrôle extérieur sert à orienter cette intervention, sans prescrire une réparation à partir d’un symptôme unique.

## Formuler un besoin d’air exploitable

La demande au fournisseur doit distinguer pression de fluide, pression de charge d’air, cycle de fonctionnement et données de consommation disponibles. Si la consommation d’air de la configuration n’est pas connue, demander cette donnée avant un dimensionnement du compresseur. Le maximum de 7 bar ne fournit pas à lui seul un débit restitué nécessaire.

Le verdict documentaire est précis : le 17W739 accepte deux limites de pression différentes et impose une relation de charge. Il reste nécessaire de connaître les conditions de la ligne pour sélectionner son alimentation et de suivre la notice complète pour sa maintenance.

## Sources et méthode

Consultées le **2 octobre 2026**. Analyse documentaire et propositions de relevé par CompatAir, avec assistance d’IA et relecture interne. Aucun essai physique ni validation professionnelle externe.

- [Graco, Active Surge Suppressor 3A6103D](https://www.graco.com/content/dam/graco/tech_documents/manuals/3A6/3A6103/3A6103EN-D.pdf#page=11)
- [Graco, référence 17W739](https://www.graco.com/us/en/in-plant-manufacturing/product/17w739.html)
