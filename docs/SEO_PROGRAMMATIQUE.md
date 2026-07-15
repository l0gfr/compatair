# Politique de SEO programmatique

Les verdicts compresseur-outil répondent à un besoin produit réel, mais leur nombre croît comme le produit du nombre de compresseurs par le nombre d’outils. CompatAir conserve donc les couples dans le snapshot auditable et les sert dans le calculateur et l’API sans générer un fichier HTML par verdict.

## Frontière d’indexation

- Les fiches de compresseur et d’outil restent indexables lorsqu’elles possèdent des données et sources propres.
- Les pages « quel compresseur pour… » restent indexables : chacune agrège un besoin constructeur distinct et le classement complet du catalogue.
- Aucune page statique n’est générée sous `/compatibilite/` et aucun lien interne nouveau ne doit cibler cet espace retiré.
- Une ancienne URL exacte dont les deux slugs existent encore reçoit une redirection permanente vers le calculateur prérempli avec les identifiants canoniques.
- Une URL ancienne inconnue, ambiguë ou mal formée reçoit une réponse `410 Gone` ciblée. Les paramètres de suivi d’une URL connue sont supprimés lors de la redirection canonique.
- Les couples restent exclus du sitemap et ne publient pas de balisage `TechArticle` destiné à enrichir leur présence dans les résultats.
- Le snapshot `/data/verdicts.json` conserve tous les couples pour l’audit, l’historique et les usages machine.

Cette séparation évite une croissance quadratique du HTML. Le corpus indexable reste centré sur les pages qui apportent une synthèse ou une information propre, tandis que le contrat machine conserve l’exhaustivité des verdicts.

## Contrat de migration et widgets

Le widget immuable `v1.0.0` conserve ses octets et peut encore reconnaître une URL historique renvoyée par une ancienne réponse API mise en cache. Le serveur migre alors cette URL par `301`; modifier ce fichier casserait son empreinte SRI et le contrat des intégrateurs. L’alias mutable `v1` n’accepte plus que la continuation actuelle vers `/calculateur/`. L’API courante ne renvoie plus de page de détail statique.

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
