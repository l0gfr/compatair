---
title: "Compresseur qui perd de la pression à l’arrêt : fuite ou refroidissement de la cuve ?"
seoTitle: "Compresseur perd sa pression à l’arrêt : que vérifier ?"
description: "Une pression qui baisse après l’arrêt ne prouve pas à elle seule une fuite. Comparez température, manomètre et périmètre avant de demander une réparation."
pubDate: "2026-09-26"
category: "Utiliser"
audiences: ["particulier", "professionnel"]
metiers: ["garage-automobile", "maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["compresseur-ne-monte-plus-en-pression", "detecter-mesurer-fuites-air-comprime", "temps-remplissage-cuve-compresseur-debit"]
sources: ["https://www.grc.nasa.gov/WWW/K-12/Numbers/Math/Mathematical_Thinking_ppc/ideal_gases_under_constant.htm", "https://www.abacaircompressors.com/en-africa/blog/air-compressor-troubleshooting", "https://d2c5rvsfjg2eub.cloudfront.net/asset/208244749100/document_nupse59f8t4htfeoh3u5gifg65/4010393_11027_001_SPK2.pdf"]
---

**Une baisse de pression après l’arrêt peut accompagner le refroidissement de l’air stocké. Elle peut aussi révéler une fuite ou une consommation restée raccordée.** Le cadran seul ne permet pas de départager ces causes. Il faut identifier le point de mesure, la température et ce qui reste relié à la cuve.

Ce guide aide à constituer un diagnostic. Il ne donne pas de procédure de démontage du pressostat, du clapet ou de la soupape sous pression.

## Vérifier ce que mesure le cadran

La [notice du TC-AC 240/50/10 OF](https://d2c5rvsfjg2eub.cloudfront.net/asset/208244749100/document_nupse59f8t4htfeoh3u5gifg65/4010393_11027_001_SPK2.pdf) identifie notamment un manomètre de pression réglée. Une indication en sortie de régulateur ne doit donc pas être automatiquement appelée « pression de cuve ». Consultez le schéma de votre modèle et nommez le point réellement lu.

Nous proposons ensuite de relever l’heure d’arrêt, l’indication initiale, les lectures suivantes et les consommateurs raccordés. Notez le fonctionnement d’un purgeur automatique ou d’un équipement qui continue son cycle. Ne transformez pas une situation partiellement observée en test d’étanchéité complet.

## Pourquoi le refroidissement change la pression

Pour une quantité de gaz idéale enfermée à volume constant, le rapport entre pression absolue et température absolue reste constant. La [NASA présente cette relation](https://www.grc.nasa.gov/WWW/K-12/Numbers/Math/Mathematical_Thinking_ppc/ideal_gases_under_constant.htm) issue de la loi des gaz parfaits. Les températures se calculent en kelvins ; une lecture manométrique doit être convertie en pression absolue.

**Exemple physique CompatAir, entièrement hypothétique :** air à 40 °C, pression relative de 8 bar et pression atmosphérique supposée de 1 bar. En refroidissant à 20 °C sans perte de gaz, le modèle donne :

`p finale absolue = 9 × 293,15 / 313,15 ≈ 8,43 bar`

soit environ **7,43 bar relatifs**. Cette baisse théorique ne correspond à aucune mesure d’un compresseur particulier. Elle ne tient pas compte, entre autres, d’une condensation ou d’une température non uniforme dans la cuve.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Baisse de pression par refroidissement">
<svg viewBox="0 0 520 390" role="img" aria-labelledby="compresseur-perd-pression-arret-fuite-refroidissement-title compresseur-perd-pression-arret-fuite-refroidissement-desc" xmlns="http://www.w3.org/2000/svg">
<title id="compresseur-perd-pression-arret-fuite-refroidissement-title">Baisse de pression par refroidissement</title><desc id="compresseur-perd-pression-arret-fuite-refroidissement-desc">Exemple hypothétique calculé avec la loi des gaz parfaits : à quantité et volume constants, 8 bar relatifs à 40 °C deviennent environ 7,43 bar relatifs à 20 °C, pour une pression ambiante de 1 bar.</desc>
<rect width="520" height="390" rx="20" fill="#10281e"/>
<text x="28" y="43" fill="#d3eb56" font-size="24" font-weight="700">Même cuve, même quantité d’air</text>
<rect x="28" y="75" width="212" height="156" rx="12" fill="#203f31"/><rect x="280" y="75" width="212" height="156" rx="12" fill="#203f31"/><text x="50" y="116" fill="white" font-size="30" font-weight="400">40 °C</text>
<text x="50" y="177" fill="#d3eb56" font-size="32" font-weight="700">8 bar</text>
<text x="302" y="116" fill="white" font-size="30" font-weight="400">20 °C</text>
<text x="302" y="177" fill="#d3eb56" font-size="32" font-weight="700">7,43 bar</text>
<path d="M245 150h28m-8-8 8 8-8 8" stroke="#8abfa3" fill="none" stroke-width="3"/><text x="28" y="282" fill="white" font-size="22" font-weight="400">Pressions relatives · exemple calculé</text>
<text x="28" y="324" fill="white" font-size="21" font-weight="400">Volume constant, pas de fuite supposée</text>
<text x="28" y="366" fill="white" font-size="21" font-weight="400">Référence ambiante : 1 bar absolu</text>

</svg>
</div>

*Exemple théorique CompatAir. Le calcul ne démontre pas l’absence de fuite sur une installation réelle.*

## Un exemple n’est pas une tolérance de fuite

Le calcul précédent ne permet pas de déclarer qu’une perte donnée est « normale ». Sans température mesurée et périmètre connu, on ne peut pas déduire le débit de fuite d’une variation de cadran. Une cuve qui refroidit et fuit simultanément reste possible.

Notre méthode proposée consiste à comparer des observations dans des conditions thermiques aussi rapprochables que possible, en suivant les instructions de la machine. Si la pression continue de diminuer dans une situation stabilisée, faites contrôler l’étanchéité et les usages résiduels. Le [guide de détection des fuites](/guides/detecter-mesurer-fuites-air-comprime/) décrit la logique de localisation.

## Que signifie un sifflement près du pressostat ?

[ABAC distingue plusieurs origines de fuite](https://www.abacaircompressors.com/en-africa/blog/air-compressor-troubleshooting), notamment les raccords, les conduites et les organes de commande ou de retenue selon le symptôme. Cette liste montre précisément pourquoi une zone audible ne suffit pas à commander une pièce.

Transmettez au réparateur le moment où le bruit apparaît, sa durée observée et la zone concernée. Indiquez s’il accompagne l’arrêt ou persiste ensuite. La qualification d’un bref relâchement comme fonctionnement prévu doit venir de la notice du modèle ; nous ne fixons pas une durée normale commune à tous les compresseurs.

## Quand arrêter les observations et appeler l’atelier

Une anomalie de cuve, de soupape ou de commande mérite un contrôle adapté. N’obturez pas un échappement et ne relevez pas le seuil d’arrêt pour tenter de maintenir la pression. La [notice Einhell citée](https://d2c5rvsfjg2eub.cloudfront.net/asset/208244749100/document_nupse59f8t4htfeoh3u5gifg65/4010393_11027_001_SPK2.pdf) prescrit les conditions de sécurité avant entretien ; utilisez celles de votre référence pour toute intervention.

Si le compresseur peine aussi à charger pendant son fonctionnement, consultez le [diagnostic de montée en pression](/guides/compresseur-ne-monte-plus-en-pression/). Conservez les relevés avant et après réparation : une disparition du bruit, une meilleure tenue de pression et un temps de remplissage sont des observations différentes, utiles lorsqu’elles sont correctement nommées.

## Sources et méthode

Sources consultées le **26 septembre 2026**. Rédaction avec assistance d’IA et relecture éditoriale interne, sans essai physique ni validation professionnelle externe. Les exemples chiffrés explicitement hypothétiques ne sont pas des mesures de terrain.

- [NASA Glenn, gaz parfait à volume constant](https://www.grc.nasa.gov/WWW/K-12/Numbers/Math/Mathematical_Thinking_ppc/ideal_gases_under_constant.htm)
- [ABAC, Air Compressor Troubleshooting](https://www.abacaircompressors.com/en-africa/blog/air-compressor-troubleshooting)
- [Einhell, notice TC-AC 240/50/10 OF, entretien et dépannage](https://d2c5rvsfjg2eub.cloudfront.net/asset/208244749100/document_nupse59f8t4htfeoh3u5gifg65/4010393_11027_001_SPK2.pdf)
