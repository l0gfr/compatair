---
title: "EXAIR Cold Gun 5215 et 5230 : consommation d’air et choix du compresseur"
seoTitle: "EXAIR Cold Gun : 425 ou 850 SLPM à alimenter"
description: "Comparer les EXAIR Cold Gun standard et High Power : débit comprimé, fonctionnement intermittent et méthode pour mesurer le coût d’un refroidissement local."
pubDate: 2026-09-26
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: internal
relatedGuides:
  - amplificateur-air-exair-consommation-debit
  - comparer-puissance-specifique-compresseurs
  - utiliser-plusieurs-outils-pneumatiques
sources:
  - https://www.exair.com/media/productcms/pdf/ColdGunAirCoolantSystems2_1.pdf
---

Le **Cold Gun EXAIR standard consomme 425 SLPM à 6,9 bar** dans le tableau constructeur. La version **High Power demande 850 SLPM au même point**. Un refroidisseur local peut donc représenter une demande d’air importante, même s’il ne possède pas de moteur électrique sur le poste.

La bonne question est double : le réseau peut-il soutenir cette demande pendant l’opération, et le refroidissement obtenu justifie-t-il le volume d’air utilisé ? Nous séparons ces deux décisions au lieu de classer les versions uniquement par puissance annoncée.

## Identifier la version et le nombre de sorties

<p class="article-table-hint">Sur petit écran, faites défiler le tableau horizontalement.</p>

<div class="article-table-scroll" tabindex="0" role="region" aria-label="EXAIR Cold Gun : modèles et consommation">

| Référence | Configuration | Consommation publiée à 100 psig / 6,9 bar |
| --- | --- | --- |
| 5215 | Standard, une sortie froide | 425 SLPM |
| 5315 | Standard, deux sorties froides | 425 SLPM |
| 5230 | High Power, une sortie froide | 850 SLPM |
| 5330 | High Power, deux sorties froides | 850 SLPM |

</div>


Source : [EXAIR, pages PDF 8 et 9](https://www.exair.com/media/productcms/pdf/ColdGunAirCoolantSystems2_1.pdf). Le tableau donne la consommation de l’appareil : **les deux sorties du 5315 ne conduisent pas à multiplier 425 par deux**. En revanche, deux appareils standard alimentés ensemble demandent bien 850 SLPM aux conditions publiées.

## Le froid utilise l’énergie de l’air comprimé

EXAIR décrit un tube vortex qui sépare le flux en deux courants à basse pression, chaud et froid, avec entraînement d’air secondaire. Le constructeur indique qu’une baisse de la pression d’entrée réduit le débit et l’écart de température. On ne doit donc pas annoncer la performance d’un point de service en utilisant la consommation d’un autre.

Pour le compresseur, les SLPM sont à comparer avec un débit dont les conditions de référence sont compatibles. Le [guide de conversion des débits](/guides/convertir-cfm-l-min-nl-min-air-comprime/) explique pourquoi le mot « litres » ne suffit pas.

## Calculer le volume par opération

**Exemple CompatAir :** un 5215 fonctionne 30 secondes à son point publié. Le volume prélevé vaut `425 × 30 / 60 = 212,5 litres standard`. Pour un 5230 dans les mêmes conditions de durée, le calcul donne `850 × 30 / 60 = 425 litres standard`.

Si le poste réalise, par hypothèse, dix opérations par heure sans consommation entre elles, cela représente **2,125 m³ standard par heure** pour le standard et **4,25 m³ standard par heure** pour le High Power. Ces nombres décrivent un scénario, pas une mesure d’atelier. La demande instantanée reste respectivement de 425 et 850 SLPM pendant le refroidissement.

<p class="article-table-hint">Sur petit écran, faites défiler le schéma horizontalement.</p>

<div class="article-infographic" tabindex="0" role="group" aria-label="Même durée, volume d’air différent">
<svg viewBox="0 0 720 330" role="img" aria-labelledby="coldgun-title coldgun-desc" xmlns="http://www.w3.org/2000/svg">
<title id="coldgun-title">Même durée, volume d’air différent</title><desc id="coldgun-desc">Scénario : dix opérations de trente secondes par heure. 5215 : 2,125 m³ standard ; 5230 : 4,25 m³ standard. Aucun prélèvement entre opérations supposé.</desc>
<rect width="720" height="330" rx="20" fill="#10281e"/>
<text x="28" y="42" fill="#d3eb56" font-size="23" font-weight="700">Même durée, volume d’air différent</text>
<text x="28" y="90" fill="white" font-size="19">10 opérations × 30 secondes, prélèvement nul entre elles</text><text x="28" y="132" fill="white" font-size="21">5215 : 2,125 m³ standard</text><rect x="28" y="148" width="290" height="36" rx="5" fill="#d3eb56"/><text x="28" y="224" fill="white" font-size="21">5230 : 4,25 m³ standard</text><rect x="28" y="240" width="580" height="36" rx="5" fill="#8abfa3"/><text x="28" y="312" fill="white" font-size="16">Calcul pédagogique aux consommations publiées à 6,9 bar.</text>
</svg>
</div>


Cette lecture évite deux erreurs opposées : dimensionner le réseau seulement sur la faible moyenne horaire, ou facturer une consommation continue de 60 minutes alors que la commande coupe effectivement l’air entre les opérations.

## Décider avec un essai de procédé mesurable

Notre proposition de comparaison retient le même matériau, le même outil, la même opération et un critère d’acceptation fixé avant l’essai. Mesurez la durée d’activation, la pression au refroidisseur, le volume d’air et le résultat du procédé. Une sensation de froid à la main ne constitue pas une mesure de chaleur extraite de la pièce.

Pour départager standard et High Power, il faut constater ce que le second change réellement : température utile, régularité, temps de traitement ou autre critère pertinent pour votre opération. Si aucun gain utile n’est démontré, le seul doublement de consommation ne justifie pas le choix de la version supérieure. Nous ne publions ici ni gain de durée de vie d’outil ni économie de lubrifiant, faute d’essai propre.

## Chiffrer l’énergie sans inventer un prix de l’air

Le volume standard calculé ci-dessus peut alimenter une étude de coût si l’on possède un coût mesuré sur la même base. Écrivez alors explicitement : `coût de la séquence = volume d’air × coût documenté par m³`. Indiquez le périmètre de ce coût : production seule ou production, traitement et distribution.

Pour évaluer l’effet d’un nouveau consommateur, observez également la réaction des compresseurs. Une moyenne de coût historique ne prouve pas la consommation électrique supplémentaire de ce poste. Le [guide de puissance spécifique](/guides/comparer-puissance-specifique-compresseurs/) et le [relevé charge/vide](/guides/mesurer-temps-charge-vide-compresseur/) donnent les mesures à rapprocher.

## Ce que nous demandons avant de conclure

Le dossier doit contenir le modèle exact, le point d’alimentation, le cycle, la demande des autres postes et le résultat de refroidissement accepté. L’achat du compresseur se juge alors sur une demande documentée, et l’achat du refroidisseur sur le service rendu. Ce sont deux validations complémentaires ; le tableau de débit ne remplace pas l’essai de procédé.

## Sources et méthode

Sources consultées le **26 septembre 2026**. Analyse documentaire préparée avec assistance d’IA ; aucun essai physique ni validation professionnelle externe. Les calculs CompatAir et les hypothèses sont identifiés dans le texte.

- [EXAIR, Cold Gun Aircoolant System, pages PDF 8 et 9 (pages imprimées 217 et 218)](https://www.exair.com/media/productcms/pdf/ColdGunAirCoolantSystems2_1.pdf)
