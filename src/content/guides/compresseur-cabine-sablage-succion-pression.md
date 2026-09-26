---
title: "Cabine de sablage à succion ou à pression : quel débit demander au compresseur ?"
seoTitle: "Cabine de sablage : débit en succion ou sous pression"
description: "Le diamètre de sortie ne suffit pas à comparer deux cabines. Lisez le couple jet d’air et buse, la pression et les auxiliaires avant de choisir le compresseur."
pubDate: "2026-09-26"
category: "Choisir"
audiences: ["particulier", "professionnel"]
metiers: ["garage-automobile", "maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["buse-sablage-diametre-pression-debit-compresseur", "sableuse-perd-puissance-abrasif-humide-diagnostic", "compresseur-pour-sablage-pneumatique"]
sources: ["https://www.clemcoindustries.com/s/30421m.pdf", "https://www.clemcoindustries.com/s/30422BM-PULSAR-PLUS-III-P-VI-P-Rev-C.pdf"]
---

**Une cabine de sablage ne se dimensionne pas à partir de son volume intérieur.** Le besoin en air dépend du système de projection, de sa configuration et de la pression de fonctionnement. Sur une cabine à succion, il faut notamment identifier le jet d’air situé dans le pistolet, pas seulement sa buse de sortie.

Avant d’acheter un compresseur, relevez la référence complète de la cabine, celle du pistolet et les organes montés. Une photographie de l’extérieur ne permet pas toujours de distinguer les variantes.

## Deux architectures à identifier sur la notice

La [notice Clemco Pulsar Plus III-S/VI-S](https://www.clemcoindustries.com/s/30421m.pdf) décrit une projection à succion avec pistolet et jet d’air. La [notice III-P/VI-P](https://www.clemcoindustries.com/s/30422BM-PULSAR-PLUS-III-P-VI-P-Rev-C.pdf) décrit une machine qui met sous pression son réservoir d’abrasif. Le circuit à lire et les données de consommation à demander diffèrent donc.

N’appliquez pas un tableau de buse de sableuse sous pression au seul diamètre de sortie d’un pistolet à succion. Demandez le tableau de la variante réelle, puis vérifiez que les pièces installées correspondent à cette variante.

## Un exemple où le diamètre de sortie est identique

Dans le tableau de consommation du pistolet BNP de la notice à succion, deux configurations utilisent une buse de **5/16 pouce**. À **80 psi**, les débits publiés diffèrent :

| Jet d’air | Buse de sortie | Débit à 80 psi |
| --- | --- | --- |
| 1/8 pouce | 5/16 pouce | 21 cfm |
| 5/32 pouce | 5/16 pouce | 32 cfm |

Ces chiffres appartiennent à la [section 1.12 de la notice 30421](https://www.clemcoindustries.com/s/30421m.pdf). Ils ne définissent pas toutes les cabines à succion. Nous conservons les unités de la source ; aucune assimilation automatique à un débit FAD certifié de compresseur n’est faite.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Deux jets, une même buse de sortie">
<svg viewBox="0 0 520 390" role="img" aria-labelledby="compresseur-cabine-sablage-succion-pression-title compresseur-cabine-sablage-succion-pression-desc" xmlns="http://www.w3.org/2000/svg">
<title id="compresseur-cabine-sablage-succion-pression-title">Deux jets, une même buse de sortie</title><desc id="compresseur-cabine-sablage-succion-pression-desc">Pistolet BNP : à 80 psi, un jet de 1/8 pouce utilise 21 cfm et un jet de 5/32 pouce 32 cfm, avec une buse de sortie de 5/16 pouce dans les deux cas.</desc>
<rect width="520" height="390" rx="20" fill="#10281e"/>
<text x="28" y="43" fill="#d3eb56" font-size="24" font-weight="700">Pistolet BNP à 80 psi</text>
<text x="28" y="84" fill="white" font-size="22" font-weight="400">Jet 1/8 pouce</text>
<text x="355" y="84" fill="#d3eb56" font-size="22" font-weight="700">21 cfm</text>
<rect x="28" y="99" width="304.5" height="25" rx="4" fill="#8abfa3"/>
<text x="28" y="174" fill="white" font-size="22" font-weight="400">Jet 5/32 pouce</text>
<text x="355" y="174" fill="#d3eb56" font-size="22" font-weight="700">32 cfm</text>
<rect x="28" y="189" width="464.0" height="25" rx="4" fill="#8abfa3"/>
<text x="28" y="366" fill="white" font-size="19" font-weight="400">Source : Clemco 30421, figure 4</text>
<text x="28" y="305" fill="white" font-size="21" font-weight="400">Buse de sortie : 5/16 dans les deux cas</text>

</svg>
</div>

*Comparaison de deux lignes du tableau Clemco. La buse de sortie identique ne signifie pas une consommation identique.*

## Comparer la demande et l’offre sur la même base

Demandez au fournisseur la pression à tenir au point prescrit et la convention du débit consommé. Face à cette demande, retenez un [débit restitué documenté](/guides/debit-restitue-fad-vs-debit-aspire/) du compresseur, accompagné de ses conditions. Si une base de comparaison manque, faites-la confirmer avant de conclure.

Le [guide CFM, L/min et NL/min](/guides/convertir-cfm-l-min-nl-min-air-comprime/) explique pourquoi une multiplication d’unités ne suffit pas toujours. La pression maximale inscrite sur la cuve ne constitue pas davantage une preuve de débit pendant la projection.

## Demander ce qui fonctionne en même temps

La notice de la variante à pression décrit aussi le décolmatage du dépoussiéreur par impulsions d’air. Cela justifie une question précise au fournisseur : le besoin annoncé inclut-il ces fonctions, et dans quelles conditions ? Il ne faut pas ajouter leur consommation arbitrairement si elle est déjà comprise.

Préparez un bilan indiquant projection, décolmatage et autres postes simultanés réellement présents. Le [guide des usages simultanés](/guides/utiliser-plusieurs-outils-pneumatiques/) aide à organiser ce relevé. Pour une cabine utilisée durablement, faites aussi vérifier le régime admissible du compresseur choisi.

## Ne pas confondre problème d’air et problème d’abrasif

Une baisse d’efficacité n’appelle pas automatiquement une hausse de pression ou un compresseur plus gros. Consignez la pression pendant le travail, le comportement du mélange et l’état de l’abrasif avant d’orienter le diagnostic. Le [guide de perte de puissance au sablage](/guides/sableuse-perd-puissance-abrasif-humide-diagnostic/) distingue ces observations.

Notre proposition de réception consiste à utiliser la configuration réelle, l’abrasif prévu et une pièce représentative, selon les règles de sécurité de l’installation. Faites noter les réglages et les critères d’acceptation. Un fonctionnement à vide ne démontre pas le résultat sur pièce.

## Les documents qui rendent le choix vérifiable

Conservez la notice datée, les références du jet et de la buse, le tableau de consommation, les exigences d’air et le bilan des auxiliaires. En cas de remplacement de pistolet, reprenez cette comparaison : la cabine peut conserver son nom alors que son besoin a changé.

Le [guide général du sablage](/guides/compresseur-pour-sablage-pneumatique/) sert ensuite à replacer ce poste dans l’atelier. Il ne remplace pas les prescriptions de la variante installée.

## Sources et méthode

Sources consultées le **26 septembre 2026**. Rédaction avec assistance d’IA et relecture éditoriale interne, sans essai physique ni validation professionnelle externe. Les exemples chiffrés explicitement hypothétiques ne sont pas des mesures de terrain.

- [Clemco, Pulsar Plus III-S/VI-S, notice 30421, tableau section 1.12](https://www.clemcoindustries.com/s/30421m.pdf)
- [Clemco, Pulsar Plus III-P/VI-P, notice 30422, fonctionnement et alimentation](https://www.clemcoindustries.com/s/30422BM-PULSAR-PLUS-III-P-VI-P-Rev-C.pdf)
