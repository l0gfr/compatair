# Politique de SEO programmatique

Les verdicts compresseur-outil répondent à un besoin produit réel, mais leur nombre croît comme le produit du nombre de compresseurs par le nombre d’outils. CompatAir expose 927 453 combinaisons explorables : le snapshot auditable conserve 920 706 verdicts fixes, tandis que 6 747 combinaisons paramétriques exigent une cadence ou un volume et un temps cible. Le calculateur et les interfaces MCP/UCP traitent ces paramètres sans générer un fichier HTML par résultat ; l’endpoint API HTTP limité aux identifiants répond `insufficient_data` pour ces outils.

## Frontière d’indexation

- Les fiches de compresseur et d’outil restent indexables lorsqu’elles possèdent des données et sources propres.
- Les pages « quel compresseur pour… » restent indexables : chacune agrège un besoin constructeur distinct, les effectifs par verdict du catalogue et une sélection bornée de résultats expliqués.
- Aucune page statique n’est générée sous `/compatibilite/` et aucun lien interne nouveau ne doit cibler cet espace retiré.
- Une ancienne URL exacte dont les deux slugs existent encore reçoit une redirection permanente vers le calculateur prérempli avec les identifiants canoniques dans le fragment d’URL.
- Une URL ancienne inconnue, ambiguë ou mal formée reçoit une réponse `410 Gone` ciblée. Les paramètres de suivi d’une URL connue sont supprimés lors de la redirection canonique.
- Les couples restent exclus du sitemap et ne publient pas de balisage `TechArticle` destiné à enrichir leur présence dans les résultats.
- Le snapshot `/data/verdicts.json` conserve les 920 706 couples à débit fixe pour l’audit, l’historique et les usages machine. Les 6 747 combinaisons paramétriques sont calculées seulement après saisie de leurs paramètres.
- Les premières pages de `/preuves/` et `/sources-fiabilite/` restent indexables. Leurs pages 2 et suivantes conservent les liens de parcours, mais publient `noindex,follow` et restent hors sitemap afin de ne pas multiplier les entrées de répertoire sans intention de recherche propre.

Cette séparation évite une croissance quadratique du HTML. Le corpus indexable reste centré sur les pages qui apportent une synthèse ou une information propre, tandis que le contrat machine décrit explicitement le grain fixe ou paramétrique de chaque décision.

## Dossiers et comparatifs documentés

Les 519 fiches compresseurs et les 1787 pages d’usage réutilisent les références existantes. Le build refuse une référence dépourvue de synthèse propre, de deux faits éditoriaux, de limites ou de sources rattachées à ses champs critiques. Le dossier relie les preuves datées, les contradictions arbitrées, l’historique et les besoins voisins. Les 13 outils paramétriques conservent leur demande de cadence ou de volume : aucun débit d’usage n’est inventé.

Les comparatifs supplémentaires proviennent exclusivement de la sélection explicite de `src/data/decision-comparisons.ts`. Chacun porte une question et une conclusion propres, au maximum quatre compresseurs et deux besoins documentés, sans note globale ni gagnant universel. Ils utilisent le moteur déterministe existant. Les mentions de FAD distinguent point publié, interpolation et borne conservatrice ; une réserve recommandée ne devient pas silencieusement le seuil nominal de compatibilité.

Les liens d’achat directs sont sélectionnés par identité produit et EAN, datés, limités à des hôtes HTTPS autorisés et masqués après 90 jours. Ils ne promettent ni stock, ni prix, ni accord marchand, et ne participent jamais au verdict ou à l’ordre des résultats.

Pour prioriser les pages existantes, utiliser un export Search Console de performances par page et requête. Un export de couverture ne donne pas de positions. Les requêtes du serveur, notamment celles des robots et du MCP, ne mesurent pas des visiteurs humains ou une demande de recherche. Les exports de trafic bruts restent hors du dépôt.

## Contrat de migration et widgets

Le widget immuable `v1.0.0` conserve ses octets et peut encore reconnaître une URL historique renvoyée par une ancienne réponse API mise en cache. Le serveur migre alors cette URL par `301`; modifier ce fichier casserait son empreinte SRI et le contrat des intégrateurs. L’alias mutable `v1` n’accepte plus que la continuation actuelle vers `/calculateur/`. L’API courante ne renvoie plus de page de détail statique.

Le contrat API v1 conserve ses paramètres de requête dans `detailsUrl` pour rester compatible avec le widget immuable. Les liens HTML publics et les redirections historiques utilisent le fragment `#outil=...&compresseur=...`, qui préremplit le calculateur sans créer de variantes explorables. Le calculateur continue de lire les anciennes URL à paramètres comme repli de compatibilité.

Les tests couvrent les trois niveaux du contrat : octets et SRI du widget immuable, politique du widget mutable, puis redirection `301` ou retrait `410` au niveau du service et du vhost. La vérification HTTPS du workflow refuse aussi un déploiement qui ne reproduit pas ces réponses.

## Titres éditoriaux

Les fiches compresseurs, les fiches outils et les pages « quel compresseur pour » utilisent des titres écrits explicitement dans `src/data/product-seo-titles.ts`. La troncature automatique reste uniquement un filet de sécurité pour les autres gabarits. Un titre éditorial vide ou supérieur à 60 caractères fait échouer le build au lieu d’être raccourci silencieusement.

Les fiches outils et leurs pages d’usage ont des intentions distinctes : caractéristiques « débit et pression » pour la fiche, sélection « quel compresseur ? » pour la page d’usage. L’audit de distribution vérifie la présence de cette couche éditoriale et l’unicité des titres rendus.

## Garde-fou automatique

`scripts/audit-dist.mjs` échoue si :

- une page statique est générée sous `/compatibilite/` ;
- un lien HTML interne cible encore une page de couple supprimée ;
- une URL `/compatibilite/` apparaît dans un sitemap ;
- une page indexable n’apparaît pas dans le sitemap ;
- une page `noindex` apparaît dans le sitemap.
- une fiche produit ou une page d’usage retombe sur un titre automatiquement ajusté.

Cette règle doit être réexaminée avant de pré-générer une éventuelle sous-sélection de couples à forte demande. Une page ne pourra devenir indexable que si elle apporte une valeur éditoriale propre, vérifiable et non produite uniquement par substitution de noms ou de chiffres.
