# CompatAir : règles de contribution

- TypeScript strict, Astro statique et JavaScript client minimal.
- Le moteur de compatibilité reste déterministe, testé et indépendant d’Astro.
- Toute caractéristique technique critique doit être reliée à une source.
- Le débit aspiré ne doit jamais être présenté comme du débit restitué (FAD).
- Une donnée insuffisante produit `insufficient_data`, jamais une estimation silencieuse.
- Une commission d’affiliation ne doit jamais influencer un verdict technique.
- Aucun secret, jeton, lien de redirection arbitraire ou donnée personnelle dans Git.
- Une branche ne déploie jamais en production. Seul `main` peut déclencher le workflow production.

## Développement

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
