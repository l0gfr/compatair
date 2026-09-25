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

Le périmètre public distingue explicitement 62 379 combinaisons explorables, 59 750 verdicts fixes audités et 2 629 combinaisons paramétriques nécessitant une cadence ou un volume. Le snapshot catalogue publie aussi la couverture champ par champ des EAN/GTIN, MPN normalisés, SKU distributeur et données techniques, avec source primaire, corroboration indépendante et SLA de fraîcheur séparés.
L’API publique et les deux modes d’intégration du widget marchand sont décrits dans [docs/API_WIDGET.md](docs/API_WIDGET.md).

## Catalogue pilote

- `/calculateur/` compare les profils d’outils aux compresseurs documentés ;
- `/compresseurs/` publie les caractéristiques, réserves et sources des modèles suivis ;
- `/outils-pneumatiques/` documente les besoins à partir de données constructeur explicites ;
- le moteur refuse d’utiliser le débit aspiré lorsque le débit restitué à la pression de travail est absent.

Les offres et prix affiliés ne sont pas encore publiés. Ils seront ajoutés uniquement via un flux marchand daté et validé.

## Serveur MCP

Le service MCP v2 lit les snapshots générés dans `dist/data/` et écoute uniquement sur `127.0.0.1:8787`. Il conserve les neuf tools historiques, ajoute les neuf tools AirGraph et le bridge UCP `evaluate_air_compatibility`. Chaque résultat publie une URL canonique CompatAir, les sources, versions, limites et prochaines actions. Pour un test local après le build :

```bash
pnpm build
pnpm mcp:start
```

Le manifeste distant du registre se trouve dans [server.json](server.json). Les contrats sont publiés dans [bluetouff/compatair-mcp](https://github.com/bluetouff/compatair-mcp) et leur miroir source reste sous [contracts/mcp](contracts/mcp/README.md). Les documentations publiques sont servies en [français](https://compatair.fr/mcp-documentation/) et en [anglais](https://compatair.fr/en/mcp/), avec `llms.txt` et `llms-full.txt` à la racine du site.

## UCP et surface machine

La capability UCP en lecture seule est `fr.compatair.air.compatibility`. Elle répond aux intentions `will_it_work`, `explain_limits`, `find_minimal_change` et `build_complete_system` via REST ou le tool MCP `evaluate_air_compatibility`. Elle n’accepte ni identité, ni panier, ni paiement, ni commande. Le profil de découverte, les schémas, les exemples et tests publics se trouvent sous [contracts/ucp](contracts/ucp/README.md), avec le contrat global sous [contracts/api](contracts/api/README.md).

Le build publie aussi le corpus plein texte JSON/NDJSON, les citations, l’historique des preuves, la fraîcheur, les empreintes SHA-256, le changefeed et un catalogue DCAT 3. `agent-knowledge-manifest.json` sépare la couverture anglaise traduite de la couverture relue ; une traduction automatique reste explicitement non relue.

L’installation Debian et le proxy Apache sont décrits dans [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md). Ne définir `MCP_ENABLED=true` dans GitHub qu’après validation de l’endpoint public.

## Livraison

- push sur une branche : CI uniquement ;
- pull request vers `main` : CI, build et artefact de preview ;
- push ou merge sur `main` : validation complète dans le workflow de déploiement, puis activation atomique sur Debian ;
- Audit des dépendances de production à chaque CI et déploiement.
- Quarantaine de 24 heures, contrôle de provenance et scripts d’installation refusés par défaut ; voir [docs/SUPPLY_CHAIN.md](docs/SUPPLY_CHAIN.md).
- Dependabot : surveillance hebdomadaire des dépendances et de GitHub Actions.

Voir [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) pour la préparation Apache, TLS, les secrets et le rollback.

Le checkout local utilise le hook versionné `.githooks/pre-push`. Un push vers `main` exige Node 24 et exécute aussi l’audit HTML et Lighthouse afin de reproduire les principaux contrôles du déploiement avant l’envoi. Si le Node actif n’est pas compatible, le hook cherche automatiquement un Node 24 vérifié parmi `COMPATAIR_NODE_BIN`, NVM, FNM, Volta, asdf, mise, Homebrew et le runtime local Codex. Il échoue sans lancer les validations si aucun binaire compatible n’est disponible. Après un nouveau clone, activer le hook avec :

```bash
git config core.hooksPath .githooks
```

Pour imposer un runtime précis sans modifier le `PATH` du shell :

```bash
export COMPATAIR_NODE_BIN="$HOME/.nvm/versions/node/v24.14.0/bin/node"
```
