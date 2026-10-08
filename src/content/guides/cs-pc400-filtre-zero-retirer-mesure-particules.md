---
title: "CS PC400 : le filtre de zéro peut rendre une mesure de particules trompeuse"
seoTitle: "CS PC400 : retirer le filtre de zéro avant mesure"
description: "Le filtre de zéro sert au contrôle du capteur, puis doit être retiré. Distinguer ce test du prélèvement réel pour interpréter les faibles comptages PC400."
pubDate: "2026-10-08"
category: "Utiliser"
audiences:
  - "professionnel"
metiers:
  - "maintenance-industrielle"
readingTime: 3
reviewStatus: "internal"
relatedGuides:
  - "qualite-air-comprime-iso-8573-1"
  - "audit-reseau-air-comprime-protocole-mesures"
  - "point-rosee-ligne-prelevement-condensation-refroidissement"
sources:
  - "https://www.cs-instruments.com/cs-data/Bedienungsanleitungen/Instruction%20manuals_EN_new/Instruction_manual_PC400_EN.pdf"
---

Le PC400 indique très peu de particules, alors que le prélèvement n’a pas été préparé comme d’habitude. Vérifiez si le **filtre de zéro** est encore installé. La [notice PC400V1.6, pages 8–9](https://www.cs-instruments.com/cs-data/Bedienungsanleitungen/Instruction%20manuals_EN_new/Instruction_manual_PC400_EN.pdf#page=8) le place après le régulateur pour le test de zéro, puis demande de le retirer avant la mesure.

Un comptage faible avec ce filtre en place décrit un air passé par le filtre de test. Il ne peut pas être présenté comme une mesure représentative du réseau en amont. Ce point concerne le chemin du prélèvement, avant toute discussion de classe de qualité.

## Identifier deux montages différents

Le test de zéro sert au capteur et à la protection de son optique. La mesure du réseau exige le montage de prélèvement prévu, sans ce filtre de test. Conservez l’identification et la photographie du trajet avec le relevé pour pouvoir distinguer ces deux opérations après coup.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 332" role="img" aria-labelledby="cs-pc400-filtre-zero-retirer-mesure-particules-title cs-pc400-filtre-zero-retirer-mesure-particules-desc" style="display:block;width:100%;height:auto;font-family:'Manrope Variable',Arial,sans-serif"><title id="cs-pc400-filtre-zero-retirer-mesure-particules-title">Le filtre change ce qui est mesuré</title><desc id="cs-pc400-filtre-zero-retirer-mesure-particules-desc">Deux montages de la notice PC400. La pression du compteur ne doit pas dépasser 1,6 bar de surpression.</desc><rect width="520" height="332" rx="22" fill="#10281e"/><text x="26" y="42" font-size="22" fill="#d3eb56" font-weight="700">Le filtre change ce qui est mesuré</text><rect x="26" y="74" width="224" height="230" rx="16" fill="#203f31"/><text x="41" y="109" font-size="21" fill="#d3eb56" font-weight="700">Test de zéro</text><text x="41" y="151" font-size="21" fill="#eef2e9">Régulateur</text><text x="41" y="193" font-size="21" fill="#eef2e9">Filtre de zéro</text><text x="41" y="235" font-size="21" fill="#eef2e9">Puis PC400</text><rect x="270" y="74" width="224" height="230" rx="16" fill="#203f31"/><text x="285" y="109" font-size="21" fill="#d3eb56" font-weight="700">Mesure du réseau</text><text x="285" y="151" font-size="21" fill="#eef2e9">Régulateur</text><text x="285" y="193" font-size="21" fill="#eef2e9">Filtre de test retiré</text><text x="285" y="235" font-size="21" fill="#eef2e9">Puis PC400</text></svg>
<figcaption>Deux montages de la notice PC400. La pression du compteur ne doit pas dépasser 1,6 bar de surpression.</figcaption>
</figure>


## La pression du compteur a sa propre limite

La notice limite le PC400 à **1,6 bar de surpression**, obtenue avec le régulateur fourni. Cette valeur n’est ni une pression absolue ni la pression de fonctionnement souhaitée du réseau. Le régulateur doit rester dans le trajet prévu pendant la mesure.

Le fabricant avertit aussi contre l’entrée de liquides, fumées et matières grossières dans l’optique. N’improvisez pas un essai avec de la fumée pour vérifier le comptage : la notice décrit une remise en état et une calibration nécessaires après contamination.

| État du montage | Ce que le résultat peut décrire |
| --- | --- |
| Filtre de zéro installé | Contrôle de zéro du capteur selon la procédure |
| Filtre de zéro retiré, prélèvement conforme | Air du point prélevé dans ces conditions |
| Montage non photographié ou inconnu | Résultat dont la représentativité reste à établir |
| Pression ou optique hors conditions | Mesure à ne pas classer comme valide |

## Vérifier l’état de mesure avec le résultat

La page 10 distingue les indications de débit et d’état de mesure. Conservez-les avec les comptages ; l’alimentation et le laser en service ne suffisent pas à décrire toutes les conditions du prélèvement. Vérifiez également le type de canaux de votre version avant d’interpréter les classes de taille.

Le [dossier ISO8573-1](/guides/qualite-air-comprime-iso-8573-1/) aide à garder les contaminants distincts. Un contrôle de particules ne qualifie pas, à lui seul, l’eau et l’huile. Le [protocole d’audit](/guides/audit-reseau-air-comprime-protocole-mesures/) conserve la méthode et les états invalides ; le [trajet de prélèvement du point de rosée](/guides/point-rosee-ligne-prelevement-condensation-refroidissement/) montre un autre cas où la ligne peut changer la représentativité.

Si le filtre était resté en place, indiquez cette erreur dans le compte rendu et refaites le prélèvement conforme. Signalez le filtre utilisé avec le PC400 et les conditions du nouveau prélèvement dans le résultat transmis.

## Sources et méthode

Sources fabricant consultées le **8 octobre 2026**. Rédaction assistée par IA, revue documentaire interne, sans essai physique ni validation professionnelle externe. Les démarches de diagnostic proposées par CompatAir sont séparées des caractéristiques et instructions citées.
