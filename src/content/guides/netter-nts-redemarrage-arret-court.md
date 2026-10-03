---
title: "Netter NTS : redémarrage manqué après un arrêt très court"
seoTitle: "Netter NTS : pourquoi un arrêt bref bloque le départ"
description: "Un arrêt NTS inférieur à une seconde peut laisser le piston sans retour complet. Comparez la séquence, la version ressort ou gravité et la température."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["netter-nts-frequence-amplitude-etranglement", "silencieux-pneumatique-colmate-contre-pression", "diagnostiquer-chute-pression-air-comprime"]
sources: ["https://www.nettervibration.com/files/NetterVibration/Products/NTS/Documents/KBA-NTS-1895DE_EN.pdf"]
---

**Un Netter NTS qui ne redémarre pas immédiatement après un arrêt très court ne demande pas forcément plus de débit.** Sa notice explique que le piston peut ne pas avoir retrouvé sa position de départ. Le temps entre deux commandes devient alors une donnée de diagnostic.

La [section 7 du manuel NTS](https://www.nettervibration.com/files/NetterVibration/Products/NTS/Documents/KBA-NTS-1895DE_EN.pdf#page=17) décrit ce risque pour les arrêts inférieurs à **1 seconde**. Elle distingue le retour par **ressort sur la version 1** et par **gravité sur la version 2**. Le passage ne garantit pas qu’une seconde suffise pour toutes les conditions, mais il fournit un mécanisme à examiner avant de modifier l’alimentation.

## Comparer un départ isolé et un départ répété

Un fonctionnement correct après un arrêt long et des ratés après des coupures brèves orientent vers une question de retour. Relevez les commandes réellement reçues, les durées d’arrêt et l’ordre des événements. Le temps programmé dans un automate doit être distingué du temps observé au niveau du circuit qui alimente le vibreur.

Préparez la comparaison sur le procédé autorisé, avec le montage et la matière habituels. Il ne s’agit pas de commander un vibreur hors de ses conditions de sécurité pour rechercher une limite. La notice réserve l’installation, la maintenance et le dépannage au personnel qualifié prévu pour ces opérations.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg viewBox="0 0 520 350" role="img" aria-labelledby="netter-nts-redemarrage-arret-court-svg-title netter-nts-redemarrage-arret-court-svg-desc" xmlns="http://www.w3.org/2000/svg">
<title id="netter-nts-redemarrage-arret-court-svg-title">Le temps d’arrêt permet au piston de revenir</title><desc id="netter-nts-redemarrage-arret-court-svg-desc">Le manuel indique qu’un arrêt inférieur à 1 seconde peut ne pas laisser le piston revenir à sa position finale. Retour par ressort pour la version 1, par gravité pour la version 2. Aucune seconde minimale universelle n’est certifiée.</desc>
<rect width="520" height="350" rx="20" fill="#10281e"/>
<g font-family="Manrope Variable, sans-serif"><text x="28" y="42" fill="white" font-size="22">NTS : entre deux commandes de marche</text><path d="M40 126h125v55h90v-55h125v55h95" stroke="#d3eb56" stroke-width="4" fill="none"/><text x="43" y="105" fill="white" font-size="18">Marche</text><text x="171" y="217" fill="white" font-size="18">Arrêt</text><text x="295" y="105" fill="white" font-size="18">Marche</text><path d="M169 239h82m-72-7-10 7 10 7m62-14 10 7-10 7" stroke="#9ebdad" stroke-width="2" fill="none"/><text x="28" y="289" fill="white" font-size="22">&lt; 1 s : risque de retour incomplet</text><text x="28" y="327" fill="white" font-size="20">Version 1 : ressort / version 2 : gravité</text></g>
</svg>
<figcaption>Le manuel indique qu’un arrêt inférieur à 1 seconde peut ne pas laisser le piston revenir à sa position finale. Retour par ressort pour la version 1, par gravité pour la version 2. Aucune seconde minimale universelle n’est certifiée.</figcaption>
</figure>

## Ne pas remplacer le mécanisme par une règle de pression

Un défaut lié au retour et un défaut lié à la pression peuvent coexister. Le [chapitre de démarrage à basse température](https://www.nettervibration.com/files/NetterVibration/Products/NTS/Documents/KBA-NTS-1895DE_EN.pdf#page=16) indique qu’à une ambiance inférieure ou égale à **10 °C**, une pression de démarrage supérieure peut être nécessaire. Cette condition thermique forme une autre piste, à conserver séparément du temps d’arrêt.

La méthode de relevé peut rester ciblée : durée de coupure, température ambiante, version du NTS, pression d’alimentation et résultat du départ. Un départ manqué dans une seule configuration ne doit pas être converti en défaut permanent du compresseur.

| Comportement observé | Piste à examiner avec la notice du modèle |
| --- | --- |
| Départ correct après arrêt long, ratés après arrêts brefs | Retour du piston et chronologie de commande |
| Défaut apparu avec une baisse de température | Conditions de démarrage à froid |
| Défaut après modification de l’échappement | Étranglement et amplitude |
| Difficulté quelle que soit la séquence | Alimentation et autres causes de dépannage du fabricant |

Cette grille propose un ordre de collecte ; elle n’attribue pas automatiquement la panne.

## Examiner les modifications du circuit de sortie

Le [guide NTS fréquence/amplitude](/guides/netter-nts-frequence-amplitude-etranglement/) reprend la consigne de réduction d’amplitude et son risque de démarrage. Une correction visant le bruit ou le mouvement par étranglement peut donc changer la répétabilité des départs.

Le silencieux et le flexible d’échappement doivent aussi être identifiés. Le [guide de contre-pression d’échappement](/guides/silencieux-pneumatique-colmate-contre-pression/) aide à distinguer un obstacle ajouté d’une commande volontaire. Si le circuit d’alimentation a changé, le [diagnostic sous charge](/guides/diagnostiquer-chute-pression-air-comprime/) permet de rechercher une chute mesurée au poste.

## Faire qualifier la nouvelle séquence

La prochaine action consiste à transmettre au responsable du procédé ou au fabricant les séquences qui échouent et celles qui fonctionnent. Il peut alors vérifier une adaptation du temps d’arrêt, du montage ou du circuit dans le domaine du modèle.

Ne présentez pas un délai choisi lors d’un essai isolé comme un minimum universel des NTS. Le contrôle doit porter sur les conditions prévues, particulièrement celles qui changent le retour ou le départ. La distinction ressort/gravité rend aussi nécessaire de conserver la version exacte avant de réutiliser une séquence sur un autre poste.

## Sources et méthode

Sources fabricant consultées le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios de calcul et les procédures de réception proposées par CompatAir sont identifiés dans le texte.
