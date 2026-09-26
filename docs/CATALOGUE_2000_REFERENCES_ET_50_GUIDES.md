# Extension documentée : 500 compresseurs, 1 500 outils, 50 guides

Sources consultées le 26 septembre 2026. Le catalogue passe de 719 à 1 219 compresseurs et de 2 287 à 3 787 outils. Les guides passent de 206 à 256. Ce sont 5 006 références au total, sans assimilation des packs d’accessoires à de nouveaux compresseurs.

## Provenance et reconstruction

Les transcriptions contrôlées se trouvent dans `src/data/imports/technical-compressors-additional-2026-09-26.json` et `technical-tools-additional-2026-09-26.json`. Chaque source possède une URL officielle, une date d’observation et une empreinte SHA-256. Chaque ligne conserve sa référence, les valeurs originales et les conditions de conversion. L’import local reproductible est `node scripts/import-technical-expansion.mjs`.

| Compresseurs | Références ajoutées |
| --- | ---: |
| Airpress | 263 |
| ABAC | 180 |
| Gentilin | 57 |

| Outils | Références ajoutées |
| --- | ---: |
| Fiam | 466 |
| DEPRAG | 379 |
| Red Rooster | 267 |
| Ingersoll Rand | 109 |
| BIAX | 100 |
| Toku | 56 |
| Yokota | 52 |
| Nitto Kohki | 38 |
| RUPES | 33 |

Le lot possède 188 compresseurs avec un point FAD qualifié par sa pression. Les 312 autres restent sans courbe utilisable : les valeurs maximales ou restituées sans pression associée sont conservées comme caractéristiques, jamais transformées en points de calcul. Une pression maximale de machine n’est pas une pression de mesure implicite.

Les rapprochements utilisent les codes fabricant, et non seulement les noms commerciaux. Les modèles homonymes reçoivent une identité de variante et un libellé public distinct. Quatre packs Airpress comprenant des accessoires ont été exclus ; les configurations complètes avec traitement d’air et code propre restent identifiées séparément.

## Contrôles particuliers

- Gentilin : points à 5 et 8 bar, capacité réelle de 90 L pour plusieurs modèles /100, service S1/S3 conservé et mode sans huile relié à une preuve dédiée.
- ABAC : distinction entre « FAD capacity » rattaché à la variante et « FAD Capacity Max » sans pression qualifiée dans les tableaux retenus.
- Airpress : deux libellés 780 et 600 L/min conservés pour 362958I, sans inventer une perte ou arbitrer leur signification.
- Fiam : pression provenant d’une brochure de la référence, jamais supposée à partir de la marque. Les modèles sans preuve suffisante sont exclus.
- DEPRAG : colonnes appariées Type / Part no., couples en Ncm préservés, couples dur/souple séparés. Les références conflictuelles sont exclues.
- Rami Yokota : double-page traitée en deux tableaux ; plage 5 à 6 bar des YLTX/YLA conservée ; plus grand des régimes charge/vide retenu lorsqu’ils sont publiés.
- BIAX : rapprochement web/catalogue par numéro de commande ; suppression des doublons de visseuses entre les deux sources.
- Ingersoll Rand : conversion CFM × 28,316846592, arrondie à 0,001 L/min ; M2 à 19,8 L/s en charge. Le nom du PDF et l’empreinte sont conservés avec la bibliothèque officielle, sans URL temporaire d’accès.
- Nitto : extraction limitée à la surface visible de chaque page PDF, car le document contient du texte invisible hors page. Régime à vide explicite ; variantes à levier séparées des présentations Non-CE.
- RUPES : consommation maximale, orbite et plateau propres à chaque référence ; incohérence Venturi / Centralised de RH323T signalée dans le guide, pas tranchée silencieusement.

## Éditorial et maillage

Les 50 guides développent des décisions distinctes : variantes de cuve, homonymies, unités de couple, régime charge/vide, options de bande, conditions de pression, consultation technique, cycle d’atelier et limites des comparaisons. Chaque guide possède une infographie responsive, des sources, des liens vers les fiches exactes et des lectures complémentaires. Les hypothèses et conversions sont distinguées des valeurs fabricant. Aucun essai physique, prix, stock, popularité ou classement commercial n’est inventé.

Les fiches produits affichent au plus quatre guides qui citent explicitement leur route. Les liens retour entre guides sont bornés. Les références sans FAD du comparatif sont paginées avec les autres références au lieu de créer des listes de plusieurs centaines de liens. Les quotas et cohortes d’indexation existants restent appliqués.

## Volume et exploitation

Le catalogue représente 4 616 353 combinaisons explorables : 4 600 506 couples fixes et 15 847 combinaisons paramétriques. Les treize outils paramétriques exigent toujours les entrées utilisateur avant calcul.

Astro met en mémoire les réponses des endpoints statiques. L’export des verdicts est donc écrit en flux dans un fichier temporaire puis déplacé dans la sortie pendant `astro:build:done`. L’absence ou l’échec du fichier empêche la réussite du build. La réponse publique conserve son JSON exact.

Le chargeur MCP mutualise les formes et valeurs des enregistrements, stocke trois entiers par couple et construit son index directement dans des tableaux typés. Une mesure locale sur les 4 600 506 couples atteint 241,7 Mio, sous le plafond inchangé de 256 Mio, avec le tas JavaScript limité à 128 Mio. Le benchmark vérifie aussi l’API et l’identité complète des octets reconstruits.

Le premier build de ce lot mesure environ 2 486 Mio bruts, dont 269 Mio HTML et 168 Mio compressés en xz. Le plafond de l’archive est porté à 176 Mio, avec deux archives de production conservées au maximum, une rétention de sept jours et la purge existante. Les plafonds JavaScript restent inchangés ; les données chargées à la demande sont bornées séparément (230 Kio gzip pour le catalogue d’exécution, 140 Kio pour la recherche).
