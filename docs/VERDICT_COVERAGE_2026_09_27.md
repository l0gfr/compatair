# Couverture des verdicts, correction du 27 septembre 2026

## Diagnostic à périmètre constant

La home affichait les 9,9 % d’un audit historique figé, calculé avant les 700 dernières références, à côté du périmètre courant de 6 083 253 combinaisons. Le titre demandé est désormais « 6 083 253 combinaisons explorables ». La répartition visible est calculée sur le catalogue courant, à partir du cache des fiches ; seuls quatre compteurs sont conservés, sans recréer un export exhaustif des couples.

Avant cette correction, les 4 600 506 anciens couples conservaient exactement les résultats de l’archive : 78 120 compatibles en continu, 379 107 incompatibles, 4 143 279 indéterminés. Le dernier lot n’avait pas fait régresser ces couples. Il avait surtout élargi le dénominateur avec 200 compresseurs sans FAD exploitable et 419 outils à consommation moyenne seule.

Une correction antérieure du moteur avait supprimé l’hypothèse implicite d’un taux de marche de 100 % lorsque le constructeur ne le documentait pas. Cette protection reste nécessaire. L’omission de preuves de fonctionnement continu pour des gammes déjà documentées en FAD créait toutefois des indéterminations évitables.

## Preuves ajoutées

- **267 ABAC SPINN, FORMULA et GENESIS** : la [page officielle des compresseurs à vis ABAC](https://www.abacaircompressors.com/en-international/products/screw-compressors) présente ces gammes et déclare leur aptitude à un taux de marche continu de 100 %. La liste d’identités revue est explicite ; la règle ne s’applique pas automatiquement à toute machine à vis ni à tout produit ABAC.
- **112 Fini MICRO/PLUS** : le [catalogue officiel anglais d’avril 2024, page 4](https://finicompressors.com/wp-content/uploads/Catalogo-Micro-Plus_Fini_EN_04-2024_9990395.pdf#page=4) déclare le fonctionnement continu. Les 112 MPN sont présents dans les tableaux de cette édition. Le fonctionnement continu est normalisé en taux de marche 1 ; ce chiffre n’est pas une mesure CompatAir.

Les conditions de la notice restent applicables. Les sources portent leur date réelle de consultation, le 27 septembre 2026. Les preuves précédentes ne sont pas modifiées ; 379 événements sont ajoutés à l’historique. Les URL, empreintes SHA-256, périmètres et identités exactes sont versionnés dans `src/data/imports/compressor-duty-reviewed-2026-09-27.json`.

Le catalogue FIAC a également été consulté, mais sa déclaration visible dépend de la sous-gamme ; aucune généralisation à toutes ses références n’a été appliquée dans cette correction.

## Résultats mesurés sur le catalogue actuel

Même dénominateur avant et après : **5 975 409 couples à débit fixe**. Les 107 844 combinaisons paramétriques restent exclues de ce comptage car elles demandent une cadence ou un volume et un temps cible.

| Résultat | Avant correction | Après correction |
| --- | ---: | ---: |
| Compatible en continu | 78 496 | 1 169 668 |
| Incompatible | 380 964 | 380 964 |
| Données insuffisantes | 5 515 949 | 4 424 777 |
| Verdicts conclusifs | 459 460 | 1 550 632 |
| Part conclusive | 7,7 % | 26,0 % |

Les 1 091 172 décisions récupérées proviennent exclusivement de preuves de taux de marche. Le moteur et sa version 1.4.1 ne changent pas. Aucun débit aspiré n’est transformé en FAD, aucune consommation moyenne en consommation continue et aucune borne de FAD insuffisante en incompatibilité certaine.

## Lacunes restantes

Le catalogue contient encore 520 compresseurs sans point FAD, 417 avec FAD mais sans taux de marche documenté et 419 outils à consommation moyenne seule. D’autres couples nécessitent un FAD à leur pression utile : un point à une autre pression peut être une borne conservatrice suffisante pour confirmer certains besoins, mais ne permet pas toujours de trancher.

La hausse du nombre de références n’est donc pas assimilable à une hausse équivalente du nombre de décisions utiles. Les prochains enrichissements doivent privilégier ces champs critiques et leurs conditions de mesure.

## Validation

Les tests vérifient les identités, la provenance du taux de marche, l’absence de valeur par défaut par marque ou technologie, le refus des identités ou valeurs contradictoires, le maintien des garde-fous et le dénominateur du compteur public. Le calcul de la home utilise `summarizeVerdicts` avec `evaluatePageCompatibility`, donc les mêmes résultats et le même cache que les fiches produit. L’archive historique demeure inchangée et reste accessible sous son URL versionnée.
