---
title: "VA 500 affiche un petit débit à l’arrêt : peut-on simplement refaire le zéro ?"
seoTitle: "VA 500 : réglage du zéro sous pression sans débit"
description: "La notice exige une pression appliquée et une absence de débit. Établissez ces conditions avant de corriger le zéro ; une fuite réelle ne doit pas disparaître."
pubDate: "2026-10-07"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["detecter-mesurer-fuites-air-comprime", "debitmetre-air-comprime-diametre-conditions-reference", "smc-ams-zero-debit-petites-fuites-f14"]
sources: ["https://www.cs-instruments.com/cs-data/Bedienungsanleitungen/Instruction%20manuals_EN_new/Instruction_manual_VA500_EN.pdf"]
---

Le débitmètre indique une petite consommation alors que la production est arrêtée. Deux situations restent possibles : de l’air circule réellement, ou la mesure présente un décalage. Refaire le zéro avant de les distinguer peut faire disparaître une consommation du relevé sans réparer sa cause.

La [notice CS Instruments VA 500 V2.02, §8.1.1 page 29](https://www.cs-instruments.com/cs-data/Bedienungsanleitungen/Instruction%20manuals_EN_new/Instruction_manual_VA500_EN.pdf#page=29) prescrit un réglage dans des conditions stables, **avec la pression du système appliquée et sans débit**. Elle réserve les ajustements de paramètres à du personnel qualifié connaissant le système et les gaz suivis. Une simple pause de production n’établit pas à elle seule l’absence de circulation dans la conduite mesurée.

## Que veut dire « à l’arrêt » sur ce réseau ?

Inventoriez les appareils restés alimentés : purgeurs, usages permanents, maintien d’un procédé ou branches ouvertes. Relevez aussi les commandes dont l’arrêt électrique ne coupe pas l’air. Cette liste évite de traiter toute demande résiduelle comme un défaut du capteur.

Le [guide de mesure des fuites](/guides/detecter-mesurer-fuites-air-comprime/) aide à organiser cette recherche. Le zéro métrologique et la détection d’une fuite sont deux opérations différentes. Une fuite repérée appelle une correction du réseau ; elle ne devient pas acceptable après une modification d’affichage.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Un zéro demande deux conditions" style="margin-bottom:1.75rem">
<svg viewBox="0 0 520 550" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="cs-va500-zero-debit-pression-calibrage-title cs-va500-zero-debit-pression-calibrage-desc" font-family="Manrope Variable, Arial, sans-serif"><title id="cs-va500-zero-debit-pression-calibrage-title">Un zéro demande deux conditions</title><desc id="cs-va500-zero-debit-pression-calibrage-desc">La notice V2.02 exige pression de service et absence de circulation pour le réglage du zéro. Masquer une consommation réelle ne constitue pas un réglage correct.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="28" y="42" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Un zéro demande deux conditions</text><rect x="28" y="90" width="464" height="180" rx="12" fill="#244b36"/><text x="45" y="126" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Condition attendue pour le réglage</text><text x="45" y="164" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Pression du système appliquée</text><text x="45" y="196" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Absence de débit établie</text><rect x="28" y="300" width="464" height="180" rx="12" fill="#244b36"/><text x="45" y="336" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Situation qui ne permet pas le réglage</text><text x="45" y="374" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Le réseau consomme encore</text><text x="45" y="406" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Le débit est supposé nul sans contrôle</text></svg>
</div>

*La notice V2.02 exige pression de service et absence de circulation pour le réglage du zéro. Masquer une consommation réelle ne constitue pas un réglage correct.*

## Pression appliquée, circulation effectivement absente

Demandez une procédure qui conserve la pression de service à l’instrument tout en établissant l’absence de débit dans la section. Les vannes et le schéma de l’installation doivent être connus. Nous ne proposons pas une combinaison universelle de fermetures, car elle pourrait isoler un procédé, emprisonner une pression ou laisser une branche non identifiée.

Conservez le résultat avant réglage et l’état de la conduite. Une mesure à pression atmosphérique ne satisfait pas la condition « pression du système appliquée » de cette notice. Si l’isolement approprié ne peut pas être établi, reporter le réglage et faire examiner le montage.

## Réglage de zéro et seuil d’affichage ne sont pas la même chose

Un seuil qui supprime les petites valeurs et un réglage de la caractéristique n’ont pas le même sens. Le [guide SMC AMS du zero cut-off](/guides/smc-ams-zero-debit-petites-fuites-f14/) illustre le premier cas pour un autre appareil. Il ne doit pas être recopié comme procédure du VA 500.

Sur le VA 500, la page citée nomme la commande **Zero point > Zero point**. Après un ajustement réussi, elle annonce **DeltaPressure à 0,00 hPa** sur l’interface. Ce repère d’écran concerne la procédure de l’instrument ; il n’établit pas que le réseau n’a aucune fuite. Le [dossier de débitmétrie](/guides/debitmetre-air-comprime-diametre-conditions-reference/) rappelle les paramètres de diamètre et de référence à conserver en parallèle.

## Vérifier l’effet de l’intervention

| Avant et après | Ce que la comparaison doit conserver |
| --- | --- |
| Valeur résiduelle initiale | Unité, pression et état du réseau |
| Absence de circulation établie | Procédure et section concernée |
| Paramètres modifiés | Nature exacte de l’ajustement |
| Observation après réglage | Conditions et signal obtenu |
| Reprise de production | Lecture avec une consommation réelle identifiée |

La reprise ne doit pas être interprétée seulement par « l’écran reste à zéro ». Le débitmètre doit encore produire une mesure utile pendant un usage documenté, avec son domaine et ses autres paramètres correctement établis. Aucun petit débit artificiel n’est inventé ici comme valeur d’essai universelle.

La décision attendue est donc double : traiter une circulation réelle lorsqu’elle existe, ou faire ajuster un zéro dans les conditions prescrites. Si l’absence de débit n’a pas été prouvée dans le montage, la petite valeur reste un signal à examiner. La modifier à ce stade rendrait les prochains audits moins interprétables.

Sources primaires consultées le **7 octobre 2026**. Analyse documentaire de CompatAir avec assistance d’IA et relecture interne ; aucun essai physique ni avis professionnel externe. Les propositions de relevé et les scénarios de calcul sont distingués des données fabricant.
