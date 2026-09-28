# CompatAir : suites V4 du 28 septembre 2026

Les trois défauts V4 sont corrigés dans le moteur **1.4.3**, avec conservation des protections de 1.4.2. Avant édition, `main` était `bf27ebb4dbbb022966913c8fd96ecab70a97fab5`. La comparaison avec la base auditée `896ce91f3bd7bd7873421d7f21e93652a42d7590` a identifié les travaux V3 déjà présents. Les noyaux et le sélecteur concernés étaient encore identiques à la base. Le commit d’implémentation est `c38fba11fc7adc25eb9f6ea7e10b4cf1c70ad5cd`.

Les [états V4](states.json) s’ajoutent aux historiques. Les 40 tickets du rapport, les 100 intentions originales, les fixtures V3 et les cohortes MCP ne sont pas réécrits. Le rapport fourni est identifié par SHA-256 ; aucun de ses scripts n’a été exécuté. Aucun croisement MCP absent n’est reconstruit. Les rapports locaux n’envoient aucune télémétrie.

## Recommandations et régulation

`CounterfactualMachine` reprend le contrat de compresseur du dimensionnement, y compris les deux seuils et la nature du FAD. La projection du calculateur conserve les caractéristiques personnalisées. Les cas C01 à C05 comparent le résultat complet au calcul principal, pas seulement son verdict.

Avec 200 L/min disponibles pour un besoin de 100 L/min à 6,3 bar, les seuils 4/8 bar restent une limite après passage de la pression disponible de 5 à 6,3 bar. Aucun changement de pression seul n’est annoncé suffisant. Les six familles de changements sont rejouées avec les contraintes inchangées. La cadence transporte aussi l’index de la ligne pour distinguer deux occurrences du même outil.

## Première rafale, domaine du scénario

Le temps affiché concerne uniquement une première rafale à pleine pointe, jusqu’à la pression utile. Hypothèses publiées avec le résultat et conservées dans le Passeport : départ à la pression d’arrêt, compresseur arrêté, commande marche/arrêt, mise en charge au seuil bas sans délai, FAD constant après démarrage, température constante et référence de 1 bar absolu. Les fuites mesurées font partie de la demande ; aucune fuite inconnue n’est ajoutée.

La première phase n’a aucune production : `V × (P_arrêt − P_redémarrage) / Q`. La seconde vaut `V × (P_redémarrage − P_utile) / (Q − FAD)`. Ces expressions s’appliquent ici au domaine intermittent déjà admis, avec `Q > FAD` et `P_redémarrage ≥ P_utile`. Les garde-fous de pression, de débit et de cycle restent exécutés auparavant. Une borne FAD à pression supérieure ne reçoit pas de durée.

Pour la fixture synthétique 50 L, départ 8 bar, seuil utile 6,3 bar, Q = 200 L/min et FAD = 100 L/min :

| Redémarrage | Première phase | Phase en charge | Total |
|---|---:|---:|---:|
| 6,3 bar | 25,5 s | 0 s | 25,5 s |
| 6,5 bar | 22,5 s | 6 s | 28,5 s |
| 7 bar | 15 s | 21 s | 36 s |
| 7,5 bar | 7,5 s | 36 s | 43,5 s |

