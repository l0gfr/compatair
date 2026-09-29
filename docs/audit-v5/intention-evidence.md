# Registre de preuves des intentions, état V5

Le registre conserve les 100 intentions et leurs associations d'origine. Il ajoute, pour chaque intention, la question demandée, l'identité, les champs métier ciblés lorsqu'il s'agit d'une référence, les extraits et liens retrouvés dans le HTML local, puis une capture publique datée et les observations SEO distinctes.

## Résultat effectivement observé

- 100 intentions, 99 associées à 69 routes ; aucune page locale manquante.
- `q009` demeure sans route : la référence Michelin MCX300-858 n'est pas substituée par un autre produit.
- 69 lectures publiques HTTP 200, sans redirection ni requête vers les sources liées.
- 0 observation SEO disponible. Aucun rang, trafic, volume, résultat concurrentiel ou signal de marché ajouté.
- Pour les champs métier ciblés : 29 occurrences de valeurs déclarées retrouvées dans le texte public, 2 champs absents des faits déclarés (`dutyCycle`, q006 et q010), une courbe FAD vide (q010). Ces occurrences incluent des intentions visant la même référence et ne constituent ni un nombre de produits distincts ni une certification de réponse complète.

## Versions et portée

HEAD vérifié : `aa2b856d4f341439c35353bdb228caf925e06aa1`. Le rapport enregistre aussi les empreintes des scripts effectivement employés.

Le build local porte `gitSha: development`. Ses preuves sont explicitement marquées `local-development-build-not-production`. Le rapport reste un artefact d'audit local sous `docs/` ; aucun fichier n'a été publié dans `public/`, `dist/` ou les données de production.

La capture finale entre **2026-09-29T10:26:52.429Z** et **2026-09-29T10:26:59.868Z** renvoie le marqueur public **`1184e66a17f078309b16f5db5b6dce2807f87062`** avant et après la lecture des pages. Des URL avec paramètres de capture et `Cache-Control: no-cache` ont été utilisées ; TLS reste vérifié. Cette divergence interdit de déclarer une parité de la version V4 locale avec la production. Un marqueur stable n'est pas une attestation cryptographique de chacune des réponses HTML. Aucun déploiement n'a été effectué dans ce volet.

## Méthode et limites

Le lecteur repose sur `HTMLParser`, sans exécution de JavaScript. Il conserve les directives robots, canoniques, blocs de texte, liens et empreinte du document. Les scripts, styles, templates, contenus `hidden` et `aria-hidden` sont exclus des extraits. Les styles CSS et le rendu navigateur ne sont pas évalués.

Les valeurs numériques sont recherchées avec leurs unités ; les paires FAD / pression sont recherchées ensemble. Une absence reste une absence. Le lecteur ne calcule aucun débit, seuil de régulation ni verdict. Un lien présent dans le HTML est une preuve de publication de ce lien, jamais une corroboration indépendante du document externe.

Pour les guides, la chaîne contient la question originale, l'identité de la page, des passages liés aux sources déclarées et des extraits classés par correspondance lexicale explicite. Cette sélection est une aide inspectable : elle ne prétend pas que le guide répond complètement à chaque intention. Aucun circuit obligatoire de validation humaine n'est introduit.

Les observations Google restent vides. Les métadonnées et statuts HTTP sont des constats de publication, séparés de l'indexation effective et du positionnement.

## Contrôles exécutés

Sous Node 24.19.0 : **5/5 tests réussis** dans la suite existante étendue. Cas couverts : panel inchangé, doublons et routes invalides, extraction sans exécution, contenu masqué, absence de fait, refus du faux témoin `2100` pour `100`, séparations des releases, refus d'un marqueur public `development`, redirection non suivie.

`node --check`, compilation syntaxique Python et `git diff --check` ont également réussi. Aucun test navigateur, aucune interrogation Search Console/SERP et aucune revalidation des documents sources externes n'ont été effectués pour ce volet.

Les empreintes des deux fichiers de configuration historiques correspondent exactement à celles du rapport V4. Les rapports V3/V4, les tickets, les cohortes MCP et les données catalogue n'ont pas été modifiés dans ce volet.

Reproduction locale (sans réseau par défaut) :

```sh
node scripts/audit-v3/intention-registry.mjs dist docs/audit-v5/intention-registry.json
```

Capture publique explicite, limitée aux routes déjà associées :

```sh
node scripts/audit-v3/intention-registry.mjs dist docs/audit-v5/intention-registry.json --public
```

Preuves : [registre JSON](./intention-registry.json), [contrôles exécutés](./intention-controls.json). Une première capture ayant déjà constaté la divergence de release est conservée localement sous `.astro/audit-v5/intention-first-public-capture.json`.
