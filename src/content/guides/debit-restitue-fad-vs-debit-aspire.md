---
title: "Débit restitué FAD ou débit aspiré : le chiffre qui dimensionne vraiment un compresseur"
seoTitle: "Débit FAD ou débit aspiré : lequel comparer ? | CompatAir"
description: "FAD, débit aspiré et débit de remplissage ne mesurent pas la même chose. Identifiez le chiffre à comparer au besoin de votre outil et à quelle pression."
pubDate: 2026-07-13
updatedDate: 2026-09-26
category: Comprendre
audiences: [particulier, professionnel]
metiers: []
readingTime: 7
featured: true
relatedCalculatorTool: einhell-tc-pe-150
sources:
  - https://www.atlascopco.com/content/dam/atlas-copco/local-countries/france/documents/compressor-technique/Compressed-Air-Manual-9th-edition_compressed.pdf
  - https://www.einhell.fr/p/4010393-tc-ac-240-50-10-of
  - https://fr.metabo.com/fr/machines/air-comprime/compresseurs/compresseurs-d-atelier-mobiles/mega-350-100-w-601538000-compresseur.html
relatedGuides: [convertir-cfm-l-min-nl-min-air-comprime]
---

Deux compresseurs peuvent afficher 240 ou 320 litres par minute en gros caractères et livrer des performances très différentes à l’outil. La raison tient au point de mesure. Le débit aspiré est mesuré à l’entrée du groupe de compression. Le débit restitué, désigné **FAD** pour *Free Air Delivery* dans le manuel Atlas Copco cité en source, représente l’air effectivement fourni après les pertes propres à la compression.

> Pour choisir un compresseur, comparez le besoin de l’outil au débit restitué à sa pression de travail. Ne comparez jamais ce besoin au seul débit aspiré.

## Trois débits, trois significations

Une même fiche peut publier plusieurs valeurs. La puissance d’aspiration indique le volume admis par la pompe. La puissance de remplissage décrit la vitesse de recharge de la cuve selon le protocole du fabricant. Le débit effectif ou restitué se rapproche de ce qui reste disponible pour travailler.

Le [manuel technique de l’air comprimé d’Atlas Copco](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/france/documents/compressor-technique/Compressed-Air-Manual-9th-edition_compressed.pdf) utilise le FAD pour exprimer la capacité d’un compresseur et pour dimensionner le réseau. Ce choix est cohérent : les pertes thermiques, mécaniques et volumétriques empêchent de restituer l’intégralité du volume aspiré.

<svg viewBox="0 0 760 250" role="img" aria-label="Écart entre débit aspiré et débit mesuré à 4 bar"><rect width="760" height="250" fill="#102018"/><text x="40" y="42" fill="#d8ef45" font-size="16" font-family="system-ui" font-weight="700">DEUX VALEURS PUBLIÉES POUR LE MÊME MODÈLE</text><rect x="40" y="82" width="190" height="90" rx="12" fill="#f7f8f2"/><text x="135" y="118" text-anchor="middle" fill="#102018" font-size="15" font-family="system-ui">Débit aspiré</text><text x="135" y="150" text-anchor="middle" fill="#176b4d" font-size="28" font-family="system-ui" font-weight="800">240 L/min</text><path d="M245 127H335" stroke="#d8ef45" stroke-width="5"/><path d="M325 115L345 127L325 139" fill="#d8ef45"/><rect x="360" y="82" width="160" height="90" rx="12" fill="#254235"/><text x="440" y="118" text-anchor="middle" fill="#fff" font-size="15" font-family="system-ui">Écart calculé</text><text x="440" y="150" text-anchor="middle" fill="#d8ef45" font-size="22" font-family="system-ui" font-weight="800">− 55,4 %</text><path d="M535 127H595" stroke="#d8ef45" stroke-width="5"/><path d="M585 115L605 127L585 139" fill="#d8ef45"/><rect x="610" y="82" width="110" height="90" rx="12" fill="#d8ef45"/><text x="665" y="118" text-anchor="middle" fill="#102018" font-size="14" font-family="system-ui">Sortie à 4 bar</text><text x="665" y="150" text-anchor="middle" fill="#102018" font-size="25" font-family="system-ui" font-weight="800">107</text><text x="40" y="218" fill="#cbd8d0" font-size="13" font-family="system-ui">Valeurs de la fiche Einhell TC-AC 240/50/10 OF. Calcul : (240 − 107) / 240.</text></svg>

## Un exemple vérifiable

La fiche officielle de l’[Einhell TC-AC 240/50/10 OF](https://www.einhell.fr/p/4010393-tc-ac-240-50-10-of) annonce 240 L/min aspirés, mais aussi 173 L/min à 0 bar, 107 L/min à 4 bar et 76 L/min à 7 bar. Un outil réclamant 100 L/min à 6,3 bar ne doit donc pas être comparé aux 240 L/min de la couverture commerciale.

Metabo emploie une autre présentation. Le [Mega 350-100 W](https://fr.metabo.com/fr/machines/air-comprime/compresseurs/compresseurs-d-atelier-mobiles/mega-350-100-w-601538000-compresseur.html) est donné pour 320 L/min aspirés, 250 L/min de remplissage et 220 L/min effectifs à 80 % de sa pression maximale. Cette précision sur la pression rend la valeur exploitable.

## Comment CompatAir tranche

Le moteur cherche d’abord une courbe de débit ou un point FAD documenté à une pression au moins égale à celle de l’outil. Il interpole entre deux points publiés lorsqu’ils encadrent la pression demandée. Il n’extrapole pas au-delà du dernier point.

Si la fiche ne publie que le débit aspiré, le produit reste consultable, mais son verdict devient « données insuffisantes ». Cette prudence évite de transformer une caractéristique d’admission en promesse de performance.

## La bonne lecture en quatre questions

1. Quelle pression l’outil exige-t-il réellement ?
2. Quel débit consomme-t-il à cette pression ?
3. Quel FAD le compresseur fournit-il au même point ?
4. Le cycle du compresseur permet-il de tenir le rythme moyen ?

La cuve intervient ensuite comme réserve temporaire. Elle ne corrige pas un débit durablement insuffisant. Pour tester une combinaison précise, utilisez le [calculateur CompatAir](/calculateur/).

## Comparer des fiches exprimées dans des unités différentes

Une fois la nature du débit identifiée, utilisez le [tableau CFM, L/s, L/min et m³/h](/guides/convertir-cfm-l-min-nl-min-air-comprime/). Il conserve les conditions de référence et explique pourquoi Nl/min et L/min ne se remplacent pas par une conversion universelle.

Pour une machine déjà utilisée, distinguez aussi la performance d’origine et l’état de l’exemplaire vendu. Le dossier [acheter un compresseur d’occasion](/guides/acheter-compresseur-occasion-controles-documents/) explique les preuves à demander avant de conclure à la compatibilité.

## Sources

- [Atlas Copco, Compressed Air Manual, 9e édition](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/france/documents/compressor-technique/Compressed-Air-Manual-9th-edition_compressed.pdf)
- [Einhell, TC-AC 240/50/10 OF](https://www.einhell.fr/p/4010393-tc-ac-240-50-10-of)
- [Metabo, Mega 350-100 W](https://fr.metabo.com/fr/machines/air-comprime/compresseurs/compresseurs-d-atelier-mobiles/mega-350-100-w-601538000-compresseur.html)
