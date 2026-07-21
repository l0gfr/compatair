# API et widget CompatAir

## API publique bêta

`GET /api/v1/compatibility` accepte :

- `compressorId` obligatoire ;
- `toolId` obligatoire.

La marge de calcul de la version 1 est celle du moteur CompatAir publié. Elle ne peut pas être remplacée par le client : la réponse est lue dans le snapshot de verdicts généré par le moteur TypeScript, versionné avec le catalogue.

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
