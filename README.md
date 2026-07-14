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
pnpm validate:main
pnpm catalog:check
pnpm audit:dist
pnpm security:supply-chain
pnpm security:registry
pnpm security:audit
```

Le site est généré statiquement dans `dist/`. La logique métier se trouve dans `src/domain` et ne dépend pas d’Astro. Le détail du périmètre livré et des dépendances externes se trouve dans [docs/FEATURE_MATRIX.md](docs/FEATURE_MATRIX.md).

L'import du flux produits ManoMano est décrit dans [docs/MANOMANO_IMPORT.md](docs/MANOMANO_IMPORT.md).
La normalisation, les snapshots de verdicts et la demande agrégée sont décrits dans [docs/DATA_ASSET.md](docs/DATA_ASSET.md). La frontière d’indexation des pages générées est définie dans [docs/SEO_PROGRAMMATIQUE.md](docs/SEO_PROGRAMMATIQUE.md).
L’API publique et les deux modes d’intégration du widget marchand sont décrits dans [docs/API_WIDGET.md](docs/API_WIDGET.md).

## Catalogue pilote

- `/calculateur/` compare les profils d’outils aux compresseurs documentés ;
- `/compresseurs/` publie les caractéristiques, réserves et sources des modèles suivis ;
- `/outils-pneumatiques/` documente les besoins à partir de données constructeur explicites ;
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
- Quarantaine de 24 heures, contrôle de provenance et scripts d’installation refusés par défaut ; voir [docs/SUPPLY_CHAIN.md](docs/SUPPLY_CHAIN.md).
- Dependabot : surveillance hebdomadaire des dépendances et de GitHub Actions.

Voir [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) pour la préparation Apache, TLS, les secrets et le rollback.

Le checkout local utilise le hook versionné `.githooks/pre-push`. Un push vers `main` exige Node 24 et exécute aussi l’audit HTML et Lighthouse afin de reproduire les principaux contrôles du déploiement avant l’envoi. Après un nouveau clone, activer le hook avec :

```bash
git config core.hooksPath .githooks
```
