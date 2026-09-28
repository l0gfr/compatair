# Registre des 100 intentions originales

```sh
node scripts/audit-v3/intention-registry.mjs dist docs/audit-v3/intention-registry.json
```

Node 24 et Python 3 sont requis. Le panel original et ses observations restent inchangés. `config/seo-intention-routes.json` définit les associations éditoriales explicites : référence exacte, guide connexe ou absence. Une association connexe n'affirme pas que toutes les contraintes de la requête sont couvertes. Michelin MCX300-858 reste sans route exacte, au lieu de lui substituer un autre Michelin.

Le rapport joint les valeurs et sources des fiches, les passages des guides contenant une citation, leurs lignes dans le Markdown, les empreintes de contenu et les directives/canoniques effectivement déclarées dans le HTML construit. Le parseur HTML standard conserve les déclarations multiples ; une page absente a des tableaux vides, jamais une canonical supposée. Il n'exécute aucun script. Les passages restent des chaînes JSON et ne sont injectés dans aucune page.

Les observations Search Console restent dans `intentions[].observations`, séparées des déclarations locales. Elles sont vides en l'absence de données. Aucun rang, volume, résultat concurrentiel ou gain de clic n'est calculé. Les sources citées sont celles du dépôt ; leur présence ne vaut pas une nouvelle vérification externe de chaque fait.
