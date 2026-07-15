# Publication au Registry MCP officiel

État du dépôt : `server.json` est prêt pour le serveur distant Streamable HTTP `https://compatair.fr/mcp`, sous le namespace GitHub `io.github.bluetouff/compatair`, version `2.1.0`. L’absence de preuve Registry ne doit pas être transformée en affirmation de publication.

Le Registry est encore en preview. Les métadonnées publiées deviennent publiques sous CC0, une version publiée est immuable et la suppression n’est pas actuellement garantie. La première publication reste donc une opération propriétaire manuelle, après lecture des conditions officielles.

## Publication manuelle

Installer le binaire officiel `mcp-publisher` en suivant la documentation Registry, puis depuis la racine du dépôt :

```bash
mcp-publisher login github
mcp-publisher publish
pnpm registry:verify
```

L’authentification GitHub est cohérente avec le namespace `io.github.bluetouff/*`. Ne placez aucun jeton, fichier d’authentification ou code de device flow dans Git ou dans un log partagé.

## Preuves à conserver

- sortie de publication indiquant le nom et la version exacts ;
- réponse JSON de recherche du Registry ;
- date UTC de publication ;
- SHA Git dont provient `server.json` ;
- résultat d’un handshake public MCP et du smoke HTTPS de la même release.

Le script `pnpm registry:verify` échoue tant que le Registry ne renvoie pas exactement le nom, la version, le transport et l’URL attendus. Il ne publie rien et ne nécessite aucun secret.

Le miroir public minimal se reconstruit dans un répertoire vide avec `pnpm contracts:export-public -- /chemin/vide`. L’export repose sur une liste fermée, inclut MCP, les reçus et UCP, produit `SYNC_MANIFEST.json`, exécute ses tests sans dépendance et exclut explicitement le moteur, les offres et la configuration de production. Il doit être synchronisé seulement après que la version correspondante est live.

## Automatisation ultérieure

Une publication GitHub Actions ne sera ajoutée qu’après la première publication propriétaire et la validation de la méthode d’authentification sans secret longue durée. Elle devra être séparée du déploiement de production, utiliser des permissions minimales, épingler les actions et refuser toute divergence entre `server.json`, `initialize.serverInfo.version` et le remote live.

Références officielles :

- https://modelcontextprotocol.io/registry/remote-servers
- https://modelcontextprotocol.io/registry/quickstart
- https://modelcontextprotocol.io/registry/authentication
- https://modelcontextprotocol.io/registry/versioning
- https://modelcontextprotocol.io/registry/terms-of-service
