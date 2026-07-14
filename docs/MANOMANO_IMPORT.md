# Import du flux produits ManoMano

CompatAir consomme le flux ManoMano FR fourni par Awin, annonceur `17547`. ManoMano confirme que son programme d'affiliation passe par Awin et qu'un flux dédié peut être créé. Awin documente les colonnes de son export CSV, notamment `product_id`, `product_name`, `price`, `deep_link`, `image_url`, `ean`, `mpn`, `currency`, `delivery_cost` et `in_stock`.

Sources :

- [programme d'affiliation ManoMano](https://www.manomano.fr/lp/programme-d-affiliation-6177) ;
- [programme ManoMano FR sur Awin, identifiant 17547](https://ui.awin.com/merchant-profile/17547) ;
- [colonnes officielles des flux produits Awin](https://help.awin.com/docs/hosting-feeds) ;
- [accès et personnalisation d'un flux Awin](https://success.awin.com/articles/en_US/Knowledge/How-can-I-access-a-Product-Feed).

## Préparer le flux dans Awin

1. Faire accepter CompatAir dans le programme ManoMano FR.
2. Dans `Toolbox > Create-a-Feed`, sélectionner ManoMano FR et limiter si possible le flux aux marques ou catégories suivies par CompatAir.
3. Exporter un CSV avec toutes les colonnes listées ci-dessus. Le script accepte aussi un CSV tabulé ou séparé par point-virgule, brut ou compressé en `.gz`.
4. Ne jamais enregistrer la clé de flux Awin, son URL signée ou un jeton dans Git. Télécharger le fichier hors du dépôt ou dans un emplacement ignoré.

## Importer

Construire d'abord le catalogue public qui sert de référentiel d'appariement :

```sh
pnpm build
```

Lancer ensuite l’import local :

```sh
pnpm data:import-offers -- --input /chemin/prive/manomano.csv.gz
```

Avant toute publication, exécuter une simulation. Elle génère le rapport mais ne modifie jamais le snapshot versionné, y compris lorsqu’aucune ligne n’est appariée :

```sh
pnpm data:import-offers -- --input /chemin/prive/manomano.csv.gz --dry-run
```

Le script écrit :

- `src/data/offers.snapshot.json`, uniquement si au moins une offre est appariée ;
- `manomano-import-report.json`, ignoré par Git, avec les volumes importés, les motifs de rejet et des échantillons bornés de correspondances et de lignes non appariées.

Une date reproductible peut être passée avec `--collected-at 2026-07-13T20:00:00.000Z`. Les chemins peuvent être adaptés avec `--catalog`, `--output` et `--report`.

## Règles de publication

- L'appariement repose exclusivement sur un EAN, GTIN ou MPN déjà présent dans l’identité normalisée du catalogue technique. Les séparateurs et la casse des MPN sont normalisés, mais le titre ou la marque ne suffisent jamais.
- Si plusieurs identifiants désignent des produits différents, la ligne est rejetée.
- Seuls les prix en euros, les images HTTPS et les liens HTTPS réellement présents dans le flux sont conservés.
- Un lien de suivi Awin doit utiliser `pclick.php` ou `cread.php` et viser l'annonceur `17547`. Un autre annonceur est rejeté même s'il utilise le bon domaine Awin.
- Le titre, la référence partenaire et l'URL de l'image sont conservés comme données commerciales. L'image distante n'est pas chargée dans les pages publiques : cela évite une requête tierce avant le clic. Une future étape de mise en cache locale devra vérifier le type, la taille et le domaine des fichiers.
- Les données du flux ne modifient ni les caractéristiques techniques, ni le FAD, ni le verdict de compatibilité.
- Une offre disparaît du site après 48 heures sans nouvel import.

Après import, exécuter `pnpm validate:full` et examiner le rapport avant de versionner le snapshot.

Un nouvel import remplace le snapshot précédent. L’identifiant public d’une offre reste stable tant que `product_id` ne change pas, tandis que la date de collecte et le checksum sont renouvelés. Une offre absente du nouveau snapshot disparaît immédiatement ; une offre non renouvelée n’est plus publiée après 48 heures.
