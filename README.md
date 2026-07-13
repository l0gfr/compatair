# CompatAir

Moteur français de compatibilité entre compresseurs, outils pneumatiques et accessoires.

## Développement

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Validation complète :

```bash
pnpm validate
pnpm security:audit
```

Le site est généré statiquement dans `dist/`. La logique métier se trouve dans `src/domain` et ne dépend pas d’Astro.

## Livraison

- push sur une branche : CI uniquement ;
- pull request vers `main` : CI, build et artefact de preview ;
- push ou merge sur `main` : CI puis déploiement atomique sur Debian ;
- Audit des dépendances de production à chaque CI et déploiement.
- Dependabot : surveillance hebdomadaire des dépendances et de GitHub Actions.

Voir [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) pour la préparation Apache, TLS, les secrets et le rollback.

Le checkout local utilise le hook versionné `.githooks/pre-push`. Après un nouveau clone, l’activer avec :

```bash
git config core.hooksPath .githooks
```
