# CompatAir V5 : mémoire SEO et qualification isolée

État de travail démarré sur `aa2b856d4f341439c35353bdb228caf925e06aa1`, SHA vérifié avant modification. Les trois corrections V4 ne sont pas réimplémentées. Le moteur, ses adaptateurs, les caractéristiques et sources des références, les 40 tickets, les 100 intentions et les cohortes MCP historiques restent les références de contrôle.

## Réduction mémoire à décisions constantes

Le rejeu de la préparation historique sur 100 000 références reproduit l'épuisement du tas V8. Après collecte, le tas contient environ 2,50 Go ; à 30 000 candidats analysés, 4 134 841 entrées de fragments textuels sont retenues, dont 1 429 059 clés dans l'index inversé. Ce sont des mesures de ce corpus synthétique, pas des limites garanties pour n'importe quel catalogue.

Trois rétentions sont supprimées sans modifier les règles :

- Les modules produits sont lus dans des workers successifs de 1 024 références. La sortie du worker libère son cache ESM. Chaque worker impose 256 Mio d'ancienne génération et 8 Mio de jeune génération ; un contrôle du plafond V8 effectif refuse les options héritées qui invalideraient cette borne.
- L'index de similarité partage les clés de périmètre. Les ensembles de fragments de chaque page sont remplacés par leur cardinalité dès qu'ils ne servent plus. Le dernier candidat d'un périmètre libère son index. Ordre de comparaison, seuils et départage restent inchangés.
- Le rapport complet est écrit en flux, avec contre-pression et renommage atomique. Le build charge une projection sans les lignes d'audit. Le rapport complet demeure inspectable et son empreinte accompagne cette projection.

Le premier essai après réduction mémoire a révélé un second échec, `Invalid string length`, lors de la sérialisation monolithique. Cet échec a été archivé avant le passage à l'écriture en flux.

## Comparaison figée

Instant : `2026-09-29T00:00:00.000Z`. Même configuration, même checkpoint hors ligne, même corpus et mêmes 178 445 candidats, dont le SHA256 sérialisé est `a82a0de6d698a2f3b1f56fe1a04e6a88241a8665cab36c443fe32a89088cdb66`.

L'ancien programme complet échoue encore à 100 000 sous son plafond inchangé. La référence exhaustive utilise donc sa routine de comparaison originale, extraite du commit épinglé et contrôlée par empreinte, exécutée par périmètres indépendants. Cette enveloppe est réservée à la qualification. Son équivalence avec le programme original complet et le programme corrigé a d'abord été vérifiée sur les 11 849 candidats du catalogue réel.

Sur les 178 445 candidats, les empreintes du manifeste, du rapport ordonné complet, des regroupements et canoniques, des limites, des admissions et du checkpoint correspondent exactement. La comparaison couvre ainsi les scores et motifs, pas seulement les totaux. La simulation avec admission autorisée produit 4 204 existants, 55 admissions simulées, 18 514 en attente et 155 672 retenus. Aucune admission synthétique n'a été publiée.

Preuve : [comparaison complète](./indexation-parity.json), [collecte avant](./evidence/candidates-before/result.json), [collecte après](./evidence/candidates-after/result.json), [référence complète réelle](./evidence/gate-original/result.json), [référence par périmètre réelle](./evidence/gate-scoped/result.json), [version corrigée réelle](./evidence/gate-optimized/result.json).

## Publication et restauration

Le corpus historique isolé est conservé : 21 811 compresseurs et 78 189 outils, profils techniques et lacunes reproduits cycliquement à partir des 6 506 références réelles. Il reste hors Git, sans workflow de déploiement, avec le marqueur `BENCHMARK_ONLY`. Son marqueur d'artefact est `development`, jamais une attestation de production.

Les budgets de `config/qualification-100k.json` sont inchangés : publication complète 1 500 s, pic RSS 8 192 Mio, archive 184 549 376 octets, restauration 300 s, base 180 s / 2 Gio, service 256 Mio, démarrage 5 s, p95 150 ms, p99 500 ms et aucune erreur inattendue. Le réseau du build est interdit ; seule la boucle locale est autorisée pour le service restauré. Des probes vérifient les deux profils avant l'essai.

