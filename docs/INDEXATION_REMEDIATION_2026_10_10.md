# Cadence et contrôles d’admission du 10 octobre 2026

L’utilisateur demande des plafonds de 10 guides, 30 compresseurs et 60 outils par jour civil en Europe/Paris. La politique remplace les anciens plafonds 2/2/6 ; les seuils de similarité, le plafond de diversité de 25 %, la base initiale, l’absence de rattrapage et les contrôles éditoriaux restent conservés. Ces plafonds ne garantissent ni un volume quotidien effectif ni une absence de pénalité Google.

## Préparation avant approbation

L’ancienne séquence de l’automatisation demandait `seo:prepare`, puis arrêtait le passage si `released=0`, avant la revue. Le garde-fou positif introduit le 8 octobre retourne précisément zéro sans revue actuelle. La nouvelle commande `seo:review-plan` prépare une liste à lire sans manifeste de release ni permission de publier. La revue de cette liste doit ensuite être versionnée ; `seo:prepare` et le checkpoint vérifient encore le lot exact, ses empreintes, sa base publique et sa date.

L’automatisation existante conserve son horaire quotidien de 20 h 15. Elle exige la politique 10/30/60, prépare cette proposition, assure la revue réelle et ne publie que les décisions effectivement approuvées. Un diagnostic partiel de source ne vaut jamais contrôle complet.

## Lot actuel refusé

La commande a proposé 100 pages le 10 octobre depuis la production `0e83104f633e45164e4609675af940064b3cecb8` : exactement 10 guides, 30 compresseurs et 60 outils. Huit fiches portent encore les empreintes complètes du [refus documenté du 8 octobre](INDEXATION_EDITORIAL_REVIEW_2026_10_08.md) :

- ABAC FORMULA E 11 10 400/50 : FAD exact non revalidé, masse et désignation divergentes.
- FIAC AX 153BD 8 400/50 CE : apport propre absent et écart documentaire de la version DRY non résolu.
- Hymair ASH-01 : consommation moyenne non qualifiée et décision propre absente.
- Draper 28366 : débit absent et inventaire sans décision autonome.
- Asturomec N4 50173 : consommation absente et comparaison pratique manquante.
- Astro Pneumatic HVLP503 : consommation moyenne seule et indisponibilité non traitée.
- SATA jet X HVLP 1,2 I BASIC 1200097 : contradiction des valeurs de débit non arbitrée pour cette référence.
- Asturomec PS 50210 : consommation absente et compromis d’usage non développés.

Ces refus sont reconduits par comparaison d’empreinte, sans prétendre à une nouvelle vérification positive des sources primaires. Le registre du jour est bloqué. Les huit fiches et les six pages d’usage correspondantes rejoignent les 34 chemins déjà retenus, soit 48 chemins protégés. La sélection de remplacement du jour n’est pas approuvée. Les 92 autres pages de la proposition ne sont pas déclarées relues ou approuvées. Cette intervention ne publie aucune nouvelle admission.

## Santé des sources

Le contrôle GitHub `37855582052`, daté du 8 octobre à 23:34:56 UTC, signalait 140 réponses 404 sur Stuermer et 752 URL non vérifiées. Une fiche s’affichait dans le navigateur interne le 9 octobre, sans statut HTTP observé. Le 10 octobre, les contrôles directs de l’ancienne URL et du nouvel emplacement officiel trouvé expirent sans réponse. La navigation du navigateur interne expire également. Ces observations ne permettent ni de confirmer une disparition de toutes les sources ni d’effacer les anomalies.

Le contrôle ajoute un mode de diagnostic limité à une URL exacte de l’inventaire versionné. Les protections DNS public, TLS, HTTPS, redirections et confirmations GET restent identiques. Le rapport porte `scope.kind: single-url` ; un succès ne valide jamais l’inventaire complet. Le workflow manuel accepte la même entrée, transmise par variable et argument shell cité, sans interpolation de l’entrée dans le script.

Le [catalogue ALMiG](https://www.almig.de/fileadmin/user_upload/Prospekte/Schraubenbroschuere/ALMiG_Screwcpressor_catalog_20260706_en.pdf) a été téléchargé le 10 octobre en HTTPS avec réponse 200 : 4 383 400 octets, SHA-256 `f5ca167dedaab25352808dc5001ba9badc7acffb2c37168c6d9f89182b752a0e`, identiques à la capture du 30 septembre. Le rétablissement est enregistré avec son incident historique. Toute nouvelle erreur ou tout changement d’URL continue de lever une anomalie ; aucune nouvelle 404 ne réutilise l’acquittement de l’ancien incident.

Les rapports locaux et tests constituent une validation des modifications ; l’activation doit être prouvée séparément par le workflow et le SHA public. Aucun résultat d’indexation effective dans Google n’est revendiqué.
