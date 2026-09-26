---
title: "Purgeur de condensats temporisé ou à détection de niveau : comment choisir ?"
seoTitle: "Purgeur temporisé ou à niveau : choisir sans gaspiller"
description: "Comparer une purge temporisée et une évacuation pilotée par niveau : fonctionnement, pertes d’air, contrôles et critères de sélection pour le réseau d’atelier."
pubDate: 2026-09-26
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "garage-automobile"]
readingTime: 6
reviewStatus: internal
relatedGuides:
  - entretien-compresseur-purge-condensats
  - separateur-huile-eau-condensats-compresseur
  - detecter-mesurer-fuites-air-comprime
sources:
  - https://www.beko-technologies.com/en-en/products/condensate-technology/condensate-drain/
  - https://www.beko-technologies.com/fileadmin/beko-technologies.com/EN/manuals_en/bekomat_su/bekomat_32u_manual_en_01-1611_v01.pdf
  - https://www.jorc.com/en/products/condensate-drains/timer-drains/fluidrain/
---

Une purge automatique peut s’ouvrir à intervalles réglés ou attendre qu’un volume de condensat soit détecté. Le choix porte donc autant sur **la commande de l’évacuation** que sur la taille du raccord. Un système qui ouvre trop longtemps peut évacuer de l’air ; un système qui n’évacue plus laisse les condensats s’accumuler.

Pour remplacer une purge manuelle ou un purgeur défaillant, commencez par identifier le point concerné : réservoir, filtre, séparateur ou sécheur. Le débit nominal du compresseur ne suffit pas à décrire toutes les conditions de ce point.

## Deux principes à comparer sur leur fonctionnement

