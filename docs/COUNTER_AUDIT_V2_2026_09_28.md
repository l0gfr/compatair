# Corrections du contre-audit v2, 28 septembre 2026

Base contrôlée : `1184e66a17f078309b16f5db5b6dce2807f87062`. Moteur corrigé : `1.4.2`.

## Pression déclarée

Le dimensionnement refuse les seuils inversés ou égaux, ainsi que les seuils dépassant la pression maximale. Les schémas de dimensionnement et de passeport partagent ces invariants avec le noyau numérique.

Un FAD suffisant ne garantit plus un verdict continu si le réenclenchement déclaré est inférieur au besoin, pertes de pression mesurées comprises, ou si un seul seuil est déclaré. Le résultat reste `insufficient_data` avec un facteur pression et une explication. Un déficit documenté de pression ou de débit exact reste conclusif. Les dossiers sans seuils ne reçoivent aucun réglage inventé. Les verdicts catalogue restent limités à leurs caractéristiques documentées.

Les cas synthétiques couvrent : besoin 6,3 bar avec réenclenchement 4 bar, limite exacte 6,3 bar, pertes mesurées, plage partielle, seuils 9/8 bar, seuil supérieur à la machine, déficit de FAD et témoins valides. Ces tests logiciels ne sont pas des mesures physiques. Le calculateur affiche le maintien de pression à vérifier sans redemander un FAD déjà renseigné.

## Priorité éditoriale

Le rapprochement exige tous les termes significatifs et toutes les quantités avec leurs unités. Les requêtes courtes, les chiffres seuls, les décimales, les marques et les modèles restent discriminants. Une page comparative peut contenir plusieurs quantités. Les correspondances restent des candidats lexicaux, jamais une mesure de volume, de position Google ou de pertinence exhaustive. Le choix conservateur peut omettre des synonymes : une telle omission est préférable à une priorité attribuée à une autre référence.

## Preuves

Le répertoire affiche des « entrées de preuve » dans les compteurs et la pagination. Une entrée peut citer un document déjà utilisé pour un autre champ, produit ou emplacement. Aucun nouveau compteur de documents indépendants n’est publié sans définition et déduplication adéquates. Le rapport JSON précise `counting_unit: distinct_evidence_id` et expose `evidence_entry_counts`. Le champ historique `document_counts` est conservé comme alias explicitement déprécié pour les intégrations existantes.

## Télémétrie MCP

Le rapport conserve les marges historiques enregistrées. Il distingue désormais :

- `reconciliation.totals` : cohérence des sommes et des marges par outil ;
- `reconciliation.joint` : cohérence et couverture du croisement trafic × outil × résultat ;
- `classified_calls` et `unclassified_calls` : cohortes dont la ventilation complète est connue ou absente.

Le statut général devient `partial` quand l’historique manque de ventilation, `consistent` quand elle est complète et cohérente, et `inconsistent` si les compteurs se contredisent. `ratesAvailable` reste vrai pour des marges cohérentes avec un historique partiel ; une contradiction supprime les taux dérivés. Les cellules connues doivent rester compatibles avec les marges de chaque outil. Le reliquat doit correspondre exactement au nombre d’appels historiques non classés. Aucune distribution ancienne n’est reconstituée artificiellement.

La page `/agents/` indique la couverture et la limite des 20 lignes affichées. Le contrôle HTTP de déploiement vérifie les deux périmètres de réconciliation.

## Liens de sources

Le run [36352393857](https://github.com/l0gfr/compatair/actions/runs/36352393857), sur la base contrôlée, avait constaté 3 069 URL accessibles, 5 indisponibles (HTTP 502 Metabo), 71 non vérifiées, aucune classée cassée, sur 3 145 URL. Son artefact est daté du 27 septembre à 22:13:04 UTC.

Le contrôle ciblé ultérieur des cinq URL, réalisé avec le contrôleur HTTPS du projet, donne les résultats ci-dessous. Un statut HTTP 200 confirme seulement leur accessibilité au moment du contrôle ; il ne recertifie pas chaque valeur du document. Les liens et les archives techniques sont conservés.

Contrôle ciblé : `2026-09-28T11:11:14.566Z`.

- [https://www.metabo.com/t3/fileadmin/metabo/at/070_aktuell/02_kataloge_logos/Druckluft-Kompetenz-Broschuere_2016.pdf](https://www.metabo.com/t3/fileadmin/metabo/at/070_aktuell/02_kataloge_logos/Druckluft-Kompetenz-Broschuere_2016.pdf) : HTTP 200, `reachable`.
- [https://www.metabo.com/t3/fileadmin/metabo/com_en/070_news/03_catalogue_logos/201605_Druckluftkompetenz_en.pdf](https://www.metabo.com/t3/fileadmin/metabo/com_en/070_news/03_catalogue_logos/201605_Druckluftkompetenz_en.pdf) : HTTP 200, `reachable`.
- [https://www.metabo.com/t3/fileadmin/metabo/uk/070_news/03_catalogue_logos/METABO_CORDED_RANGE_2025_A5_web_version.pdf](https://www.metabo.com/t3/fileadmin/metabo/uk/070_news/03_catalogue_logos/METABO_CORDED_RANGE_2025_A5_web_version.pdf) : HTTP 200, `reachable`.
- [https://www.metabo.com/ua/uk/instrumenty/pnevmatyka/pnevmatychni-instrumenty/pnevmatychni-vidbiini-molotky/dmh-30-set-604115500-pnevmatychnyi-vidbiinyi-molotok.html](https://www.metabo.com/ua/uk/instrumenty/pnevmatyka/pnevmatychni-instrumenty/pnevmatychni-vidbiini-molotky/dmh-30-set-604115500-pnevmatychnyi-vidbiinyi-molotok.html) : HTTP 200, `reachable`.
- [https://www.metabo.com/za/en/tools/compressed-air/compressed-air-tools/air-screwdriver/ds-14-604117000-air-screwdriver.html](https://www.metabo.com/za/en/tools/compressed-air/compressed-air-tools/air-screwdriver/ds-14-604117000-air-screwdriver.html) : HTTP 200, `reachable`.

Les futurs contrôles GitHub publient un résumé borné avec les URL, états, erreurs et références concernées. Le rapport JSON complet reste disponible dans l’artefact en cas d’échec. Les erreurs TLS, limitations d’accès et délais dépassés restent non concluants ; les protections réseau restent actives.

## Limites conservées

Aucun classement Google ni trafic concurrentiel n’a été inventé. Le panel de 100 requêtes demeure une hypothèse éditoriale, avec des observations vides tant qu’aucune mesure datée n’est disponible. La qualification complète à 100 000 références ne découle pas d’un benchmark synthétique sur deux profils : elle nécessite des mesures séparées de construction, publication, restauration, mémoire et stockage. Ce correctif ne revendique pas cette qualification.

## Contrôle du catalogue existant

Comparaison exhaustive avec le noyau de la base contrôlée : 7 110 609 couples fixes, aucun changement de verdict, de confiance, de facteur limitant ou d’avertissement. Les 1 882 456 verdicts conclusifs sont conservés (1 417 292 continus et 465 164 incompatibles). Ce contrôle concerne les profils fixes du catalogue, distincts des configurations personnalisées corrigées ci-dessus. Le code commun et certains libellés ont été raccourcis pour conserver les budgets JavaScript existants.
