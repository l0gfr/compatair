---
title: "Quel compresseur pour une perceuse pneumatique ?"
seoTitle: "Compresseur pour perceuse pneumatique | CompatAir"
description: "Choisir le compresseur d’une perceuse pneumatique à partir du débit en charge, de la pression dynamique, du flexible et de la notice du modèle exact."
pubDate: 2026-08-28
updatedDate: 2026-09-26
category: "Choisir"
audiences: [particulier, professionnel]
metiers: [garage-automobile, carrosserie-peinture, maintenance-industrielle]
readingTime: 12
featured: false
relatedCalculatorTool: chicago-pneumatic-cp785
relatedGuides: [debit-restitue-fad-vs-debit-aspire, diametre-longueur-flexible-air-comprime, pression-travail-6-3-bar-outils-pneumatiques]
sources:
  - https://tools.cp.com/en-au/products/drills/cp785-skuT022698
  - https://www.cp.com/content/dam/pim/itba/cp/technical-documents/KF140145.pdf
  - https://ch.metabo.com/de/maschinen/bohren-schrauben-meisseln-ruehren/bohrmaschinen/db-10-604120000-druckluft-bohrmaschine.html
---

Une perceuse pneumatique ne se dimensionne ni avec la taille du mandrin, ni avec les litres de cuve, ni avec le seul débit aspiré du compresseur. Il faut la référence exacte, sa consommation d’air, sa pression de travail et les conditions de raccordement publiées. Deux perceuses de 10 mm présentes dans le catalogue CompatAir illustrent déjà un écart de 120 L/min.

## Réponse directe

Le compresseur doit délivrer au moins le besoin en air de la perceuse à une pression compatible avec son point de service. Pour les deux références documentées ici :

| Référence | Consommation publiée | Pression publiée | Autres données utiles |
| --- | ---: | ---: | --- |
| [Metabo DB 10](/outils-pneumatiques/perceuse-pneumatique-metabo-db-10/) | **360 L/min** | **6,2 bar** | mandrin 3 à 10 mm, 1 800 tr/min, réversible, raccord 1/4 pouce |
| [Chicago Pneumatic CP785](/outils-pneumatiques/perceuse-chicago-pneumatic-cp785/) | **8 L/s, soit 480 L/min en charge** | **6,3 bar de pression dynamique maximale** | mandrin 10 mm, 2 400 tr/min, non réversible, flexible intérieur minimal de 10 mm sur 5 m |

