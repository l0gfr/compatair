# Lot de 800 outils documentés et amélioration des verdicts

Revue du 27 septembre 2026. Base de comparaison : `c173c825cd4f50f9b9b8995adf1b3b6eceed02ee`. Moteur inchangé : `1.4.1`.

## Périmètre retenu

- 684 Sioux, 99 PFERD et 17 Rodcraft : références fabricant distinctes, pression publiée, consommation exploitable et au moins trois caractéristiques propres.
- Consommation maximale pour Sioux, maximum entre les valeurs à vide et en charge pour PFERD, maximum des régimes documentés pour Rodcraft. Les valeurs et unités d’origine sont conservées dans `src/data/imports/qualified-tools-2026-09-27.json`.
- Conversion explicite de L/s en L/min par multiplication par 60, ou de m³/min en L/min par multiplication par 1 000. Aucune cadence implicite et aucune consommation uniquement moyenne dans ce lot.
- Quatre catégories supplémentaires permettent de nommer correctement les détoureuses, araseuses de rivets, limes alternatives et pistolets de nettoyage.
- Les fiches restent soumises à la politique existante d’admission progressive à l’indexation et de consolidation des réponses équivalentes.

La présence dans un catalogue fabricant actuel et l’accès à un réseau de distributeurs ne constituent pas une preuve de quantité vendue. Aucun classement de ventes, stock marchand ou prix n’est revendiqué. Ce lot est surtout industriel : sa répartition ne constitue pas une mesure des parts de marché françaises.

## Sources et contrôles

- [Catalogue industriel Sioux](https://viewer.ipaper.io/sna-europe/sioux/sioux-product-catalog/GetPDF.ashx), relié au site [Snap-on / Sioux](https://b2b.snapon.com/sioux) via son espace documentaire : définition des consommations page PDF 10, tableaux et pression de référence dans les pages PDF 14 à 87. Les numéros PDF diffèrent parfois des folios imprimés. Colonnes vérifiées par famille ; contrôle de cohérence des valeurs scfm/L/s avec leur précision d’affichage. Les blocs moteurs de pose d’inserts et les araseuses mentionnent leurs équipements à sélectionner séparément.
- [Catalogue français PFERD](https://fr.pferd.com/fr/produits/machines-motrices/machines-pneumatiques) : chaque URL de variante, référence article et tableau courant sont conservés séparément avec leur empreinte SHA-256. La pression de service explicite est obligatoire. Les valeurs actuelles ne sont pas remplacées par celles du catalogue historique.
- [Rodcraft](https://www.rodcraft.com/) : fiches exactes `/en/products/<MPN>` consultées le 27 septembre ; consommation en charge et pression dynamique maximale publiées. Le point retenu est cette pression dynamique de travail, et la limite est explicitée dans la fiche.
- [Brochure BOGE PO](https://zh.boge.com/sites/default/files/382-en-po-series_8.pdf#page=3) : la rubrique sur le fonctionnement intermittent ou continu ne fixe pas de restriction de durée de marche. Les tableaux des pages 6 et 7 identifient les PO 1 à PO 8, configurations L/LR/LTR. Cette preuve complète les 18 références PO déjà présentes ; elle n’est pas étendue à une autre série ni à tous les compresseurs à piston.

Exclusions documentaires : lignes Sioux SDR10P12N4 et SDR10P16N4 avec une unité incohérente dans la colonne L/s ; PFERD 80107016 avec une unité ambiguë ; PFERD sans pression de service explicite ; accessoires seuls et kits doublonnant un outil. Rodcraft RC7170, RC7199 et RC7130 sont écartés de ce lot en raison d’écarts entre les valeurs des fiches et celles des notices consultées. La recommandation générale Schneider de 70 % par heure n’est pas transformée en garantie de taux de marche propre à chaque modèle.

## Effet mesuré sur les couples à débit fixe

Comptage exhaustif par `evaluateCompatibility`, paramètres par défaut, mêmes compresseurs et mêmes règles avant/après. Les 76 outils paramétriques sont exclus du dénominateur de verdicts fixes.

| Mesure | Avant | Après |
| --- | ---: | ---: |
| Compresseurs | 1 419 | 1 419 |
| Outils | 4 287 | 5 087 |
| Couples à débit fixe | 5 975 409 | 7 110 609 |
| Alimentation continue | 1 169 668 | 1 417 292 |
| Incompatibles | 380 964 | 465 164 |
| Données insuffisantes | 4 424 777 | 5 228 153 |
| Conclusifs | 1 550 632 | 1 882 456 |
| Part conclusive | 25,95 % | 26,47 % |

Les 18 compléments BOGE débloquent 23 284 couples existants vers une alimentation continue, sans régression d’un verdict auparavant concluant. Les nouveaux outils apportent 308 540 couples conclusifs supplémentaires : 224 340 continus et 84 200 incompatibles. Le gain total est de 331 824 verdicts conclusifs ; l’augmentation des couples indéterminés provient de l’élargissement du catalogue, pas d’une régression des couples existants.

Les 520 compresseurs sans point FAD documenté et les taux de marche encore manquants restent des limites majeures. Le lot ne résout pas ces absences et n’abaisse aucun seuil du moteur.

## Reproduction

`node scripts/import-technical-expansion.mjs --batch=qualified-tools-2026-09-27` reconstruit les fiches, cartes techniques, titres et observations du registre. L’import refuse de remplacer une référence existante différente. Ensuite : `pnpm catalog:index`, `pnpm catalog:history`, `pnpm validate:main`.

`scripts/lib/qualified-tools-2026.test.mjs` vérifie les transcriptions, les unités, les changements de pression, le refus des consommations moyennes et l’existence d’au moins une alimentation continue documentée pour chacun des 800 outils. Les sources brutes retenues sont identifiées par leur URL, date, empreinte et ligne ou champs transcrits ; elles ne sont jamais exécutées comme instructions.
