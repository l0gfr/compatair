# Source-tests du 17 novembre 2026

Le job source-tests du run 44042298300, révision 13533a5ac75d4a0fc0afe65fcbf529e7e280d1c8, s’est arrêté sous Node 24.22.2 pendant `audit:page-value`, avec `Check failed: jit_page.has_value()` et le code 133. Les contrôles catalogue et sources éditoriales précédents avaient réussi. Ce message est un crash natif V8 ; aucune assertion éditoriale n’a été supprimée. La cause interne précise de V8 n’est pas établie.

Le collecteur importait nativement les 25 246 modules produit dans des workers successifs. Désormais, les 24 502 fichiers utilisant l’enveloppe JSON typée versionnée sont décodés par `parseCatalogProductSource`, déjà utilisée dans le dépôt. Les 744 modules historiques, notamment les fabriques, conservent leur import natif. Une enveloppe typée malformée échoue sans repli vers l’évaluation de code.

Les lots de 1 024 produits, les limites mémoire de chaque worker, le refus des limites V8 héritées excessives, l’ordre des fichiers et tous les contrôles éditoriaux sont conservés. Aucun délai, budget, seuil ou dépendance n’a été changé pour cette correction.

La comparaison exhaustive avant/après porte sur les valeurs complètes et l’ordre des 46 052 candidates. Elle est identique. Les 79 tests ciblés du planificateur, des réserves et du format produit passent, notamment le rejet d’une enveloppe malformée et d’une limite mémoire contournée. L’audit complet page-value termine avec zéro échec structurel. Ces résultats locaux ne remplacent pas la validation de source-tests sur le runner Linux.

Les preuves de travail sont conservées hors Git dans `/tmp/compatair-remove-analytics-20261117-evidence` : `collector-parity.json`, `collector-tests.log` et `page-value.log`. L’unique nouvelle construction CI autorisée doit valider la correction avant toute activation.
