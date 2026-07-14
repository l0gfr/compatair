# Sécurité de la chaîne de dépendances

CompatAir utilise pnpm 10.34.4 et conserve toutes les dépendances directes à une version exacte. Le lockfile reste la référence reproductible et doit toujours être installé avec `pnpm install --frozen-lockfile`.

## Barrières actives

- `minimumReleaseAge: 1440` refuse une version publiée depuis moins de 24 heures, y compris lorsqu’elle est transitive ;
- `trustPolicy: no-downgrade` refuse une baisse du niveau de confiance de publication ;
- `blockExoticSubdeps: true` interdit aux sous-dépendances d’introduire une source Git ou une archive arbitraire ;
- l’intégrité du store et la correspondance stricte entre nom, version et contenu restent activées ;
- les scripts d’installation sont refusés par défaut. Seul `esbuild` est autorisé à exécuter son `postinstall` ;
- l’installation globale de pnpm dans GitHub Actions utilise une version exacte avec `--ignore-scripts` ;
- les workflows utilisent un lockfile gelé et des actions GitHub épinglées par SHA.

`pnpm security:supply-chain` contrôle hors ligne les intégrités du lockfile, la version exacte de pnpm et la liste des scripts autorisés. `pnpm security:registry` compare en plus chaque intégrité au registre npm et vérifie cryptographiquement les signatures ECDSA avec les clés publiques du registre. `pnpm security:audit` interroge les avis de vulnérabilité pour les dépendances de production.

Références : [paramètres de sécurité pnpm 10](https://pnpm.io/10.x/settings#minimumreleaseage) et [format des signatures ECDSA npm](https://docs.npmjs.com/cli/v11/commands/npm-audit/#audit-signatures).

## Mise à jour urgente

Ne jamais désactiver globalement la quarantaine ou la politique de confiance. Si une version publiée depuis moins de 24 heures corrige une vulnérabilité réellement exploitable :

1. vérifier l’avis officiel, le dépôt amont, le diff de publication et la provenance ;
2. ajouter temporairement une exception limitée au couple exact `nom@version` dans `minimumReleaseAgeExclude` ou `trustPolicyExclude` ;
3. conserver la version exacte dans `package.json` et le lockfile ;
4. exécuter l’installation propre, `pnpm security:registry`, `pnpm security:audit` et `pnpm validate:full` ;
5. supprimer l’exception dès que la version a dépassé la fenêtre de 24 heures.

Une exception par nom de paquet ou par scope complet n’est pas acceptable.