Une seconde méthode intègre la masse d’air libre par pas de 1 ms, avec production nulle avant redémarrage. Les quatre résultats concordent à moins de 3 ms. Le principe de commande est décrit par [Atlas Copco](https://www.atlascopco.com/en-uk/compressors/wiki/compressed-air-articles/load-unload-stop-control), consulté le 28 septembre 2026. Cette source ne valide ni les nombres synthétiques ni l’autonomie d’un produit.

Les durées réelles des rafales, pauses, démarrages et limites thermiques restent inconnues. La récupération précédemment déduite du débit moyen n’est plus calculée. Les entrées insuffisantes suspendent la durée. La fixture E21 de 1.4.2 reste intacte : son ancienne attente arithmétique est explicitement distinguée de la correction V4.

## Ordre des références

Le sélecteur conserve les suites numériques ordonnées, en normalisant les séparateurs utilisés dans les slugs. Il rejette dans les deux sens 430/90/10 et 430/10/90, 250-24 et 24-250, 1/2 et 2/1. Il ne fabrique pas de référence en assemblant plusieurs champs. Les comparatifs, les alias déjà exposés par les surfaces sources, les nombres avec unités et les 112 témoins historiques restent couverts. Ce contrôle lexical ne crée ni ne corrobore un alias.

## Contrôles réellement exécutés

- **Tests du projet** : Node 24.19.0, `pnpm test`, 989 tests réussis dans 137 fichiers. Les suites existantes sont étendues. [Résultats par fichier et itérations précédentes](tests-results.json).
- **Zod** : seuils invalides refusés, projections C01-C05 conservées, scénario de rafale conservé dans un Passeport signé puis relu.
- **API/MCP** : requêtes HTTP réelles sur loopback, parité des limites documentaires et refus des paramètres personnalisés non pris en charge. MCP testé par son gestionnaire JSON-RPC. Ces interfaces publiques n’acceptent pas une machine personnalisée ; ces essais ne prétendent pas y tester une durée personnalisée.
- **Typecheck** : `pnpm check`, zéro erreur, zéro avertissement, neuf suggestions préexistantes.
- **Build local** : `pnpm build`, 12 980 pages en 262 s pour la phase Astro, puis base de 6 506 références. Marqueur local `development` ; ce résultat n’est pas une preuve de production.
- **Navigateur** : [observations locales](browser-local.json), cas 4/8, clic sur une recommandation valable 7/8, rejet 9/8 et masquage du résultat périmé, seuil partiel, quatre durées, rendu mobile 390 × 844 sans débordement. Le navigateur a cliqué la famille pression ; les autres familles sont rejouées en tests unitaires.

Les contrôles complets du hook `main`, les contrôles CI et la révision publique doivent encore être vérifiés au moment de la livraison. La note de scénario prend une ligne complète dans la grille des métriques après inspection visuelle.

## Suites indépendantes

1. [Inventaire FAD × cycle × pression](documentary-coverage.json) : 1 419 compresseurs × 5 011 outils fixes, avec définitions exactes des cellules, lacunes et gains documentaires potentiels dédupliqués par intention. Une opportunité documentaire n’est pas un gain de verdict promis ; aucun catalogue enrichi n’a été simulé.
2. [Comparaison exhaustive](engine-comparison.json) : 7 110 609 couples fixes, moteurs 1.4.2 et 1.4.3 épinglés par SHA et modules identifiés. Aucun écart de verdict, confiance, facteur ou avertissement. Les 76 outils paramétriques et les configurations personnalisées sont hors de ce dénominateur. Le calcul reste à la demande dans l’API, sans matrice rematérialisée.
3. [Registre intentions](intention-registry.json) : 100 intentions conservées, 99 associées à 69 routes, identité, faits, directives et canoniques déclarées. `q009` reste sans correspondance exacte. Zéro observation SEO disponible : aucune position, aucun volume, aucun trafic ni concurrent synthétique. Les déclarations HTML locales ne sont pas des observations Google.
4. [Qualification historique à 100 000](qualification-100k-history.json) : corpus isolé de 21 811 compresseurs et 78 189 outils sur `bf27ebb4`, distribution des profils et budgets conservés. SQLite et service ont passé leurs budgets, avec p95/p99 et erreurs distincts. La préparation SEO a échoué après 103,98 s, par épuisement du tas V8, pic RSS 4 257,42 Mio. Build HTML, archive, restauration et drill serveur à cette échelle non atteints. La chaîne complète n’a pas été rejouée pour V4 et reste **non qualifiée**. [Procédure de restauration et rollback](../audit-v3/qualification-100k.md#restauration-de-service-et-retour-arrière).

## Reproduction hors requête

```sh
pnpm test
pnpm check
pnpm build
node scripts/audit-v3/intention-registry.mjs dist /tmp/v4-intentions.json
node scripts/audit-v3/documentary-coverage.mjs dist/data/catalog.json /tmp/v4-intentions.json /tmp/v4-coverage.json
node scripts/audit-v3/compare-engines.mjs dist/data/catalog.json 896ce91f3bd7bd7873421d7f21e93652a42d7590 c38fba11fc7adc25eb9f6ea7e10b4cf1c70ad5cd /tmp/v4-engines.json
```

Le dernier programme exécute seulement les deux modules fixes de l’historique Git local du projet. Aucun code provenant du rapport ou d’une source externe n’est exécuté. Aucune protection TLS ou réseau n’est abaissée, aucun HTML dynamique non échappé n’est injecté, aucune stack n’est changée et aucun test de charge ne cible la production.
