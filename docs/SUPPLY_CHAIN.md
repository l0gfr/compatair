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

`pnpm security:supply-chain` contrôle hors ligne les intégrités du lockfile, la version exacte de pnpm et la liste des scripts autorisés. `pnpm security:registry` compare en plus chaque intégrité au registre npm et vérifie cryptographiquement les signatures ECDSA avec les clés publiques du registre. `pnpm security:audit` interroge les avis de vulnérabilité sur les versions verrouillées, y compris les outils de développement. Tout avis sur une dépendance directe de production bloque la release ; les avis transitifs high ou critical la bloquent également. Les autres avis transitifs restent signalés.

Références : [paramètres de sécurité pnpm 10](https://pnpm.io/10.x/settings#minimumreleaseage) et [format des signatures ECDSA npm](https://docs.npmjs.com/cli/v11/commands/npm-audit/#audit-signatures).

## Mise à jour urgente

Ne jamais désactiver globalement la quarantaine ou la politique de confiance. Si une version publiée depuis moins de 24 heures corrige une vulnérabilité réellement exploitable :

1. vérifier l’avis officiel, le dépôt amont, le diff de publication et la provenance ;
2. ajouter temporairement une exception limitée au couple exact `nom@version` dans `minimumReleaseAgeExclude` ou `trustPolicyExclude` ;
3. conserver la version exacte dans `package.json` et le lockfile ;
4. exécuter l’installation propre, `pnpm security:registry`, `pnpm security:audit` et `pnpm validate:full` ;
5. supprimer l’exception dès que la version a dépassé la fenêtre de 24 heures.

Une exception par nom de paquet ou par scope complet n’est pas acceptable.

## Remédiation du 30 septembre 2026

Le déploiement des nouveaux guides a été arrêté par deux avis high sur `brace-expansion`. L’audit signalait également quatre avis moderate sur les trois paquets ci-dessous. La correction conserve les versions majeures, les scripts autorisés, la quarantaine et les règles de confiance.

| Paquet | Version précédente | Version corrigée | Publication npm de la version corrigée |
| --- | --- | --- | --- |
| brace-expansion | 5.0.9 | 5.0.12 | 14 septembre 2026, 21:59 UTC |
| fast-uri | 3.1.7 | 3.1.8 | 15 septembre 2026, 07:36 UTC |
| ip-address | 10.5.1 | 10.7.1 | 15 septembre 2026, 04:14 UTC |

Références primaires consultées le 30 septembre 2026 :

- brace-expansion : [récursion des groupes imbriqués](https://github.com/advisories/GHSA-qhr7-859c-m2p7), [récursion du parseur](https://github.com/advisories/GHSA-6j4f-fj2g-mc7p), [réécriture de coût quadratique](https://github.com/advisories/GHSA-q2hr-2g5m-vwhr) ;
- fast-uri : [normalisation des hôtes encodés](https://github.com/advisories/GHSA-hrr3-gc8f-f4qj) ;
- ip-address : [confusion de familles IP dans les sous-réseaux](https://github.com/advisories/GHSA-j6r3-76f7-8jcv), [diagnostic IPv6 sans borne de longueur](https://github.com/advisories/GHSA-h3mg-xc3c-68pw) ;
- provenance et dates : [registre brace-expansion](https://registry.npmjs.org/brace-expansion), [registre fast-uri](https://registry.npmjs.org/fast-uri), [registre ip-address](https://registry.npmjs.org/ip-address).

Les trois défauts représentatifs ont été reproduits sur les anciennes copies installées : groupes imbriqués, hôte encodé et sous-réseau de famille différente. Trois tests dans `scripts/security-dependencies.test.ts` résolvent les modules depuis leurs consommateurs réels et contrôlent également les groupes larges, les diagnostics volumineux et les entrées ordinaires. Les cas potentiellement coûteux tournent dans des processus séparés avec `--max-old-space-size=128` et un délai maximum de cinq secondes.

Après correction, l’audit d’avis retourne zéro signalement. Le contrôle du registre vérifie les 656 intégrités et signatures ECDSA, sans version dans la quarantaine de 24 heures. La validation complète et le déploiement restent soumis aux mêmes barrières.
