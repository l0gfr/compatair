---
title: "Qualité de l’air comprimé et ISO 8573-1 : particules, eau et huile sans raccourci"
description: "Comprendre ce que classe réellement ISO 8573-1, où spécifier la qualité de l’air et pourquoi filtre, sécheur et compresseur sans huile ne sont pas interchangeables."
pubDate: 2026-07-13
updatedDate: 2026-09-26
category: "Comprendre"
audiences: [professionnel]
metiers: [carrosserie-peinture, maintenance-industrielle]
readingTime: 11
featured: false
series: audit-suivi-maintenance-air-comprime
sources:
  - https://www.iso.org/fr/standard/46418.html
  - https://www.cagi.org/resource-library
  - https://www.atlascopco.com/content/dam/atlas-copco/local-countries/france/documents/compressor-technique/Compressed-Air-Manual-9th-edition_compressed.pdf
relatedGuides: [secheur-air-comprime-atelier-non-chauffe, audit-reseau-air-comprime-protocole-mesures, indicateurs-maintenance-air-comprime]
---

Dire qu’un compresseur fournit de l’air propre ne décrit pas une qualité mesurable. Il faut identifier les contaminants concernés, le niveau requis, le lieu où ce niveau doit être atteint et la méthode de vérification.

La page officielle de l’[ISO 8573-1:2010](https://www.iso.org/fr/standard/46418.html) indique que la norme spécifie des classes de pureté concernant les particules, l’eau et l’huile. Elle s’applique indépendamment de l’emplacement du système où l’air est spécifié ou mesuré. Elle identifie aussi des contaminants gazeux et microbiologiques et renvoie aux autres parties de la série pour les méthodes de mesure.

<svg viewBox="0 0 760 350" role="img" aria-labelledby="quality-title quality-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="quality-title">Les trois axes principaux de qualité ISO 8573-1</title><desc id="quality-desc">La qualité de l’air comprimé est spécifiée séparément pour les particules, l’eau et l’huile.</desc>
  <rect width="760" height="350" rx="22" fill="#10281e"/><text x="38" y="48" fill="#d3eb56" font-size="15" font-weight="700">UNE QUALITÉ, TROIS AXES DISTINCTS</text>
  <g font-family="Manrope, sans-serif"><circle cx="180" cy="170" r="88" fill="#28533f" stroke="#47a47c" stroke-width="3"/><text x="180" y="158" text-anchor="middle" fill="white" font-size="21" font-weight="700">Particules</text><text x="180" y="187" text-anchor="middle" fill="#c7d6ce" font-size="14">solides</text>
  <circle cx="380" cy="170" r="88" fill="#28533f" stroke="#d3eb56" stroke-width="3"/><text x="380" y="158" text-anchor="middle" fill="white" font-size="21" font-weight="700">Eau</text><text x="380" y="187" text-anchor="middle" fill="#c7d6ce" font-size="14">vapeur et liquide</text>
  <circle cx="580" cy="170" r="88" fill="#28533f" stroke="#e39a5e" stroke-width="3"/><text x="580" y="158" text-anchor="middle" fill="white" font-size="21" font-weight="700">Huile</text><text x="580" y="187" text-anchor="middle" fill="#c7d6ce" font-size="14">formes mesurées</text></g>
  <text x="38" y="315" fill="#b9cac1" font-size="14">La classe requise vient de l’usage. La technologie du compresseur ne la détermine pas à elle seule.</text>
</svg>

Le [guide du Powermax45 SYNC](/guides/compresseur-decoupeur-plasma-powermax45-sync/) applique cette lecture à un découpeur plasma, avec les exigences de qualité d’air de sa notice et un écart documentaire sur le débit.

## Partir de l’usage final

Une soufflette d’atelier, un instrument de contrôle, une opération de peinture et un procédé en contact avec un produit ne présentent pas les mêmes exigences. CompatAir ne publie donc pas une classe unique comme bonne qualité universelle.

La spécification doit venir de l’outil, du procédé, du fabricant de l’équipement et des règles applicables à l’activité. Elle doit aussi préciser le point de mesure. Une qualité atteinte en sortie de traitement peut se dégrader dans une conduite corrodée ou contaminée.

L’ISO 8573-1 fournit un langage de classification. Elle ne dispense pas de déterminer la classe nécessaire pour chaque famille de contaminants.

## Traiter séparément particules, eau et huile

Les trois axes ne sont pas équivalents.

Les particules solides peuvent provenir de l’air ambiant, de la corrosion, de matériaux de conduite ou de travaux effectués sur le réseau. Leur traitement dépend notamment de leur taille et de leur concentration.

L’eau entre avec l’humidité de l’air aspiré. Une partie condense pendant le refroidissement. Le reste peut demeurer sous forme de vapeur. La [purge des condensats](/guides/entretien-compresseur-purge-condensats/) retire un liquide accumulé, mais ne fixe pas à elle seule le point de rosée de l’air distribué.

L’huile peut avoir plusieurs origines selon le système, l’air ambiant et le procédé. La mention sans huile décrit une technologie ou une partie du processus de compression. Elle ne constitue pas, à elle seule, une mesure des contaminants au point d’utilisation.

Cette dernière conclusion est une conséquence de la logique de l’ISO : la classe porte sur l’air mesuré à un emplacement défini, pas uniquement sur l’étiquette commerciale du compresseur.

## Un filtre ne remplace pas un sécheur

Le glossaire technique du [Compressed Air and Gas Institute](https://www.cagi.org/resource-library) définit les filtres comme des dispositifs de séparation des particules, de l’humidité ou du lubrifiant entraînés selon leur fonction. Sa rubrique de clarification précise qu’un filtre peut retirer de l’eau liquide et certains aérosols, mais qu’il ne réduit pas la vapeur d’eau ni le point de rosée sous pression.

Un [sécheur](/glossaire/#secheur) agit sur la vapeur d’eau pour atteindre un objectif de point de rosée. Un séparateur retire de l’eau déjà condensée. Un filtre traite les contaminants pour lesquels il a été conçu. Ces équipements peuvent être complémentaires, mais leurs fonctions ne doivent pas être confondues.

Le dossier sur le [point de rosée et les sécheurs](/guides/point-rosee-secheur-filtre-air-comprime/) détaille cette distinction.

## Spécifier le point de contrôle

La page officielle ISO précise que la pureté peut être spécifiée ou mesurée à différents emplacements du système. Cette liberté impose de nommer l’emplacement dans le cahier des charges et le rapport de mesure.

Des points possibles sont :

- la sortie du compresseur ;
- l’aval du sécheur ;
- l’aval d’une chaîne de filtration ;
- le collecteur principal ;
- le point d’utilisation ;
- l’entrée d’un procédé critique.

Un résultat obtenu après le sécheur ne prouve pas automatiquement la qualité après plusieurs dizaines de mètres de réseau. Le prélèvement doit correspondre à l’exigence réelle.

## Mesurer avec la bonne partie de la série

L’ISO 8573-1 classe les contaminants et renvoie à d’autres parties pour leur mesure. Le catalogue officiel du comité ISO/TC 118/SC 4 recense notamment des parties consacrées à l’aérosol d’huile, à l’humidité, aux particules solides, aux contaminants gazeux, microbiologiques et à l’eau liquide.

CompatAir ne reproduit pas les tableaux normatifs payants et ne déduit pas une classe d’un simple capteur non documenté. Un rapport exploitable doit indiquer la méthode, l’instrument, l’emplacement, les conditions, la date et l’incertitude ou les limites de la mesure.

## Éviter quatre conclusions abusives

« Sans huile » ne signifie pas automatiquement air conforme à toutes les applications.

« Filtré » ne signifie pas automatiquement air sec.

« Sec » ne signifie pas absence de particules ou d’huile.

Une mesure en sortie de traitement ne garantit pas automatiquement le point d’utilisation.

Ces distinctions sont essentielles avant de comparer deux solutions de traitement ou de rédiger une exigence fournisseur.

## Construire une exigence vérifiable

Une spécification utile répond à cinq questions :

1. Quel usage doit être protégé ?
2. Quels contaminants doivent être limités ?
3. Quelle classe est requise pour chacun ?
4. À quel endroit la classe doit-elle être respectée ?
5. Selon quelle méthode sera-t-elle vérifiée ?

Si l’une de ces réponses manque, l’expression air propre reste trop vague pour accepter une installation.

## Définir le besoin d’eau en ambiance froide

Pour une conduite exposée à l’hiver, préparez le besoin avec le guide [séchage de l’air en atelier non chauffé](/guides/secheur-air-comprime-atelier-non-chauffe/). Les scénarios de température y sont explicitement distingués des performances garanties d’un sécheur.

## Sources

- [ISO, ISO 8573-1:2010, Air comprimé, polluants et classes de pureté](https://www.iso.org/fr/standard/46418.html)
- [Compressed Air and Gas Institute, Resource Library et glossaire](https://www.cagi.org/resource-library)
- [Atlas Copco, Compressed Air Manual, 9e édition, traitement de l’air](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/france/documents/compressor-technique/Compressed-Air-Manual-9th-edition_compressed.pdf)
