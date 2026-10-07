---
title: "Le point de rosée descend très lentement : vérifier la ligne de prélèvement"
seoTitle: "Point de rosée lent : flexible et volumes stagnants"
description: "Une ligne hygroscopique ou un volume stagnant peut ralentir la mesure. Vérifiez matériaux, trajet et stabilisation avant de comparer le sécheur au seuil."
pubDate: "2026-10-07"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["point-rosee-atmospherique-sous-pression-mesure", "vaisala-dsc74-vis-fuite-pression-cellule", "desiccant-change-couleur-point-rosee"]
sources: ["https://www.vaisala.com/sites/default/files/documents/CompAir-Sampling-Cell-AppNote-B211229EN.pdf"]
---

Après branchement d’un hygromètre sur un réseau sec, l’affichage reste longtemps plus humide qu’attendu. Ce comportement ne suffit pas à incriminer le sécheur. La ligne qui transporte l’échantillon fait partie du système de mesure et peut modifier sa réponse.

Dans sa [note de prélèvement, sections matériaux et débit](https://www.vaisala.com/sites/default/files/documents/CompAir-Sampling-Cell-AppNote-B211229EN.pdf), Vaisala recommande une tuyauterie courte, peu de raccordements, l’absence de volumes morts et des matériaux adaptés. La note signale la diffusion de vapeur à travers certains matériaux et déconseille les matériaux hygroscopiques pour cette mesure. Elle décrit aussi les limites d’un échantillon stagnant. Ces effets sont des pistes à vérifier, pas une cause automatiquement attribuée à toute mesure lente.

## Distinguer une stabilisation et une dérive du réseau

Conservez une série de mesures horodatées plutôt qu’une photo du premier nombre affiché. Notez le branchement, la pression à la sonde, la ligne utilisée et l’état de production. Si vous changez plusieurs éléments à la fois, la nouvelle courbe ne permettra plus de savoir lequel a influencé le résultat.

Le [guide de pression de mesure](/guides/point-rosee-atmospherique-sous-pression-mesure/) examine la comparaison entre rosée atmosphérique et rosée sous pression. Le problème traité ici est différent : à conditions de pression comparables, le trajet de l’échantillon peut empêcher une observation rapide et représentative.

<div class="article-infographic article-infographic--compact" role="group" aria-label="La ligne peut retenir l’humidité" style="margin-bottom:1.75rem">
<svg viewBox="0 0 520 550" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="point-rosee-mesure-lente-flexible-nylon-title point-rosee-mesure-lente-flexible-nylon-desc" font-family="Manrope Variable, Arial, sans-serif"><title id="point-rosee-mesure-lente-flexible-nylon-title">La ligne peut retenir l’humidité</title><desc id="point-rosee-mesure-lente-flexible-nylon-desc">Un résultat lent peut venir du prélèvement. Le diagnostic compare la ligne et le signal dans des conditions conservées.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="28" y="42" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">La ligne peut retenir l’humidité</text><path d="M56 170H440" stroke="#d3eb56" stroke-width="20" fill="none"/><path d="M155 170v100h70v-45" stroke="#9ebdad" stroke-width="15" fill="none"/><text x="50" y="110" fill="#ffffff" font-size="21" text-anchor="start" font-weight="400">Prélèvement avec volume stagnant</text><text x="60" y="315" fill="#9ebdad" font-size="21" text-anchor="start" font-weight="400">Matériau • longueur • connexions</text><path d="M56 400H440" stroke="#d3eb56" stroke-width="12" fill="none"/><text x="55" y="455" fill="#ffffff" font-size="21" text-anchor="start" font-weight="400">Ligne adaptée, courte, traversée</text></svg>
</div>

*Un résultat lent peut venir du prélèvement. Le diagnostic compare la ligne et le signal dans des conditions conservées.*

## Examiner le trajet de l’échantillon

Dessinez le point de prélèvement, la ligne, la cellule et le rejet. Indiquez les longueurs et les matériaux réellement utilisés. Un raccord en dérivation fermé peut former un volume peu renouvelé ; sa présence doit apparaître. Une désignation « tuyau d’air » n’indique pas si le matériau convient à une mesure d’humidité très basse.

La note de Vaisala privilégie notamment le métal avec un bon état de surface. Un flexible choisi pour distribuer l’air peut donc demander une validation distincte pour le prélèvement humide. Aucune durée universelle de stabilisation n’est fournie pour tous les capteurs et matériaux.

## Comparer deux montages sans prétendre faire un étalonnage

Une comparaison utile conserve le même point de réseau, le même instrument et des conditions de fonctionnement aussi proches que possible. Le changement porte sur un élément du prélèvement identifié : par exemple une ligne choisie et validée pour la mesure. La comparaison documente l’effet observé ; elle ne constitue pas, à elle seule, un étalonnage de la sonde.

| Observation | Décision à préparer |
| --- | --- |
| Courbe lente après chaque branchement | Examiner ligne et procédure de préparation |
| Réponse différente après changement du trajet | Conserver les deux montages et leurs conditions |
| Signal qui évolue avec la production | Examiner aussi les conditions du réseau |
| Stabilisation non obtenue | Reporter le jugement de conformité du point mesuré |

Une courbe stable à la mauvaise pression reste inadaptée à la comparaison demandée. La [cellule DSC74](/guides/vaisala-dsc74-vis-fuite-pression-cellule/) fait l’objet d’un autre guide portant sur son dispositif de maintien de pression ; les deux contrôles doivent se compléter.

## Quand peut-on conclure sur le sécheur ?

Lorsque le montage et l’instrument sont qualifiés pour la mesure, que la pression et la grandeur affichée sont connues, et que la stabilisation suit le protocole retenu. Comparez alors le résultat à l’exigence du poste, dans les mêmes conditions. Tant que la réponse de la ligne reste inconnue, l’affichage peut documenter un problème de mesure sans démontrer un problème de séchage.

Un voyant de dessiccant n’efface pas cette incertitude : le [guide de changement de couleur](/guides/desiccant-change-couleur-point-rosee/) explique sa portée. La prochaine action est donc de qualifier le prélèvement, puis de reprendre l’observation dans ce montage conservé. Remplacer le sécheur avant cette étape laisserait le problème de mesure intact.

Sources primaires consultées le **7 octobre 2026**. Analyse documentaire de CompatAir avec assistance d’IA et relecture interne ; aucun essai physique ni avis professionnel externe. Les propositions de relevé et les scénarios de calcul sont distingués des données fabricant.
