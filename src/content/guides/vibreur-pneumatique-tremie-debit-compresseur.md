---
title: "Vibreur pneumatique de trémie : consommation d’air et choix du compresseur"
seoTitle: "Vibreur pneumatique : débit d’air et compresseur"
description: "Comparez la consommation d’un vibreur de trémie à sa pression et à sa cadence. Exemple Netter NCT, avec distinction entre débit instantané et volume par cycle."
pubDate: "2026-09-26"
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "btp-chantier"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["utiliser-plusieurs-outils-pneumatiques", "guide-complet-dimensionner-compresseur-air", "diametre-longueur-flexible-air-comprime"]
sources: ["https://www.nettervibration.com/files/NetterVibration/Products/NCT/Documents/TD_NCT_EN.pdf", "https://www.nettervibration.com/files/NetterVibration/Products/NCT/Documents/KBA_NCT_NCB_NCR-1882DE_EN.pdf"]
---

**Un vibreur pneumatique peut créer un appel d’air important pendant une séquence courte.** Le compresseur et la liaison doivent être étudiés avec la consommation à la pression retenue, la durée des impulsions et les usages simultanés. Le volume moyen consommé ne suffit pas à vérifier la pression disponible pendant l’impulsion.

La sélection mécanique du vibreur reste une autre étape : ce guide ne déduit pas la capacité à vider une trémie de la seule consommation d’air.

## Le cas des turbines Netter NCT

La [fiche technique Netter NCT](https://www.nettervibration.com/files/NetterVibration/Products/NCT/Documents/TD_NCT_EN.pdf) indique une plage de fonctionnement de **2 à 6 bar**, avec de l’air comprimé ou de l’azote filtré à **5 µm ou moins**, et un fonctionnement sans lubrification. Dans son tableau, le NCT 1 consomme **19 à 45 L/min** et le NCT 5 **93 à 284 L/min** sur cette plage de pression.

La fiche emploie L/min. Le tableau consulté ne suffit pas à transformer ces nombres en débit volumique à une autre référence : faites confirmer les conditions de référence pour les rapprocher du débit restitué d’un compresseur.

<figure class="article-infographic article-infographic--compact">
<svg viewBox="0 0 520 390" role="img" aria-labelledby="vibreur-pneumatique-tremie-debit-compresseur-title vibreur-pneumatique-tremie-debit-compresseur-desc" xmlns="http://www.w3.org/2000/svg">
<title id="vibreur-pneumatique-tremie-debit-compresseur-title">NCT : des consommations très différentes</title><desc id="vibreur-pneumatique-tremie-debit-compresseur-desc">Bornes hautes publiées pour la plage 2–6 bar. L/min selon la fiche, sans assimilation à une autre référence volumique.</desc>
<rect width="520" height="390" rx="20" fill="#10281e"/>
<text x="28" y="48" fill="white" font-size="22">NCT 1</text><rect x="28" y="66" width="53.87" height="24" rx="4" fill="#d3eb56"/><text x="28" y="120" fill="#8abfa3" font-size="21">Plage publiée : 19 à 45 L/min</text>
<text x="28" y="162" fill="white" font-size="22">NCT 5</text><rect x="28" y="180" width="340.00" height="24" rx="4" fill="#d3eb56"/><text x="28" y="234" fill="#8abfa3" font-size="21">Plage publiée : 93 à 284 L/min</text>
</svg>
<figcaption>NCT : des consommations très différentes. Bornes hautes publiées pour la plage 2–6 bar. L/min selon la fiche, sans assimilation à une autre référence volumique.</figcaption>
</figure>

## Le débit moyen : un calcul utile mais incomplet

Prenons un **exemple entièrement hypothétique** : un consommateur demande 240 L/min pendant 10 secondes, une fois par minute. On suppose le débit constant pendant l’ouverture et exprimé dans une même référence volumique.

Le volume de la séquence vaut **240 × 10 / 60 = 40 litres** dans cette référence. Répété une fois par minute, il représente une moyenne de 40 L/min sur la minute. Pendant les 10 secondes, l’appel reste pourtant de 240 L/min.

Ces nombres ne décrivent aucun NCT particulier. Ils montrent pourquoi annoncer seulement la moyenne peut masquer la demande instantanée. Une réserve éventuelle et sa recharge doivent être étudiées avec les pressions admissibles et les autres consommateurs, comme dans le [guide du stockage secondaire](/guides/stockage-primaire-secondaire-air-comprime/).

## Une fiche de besoin à préparer avec l’intégrateur

| Donnée de fonctionnement | Information recherchée |
| --- | --- |
| Référence et pression | Point de consommation applicable |
| Durée de commande | Volume demandé par séquence |
| Nombre de séquences | Consommation sur la période |
| Déclenchements simultanés | Appel maximal prévu dans ce scénario |
| Liaison et distribution | Pression disponible au vibreur en service |
| Trémie et produit | Dossier de sélection mécanique distinct |

Nous recommandons de conserver le scénario maximal prévu et le scénario courant dans deux lignes différentes. Aucun coefficient de simultanéité par défaut n’est ajouté ici : il doit venir du fonctionnement réel ou d’une hypothèse explicitement acceptée.

## La fixation ne se résume pas au raccord d’air

La [notice Netter NCT, NCB et NCR](https://www.nettervibration.com/files/NetterVibration/Products/NCT/Documents/KBA_NCT_NCB_NCR-1882DE_EN.pdf) réserve les travaux concernés aux personnes disposant des compétences requises et décrit les conditions de montage et d’utilisation. La fixation et son contrôle doivent donc suivre la notice de la référence et le dossier de la trémie. Une consommation compatible avec le compresseur ne valide pas le montage mécanique.

Si le projet se situe dans une atmosphère particulière, faites vérifier l’adéquation de la version exacte. Le nom d’une famille commerciale ne constitue pas une preuve de qualification de toutes ses variantes pour tous les environnements.

## Réceptionner le cycle complet

Notre proposition de réception associe un relevé pneumatique et une observation du procédé définie à l’avance. Conservez pression pendant l’activation, durée réelle de commande, autres usages présents et résultat attendu sur le transfert de matière. La pression à l’arrêt ne remplace pas ce relevé en fonctionnement.

Si la pression s’effondre, examinez la [liaison flexible](/guides/diametre-longueur-flexible-air-comprime/) et la distribution avant d’augmenter la consigne. Si la pression reste conforme mais que le procédé ne donne pas le résultat attendu, la sélection mécanique et les conditions de matière doivent être examinées avec le fournisseur. Ce sont deux diagnostics différents, à documenter séparément.

## Sources et méthode

Sources consultées le **26 septembre 2026**. Rédaction avec assistance d’IA et relecture interne, sans essai physique ni validation professionnelle externe. Les grilles de décision sont proposées par CompatAir ; les valeurs constructeur et les exemples hypothétiques sont distingués dans le texte.

- [NetterVibration, fiche technique NCT, tableau des consommations](https://www.nettervibration.com/files/NetterVibration/Products/NCT/Documents/TD_NCT_EN.pdf)
- [NetterVibration, notice NCT, NCB et NCR, version juillet 2026](https://www.nettervibration.com/files/NetterVibration/Products/NCT/Documents/KBA_NCT_NCB_NCR-1882DE_EN.pdf)
