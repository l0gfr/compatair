# Croissance organique et indexation progressive

Date : 26 septembre 2026. Contrôle implémenté dans le dépôt ; son activation publique exige le déploiement de cette version. Le code et les tests, puis le SHA et le HTML réellement servis, constituent les preuves d’activation.

## Ce qui se passe lors d’un import

Les fiches, guides et données du calculateur restent utilisables. Les nouvelles pages de contenu passent automatiquement par une analyse de sources, de répétition et une file de publication. Aucune validation individuelle n’est demandée.

Une page en attente porte `noindex,follow`, garde sa canonique propre et sort du sitemap. Google peut l’explorer et lire cette directive. `noindex` contrôle l’indexation, pas le nombre de requêtes de crawl. Bloquer ces pages dans robots.txt empêcherait la lecture de la directive. [Google : noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing)

Les URL déjà indexables sont conservées : la base initiale contient les 4 373 URL du sitemap public de la révision `702747a9f6a143f37cbce7f24258f5535b19882b`. Une présence au sitemap ne prouve pas une indexation par Google. Les répétitions détectées dans ce corpus sont signalées dans le rapport local, sans désindexation collective.

La publication concurrente de 55 nouveaux guides en `4870e1e` est enregistrée séparément comme transition initiale. Elle ne contourne pas les quotas : ces 55 ajouts restent candidats, dont 5 admis au premier lot et 50 en attente. Ils ont été temporairement exposés comme indexables avant l’activation du contrôle ; le prochain déploiement demandera donc leur exclusion temporaire, sans garantie de prise en compte immédiate par Google. Les bibliothèques et leur pagination restent ouvertes.

## Rythme automatique

Les plafonds sont communs à tous les imports d’une famille, pas renouvelés par fichier, marque ou commande de build. Chaque famille progresse selon ses propres lots : publier des guides ne fait pas sauter le premier palier des fiches.

| Lot effectivement publié | Nouvelles fiches au maximum | Nouveaux guides au maximum |
| --- | ---: | ---: |
| Premier lot | 50 | 5 |
| Deuxième lot | 100 | 10 |
| Troisième lot | 150 | 15 |
| Lots suivants | 200 | 20 |

Au moins sept jours séparent deux lots. Le planificateur ajoute une marge de 24 heures au délai entre builds, puisque l’activation peut intervenir jusqu’à 24 heures après la construction : le prochain lot devient donc éligible huit jours après la date du build précédent. Un même groupe ne peut occuper plus de 25 % du plafond, arrondi à l’entier supérieur : marque et catégorie pour les fiches, catégorie éditoriale et premier métier déclaré pour les guides. Une seule thématique peut donc produire un lot plus petit. L’ancienneté dans la file publiée donne la priorité entre candidats éligibles ; un ajout récent ne passe pas systématiquement devant les pages déjà en attente.

Le build lit `/data/indexation.json` et `/data/release.json` sur le site public. Il part du dernier lot réellement déployé. Plusieurs builds locaux n’épuisent pas des quotas et ne débloquent pas plusieurs lots. Après plusieurs semaines d’arrêt, un seul lot peut s’ouvrir au build suivant : aucun rattrapage cumulatif.

Le site étant statique, l’ouverture suivante intervient au prochain build et déploiement après le délai, avec une nouvelle révision immuable. Aucune tâche récurrente, recherche IA payante ou demande d’indexation Google n’est lancée. Des publications régulières font progresser la file, sans opération par page.

Ces plafonds sont des réglages internes modifiables dans `config/indexation-policy.json`, pas des seuils de sécurité Google. La montée suit les lots publiés et les contrôles techniques ; elle ne prétend pas lire automatiquement les signaux Search Console. `paused: true` suspend les nouvelles admissions à partir du prochain déploiement tout en conservant les URL déjà admises.

## Détection de répétition et critères d’admission

### Guides

L’analyse compare le corps du Markdown. Elle retire les SVG, blocs de code, adresses de liens, balises et bibliographie finale ; les textes d’ancrage restent comparés. Elle neutralise casse, accents et changements de chiffres. Modifier seulement les métadonnées, une illustration, les sources finales ou les valeurs d’un exemple ne crée donc pas un guide original.

Des suites de cinq mots servent à comparer les textes. Une similarité de Jaccard d’au moins 82 %, ou une reprise d’au moins 92 % du plus petit texte lorsque les tailles restent comparables, met un nouveau guide en attente. Le rapport indique son voisin et les mesures. Les guides doivent aussi déclarer des sources HTTPS ; les validations éditoriales existantes continuent de vérifier leur schéma et la cohérence des sources déclarées.

Une réécriture est réévaluée au build suivant. Aucune case à cocher ne permet de contourner la comparaison. Ce contrôle lexical ne comprend pas toutes les paraphrases, ne vérifie pas une affirmation dans son document source et ne certifie pas l’expertise de l’auteur. La relecture des nouveaux gabarits et un échantillonnage éditorial restent nécessaires.

### Catalogue

Chaque nouvelle fiche doit posséder une synthèse, au moins deux faits, une limite et des références de sources pour ses données critiques. L’analyse neutralise les identifiants du modèle et les chiffres dans le texte, puis compare les fiches dont les caractéristiques techniques principales sont identiques. Une fiche clonée avec un nom différent peut donc rester en attente ; une différence documentée de débit, pression ou autre caractéristique considérée ne se réduit pas automatiquement à un doublon.

Les validations de catalogue restent obligatoires : données critiques sourcées, unités exactes, débit aspiré distinct du FAD, aucune estimation silencieuse. Les contrôles ne remplacent pas la vérification de chaque nouvelle source technique.

