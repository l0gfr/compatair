---
title: "Fluke LeakQ : une mauvaise distance change la lecture de fuite"
seoTitle: "Fluke LeakQ : distance et obstacles dans le diagnostic"
description: "Un score LeakQ varie avec la distance et les obstacles. Distinguer absence de cible, distance inconnue et véritable comparaison avant réparation."
pubDate: 2026-10-03
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["detecter-mesurer-fuites-air-comprime", "debitmetre-air-comprime-diametre-conditions-reference", "audit-reseau-air-comprime-protocole-mesures"]
sources: ["https://media.fluke.com/59e78ae0-6829-465d-b818-b10800d591da_original%20file.pdf"]
---

Le score LeakQ change alors que le raccord observé n’a pas été touché. Avant d’attribuer cet écart à la fuite, vérifier la distance retenue et les obstacles dans la zone ciblée. **La caméra calcule une valeur à partir d’informations acoustiques et géométriques ; son image seule ne fixe pas un débit en L/min.**

## Deux messages ont des significations différentes

Le [manuel ii900/ii910, page PDF 13, imprimée 9](https://media.fluke.com/59e78ae0-6829-465d-b818-b10800d591da_original%20file.pdf#page=13) indique que LeakQ détermine automatiquement la distance jusqu’à une fuite dans le cercle affiché. La valeur utilise le niveau de pression acoustique mesuré et cette distance.

« NO TARGET FOUND » signifie qu’aucune fuite n’est détectée dans le cercle. « UNABLE TO ESTIMATE DISTANCE » signifie que la caméra ne parvient pas à estimer la distance automatiquement. Ce deuxième message ne doit pas être enregistré comme une absence de fuite.

La distance peut être saisie manuellement ou corrigée. Le manuel précise que cette valeur saisie entre dans le calcul LeakQ. Il faut donc connaître la distance effectivement utilisée avant de comparer deux captures.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 345" role="img" aria-labelledby="fluke-ii900-leakq-distance-obstacles-title fluke-ii900-leakq-distance-obstacles-desc" style="display:block;width:100%;height:auto;font-family:system-ui,sans-serif"><title id="fluke-ii900-leakq-distance-obstacles-title">LeakQ : la distance entre dans le résultat</title><desc id="fluke-ii900-leakq-distance-obstacles-desc">LeakQ utilise le niveau acoustique et la distance. Un obstacle ou le bruit de fond peut modifier la distance calculée et la valeur affichée.</desc><rect width="520" height="345" rx="22" fill="#10281e"/><text x="26" y="43" fill="#d3eb56" font-size="24" font-weight="700">Même fuite · géométrie différente</text><path d="M64 180H447" stroke="#8abfa3" stroke-width="4" stroke-dasharray="8 6"/><rect x="45" y="151" width="62" height="61" rx="10" fill="#d3eb56"/><circle cx="447" cy="181" r="19" fill="#eef2e9"/><rect x="252" y="107" width="28" height="141" fill="#26775b"/><text x="38" y="256" fill="#eef2e9" font-size="19">Caméra</text><text x="386" y="256" fill="#eef2e9" font-size="20">Fuite</text><text x="217" y="86" fill="#eef2e9" font-size="19">Obstacle</text><text x="32" y="314" fill="#eef2e9" font-size="20">Distance + niveau acoustique → LeakQ</text></svg>
<figcaption>LeakQ utilise le niveau acoustique et la distance. Un obstacle ou le bruit de fond peut modifier la distance calculée et la valeur affichée.</figcaption>
</figure>

## Une comparaison reproductible commence par la géométrie

La [page PDF 14, imprimée 10](https://media.fluke.com/59e78ae0-6829-465d-b818-b10800d591da_original%20file.pdf#page=14) mentionne deux perturbations : les obstacles présents dans le cercle et un bruit de fond élevé. Tous deux peuvent affecter distance calculée et valeur LeakQ. Fluke recommande de déplacer la caméra autour de la fuite pour trouver la valeur LeakQ la plus élevée, plutôt que traiter un seul angle masqué comme référence.

Pour une comparaison avant et après réparation, conserver le point ciblé, la distance utilisée, l’angle et les conditions de fonctionnement du réseau. C’est une organisation de mesure proposée par CompatAir, fondée sur les facteurs cités par Fluke, et non un essai de précision réalisé ici. Le [protocole de détection des fuites](/guides/detecter-mesurer-fuites-air-comprime/) situe la campagne et ses autres méthodes.

| Situation | Information à garder |
| --- | --- |
| Distance automatique réussie | Valeur affichée et position de la caméra |
| Distance remplacée manuellement | Valeur saisie et moyen de l’établir |
| Obstacle dans le cercle | Nouvelle vue et différence éventuelle |
| Bruit de fond différent | Condition d’observation avant comparaison |

## Séparer repérage et quantification d’une perte

Le manuel annonce l’export d’une image acoustique avec valeurs superposées, en PNG ou JPG, et la possibilité d’y joindre notes ou étiquettes. Ce support permet de retrouver une observation. Une photo isolée ne prouve cependant pas le débit de fuite, la pression réelle du réseau ou le coût énergétique.

Le [guide des conditions de débit](/guides/debitmetre-air-comprime-diametre-conditions-reference/) explique les références de volume. Le [plan de mesure d’un réseau](/guides/audit-reseau-air-comprime-protocole-mesures/) aide à relier l’observation acoustique à une question vérifiable. Pour annoncer des L/min, il faut un résultat et des paramètres d’une méthode de quantification documentée, pas une conversion improvisée du score LeakQ.

## Sources et méthode

Documents fabricant consultés le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne, sans essai physique ni validation professionnelle externe. Les calculs hypothétiques et les interprétations de CompatAir sont signalés dans le texte.

- [Fluke ii900/ii910, manuel d’utilisation](https://media.fluke.com/59e78ae0-6829-465d-b818-b10800d591da_original%20file.pdf)
