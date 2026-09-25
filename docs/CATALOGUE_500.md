# Extension du catalogue au 25 septembre 2026

Le catalogue passe de 300 à 500 références : 239 compresseurs et 261 outils. Les 200 ajouts possèdent une référence fabricant distincte. Les variantes retenues changent une caractéristique technique ou un équipement : cuve, sécheur, insonorisation, démarrage, vitesse, mandrin ou entraînement. Les coffrets CP qui ne font que réemballer un outil sont exclus.

## Sources versionnées

- `src/data/imports/chicago-pneumatic-2026-09-25.json` : 101 relevés individuels de fiches Chicago Pneumatic. URL exacte, référence, valeurs et unités brutes, date de consultation, empreinte SHA-256 du HTML récupéré et URL du visuel associé.
- `src/data/imports/schneider-2025-reviewed-2026-09-25.json` : 99 lignes du catalogue officiel Schneider 2025. URL et SHA-256 du PDF, page, ordre des colonnes et nombres allemands bruts. Les tableaux et notes de pression ont été contrôlés visuellement. Les notices de lubrification sont attribuées séparément et ne servent pas à importer des valeurs de débit anciennes.
- Les originaux volumineux ne sont pas copiés dans Git. Les instantanés conservent les faits techniques nécessaires à la reproduction de l'import, sans application JavaScript du fabricant ni données de session.
- Les images Schneider sont des illustrations de gamme extraites du catalogue, identifiées comme telles sur les fiches. Elles ne garantissent pas l'apparence exacte d'une variante.
- Les 101 nouvelles fiches CP utilisent des visuels techniques CompatAir : modèle, référence, consommation en charge, pression et flexible. `node scripts/render-cp-catalog-cards.mjs` les régénère depuis les relevés versionnés. Ce sont des cartes de données, explicitement attribuées à CompatAir, et non des photographies du fabricant.

## Portée des mesures

La consommation CP en charge est convertie de L/s en L/min par multiplication exacte par 60. La consommation à vide reste séparée ; lorsqu'elle dépasse le besoin en charge, la limite est visible. Neuf fiches dont la consommation en charge vaut zéro ont été exclues. Une donnée à vide ne remplace pas cette absence.

Pour 85 compresseurs UniMaster, la note du fabricant rattache le débit ISO 1217 à la pression du tableau moins un bar. Pour dix modèles Clean, le point publié est à 5 bar. Ces points ne sont pas extrapolés vers une pression supérieure. Quatre compresseurs compacts publient un débit de remplissage sans pression associée : leur courbe FAD reste vide et les verdicts restent `insufficient_data`.

Le statut commercial des compresseurs est `unknown` : une présence dans le catalogue 2025 ne prouve ni un stock actuel ni une disponibilité française. Les divergences repérées avec la boutique Schneider sont signalées dans les limites des références concernées. La valeur du catalogue daté reste explicitement attribuée à cette édition.

## Vérifications

Les tests d'import vérifient les conversions, les séparateurs numériques, les pressions, les colonnes, les références distinctes, l'absence de substitution d'un débit manquant et la concordance des 200 relevés avec les fiches publiées. Le registre des références reçoit des observations du 25 septembre ; les photographies mensuelles précédemment publiées restent inchangées.

Le périmètre devient 62 379 combinaisons explorables, dont 59 750 verdicts fixes et 2 629 combinaisons paramétriques. Ces combinaisons ne créent pas chacune une URL. Les nouveaux outils alimentent les pages d'usage existantes et le calculateur.
