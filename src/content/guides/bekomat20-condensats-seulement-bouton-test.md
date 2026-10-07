---
title: "BEKOMAT 20 purge uniquement quand on appuie sur TEST : où chercher ?"
seoTitle: "BEKOMAT 20 : vidange seulement avec TEST"
description: "La notice distingue vidange manuelle et automatique. Quand TEST fonctionne seul, faites vérifier pente d’arrivée, capteur et pression minimale du modèle."
pubDate: "2026-10-07"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["purgeur-condensats-temporise-detection-niveau", "purgeur-smc-ad402-normalement-ouvert-petit-compresseur", "entretien-compresseur-purge-condensats"]
sources: ["https://www.beko-technologies.com/fileadmin/beko-technologies.com/EN/manuals_en/bekomat_standard/bm20_fm_ba_01-4318_en_01_00.pdf"]
---

Le bouton **TEST** fait sortir les condensats, mais aucune vidange automatique n’est observée. Ce symptôme est précisément décrit dans la notice du BEKOMAT 20. Il ne doit pas être classé dans la même ligne que « aucune vidange, même avec TEST ».

Le [tableau de diagnostic, page 57 de la notice 20/20 FM](https://www.beko-technologies.com/fileadmin/beko-technologies.com/EN/manuals_en/bekomat_standard/bm20_fm_ba_01-4318_en_01_00.pdf#page=57) demande, pour la vidange uniquement sur TEST, de vérifier la conduite d’arrivée avec une **pente supérieure à 3 %**, le tube du capteur et la pression minimale nécessaire. Ces contrôles concernent le cas constructeur cité. La capacité du compresseur, exprimée seule en litres par minute, ne permet pas d’éliminer ces causes.

## Décrire l’observation sans entretenir manuellement le problème

Notez quelle action a déclenché la sortie, ce qui est sorti et si le fonctionnement automatique a ensuite été observé. La répétition quotidienne d’un appui manuel peut donner l’impression d’un purgeur opérationnel tout en laissant son automatisme non vérifié.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Le test manuel ne prouve pas l’automatisme" style="margin-bottom:1.75rem">
<svg viewBox="0 0 520 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="bekomat20-condensats-seulement-bouton-test-title bekomat20-condensats-seulement-bouton-test-desc" font-family="Manrope Variable, Arial, sans-serif"><title id="bekomat20-condensats-seulement-bouton-test-title">Le test manuel ne prouve pas l’automatisme</title><desc id="bekomat20-condensats-seulement-bouton-test-desc">La notice distingue explicitement la vidange uniquement sur TEST et la vidange impossible. Les deux symptômes ne demandent pas le même diagnostic.</desc><rect width="520" height="480" rx="20" fill="#10281e"/><text x="28" y="42" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Le test manuel ne prouve pas l’automatisme</text><rect x="28" y="88" width="464" height="92" rx="12" fill="#244b36"/><text x="45" y="120" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">TEST provoque une vidange</text><text x="45" y="154" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Ce trajet peut fonctionner manuellement</text><path d="M260 184v17m-7-7l7 7 7-7" fill="none" stroke="#9ebdad" stroke-width="3"/><rect x="28" y="208" width="464" height="92" rx="12" fill="#244b36"/><text x="45" y="240" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Pas de vidange automatique</text><text x="45" y="274" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Arrivée, capteur et pression à examiner</text><path d="M260 304v17m-7-7l7 7 7-7" fill="none" stroke="#9ebdad" stroke-width="3"/><rect x="28" y="328" width="464" height="92" rx="12" fill="#244b36"/><text x="45" y="360" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Contrôle selon la notice</text><text x="45" y="394" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Puis observation du retour automatique</text></svg>
</div>

*La notice distingue explicitement la vidange uniquement sur TEST et la vidange impossible. Les deux symptômes ne demandent pas le même diagnostic.*

Nous ne proposons pas de maintenir TEST enfoncé ni de remplacer la commande de niveau par une vidange continue. Le résultat manuel sert au diagnostic de la notice ; il ne fournit pas une nouvelle méthode d’exploitation du réseau.

## Vérifier l’arrivée avant de chercher un réglage électronique

Faites relever le trajet réel de la conduite qui apporte les condensats. Un croquis montre les points hauts, raccordements et pentes. Pour illustrer le critère géométrique seulement, une pente de 3 % correspond à 30 mm de différence de hauteur par mètre horizontal. Le document demande **plus** de 3 % : l’exemple ne doit pas être transformé en conformité à la limite exacte.

La façon d’amener le condensat peut donc rester en cause même lorsque la sortie fonctionne sous commande manuelle. Toute modification du circuit se prépare suivant le schéma du système et la procédure d’isolement appropriée. Nous ne donnons pas de méthode d’ouverture d’une conduite sous pression.

## La pression au purgeur doit être celle du cas réel

Relever la pression disponible pendant le fonctionnement concerné, puis la comparer au domaine de la version exacte. Une cuve pleine au début de la journée ne démontre pas la pression locale lors d’une séquence de vidange. Le [guide SMC AD402](/guides/purgeur-smc-ad402-normalement-ouvert-petit-compresseur/) illustre une autre architecture et ne fournit pas les limites du BEKOMAT.

| Observation à conserver | Interprétation limitée |
| --- | --- |
| Sortie présente avec TEST | Vidange possible dans cette action observée |
| Automatisme non observé | Fonction automatique à diagnostiquer |
| Pression locale non relevée | Critère de fonctionnement encore ouvert |
| Conduite d’arrivée non décrite | Géométrie d’alimentation non qualifiée |
| Capteur non examiné selon la notice | État du système de détection inconnu |

## Reprendre l’observation après l’intervention

L’équipe de maintenance suit les contrôles du tableau, documente ce qu’elle trouve et ce qu’elle corrige. Après remise en service, le résultat attendu concerne l’automatisme dans les conditions de production prévues. Un nouvel appui sur TEST, pris seul, ne clôture pas ce diagnostic.

Le [guide d’entretien et de purge](/guides/entretien-compresseur-purge-condensats/) replace l’observation dans la chaîne de gestion des condensats. Le [dossier des purgeurs](/guides/purgeur-condensats-temporise-detection-niveau/) distingue vidange temporisée et pilotage par niveau.

Le verdict est borné mais utile : lorsque seul TEST fonctionne, l’arrivée, la détection et la pression sont les premiers points de la notice à faire examiner. Le compresseur ne doit pas être remplacé sur la seule base de ce symptôme. La conclusion de maintenance dépend du retour documenté de la vidange automatique.

Sources primaires consultées le **7 octobre 2026**. Analyse documentaire de CompatAir avec assistance d’IA et relecture interne ; aucun essai physique ni avis professionnel externe. Les propositions de relevé et les scénarios de calcul sont distingués des données fabricant.
