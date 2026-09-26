---
title: "Stockage primaire et secondaire d’air comprimé : placer la réserve selon l’événement"
seoTitle: "Stockage primaire et secondaire air comprimé"
description: "Distinguer réservoir principal et stockage local à partir de la durée d’un pic, de la plage de pression et de la stratégie de commande."
pubDate: 2026-07-15
updatedDate: 2026-09-26
category: "Installer"
audiences: [professionnel]
metiers: [maintenance-industrielle]
readingTime: 14
sources:
  - https://www1.eere.energy.gov/manufacturing/tech_assistance/pdfs/compressed_air_sourcebook.pdf
  - https://www.atlascopco.com/en-us/compressors/wiki/compressed-air-articles/what-is-an-air-receiver
---

Une cuve ne corrige pas tous les déficits de débit. Sa valeur dépend de la quantité d’air utilisable entre deux pressions, du temps de l’événement et de l’endroit où elle est raccordée. Le stockage primaire soutient la stratégie de production ; un stockage secondaire peut isoler un usage intermittent au plus près de sa demande.

Pour un besoin local à pression supérieure, le [guide du surpresseur Festo DPA](/guides/surpresseur-pneumatique-festo-dpa-pression-debit/) explique pourquoi il faut documenter ensemble le débit aval, l’air prélevé au réseau et la recharge.

## Le rôle du stockage primaire

Le [guide DOE](https://www1.eere.energy.gov/manufacturing/tech_assistance/pdfs/compressed_air_sourcebook.pdf) décrit un stockage primaire recevant l’air à une pression supérieure avant un contrôleur pression-débit. Le réservoir absorbe la bande de commande des compresseurs, tandis que le contrôleur maintient le collecteur aval dans une plage plus étroite.

Le même document relie stockage, stratégie globale, emplacement des signaux et commandes. Ajouter du volume sans considérer ces interactions peut prolonger un cycle sans résoudre l’instabilité recherchée.

## Le rôle d’un stockage secondaire

Le DOE indique que des réservoirs primaires ou secondaires supplémentaires peuvent traiter des charges intermittentes qui affectent la pression et la fiabilité. Le stockage local se place près d’un événement lorsque le réseau ne peut pas fournir instantanément le débit sans perturber les autres usages.

Il faut alors contrôler la recharge. Si la cuve locale se remplit sans limitation immédiatement après le pic, elle peut recréer une seconde demande brutale sur le réseau.

<div class="article-infographic" tabindex="0" role="group" aria-label="Infographie technique défilable horizontalement sur petit écran">
<svg viewBox="0 0 760 380" role="img" aria-labelledby="storage-title storage-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="storage-title">Stockage primaire et stockage local</title><desc id="storage-desc">Le stockage primaire se trouve près des compresseurs et de la commande. Un stockage secondaire se place près d’une charge intermittente, avec une recharge contrôlée.</desc>
  <rect width="760" height="380" rx="22" fill="#eef2e9"/><text x="38" y="46" fill="#143426" font-size="22" font-weight="700">Placer la réserve là où elle remplit une fonction</text><rect x="38" y="91" width="151" height="94" rx="15" fill="#143426"/><text x="58" y="128" fill="#d3eb56" font-size="13" font-weight="700">COMPRESSEURS</text><text x="58" y="157" fill="white" font-size="15" font-weight="700">production</text><path d="M189 138h62" stroke="#19704f" stroke-width="5"/><rect x="251" y="77" width="140" height="122" rx="40" fill="#28533f"/><text x="321" y="124" text-anchor="middle" fill="#d3eb56" font-size="13" font-weight="700">PRIMAIRE</text><text x="321" y="153" text-anchor="middle" fill="white" font-size="13">bande de commande</text><path d="M391 138h101" stroke="#19704f" stroke-width="5"/><rect x="492" y="104" width="128" height="68" rx="14" fill="#d3eb56"/><text x="556" y="133" text-anchor="middle" fill="#143426" font-size="13" font-weight="700">RÉSEAU</text><text x="556" y="154" text-anchor="middle" fill="#56685e" font-size="12">pression tenue</text><path d="M620 138h74M620 138v122h-99" stroke="#19704f" stroke-width="5" fill="none"/><rect x="381" y="224" width="140" height="92" rx="36" fill="#925e35"/><text x="451" y="260" text-anchor="middle" fill="white" font-size="13" font-weight="700">SECONDAIRE</text><text x="451" y="285" text-anchor="middle" fill="#f5e6d8" font-size="12">pic local</text><path d="M381 270h-82" stroke="#925e35" stroke-width="5"/><rect x="153" y="236" width="146" height="68" rx="14" fill="#fff"/><text x="226" y="264" text-anchor="middle" fill="#143426" font-size="13" font-weight="700">USAGE BREF</text><text x="226" y="286" text-anchor="middle" fill="#56685e" font-size="12">recharge maîtrisée</text><text x="38" y="352" fill="#56685e" font-size="13">Volume, pression utile, durée et recharge doivent être calculés ensemble.</text>
</svg>
</div>

## Mesurer l’événement avant de choisir le volume

Relevez le débit de pointe, sa durée, la pression minimale admissible au procédé et l’intervalle avant l’événement suivant. Mesurez aussi la pression avant, pendant et après le pic à plusieurs points du réseau.

Atlas Copco présente le [réservoir d’air](https://www.atlascopco.com/en-us/compressors/wiki/compressed-air-articles/what-is-an-air-receiver) comme un stockage temporaire pour les pointes. La page insiste sur la durée pendant laquelle la réserve peut maintenir la pression nécessaire au procédé. C’est cette fenêtre utile qui doit être calculée, pas le volume brut seul.

## Ne pas dimensionner avec une règle unique

Les règles de pouce peuvent servir d’amorce commerciale, mais le résultat final dépend du compresseur, de la commande, de l’application et de la plage de pression. CompatAir retient donc la méthode événementielle : quantité d’air nécessaire pendant le pic, quantité fournie simultanément, pression initiale et pression minimale.

Le calcul doit utiliser les pressions absolues lorsqu’il convertit un volume de cuve en air libre équivalent. Le guide [bar, psi et pression absolue](/guides/bar-psi-pression-absolue-relative/) détaille cette distinction.

## Vérifier la sécurité et le traitement

Un réservoir est un équipement sous pression. Sa conception, ses accessoires, sa conformité, ses inspections, ses purges et son installation relèvent du cadre applicable et des personnes compétentes. Le calcul de capacité CompatAir ne constitue pas une validation réglementaire.

La position par rapport au sécheur modifie aussi la qualité de l’air stocké et le comportement du traitement. Atlas Copco distingue les réservoirs humides avant séchage et les réservoirs secs après traitement. La fonction choisie doit apparaître sur le schéma.

## Réceptionner sur le pic réel

Après installation, rejouez l’événement : pression au procédé, pression du réseau, durée de soutien, temps de recharge et réaction des compresseurs. Vérifiez qu’un autre poste n’est pas dégradé pendant la recharge.

Le dossier conserve la courbe avant/après. Une réserve qui évite la chute mais déclenche une machine supplémentaire à chaque recharge demande encore un réglage de stratégie.

## Sources

- [U.S. Department of Energy, Improving Compressed Air System Performance](https://www1.eere.energy.gov/manufacturing/tech_assistance/pdfs/compressed_air_sourcebook.pdf)
- [Atlas Copco, What is an Air Receiver?](https://www.atlascopco.com/en-us/compressors/wiki/compressed-air-articles/what-is-an-air-receiver)
