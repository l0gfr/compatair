---
title: "Choisir un compresseur d’air : la méthode complète, des outils au réseau"
description: "Neuf étapes pour vérifier le débit, la pression, les usages simultanés, le réseau et les informations manquantes."
pubDate: 2026-07-13
updatedDate: 2026-09-26
category: "Choisir"
audiences: [particulier, professionnel]
metiers: []
readingTime: 14
featured: true
sources:
  - https://www.atlascopco.com/content/dam/atlas-copco/local-countries/france/documents/compressor-technique/Compressed-Air-Manual-9th-edition_compressed.pdf
  - https://www.einhell.fr/p/4133330-tc-pe-150/
  - https://www.einhell.fr/p/4138550-tc-pa-50/
  - https://www.einhell.fr/p/4138540-tc-pp-220/
  - https://www.einhell.fr/p/4010800-te-ac-430-90-10/
  - https://www.einhell.fr/p/4010393-tc-ac-240-50-10-of
---

Choisir un compresseur ne consiste pas à [choisir une cuve de 50 ou 100 litres](/guides/choisir-volume-cuve-24-50-90-litres/), puis à vérifier que la pression maximale atteint 8 ou 10 bar. Il faut partir des outils, établir leur besoin réel, puis vérifier que le compresseur et le réseau peuvent fournir ce besoin au point d’utilisation.

Le [manuel technique Atlas Copco](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/france/documents/compressor-technique/Compressed-Air-Manual-9th-edition_compressed.pdf) structure le problème autour de la pression de travail, de la consommation nominale, des facteurs d’utilisation, de la simultanéité, du débit libre délivré et des pertes du réseau. CompatAir reprend cette logique en séparant strictement les données publiées des hypothèses.

<svg viewBox="0 0 760 360" role="img" aria-labelledby="sizing-title sizing-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="sizing-title">Les neuf étapes pour choisir un compresseur</title><desc id="sizing-desc">La vérification part des outils, puis traite leur pression, leur consommation, leur utilisation simultanée, le débit restitué, la réserve, le réseau, la cuve et les informations manquantes.</desc>
  <rect width="760" height="360" rx="22" fill="#10281e"/><text x="38" y="45" fill="#d3eb56" font-size="15" font-weight="700">COMMENT COMPATAIR VÉRIFIE UNE CONFIGURATION</text>
  <g font-family="Manrope, sans-serif" font-size="15" font-weight="700">
    <rect x="38" y="75" width="205" height="58" rx="12" fill="#28533f"/><text x="58" y="109" fill="white">1. Lister les outils</text>
    <rect x="278" y="75" width="205" height="58" rx="12" fill="#28533f"/><text x="298" y="109" fill="white">2. Relever les bar</text>
    <rect x="518" y="75" width="205" height="58" rx="12" fill="#28533f"/><text x="538" y="109" fill="white">3. Relever les L/min</text>
    <rect x="38" y="157" width="205" height="58" rx="12" fill="#356f54"/><text x="58" y="191" fill="white">4. Fixer la simultanéité</text>
    <rect x="278" y="157" width="205" height="58" rx="12" fill="#356f54"/><text x="298" y="191" fill="white">5. Lire le débit restitué</text>
    <rect x="518" y="157" width="205" height="58" rx="12" fill="#356f54"/><text x="538" y="191" fill="white">6. Calculer la marge</text>
    <rect x="38" y="239" width="205" height="58" rx="12" fill="#d3eb56"/><text x="58" y="273" fill="#10281e">7. Vérifier le réseau</text>
    <rect x="278" y="239" width="205" height="58" rx="12" fill="#d3eb56"/><text x="298" y="273" fill="#10281e">8. Traiter la cuve</text>
    <rect x="518" y="239" width="205" height="58" rx="12" fill="#e39a5e"/><text x="538" y="273" fill="#10281e">9. Exposer les limites</text>
  </g>
  <path d="M243 104h35M483 104h35M620 133v24M518 186h-35M278 186h-35M140 215v24M243 268h35M483 268h35" stroke="#9fb3a8" stroke-width="2" stroke-dasharray="5 5"/>
  <text x="38" y="332" fill="#9fb3a8" font-size="14">Une donnée absente arrête le calcul au lieu d’être remplacée par une moyenne générique.</text>
</svg>

## Établir la liste des consommateurs

La première étape est un inventaire. Pour chaque outil, relevez la consommation d’air, la pression de service et la source de ces valeurs. Une désignation comme « meuleuse pneumatique » est insuffisante : deux modèles d’une même catégorie peuvent demander des débits différents.

