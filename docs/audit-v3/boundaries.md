# Frontières moteur et messages

`tests/fixtures/audit-v3/boundaries.json` conserve les données JSON du rapport V3 avec l'empreinte du document d'origine : 30 scénarios moteur, 100 identités lexicales, 12 cas adversariaux. Aucun script du rapport n'est exécuté. Ces cas supplémentaires ne certifient ni l'application entière ni les documents externes.

```sh
pnpm exec vitest run src/domain/audit-v3-boundaries.test.ts server/audit-v3-http.test.ts
```

Les contrôles comparent le résultat complet du moteur et celui de l'entrée Zod, y compris unités, valeurs, limites et avertissements. Les seuils invalides sont également refusés par le passeport. Le présentateur utilisé par le calculateur doit conserver la limite de pression, de cycle, de borne FAD ou de réserve intermittente. Les cas E16 et E22 corrigent une demande générique de FAD sur un compresseur personnalisé alors que la limite est plus précise.

L'API HTTP actuelle accepte des identifiants de catalogue. Elle ne propose pas de calcul personnalisé avec seuils de régulation. Le test HTTP réel sur loopback contrôle la parité des champs pour les profils admissibles et le rejet explicite des paramètres de seuils non supportés. Les 30 configurations personnalisées ne sont donc pas présentées comme 30 tests HTTP.

Les résultats Vitest sont inspectables dans `boundaries-results.json`. La couverture des messages est fonctionnelle via le présentateur ; un test de navigateur complet n'est pas implicite dans ce résultat.
