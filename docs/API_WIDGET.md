# API et widget CompatAir

## API publique bêta

`GET /api/v1/compatibility` accepte :

- `compressorId` obligatoire ;
- `toolId` obligatoire.

La marge de calcul de la version 1 est celle du moteur CompatAir publié. Elle ne peut pas être remplacée par le client : la réponse est lue dans le snapshot de verdicts généré par le moteur TypeScript, versionné avec le catalogue.

La réponse contient les versions du schéma, du catalogue et du moteur, les deux produits, le verdict déterministe, les sources et une URL de suite valide. Un verdict concluant pointe vers sa page de détail ; un verdict à données insuffisantes pointe vers le calculateur prérempli. La route est en lecture seule, autorise CORS, n’utilise aucun cookie et applique le quota du service.

Une erreur réseau, un produit inconnu ou une donnée technique manquante ne doit jamais être converti en compatibilité par le client.

## Widget

```html
<script
  src="https://compatair.fr/widget/v1.0.0/compatair-widget.js"
  integrity="sha384-pZVA7LPRTtlWQ/eeRb84bAhHdWq1X1ISb/iW+VWmtmFAj7tyo3afdACxYMo3VZF1"
  crossorigin="anonymous"
  data-target="compatibility-result"
  data-compressor-id="einhell-tc-ac-240-50-10-of"
  data-tool-id="einhell-tc-pe-150"
  defer></script>
```

Le chemin `v1.0.0` est immuable et son empreinte SRI doit rester épinglée par l’intégrateur. Le chemin historique `v1` reste disponible pour compatibilité, mais peut recevoir des correctifs compatibles et ne doit pas être utilisé pour une nouvelle intégration reproductible.

Le script appelle l’API depuis son origine, isole son style dans un Shadow DOM et ne transmet que les identifiants techniques. Le marchand doit autoriser `https://compatair.fr` dans ses directives CSP `script-src` et `connect-src`.

Pour une fiche produit dynamique, le même script expose une API explicite. `update` annule la requête précédente et `destroy` retire le composant :

```js
const widget = window.CompatAirWidget.mount(
  document.getElementById('compatibility-result'),
  { compressorId: 'einhell-tc-ac-240-50-10-of', toolId: 'einhell-tc-pe-150' },
);

widget.update({ compressorId: 'metabo-basic-250-24-w-of', toolId: 'einhell-tc-pe-150' });
```

Le client valide le schéma minimal, le verdict et l’URL de suite. Un verdict concluant ouvre sa page de détail ; un résultat à données insuffisantes ouvre le calculateur prérempli. Le widget refuse une URL externe renvoyée par l’API et n’injecte aucun HTML fourni par le réseau.

## Frontière commerciale

La bêta publique ne promet ni SLA, ni quota réservé, ni support. Ces éléments, les exports, les historiques et les alertes relèvent d’une future offre professionnelle. Une relation commerciale ne peut pas modifier le verdict.
