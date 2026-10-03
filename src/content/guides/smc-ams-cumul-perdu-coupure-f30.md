---
title: "SMC AMS : pourquoi le cumul d’air disparaît ou recule après une coupure"
seoTitle: "SMC AMS : cumul perdu après coupure et réglage F30"
description: "F30 conserve le cumul par sauvegardes espacées. Distinguez remise à zéro, dernière valeur enregistrée et consommation perdue à la coupure."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["audit-reseau-air-comprime-protocole-mesures", "fiche-intervention-air-comprime"]
sources: ["https://www.smcworld.com/assets/manual/en-jp/files/PFxx-OMA1007.pdf"]
---

**Le cumul affiché avant une coupure n’est pas nécessairement la valeur qui réapparaîtra au redémarrage.** La fonction F30 du SMC AMS commande la conservation de ce total. La notice indique qu’il n’est pas conservé lors de l’arrêt d’alimentation avec le réglage par défaut.

La [section F30, page 98](https://www.smcworld.com/assets/manual/en-jp/files/PFxx-OMA1007.pdf#page=99) décrit ensuite des sauvegardes périodiques en mémoire permanente, espacées de **2 ou 5 minutes**. Une valeur accumulée entre la dernière sauvegarde et la coupure peut être perdue. Il faut distinguer cet intervalle d’un défaut de mesure du débit.

## Reconstituer la chronologie avant d’accuser le capteur

Pour un incident, rassemblez dernier relevé disponible, heure de coupure, heure de redémarrage et premier relevé suivant. Ajoutez le réglage F30 réellement présent et l’existence éventuelle d’une commande de remise à zéro externe. Le total d’un tableau de supervision peut par ailleurs provenir d’un autre calcul : identifiez son origine avant de comparer les nombres.

Notre méthode de dossier consiste à tracer les événements, puis seulement à interpréter l’écart. Un compteur qui reprend une valeur enregistrée peut donner l’impression de reculer si l’écran précédent montrait une accumulation plus récente.

<div class="article-infographic article-infographic--compact" role="group" aria-label="La coupure entre deux sauvegardes" style="margin-bottom:1.5rem">
<svg viewBox="0 0 520 550" font-family="Manrope Variable, Arial, sans-serif" role="img" aria-labelledby="smc-ams-cumul-perdu-coupure-f30-title smc-ams-cumul-perdu-coupure-f30-desc" xmlns="http://www.w3.org/2000/svg"><title id="smc-ams-cumul-perdu-coupure-f30-title">La coupure entre deux sauvegardes</title><desc id="smc-ams-cumul-perdu-coupure-f30-desc">F30 peut enregistrer le cumul toutes les 2 ou 5 minutes ; l’intervalle non sauvegardé est perdu lors de la coupure selon la notice.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="25" y="38" fill="#d3eb56" font-size="24" text-anchor="start" font-weight="700">La coupure entre deux sauvegardes</text><text x="30" y="137" fill="#d3eb56" font-size="21" text-anchor="start" font-weight="400">Sauvegarde périodique : 2 ou 5 min</text><path d="M52 225H470" fill="none" stroke="#9ebdad" stroke-width="3"/><circle cx="75" cy="225" r="8" fill="#d3eb56" stroke="#d3eb56" stroke-width="2"/><circle cx="245" cy="225" r="8" fill="#d3eb56" stroke="#d3eb56" stroke-width="2"/><text x="65" y="170" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">Valeur</text><text x="65" y="195" fill="#ffffff" font-size="20" text-anchor="start" font-weight="400">enregistrée</text><path d="M185 187L244 215" fill="none" stroke="#d3eb56" stroke-width="3"/><path d="M236.0 215.5L244 215L239.3 208.5" fill="none" stroke="#d3eb56" stroke-width="3"/><rect x="253" y="245" width="108" height="53" rx="8" fill="#244b36"/><text x="263" y="276" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Non</text><text x="263" y="300" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">sauvé</text><path d="M370 200v90" fill="none" stroke="#f5a798" stroke-width="4"/><text x="350" y="328" fill="#f5a798" font-size="20" text-anchor="start" font-weight="400">Coupure</text><path d="M370 225L460 225" fill="none" stroke="#d3eb56" stroke-width="3"/><path d="M453.0 228.8L460 225L453.0 221.2" fill="none" stroke="#d3eb56" stroke-width="3"/><rect x="35" y="380" width="450" height="105" rx="8" fill="#244b36"/><text x="47" y="407" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="700">Redémarrage</text><text x="47" y="438" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Reprise de la dernière valeur</text><text x="47" y="462" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">enregistrée</text></svg>
</div>
*F30 peut enregistrer le cumul toutes les 2 ou 5 minutes ; l’intervalle non sauvegardé est perdu lors de la coupure selon la notice.*

## Une limite de sauvegarde ne donne pas un volume perdu connu

La durée entre deux écritures ne suffit pas à calculer la quantité d’air manquante. Il faudrait connaître le débit réel pendant la portion non enregistrée, sur une base et avec une qualité de mesure appropriées. Ce guide ne remplit donc pas un trou de données avec le débit nominal du poste.

Dans votre export, marquez l’intervalle concerné comme incomplet. Le [journal des données d’audit](/guides/audit-reseau-air-comprime-protocole-mesures/) permet de conserver cette rupture avec son motif. Une courbe continue reconstruite sans signalement donnerait une confiance artificielle au bilan.

## Arbitrer fréquence d’écriture et durée d’utilisation

SMC associe la conservation du cumul à une limite de mises à jour de mémoire et demande d’examiner la durée d’utilisation à partir des conditions du produit. La notice distingue aussi l’effet des remises à zéro externes répétées. Une fréquence de sauvegarde plus élevée ne doit donc pas être choisie sans lire cette portée.

Le bon réglage dépend du besoin de suivi et des possibilités de journalisation de l’installation. Faites retenir puis enregistrer le choix par le responsable du système de mesure.

## Une fiche d’incident réutilisable

| Information | Question résolue |
| --- | --- |
| Référence et configuration | Quel comportement de conservation est attendu ? |
| Heure de la dernière sauvegarde connue | Où commence la zone incertaine ? |
| Coupure et redémarrage | Quelle rupture temporelle faut-il signaler ? |
| Commande de remise à zéro | Le total a-t-il été effacé volontairement ? |
| Source du total exporté | AMS ou calcul d’un autre système ? |

Après l’intervention, conservez ces points dans la [fiche de maintenance](/guides/fiche-intervention-air-comprime/). Un essai de conservation autorisé peut vérifier le comportement choisi sans être confondu avec un étalonnage du débitmètre.

Un arrêt qui traverse un intervalle sans sauvegarde laisse une lacune dans le suivi. Conservez-la avec les horaires de coupure et la configuration F30 afin de pouvoir interpréter la reprise.

## Sources et méthode

Consultées le **2 octobre 2026**. Analyse documentaire et propositions de relevé par CompatAir, avec assistance d’IA et relecture interne. Aucun essai physique ni validation professionnelle externe.

- [SMC PFxx-OMA1007-B, F30, p.98](https://www.smcworld.com/assets/manual/en-jp/files/PFxx-OMA1007.pdf#page=99)
