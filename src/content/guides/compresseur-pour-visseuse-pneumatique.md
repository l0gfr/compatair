---
title: "Quel compresseur pour une visseuse pneumatique ?"
description: "Comment dimensionner un compresseur pour une visseuse pneumatique sans confondre débit aspiré et débit restitué, avec l’exemple Metabo DS 14."
pubDate: 2026-07-14
updatedDate: 2026-09-26
category: "Choisir"
audiences: [particulier, professionnel]
metiers: [menuiserie-agencement, maintenance-industrielle]
readingTime: 7
featured: false
relatedCalculatorTool: metabo-ds-14
sources:
  - https://www.metabo.com/za/en/tools/compressed-air/compressed-air-tools/air-screwdriver/ds-14-604117000-air-screwdriver.html
  - https://www.einhell.fr/p/4010800-te-ac-430-90-10/
  - https://www.metabo.com/dk/da/maskiner/trykluft/kompressorer/kompressorer-til-mobile-vaerksteder/mega-580-200-d-601588000-kompressor.html
---

Une visseuse pneumatique peut demander beaucoup plus d’air qu’une clé à cliquet de même format apparent. Le bon compresseur se choisit à partir du besoin publié à la pression de travail, puis du débit restitué disponible à cette même pression.

La fiche officielle de la [Metabo DS 14](https://www.metabo.com/za/en/tools/compressed-air/compressed-air-tools/air-screwdriver/ds-14-604117000-air-screwdriver.html) indique **340 L/min à 6,2 bar**. Elle publie aussi une vitesse de 1 800 tr/min, un couple réglable de 5 à 14 Nm et un poids de 1,2 kg.

<svg viewBox="0 0 760 310" role="img" aria-labelledby="driver-title driver-desc" xmlns="http://www.w3.org/2000/svg" style="display:block;margin-bottom:1.5rem">
  <title id="driver-title">Débit nécessaire pour la visseuse pneumatique Metabo DS 14</title><desc id="driver-desc">Le compresseur Einhell TE-AC 430 restitue environ 203 litres par minute à 6,2 bar. La DS 14 demande 340 litres par minute. Le seuil CompatAir avec marge vaut 425 litres par minute.</desc>
  <rect width="760" height="310" rx="20" fill="#10281e"/><text x="38" y="45" fill="#d3eb56" font-size="15" font-weight="700">VISSEUSE PNEUMATIQUE, BESOIN À 6,2 BAR</text>
  <text x="38" y="96" fill="white" font-size="16">TE-AC 430/90/10, valeur interpolée</text><rect x="38" y="112" width="286" height="36" rx="8" fill="#81a58f"/><text x="340" y="137" fill="white" font-size="17" font-weight="700">≈ 203 L/min</text>
  <text x="38" y="187" fill="white" font-size="16">Besoin publié de la DS 14</text><rect x="38" y="203" width="479" height="36" rx="8" fill="#19704f"/><text x="533" y="228" fill="white" font-size="17" font-weight="700">340 L/min</text>
  <text x="38" y="278" fill="#d3eb56" font-size="16" font-weight="700">Seuil CompatAir : 425 L/min avec 25 % de marge</text>
</svg>

## Le premier seuil est 340 L/min à 6,2 bar

Le besoin nominal de 340 L/min est la donnée constructeur. Avec la [marge indicative](/glossaire/#marge-compatair) de 25 % affichée par CompatAir, le seuil devient `340 × 1,25 = 425 L/min`. Cette majoration ne doit pas être présentée comme une prescription Metabo.

Le débit à comparer est le [débit restitué du compresseur](/guides/debit-restitue-fad-vs-debit-aspire/) à 6,2 bar. Une valeur de remplissage ou un débit aspiré ne répondent pas à la question. Un point FAD mesuré au-dessus de 6,2 bar peut seulement servir de borne conservatrice, avec sa pression d’origine affichée.

## Exemple : 203 L/min disponibles pour 340 demandés

L’[Einhell TE-AC 430/90/10](https://www.einhell.fr/p/4010800-te-ac-430-90-10/) publie 210 L/min à 4 bar et 200 L/min à 7 bar. Entre ces points, CompatAir interpole environ 203 L/min à 6,2 bar.

Le déficit nominal est donc d’environ `340 - 202,67 = 137,33 L/min`. La cuve de 90 litres peut amortir une pointe, mais la pompe ne couvre pas le besoin continu publié de la visseuse.

## Un point à 8,8 bar ne devient pas une courbe

Le [Metabo Mega 580-200 D](https://www.metabo.com/dk/da/maskiner/trykluft/kompressorer/kompressorer-til-mobile-vaerksteder/mega-580-200-d-601588000-kompressor.html) publie 360 L/min effectifs à 80 % de sa pression maximale de 11 bar, soit 8,8 bar. Ce chiffre est supérieur aux 340 L/min de la DS 14, mais sa pression de publication est différente.

Sans second point qui encadre 6,2 bar, CompatAir ne transpose pas les 360 L/min à la pression de la visseuse. Le verdict reste `insufficient_data` au lieu d’inventer une courbe favorable.

## La cadence réelle compte, mais ne doit pas être supposée

Une visseuse d’assemblage ne tourne pas nécessairement en permanence. La fiche produit publie un besoin en air, mais pas une chronologie complète des appuis sur la gâchette. Une cadence mesurée peut servir à étudier une utilisation intermittente, à condition de conserver séparément le besoin instantané.

Le guide sur l’[utilisation de plusieurs outils pneumatiques](/guides/utiliser-plusieurs-outils-pneumatiques/) montre comment décrire la simultanéité sans réduire arbitrairement les consommations constructeur.

## Réseau et qualité d’alimentation

La fiche Metabo liste des embouts de 1/4 pouce. Le diamètre nominal du raccord ne documente pas la perte de pression du flexible complet. Une longueur élevée, un diamètre intérieur trop faible, un filtre colmaté ou un détendeur sous-dimensionné peuvent dégrader le fonctionnement.

Vérifiez la pression à l’entrée de la visseuse pendant qu’elle consomme de l’air. Le dossier sur les [chutes de pression](/guides/diagnostiquer-chute-pression-air-comprime/) complète le dimensionnement du compresseur.

## Checklist avant achat

- exiger un FAD documenté à 6,2 bar ;
- rechercher 340 L/min pour le besoin nominal ;
- lire 425 L/min comme le seuil interne avec marge ;
- utiliser un point FAD à pression supérieure uniquement comme borne conservatrice explicite ;
- contrôler flexible, raccords, filtration et pression en charge ;
- saisir une cadence seulement si l’usage réel est connu.

Testez la [DS 14 dans le calculateur](/calculateur/#outil=metabo-ds-14), consultez sa [fiche CompatAir](/outils-pneumatiques/visseuse-pneumatique-metabo-ds-14/) et comparez les contraintes d’un [compresseur triphasé d’atelier](/guides/compresseur-triphase-ou-monophase-atelier/).

Pour une ligne d’assemblage, le guide des [visseuses pneumatiques à coupure automatique](/guides/visseuse-pneumatique-coupure-automatique/) précise comment comparer les plages de couple, conserver la mention « consommation à vide » et préparer le contrôle du serrage.

## Sources

- [Metabo, DS 14](https://www.metabo.com/za/en/tools/compressed-air/compressed-air-tools/air-screwdriver/ds-14-604117000-air-screwdriver.html)
- [Einhell, TE-AC 430/90/10](https://www.einhell.fr/p/4010800-te-ac-430-90-10/)
- [Metabo, Mega 580-200 D](https://www.metabo.com/dk/da/maskiner/trykluft/kompressorer/kompressorer-til-mobile-vaerksteder/mega-580-200-d-601588000-kompressor.html)
