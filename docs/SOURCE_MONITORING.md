# Contrôles automatiques des sources

La CI des pull requests et le déploiement de `main` exécutent les tests du moteur, les contrats de données, l’audit des citations, le build, le contrôle des liens internes et Lighthouse. Une pull request ne déploie jamais le site. L’historique des preuves et celui des observations mensuelles sont comparés à la base de la pull request, puis aux versions publiées avant activation : supprimer ou réécrire une observation fait échouer le contrôle.

Les références, dates de consultation, relations entre champs et preuves, arbitrages et empreintes sont versionnés dans Git. `catalogVersion` et `historyVersion` identifient les données publiées. Les signatures Ed25519 permettent de vérifier les fichiers distribués. Il s’agit des versions des données et des observations CompatAir, pas d’une archive intégrale des pages ou PDF de tiers.

## Liens externes

`pnpm sources:check`, après `pnpm build`, contrôle les sources du catalogue, les sources déclarées des guides et les liens d’achat directs effectivement rendus. Les URL communes sont dédupliquées en conservant les références impactées. Une empreinte de l’inventaire permet de rattacher le rapport au corpus exact, en plus du SHA Git porté par l’exécution CI.

Le workflow `Source link health` se déclenche sur les modifications concernées de `main`, chaque lundi à 06:17 UTC et à la demande. Quatre hôtes au maximum sont interrogés simultanément ; les requêtes d’un même hôte restent séquentielles. Les liens internes sont contrôlés hors réseau par `audit:dist` à chaque validation.

- Un `HEAD` en erreur 404, 410, 405 ou 501 est vérifié par `GET`.
- Un lien déclaré mort doit encore répondre 404 ou 410 à une seconde vérification `GET`.
- Un service répondant toujours en erreur après une seconde tentative est signalé comme indisponible, séparément des liens morts.
- Les refus d’accès 401/403, limites 429, autres codes 4xx hors 404/410, erreurs DNS et délais dépassés restent non vérifiés. Ils ne deviennent ni des liens morts ni des sources valides. Un audit entièrement non vérifiable échoue.
- Les redirections sont bornées et revalidées. HTTP, identifiants dans les URL, adresses privées et métadonnées réseau sont refusés. La connexion est épinglée à l’adresse IP publique vérifiée, avec validation TLS du nom d’origine. Les corps des réponses sont interrompus : aucun téléchargement intégral de PDF n’est nécessaire.

Le contrôle vérifie l’accessibilité HTTP, pas la permanence du contenu : une page d’erreur répondant 200 ou une fiche modifiée requiert encore une relecture documentaire.

## Signalement des anomalies

Une anomalie confirmée provoque l’échec du contrôle GitHub et conserve `source-health-report.json` comme artefact pendant 30 jours, avec URL, statut, version de l’inventaire et références concernées. Aucun message de succès, courriel, commentaire ou issue n’est créé par ces workflows. Les préférences personnelles de notification GitHub restent distinctes des contrôles du dépôt.

La disponibilité du site, des snapshots et du MCP est vérifiée chaque jour à 05:23 UTC par le workflow existant `Production availability`, avec trois nouvelles tentatives en cas d’erreur. Ces contrôles n’utilisent aucun modèle IA et ne consomment aucun jeton d’inférence.

Un lien cassé ne modifie jamais automatiquement une valeur FAD ou un verdict. Corriger la référence ou ajouter une nouvelle observation documentée, conserver l’historique précédent, puis relancer les contrôles.
