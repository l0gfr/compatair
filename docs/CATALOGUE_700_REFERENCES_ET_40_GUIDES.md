# Lot documenté : 200 compresseurs, 500 outils et 40 guides

Observation des nouvelles sources : 26 septembre 2026, sauf le catalogue Chicago Pneumatic déjà observé le 25 septembre. Le catalogue passe de 519 à 719 compresseurs et de 1 787 à 2 287 outils. Le fonds éditorial passe de 166 à 206 guides.

## Périmètre retenu

| Famille | Fabricant | Références ajoutées | Source |
| --- | --- | ---: | --- |
| Compresseurs | FIAC | 64 | Fiches individuelles officielles, codes de commande rapprochés du catalogue S226-R1-062026 |
| Compresseurs | ABAC | 136 | Données des variantes officielles SPINN et FORMULA |
| Outils | Shinano | 264 | Catalogues général et industriel 2025 |
| Outils | Cleco | 183 | Catalogue GI-1250-EU, tables et notes de pression |
| Outils | Master Power | 7 | Tableau de ponceuses du même catalogue, page 56 |
| Outils | Dynabrade | 36 | Catalogue industriel D25.01 |
| Outils | Chicago Pneumatic | 10 | Catalogue General Industry v6.08.2026 |

Les variantes sont des références fabricant effectivement présentes dans les documents. Elles ne sont pas obtenues par combinaison automatique de puissances, tensions ou volumes. Un code commande différent reste visible ; il ne prouve ni une disponibilité en France ni une meilleure vente.

## Sources et transformations

Trois fichiers `src/data/imports/*-additional-2026-09-26.json` conservent les URL, éditions, dates d’observation, empreintes SHA-256 et transcriptions utilisées. Les PDF tiers ne sont pas ajoutés au dépôt. `scripts/import-industrial-expansion.mjs` reconstruit les 700 fiches et leurs cartes techniques à partir de ces seuls faits. Le script refuse d’écraser une référence différente.

- FIAC : identité AX exacte de la fiche individuelle, FAD à une pression précise, configuration électrique et cuve explicites. Le catalogue Airblok complète la preuve de lubrification. Les différences de nom et de puissance entre éditions restent signalées.
- ABAC : ligne de variante identifiée par MPN dans les données officielles de famille. Le FAD ne provient pas de la variante affichée par défaut dans l’adresse de la page. Les versions 230 V triphasées restent triphasées.
- Shinano : le maximum du catalogue général est retenu, pas la moyenne d’utilisation. Les consommations du catalogue industriel dont le régime n’est pas défini le disent. La consigne de pression en fonctionnement, page PDF 43 du catalogue général, possède sa propre preuve de champ. L/s × 60 donne L/min.
- Cleco : la note de page distingue 6,2 bar et 6 bar pour les outils à impulsions. Quand deux consommations vide/charge existent, la plus élevée est retenue avec les deux conditions visibles. m³/min × 1 000 donne L/min ; le libellé non précisé du régime n’est pas transformé en FAD mesuré.
- CP : consommation en charge, 6,3 bar et flexible intérieur 10 mm proviennent de la note de chaque tableau. Les conversions CFM/L/s sont contrôlées.
- Dynabrade : consommation maximale et pression de référence du catalogue. Les caractéristiques secondaires incohérentes entre unités sont écartées par l’importeur existant.

Aucun taux de marche absent, débit à une pression non documentée ou verdict dépendant d’une commission n’est ajouté.

## Contradictions conservées

Les 26 lignes Cleco des familles 34RAA et de certaines grandes clés d’angle dont l’unité diverge entre GI-1250 et SP-1081 sont exclues du lot. Un guide expose le cas 34RAA08AL3 sans décider arbitrairement quelle édition a raison.

Pour CP3000-600CR, le texte indique une pince de 1/8 pouce alors que le tableau indique 15/64 (6,0 mm). La dimension unique n’est pas validée. Pour Shinano SI-5800, 8 mm est associé à une conversion en pouces incohérente ; le texte de la fraise corrobore la dimension métrique, mais le montage doit être confirmé. Pour Master Power MP4400-03, la dimension de plateau ambiguë n’est pas convertie arbitrairement.

## Guides et maillage

Les 40 nouveaux guides traitent des commandes, mécanismes, montages d’accessoires, géométries de consommables, variantes de compresseurs et limites des déclarations. Ils distinguent fait de catalogue, calcul et hypothèse. Les pages sur bruit et vibrations renvoient aussi à l’INRS. Les liens visent les slugs réels des fiches et des guides complémentaires.

Le registre `src/data/imports/guides-specialistes-2026-09-26.json` identifie les 40 contenus et leurs sources. L’indexation progressive reste soumise à la politique et au checkpoint publiés : ce lot ne modifie ni le baseline ni les quotas pour forcer une admission. Une référence disponible dans le catalogue ne signifie pas que toutes ses pages deviennent immédiatement indexables.

## Vérifications reproductibles

- `node scripts/import-industrial-expansion.mjs`, puis `pnpm catalog:index` : reconstruction déterministe et refus de collisions.
- `pnpm catalog:check`, `pnpm audit:editorial` : schéma, provenance critique, titres et rattachement des citations.
- Tests d’import : reproduction exacte des 700 fiches, pression distincte, unités, changements de version électrique, sources invalides, doublons et périmètre incomplet.
- Tests du moteur : chacun des 1 635 006 verdicts fixes est comparé au calcul déterministe. Les 9 347 combinaisons paramétriques restent séparées, soit 1 644 353 combinaisons explorables.
- Sérialisation des verdicts par blocs : mêmes champs, ordre et octets JSON, sans chaîne géante. Les agrégats d’impact documentaire parcourent les couples une fois.
- `pnpm validate:main` : validation complète, build, snapshots, serveur MCP sous plafond mémoire, audit HTML et Lighthouse.

Les résultats de validation et les mesures de poids sont à rapporter depuis le lot effectivement construit, pas à déduire de cette liste de commandes.

## Mise à l’échelle du premier lot

Le benchmark agents sélectionne le même préfixe SHA-256 dans chaque classe de verdict, avec une mémoire bornée à 100 candidats par classe. La recherche d’alternatives s’arrête aux trois premiers compresseurs compatibles. Les compteurs réutilisent les résultats des outils de même consommation, pression et confiance documentaire, sans fusionner leurs identités ni leurs sources.

Le serveur charge les verdicts dans trois colonnes entières et partage les charges utiles répétées. L’API reconstruit chaque enregistrement sans perte. La vérification exhaustive des octets, l’API HTTP et le démarrage des trois profils passent sur 1 635 006 couples avec un pic de 222,6 Mio, sous le plafond de 256 Mio. Le graphe de preuve demande uniquement le couple sélectionné à l’API et refuse une réponse dont le catalogue, la méthode ou les identifiants diffèrent.

Une mesure locale du premier lot donne 1 088 Mio de fichiers bruts, dont 168 Mio de HTML. Les budgets de données et de fichiers suivent ce volume mesuré ; les limites JavaScript ne changent pas. L’archive xz mesure 97 Mio contre 124 Mio en gzip maximal. Le workflow conserve son plafond de 112 Mio, sa rétention de sept jours et sa purge des anciennes publications. Le déploiement accepte toujours les archives gzip des exercices de retour arrière.

Les 40 infographies utilisent un canevas compact adapté à la largeur mobile, avec les mêmes valeurs et sources que les tableaux. Six guides antérieurs relient les nouveaux dossiers dans leur texte et leurs suggestions.