Le harness durable `scripts/audit-v3/qualification-publication.py` mesure séparément préparation SEO, build froid, base, build chaud, validations des snapshots, empaquetage du serveur réel, empreintes des fichiers, archive et checksum, extraction dans un répertoire vierge, parité des fichiers et API chargée depuis le code restauré. Les métriques SQLite/API seules ne qualifient pas la publication. Les étapes non atteintes restent explicitement non exécutées.

Les premières reprises ont également constaté des fichiers absents dans l'ancien répertoire temporaire. Les fichiers suivis ont été recopiés en préservant les quatre entrées générées et tous les clones du corpus ; le manifeste de réhydratation est conservé dans le dossier local de l'essai. Aucun fichier historique de résultat n'a été écrasé.

Le premier build ayant franchi Vite a ensuite été interrompu pour diagnostic et réparation du protocole, sans atteindre un budget. Le profil natif montre des filtres répétés durant l'évaluation des modules ; le répertoire des preuves faisait structurellement un filtrage de tous les événements par produit. L'indexation par produit conserve le comparateur et les résultats historiques, vérifiés dans les tests existants étendus.

## Résultat du rejeu complet

Le run `publication-20260929T105703Z` est **non qualifié**. La préparation SEO a terminé en 90,185 s (RSS enfant maximale : 1 571,797 Mio). Le build froid a atteint le solde du budget de publication pendant la préparation des routes : 1 410,158 s, pic RSS agrégé échantillonné de 4 971,484 Mio. Aucun HTML n'avait été écrit à la dernière observation de cette phase. Le plafond total de 1 500 s n'a pas été augmenté.

Les étapes build chaud, base issue de ce build, archive, checksum, extraction vierge, parité des fichiers, service restauré et drill Apache/systemd **n'ont pas été exécutées pour ce corpus**, faute de build terminé. Les mesures SQLite/API historiques ne comblent pas cette absence. Aucun déploiement n'est effectué.

Le profil CPU après correction du répertoire montre des tris répétés dans une boucle de préparation des routes. La lecture de `product-build-key.ts` identifie des filtrages/tris complets pour les alternatives et outils connexes, répétés pour chaque page. Le profil natif ne nomme pas avec certitude chaque fonction JavaScript ; ce constat n'est pas une mesure exhaustive de leur part respective. Il révèle une limite distincte du tas de préparation SEO. Ces sélections ne sont pas modifiées dans cette livraison.

L'arrêt au plafond a aussi révélé que la sortie de `/usr/bin/time` après SIGTERM pouvait précéder celle d'Astro. Le processus restant a été constaté puis supprimé explicitement. Le harness a ensuite été corrigé pour arrêter le groupe complet et tester un descendant ignorant SIGTERM. Cette réparation ne transforme pas le run échoué en succès ; le run de 25 minutes n'est pas présenté comme exécuté avec cette dernière version du superviseur.

Preuves : [mémoire SEO](./seo-memory-results.json), [résultat publication](./publication-results.json), [harness exact et logs du run](./evidence/publication-20260929T105703Z/), [défaut de terminaison archivé](./evidence/publication-20260929T105703Z/supervisor-cleanup-failure.json), [préservation des historiques](./preservation-controls.json).

## Intentions et observations

Voir le [registre de preuves](./intention-evidence.md) et ses données liées : 100 intentions conservées, 99 associations vers 69 routes, aucune observation Google disponible. La capture publique datée annonce `1184e66a17f078309b16f5db5b6dce2807f87062`, distinct de la base locale. Les extraits locaux avec marqueur `development` ne sont jamais présentés comme des données de production. Un lien publié vers une source ne vaut pas corroboration indépendante du contenu de cette source.

## Contrôles finaux exécutés

Sous Node 24.19.0 / pnpm 10.34.4, la suite réelle passe : **1 008 tests dans 137 fichiers**. Elle comprend les régressions V4, la validation des contrats et les intégrations HTTP/API/MCP locales. Le contrôle Astro/TypeScript termine avec 0 erreur, 0 avertissement et 9 indications non bloquantes ; le lint source passe.

