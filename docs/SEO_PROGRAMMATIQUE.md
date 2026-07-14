# Politique de SEO programmatique

Les pages de couples compresseur-outil répondent à un besoin produit réel : elles rendent un verdict reproductible, affichent les valeurs comparées et relient les deux fiches sources. Leur nombre croît toutefois comme le produit du nombre de compresseurs par le nombre d’outils.

## Frontière d’indexation

- Les fiches de compresseur et d’outil restent indexables lorsqu’elles possèdent des données et sources propres.
- Les pages « quel compresseur pour… » restent indexables : chacune agrège un besoin constructeur distinct et le classement complet du catalogue.
- Les pages de couples `/compatibilite/` restent accessibles aux utilisateurs et aux liens internes, mais portent `noindex,follow`.
- Les couples sont exclus du sitemap et ne publient pas de balisage `TechArticle` destiné à enrichir leur présence dans les résultats.
- Le snapshot `/data/verdicts.json` conserve tous les couples pour l’audit, l’historique et les usages machine.

Cette séparation évite de transformer plusieurs centaines de dossiers techniques proches en pages d’acquisition. Le corpus indexable reste centré sur les pages qui apportent une synthèse ou une information propre.

## Titres éditoriaux

Les fiches compresseurs, les fiches outils et les pages « quel compresseur pour » utilisent des titres écrits explicitement dans `src/data/product-seo-titles.ts`. La troncature automatique reste uniquement un filet de sécurité pour les autres gabarits. Un titre éditorial vide ou supérieur à 60 caractères fait échouer le build au lieu d’être raccourci silencieusement.

Les fiches outils et leurs pages d’usage ont des intentions distinctes : caractéristiques « débit et pression » pour la fiche, sélection « quel compresseur ? » pour la page d’usage. L’audit de distribution vérifie la présence de cette couche éditoriale et l’unicité des titres rendus.

## Garde-fou automatique

`scripts/audit-dist.mjs` échoue si :

- une page `/compatibilite/` ne porte pas `noindex` ;
- une URL `/compatibilite/` apparaît dans un sitemap ;
- une page indexable n’apparaît pas dans le sitemap ;
- une page `noindex` apparaît dans le sitemap.
- une fiche produit ou une page d’usage retombe sur un titre automatiquement ajusté.

Cette règle doit être réexaminée avant d’indexer une sous-sélection de couples. Une page ne pourra devenir indexable que si elle apporte une valeur éditoriale propre, vérifiable et non produite uniquement par substitution de noms ou de chiffres.
