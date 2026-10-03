---
title: "Manomètre rempli WIKA : un boîtier sous pression peut décaler le zéro"
seoTitle: "Manomètre WIKA rempli : zéro décalé et mise à l’air"
description: "Le liquide d’un manomètre rempli peut mettre son boîtier sous pression. Identifiez le modèle et sa mise à l’air avant de corriger les réglages du réseau."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["manometre-air-comprime-precision-pleine-echelle", "bar-psi-pression-absolue-relative", "diagnostiquer-chute-pression-air-comprime"]
sources: ["https://blog.wika.com/us/products/pressure-products/vent-liquid-filled-gauge/"]
---

**Une aiguille qui revient mal à zéro sur un manomètre rempli ne démontre pas immédiatement une pression résiduelle dans le réseau.** WIKA documente un autre mécanisme : la pression peut changer à l’intérieur du boîtier étanche lorsque son liquide de remplissage se dilate ou se contracte.

La [note WIKA sur la mise à l’air des manomètres remplis](https://blog.wika.com/us/products/pressure-products/vent-liquid-filled-gauge/) relie ce phénomène aux variations de température pendant le transport et l’utilisation. Elle indique qu’une aiguille peut retrouver le zéro après égalisation du boîtier avec l’atmosphère locale. Le contrôle concerne alors l’instrument, avec la procédure applicable à son montage.

## Identifier le volume sur lequel on intervient

Un manomètre raccordé possède un circuit de mesure alimenté par la conduite. Le boîtier rempli qui entoure le mécanisme constitue un autre volume. Une action sur son dispositif de ventilation ne doit donc pas être confondue avec la purge de la conduite.

Sur un poste où deux cadrans divergent, commencez par consigner leur référence et leur état de montage. Notez si le défaut est un décalage au zéro, un écart sous charge ou une évolution avec la température. Ces observations permettent de choisir le contrôle à réaliser au lieu de dérégler le poste pour faire coïncider les deux aiguilles.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg viewBox="0 0 520 410" role="img" aria-labelledby="wika-manometre-glycerine-zero-pression-boitier-svg-title wika-manometre-glycerine-zero-pression-boitier-svg-desc" xmlns="http://www.w3.org/2000/svg">
<title id="wika-manometre-glycerine-zero-pression-boitier-svg-title">Boîtier et circuit sont deux volumes</title><desc id="wika-manometre-glycerine-zero-pression-boitier-svg-desc">Le bouchon ou levier de mise à l’air concerne le boîtier rempli. Il ne remplace pas l’isolement ni la dépressurisation de la conduite raccordée.</desc>
<rect width="520" height="410" rx="20" fill="#10281e"/>
<g font-family="Manrope Variable, sans-serif"><circle cx="260" cy="167" r="97" fill="#203f31" stroke="#9ebdad" stroke-width="3"/><path d="M195 235a85 85 0 0 0 130 0" fill="#d3eb56" opacity=".55"/><path d="M260 166l38-40" stroke="white" stroke-width="5"/><circle cx="260" cy="166" r="7" fill="white"/><path d="M260 264v44m0 0h145M260 69v-25h-70" stroke="#9ebdad" stroke-width="8" fill="none"/><text x="30" y="37" fill="white" font-size="19">Mise à l’air du boîtier</text><text x="301" y="334" fill="white" font-size="17">Circuit sous pression</text><text x="172" y="202" fill="white" font-size="16">Liquide du boîtier</text><text x="30" y="379" fill="white" font-size="20">Deux opérations à identifier séparément.</text></g>
</svg>
<figcaption>Le bouchon ou levier de mise à l’air concerne le boîtier rempli. Il ne remplace pas l’isolement ni la dépressurisation de la conduite raccordée.</figcaption>
</figure>

## Lire la portée de la consigne WIKA

La note souligne la mise à l’air immédiatement après installation pour les plages de pleine échelle de **300 psi ou moins**, avec les plages de vide et composées qu’elle décrit. Elle présente un levier prévu à cet effet sur les instruments concernés.

Elle distingue aussi la position de montage : le levier peut rester ouvert en position verticale ; une position non verticale conduit à envisager des mises à l’air périodiques, avec une possibilité d’échappement de liquide. Cette consigne ne doit pas être transposée à un boîtier sans ce dispositif ou à une référence dont la notice donne une procédure différente.

La première action pratique est donc d’identifier le manomètre et sa notice, puis de repérer le dispositif prévu pour son boîtier. Retirer un élément choisi parce qu’il ressemble à un bouchon ne remplace pas cette identification.

## Décrire le résultat avant d’ajuster le réseau

La grille suivante est une méthode de relevé proposée pour l’atelier. Elle ne constitue pas un diagnostic automatique ni une procédure de démontage.

| Observation | Information à conserver |
| --- | --- |
| Décalage visible au zéro dans les conditions de contrôle prévues | Valeur, unité, température et configuration de l’instrument |
| Changement après la mise à l’air prescrite | Valeur avant/après et procédure de la référence appliquée |
| Écart persistant | Référence, classe, étendue et besoin d’examen métrologique |
| Désaccord apparaissant pendant un cycle | Pression dynamique et points de mesure sur le circuit |

Le [guide de précision en pleine échelle](/guides/manometre-air-comprime-precision-pleine-echelle/) traite l’étendue et les erreurs admissibles de lecture. Ce problème de pression de boîtier est distinct : choisir un cadran plus resserré n’identifie pas la cause d’un décalage après transport.

## Comparer deux mesures dans le bon référentiel

Une pression relative et une pression absolue ne portent pas le même zéro. Si l’instrument de référence et le cadran n’emploient pas la même grandeur, la comparaison doit d’abord être corrigée sur le plan du référentiel. Le [guide bar, psi et pression absolue](/guides/bar-psi-pression-absolue-relative/) aide à conserver cette distinction.

Lorsque la lecture au repos est cohérente mais que le défaut apparaît en utilisation, le [diagnostic de chute de pression](/guides/diagnostiquer-chute-pression-air-comprime/) reprend les points de mesure sous charge. Une correction de boîtier ne démontre aucune réserve de débit au poste.

Pour une remise en service, gardez le relevé avant/après et la notice utilisée dans la [fiche d’intervention](/guides/fiche-intervention-air-comprime/). Si la lecture reste inexpliquée, l’instrument mérite un contrôle approprié avant d’être utilisé pour modifier des réglages de production.

## Sources et méthode

Sources fabricant consultées le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios de calcul et les procédures de réception proposées par CompatAir sont identifiés dans le texte.
