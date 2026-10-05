# Extension documentaire du 5 octobre 2026

Base de comparaison : `21014edebb8e108bcdfbe3a86e54b69c0cf8503f`.
Ajouts : 300 modèles de compresseurs, 2 000 références d'outils et 30 guides.
Les références sont comparées au catalogue existant avant admission ; kits,
accessoires et variantes de pression ne constituent pas des modèles supplémentaires.

## Compresseurs

Le lot couvre 11 marques et 137 captures primaires, dont la table de conversion
NIST. Les cellules, citations, pages et transcriptions visuelles nécessaires
sont versionnées dans `src/data/imports/documented-compressors-2026-10-05.json`.
Les empreintes des réponses originales, des extraits et des interprétations
sont vérifiées par le factory et ses tests.

La pression de mesure du FAD reste distincte de la pression maximale ou du
plafond de la configuration retenue. Un minimum de régulation VSD reste une
caractéristique séparée de la capacité maximale. Le débit aspiré et le débit
de remplissage ne remplacent pas la colonne de débit livré. Les séparateurs
numériques anglais sont explicitement attachés aux cellules concernées.
Le suffixe constructeur `+` reste distinct du modèle de base.

Seuls les trois Kaishan OX ont un cycle de service de 100 % explicitement
qualifié dans ce lot. Les autres cycles inconnus restent absents. Les
configurations nord-américaines ou australiennes ne démontrent aucune
disponibilité française, ni équivalence électrique implicite à 50 Hz.

## Outils

Le lot couvre 19 marques. Les cellules documentaires et leurs limites sont
conservées dans `src/data/imports/documented-tools-2026-10-05.json`.
Le comptage distingue modèle constructeur et numéro de pièce. Les racines
AP/RP potentiellement communes à Aeropro et Rongpeng sont exclues lorsqu'une
indépendance physique n'est pas établie ; aucun alias général n'est inventé.

Les 1 999 profils sans consommation suffisamment qualifiée restent
`variable-volume`, sans pression nominale ou débit injectés dans le moteur.
Les caractéristiques publiées, consommations moyennes et plages de service
restent consultables avec leurs sources. Une preuve documentaire liée à un
champ inconnu ne constitue pas une qualification numérique de ce champ.

Le Paslode F325R, référence 513000, est qualifié `per-action` au seul point
annoté de 0,090 SCF par fixation à 100 PSIG, page PDF 10 de sa notice. La plage
de service est présentée séparément. Les conversions géométriques et de
pression citent NIST ; elles ne corrigent pas l'état thermodynamique du volume
standard. Le débit moyen exige une cadence explicitement saisie.

Les pinces coupantes Nile et les pistolets automatiques Graco disposent de
catégories distinctes. Les corps incomplets de pistolet ne sont pas comptés
comme des outils complets.

## Guides et publication

Les 30 guides répondent à des problèmes propres aux équipements : profils de
raccords, ponçage, cadence de clouage, réglage de rivetage, stockage, fréquence
électrique, plages VSD et lecture des données CAGI. Les liens vers des fiches
produits concernent le modèle exact. Les figures et calculs sont contrôlés
contre les sources ; aucun essai physique ni avis d'expert externe n'est revendiqué.

L'ajout au catalogue ne constitue pas une admission massive à l'indexation.
La politique quotidienne de Paris reste à 2 guides, 2 compresseurs et 6 outils.
Le lot du 5 octobre étant déjà consommé, ces nouvelles pages attendent leur
admission éditoriale. Les limites d'archive, de conservation et les contrôles
de sécurité restent actifs.

## Mémoire du build

Les exports statiques partagent le même catalogue normalisé. La publication
machine est construite une fois par date pendant le build ; une erreur libère
l'entrée et le développement continue à reconstruire les données. Les lignes
de calcul complètes libèrent leurs clés de déduplication, tout en conservant
les résultats et les index nécessaires aux consultations suivantes. Les formats
publics, la précision des calculs et les limites de cache restent inchangés.