Le catalogue réel de 6 506 références produit 12 980 pages et sa base SQLite. Les neuf snapshots passent la validation Zod et l'audit du dossier construit réussit. Il conserve une alerte SEO non bloquante : la page Aircraft expose 116 destinations internes pour un seuil indicatif de 100. Ces contrôles locaux n'attestent pas une release en production.

Le navigateur a vérifié le répertoire des preuves, l'ouverture de la fiche BOGE PO 1 LR et son retour à la bonne ancre historique. Les cinq preuves restent visibles ; aucune erreur console n'a été recueillie sur ce parcours. Le rendu mobile et le navigateur de production ne font pas partie de ce contrôle.

Le garde de publication rejette effectivement l'artefact hors ligne marqué `development`. Les échecs initiaux dus aux permissions locales de boucle réseau et de lecture des processus sont conservés, ainsi que le contrôle TypeScript initial en échec avant correction. Le dernier rejeu de la suite réussit avec ces permissions d'exécution locales, sans réduction des protections du code ni des profils réseau du laboratoire.

Détail, commandes, limites et logs : [contrôles finaux](./validation-controls.json), [archives et empreintes](./evidence/archived-files.json). Aucun commit, push ou déploiement n'est réalisé dans cette passe. Le contrôle final du SHA retrouve `aa2b856d4f341439c35353bdb228caf925e06aa1` ; les modifications restent dans l'arbre de travail.

## Limites

Ces résultats portent sur un corpus de laboratoire et ne certifient ni une application entière ni une performance de production. Aucun test de charge n'est lancé sur la production. Aucun changement de stack, de moteur, de seuil de pression, de nature du FAD ou de scénario de première rafale n'est requis par cette optimisation. Aucun classement Google, volume de recherche ou signal de vente n'est créé.

Les résultats finaux des contrôles, du rejeu et les étapes non exécutées sont consignés séparément ; cette note ne vaut pas qualification complète tant que tous les jalons du protocole n'ont pas réussi.

## Reproduction

Utiliser Node 24 et des répertoires de sortie neufs. La source de référence provient du Git local épinglé, pas d'une archive externe exécutée. Dans la copie isolée, extraire les modules `scripts/lib` du commit de base dans `qualification-v5/reference/lib` ; les imports résolvent les dépendances verrouillées de cette copie.

```sh
# Depuis le dépôt, vers une copie isolée déjà préparée et identifiée par COMPATAIR_LAB.
git archive aa2b856d4f341439c35353bdb228caf925e06aa1 scripts/lib |
  tar -x -C "$COMPATAIR_LAB/qualification-v5/reference" --strip-components=1
cd "$COMPATAIR_LAB"
node scripts/audit-v3/compare-indexation-memory.mjs collect qualification-v5/reference/lib qualification-v5/replay-candidates-before
node scripts/audit-v3/compare-indexation-memory.mjs collect scripts/lib qualification-v5/replay-candidates-after
node scripts/audit-v3/compare-indexation-memory.mjs scoped-reference qualification-v5/reference/lib qualification-v5/replay-reference qualification-v5/replay-candidates-before/candidates.jsonl release
node scripts/audit-v3/compare-indexation-memory.mjs plan scripts/lib qualification-v5/replay-optimized qualification-v5/replay-candidates-before/candidates.jsonl release
python3 scripts/audit-v3/qualification-publication.py "$COMPATAIR_LAB"
```

Comparer les empreintes `candidatesSha256` puis toutes les entrées de `parts` dans les résultats, et pas seulement les décomptes. Le harness publication est spécifique à macOS (`sandbox-exec` et RSS BSD) ; le drill Apache/systemd demeure une étape Linux séparée. Les résultats comprennent le code du harness effectivement exécuté. Les entrées `qualification-v5/run-inputs.json`, le catalogue historique et le manifeste de réhydratation font partie de la provenance locale de cet essai.
