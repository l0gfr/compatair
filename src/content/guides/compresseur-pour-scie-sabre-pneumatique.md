---
title: "Quel compresseur pour une scie sabre pneumatique ?"
seoTitle: "Compresseur pour scie sabre pneumatique | CompatAir"
description: "Comparer le besoin exact d’une scie sabre pneumatique au débit restitué du compresseur, avec trois références Chicago Pneumatic documentées."
pubDate: 2026-08-28
category: "Choisir"
audiences: [particulier, professionnel]
metiers: [garage-automobile, carrosserie-peinture, maintenance-industrielle]
readingTime: 11
featured: false
relatedCalculatorTool: chicago-pneumatic-cp7900
sources:
  - https://tools.cp.com/en/products/specialtycutting/cp7900-sku8941079000
  - https://tools.cp.com/en-nz/products/specialtycutting/cp7901-sku8941079011
  - https://tools.cp.com/en/products/specialtycutting/cp881-skuT023916
  - https://tools.cp.com/content/dam/brands/cp/tools/web/shared/literature/catalogs/cp_general-industry/cp-general-industry-ENG.pdf
  - https://www.cp.com/content/dam/pim/itba/cp/technical-documents/CA145206.pdf
  - https://www.cp.com/content/dam/pim/itba/cp/technical-documents/update2025/june-audit/safety/6159948790.pdf
---

Une scie sabre pneumatique ne permet pas de déduire une taille de compresseur à partir de sa seule catégorie. Il faut conserver ensemble la référence exacte, sa consommation en charge, la pression associée, le flexible documenté et la durée réelle de coupe. La puissance moteur et la taille de cuve du compresseur ne remplacent pas son débit restitué à la pression demandée.

## Réponse directe

Pour les trois scies Chicago Pneumatic étudiées, le besoin en charge publié se situe entre **156 et 168 L/min**. Cette plage décrit uniquement ces références :

| Référence | Consommation constructeur | Pression documentée | Flexible documenté |
| --- | ---: | ---: | ---: |
| [CP7900](/outils-pneumatiques/scie-sabre-chicago-pneumatic-cp7900/) | 2,6 L/s, soit **156 L/min** | **6,3 bar** dans le catalogue | diamètre intérieur **10 mm sur 5 m** |
| [CP7901](/outils-pneumatiques/scie-sabre-chicago-pneumatic-cp7901/) | 2,6 L/s, soit **156 L/min** | **6,3 bar** dans le catalogue | diamètre intérieur **10 mm sur 5 m** |
| [CP881](/outils-pneumatiques/scie-sabre-chicago-pneumatic-cp881/) | 2,8 L/s, soit **168 L/min** | **6,2 bar** dans le manuel | diamètre intérieur **10 mm sur 5 m** |

