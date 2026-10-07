---
title: "METPOINT OCV compact affiche zéro au démarrage : l’air est-il déjà contrôlé ?"
seoTitle: "METPOINT OCV : zéro au démarrage et mesure valide"
description: "Le zéro de démarrage ne décrit pas nécessairement l’air du réseau. Lisez échauffement, arrivée d’échantillon et stabilité avant de conclure sur les vapeurs d’huile."
pubDate: "2026-10-07"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["carrosserie-peinture", "maintenance-industrielle"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["mesure-vapeurs-huile-huile-totale-air-comprime", "tester-contamination-air-avant-peinture", "qualite-air-comprime-iso-8573-1"]
sources: ["https://www.beko-technologies.com/fileadmin/beko-technologies.com/EN/manuals_en/metpoint_ocv/mp_OCV_c_BA_10-249_en_00_01.pdf"]
---

**0,0000 mg/m³ au démarrage ne suffit pas à certifier l’air comprimé.** Sur le METPOINT OCV compact, la notice décrit des phases où la mesure n’est pas encore représentative de l’échantillon du réseau. Le nombre doit être lu avec l’état du système.

La [notice OCV compact 00_01/10-249, pages 60 à 62](https://www.beko-technologies.com/fileadmin/beko-technologies.com/EN/manuals_en/metpoint_ocv/mp_OCV_c_BA_10-249_en_00_01.pdf#page=60) indique un échauffement du PURIFICATOR d’au moins **30 minutes**, avec deux voyants orange et sans passage d’air comprimé dans le capteur PID pendant cette phase. Elle décrit un affichage de zéro durant les **huit premières minutes**, puis une indication liée à l’air ambiant pour le reste de cette phase. Au premier démarrage, elle annonce une stabilité initiale après environ **90 minutes**, à l’équilibre thermique. Ces durées ne sont pas des mesures réalisées par CompatAir.

## Séparer démarrage de l’appareil et qualification de l’air

La bonne première question est : « Quel air le capteur observe-t-il maintenant, dans quel état ? » Si le PID n’est pas traversé par l’échantillon du réseau, son affichage ne démontre pas la concentration de cet échantillon. Un écran à zéro n’efface pas ce manque d’observation.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Au démarrage, lire l’état avant le nombre" style="margin-bottom:1.75rem">
<svg viewBox="0 0 520 550" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="metpoint-ocv-zero-demarrage-air-non-mesure-title metpoint-ocv-zero-demarrage-air-non-mesure-desc" font-family="Manrope Variable, Arial, sans-serif"><title id="metpoint-ocv-zero-demarrage-air-non-mesure-title">Au démarrage, lire l’état avant le nombre</title><desc id="metpoint-ocv-zero-demarrage-air-non-mesure-desc">La notice OCV compact décrit une phase pendant laquelle le capteur n’est pas traversé par l’air comprimé. Un zéro affiché à ce moment ne certifie pas cet air.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="28" y="42" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">Au démarrage, lire l’état avant le nombre</text><path d="M65 110v325" stroke="#9ebdad" stroke-width="3"/><circle cx="65" cy="145" r="9" fill="#f5a798"/><text x="105" y="150" fill="#ffffff" font-size="21" text-anchor="start" font-weight="400">Échauffement du PURIFICATOR</text><text x="105" y="190" fill="#f5a798" font-size="20" text-anchor="start" font-weight="400">Deux voyants orange</text><circle cx="65" cy="265" r="9" fill="#9ebdad"/><text x="105" y="270" fill="#ffffff" font-size="21" text-anchor="start" font-weight="400">État de mesure à qualifier</text><text x="105" y="310" fill="#9ebdad" font-size="19" text-anchor="start" font-weight="400">Air échantillonné et capteur prêts</text><circle cx="65" cy="385" r="9" fill="#d3eb56"/><text x="105" y="390" fill="#d3eb56" font-size="20" text-anchor="start" font-weight="400">Valeur exploitable avec son état</text><text x="105" y="430" fill="#9ebdad" font-size="19" text-anchor="start" font-weight="400">Stabilisation et protocole conservés</text></svg>
</div>

*La notice OCV compact décrit une phase pendant laquelle le capteur n’est pas traversé par l’air comprimé. Un zéro affiché à ce moment ne certifie pas cet air.*

Conservez l’heure de mise sous tension, les voyants, l’ouverture de l’échantillon suivant la procédure et le début de la série retenue. Ces événements permettront de comprendre une courbe où le premier zéro aurait autrement été mélangé aux mesures d’exploitation.

## Les trois voyants rouges ne disent pas tous « huile excessive »

La [page 22](https://www.beko-technologies.com/fileadmin/beko-technologies.com/EN/manuals_en/metpoint_ocv/mp_OCV_c_BA_10-249_en_00_01.pdf#page=22) distingue le statut du PURIFICATOR, le dépassement du seuil de concentration et le statut du PID. Un défaut de composant et une alerte sur la valeur mesurée doivent donc être identifiés séparément. Le nom du voyant est aussi important que sa couleur.

Pour un défaut d’état, transmettre l’indication exacte et les circonstances au service technique. Pour un dépassement confirmé pendant une phase de mesure valide, examiner le réseau et le procédé selon leur protocole. Acquitter un message ou rendre silencieuse une alerte ne traite pas une contamination.

## Qualifier la période conservée dans le rapport

| Information | Pourquoi elle accompagne la concentration |
| --- | --- |
| Phase d’échauffement | Empêche de conserver le zéro initial comme résultat réseau |
| État PURIFICATOR et PID | Documente le fonctionnement des composants |
| Échantillon raccordé et trajet | Identifie l’air réellement contrôlé |
| Stabilité de la série | Évite de comparer un transitoire à un résultat stabilisé |
| Version de notice et appareil | Rend les durées et fonctions attribuables |

La stabilité se vérifie dans le cadre du protocole de l’appareil. Nous ne créons pas un seuil de variation ou une durée d’attente nouvelle pour déclarer la mesure valide. Les exigences du contrôle et le dossier constructeur doivent fournir ces critères.

## Une mesure de vapeurs reste une mesure de vapeurs

Le [guide vapeurs d’huile et huile totale](/guides/mesure-vapeurs-huile-huile-totale-air-comprime/) précise la portée de cette grandeur. Une concentration de vapeurs ne doit pas être étendue à des formes d’huile non couvertes par le contrôle. Pour une exigence globale, le [guide ISO 8573-1](/guides/qualite-air-comprime-iso-8573-1/) rappelle les familles de polluants et leur lecture.

Dans un poste de peinture, conserver aussi l’endroit où l’échantillon est prélevé. Le [contrôle avant peinture](/guides/tester-contamination-air-avant-peinture/) relie le résultat à l’air réellement livré au poste. Le chiffre obtenu près d’un traitement n’attribue pas automatiquement la même qualité à tous les flexibles.

La décision pratique est de reporter le jugement de qualité tant que l’appareil est en phase non représentative ou dans un état de défaut. Une fois échantillon, états et stabilité qualifiés, la concentration peut entrer dans le rapport avec ses limites. Le premier zéro de l’écran reste un événement de démarrage, pas une conformité du réseau.

Sources primaires consultées le **7 octobre 2026**. Analyse documentaire de CompatAir avec assistance d’IA et relecture interne ; aucun essai physique ni avis professionnel externe. Les propositions de relevé et les scénarios de calcul sont distingués des données fabricant.