Les nouvelles pages `/quel-compresseur-pour/` restent en `noindex` : le gabarit réutilise actuellement le dossier de la fiche outil. Un import de mille outils ne crée donc pas mécaniquement deux mille nouvelles entrées SEO. Les pages de cette famille déjà publiées restent conservées. Une évolution future du gabarit devra apporter une réponse distincte avant de réouvrir automatiquement cette famille.

### Navigation et nouvelles routes

Les paginations des bibliothèques, répertoires d’usage et de marque restent explorables et indexables pour permettre la découverte des contenus. Elles ne consomment pas le quota des articles et fiches. Leur nombre dépend de la taille du catalogue et des bibliothèques.

Une nouvelle route qui n’appartient ni à la base initiale, ni à un lot admis, ni à ces routes de navigation reste en `noindex`. Ajouter un nouveau type de page éditoriale demande donc une intégration explicite à la politique, pas une validation de toutes ses pages une par une.

## Cohérence technique et suivi

`BaseLayout.astro` et le générateur de sitemap utilisent la même décision. L’audit de `dist` vérifie le HTML de chaque page, sa canonique, sa présence au sitemap et la cohérence du manifeste avec la release. Les sitemaps sont séparés en guides, compresseurs, outils, usages et autres pages, avec au plus 5 000 URL par fichier.

Le découpage à 5 000 est un choix d’exploitation. Le protocole autorise 50 000 URL et 50 Mo non compressés par sitemap ; ce plafond ne constitue pas un rythme de publication recommandé. Un sitemap ne garantit pas l’indexation. Les `lastmod` existants restent liés aux modifications de sources ; aucun rajeunissement quotidien ni `priority` artificielle n’est ajouté. [Google : sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

Le rapport `.astro/seo/indexation-plan.json`, exclu de Git et du site public, contient pour chaque candidat : état, motif, groupe, empreinte du texte, première observation et éventuel voisin proche. Le manifeste public conserve les lots, la file et quelques URL témoins, sans publier les diagnostics éditoriaux.

Avant transfert, le workflow vérifie que la production correspond encore à la base du build et que l’artefact a moins de 24 heures. Après activation, le vérificateur HTTPS contrôle les directives, canoniques et sitemaps sur les témoins admis et en attente, dont les guides, ainsi que toutes les fiches du sitemap. La preuve reste le SHA servi, jamais le seul succès du code local.

## Commandes et comportement en cas d’échec

- `pnpm build` prépare automatiquement la décision puis génère le site.
- `pnpm seo:prepare` permet de consulter le plan sans construire tout le site.
- `pnpm audit:dist` contrôle la cohérence complète de l’artefact généré.
- `node scripts/verify-indexation-release.mjs` contrôle la base publique avant un déploiement de release.
- `node scripts/prepare-indexation.mjs --offline` prépare uniquement un aperçu local prudent ; il ne connaît pas les admissions postérieures à la base initiale. Cet artefact est refusé par le contrôle de déploiement et cette option est interdite en CI.

Si la lecture HTTPS échoue, si les révisions publiques diffèrent ou si l’historique est invalide, le build de publication échoue. Il ne réinitialise pas discrètement la file et ne rend pas toutes les pages indexables. Le premier déploiement exige que la révision publique corresponde à la capture initiale ou à la transition explicitement enregistrée dans `bootstrap`. Si une autre publication intervient avant activation, relever son sitemap, vérifier le diff et documenter les URL supplémentaires dans cette transition sans élargir silencieusement la base historique.

Ne pas reconstruire une release d’urgence depuis une base incomplète : restaurer un artefact connu avec son manifeste. Un retour à une version antérieure à l’activation de ce contrôle supprimerait son historique public et exige une récupération explicite de cet historique avant de reprendre les admissions. Ne pas remplacer la base initiale à chaque import.

## Référencement organique et contrôle de qualité

Google vise le contenu produit à grande échelle principalement pour manipuler les classements et apportant peu de valeur originale, quelle que soit sa méthode de création. Les règles ne fixent aucun nombre quotidien de pages garantissant l’absence de risque. Espacer des textes répétitifs ne les rend pas utiles. [Google : règles antispam](https://developers.google.com/search/docs/essentials/spam-policies#scaled-content)

Développer des réponses distinctes aux besoins réels : dimensionnement, diagnostic, maintenance, contraintes de métier et lecture de documents techniques. Relier chaque guide aux fiches, au glossaire et au calculateur lorsque ces liens prolongent la réponse. Améliorer les pages qui ont déjà des impressions avant de multiplier des variantes de titre. Garder la relecture interne clairement distincte d’une validation professionnelle externe. [Google : contenu utile](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

À J+7, vérifier découverte, HTTP, canoniques et état de l’hôte. À J+14 et J+28, comparer dans Search Console des lots de même famille et de même âge : pages explorées non indexées, canoniques choisies, impressions, clics pertinents et usages du calculateur. Ne pas diviser un total historique de pages indexées par un sitemap plus récent. Ne pas retirer automatiquement une page parce qu’elle n’a pas encore de clic.

Des erreurs 5xx/429 persistantes, des canoniques inattendues ou des répétitions systématiques justifient la suspension des nouvelles admissions avec `paused`. Search Console n’est pas reliée automatiquement au planificateur : cette revue reste nécessaire, sans validation individuelle de milliers d’URL.

Conserver les filtres du calculateur dans les fragments et les protections contre les espaces infinis de paramètres. Ne pas soumettre automatiquement chaque URL à l’inspection Google. Utiliser les sitemaps et réserver l’inspection aux diagnostics. L’Indexing API n’est pas un accélérateur pour les fiches et guides ordinaires. [Google : exploration](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl), [Indexing API](https://developers.google.com/search/apis/indexing-api/v3/using-api)
