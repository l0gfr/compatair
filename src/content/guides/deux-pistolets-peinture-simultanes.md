---
title: "Deux pistolets de peinture simultanés : additionner les bons débits"
seoTitle: "Deux pistolets simultanés : calcul du débit"
description: "Scénario documenté avec un SATAjet 5000 B HVLP et un SATAminijet 4400 B HVLP, en séparant demande, filtre, réseau et FAD."
pubDate: 2026-07-15
category: "Choisir"
audiences: [professionnel]
metiers: [carrosserie-peinture]
readingTime: 10
sources:
  - https://www.sata.com/en-eur/products/spray-guns/gravity-flow-cup-guns/satajet-5000-b/technical-data
  - https://www.sata.com/en/premium-spray-gun-for-small-area-applications-in-automotive-finishes-sataminijet-4400-b-hvlp-1.1-125-cc-qcc-reusable-plastic-cup-suitable-for-water-and-solvent-based-paint-systems/198010
  - https://www.sata.com/en-eur/products/filter-technology/sata-filter-series-200/sata-filter-series-200/technical-data
---

Deux pistolets ne se dimensionnent ni avec deux fois une moyenne HVLP, ni avec le débit du plus gros seulement. Le scénario doit nommer les références, confirmer qu’elles pulvérisent réellement au même moment et conserver la pression de chacune.

## Un cas reproductible avec deux fiches SATA

SATA publie pour le [SATAjet 5000 B HVLP](https://www.sata.com/en-eur/products/spray-guns/gravity-flow-cup-guns/satajet-5000-b/technical-data) **430 Nl/min à 2 bar** de pression d’entrée recommandée. La fiche du [SATAminijet 4400 B HVLP, référence 198010](https://www.sata.com/en/premium-spray-gun-for-small-area-applications-in-automotive-finishes-sataminijet-4400-b-hvlp-1.1-125-cc-qcc-reusable-plastic-cup-suitable-for-water-and-solvent-based-paint-systems/198010) indique **120 L/min** et une pression dynamique recommandée de **2 bar**.

Si les deux gâchettes sont ouvertes en même temps, l’addition documentaire est `430 + 120 = 550 L/min`. Ce total ne vaut que pour ce couple et cette condition. S’ils alternent, le profil temporel change et l’addition permanente surestime la demande continue.

<div class="article-infographic" tabindex="0" role="group" aria-label="Infographie technique défilable horizontalement sur petit écran">
<svg viewBox="0 0 760 315" role="img" aria-labelledby="two-guns-title two-guns-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="two-guns-title">Addition de deux pistolets SATA simultanés</title><desc id="two-guns-desc">Le SATAjet 5000 B HVLP consomme 430 litres par minute et le SATAminijet 4400 B HVLP 120 litres par minute, soit 550 litres par minute lorsqu’ils travaillent ensemble.</desc>
  <rect width="760" height="315" rx="22" fill="#eef2e9"/><rect x="38" y="70" width="210" height="132" rx="16" fill="#143426"/><text x="58" y="105" fill="#d3eb56" font-size="13" font-weight="700">SATAJET 5000 B HVLP</text><text x="58" y="151" fill="white" font-size="31" font-weight="700">430</text><text x="58" y="179" fill="#bed0c6" font-size="14">L/min · 2 bar</text><text x="270" y="150" fill="#925e35" font-size="32" font-weight="700">+</text><rect x="310" y="70" width="210" height="132" rx="16" fill="#28533f"/><text x="330" y="105" fill="#d3eb56" font-size="13" font-weight="700">SATAMINIJET 4400 B</text><text x="330" y="151" fill="white" font-size="31" font-weight="700">120</text><text x="330" y="179" fill="#bed0c6" font-size="14">L/min · 2 bar</text><text x="542" y="150" fill="#925e35" font-size="32" font-weight="700">=</text><rect x="582" y="70" width="140" height="132" rx="16" fill="#d3eb56"/><text x="602" y="105" fill="#143426" font-size="13" font-weight="700">SIMULTANÉS</text><text x="602" y="151" fill="#143426" font-size="31" font-weight="700">550</text><text x="602" y="179" fill="#56685e" font-size="14">L/min</text><text x="38" y="266" fill="#56685e" font-size="14">Le total est un calcul ; chaque valeur conserve sa référence et sa condition.</text>
</svg>
</div>

## Vérifier séparément le traitement d’air

La page technique de la [série SATA filter 200](https://www.sata.com/en-eur/products/filter-technology/sata-filter-series-200/sata-filter-series-200/technical-data) annonce un débit maximal de 2 000 Nl/min pour la gamme et précise que les données ne se rapportent pas à une variante particulière.

Comparer 550 à 2 000 montre seulement que le total des deux pistolets est inférieur au maximum publié pour la gamme. Cela ne valide pas la variante installée, sa perte de charge, son état, les autres consommateurs qui la traversent ni la qualité de l’air finale. Ces vérifications restent dans le dossier du filtre.

## Contrôler les deux branches en pulvérisation

Installez un point de mesure à l’entrée de chaque pistolet. Relevez d’abord chaque branche seule, puis les deux simultanément. Une chute qui n’apparaît que lors du chevauchement peut venir de la conduite commune, du traitement ou de la production.

La pression au mur n’est pas une preuve suffisante. Le [protocole de pression dynamique](/guides/mesurer-pression-dynamique-pistolet-peinture/) détaille les points de mesure.

## Demander le FAD à la bonne pression

Le compresseur doit fournir un FAD exploitable à une pression qui couvre le réseau et le réglage terminal. Les 2 bar des pistolets ne signifient pas que la centrale doit être comparée sur un point FAD à 2 bar : les pertes et les équipements intermédiaires existent, et leur marge doit être mesurée ou calculée.

À défaut de courbe ou de points documentés, le scénario de 550 L/min est connu mais le verdict machine reste `insufficient_data`.

## Sources

- [SATA, données techniques du SATAjet 5000 B](https://www.sata.com/en-eur/products/spray-guns/gravity-flow-cup-guns/satajet-5000-b/technical-data)
- [SATA, SATAminijet 4400 B HVLP, référence 198010](https://www.sata.com/en/premium-spray-gun-for-small-area-applications-in-automotive-finishes-sataminijet-4400-b-hvlp-1.1-125-cc-qcc-reusable-plastic-cup-suitable-for-water-and-solvent-based-paint-systems/198010)
- [SATA, données techniques de la série filter 200](https://www.sata.com/en-eur/products/filter-technology/sata-filter-series-200/sata-filter-series-200/technical-data)
