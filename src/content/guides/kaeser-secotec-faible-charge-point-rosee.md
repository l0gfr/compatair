---
title: "KAESER SECOTEC : le compresseur frigorifique s’arrête, le séchage peut continuer"
seoTitle: "SECOTEC : compresseur frigorifique arrêté à faible débit"
description: "La masse thermique SECOTEC stocke du froid pour les phases partielles. Préparez une réception aux heures creuses avec états, débit et point de rosée."
pubDate: "2026-10-03"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["dimensionner-secheur-frigorifique-ete", "point-rosee-atmospherique-sous-pression-mesure"]
sources: ["https://id.kaeser.com/download.ashx?id=tcm%3A148-5993"]
---

Sur un sécheur **KAESER SECOTEC TA–TC** à faible charge, le compresseur frigorifique peut s’arrêter pendant que la masse thermique continue à fournir le froid nécessaire au séchage. La brochure décrit ce cycle en cinq phases. Un moteur frigorifique arrêté ne démontre donc pas, à lui seul, l’absence de séchage. [SECOTEC CONTROL, page PDF6](https://id.kaeser.com/download.ashx?id=tcm%3A148-5993#page=6).

Cette lecture sert à interpréter une observation en atelier. Elle ne garantit pas le point de rosée d’une installation dont le débit, l’ambiance et la configuration ne sont pas connus.

## Les cinq phases expliquent l’arrêt

La documentation décrit la séquence suivante :

1. Le compresseur frigorifique fonctionne et fournit du froid pour sécher l’air et refroidir les granulés de stockage.
2. La capacité non demandée par le séchage continue à refroidir le stockage jusqu’au seuil d’arrêt.
3. Le compresseur frigorifique s’arrête.
4. Le stockage fournit du froid au séchage et sa température remonte.
5. Le compresseur frigorifique redémarre lorsque le seuil de reprise du stockage est atteint.

Cette séquence reprend la description KAESER. Les températures de seuil et les durées dépendent du système ; le schéma de la brochure ne fournit pas une durée d’arrêt universelle. [Cycle thermique, page PDF6](https://id.kaeser.com/download.ashx?id=tcm%3A148-5993#page=6).

<div class="article-infographic article-infographic--compact" role="group" aria-label="Pleine charge, stockage et reprise" style="margin-bottom:1.5rem">
<svg viewBox="0 0 520 550" font-family="Manrope Variable, Arial, sans-serif" role="img" aria-labelledby="kaeser-secotec-faible-charge-point-rosee-title kaeser-secotec-faible-charge-point-rosee-desc" xmlns="http://www.w3.org/2000/svg"><title id="kaeser-secotec-faible-charge-point-rosee-title">Pleine charge, stockage et reprise</title><desc id="kaeser-secotec-faible-charge-point-rosee-desc">La documentation SECOTEC décrit une masse thermique ; la réception doit relier les phases du procédé aux observations de rosée.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="25" y="38" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">Pleine charge, stockage et reprise</text><circle cx="260" cy="276" r="89" fill="#244b36" stroke="#d3eb56" stroke-width="2"/><text x="260" y="259" fill="#d3eb56" font-size="22" text-anchor="middle" font-weight="400">Masse</text><text x="260" y="290" fill="#d3eb56" font-size="22" text-anchor="middle" font-weight="400">thermique</text><path d="M118 216Q148 119 283 131Q403 156 405 260" fill="none" stroke="#9ebdad" stroke-width="3"/><path d="M405 260L392 301" fill="none" stroke="#9ebdad" stroke-width="3"/><path d="M390.5 293.1L392 301L397.8 295.5" fill="none" stroke="#9ebdad" stroke-width="3"/><path d="M396 354Q330 446 185 414Q94 380 105 288" fill="none" stroke="#ffffff" stroke-width="3"/><path d="M105 288L111 248" fill="none" stroke="#ffffff" stroke-width="3"/><path d="M113.8 255.5L111 248L106.2 254.4" fill="none" stroke="#ffffff" stroke-width="3"/><text x="29" y="119" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Marche : stockage</text><text x="268" y="463" fill="#9ebdad" font-size="20" text-anchor="start" font-weight="400">Arrêt : froid</text><text x="268" y="488" fill="#9ebdad" font-size="20" text-anchor="start" font-weight="400">restitué</text></svg>
</div>
*SECOTEC stocke du froid pendant la marche frigorifique et peut le restituer pendant son arrêt. Les durées ne sont pas chiffrées ici.*

## Lire la commande au lieu d’écouter seulement le moteur

La brochure décrit **SECOTEC CONTROL**, un indicateur de tendance du point de rosée et une LED d’état pour les modes stockage et charge. Ces indications doivent être identifiées sur le modèle réel avant de qualifier un arrêt comme incident. [Equipment, page PDF10](https://id.kaeser.com/download.ashx?id=tcm%3A148-5993#page=10).

Pour documenter un événement, nous proposons de consigner l’état de commande, le fonctionnement du compresseur frigorifique, le débit d’air et le point de rosée disponible au même instant. Le point de mesure et l’expression de la rosée doivent rester indiqués. Le [guide du point de rosée sous pression](/guides/point-rosee-atmospherique-sous-pression-mesure/) aide à éviter une comparaison avec une température atmosphérique différente.

| Observation | Information à rapprocher |
|---|---|
| Compresseur frigorifique arrêté | État de stockage ou de charge affiché |
| Reprise frigorifique | Évolution du stockage et de la demande |
| Indication de rosée inhabituelle | Débit, pression et conditions d’entrée |
| Incident à certaines heures | Profil de production et ambiance |

La grille prépare un relevé. Elle ne permet pas de neutraliser une alarme ni de modifier un réglage de commande.

## Conserver les conditions de la valeur nominale

La page technique donne son point de fonctionnement de référence : **7 bar(g)**, air entrant à **35 °C**, ambiance à **25 °C** et point de rosée sous pression de **+3 °C**. Les facteurs de correction des autres conditions sont présentés séparément. Une valeur nominale ne décrit donc pas tout le cycle d’un atelier. [Données et noteISO7183, page PDF10](https://id.kaeser.com/download.ashx?id=tcm%3A148-5993#page=10).

Le [dimensionnement d’un sécheur en été](/guides/dimensionner-secheur-frigorifique-ete/) traite la sélection avec ces conditions d’entrée. Ici, la question est l’interprétation de l’arrêt frigorifique. Une correction de débit et une observation du cycle répondent à deux besoins de réception distincts.

## Transmettre un incident avec sa chronologie

Si les observations ne correspondent pas au fonctionnement attendu, transmettre la référence, l’état de commande, les conditions d’alimentation et le relevé au fournisseur. Le froid stocké explique un principe d’arrêt ; il ne suffit pas à déclarer toute absence de marche normale.

Le verdict documentaire tient dans cette distinction : le compresseur frigorifique peut être arrêté pendant que le stockage soutient le séchage. La qualité d’air du poste et sa consommation électrique doivent ensuite être vérifiées dans leurs conditions réelles, sans convertir le schéma du cycle en promesse d’économie.

## Sources et méthode

Consultées le **2 octobre 2026**. Analyse documentaire et propositions de relevé par CompatAir, avec assistance d’IA et relecture interne. Aucun essai physique ni validation professionnelle externe.

- [KAESER SECOTEC TA–TC, cycle en cinq phases](https://id.kaeser.com/download.ashx?id=tcm%3A148-5993#page=6)
- [KAESER SECOTEC TA–TC, commande et données nominales](https://id.kaeser.com/download.ashx?id=tcm%3A148-5993#page=10)
