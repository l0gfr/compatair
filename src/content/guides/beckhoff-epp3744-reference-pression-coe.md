---
title: "Beckhoff EPP3744 : retrouver la pression de référence hors données cycliques"
seoTitle: "Beckhoff EPP3744 : référence X15 et objets CoE"
description: "Les quatre voies EPP3744 sont rapportées à X15 en mode différentiel. Retrouvez la référence dans les objets CoE avant d’interpréter un écart commun."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["bar-psi-pression-absolue-relative", "audit-reseau-air-comprime-protocole-mesures", "diagnostiquer-chute-pression-air-comprime"]
sources: ["https://infosys.beckhoff.com/content/1033/epp3744/3618558731.html", "https://download.beckhoff.com/download/Document/io/ethercat-box/epp3744en.pdf"]
---

**Sur un Beckhoff EPP3744-x041 utilisé en pression différentielle, les quatre voies sont rapportées à un cinquième raccord commun.** Chercher cette référence uniquement dans les données cycliques du poste conduit à manquer une information de diagnostic.

La [documentation du raccordement pneumatique](https://infosys.beckhoff.com/content/1033/epp3744/3618558731.html) indique que la valeur de la référence n’est pas disponible dans l’image de procédé, mais dans les objets CoE. Le [manuel version 1.3, page 22](https://download.beckhoff.com/download/Document/io/ethercat-box/epp3744en.pdf#page=22) identifie les voies **X11 à X14** et la référence **X15**. Ce comportement est propre à l’architecture et au mode de cet appareil.

## Identifier le mode avant de lire un écart

La [page 27 du manuel](https://download.beckhoff.com/download/Document/io/ethercat-box/epp3744en.pdf#page=27) prévoit deux choix : **7 pour la mesure absolue**, **8 pour la mesure différentielle par rapport au capteur de référence**, cette dernière étant annoncée comme réglage d’usine. Les paramètres « Range » sont indiqués pour chaque voie.

Une discordance de repérage mérite toutefois d’être signalée : la page 27 écrit « reference connection X5 », tandis que le [schéma de la page 22](https://download.beckhoff.com/download/Document/io/ethercat-box/epp3744en.pdf#page=22) repère la référence X15. Vérifiez le schéma et la révision de l’appareil installé avant le raccordement ; le texte de la page 27 ne doit pas être cité comme s’il portait X15.

L’étiquette d’une variable de supervision ne permet pas à elle seule de vérifier le mode réellement paramétré. Avant de corriger un zéro ou de remplacer une voie, relevez le modèle, le mode lu dans la configuration et la grandeur que la supervision prétend afficher. Une valeur absolue et un écart à la référence ne représentent pas la même information.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg viewBox="0 0 520 390" role="img" aria-labelledby="beckhoff-epp3744-reference-pression-coe-svg-title beckhoff-epp3744-reference-pression-coe-svg-desc" xmlns="http://www.w3.org/2000/svg">
<title id="beckhoff-epp3744-reference-pression-coe-svg-title">Quatre voies et une référence commune</title><desc id="beckhoff-epp3744-reference-pression-coe-svg-desc">En mesure différentielle, les quatre voies sont rapportées à X15. La référence commune n’est pas une cinquième valeur cyclique dans l’image de procédé.</desc>
<rect width="520" height="390" rx="20" fill="#10281e"/>
<g font-family="Manrope Variable, sans-serif"><text x="28" y="40" fill="white" font-size="22">EPP3744 : retrouver le cinquième raccord</text><rect x="175" y="77" width="175" height="225" rx="16" fill="#203f31" stroke="#9ebdad" stroke-width="2"/><circle cx="217" cy="118" r="20" fill="#d3eb56"/><text x="201" y="124" fill="#10281e" font-size="14">X11</text><circle cx="307" cy="118" r="20" fill="#d3eb56"/><text x="291" y="124" fill="#10281e" font-size="14">X12</text><circle cx="217" cy="180" r="20" fill="#d3eb56"/><text x="201" y="186" fill="#10281e" font-size="14">X13</text><circle cx="307" cy="180" r="20" fill="#d3eb56"/><text x="291" y="186" fill="#10281e" font-size="14">X14</text><circle cx="217" cy="257" r="22" fill="#f5a798"/><text x="199" y="263" fill="#10281e" font-size="15">X15</text><path d="M239 257h133m0 0v48" stroke="#f5a798" stroke-width="3" fill="none"/><text x="30" y="328" fill="white" font-size="20">X15 : consulter les objets CoE de référence</text><text x="30" y="363" fill="white" font-size="18">Vérifier le mode avant de comparer les nombres.</text></g>
</svg>
<figcaption>En mesure différentielle, les quatre voies sont rapportées à X15. La référence commune n’est pas une cinquième valeur cyclique dans l’image de procédé.</figcaption>
</figure>

## Une référence commune peut déplacer plusieurs écarts

Dans un scénario fictif, une voie à 6 bar comparée à une référence à 1 bar donne un écart de 5 bar. Si la référence passe à 1,2 bar et que la voie reste à 6 bar, l’écart devient 4,8 bar. Le nombre change alors sans que la pression de cette voie ait changé.

Ce calcul de différence montre pourquoi des évolutions communes sur plusieurs voies méritent un examen de la référence. Il ne démontre pas que X15 est la cause d’un incident réel : les conditions de raccordement et les pressions des voies doivent être observées. Quatre courbes qui se déplacent ensemble peuvent ouvrir une piste de diagnostic, sans dispenser de la vérifier.

Le [guide pression absolue ou relative](/guides/bar-psi-pression-absolue-relative/) donne le vocabulaire nécessaire pour éviter un mélange de référentiels. Dans cette application, le nom et l’endroit de la référence commune doivent aussi apparaître sur le schéma du poste.

## Où rechercher l’information qui manque

La [page 53 du manuel](https://download.beckhoff.com/download/Document/io/ethercat-box/epp3744en.pdf#page=53) décrit l’index **F80E « AI Internal data Reference »**. Les sous-index **F80E:01 et F80E:02** sont présentés comme des valeurs brutes ADC, de type INT32, en lecture seule. Ils ne doivent pas être recopiés dans une tendance en bar sans interprétation documentée de leur format.

La prochaine action pour l’intégrateur consiste à retrouver ces objets dans la configuration de l’appareil, avec sa description XML et sa révision. Ce guide n’invente pas une conversion des valeurs brutes ni une cadence d’acquisition. Une lecture CoE ponctuelle ne doit pas être présentée comme un signal cyclique déjà qualifié.

| À vérifier | Ce que le résultat permet de décider |
| --- | --- |
| Mode de chaque voie | Comparer des grandeurs de même nature |
| Raccordement X15 | Identifier la référence physique commune |
| Présence des objets de référence | Compléter le diagnostic hors image cyclique |
| Format et révision utilisés | Éviter d’interpréter un entier brut comme des bar |
| Chronologie des voies et du poste | Tester une piste de variation commune |

## Relier l’examen électrique au circuit réel

Le manuel décrit des raccords pour flexible pneumatique de 6 mm. La taille du raccord ne garantit pas que toutes les voies ont un prélèvement comparable. Un schéma du montage doit donc relier les adresses de supervision aux endroits physiques observés.

Pour préparer cette comparaison, le [protocole d’audit d’un réseau](/guides/audit-reseau-air-comprime-protocole-mesures/) aide à documenter le plan de mesure. Si l’écart observé concerne un poste en charge, le [guide chute de pression](/guides/diagnostiquer-chute-pression-air-comprime/) examine les points amont/aval sur le cycle réel.

Conservez le mode, le schéma des cinq raccords et les relevés dans la [fiche d’intervention](/guides/fiche-intervention-air-comprime/). Un remplacement de capteur devient alors une décision portant sur une anomalie identifiée, plutôt qu’une réponse à une référence absente du tableau de bord.

## Sources et méthode

Sources fabricant consultées le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios de calcul et les procédures de réception proposées par CompatAir sont identifiés dans le texte.
