---
title: "DMC18 : distinguer défaut de sonde, point de rosée élevé et défaut de purge"
seoTitle: "DMC18 : codes PF, HdP et drA du DRYPOINT RA"
description: "Lire les alarmes DMC18 : sonde PF, point de rosée HdP, purge drA. Vérifier seuil, temporisation et pression au démarrage avant de conclure."
pubDate: 2026-10-03
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["point-rosee-secheur-filtre-air-comprime", "qualite-air-comprime-iso-8573-1", "purgeur-condensats-temporise-detection-niveau"]
sources: ["https://www.beko-technologies.com/fileadmin/beko-technologies.com/EN/manuals_en/drypoint_ra/DRYPOINT_RA_20-960_manual_en_2019_10_00_01.pdf"]
---

Un DRYPOINT RA qui tourne avec son voyant d’alarme n’apporte pas automatiquement la même information qu’un sécheur arrêté. Le DMC18 distingue notamment un défaut de sonde, un point de rosée trop haut et un défaut de purge. **Il faut lire le code affiché avec la température et les conditions de démarrage.**

## Le voyant ne donne pas la cause

Dans la [notice RA20–960, pages 36–37](https://www.beko-technologies.com/fileadmin/beko-technologies.com/EN/manuals_en/drypoint_ra/DRYPOINT_RA_20-960_manual_en_2019_10_00_01.pdf#page=36), le voyant clignotant accompagne un avertissement ou une alarme de service. Le sécheur **n’est pas arrêté** par cet avertissement. L’affichage alterne le point de rosée et les codes actifs. Le fait que le compresseur frigorifique continue de tourner ne suffit donc pas à clore le diagnostic.

| Code DMC18 | Signification publiée | Information à examiner |
| --- | --- | --- |
| PF | Défaut de sonde de température | Validité de la mesure et circuit de sonde |
| HdP | Point de rosée supérieur à HdS | Température, seuil et délai haut effectivement configurés |
| LdP | Point de rosée inférieur à LdS | Température, seuil et délai bas |
| drA | Défaut de purge BEKOMAT IF | Évacuation des condensats ; délai de20 minutes |
| SrV | Échéance de service dépassée | Entretien requis et compteur de service |

Les libellés et la temporisation de drA sont donnés [page 37](https://www.beko-technologies.com/fileadmin/beko-technologies.com/EN/manuals_en/drypoint_ra/DRYPOINT_RA_20-960_manual_en_2019_10_00_01.pdf#page=37). Un défaut de sonde ne doit pas être converti en température réelle supposée. Un [point de rosée](/guides/point-rosee-secheur-filtre-air-comprime/) s’interprète à partir d’une mesure exploitable et de ses conditions.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 335" role="img" aria-labelledby="beko-dmc18-pf-hdp-dra-alarme-signification-title beko-dmc18-pf-hdp-dra-alarme-signification-desc" style="display:block;width:100%;height:auto;font-family:system-ui,sans-serif"><title id="beko-dmc18-pf-hdp-dra-alarme-signification-title">DMC18 : trois alarmes, trois informations</title><desc id="beko-dmc18-pf-hdp-dra-alarme-signification-desc">PF signale la sonde, HdP un seuil de point de rosée et drA la purge après20 minutes. La notice précise qu’un avertissement ne stoppe pas le sécheur.</desc><rect width="520" height="335" rx="22" fill="#10281e"/><text x="26" y="43" fill="#d3eb56" font-size="24" font-weight="700">DMC18 · lire le code complet</text><path d="M135 77v194" stroke="#8abfa3" stroke-width="3"/><text x="39" y="112" fill="#d3eb56" font-size="28" font-weight="700">PF</text><text x="157" y="107" fill="#eef2e9" font-size="23">Sonde de température</text><text x="157" y="139" fill="#eef2e9" font-size="20">La mesure est en cause</text><text x="34" y="186" fill="#d3eb56" font-size="28" font-weight="700">HdP</text><text x="157" y="181" fill="#eef2e9" font-size="23">Seuil haut dépassé</text><text x="157" y="213" fill="#eef2e9" font-size="20">Temporisation configurée</text><text x="35" y="263" fill="#d3eb56" font-size="28" font-weight="700">drA</text><text x="157" y="258" fill="#eef2e9" font-size="23">Défaut de purge</text><text x="157" y="290" fill="#eef2e9" font-size="20">Délai publié : 20 min</text></svg>
<figcaption>PF signale la sonde, HdP un seuil de point de rosée et drA la purge après20 minutes. La notice précise qu’un avertissement ne stoppe pas le sécheur.</figcaption>
</figure>

## HdP dépend de deux paramètres

La [page 38](https://www.beko-technologies.com/fileadmin/beko-technologies.com/EN/manuals_en/drypoint_ra/DRYPOINT_RA_20-960_manual_en_2019_10_00_01.pdf#page=38) sépare **HdS**, seuil haut de température, et **Hdd**, délai d’activation. La configuration standard publiée est respectivement **20 °C et15 minutes**. Ce sont des paramètres d’alarme de cette notice, et non un point de rosée acceptable pour toute utilisation.

Si une installation exige une autre qualité d’air, comparer uniquement la température affichée au seuil d’alarme peut masquer l’écart entre surveillance et besoin du procédé. Le [guide ISO 8573-1](/guides/qualite-air-comprime-iso-8573-1/) situe les classes de particules, d’eau et d’huile. L’accès aux paramètres de configuration est réservé aux personnes qualifiées par BEKO.

## drA au démarrage demande une lecture du contexte

BEKO précise qu’une indication de défaut de purge peut apparaître lorsque le sécheur est sous tension **sans pression appliquée au système**. Il faut ainsi distinguer ce contexte d’une purge réellement défaillante en fonctionnement. Le [guide des purgeurs](/guides/purgeur-condensats-temporise-detection-niveau/) aide à identifier le principe de détection ; la procédure exacte reste celle du BEKOMAT installé.

Les avertissements disparaissent automatiquement lorsque leur cause est éliminée, à l’exception de l’échéance SrV qui exige une remise à zéro manuelle après service. Effacer une indication de maintenance n’élimine donc pas une cause de température ou de purge. La vérification utile consiste à observer le retour à un fonctionnement cohérent après traitement de la cause, avec une mesure de température valide.

## Sources et méthode

Documents fabricant consultés le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne, sans essai physique ni validation professionnelle externe. Les calculs hypothétiques et les interprétations de CompatAir sont signalés dans le texte.

- [BEKO DRYPOINT RA 20-960, notice octobre 2019](https://www.beko-technologies.com/fileadmin/beko-technologies.com/EN/manuals_en/drypoint_ra/DRYPOINT_RA_20-960_manual_en_2019_10_00_01.pdf)
