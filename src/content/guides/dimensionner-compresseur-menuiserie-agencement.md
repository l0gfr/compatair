---
title: "Dimensionner l’air comprimé en menuiserie et agencement sans cadence inventée"
seoTitle: "Compresseur pour menuiserie | CompatAir"
description: "Méthode pour traiter clouage, agrafage et finition à partir du volume par tir, de la cadence explicite et des autres usages réellement simultanés."
pubDate: 2026-07-15
updatedDate: 2026-07-20
category: "Choisir"
audiences: [professionnel]
metiers: [menuiserie-agencement]
readingTime: 8
featured: false
relatedCalculatorTool: einhell-tc-pn-50
sources:
  - https://www.einhell.fr/p/4137790-tc-pn-50/
  - https://d2c5rvsfjg2eub.cloudfront.net/asset/208244749100/document_ngovue839t5o7dugodnovh8q57/4137790_11018_001_SPK2.pdf
  - https://www.atlascopco.com/en-uk/compressors/air-compressor-blog/sizing-compressed-air-pipe
  - https://www.inrs.fr/risques/poussieres-bois/ce-qu-il-faut-retenir.html
---

Une agrafeuse peut annoncer un [volume d’air par action](/glossaire/#volume-par-action), là où un autre outil publie des litres par minute. Pour rapprocher ces deux écritures, l’atelier doit fournir sa cadence. L’intitulé « menuiserie » n’indique ni ce rythme ni le nombre de postes actifs ensemble.

La TC-PN 50 sert ici uniquement d’exemple arithmétique parce que sa notice publie un volume par tir. La même notice exclut l’utilisation professionnelle, artisanale ou industrielle. CompatAir ne la recommande donc pas pour équiper un atelier professionnel.

<svg viewBox="0 0 760 310" role="img" aria-labelledby="joinery-title joinery-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="joinery-title">Calcul explicite d’un besoin par action</title><desc id="joinery-desc">Le volume d’air publié par tir est multiplié par une cadence renseignée pour produire un débit moyen de scénario.</desc>
  <rect width="760" height="310" rx="20" fill="#10281e"/><text x="38" y="47" fill="#d3eb56" font-size="15" font-weight="700">LE MÉTIER NE REMPLACE PAS LA CADENCE</text>
  <rect x="50" y="95" width="180" height="90" rx="14" fill="#eef2e9"/><text x="140" y="132" text-anchor="middle" fill="#143426" font-size="18" font-weight="700">Litres par tir</text><text x="140" y="162" text-anchor="middle" fill="#56685e" font-size="13">notice de l’outil</text><text x="261" y="151" fill="white" font-size="30" font-weight="700">×</text><rect x="305" y="95" width="180" height="90" rx="14" fill="#eef2e9"/><text x="395" y="132" text-anchor="middle" fill="#143426" font-size="18" font-weight="700">Tirs par minute</text><text x="395" y="162" text-anchor="middle" fill="#56685e" font-size="13">scénario déclaré</text><text x="516" y="151" fill="white" font-size="30" font-weight="700">=</text><rect x="560" y="95" width="150" height="90" rx="14" fill="#d3eb56"/><text x="635" y="132" text-anchor="middle" fill="#143426" font-size="18" font-weight="700">L/min</text><text x="635" y="162" text-anchor="middle" fill="#56685e" font-size="13">moyenne calculée</text>
  <text x="38" y="260" fill="#b9cac1" font-size="14">Ce résultat moyen ne décrit pas à lui seul la pointe au déclenchement.</text>
</svg>

## Quand la notice compte les tirs

La [fiche Einhell TC-PN 50](https://www.einhell.fr/p/4137790-tc-pn-50/) identifie le modèle ; sa [notice](https://d2c5rvsfjg2eub.cloudfront.net/asset/208244749100/document_ngovue839t5o7dugodnovh8q57/4137790_11018_001_SPK2.pdf) apporte les grandeurs utiles : environ **0,66 litre par tir**, **6,3 bar** recommandés, **8,3 bar** au maximum et un flexible de **9 mm** de diamètre intérieur.

Reste une inconnue : le nombre de tirs par minute. Une fois renseigné, le débit moyen suit la formule `volume par tir × cadence`. Cette cadence décrit le scénario de travail ; la fiche fabricant, elle, demeure à 0,66 litre par tir.

Cette conversion ne répond qu’au besoin pneumatique. Pour un achat métier, il faut ensuite sélectionner une référence dont le fabricant couvre l’usage professionnel prévu et recommencer le calcul avec ses propres données.

## Une minute de travail n’est pas un flux uniforme

Le résultat par minute lisse les déclenchements. Il ne dit pas encore si la pression tient à chaque tir, notamment derrière un flexible ou un raccord restrictif. La cuve peut amortir une pointe brève ; sa réserve ne change pas la production durable du compresseur.

Plusieurs cadences sont calculées dans le [guide de l’agrafeuse-cloueuse](/guides/compresseur-pour-agrafeuse-cloueuse-pneumatique/). Elles servent d’exemples arithmétiques. Le dossier de l’atelier doit employer son propre rythme, mesuré ou prévu, et le conserver à côté du résultat.

## Dessiner une minute type de l’atelier

Si la manutention emploie des ventouses alimentées par éjecteur, ajoutez leur commande au cycle. Le [dossier Schmalz SBPL](/guides/ejecteur-vide-schmalz-sbpl-consommation/) traite le bilan d’air et les limites liées à la porosité, sans valider le levage.

Clouage, finition et outil rotatif suivent rarement la même séquence. Une chronologie d’une minute suffit souvent à poser les bonnes questions :

1. quels outils peuvent débiter au même moment ;
2. lesquels fonctionnent par actions brèves ;
3. lesquels restent en charge plus longtemps ;
4. quel poste impose la pression la plus élevée au point d’utilisation.

Les consommations fixes qui se recouvrent rejoignent le même calcul. Celles qui se succèdent restent distinctes. Aucun coefficient « atelier de menuiserie » ne peut remplacer cette chronologie.

## Du collecteur au raccord de l’outil

Les 9 mm de flexible viennent de la notice TC-PN 50 et restent attachés à ce modèle. La conduite fixe pose d’autres questions : longueur, raccords, débit simultané et pression obtenue au poste.

Atlas Copco recommande de limiter les pertes et de traiter séparément la canalisation fixe, les flexibles et les raccords dans son guide de [dimensionnement des conduites](https://www.atlascopco.com/en-uk/compressors/air-compressor-blog/sizing-compressed-air-pipe). Une mesure dynamique au poste permet ensuite de vérifier le résultat réel.

## Le nettoyage des poussières de bois n’est pas un forfait de soufflette

L’[INRS](https://www.inrs.fr/risques/poussieres-bois/ce-qu-il-faut-retenir.html) place le captage à la source au premier plan et demande un nettoyage par aspiration. Le balai et la soufflette remettent les poussières en suspension et ne doivent pas devenir un besoin d’air ajouté par défaut au profil de l’atelier.

Le dimensionnement sépare donc alimentation des outils, aspiration des poussières et nettoyage. Un compresseur capable d’alimenter une ponceuse ne démontre aucune performance du dispositif de captage.

## Rejouer le calcul après un changement de cadence

Ouvrez le [calculateur avec la TC-PN 50](/calculateur/#outil=einhell-tc-pn-50), renseignez la cadence et les usages simultanés, puis choisissez un compresseur dont le débit restitué est documenté à la pression nécessaire. Le dossier doit exposer séparément :

- les données de notice ;
- les données déclarées par l’atelier ;
- les conversions arithmétiques ;
- les mesures de réseau ;
- les caractéristiques encore absentes.

Une autre cadence devient alors une variante du scénario, pas une réécriture de la notice.

## Sources

- [Einhell, fiche officielle TC-PN 50](https://www.einhell.fr/p/4137790-tc-pn-50/)
- [Einhell, notice TC-PN 50](https://d2c5rvsfjg2eub.cloudfront.net/asset/208244749100/document_ngovue839t5o7dugodnovh8q57/4137790_11018_001_SPK2.pdf)
- [Atlas Copco, dimensionnement des canalisations d’air comprimé](https://www.atlascopco.com/en-uk/compressors/air-compressor-blog/sizing-compressed-air-pipe)
- [INRS, Poussières de bois](https://www.inrs.fr/risques/poussieres-bois/ce-qu-il-faut-retenir.html)
