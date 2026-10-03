---
title: "Distributeur 5/3 à centre fermé : pourquoi le vérin peut dériver à l’arrêt"
seoTitle: "Distributeur 5/3 centre fermé : vérin qui dérive"
description: "Centre fermé, sous pression ou à l’échappement : lire l’état médian d’un 5/3 et comprendre les limites du maintien d’un vérin à l’arrêt."
pubDate: 2026-09-30
category: Comprendre
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
reviewStatus: internal
relatedGuides: [ "blocage-tige-verin-dsnu-kp-maintien-securite", "choisir-distributeur-pneumatique-debit-nominal", "couper-air-comprime-machine-arret-week-end", festo-vfof-ba-verin-air-emprisonne ]
sources:
  - https://www.festo.com/gb/en/e/blog/in-practice/pneumatic-valves-id_1517691
  - https://ftp.festo.com/public/pneumatic/SOFTWARE_SERVICE/Documentation/2021/EN/VFOF-VFFF_EN.PDF
---

**« 5/3 » donne cinq orifices et trois positions ; la désignation ne décrit pas encore l’état du vérin au repos.** Il faut lire le symbole de la position médiane. C’est souvent là que se trouve l’explication d’un remplacement qui change le comportement de la machine.

## Trois états médians différents

Le [guide Festo des distributeurs pneumatiques](https://www.festo.com/gb/en/e/blog/in-practice/pneumatic-valves-id_1517691) distingue un centre fermé, un centre sous pression et un centre à l’échappement. Au centre fermé, les orifices concernés sont obturés ; Festo précise que des fuites internes peuvent faire évoluer la pression au fil du temps. Au centre sous pression, les deux chambres sont alimentées ; des surfaces inégales peuvent entraîner un mouvement. Au centre à l’échappement, les chambres sont dépressurisées et un effort extérieur peut déplacer le piston.

Ces principes ne suffisent pas à prédire le comportement de votre charge. Ils rendent indispensable la lecture du circuit complet.

<figure class="article-infographic article-infographic--compact">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 290" role="img" aria-labelledby="distributeur-5-3-centre-ferme-verin-derive-title distributeur-5-3-centre-ferme-verin-derive-desc" style="font-family:system-ui,sans-serif"><title id="distributeur-5-3-centre-ferme-verin-derive-title">Lire le centre du 5/3</title><desc id="distributeur-5-3-centre-ferme-verin-derive-desc">Résumé qualitatif Festo. Le comportement final dépend de l’actionneur, de la charge et du circuit.</desc><rect width="440" height="290" rx="16" fill="#10281e"/><text x="24" y="33" font-size="18" fill="#d3eb56" font-weight="700">Lire le centre du 5/3</text><rect x="20" y="50" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="72" font-size="18" fill="#d3eb56" font-weight="700">Centre fermé</text><text x="32" y="97" font-size="16" fill="#eef2e9">Passages fermés, fuites possibles</text><rect x="20" y="120" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="142" font-size="18" fill="#d3eb56" font-weight="700">Centre sous pression</text><text x="32" y="167" font-size="16" fill="#eef2e9">Deux chambres alimentées</text><rect x="20" y="190" width="400" height="61" rx="8" fill="#234533"/><text x="32" y="212" font-size="18" fill="#d3eb56" font-weight="700">Centre à l’échappement</text><text x="32" y="237" font-size="16" fill="#eef2e9">Deux chambres dépressurisées</text></svg>
<figcaption>Résumé qualitatif Festo. Le comportement final dépend de l’actionneur, de la charge et du circuit.</figcaption>
</figure>

## Décrire la dérive avant de remplacer la vanne

Notez l’orientation du vérin, la charge, la position de départ et le temps entre l’arrêt et le déplacement observé. Identifiez les commandes présentes ou absentes à cet instant. Relevez la référence et le symbole du distributeur monté, y compris la variante de centre.

Un constat de dérive ne désigne pas automatiquement une fuite précise dans le distributeur. Le mainteneur doit examiner aussi le vérin et les autres chemins du circuit. Un essai improvisé de maintien de charge ne constitue pas une procédure d’intervention sûre.

## Garder la fonction de maintien séparée

Si le projet nécessite une immobilisation, faites définir ses critères par le concepteur : durée, effort, événement, reprise et défaillances considérées. Le [guide du blocage de tige](/guides/blocage-tige-verin-dsnu-kp-maintien-securite/) distingue maintien et fonction de sécurité. Fermer les passages d’un distributeur ne remplace pas cette analyse.

| À conserver dans une commande de remplacement | Risque de confusion évité |
| --- | --- |
| Symbole complet des trois positions | Commander un autre centre |
| Mode de commande et rappel | Changer l’état en absence de signal |
| Pression et débit documentés | Garder seulement la taille des orifices |
| Accessoires et montage | Oublier une fonction du circuit |
| Référence de la note de sélection | Perdre le comportement validé |

Le [débit nominal d’un distributeur](/guides/choisir-distributeur-pneumatique-debit-nominal/) doit également être comparé avec ses conditions. Une fonction identique n’assure pas une capacité de passage identique.

La [combinaison Festo VFOF BA](https://ftp.festo.com/public/pneumatic/SOFTWARE_SERVICE/Documentation/2021/EN/VFOF-VFFF_EN.PDF#page=8) décrit également un positionnement de courte durée par air emprisonné, avec une décharge manuelle. Le [cas BA et maintien intermédiaire](/guides/festo-vfof-ba-verin-air-emprisonne/#une-fonction-de-maintien-interm%C3%A9diaire-de-courte-dur%C3%A9e) aide à retrouver les chemins des chambres et la fonction exacte lors d’un remplacement. Cette description ne fournit ni un maintien mécanique de charge ni une validation de sécurité de la machine.

## Préparer l’arrêt et la reprise ensemble

Le [dossier de coupure d’air](/guides/couper-air-comprime-machine-arret-week-end/) aide à décrire ce qui se passe lors d’un arrêt prolongé. Faites documenter les volumes conservant de la pression et le comportement prévu à la remise sous pression.

Pour la réception, demandez le contrôle des états définis par le concepteur, avec leurs retours de position et limites. « Le vérin s’est arrêté une fois » ne démontre pas un maintien garanti sur la durée. Le résultat de l’intervention doit identifier la variante exacte et la fonction obtenue.
