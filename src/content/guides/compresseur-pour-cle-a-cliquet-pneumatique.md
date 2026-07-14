---
title: "Quel compresseur pour une clé à cliquet pneumatique ?"
description: "Débit, pression, cuve et marge : méthode sourcée pour alimenter une clé à cliquet pneumatique, avec l’exemple Metabo DRS 68 à 220 L/min."
pubDate: 2026-07-14
category: "Choisir"
readingTime: 7
featured: false
relatedCalculatorTool: metabo-drs-68-set
sources:
  - https://www.metabo.com/no/no/maskiner/trykkluft/trykkluft-verktoy/trykkluft-skralletrekker/drs-68-set-1-2-trykkluft-skralletrekker/604119500
  - https://www.einhell.fr/p/4010800-te-ac-430-90-10/
---

Pour choisir un compresseur pour une clé à cliquet pneumatique, il faut comparer deux valeurs à la même pression : le besoin en air de l’outil et le débit restitué du compresseur. Le volume de cuve, la pression maximale et le débit aspiré ne remplacent pas cette comparaison.

La fiche officielle de la [Metabo DRS 68 Set 1/2](https://www.metabo.com/no/no/maskiner/trykkluft/trykkluft-verktoy/trykkluft-skralletrekker/drs-68-set-1-2-trykkluft-skralletrekker/604119500) publie un besoin de **220 L/min à 6,2 bar**. Elle indique aussi une vitesse de 175 tr/min, un couple de desserrage maximal de 68 Nm et un carré de 1/2 pouce.

<svg viewBox="0 0 760 310" role="img" aria-labelledby="ratchet-title ratchet-desc" xmlns="http://www.w3.org/2000/svg" style="display:block;margin-bottom:1.5rem">
  <title id="ratchet-title">Débits à comparer pour la clé à cliquet Metabo DRS 68</title><desc id="ratchet-desc">Le compresseur Einhell TE-AC 430 restitue environ 203 litres par minute à 6,2 bar par interpolation. La clé demande 220 litres par minute. Le seuil CompatAir avec marge vaut 275 litres par minute.</desc>
  <rect width="760" height="310" rx="20" fill="#eef2e9"/><text x="38" y="45" fill="#102018" font-size="22" font-weight="700">Même pression : 6,2 bar</text>
  <text x="38" y="94" fill="#35473d" font-size="15">TE-AC 430/90/10, valeur interpolée</text><rect x="38" y="108" width="406" height="34" rx="7" fill="#81a58f"/><text x="458" y="132" fill="#102018" font-size="17" font-weight="700">≈ 203 L/min</text>
  <text x="38" y="179" fill="#35473d" font-size="15">Besoin publié de la DRS 68</text><rect x="38" y="193" width="440" height="34" rx="7" fill="#19704f"/><text x="492" y="217" fill="#102018" font-size="17" font-weight="700">220 L/min</text>
  <text x="38" y="264" fill="#35473d" font-size="15">Seuil CompatAir avec 25 % de marge</text><rect x="38" y="278" width="550" height="20" rx="7" fill="#d3eb56"/><text x="602" y="296" fill="#102018" font-size="17" font-weight="700">275 L/min</text>
</svg>

## Le seuil nominal est 220 L/min à 6,2 bar

Le premier seuil à rechercher est celui du fabricant : 220 L/min restitués à 6,2 bar. CompatAir affiche ensuite une marge interne de 25 %, soit `220 × 1,25 = 275 L/min`. Cette marge rend visible une réserve de dimensionnement, mais elle ne vient pas de Metabo.

Une fiche qui annonce seulement 300 L/min aspirés ne permet pas de conclure. Le [débit restitué, ou FAD](/guides/debit-restitue-fad-vs-debit-aspire/), diminue généralement quand la pression augmente. Il doit donc être publié ou calculable à partir de points qui encadrent 6,2 bar.

## Exemple avec une courbe documentée

La fiche de l’[Einhell TE-AC 430/90/10](https://www.einhell.fr/p/4010800-te-ac-430-90-10/) publie 210 L/min à 4 bar et 200 L/min à 7 bar. L’interpolation linéaire entre ces deux points donne environ 203 L/min à 6,2 bar :

`210 + (6,2 - 4) / (7 - 4) × (200 - 210) = 202,67 L/min`.

Cette valeur reste sous les 220 L/min demandés. CompatAir classe donc ce couple comme incompatible en continu sur le besoin nominal. Le calcul ne transforme pas les 430 L/min aspirés présents dans le nom du compresseur en débit disponible.

## Pourquoi une grande cuve ne corrige pas le déficit

Une cuve peut fournir temporairement plus d’air que la pompe n’en produit. Sa pression baisse alors jusqu’au seuil de réenclenchement ou jusqu’à devenir insuffisante pour l’outil. Sans cadence réelle, pressions de cuve et cycle de service, annoncer une durée d’autonomie serait une estimation silencieuse.

Le dossier sur les [cuves de 24, 50 et 90 litres](/guides/choisir-volume-cuve-24-50-90-litres/) explique cette différence entre stockage et production. Pour une clé utilisée par impulsions courtes, la cuve peut améliorer le confort, mais elle ne valide pas un fonctionnement continu.

## Flexible, raccord et pression disponible

Metabo publie des embouts de 1/4 pouce avec la DRS 68. Cette dimension ne suffit pas à calculer la perte de charge du réseau. Il faut aussi connaître le diamètre intérieur du flexible, sa longueur, les raccords, le filtre et le détendeur.

Une pression affichée sur la cuve n’est pas nécessairement celle disponible à l’entrée de l’outil en charge. Le guide sur le [diamètre et la longueur du flexible](/guides/diametre-longueur-flexible-air-comprime/) détaille les contrôles à effectuer.

## Checklist avant de choisir

- chercher au moins 220 L/min restitués à 6,2 bar ;
- traiter 275 L/min comme une marge CompatAir, pas comme une exigence constructeur ;
- refuser le débit aspiré comme substitut au FAD ;
- vérifier la pression au raccord de l’outil pendant l’utilisation ;
- décrire la cadence réelle avant de compter sur la réserve de cuve.

Ouvrez le [calculateur avec la DRS 68 préchargée](/calculateur/?outil=metabo-drs-68-set) ou consultez sa [fiche technique CompatAir](/outils-pneumatiques/cle-a-cliquet-metabo-drs-68-set/). Pour un outil de vissage plus exigeant, comparez aussi le guide de la [visseuse pneumatique](/guides/compresseur-pour-visseuse-pneumatique/).

## Sources

- [Metabo, DRS 68 Set 1/2](https://www.metabo.com/no/no/maskiner/trykkluft/trykkluft-verktoy/trykkluft-skralletrekker/drs-68-set-1-2-trykkluft-skralletrekker/604119500)
- [Einhell, TE-AC 430/90/10](https://www.einhell.fr/p/4010800-te-ac-430-90-10/)