Les 480 L/min de la CP785 résultent de la conversion exacte `8 × 60`. Sa [fiche actuelle Chicago Pneumatic](https://tools.cp.com/en-au/products/drills/cp785-skuT022698) sépare bien la consommation en charge de la consommation à vitesse libre, publiée à 9,4 L/s. La [fiche Metabo DB 10](https://ch.metabo.com/de/maschinen/bohren-schrauben-meisseln-ruehren/bohrmaschinen/db-10-604120000-druckluft-bohrmaschine.html) publie 360 L/min à 6,2 bar.

La CP785 demande donc 120 L/min de plus que la DB 10, soit un tiers de plus rapporté aux 360 L/min de la Metabo. Cet écart ne prouve pas que l’une perce plus vite ou mieux. Le matériau, le diamètre et l’état du foret, la vitesse, le couple disponible et la conduite de l’opérateur ne sont pas ramenés à un essai commun.

<div class="article-infographic" tabindex="0" role="group" aria-label="Infographie technique défilable horizontalement sur petit écran">
<svg viewBox="0 0 760 370" role="img" aria-labelledby="drill-flow-title drill-flow-desc" xmlns="http://www.w3.org/2000/svg" style="display:block;margin-bottom:1.5rem">
  <title id="drill-flow-title">Débit requis par deux perceuses pneumatiques de 10 millimètres</title>
  <desc id="drill-flow-desc">La Metabo DB 10 demande 360 litres par minute à 6,2 bar. La Chicago Pneumatic CP785 demande 480 litres par minute en charge à 6,3 bar.</desc>
  <rect width="760" height="370" rx="22" fill="#10281e"/>
  <text x="40" y="46" fill="#d3eb56" font-size="15" font-weight="700">MÊME FAMILLE, DEUX POINTS DE SERVICE</text>
  <text x="40" y="84" fill="white" font-size="24" font-weight="700">Comparer débit et pression ensemble</text>
  <text x="40" y="145" fill="#bed0c6" font-size="16">Metabo DB 10</text><rect x="210" y="119" width="360" height="42" rx="8" fill="#d3eb56"/><text x="588" y="146" fill="white" font-size="17" font-weight="700">360 L/min</text>
  <text x="40" y="231" fill="#bed0c6" font-size="16">CP CP785</text><rect x="210" y="205" width="480" height="42" rx="8" fill="#19704f"/><text x="592" y="232" fill="white" font-size="17" font-weight="700">480 L/min</text>
  <text x="40" y="292" fill="#d3eb56" font-size="21" font-weight="700">Écart documenté : 120 L/min</text>
  <text x="40" y="329" fill="#bed0c6" font-size="13">DB 10 : 6,2 bar. CP785 : consommation en charge à 6,3 bar.</text>
  <text x="40" y="350" fill="#bed0c6" font-size="13">Sources : fiches fabricant Metabo et Chicago Pneumatic.</text>
</svg>
</div>

## Dimensionner le FAD, pas le débit aspiré

Le premier filtre d’achat est le [débit restitué ou FAD](/guides/debit-restitue-fad-vs-debit-aspire/) du compresseur à une pression comparable. Un compresseur annoncé à 500 L/min aspirés n’est pas démontré compatible avec la CP785 tant que son débit réellement délivré vers 6,3 bar n’est pas publié.

Pour la DB 10, le seuil nominal est 360 L/min à 6,2 bar. Pour la CP785, il est 480 L/min en charge à 6,3 bar. Avec la marge CompatAir de 25 % affichée par défaut, les repères de conception deviennent respectivement 450 et 600 L/min. Cette marge appartient à la méthode CompatAir. Elle n’est ni une consommation supplémentaire de l’outil, ni une prescription de Metabo ou de Chicago Pneumatic.

La marge ne corrige pas un point de comparaison absent. Si le fabricant du compresseur ne fournit que le débit aspiré ou un débit restitué à une pression éloignée, la compatibilité reste insuffisamment documentée.

## La cuve ne remplace pas 360 ou 480 L/min

Une cuve peut soutenir une courte séquence de perçage, puis elle doit être rechargée. Elle ne transforme pas un compresseur de débit insuffisant en source durablement capable de fournir 480 L/min. Pour calculer une autonomie intermittente, il faudrait au minimum connaître le volume utile, les pressions haute et basse, le débit réel du compresseur pendant la recharge et le temps de gâchette.

Ces données ne sont pas publiées par la seule fiche de la perceuse. Sans scénario observé et sans courbe du compresseur, CompatAir ne fabrique donc pas un nombre de trous par cuve. Le guide sur le [volume de cuve](/guides/choisir-volume-cuve-24-50-90-litres/) explique cette séparation entre stockage et production.

## Le flexible fait partie du point de service

Chicago Pneumatic publie pour la CP785 un flexible intérieur minimal de 10 mm sur 5 m. Cette donnée vaut pour cette longueur documentée. Elle ne démontre pas qu’un flexible plus long conserve la même pression, ni qu’un raccord annoncé en 1/4 pouce possède un passage interne suffisant.

La fiche Metabo DB 10 identifie un raccord de 1/4 pouce, mais ne fournit pas dans les données utilisées ici un diamètre intérieur de flexible. Il serait incorrect d’en déduire 10 mm par analogie avec la CP785. Pour la Metabo, le flexible doit être validé par la notice exacte ou par une mesure de pression en fonctionnement.

Mesurez la pression à l’entrée pendant que le foret travaille. Une pression correcte gâchette relâchée ne révèle pas la chute dans le filtre, le régulateur, le coupleur, l’enrouleur et le flexible. Le guide [diamètre et longueur du flexible](/guides/diametre-longueur-flexible-air-comprime/) détaille ce contrôle.

## La lubrification dépend de la notice exacte

Metabo documente la DB 10 pour un fonctionnement avec de l’air comprimé huilé. Le [manuel CP785 proposé par Chicago Pneumatic](https://www.cp.com/content/dam/pim/itba/cp/technical-documents/KF140145.pdf) prescrit un lubrificateur de ligne utilisant une huile SAE 10, réglé à deux gouttes par minute, ou l’ajout quotidien d’huile pour moteur pneumatique à l’entrée si aucun lubrificateur n’est disponible.

Ce manuel CP785 comporte une déclaration datée de 1994 et indique 6,2 bar, alors que la fiche produit actuelle publie 6,3 bar de pression dynamique maximale. CompatAir retient la fiche actuelle pour le point de dimensionnement et la notice accessible pour ses consignes d’usage. La plaque de l’outil et la documentation correspondant à son numéro de série doivent trancher sur le poste réel.

Un lubrificateur installé pour la perceuse ne doit pas contaminer par défaut une branche destinée à la peinture ou à un procédé exigeant un air non huilé. Le guide [groupe FRL](/guides/groupe-frl-filtre-regulateur-lubrificateur/) traite cette séparation.

## Couple de réaction et changement de foret

Le manuel CP785 avertit qu’un foret peut se bloquer soudainement et faire tourner l’outil ou la pièce. Il demande aussi de couper l’alimentation, de purger le flexible et de déconnecter l’outil avant de changer un accessoire ou d’intervenir. Ces mesures de sécurité ne se déduisent pas du débit et ne sont pas couvertes par un verdict de compatibilité pneumatique.

Le même manuel signale les risques de projection, d’enchevêtrement, de poussières, de bruit et de perçage dans des réseaux cachés. Il faut donc conserver la notice, immobiliser la pièce selon la situation, choisir le foret adapté et conduire l’évaluation du poste séparément du choix du compresseur.

## Procédure de choix

1. Relever marque, modèle, MPN et plaque de la perceuse.
2. Retenir sa consommation en charge ou son besoin d’air publié, avec la pression correspondante.
3. Comparer ce point au FAD du compresseur, jamais au débit aspiré.
4. Vérifier le cycle de service publié du compresseur pour la séquence réellement prévue.
5. Respecter le flexible documenté, ou mesurer la pression dynamique si la configuration diffère.
6. Appliquer uniquement la lubrification de la notice exacte.
7. Tester sous charge et consigner pression, durée, déclenchements et récupération du compresseur.
8. Traiter séparément foret, pièce, couple de réaction, projections, bruit et poussières.

Le [calculateur avec la CP785](/calculateur/#outil=chicago-pneumatic-cp785) conserve son besoin de 480 L/min à 6,3 bar. Pour une autre perceuse, chargez son propre profil plutôt que de réutiliser cette valeur comme moyenne de catégorie.

Pour un poste qui réalise ensuite les filetages, comparez séparément les [taraudeuses LGB34 et LGB36 et leurs besoins d’air](/guides/compresseur-pour-taraudeuse-pneumatique/) : la vitesse de rotation ne permet pas de déduire leur consommation.

## Sources

- [Chicago Pneumatic, fiche officielle CP785 T022698](https://tools.cp.com/en-au/products/drills/cp785-skuT022698)
- [Chicago Pneumatic, manuel CP785 Series](https://www.cp.com/content/dam/pim/itba/cp/technical-documents/KF140145.pdf)
- [Metabo, fiche officielle DB 10 604120000](https://ch.metabo.com/de/maschinen/bohren-schrauben-meisseln-ruehren/bohrmaschinen/db-10-604120000-druckluft-bohrmaschine.html)