Les consommations et diamètres proviennent des fiches [CP7900](https://tools.cp.com/en/products/specialtycutting/cp7900-sku8941079000), [CP7901](https://tools.cp.com/en-nz/products/specialtycutting/cp7901-sku8941079011) et [CP881](https://tools.cp.com/en/products/specialtycutting/cp881-skuT023916). Les conversions sont exactes : `2,6 × 60 = 156` et `2,8 × 60 = 168`. Le [catalogue General Industry](https://tools.cp.com/content/dam/brands/cp/tools/web/shared/literature/catalogs/cp_general-industry/cp-general-industry-ENG.pdf) rattache ses tableaux à 6,3 bar. Le [manuel CP881](https://www.cp.com/content/dam/pim/itba/cp/technical-documents/CA145206.pdf) publie pour sa part 6,2 bar.

<div class="article-infographic" tabindex="0" role="group" aria-label="Infographie technique défilable horizontalement sur petit écran">
<svg viewBox="0 0 760 350" role="img" aria-labelledby="saw-flow-title saw-flow-desc" xmlns="http://www.w3.org/2000/svg" style="display:block;margin-bottom:1.5rem">
  <title id="saw-flow-title">Besoins en charge de trois scies sabres pneumatiques</title>
  <desc id="saw-flow-desc">Les CP7900 et CP7901 consomment 156 litres par minute. La CP881 consomme 168 litres par minute. Chaque valeur reste associée à la pression publiée pour la référence.</desc>
  <rect width="760" height="350" rx="22" fill="#10281e"/>
  <text x="40" y="46" fill="#d3eb56" font-size="15" font-weight="700">TROIS RÉFÉRENCES, PAS UNE MOYENNE DE CATÉGORIE</text>
  <text x="40" y="84" fill="white" font-size="24" font-weight="700">Consommation d’air en charge</text>
  <text x="40" y="137" fill="#bed0c6" font-size="16">CP7900</text><rect x="160" y="113" width="390" height="36" rx="8" fill="#d3eb56"/><text x="570" y="138" fill="white" font-size="17" font-weight="700">156 L/min</text>
  <text x="40" y="201" fill="#bed0c6" font-size="16">CP7901</text><rect x="160" y="177" width="390" height="36" rx="8" fill="#d3eb56"/><text x="570" y="202" fill="white" font-size="17" font-weight="700">156 L/min</text>
  <text x="40" y="265" fill="#bed0c6" font-size="16">CP881</text><rect x="160" y="241" width="420" height="36" rx="8" fill="#19704f"/><text x="600" y="266" fill="white" font-size="17" font-weight="700">168 L/min</text>
  <text x="40" y="318" fill="#bed0c6" font-size="13">CP7900 et CP7901 : tableau à 6,3 bar. CP881 : manuel à 6,2 bar.</text>
  <text x="40" y="339" fill="#bed0c6" font-size="13">Source : Chicago Pneumatic. Conversion L/s vers L/min par multiplication par 60.</text>
</svg>
</div>

## Comparer le FAD à la pression de la scie

Le premier seuil est la consommation en charge de la référence. Il faut lui comparer le [débit restitué ou FAD](/guides/debit-restitue-fad-vs-debit-aspire/) du compresseur à une pression exploitable pour l’outil. Une valeur de débit aspiré, un nombre de chevaux ou une pression maximale ne répondent pas à cette question.

Pour la CP7900 et la CP7901, le point de comparaison est 156 L/min à 6,3 bar. Pour la CP881, CompatAir conserve 168 L/min à 6,2 bar parce que cette pression figure dans le manuel de la référence. Le catalogue plus récent regroupe la CP881 dans un tableau annoncé à 6,3 bar. Cet écart de 0,1 bar doit rester visible. Il ne justifie ni de modifier la notice, ni de créer un point FAD absent côté compresseur.

La [marge indicative CompatAir](/glossaire/#marge-compatair) est affichée séparément du besoin constructeur. Avec le réglage par défaut de 25 %, elle conduit à 195 L/min pour les CP7900 et CP7901, puis à 210 L/min pour la CP881. Ce sont des repères de dimensionnement CompatAir, pas des prescriptions de Chicago Pneumatic.

## La cuve ne compense pas durablement un débit insuffisant

Une cuve peut soutenir une coupe brève si sa pression reste dans une plage utilisable. Elle ne crée pas les litres par minute manquants. Si la scie demande durablement plus que le FAD disponible, la pression finit par baisser et le compresseur doit reconstituer la réserve après la séquence.

Le guide sur les [cuves de 24, 50 ou 90 litres](/guides/choisir-volume-cuve-24-50-90-litres/) sépare le stockage du débit continu. Pour un calcul transitoire sérieux, il faut connaître les pressions de départ et de fin, le volume réellement mobilisable, la durée de coupe et la capacité de recharge. Sans ces entrées, CompatAir ne transforme pas la cuve en autonomie inventée.

## Le flexible de 10 mm appartient à la configuration publiée

Chicago Pneumatic publie un diamètre intérieur minimal de 10 mm pour une longueur de 5 m sur les trois fiches. Cette donnée ne permet pas d’affirmer qu’un flexible de 10 mm convient à toute longueur. Une rallonge, un enrouleur, un coupleur ou un filtre ajoute sa propre restriction.

À la réception, mesurez la pression pendant la coupe, au plus près de l’entrée de l’outil. Une mesure circuit fermé ne révèle pas la perte sous débit. Le guide [choisir le diamètre et la longueur du flexible](/guides/diametre-longueur-flexible-air-comprime/) détaille la comparaison entre l’amont et le raccord de la scie.

## Usage périodique ou intensif ne donne pas un facteur de marche

Chicago Pneumatic présente la CP7900 pour un usage périodique, la CP7901 comme une scie à faibles vibrations et la CP881 pour une coupe intensive dans son [catalogue](https://tools.cp.com/content/dam/brands/cp/tools/web/shared/literature/catalogs/cp_general-industry/cp-general-industry-ENG.pdf). Ces libellés orientent le choix de la référence, mais ils ne publient pas un pourcentage de temps de gâchette ni une durée continue autorisée.

Il serait donc faux de diviser automatiquement 156 ou 168 L/min par un coefficient d’intermittence. Pour étudier une journée réelle, consignez séparément la durée cumulée de coupe, les pauses, le matériau, la lame, les autres consommateurs et le comportement du compresseur.

## La compatibilité pneumatique ne valide pas la coupe

Les [consignes de sécurité Chicago Pneumatic pour les scies alternatives](https://www.cp.com/content/dam/pim/itba/cp/technical-documents/update2025/june-audit/safety/6159948790.pdf) demandent notamment de débrancher l’alimentation avant un changement d’accessoire, de fixer correctement la lame, de soutenir la pièce, de ne pas forcer l’outil au-delà de sa capacité et de traiter les projections, le bruit, les vibrations et les poussières.

Un verdict positif du calculateur signifie uniquement que la production documentée couvre le besoin pneumatique dans les conditions comparées. Il ne valide ni la lame, ni le matériau, ni l’épaisseur, ni la prévention du poste.

## Procédure de choix reproductible

1. Identifier le modèle et le MPN de la scie.
2. Relever sa consommation en charge et la pression associée.
3. Comparer ce besoin au FAD du compresseur à une pression documentée.
4. Reproduire le flexible et les raccords prévus, sans prolonger silencieusement la recommandation de 5 m.
5. Mesurer la pression pendant une coupe représentative.
6. Consigner la durée, le matériau, la lame, les pauses et la récupération du compresseur.
7. Traiter séparément la sécurité mécanique, les projections, le bruit, les vibrations et les poussières.

Ouvrez le [calculateur avec la CP7900 préchargée](/calculateur/#outil=chicago-pneumatic-cp7900), puis recommencez avec la CP7901 ou la CP881. Le résultat doit changer uniquement lorsque la donnée de la référence ou votre scénario change.

## Sources

- [Chicago Pneumatic, fiche officielle CP7900](https://tools.cp.com/en/products/specialtycutting/cp7900-sku8941079000)
- [Chicago Pneumatic, fiche officielle CP7901](https://tools.cp.com/en-nz/products/specialtycutting/cp7901-sku8941079011)
- [Chicago Pneumatic, fiche officielle CP881](https://tools.cp.com/en/products/specialtycutting/cp881-skuT023916)
- [Chicago Pneumatic, catalogue General Industry](https://tools.cp.com/content/dam/brands/cp/tools/web/shared/literature/catalogs/cp_general-industry/cp-general-industry-ENG.pdf)
- [Chicago Pneumatic, manuel CP881](https://www.cp.com/content/dam/pim/itba/cp/technical-documents/CA145206.pdf)
- [Chicago Pneumatic, consignes de sécurité des scies alternatives](https://www.cp.com/content/dam/pim/itba/cp/technical-documents/update2025/june-audit/safety/6159948790.pdf)
