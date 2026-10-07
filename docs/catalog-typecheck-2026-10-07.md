# Typage du catalogue statique, 7 octobre 2026

Les fiches JSON statiques utilisent maintenant deux contrats communs, `CompressorInput` et `ToolProfileInput`, issus de `z.input` des schémas réels du catalogue. L’annotation réduit les types distincts inférés pour des milliers de fiches et conserve les contrôles TypeScript de structure et de valeurs énumérées. Le moteur et l’application restent stricts ; les validations Zod, les contraintes numériques et les contrôles de sources restent exécutés aux frontières existantes.

22 658 fiches ont reçu uniquement un import de type et une annotation. Le contrôle privé avant/après des objets sérialisés confirme leur identité, sans modification de valeur. Les 746 fichiers non JSON rencontrés, dont les enveloppes de factories et les index, sont restés identiques dans cette migration. Les imports et nouvelles fiches postérieurs à cette photographie sont contrôlés par leur propre lot.

Le sérialiseur commun `buildCatalogProductSource` produit le même contrat pour les ajouts futurs. Les générateurs existants et leurs tests de lecture ont été adaptés. Le lecteur de test décode une enveloppe JSON déterminée, sans exécuter son contenu. Les quatre fixtures SEO accèdent aux produits après validation du schéma.

Une sentinelle de compilation privée a remplacé une seule confiance documentée par `invented` : TypeScript l’a rejetée avec TS2322. Les identités des données et les tests du lecteur ont également été vérifiés.

Le contrôle Astro complet a ensuite réussi sous Node 24 : **24 660 fichiers, zéro erreur, zéro avertissement, dix indications informatives**, après intégration des 200 compresseurs, 1 000 outils et 30 guides. Les mesures exploratoires de mémoire et de temps réalisées séparément sous Node 26 ne mesurent pas les performances de la CI sous Node 24. Aucun gain chiffré de build ou de CI n'est établi par cette migration. Aucun relèvement de limite mémoire, exclusion de fichiers ou assouplissement de validation n'a été introduit.
