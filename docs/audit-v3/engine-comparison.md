# Comparaison exhaustive hors ligne

Le rapport JSON épingle les deux modules de chaque moteur par commit et SHA-256, le catalogue par hash sémantique et hash du fichier, le runtime, le scénario et le dénominateur. Il compte séparément les écarts de verdict, confiance, facteur limitant et avertissements, ainsi que leur union. Les avertissements sont comparés mot pour mot, dans leur ordre. Deux empreintes couvrent tous les résultats, identifiants compris ; seuls vingt exemples d'écarts au maximum sont conservés.

Depuis un checkout du projet avec Node 24 et un catalogue construit :

```sh
node scripts/audit-v3/compare-engines.mjs dist/data/catalog.json \
  1184e66a17f078309b16f5db5b6dce2807f87062 \
  896ce91f3bd7bd7873421d7f21e93652a42d7590 \
  docs/audit-v3/engine-comparison.json
```

Le catalogue est identique des deux côtés. Les outils paramétriques sont exclus, les outils à débit fixe moyen restent inclus avec leur résultat prudent. Aucune valeur manquante n'est remplacée. Le script ne contacte aucun service, ne charge aucun code externe et ne modifie ni l'API ni le stockage des verdicts. Il importe uniquement deux chemins fixes de l'historique Git local de CompatAir, dans un répertoire temporaire supprimé ensuite.

L'absence d'écart sur ce catalogue ne certifie pas les entrées personnalisées, le transport HTTP, le rendu ou la véracité des documents sources. Les fixtures aux frontières constituent un contrôle distinct.
