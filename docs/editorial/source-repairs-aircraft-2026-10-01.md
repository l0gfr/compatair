# Sources Aircraft : adresses canoniques et anomalies restantes

Le contrôle global du 1er octobre 2026, exécuté sur la révision `1447bf1664d5f99ee82bd137e515d95fa0679495`, a relevé 107 réponses HTTP 404 chez Stürmer, deux réponses 502 chez Metabo et une réponse 503 chez Atlas Copco. Ces anomalies concernent des sources antérieures au lot de 30 guides, 200 configurations de compresseurs et 1 000 outils du même jour. Aucune des 1 200 nouvelles références ni des 30 nouveaux guides ne figure parmi ces anomalies.

## 148 citations sous leur adresse canonique

148 pages répondent HTTP 200 sous leur adresse canonique dans la rubrique « Compressed air technology » du site officiel Stürmer. Elles couvrent 105 des 107 erreurs 404 initiales et 43 autres citations de la même rubrique, examinées afin de ne pas attendre une nouvelle anomalie. Pour chaque page, le modèle, la référence fabricant et l'ensemble des champs du tableau technique conservés dans le relevé versionné du 27 septembre 2026 ont été comparés. Aucune différence de valeur n'a été observée. Chaque réponse HTML possède une empreinte SHA-256 dans le registre de réparation.

Seules les adresses de citation et de provenance des cartes techniques ainsi que la date de consultation de ces preuves changent. Les entrées du moteur, les caractéristiques, les textes et les fichiers image sont conservés. Une capacité de remplissage reste distincte du FAD ; les consommations moyennes des outils gardent leurs limites pour l'usage continu.

148 événements de correction sont ajoutés à l'historique. Son préfixe antérieur reste inchangé. Les relevés sources de septembre sont conservés dans les imports d'origine.

## Quatre anomalies et un contrôle non concluant

Les anciennes fiches Aircraft AIRBOY SILENCE 221 OF E (`2000206`) et AIRSTAR 503/100 (`2009531`) renvoient 404. Leurs adresses canoniques candidates renvoient également 404, avec l'agent de contrôle et avec un agent de navigateur. Les pages Aircraft retrouvées dans les résultats de recherche renvoient elles aussi 404 lors de leur récupération directe. Un résultat de recherche conservé en cache ne suffit pas à certifier une source actuellement consultable. Aucune nouvelle adresse n'est attribuée à ces deux preuves.

La fiche Metabo Basic 280-50 W OF (`601529000`) en slovaque et le PDF autrichien 2023 renvoient toujours 502 au recontrôle. La fiche Atlas Copco LGB34 S007 (`8421031172`) répond de nouveau 200. Une indisponibilité actuelle ne réfute pas le relevé technique historique ; elle ne vaut pas non plus une nouvelle vérification des valeurs.

L'ancienne citation Aircraft ISS-C ½″ Compact PRO (`2401470`) a expiré au recontrôle sécurisé. Son adresse canonique candidate renvoie 404. Le statut de l'ancienne citation reste `unverified` ; son adresse et son relevé sont conservés. Aucune disponibilité actuelle n'est certifiée pour cette référence.

Le contrôle global des sources reste en anomalie tant que ces quatre cas ne sont pas résolus. Ses seuils, contrôles TLS et classifications HTTP ne sont pas assouplis. Le rapport détaillé est `source-repairs-aircraft-2026-10-01.health.json` ; il distingue les citations réparées, les erreurs restantes et la source rétablie.

Sources et traçabilité :

- [Contrôle global GitHub Actions](https://github.com/l0gfr/compatair/actions/runs/36914066603)
- [Stürmer, AIRBAU 652/100 B PRO, exemple d'adresse canonique vérifiée](https://www.stuermer-machines.com/compressed-air-technology/compressed-air-technology-piston-compressors/airbau-652100-b-pro-2006530/)
- `src/data/imports/source-url-repairs-aircraft-2026-10-01.json` : 148 correspondances, empreintes des réponses et entrées techniques préservées.
- `src/data/imports/catalog-compressors-2026-09-27.json` et `catalog-tools-2026-09-27.json` : relevés fabricant initiaux.
