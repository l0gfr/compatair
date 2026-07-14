# CompatAir

Moteur français de compatibilité entre compresseurs, outils pneumatiques et accessoires.

## Développement

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Validations complètes :

```bash
pnpm validate:full
pnpm audit:dist
pnpm security:audit
```

Le site est généré statiquement dans `dist/`. La logique métier se trouve dans `src/domain` et ne dépend pas d’Astro. Le détail du périmètre livré et des dépendances externes se trouve dans [docs/FEATURE_MATRIX.md](docs/FEATURE_MATRIX.md).

L'import du flux produits ManoMano est décrit dans [docs/MANOMANO_IMPORT.md](docs/MANOMANO_IMPORT.md).

## Catalogue pilote

- `/calculateur/` compare 12 profils d’outils à 35 compresseurs documentés ;
- `/compresseurs/` publie les caractéristiques, réserves et sources de 35 modèles ;
- `/outils-pneumatiques/` documente les besoins nominaux de 12 outils répartis dans 12 catégories ;
- le moteur refuse d’utiliser le débit aspiré lorsque le débit restitué à la pression de travail est absent.

Les offres et prix affiliés ne sont pas encore publiés. Ils seront ajoutés uniquement via un flux marchand daté et validé.

## Serveur MCP

Le service MCP lit les snapshots générés dans `dist/data/` et écoute uniquement sur `127.0.0.1:8787`. Pour un test local après le build :

```bash
pnpm build
pnpm mcp:start
```

L’installation Debian et le proxy Apache sont décrits dans [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md). Ne définir `MCP_ENABLED=true` dans GitHub qu’après validation de l’endpoint public.

## Livraison

- push sur une branche : CI uniquement ;
- pull request vers `main` : CI, build et artefact de preview ;
- push ou merge sur `main` : validation complète dans le workflow de déploiement, puis activation atomique sur Debian ;
- Audit des dépendances de production à chaque CI et déploiement.
- Dependabot : surveillance hebdomadaire des dépendances et de GitHub Actions.

Voir [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) pour la préparation Apache, TLS, les secrets et le rollback.

Le checkout local utilise le hook versionné `.githooks/pre-push`. Après un nouveau clone, l’activer avec :

```bash
git config core.hooksPath .githooks
```