La [meuleuse d’angle Einhell TC-PA 50](https://www.einhell.fr/p/4138550-tc-pa-50/) est donnée pour 113 L/min à 6,3 bar. La [meuleuse droite TC-PP 220](https://www.einhell.fr/p/4138540-tc-pp-220/) demande 128 L/min à la même pression. Cette différence de 15 L/min existe avant toute marge ou perte de réseau.

Pour un outil réglable, conservez plusieurs points. La soufflette Metabo BP 200, par exemple, possède une plage publiée. Un calcul effectué sur un point médian ne décrit pas automatiquement le réglage maximal.

## Fixer la pression au point d’utilisation

La pression maximale inscrite sur le compresseur n’est pas la pression disponible à l’outil. Atlas Copco indique que la pression de travail dépend du consommateur, mais aussi des conduites, vannes, sécheurs, filtres et variations de régulation.

Le besoin de l’outil doit donc être exprimé au point d’utilisation. Si la fiche publie 100 L/min à 6,3 bar, il faut chercher un débit restitué à 6,3 bar. Comparer cette consommation à un débit mesuré à 0 bar revient à comparer deux conditions différentes.

Dans un réseau où plusieurs outils demandent des pressions différentes, le besoin le plus élevé peut déterminer la pression générale, tandis que des détendeurs règlent les autres points. Atlas Copco précise toutefois qu’une pression générale plus élevée peut devenir économiquement défavorable. Pour un atelier domestique, cette remarque invite surtout à ne pas augmenter la pression sans diagnostiquer les pertes.

## Additionner uniquement les usages simultanés

La consommation nominale totale est la somme des consommateurs qui fonctionnent réellement ensemble. Le manuel Atlas Copco demande d’estimer les facteurs d’utilisation et le nombre de machines utilisées simultanément. Il souligne que des meuleuses ou équipements de sablage peuvent fonctionner plusieurs minutes en continu, même si leur taux d’utilisation sur une journée paraît faible.

Si la ponceuse [Einhell TC-PE 150](https://www.einhell.fr/p/4133330-tc-pe-150/) à 100 L/min et la TC-PP 220 à 128 L/min fonctionnent ensemble, le besoin nominal est de 228 L/min à 6,3 bar. Si elles sont utilisées successivement, le maximum nominal est 128 L/min. CompatAir ne choisit pas arbitrairement entre ces deux scénarios.

## Lire le débit restitué, pas le débit aspiré

Le débit aspiré décrit l’air admis par le groupe. Le [débit restitué, aussi appelé FAD](/glossaire/#fad), décrit la capacité utile selon des conditions de référence. Le manuel Atlas Copco indique que la capacité du compresseur doit couvrir la consommation publiée des outils. Le guide [débit restitué ou débit aspiré](/guides/debit-restitue-fad-vs-debit-aspire/) explique cette différence en détail.

L’[Einhell TC-AC 240/50/10 OF](https://www.einhell.fr/p/4010393-tc-ac-240-50-10-of) illustre l’écart : 240 L/min aspirés, 107 L/min à 4 bar et 76 L/min à 7 bar. À 6,3 bar, l’interpolation entre les deux points publiés donne environ 83 L/min. Les 240 L/min ne permettent donc pas d’alimenter la ponceuse de 100 L/min en continu.

<svg viewBox="0 0 760 330" role="img" aria-labelledby="case-title case-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="case-title">Cas de dimensionnement de deux outils</title><desc id="case-desc">Une ponceuse et une meuleuse utilisées ensemble demandent 228 litres par minute à 6,3 bar. Le TE-AC 430 fournit environ 202 litres par minute, tandis que le seuil CompatAir est 285 litres par minute.</desc>
  <rect width="760" height="330" rx="22" fill="#eef2e9"/><text x="40" y="48" fill="#143426" font-size="22" font-weight="700">Cas : ponceuse + meuleuse simultanées</text>
  <text x="40" y="91" fill="#56685e" font-size="15">Besoin publié à 6,3 bar</text><rect x="40" y="105" width="456" height="36" rx="8" fill="#19704f"/><text x="510" y="130" fill="#143426" font-size="17" font-weight="700">228 L/min</text>
  <text x="40" y="178" fill="#56685e" font-size="15">TE-AC 430/90/10 interpolé à 6,3 bar</text><rect x="40" y="192" width="404" height="36" rx="8" fill="#b95d26"/><text x="458" y="217" fill="#143426" font-size="17" font-weight="700">202 L/min</text>
  <text x="40" y="265" fill="#56685e" font-size="15">Réserve proposée par CompatAir, besoin × 1,25</text><rect x="40" y="279" width="570" height="24" rx="7" fill="#d3eb56"/><text x="623" y="298" fill="#143426" font-size="16" font-weight="700">285</text>
</svg>

## Interpoler seulement entre deux points

Lorsqu’un fabricant publie 210 L/min à 4 bar et 200 L/min à 7 bar, une interpolation linéaire à 6,3 bar est reproductible. Elle ne prouve pas que la courbe réelle est parfaitement droite, mais elle reste bornée par deux mesures documentées et son caractère calculé est affiché.

Avec un seul point à 8 ou 10 bar, CompatAir ne recopie plus cette valeur à 6,3 bar. Le résultat devient « données insuffisantes ». Cette règle est volontairement stricte : elle empêche de transformer une valeur isolée en courbe complète.

## Distinguer besoin publié et réserve

Le premier résultat compare le débit restitué disponible à la consommation publiée. CompatAir affiche ensuite un seuil égal au besoin multiplié par 1,25. Cette réserve de 25 % est un repère proposé par CompatAir, pas une prescription universelle d’Atlas Copco ou du fabricant de l’outil.

Dans une installation professionnelle, la réserve dépend notamment des fuites, de l’usure, des évolutions prévues et du coût d’une interruption. Le manuel Atlas Copco demande de traiter ces éléments dès l’étude. Une marge unique ne remplace donc pas un audit de réseau.

## Dimensionner le réseau et les raccords

Atlas Copco fixe trois objectifs à la distribution : faible chute de pression, fuites minimales et séparation efficace des condensats lorsque l’air n’est pas séché. Le manuel indique aussi que les pertes les plus importantes apparaissent fréquemment dans les flexibles, raccords et accessoires.

Le diamètre intérieur, la longueur, le débit, la pression initiale, les coudes et les vannes sont nécessaires au calcul. Une formule qui ne demanderait que la longueur du flexible et un diamètre nominal serait insuffisante. CompatAir ne retranche donc aucun forfait générique. Le dossier sur [l’installation d’un réseau d’air comprimé](/guides/installer-reseau-air-comprime-atelier/) détaille cette partie du dimensionnement.

## Comprendre ce que la cuve change

Le réservoir est un tampon. Atlas Copco indique qu’il équilibre les pulsations, refroidit l’air et collecte de la condensation. Son dimensionnement dépend du débit du compresseur, du système de régulation et du profil de consommation.

Une cuve plus grande peut soutenir une pointe courte. Elle ne crée pas de débit continu. Calculer une durée exige au minimum les pressions de départ et d’arrêt, le débit demandé, le débit produit pendant la phase et les conditions retenues. Sans ces entrées, afficher une autonomie en secondes serait artificiel.

## Construire une décision traçable

Un dimensionnement défendable doit permettre de répondre à neuf questions :

1. Quels outils seront raccordés ?
2. Quelle consommation chaque fabricant publie-t-il ?
3. À quelle pression ces consommations sont-elles données ?
4. Quels outils fonctionneront réellement ensemble ?
5. Quel débit restitué le compresseur publie-t-il à cette pression ?
6. Quelle marge est appliquée et par qui est-elle définie ?
7. Quelles pertes le réseau peut-il ajouter ?
8. Quel rôle précis la cuve doit-elle jouer ?
9. Quelles données restent manquantes ?

Si la réponse à la cinquième question manque, le modèle ne doit pas être déclaré compatible. C’est le point central de la méthode CompatAir.

Pour les postes d’assemblage et d’usinage spécialisés, consultez les dossiers consacrés aux [taraudeuses pneumatiques](/guides/compresseur-pour-taraudeuse-pneumatique/) et aux [marteaux à river](/guides/compresseur-pour-marteau-a-river-pneumatique/). Ils distinguent les références exactes, le débit publié et les conditions de réception du poste.

## Sources

- [Atlas Copco, Compressed Air Manual, 9e édition, chapitres 3.1 et 3.6](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/france/documents/compressor-technique/Compressed-Air-Manual-9th-edition_compressed.pdf)
- [Einhell, TC-PE 150](https://www.einhell.fr/p/4133330-tc-pe-150/)
- [Einhell, TC-PA 50](https://www.einhell.fr/p/4138550-tc-pa-50/)
- [Einhell, TC-PP 220](https://www.einhell.fr/p/4138540-tc-pp-220/)
- [Einhell, TE-AC 430/90/10](https://www.einhell.fr/p/4010800-te-ac-430-90-10/)
- [Einhell, TC-AC 240/50/10 OF](https://www.einhell.fr/p/4010393-tc-ac-240-50-10-of)
