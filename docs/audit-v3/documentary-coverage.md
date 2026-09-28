# Intersections documentaires et gain marginal

```sh
node scripts/audit-v3/documentary-coverage.mjs dist/data/catalog.json \
  docs/audit-v3/intention-registry.json docs/audit-v3/documentary-coverage.json
```

Le registre d'intentions est l'artefact JSON de l'objectif 4, passé comme donnée au programme. Il n'est pas exécuté. Un autre chemin est accepté. Un quatrième argument optionnel désigne un vrai catalogue après enrichissement, pour mesurer les gains et pertes de verdicts sur les mêmes identifiants.

Deux tables évitent de confondre présence et exploitation :

- `documentedPresenceCube` compte les compresseurs par présence sourcée du FAD, du cycle et de la pression maximale.
- `pressureUsablePairCube` croise FAD documenté, cycle documenté et pression exploitable pour les paires fixes. Les mêmes huit cellules sont détaillées par pression demandée dans `byPressure`. Une borne conservatrice reste une borne et ne prouve pas un déficit de débit.

Les clés binaires suivent l'ordre FAD, cycle, pression. `101` signifie FAD documenté, cycle absent, pression exploitable. Chaque dimension dispose d'une définition dans le JSON ; une pression exploitable ne signifie pas un FAD suffisant.

Les lacunes des paires inconnues sont réparties en ensembles disjoints. Le gain documentaire marginal n'est compté qu'à la disparition du dernier obstacle de l'ensemble, selon l'ordre déclaré. Il s'agit d'une opportunité documentaire, pas d'un nombre promis de verdicts conclusifs : aucun cycle, débit ou niveau de pression manquant n'est imputé. Sans catalogue après enrichissement, le gain de verdict est explicitement non mesuré.

Les intentions sont reliées aux produits exacts des pages associées et de leurs liens utiles directs. Pour les volumes sans doublon, une paire liée à plusieurs intentions est allouée à la première selon l'ordre original des identifiants. Les intentions sans produit exact restent visibles sans rattachement inventé. Les cohortes historiques MCP restent intactes ; aucun croisement historique absent n'est reconstruit.
