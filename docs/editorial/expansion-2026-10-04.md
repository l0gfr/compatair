# Extension documentaire du 4 octobre 2026

Le lot ajoute 30 guides, 200 identités marque/modèle de compresseur et 1 000 profils d’outils. La base de comparaison est le commit `4982bf0c95fcec9c553093af93ca305ce856a595`. Les totaux intégrés deviennent 3 619 configurations de compresseur, 2 305 identités marque/modèle normalisées, 16 087 outils et 626 guides. Une configuration et une identité de modèle sont deux unités distinctes.

## Compresseurs

Hertz : 47 ; Dalgakiran : 39 ; SIL-AIR : 39 ; KTC : 38 ; Lupamat : 33 ; Champion : 3 ; JUN-AIR : 1. [Hertz se présente comme une marque de Dalgakiran](https://www.hertz-kompressoren.com/en/company/about-us/) : ces sept marques ne représentent pas sept groupes industriels indépendants.

161 profils disposent d’un FAD à pression connue. Les 27 valeurs d’aspiration ou de déplacement et les 12 capacités sous pression dont la méthode FAD n’est pas qualifiée restent hors des courbes FAD. Un cycle de service explicite est disponible pour 31 profils seulement. La présence d’un FAD ne permet donc pas, à elle seule, de conclure à un fonctionnement continu.

Une seule configuration de pression est retenue par modèle. Les autres lignes de pression ne deviennent ni de nouvelles identités ni une courbe interpolable. Le montage sans stockage intégré est démontré par la source ; une cuve inconnue ne devient pas zéro. Les fréquences 50 et 60 Hz restent séparées. Les 548 litres de certains Lupamat MIT/MITK ne sont pas arrondis à 500 litres.

Les huit PDF originaux ont été capturés le 4 octobre, avec HTTP, URL finale, taille et SHA-256. L’import versionne les tableaux, pages et cellules utilisés. Les fichiers originaux restent dans l’archive privée.

## Outils

ProWin : 463 ; Taylor Pneumatic : 238 ; Guardair : 178 ; Sagola : 92 ; FAR : 10 ; Festool : 6 ; GAV : 5 ; Walcom : 4 ; Hutchins : 2 ; 3M : 2. Les 1 000 profils comportent 990 références fabricant et dix identités de modèle sans SKU établi ; ces dernières n’ont pas de MPN inventé.

133 points fixes sont utilisables : 118 soufflettages continus Guardair mesurés à 100 psi et quinze points Sagola dont la pression et le régime de pulvérisation sont documentés. Les 867 autres profils restent `variable-volume` et produisent `insufficient_data` sans besoin utilisateur explicite. La consommation nominale Festool LEX 3 et le minimum d’alimentation de 350 L/min à 6 bar sont conservés séparément. Ce minimum ne devient pas une consommation nominale.

Le contrôle croisé a corrigé les cellules Sagola HEX HVLP à 1,8 bar et les tableaux ProWin qui comportent deux modèles. Les coffrets, plateaux vendus séparément et références aux valeurs contradictoires détectées sont exclus de la sélection. Les unités et pressions absentes des fiches Taylor ne sont pas déduites du maximum de 90 psi.

Les 251 réponses originales retenues ont été vérifiées sur disque avec leurs empreintes de corps. Les empreintes `reviewedSourceSha256` et `reviewedRowSha256` de la factory portent les blocs JSON revus, distincts du SHA des octets HTTP.

## Guides et maillage

Les 30 guides traitent notamment du minimum d’alimentation Festool, des débits contradictoires SATA, des chapeaux Sagola, des commandes de clouage, des emmanchements Nitto, de l’entretien CP9883, des profils CEJN, de l’ionisation EXAIR et des conditions de débit des compresseurs. Chaque guide possède une figure SVG responsive. Les calculs pédagogiques sont explicitement des scénarios ; aucun essai physique ni validation professionnelle externe n’est revendiqué.

Le ledger `guides-2026-10-04.sources.json` relie 69 affirmations documentaires ou calculs aux 26 sources originales utilisées. Le ledger de maillage trace 30 liens contextuels ajoutés à 22 guides anciens, dont les dates et le frontmatter sont préservés. Les nouveaux textes comportent des liens vers les fiches exactes pertinentes.

La date de capture d’une source n’atteste pas une nouvelle édition fabricant. Les anciennes fiches produit et leurs dates de preuve ne sont pas réécrites par cette extension. L’historique de preuve et le registre des MPN sont étendus.

## Publication et budgets

L’extension conserve la politique d’indexation de deux guides, deux compresseurs et six outils par jour civil à Paris. Le lot quotidien déjà ouvert le 4 octobre est préservé : cette maintenance n’ouvre pas un second lot. Les nouvelles pages en attente restent accessibles avec `noindex, follow`, hors sitemap.

La compression du paquet utilise deux threads au maximum, un dictionnaire de 128 Mio et une limite de mémoire de 5 Gio sans réduction silencieuse du dictionnaire. Le contrôle du nouveau paquet exact reste obligatoire à 192 Mio. Les caches de calcul et de pages restent bornés respectivement à 64 et 384 Mio. Les mesures de la release précédente ne sont pas présentées comme celles de cette extension.

Le gel documentaire, les validations locales, les résultats CI et l’activation publique sont des états distincts. Cette note décrit le contenu intégré ; elle ne constitue pas une preuve de déploiement. Seul `main` peut activer la production après ses contrôles.
