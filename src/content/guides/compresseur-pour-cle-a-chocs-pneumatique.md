---
title: "Quel compresseur pour une clé à chocs pneumatique ?"
description: "Méthode factuelle pour comparer la consommation d’une clé à chocs au débit restitué d’un compresseur, avec l’exemple Einhell TC-PW 340."
pubDate: 2026-07-13
category: "Choisir"
audiences: [particulier, professionnel]
metiers: [garage-automobile]
readingTime: 7
featured: false
relatedCalculatorTool: einhell-tc-pw-340
sources:
  - https://www.einhell.fr/p/4138950-tc-pw-340/
  - https://d2c5rvsfjg2eub.cloudfront.net/asset/208244749100/document_c7bjdn248d2dret4jdk27m9377/4138950_21022_002_SPK2.pdf
---

Le bon critère n’est pas le volume de la cuve pris isolément. Il faut comparer la consommation publiée de la clé au [débit restitué du compresseur](/guides/debit-restitue-fad-vs-debit-aspire/), à une pression comparable.

La notice de la [clé à chocs Einhell TC-PW 340](https://www.einhell.fr/p/4138950-tc-pw-340/) indique une consommation d’air de **142 L/min**, une pression de travail maximale de **6,3 bar**, un diamètre intérieur de flexible de **9 mm** et une recommandation de cuve d’au moins **50 litres**.

<svg viewBox="0 0 760 270" role="img" aria-labelledby="cle-title cle-desc" xmlns="http://www.w3.org/2000/svg" style="display:block;margin-bottom:1.5rem">
  <title id="cle-title">Besoin publié et marge indicative pour la TC-PW 340</title><desc id="cle-desc">Le besoin constructeur est de 142 litres par minute. La marge indicative de 25 pour cent porte le seuil à 177,5 litres par minute.</desc>
  <rect width="760" height="270" rx="18" fill="#eef2e9"/><text x="38" y="45" fill="#102018" font-size="22" font-weight="700">TC-PW 340 à 6,3 bar</text>
  <text x="38" y="93" fill="#35473d" font-size="15">Consommation publiée</text><rect x="38" y="108" width="426" height="34" rx="7" fill="#19704f"/><text x="480" y="132" fill="#102018" font-size="18" font-weight="700">142 L/min</text>
  <text x="38" y="183" fill="#35473d" font-size="15">Seuil CompatAir, marge 25 %</text><rect x="38" y="198" width="533" height="34" rx="7" fill="#d3eb56"/><text x="587" y="222" fill="#102018" font-size="18" font-weight="700">177,5 L/min</text>
</svg>

## Le seuil à rechercher

Un compresseur doit d’abord documenter au moins 142 L/min restitués à 6,3 bar pour couvrir le besoin nominal publié. CompatAir affiche séparément une [marge indicative](/glossaire/#marge-compatair) réglable. Avec 25 %, le calcul est `142 × 1,25 = 177,5 L/min`.

Cette majoration n’est pas une exigence d’Einhell. Elle rend visible une réserve de dimensionnement. La consommation constructeur reste 142 L/min.

## Pourquoi 50 litres ne suffisent pas à conclure

La recommandation de cuve de 50 litres figure dans la notice de l’outil. Elle ne prouve pas qu’un compresseur donné restitue 142 L/min à 6,3 bar. Deux appareils dotés d’une cuve de même volume peuvent avoir des courbes de débit différentes.

La cuve fournit une réserve temporaire. Le moteur doit ensuite reconstituer cette réserve. Pour juger un fonctionnement durable, il faut donc connaître le FAD à la pression demandée, ou disposer d’un FAD mesuré à pression supérieure exploitable comme borne conservatrice, ainsi que le cycle de service autorisé du compresseur.

## Flexible et raccords

La notice indique un flexible de 9 mm de diamètre intérieur. Une longueur importante, un raccord étroit, un filtre colmaté ou un détendeur sous-dimensionné peuvent créer une chute de pression. CompatAir conserve la longueur et le diamètre saisis, mais ne retranche aucun bar arbitraire sans courbe ou mesure.

Utilisez le [calculateur avec la TC-PW 340 préchargée](/calculateur/#outil=einhell-tc-pw-340), puis vérifiez la source de chaque compresseur proposé. Le guide sur le [diamètre et la longueur du flexible](/guides/diametre-longueur-flexible-air-comprime/) complète cette vérification.

## Sources

- [Einhell, fiche officielle TC-PW 340](https://www.einhell.fr/p/4138950-tc-pw-340/)
- [Einhell, notice TC-PW 340](https://d2c5rvsfjg2eub.cloudfront.net/asset/208244749100/document_c7bjdn248d2dret4jdk27m9377/4138950_21022_002_SPK2.pdf)
