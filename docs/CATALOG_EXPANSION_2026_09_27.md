# Lot de 700 références du 27 septembre 2026

Ajout exact de 200 compresseurs et 500 outils aux 5 006 références précédentes : 1 419 compresseurs et 4 287 outils au total. Les transcriptions structurées, URL, pages PDF et empreintes SHA-256 sont conservées dans `src/data/imports/catalog-{compressors,tools}-2026-09-27.json`. Les imports se reproduisent avec `node scripts/import-technical-expansion.mjs --batch=2026-09-27`.

| Marque | Compresseurs | Outils |
| --- | ---: | ---: |
| Aircraft | 88 | 63 |
| Nuair | 51 | 0 |
| Stanley, dont Fatmax | 47 | 0 |
| Black+Decker | 9 | 0 |
| PREBENA | 5 | 0 |
| M7 | 0 | 356 |
| Bostitch | 0 | 63 |
| Mirka | 0 | 18 |

## Sélection et portée commerciale

Les fiches individuelles officielles sont prioritaires. Les gammes couvrent 21 catégories d’outils. La liste [Top Sales de M7](https://www.mighty-seven.com/product_top) donne une priorité qualitative aux références pneumatiques documentées qui y figurent. Il ne s’agit ni de volumes de ventes audités ni d’un classement de parts de marché. Les coffrets qui dupliquent un outil, accessoires, lignes ambiguës et références déjà présentes sont exclus.

Les autres preuves sont les [fiches Aircraft / Stürmer](https://www.stuermer-machines.com/brands/aircraft/), les [fiches Bostitch France](https://bostitch.fr/produits/outils/), les [catalogues officiels Nuair et marques FNA](https://www.nuair.pl/en/catalogs-for-download), le [catalogue PREBENA 2026](https://prebena.de/fileadmin/user_upload/E-Books/DE-2026/PREBENA-Hauptkatalog-2026-DE.pdf) et le [catalogue Mirka 2022/2023](https://cms.mirka.com/globalassets/msc/pdf/mirka-product-catalog-2022-low-res.pdf). Le millésime ancien reste explicite ; la consultation en 2026 ne transforme pas une ancienne édition en catalogue 2026. La disponibilité commerciale actuelle n’est pas présumée.

## Limites conservées dans les données et les calculs

- Les 200 compresseurs documentent leur cuve, pression, lubrification et détails propres. Aucun débit aspiré ni capacité de remplissage ne devient silencieusement un FAD. Les capacités de remplissage Aircraft et leurs pressions restent consultables séparément ; leur protocole complet n’étant pas établi, elles ne valident pas de compatibilité.
- Les masses brutes et dimensions d’emballage Nuair/Stanley ne deviennent pas des masses nettes ou dimensions de machine.
- Les 63 outils Bostitch conservent leurs litres par coup à 5,6 bar et leur plage de pression. Aucune cadence n’est inventée.
- Les 419 références M7/Aircraft à consommation moyenne portent `airflowBasis: average`. Moteur 1.4.1, API, MCP, scanner et calculateur refusent d’en déduire une alimentation continue sans débit en charge et conditions du cycle. La moyenne reste visible pour identifier et comparer les documents.
- Les tables visibles Mirka ont été contrôlées sur les pages rendues. Leur couche texte contient d’anciens tableaux superposés : elle ne sert pas à arbitrer les chiffres. Les masses ambiguës et les références dont les unités de pression sont incohérentes sont écartées.

Les cartes illustrées sont des repères techniques CompatAir, explicitement distingués des photographies constructeur. L’indexation suit le mécanisme progressif existant ; une nouvelle référence ne garantit pas l’indexation immédiate de sa page.

## Vérification reproductible

Le test du lot compare les 700 produits générés à leurs transcriptions. Il rejette un MPN modifié, une source non autorisée, une empreinte absente, une conversion implicite vers le FAD, une cadence supposée et une moyenne utilisée comme garantie de fonctionnement continu. Les contrôles généraux du catalogue, de provenance éditoriale, de valeur propre, de types, de build, d’archives et de performance restent applicables.
