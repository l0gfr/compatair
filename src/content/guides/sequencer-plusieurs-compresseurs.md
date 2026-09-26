---
title: "Séquencer plusieurs compresseurs : base, appoint et pression réseau"
seoTitle: "Séquencement de plusieurs compresseurs"
description: "Méthode pour attribuer base et appoint, choisir les signaux et tester la séquence sans laisser plusieurs machines moduler en parallèle."
pubDate: 2026-07-15
updatedDate: 2026-09-26
category: "Utiliser"
audiences: [professionnel]
metiers: [maintenance-industrielle]
readingTime: 16
featured: true
sources:
  - https://www1.eere.energy.gov/manufacturing/tech_assistance/pdfs/compressed_air_sourcebook.pdf
  - https://www.atlascopco.com/en-nz/compressors/greenproduction/compressed-air-reliability
---

Une salle de plusieurs compresseurs ne devient pas une centrale coordonnée parce que les pressostats sont étagés. La stratégie doit décider quelles machines portent la base, laquelle suit la variation, où la pression est lue et comment le système réagit à une pointe, une panne ou une maintenance.

## Une seule machine d’appoint dans le principe DOE

Le guide du [U.S. Department of Energy](https://www1.eere.energy.gov/manufacturing/tech_assistance/pdfs/compressed_air_sourcebook.pdf) indique que, dans un système multi-compresseurs séquencé, la plupart des machines peuvent fonctionner à pleine charge en base, tandis qu’une seule module comme compresseur d’appoint, ou « trim ».

Le document relie aussi cette organisation au stockage et aux bandes de charge/décharge. Si plusieurs machines modulent simultanément sur des plages qui se chevauchent, la puissance consommée peut ne plus suivre proprement le débit utile.

Le diagnostic commence par un relevé séparé des [temps en charge, à vide et à l’arrêt](/guides/mesurer-temps-charge-vide-compresseur/). Sans cette chronologie, une séquence apparemment stable peut masquer plusieurs machines qui consomment à débit nul.

## Construire la matrice des machines

Pour chaque compresseur, rassemblez : capacité et pression, puissance à pleine charge, puissance à débit nul, plage de régulation, temps de démarrage, limites de cycles, traitement associé et disponibilité. Ajoutez l’âge ou les heures uniquement comme données d’exploitation, pas comme substitut à la performance.

La matrice doit permettre de choisir :

- machines de base aux points où elles sont efficaces ;
- machine capable de suivre la plage variable ;
- réserve disponible si une unité est indisponible ;
- ordre de rotation pour la maintenance ou l’équilibrage des heures ;
- contraintes de qualité d’air et de pression.

## Placer le signal au bon endroit

Une pression lue près d’un compresseur peut ignorer la chute vers la production. À l’inverse, un capteur placé derrière une charge très pulsée peut provoquer des réactions excessives. Le choix du signal appartient à l’étude du réseau et à la commande.

Le DOE demande une bonne localisation des signaux dans la stratégie globale. Testez les capteurs et conservez leur étalonnage, leur position et la logique qui les utilise.

<div class="article-infographic" tabindex="0" role="group" aria-label="Infographie technique défilable horizontalement sur petit écran">
<svg viewBox="0 0 760 375" role="img" aria-labelledby="sequencing-title sequencing-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="sequencing-title">Séquence base et compresseur d’appoint</title><desc id="sequencing-desc">Deux compresseurs de base travaillent à pleine charge et un compresseur d’appoint suit la demande variable. Un contrôleur lit la pression réseau et commande la séquence.</desc>
  <rect width="760" height="375" rx="22" fill="#10281e"/><text x="38" y="44" fill="#d3eb56" font-size="15" font-weight="700">EXEMPLE DE RÔLES, PAS ORDRE UNIVERSEL</text><rect x="38" y="82" width="182" height="88" rx="15" fill="#28533f"/><text x="58" y="116" fill="#d3eb56" font-size="13" font-weight="700">BASE 1</text><text x="58" y="145" fill="white" font-size="16" font-weight="700">pleine charge</text><rect x="38" y="190" width="182" height="88" rx="15" fill="#28533f"/><text x="58" y="224" fill="#d3eb56" font-size="13" font-weight="700">BASE 2</text><text x="58" y="253" fill="white" font-size="16" font-weight="700">pleine charge</text><rect x="38" y="298" width="182" height="55" rx="15" fill="#925e35"/><text x="58" y="331" fill="white" font-size="14" font-weight="700">APPOINT · variable</text><path d="M220 126h152M220 234h152M220 325h152M372 126v199" stroke="#7ca18e" stroke-width="5" fill="none"/><rect x="372" y="174" width="164" height="104" rx="16" fill="#d3eb56"/><text x="454" y="211" text-anchor="middle" fill="#143426" font-size="13" font-weight="700">CONTRÔLEUR</text><text x="454" y="240" text-anchor="middle" fill="#56685e" font-size="13">pression + demande</text><path d="M536 226h96" stroke="#d3eb56" stroke-width="5"/><rect x="632" y="184" width="90" height="84" rx="14" fill="#eef2e9"/><text x="677" y="218" text-anchor="middle" fill="#143426" font-size="13" font-weight="700">RÉSEAU</text><text x="677" y="242" text-anchor="middle" fill="#56685e" font-size="12">signal</text><text x="300" y="347" fill="#b9cac1" font-size="12">Le stockage et les limites constructeur restent dans la boucle.</text>
</svg>
</div>

## Ce qu’apporte un contrôleur central

Atlas Copco explique sur sa page [Compressed air reliability](https://www.atlascopco.com/en-nz/compressors/greenproduction/compressed-air-reliability) qu’un contrôleur central choisit quelle machine ou quel sécheur activer selon la demande, peut répartir les heures ou prioriser les unités les plus efficaces, et coordonne les compresseurs à vitesse variable.

Ces fonctions décrivent une famille de contrôleurs. Elles ne prouvent pas que toute installation dispose de chaque algorithme. La documentation de la version installée et sa configuration font foi.

## Tester les scénarios de transition

La recette doit couvrir davantage que la pleine production : montée progressive, pointe brusque, baisse de demande, pause, redémarrage, indisponibilité d’une base et bascule de maintenance. À chaque scénario, enregistrez pressions, états, puissance, débit et temps de réaction.

Un séquencement réussi maintient le procédé tout en évitant les états inutiles. Si la pression est stable mais que deux machines restent longtemps à vide, la commande mérite encore une analyse.

Les pointes courtes doivent aussi être confrontées au [stockage primaire et secondaire](/guides/stockage-primaire-secondaire-air-comprime/) avant de demander à une unité supplémentaire de démarrer.

## Organiser la rotation sans perdre la performance

Équilibrer les heures peut simplifier la maintenance, mais ne doit pas ignorer les différences de puissance spécifique ou de plage. Une rotation calendaire aveugle peut placer en base une machine moins adaptée au point courant.

Documentez la règle, les exceptions, la version du contrôleur et la date de toute modification. Les tendances de l’observatoire doivent séparer disponibilité, performance énergétique et stabilité de pression.

L’ajout d’une machine à variateur demande aussi de vérifier la continuité des plages de débit. Le guide [VSD et profil de charge d’atelier](/guides/compresseur-vitesse-variable-vsd-rentabilite-atelier/) illustre le risque d’un intervalle mal couvert entre deux états de fonctionnement.

Pour prolonger cette vérification, vous pouvez [préparer le raccordement de deux compresseurs en parallèle](/guides/raccorder-deux-compresseurs-en-parallele/).

## Sources

- [U.S. Department of Energy, Improving Compressed Air System Performance](https://www1.eere.energy.gov/manufacturing/tech_assistance/pdfs/compressed_air_sourcebook.pdf)
- [Atlas Copco, A new view on compressed air reliability](https://www.atlascopco.com/en-nz/compressors/greenproduction/compressed-air-reliability)
