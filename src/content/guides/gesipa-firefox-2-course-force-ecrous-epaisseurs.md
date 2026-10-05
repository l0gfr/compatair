---
title: "GESIPA FireFox 2 : choisir la course ou la force selon l’assemblage"
seoTitle: "FireFox 2 : course fixe ou force de pose réglée ?"
description: "Des épaisseurs différentes changent le choix du mode de réglage FireFox 2. La notice distingue course constante et force, puis impose des essais adaptés."
pubDate: "2026-10-05"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["compresseur-pour-riveteuse-pneumatique", "gesipa-firefox-2-ecrou-ne-se-devisse-pas"]
sources: ["https://www.gesipa.co.uk/fileadmin/user_upload/FireFox_2.pdf"]
---

**GESIPA distingue deux modes de réglage du FireFox 2 : une course de pose fixe ou une force adaptée à l’écrou.** Dans la notice, des épaisseurs ou des longueurs d’écrou différentes orientent vers le réglage de force.

Cette distinction évite de traiter tout défaut de sertissage comme un manque de pression. Le réglage de pose doit correspondre à l’assemblage avant de rechercher une nouvelle alimentation.

## Relier le mode au travail réel

La [page PDF 31 de la notice française](https://www.gesipa.co.uk/fileadmin/user_upload/FireFox_2.pdf#page=31) réserve le cas de course constante à des écrous de même taille et de même longueur posés dans une même épaisseur. Elle privilégie la force lorsque ces conditions varient dans les cas qu’elle décrit.

La [page PDF 32](https://www.gesipa.co.uk/fileadmin/user_upload/FireFox_2.pdf#page=32) fournit des valeurs directrices de course et la méthode de réglage de force. Le fabricant précise que la course applicable doit être déterminée par essais sur l’épaisseur réelle, avec un écrou neuf à chaque essai. Un chiffre du tableau n’est donc pas une recette suffisante pour toutes les pièces de même filetage.

<figure class="article-infographic article-infographic--compact">
<svg viewBox="0 0 520 350" role="img" aria-labelledby="gesipa-firefox-2-course-force-ecrous-epaisseurs-title gesipa-firefox-2-course-force-ecrous-epaisseurs-desc" xmlns="http://www.w3.org/2000/svg">
<title id="gesipa-firefox-2-course-force-ecrous-epaisseurs-title">GESIPA FireFox 2 : choisir la course ou la force selon l’assemblage</title><desc id="gesipa-firefox-2-course-force-ecrous-epaisseurs-desc">Repères du document constructeur ; voir les conditions et limites dans le texte.</desc><rect width="520" height="350" rx="20" fill="#10281e"/><rect x="24" y="24" width="472" height="138" rx="12" fill="#203f31"/><text x="44" y="58" fill="#d3eb56" font-size="22" font-weight="700">Course fixe</text><text x="44" y="98" fill="white" font-size="21">Écrou et épaisseur constants</text><text x="44" y="136" fill="#8abfa3" font-size="18">Cas décrit dans la notice FireFox 2</text><rect x="24" y="180" width="472" height="138" rx="12" fill="#203f31"/><text x="44" y="214" fill="#d3eb56" font-size="22" font-weight="700">Force de pose</text><text x="44" y="254" fill="white" font-size="21">Épaisseurs ou longueurs différentes</text><text x="44" y="292" fill="#8abfa3" font-size="18">Mode privilégié dans ces cas par GESIPA</text></svg>
<figcaption>Conditions du document consulté ; les repères de diagnostic sont proposés par CompatAir.</figcaption>
</figure>


## Décrire les variations avant le réglage

Deux écrous M6 ne constituent pas forcément le même cas de réglage. Comparez leur référence, leur matériau et leur longueur, puis l’épaisseur serrée. C’est cette variation que la notice utilise pour départager course constante et force de pose.

| Variation dans le travail | Question à résoudre |
| --- | --- |
| Même écrou, même épaisseur | La course constante correspond-elle au cas de la notice ? |
| Même filetage, plusieurs épaisseurs | Quel réglage de force et quel essai retenir ? |
| Plusieurs longueurs d’écrou | La référence et la configuration sont-elles identifiées ? |
| Nouveau matériau | Quelle prescription de l’écrou et quel contrôle de pose ? |

Pour chaque écrou et chaque épaisseur réellement utilisés, le réglage doit suivre la séquence de la notice et ses essais. Réutiliser un écrou déjà déformé ferait perdre la condition « écrou neuf à chaque essai » imposée par GESIPA.

## Garder l’alimentation dans son domaine

La [table de caractéristiques, page PDF 29](https://www.gesipa.co.uk/fileadmin/user_upload/FireFox_2.pdf#page=29), donne une pression de service **5 à 7 bar** et une consommation d’environ **2 à 4 litres par opération de pose**, selon la taille des écrous. Cette quantité est publiée par opération ; elle ne constitue pas un débit de 2 à 4 L/min.

La ligne ne précise pas dans ce passage les conditions de référence du volume. Nous ne la transformons pas en demande normalisée de compresseur. Pour dimensionner une cadence, il faut conserver cette réserve et demander les conditions manquantes si nécessaire.

Le [guide du compresseur pour riveteuse](/guides/compresseur-pour-riveteuse-pneumatique/) complète le bilan. La pression correcte est nécessaire au fonctionnement, mais elle ne choisit pas le mode de pose à la place des caractéristiques de l’assemblage.

## Contrôler le résultat de pose

Les essais prévus doivent porter sur les références et épaisseurs réelles, avec des critères validés pour le projet. Conservez le mode choisi et les réglages dans le compte rendu. Le simple fait que l’outil termine son cycle ne prouve pas la qualité de l’assemblage.

Si le mandrin ne se dévisse pas correctement après pose, le [guide consacré à ce défaut](/guides/gesipa-firefox-2-ecrou-ne-se-devisse-pas/) distingue notamment la séquence de commande et une déformation du filetage. Augmenter la pression sans identifier le symptôme ne constitue pas un diagnostic.

## Rendre le changement de série visible

Au passage d’une pièce à une autre, comparez d’abord l’épaisseur et la référence de l’écrou. Si l’une change, le réglage retenu pour la série précédente doit être réexaminé. Notez séparément le mode course ou force, puis le résultat des essais sur la nouvelle pièce.

Cette vérification répond au risque précis du FireFox 2 : garder une course constante alors que l’assemblage ne l’est plus. La pression de 5 à 7 bar reste une condition d’alimentation ; elle ne corrige pas ce choix de mode.

## Sources et contrôle

Documents consultés le **5 octobre 2026**. Les propositions de relevé et de réception sont celles de CompatAir. Rédaction avec assistance d’IA et contrôle interne, sans essai physique ni validation professionnelle externe.
