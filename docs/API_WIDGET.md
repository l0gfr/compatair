# API et widget CompatAir

## API publique bêta

`GET /api/v1/compatibility` accepte :

- `compressorId` obligatoire ;
- `toolId` obligatoire.

La marge de calcul de la version 1 est celle du moteur CompatAir publié. Elle ne peut pas être remplacée par le client : la réponse est lue dans le snapshot de verdicts généré par le moteur TypeScript, versionné avec le catalogue.

La réponse contient les versions du schéma, du catalogue et du moteur, les deux produits, le verdict déterministe, les sources et l’URL de détail. La route est en lecture seule, autorise CORS, n’utilise aucun cookie et applique le quota du service.

Une erreur réseau, un produit inconnu ou une donnée technique manquante ne doit jamais être converti en compatibilité par le client.

## Widget

```html
<script
  src="https://compatair.fr/widget/v1/compatair-widget.js"
  data-compressor-id="einhell-tc-ac-240-50-10-of"
  data-tool-id="einhell-tc-pe-150"
  defer></script>
```

Le script appelle l’API depuis son origine, isole son style dans un Shadow DOM et ne transmet que les identifiants techniques. Le marchand doit autoriser `https://compatair.fr` dans ses directives CSP `script-src` et `connect-src`.

## Frontière commerciale

La bêta publique ne promet ni SLA, ni quota réservé, ni support. Ces éléments, les exports, les historiques et les alertes relèvent d’une future offre professionnelle. Une relation commerciale ne peut pas modifier le verdict.
