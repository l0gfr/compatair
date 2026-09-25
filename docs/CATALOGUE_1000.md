# Extension du catalogue à 1 000 références

Lot du 25 septembre 2026 : 250 outils Fuji supplémentaires. Le catalogue compte 239 compresseurs et 761 outils. Les 750 références précédentes sont conservées.

## Contenu du lot

- 179 meuleuses ;
- 49 perceuses ;
- 10 clés à chocs ;
- 8 ponceuses à bande ;
- 4 ponceuses rotatives, dont une verticale.

Chaque ajout possède un MPN constructeur distinct, une consommation en charge publiée, une pression documentée et des caractéristiques mécaniques ou de raccordement propres. Les profils techniques identiques et les coffrets ne créent pas de nouvelles références.

## Sources et reproduction

`src/data/imports/fuji-reviewed-2026-09-25.json` conserve les valeurs brutes, leurs unités, les identifiants exacts, la date du relevé, les empreintes des fiches constructeur et les liens documentaires. L'import utilise uniquement des fiches individuelles au statut actif dans le catalogue international Fuji.

La pression vient d'une notice explicitement liée à la fiche ou rattachée au MPN exact dans son portail documentaire officiel. Les pages PDF utilisées ont été examinées visuellement. `scripts/lib/fuji-pressure-notices.mjs` conserve leur URL, leur empreinte, leur page et la nature de la pression : pression de travail ou pression de référence du tableau de performances. Une simple limite générique sans pression de travail explicite n'est pas utilisée.

La conversion est exactement L/s × 60 = L/min. Le contrôle croisé avec les CFM bloque les contradictions dépassant la tolérance d'arrondi. La consommation à vide reste séparée et fait l'objet d'une limite explicite lorsqu'elle dépasse la consommation en charge. Aucun facteur d'intermittence n'abaisse arbitrairement le besoin calculé.

Les fiches à débit ambigu, sans preuve de pression ou au profil déjà retenu figurent dans les exclusions du relevé. Les notices japonaises exprimées en MPa sont converties en bar selon les unités SI ; les équivalences approximatives imprimées en kgf/cm² ne servent pas au calcul.

Le script d'import est hors ligne. Ses tests vérifient l'identité, le statut, les unités, la chaîne documentaire, la déduplication et l'égalité complète entre les 250 fiches et les données versionnées. `scripts/render-fuji-catalog-cards.mjs` produit les visuels techniques à partir des mêmes données.

## Surfaces publiques

Les ajouts alimentent 250 fiches outil et 250 pages « quel compresseur pour », ainsi que la recherche, les répertoires paginés, le calculateur et les exports. Le périmètre passe à 181 879 combinaisons explorables, dont 179 250 verdicts fixes et 2 629 combinaisons paramétriques. Le moteur de compatibilité est inchangé ; ces combinaisons ne deviennent pas chacune une URL.

Les caractéristiques sont des déclarations constructeur, pas des mesures physiques réalisées par CompatAir. La disponibilité en France et la configuration réellement livrée doivent être confirmées auprès du fournisseur. Aucune offre commerciale ni disponibilité marchande n'est inventée.

## Taille et contrôles de publication

Le build mesuré contient 2 069 pages et 1 953 URL canoniques. L'artefact pèse 206 Mo, dont 63 Mo de HTML ; le catalogue calculateur pèse 55 Ko gzip et l'index de recherche 46 Ko gzip. Les budgets de l'artefact et du catalogue calculateur passent respectivement à 224 Mo et 64 Ko gzip. Les budgets HTML, JavaScript, recherche et liens par page sont conservés. Le contrôle Lighthouse reste obligatoire avant le push sur `main`.

Les 750 objets produit précédents ont été comparés intégralement au snapshot construit : aucun changement. Les 969 événements de preuve existants sont conservés dans leur ordre initial ; 500 événements de source sont ajoutés.

Les identifiants déjà présents dans la valeur et l’identifiant d’une suggestion du calculateur ne sont plus dupliqués dans son attribut de recherche. Ils sont reconstruits côté client ; un test vérifie l’égalité de l’ensemble des identifiants pour chacune des 1 000 références. Ce compactage réduit le HTML du calculateur d’environ 100 Ko, soit 10 Ko gzip. Les petits CSS sont intégrés au HTML pour éviter une requête bloquante supplémentaire, tandis que les scripts et images restent externes. Le contrôle Lighthouse ciblé mesure un LCP médian de 2,41 s, sous le seuil inchangé de 2,5 s.

Le service MCP lit progressivement le snapshot de 179 250 verdicts et partage son index entre les trois profils et l’API HTTP. Les avertissements identiques sont mutualisés. `pnpm benchmark:mcp-startup`, intégré à `validate:full`, vérifie l’égalité octet pour octet du snapshot, la santé HTTP, les verdicts de l’API et un pic mémoire inférieur aux 256 Mo du service. Le test utilise un tas V8 plafonné à 128 Mo et des semi-espaces de 4 Mo ; les protections et la limite mémoire du service de production restent inchangées.