Le [JORC FLUIDRAIN](https://www.jorc.com/en/products/condensate-drains/timer-drains/fluidrain/) est un exemple de purge temporisée. Sa fiche donne un réglage d’ouverture de **0,5 à 10 secondes** et un intervalle fermé de **0,5 à 45 minutes**. Ce sont les plages de réglage de ce produit, pas des consignes adaptées à toutes les installations.

Le [BEKOMAT](https://www.beko-technologies.com/en-en/products/condensate-technology/condensate-drain/) utilise un capteur capacitif de niveau et déclenche une électrovanne lorsque le condensat atteint le seuil. BEKO présente ce principe comme une évacuation sans perte d’air. La [notice du 32U](https://www.beko-technologies.com/fileadmin/beko-technologies.com/EN/manuals_en/bekomat_su/bekomat_32u_manual_en_01-1611_v01.pdf) emploie une formulation plus nuancée, « pratiquement sans perte », et définit un domaine d’utilisation précis.

<p class="article-table-hint">Sur petit écran, faites défiler le schéma horizontalement.</p>

<div class="article-infographic" tabindex="0" role="group" aria-label="La commande change le moment de la purge">
<svg viewBox="0 0 720 330" role="img" aria-labelledby="drain-title drain-desc" xmlns="http://www.w3.org/2000/svg">
<title id="drain-title">La commande change le moment de la purge</title><desc id="drain-desc">Une temporisation déclenche selon une durée. Un capteur de niveau déclenche selon la présence de condensat. Dans les deux cas, l’évacuation et le fonctionnement doivent être vérifiés.</desc>
<rect width="720" height="330" rx="20" fill="#10281e"/>
<text x="28" y="42" fill="#d3eb56" font-size="23" font-weight="700">La commande change le moment de la purge</text>
<rect x="28" y="80" width="310" height="154" rx="12" fill="#203f31"/><circle cx="82" cy="137" r="29" fill="none" stroke="#d3eb56" stroke-width="4"/><path d="M82 116v21l15 10" stroke="#d3eb56" stroke-width="4" fill="none"/><text x="127" y="145" fill="white" font-size="22">Temporisation</text><text x="49" y="203" fill="white" font-size="18">Le temps déclenche l’ouverture</text><rect x="382" y="80" width="310" height="154" rx="12" fill="#203f31"/><path d="M420 110v64h48v-64" stroke="#8abfa3" stroke-width="4" fill="none"/><path d="M425 149h38" stroke="#d3eb56" stroke-width="7"/><text x="488" y="145" fill="white" font-size="22">Niveau</text><text x="402" y="203" fill="white" font-size="18">Le condensat déclenche la purge</text><text x="28" y="294" fill="white" font-size="18">Automatique ne signifie pas dispensé de contrôle.</text>
</svg>
</div>


## Une temporisation ne mesure pas une perte d’air

**Exemple de calcul CompatAir :** une commande observée ouvre 5 secondes au total toutes les 10 minutes de temps écoulé. Elle est donc ouverte `6 × 5 = 30 secondes par heure`, soit 0,5 minute.

Si l’air seul s’échappait pendant toute cette ouverture à un débit mesuré et constant de 100 L/min sur une base définie, cela représenterait `0,5 × 100 = 50 litres par heure`. Les cinq secondes, les dix minutes et les 100 L/min sont des hypothèses. Dans un purgeur réel, une partie de l’ouverture évacue du liquide et le débit peut varier.

La temporisation renseigne donc le temps ouvert ; **elle ne donne pas, à elle seule, le volume d’air perdu**. Pour annoncer une économie après remplacement, il faut mesurer ou établir de façon documentée la partie de l’ouverture pendant laquelle l’air passe, puis comparer des conditions représentatives.

## Choisir selon le condensat et l’environnement

La notice BEKOMAT 32U exige notamment une pression de service et une alimentation électrique compatibles. Elle exclut l’usage de ce modèle là où le gel peut survenir et précise que le purgeur seul ne garantit pas une qualité d’air définie. Ces limites ne doivent pas disparaître derrière l’expression « sans perte ».

Notre grille de consultation demande : pression minimale et maximale au point de purge, température et risque de gel, quantité et nature des condensats, alimentation disponible, conditions d’évacuation, accès de maintenance et retour d’alarme éventuel. Indiquez aussi si l’installation reste pressurisée à l’arrêt.

Pour un atelier non chauffé, consultez le [guide de séchage en ambiance froide](/guides/secheur-air-comprime-atelier-non-chauffe/). Pour les condensats huileux, l’évacuation est à relier à une filière adaptée : le [séparateur huile-eau](/guides/separateur-huile-eau-condensats-compresseur/) traite une autre fonction que le déclenchement de la purge.

## Réceptionner avec des observations utiles

<p class="article-table-hint">Sur petit écran, faites défiler le tableau horizontalement.</p>

<div class="article-table-scroll" tabindex="0" role="region" aria-label="Observations proposées pour la réception d’un purgeur">

| Observation | Question à résoudre | Trace à conserver |
| --- | --- | --- |
| Accumulation avant purge | L’évacuation répond-elle au besoin ? | Condition de production et moment du contrôle |
| Soufflage prolongé après évacuation | La vanne reste-t-elle ouverte ou fuit-elle ? | Durée et état de fonctionnement |
| Alarme ou absence de cycle | Le diagnostic de la notice est-il applicable ? | Code, état électrique et pression relevés |
| Retour à un fonctionnement normal | L’intervention a-t-elle corrigé le défaut ? | Même contrôle après intervention |

</div>


Il s’agit d’un protocole d’observation, pas d’une procédure de démontage sous pression. L’essai, l’isolement et la maintenance suivent la notice du modèle et les procédures du site. Une commande « test » qui fait du bruit ne démontre pas à elle seule que le condensat est évacué correctement dans toutes les conditions.

## Quel choix retenir ?

Une [commande par niveau](/glossaire/#purgeur-detection-niveau) répond directement à la présence du liquide ; une temporisation exige que les réglages conviennent aux conditions rencontrées. Pour conclure, comparez l’évacuation réelle, la perte d’air constatée et les contraintes d’entretien. Ne chiffrez pas un retour sur investissement avec une fuite imaginaire.

Le gain attendu doit être mesuré après installation et inscrit dans la [fiche d’intervention](/guides/fiche-intervention-air-comprime/), avec le réglage initial et le contrôle de suivi. C’est cette trace qui distingue une amélioration démontrée d’un simple changement d’équipement.

## Sources et méthode

Sources consultées le **26 septembre 2026**. Analyse documentaire préparée avec assistance d’IA ; aucun essai physique ni validation professionnelle externe. Les calculs CompatAir et les hypothèses sont identifiés dans le texte.

- [BEKO TECHNOLOGIES, fonctionnement des purgeurs BEKOMAT](https://www.beko-technologies.com/en-en/products/condensate-technology/condensate-drain/)
- [BEKO TECHNOLOGIES, notice BEKOMAT 32U, utilisation conforme et limites](https://www.beko-technologies.com/fileadmin/beko-technologies.com/EN/manuals_en/bekomat_su/bekomat_32u_manual_en_01-1611_v01.pdf)
- [JORC, fiche FLUIDRAIN, temporisations et conditions de service](https://www.jorc.com/en/products/condensate-drains/timer-drains/fluidrain/)
