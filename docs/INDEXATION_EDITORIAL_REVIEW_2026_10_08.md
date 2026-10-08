# Revue des admissions proposées le 8 octobre 2026

La production, `main` et le manifeste SEO observés au départ servent `cf46ffaac88d9a4c05c4cda47573175bfbe7cdf3`. La politique reste `schemaVersion:2`, non suspendue, avec les plafonds quotidiens `2/2/6` en Europe/Paris. Le plan mécanique propose dix pages historiques. Leur relecture refuse les deux compresseurs et les six outils ; aucune URL de remplacement n’est retenue et aucune admission n’est ouverte. Les 34 chemins déjà protégés et les lots historiques restent conservés.

## Décisions documentaires

| Page | Décision et apport manquant |
| --- | --- |
| ABAC FORMULA E 11 10 400/50 | La référence 4152025398 existe dans le JSON primaire actuel, mais son FAD historique n’y apparaît plus. Masse et désignation divergent. Les points des variantes voisines ne résolvent pas ces écarts. Admission refusée. |
| FIAC AX 153BD 8 400/50 CE | FAD 1 075 L/min, maximum 8 bar, montage sans cuve et puissance 11,2 kW revalidés. Le texte n’apporte pas de décision autonome face aux variantes ; l’écart de la version DRY n’est pas résolu. Admission refusée. |
| Hymair ASH-01 | Moyenne 6,5 cfm sans pression de mesure qualifiée. Les différences de godet et de jet des voisins ne sont pas développées en décision propre. Admission refusée. |
| Draper 28366 | Identité et pression confirmées ; débit absent. L’inventaire retouche/grand godet ne dimensionne pas le compresseur et ne fournit pas une réponse autonome. Admission refusée. |
| Asturomec N4 50173 | Canon, commande et plage de pression documentés ; consommation absente. Comparaison pratique avec N4/S et N4/S SUPER manquante. Admission refusée. |
| Astro Pneumatic HVLP503 | Moyenne 10 cfm sans débit de pulvérisation qualifié ; le fabricant signale désormais l’indisponibilité du produit. La fiche actuelle ne traite pas ce changement ni un choix propre. Admission refusée. |
| SATA jet X HVLP 1,2 I BASIC 1200097 | Référence exacte confirmée. Les 445 Nl/min du catalogue, 430 Nl/min à 2 bar de la notice et 420 l/min d’une fiche voisine ne sont pas arbitrés pour cette configuration. Admission refusée. |
| Asturomec PS 50210 | Buse et plage de pression confirmées ; aucun débit. Le diamètre de buse ne donne pas une consommation d’air mesurable. Compromis avec PS/S et PS/I non développés. Admission refusée. |
| By-pass de sécheur pendant maintenance | Réponse propre sur continuité de circulation et perte du séchage, vérifiée dans la notice BEKO RA III et l’option trois vannes. Contenu utile ; pas d’admission séparée dans le lot refusé. |
| Choisir un distributeur par son débit nominal | Réponse propre sur les conditions d’essai et de substitution. Locator VTUG corrigé de la page 8 à la page 126 du PDF actuel. Contenu utile après correction ; pas d’admission séparée dans le lot refusé. |

Les sources, observations HTTP, empreintes SHA-256, pages de notices et voisins examinés sont conservés dans [le dossier de sources](./INDEXATION_EDITORIAL_REVIEW_2026_10_08.sources.json). Les originaux complets restent privés. Cette revue est documentaire et interne ; elle ne constitue ni un essai physique ni une expertise externe. Les faits historiques des huit produits ne sont pas remplacés par des valeurs actuelles attribuées à une variante voisine.

## Contrôle permanent des admissions

`config/indexation-editorial-reviews.json` conserve la proposition exacte, l’empreinte complète de chaque entrée, l’empreinte du corpus comparé, le SHA public observé, la politique et les décisions. Le build exige désormais une revue positive du jour et des mêmes contenus. Modifier un voisin ou ajouter une référence exige aussi une nouvelle comparaison du corpus. Une absence, un refus, une modification du contenu, une proposition différente ou un changement de production n’ouvre aucun lot. Le checkpoint de déploiement vérifie indépendamment les nouvelles admissions.

La publication du nouveau lot de 30 guides, 200 compresseurs et 1 000 outils demeure possible sous les règles existantes : pages accessibles et maillées, en attente `noindex,follow`, hors sitemap. Les contrôles unitaires portent sur absence de revue, refus sans substitution, empreintes modifiées, sélection partielle ou différente, changement de SHA/politique, date parisienne, aperçu hors ligne et conservation de l’historique. Aucun plafond ni état de pause n’est modifié.
