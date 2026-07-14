# Actif de données CompatAir

CompatAir sépare strictement le catalogue technique, le moteur, la demande agrégée, le funnel produit agrégé et les offres marchandes. Une offre ne peut jamais modifier une caractéristique technique ou un verdict.

Le catalogue technique est physiquement découpé en un fichier par référence sous `src/data/products/compressors` et `src/data/products/tools`. `src/data/catalog.ts` reste la façade publique : il agrège les modules, applique les schémas Zod et conserve les exports historiques utilisés par Astro, les snapshots et le serveur MCP.

## Catalogue normalisé

`/data/catalog.json` publie le catalogue source et une vue `normalized` :

- EAN et GTIN réduits à leur forme numérique canonique ;
- MPN normalisés pour l’appariement exact sans séparateur ni différence de casse ;
- alias acceptés uniquement avec un identifiant de preuve ;
- familles de variantes explicites lorsqu’elles sont documentées ;
- index de sources et rattachement des champs critiques à leurs preuves.

Le validateur bloque les identifiants dupliqués, les références vers une preuve inconnue et les caractéristiques critiques sans provenance.

L’ajout d’une référence passe par les commandes reproductibles suivantes :

```bash
pnpm catalog:add -- compressors chemin/compresseur.json
pnpm catalog:index
pnpm catalog:check
```

Le fichier JSON doit satisfaire le schéma strict du domaine. L’index n’est plus maintenu à la main : il est régénéré dans l’ordre alphabétique. Le contrôle catalogue vérifie aussi le nom de fichier, l’unicité globale de l’identifiant, l’image locale, les références de preuves, les URL HTTPS et la présence des titres SEO éditoriaux. Après `catalog:add`, le contributeur doit donc ajouter les titres explicites du nouveau produit dans `src/data/product-seo-titles.ts` avant que la CI puisse passer.

## Historique des preuves

`src/data/evidence-history.snapshot.json` constitue le registre public append-only. Sa baseline du 14 juillet 2026 archive les 67 preuves alors présentes, sans reconstruire artificiellement un passé antérieur. Toute modification d’une source doit ajouter un événement conservant l’ancien instantané ; le test d’intégrité bloque une preuve courante qui ne correspond pas à la dernière version archivée. Les contrats publics sont `/preuves/` et `/data/evidence-history.json`.

Le baromètre annuel est calculé uniquement depuis les compresseurs et preuves du catalogue. Ses six critères, son périmètre, son échantillon et ses résultats sont exposés sur `/barometre-transparence/` et `/data/transparency-barometer.json`.

## Verdicts versionnés

`/data/verdicts.json` contient toutes les paires entre un compresseur et un outil à débit fixe, y compris `insufficient_data`. Le snapshot lie :

- la version du catalogue ;
- la version du moteur ;
- le verdict, son facteur limitant et les valeurs réellement comparées ;
- un `verdictVersion` SHA-256 reproductible.

Le workflow quotidien compare ce snapshot à la production et conserve le rapport pendant 30 jours.

## Signature des publications

Le déploiement de production signe octet pour octet, avec Ed25519, les cinq publications JSON : catalogue, offres, verdicts, historique des preuves et baromètre. Le manifeste détaché est publié sous `/data/signatures.json`; le registre des clés publiques est disponible sous `/data/signing-keys.json`.

La clé privée n’existe pas dans Git. Le workflow échoue si le secret GitHub `COMPATAIR_PUBLICATION_SIGNING_KEY` est absent ou si la clé ne correspond pas à l’empreinte publique enregistrée. La vérification locale d’un artifact signé s’effectue avec `pnpm data:verify-signatures`. Une rotation ajoute d’abord une nouvelle clé publique au registre ; une clé déjà utilisée ne doit pas être retirée, afin de préserver la vérification des publications archivées.

## Demande agrégée

La contribution est désactivée par défaut. Lorsqu’une personne l’active dans le calculateur, le serveur accepte uniquement un schéma fermé : identifiants d’outils connus et tranches prédéfinies de débit, pression et durée. Il rejette le texte libre, les dimensions inconnues et les outils absents du catalogue.

Le serveur incrémente directement des compteurs marginaux. Il ne conserve ni ligne d’événement, ni cookie, ni identifiant de navigateur, ni adresse IP dans cet actif. Les rapports masquent les dimensions de moins de cinq contributions.

Ce dispositif suit les principes de minimisation et de statistiques anonymes exposés par la CNIL. Il ne constitue pas une certification juridique et doit être réévalué avant tout ajout de traceur, identifiant persistant, recoupement ou transmission à un tiers.

## Funnel produit agrégé

Le calculateur transmet au plus un signal `started` et un signal `completed` par chargement de page. Aucun chemin, URL, referrer, identifiant ou contenu de formulaire n’atteint l’actif statistique.

Le serveur conserve uniquement les deux compteurs globaux dans `/var/lib/compatair/product-funnel-aggregates.json`. Si des pertes réseau ou des requêtes invalides conduisent à davantage de complétions que de démarrages, le taux est laissé à `null` et une alerte de qualité est produite.

## Offres ManoMano

Le flux Awin enrichit uniquement la couche commerciale. L’appariement échoue sans EAN, GTIN ou MPN normalisé déjà relié à une fiche technique. Le prix, le stock ou la commission ne participent jamais au moteur de compatibilité.
