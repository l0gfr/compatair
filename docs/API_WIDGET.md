# API et widget CompatAir

## API publique bêta

`GET /api/v1/compatibility` accepte :

- `compressorId` obligatoire ;
- `toolId` obligatoire.

La marge de calcul de la version 1 est celle du moteur CompatAir publié. Elle ne peut pas être remplacée par le client : la réponse est calculée par le même noyau que le navigateur, avec le catalogue et le moteur de la release active. Un cache vide déclenche ce calcul. Le cache inclut les empreintes complètes des deux références, la version du catalogue, le moteur et la marge.

La réponse contient les versions du schéma, du catalogue et du moteur, les deux produits, le verdict déterministe, les sources, une URL vers le calculateur prérempli et une URL vers le graphe de preuve. La route est en lecture seule, autorise CORS, n’utilise aucun cookie et applique le quota du service.

Une erreur réseau, un produit inconnu ou une donnée technique manquante ne doit jamais être converti en compatibilité par le client.

## Widget

```html
<script
  src="https://compatair.fr/widget/v1.1.0/compatair-widget.js"
  integrity="sha384-RNDfsRN7I47L6J+UJ+DY9tbkGqq4RaPm8qHCBoL74Qw3tEg7nv+ccAwYR8Vy9Yx7"
  crossorigin="anonymous"
  data-target="compatibility-result"
  data-compressor-id="einhell-tc-ac-240-50-10-of"
  data-tool-id="einhell-tc-pe-150"
  defer></script>
```

Le chemin `v1.1.0` est immuable et son empreinte SRI doit rester épinglée par l’intégrateur. Il accepte le contrat de réponse courant `2.0.0`, conserve la compatibilité avec les réponses `1.0.0` encore en cache et n’autorise comme continuation que le calculateur CompatAir sur la même origine. L’ancien `v1.0.0` reste immuable pour les intégrations existantes. Le chemin historique `v1` reste disponible comme alias mutable et ne doit pas être utilisé pour une nouvelle intégration reproductible.

Le script appelle l’API depuis son origine, isole son style dans un Shadow DOM et ne transmet que les identifiants techniques. Le marchand doit autoriser `https://compatair.fr` dans ses directives CSP `script-src` et `connect-src`.

Pour une fiche produit dynamique, le même script expose une API explicite. `update` annule la requête précédente et `destroy` retire le composant :

```js
const widget = window.CompatAirWidget.mount(
  document.getElementById('compatibility-result'),
  { compressorId: 'einhell-tc-ac-240-50-10-of', toolId: 'einhell-tc-pe-150' },
);

widget.update({ compressorId: 'metabo-basic-250-24-w-of', toolId: 'einhell-tc-pe-150' });
```

Le client valide le schéma minimal, le verdict et l’URL de suite. La réponse actuelle ouvre le calculateur prérempli. Le widget refuse une URL externe renvoyée par l’API et n’injecte aucun HTML fourni par le réseau.

## Frontière commerciale

La bêta publique ne promet ni SLA de disponibilité de l’API, ni quota réservé, ni support. Ces éléments, les exports, les historiques et les alertes relèvent d’une future offre professionnelle. Le SLA public de fraîcheur des données reste distinct et consultable dans `/data/freshness.json`. Une relation commerciale ne peut pas modifier le verdict.

## Recherche ciblée (27 septembre 2026)

Les interfaces utilisent les routes GET sous `/api/v1/search/`, déjà couvertes par le proxy de production. Aucun catalogue intégral n’est nécessaire pour identifier une référence, calculer un besoin ou ouvrir une configuration partagée.

- `catalog?q=4010393&type=compressor&limit=20` : suggestions compactes ; maximum 50. Le curseur est lié à la requête et à la publication.
- `identify?q=4010393` : correspondances exactes et ambiguïté explicite ; pas de substitution par un modèle proche.
- `products?ids=einhell-tc-pe-150&catalogVersion=…` : 1 à 50 fiches exactes. La version SHA-256 est celle reçue lors de la recherche.
- `alternatives?pressure=6.3&flow=100&average=30&recommended=125&phase=any&mobility=any&limit=20` : candidats couvrant les critères documentés, avec nombre total éligible et caractère exhaustif de l’aperçu. `budget` exige une offre active vérifiée. Le scénario utilisateur est encore évalué par le moteur commun.
- `related?id=einhell-tc-ac-240-50-10-of` : compteurs calculés sur le corpus opposé entier et aperçu de huit références au maximum par verdict.
- `metadata` : versions de publication pour une configuration sans référence du catalogue.

Ces lectures refusent les paramètres inattendus ou dupliqués. HTTP 409 signifie que la version demandée n’est plus celle de la release active ; le client doit recharger. HTTP 404 signifie identité inconnue. `insufficient_data` est un résultat technique, jamais un synonyme d’échec réseau ou de cache absent. Les routes gardent CORS, le quota et les en-têtes de sécurité du service.

La base SQLite de release se trouve sous `dist/_server/`, interdite au public par Apache. Son ouverture est en lecture seule, sans extension. Elle ne constitue pas une source technique supplémentaire : les documents fabricants restent attachés aux champs.
