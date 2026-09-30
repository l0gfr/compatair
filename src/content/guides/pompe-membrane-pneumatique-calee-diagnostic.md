---
title: "Pompe à membrane pneumatique calée : vérifier le circuit avant le compresseur"
description: "Pompe AODD qui s’arrête ou ne débite plus : distinguer air, aspiration, refoulement et usure, avec une méthode de relevé utile au service technique."
pubDate: 2026-09-29
updatedDate: 2026-09-30
category: Utiliser
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
featured: false
reviewStatus: internal
relatedGuides: ["pompe-membrane-aro-66605-debit-air", "pompe-pneumatique-echappement-givre-air-sec", "silencieux-pneumatique-colmate-contre-pression"]
sources:
  - https://store.psgdover.com/blog/tech-tips/aodd-pump-troubleshooting.html
---

Une pompe à membrane pneumatique qui ne fournit plus de liquide n’a pas nécessairement besoin d’un compresseur plus gros. **Commencez par distinguer une absence de cycles, des cycles sans débit et un arrêt sous charge.** L’air d’alimentation, l’échappement et le circuit de fluide peuvent chacun expliquer une partie du problème.

## Observer avant de modifier

Le [guide de dépannage AODD publié par PSG en avril 2026](https://store.psgdover.com/blog/tech-tips/aodd-pump-troubleshooting.html) distingue ces symptômes et leurs familles de causes. Il cite l’alimentation en air et l’échappement pour une absence de cycles, les conditions d’aspiration pour des cycles sans débit, et le refoulement, les clapets ou la distribution d’air pour un arrêt sous charge.

Il demande aussi d’isoler l’équipement, de dissiper les pressions et de tenir compte des conditions chimiques avant une intervention. La notice de la pompe et la procédure de consignation du site définissent la mise en sécurité, y compris côté fluide.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 302" role="img" aria-labelledby="pompe-membrane-pneumatique-calee-diagnostic-title pompe-membrane-pneumatique-calee-diagnostic-desc" style="font-family:system-ui,sans-serif">
<title id="pompe-membrane-pneumatique-calee-diagnostic-title">Classer le symptôme d’une pompe AODD</title><desc id="pompe-membrane-pneumatique-calee-diagnostic-desc">L’absence de cycles et les cycles sans débit liquide orientent des vérifications différentes. Le schéma est un aide-mémoire, pas une autorisation d’intervention sous pression.</desc>
<rect width="440" height="302" rx="16" fill="#10281e"/>
<text x="24" y="32" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">Pas de débit liquide : observer</text><rect x="24" y="65" width="392" height="55" rx="8" fill="#19704f"/><text x="220" y="99" fill="#eef2e9" font-size="20" text-anchor="middle" font-weight="400">La pompe cycle-t-elle ?</text><path d="M110 123L110 158" stroke="#9fb3a8" stroke-width="3" fill="none"/><path d="M330 123L330 158" stroke="#9fb3a8" stroke-width="3" fill="none"/><text x="110" y="185" fill="#eef2e9" font-size="24" text-anchor="middle" font-weight="400">Non</text><text x="330" y="185" fill="#eef2e9" font-size="24" text-anchor="middle" font-weight="400">Oui</text><text x="110" y="225" fill="#eef2e9" font-size="16" text-anchor="middle" font-weight="400">Air / échappement</text><text x="330" y="225" fill="#eef2e9" font-size="16" text-anchor="middle" font-weight="400">Aspiration / fluide</text><text x="220" y="273" fill="#eef2e9" font-size="17" text-anchor="middle" font-weight="400">Des causes peuvent se cumuler</text>
</svg>
<figcaption>L’absence de cycles et les cycles sans débit liquide orientent des vérifications différentes. Le schéma est un aide-mémoire, pas une autorisation d’intervention sous pression.</figcaption>
</figure>

Le schéma sert à orienter un relevé. Il ne constitue pas un arbre de dépannage complet : les causes peuvent se cumuler, et les vérifications internes nécessitent les compétences et la documentation de la pompe.

Si le symptôme est une accélération irrégulière plutôt qu’un arrêt, utilisez un parcours adapté à la famille de pompe. Le [diagnostic documentaire Graco Xtreme](/guides/pompe-pneumatique-emballe-graco-xtreme/) examine l’approvisionnement produit et la protection anti-emballement.

## Relever les changements récents

Notez la référence, le fluide, sa température, son niveau d’alimentation et les changements de concentration ou de recette. Ajoutez la dernière intervention sur les conduites, les filtres ou la pompe. Une anomalie apparue après une modification fournit un contexte utile ; elle ne prouve pas que cette modification est la seule cause.

Distinguez le démarrage, le régime établi et le fonctionnement à fort débit. Un relevé « elle s’arrête parfois » devient plus exploitable s’il précise quand, avec quels consommateurs d’air et dans quel état du circuit liquide.

## Vérifier l’air réellement reçu

Une pression disponible à l’arrêt ne décrit pas le débit reçu pendant les courses. Documentez le flexible, les raccords, le régulateur et les autres utilisateurs. Pour les pompes dont la consommation dépend du point de fonctionnement, conservez aussi le débit liquide et la contre-pression.

Le [dossier ARO 66605](/guides/pompe-membrane-aro-66605-debit-air/) montre comment associer ces conditions à une courbe. Il ne donne pas une consommation standard applicable à toutes les pompes AODD.

Si l’échappement est restreint ou givré, augmenter l’arrivée d’air peut laisser l’anomalie intacte. Les guides sur le [givre à l’échappement](/guides/pompe-pneumatique-echappement-givre-air-sec/) et le [silencieux colmaté](/guides/silencieux-pneumatique-colmate-contre-pression/) décrivent ces questions séparément.

## Préparer la suite du diagnostic

| Observation à transmettre | Information complémentaire |
| --- | --- |
| Absence de cycles | État de l’air et de l’échappement |
| Cycles sans débit liquide | Niveau, aspiration, vanne et évolution du fluide |
| Arrêt pendant le travail | Conditions au refoulement et pression disponible |
| Liquide à l’échappement | Arrêt et examen prévu par le fabricant |

PSG considère la présence de liquide à l’échappement comme un indicateur fort de défaillance côté membranes ou étanchéité. Cette situation exige l’arrêt et la procédure adaptée ; elle ne relève pas d’un simple réglage de détendeur.

N’attribuez pas un fonctionnement normal sur refoulement fermé à toute pompe sans sa notice. Le dossier ne fournit aucun seuil de contre-pression universel, ni procédure de démontage interne. Une décision de remplacement du compresseur doit attendre que le besoin d’air et l’état des circuits soient établis.
