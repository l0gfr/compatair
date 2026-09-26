# Calculs incrémentaux et capacité

Le build Astro réutilise un cache local dans `.astro/compatibility-cache-v1`.
Il concerne le snapshot des compatibilités fixes, pas le rendu de toutes les
pages ni les calculs interactifs du navigateur. Les tests du moteur restent
exécutés sans ce cache.

## Invalidation

Chaque compresseur et chaque outil est identifié par une empreinte de sa fiche
complète, sources et confiance incluses. Une ligne compressée contient les
résultats d'un outil pour les compresseurs du manifeste précédent. Les identités
sont reconstruites dans l'ordre public habituel : outil, puis compresseur.

Avec un cache valide et un moteur inchangé :

| Modification | Calculs du snapshot à refaire |
| --- | --- |
| CSS, header, guide sans changement du catalogue | Aucun |
| Un outil fixe ajouté ou modifié | Un par compresseur |
| Un compresseur ajouté ou modifié | Un par outil fixe |
| Retrait ou réorganisation de fiches | Aucun pour les fiches conservées |
| Source ou confiance d'une fiche modifiée | Tous les couples de cette fiche |
| Code du domaine, dépendances ou runtime modifiés | Tous |

L'empreinte du moteur couvre les fichiers de production de `src/domain`, le
lockfile, la configuration du cache et les versions Node, V8 et ICU. Elle ne
repose donc pas uniquement sur une augmentation manuelle de `CALCULATION_VERSION`.
Une nouvelle date ou version de catalogue renouvelle les métadonnées et le hash
public sans forcer le recalcul des couples dont les fiches sont identiques.

Les lignes sont vérifiées par SHA-256, taille maximale et schéma strict avant
réutilisation. Un cache absent, incompatible, endommagé ou indisponible provoque
une reconstruction, jamais un résultat approximatif. Les fichiers sont écrits
atomiquement et les lignes obsolètes sont supprimées. Ce cache est jetable et
ne fait pas partie des preuves documentaires ou des données publiées.

## Budget et CI

Le cache sur disque est plafonné à 64 Mio. S'il dépasse ce budget, le build
continue avec les calculs exacts, sans conserver de cache partiel. La CI de
production restaure et sauvegarde uniquement ce répertoire, depuis `main`.
Les PR peuvent le restaurer mais ne le sauvegardent jamais. Les tests du moteur
restent à froid. Les données, tests, signatures,
liens internes et Lighthouse restent contrôlés avant publication.

Le nettoyage GitHub conserve seulement le dernier cache de calcul de `main`,
ainsi que le dernier cache CodeQL par famille, indépendamment des archives de
production et de retour arrière. Il ne stocke
ni `dist` ni l'export public monolithique dans le cache Actions.

La ligne `[verdict-cache]` du build donne les nombres de couples réutilisés et
calculés, les lignes invalides, les octets conservés et le temps du snapshot.
Pour une comparaison reproductible, déplacer temporairement le répertoire de
cache, lancer `pnpm build`, puis relancer sans modification. Comparer les logs
et le SHA-256 de `dist/data/verdicts.json` ; les deux exports doivent être identiques.

## Dates du sitemap

Le build lit en une fois les changements Git depuis le dernier merge. Pour cette
portion linéaire de l'historique, la première modification d'un fichier permet
de répondre aux requêtes `lastmod` sans relancer Git pour chaque URL. Le choix
suit l'ordre de parcours des commits, même si leurs dates ne sont pas monotones.
Les sources plus anciennes conservent la requête Git exacte, avec mémorisation
par groupe de fichiers. Aucun horodatage de build ne remplace une date éditoriale.

## Mémoire du serveur

Le lecteur MCP reconnaît les deux ordres de matrice, vérifie chaque identité et
utilise quatre octets par cellule pour l'indice du résultat partagé. Une matrice
irrégulière conserve le stockage général et sa sémantique de recherche.
`pnpm benchmark:mcp-startup` impose l'utilisation du mode compact pour l'export
réel et vérifie intégralement les octets restitués par les recherches indexées.

## Limites restantes

Le cache évite les recalculs ; il n'élimine pas le coût cartésien de l'export JSON
historique. Cet export est encore sérialisé, signé, contrôlé et distribué en
entier. Le lecteur reste limité à dix millions de lignes. Il faut migrer ce
contrat vers des partitions versionnées et un accès ciblé avant de viser des
dizaines de millions de couples. Augmenter simplement les limites mémoire ne
résout pas ce problème.

Le rendu HTML demeure complet. Le mode incrémental expérimental d'Astro 7.2
requiert des clés couvrant aussi le maillage, les sélections, les métadonnées et
les autres dépendances de chaque page. Il n'est pas activé sans cette couverture.
