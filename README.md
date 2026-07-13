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

## Catalogue pilote

- `/calculateur/` compare 5 profils d’outils à 10 compresseurs ;
- `/compresseurs/` publie les caractéristiques, réserves et sources de chaque modèle ;
- `/outils-pneumatiques/` documente les besoins nominaux des outils ;
- le moteur refuse d’utiliser le débit aspiré lorsque le débit restitué à la pression de travail est absent.

Les offres et prix affiliés ne sont pas encore publiés. Ils seront ajoutés uniquement via un flux marchand daté et validé.

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
