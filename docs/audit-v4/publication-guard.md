# Correctif de la qualification de publication V4

La release `02526df4045b91438e54fc87f5896a7e9251bcd8` a passé le hook complet, ses 990 tests, le test de l’archive source, les 15 passages Lighthouse locaux et les contrôles Linux jusqu’à l’empaquetage. CodeQL a réussi sur les trois langages ; aucune alerte ouverte n’était signalée.

Une dépendance manquait néanmoins dans l’archive d’administration : `scripts/smoke-live-http.mjs` importe le noyau `server/air-sizing.mjs`, qui figurait dans l’archive du site mais pas à l’emplacement requis par le programme de contrôle. Une demande d’annulation du workflow a croisé le transfert. Le journal confirme l’erreur `ERR_MODULE_NOT_FOUND`, puis une activation à 19:36:29 UTC le 28 septembre 2026.

La fonction shell `run_public_smoke` était appelée dans `if ! ...`, contexte où Bash désactive l’effet attendu de `errexit`. Le premier contrôle pouvait échouer, puis le contrôle SEO réussir et fournir le statut final de la fonction. Le retour automatique n’a donc pas été déclenché. Il ne faut pas présenter ce passage comme un drill de rollback réussi.

Le contrôle HTTP a ensuite été exécuté depuis le dépôt complet contre le SHA réellement actif. Il a réussi, notamment pour l’API, MCP, UCP, les signatures et les ressources privées. Le journal serveur avait également confirmé la surface SEO sur ce SHA. Aucun test de charge n’a ciblé la production.

## Correction et preuve ciblée

- Le noyau est maintenant inclus dans l’archive d’administration.
- Un test construit cette archive à partir des entrées déclarées par le workflow, l’extrait dans un répertoire temporaire et démarre le contrôle HTTP sans accès au checkout. Une identité de release volontairement invalide interrompt le programme avant toute requête réseau, après résolution des imports.
- Chaque commande du contrôle public retourne explicitement un échec. Un contrôle HTTP défaillant arrête la fonction avant le contrôle SEO et atteint le chemin de retour automatique déjà présent.
- Trois scénarios exécutent la fonction shell réelle dans son contexte `if !` avec des programmes de contrôle isolés : HTTP en échec, SEO en échec, les deux réussis. Les statuts et l’ordre des appels sont vérifiés.

Sous Node 24.19.0, les suites existantes `scripts/deploy-policy.test.ts` et `scripts/deploy-transport.test.ts` passent **23 tests** après cette correction. La nouvelle validation complète, la nouvelle publication et sa vérification publique sont à contrôler lors de la livraison. Aucun nouvel essai de restauration Apache/systemd à 100 000 références n’est revendiqué.
