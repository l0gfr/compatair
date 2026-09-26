---
title: "Pressostat de compresseur : comprendre enclenchement, arrêt et différentiel"
seoTitle: "Pressostat compresseur : seuils et différentiel"
description: "Un compresseur redémarre avant que la cuve soit vide : comprenez les deux seuils du pressostat, leur différentiel et les limites d’un diagnostic sans démontage."
pubDate: "2026-09-26"
category: "Comprendre"
audiences: ["particulier", "professionnel"]
metiers: ["garage-automobile", "maintenance-industrielle", "menuiserie-agencement"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["compresseur-ne-demarre-plus-froid-rallonge", "compresseur-ne-monte-plus-en-pression", "choisir-volume-cuve-24-50-90-litres"]
sources: ["https://condor-werke.de/en/products/pressure-switches/product/pressure-switch-mdr-2", "https://condor-werke.de/fileadmin/content/PDF/Datenblaetter/Druckschalter/MDR-2/product-data-sheet-Condor-MDR-2.pdf", "https://www.metabo-service.com/manuals/1151663628_00_0310_Sx_Ax_de_en_fr_nl_it_es_pt_da_no_sv_fi_hu_pl_el_%20Basic%20265.pdf"]
---

**Le pressostat commande le compresseur entre un seuil de redémarrage et un seuil d’arrêt.** Il est donc normal, dans ce mode de commande, que la machine redémarre avant que le réservoir soit vide. Le différentiel correspond à l’écart entre ces deux seuils.

Ce fonctionnement ne doit pas être confondu avec le réglage de pression de sortie destiné aux outils. Le manomètre de cuve et le manomètre après régulateur décrivent des points différents. La [notice Metabo Basic 265](https://www.metabo-service.com/manuals/1151663628_00_0310_Sx_Ax_de_en_fr_nl_it_es_pt_da_no_sv_fi_hu_pl_el_%20Basic%20265.pdf) distingue précisément commande du compresseur, pression de réservoir et pression réglée de sortie.

## Lire un cycle sans ouvrir le boîtier

Prenons un **exemple fictif**, choisi uniquement pour expliquer les mots : arrêt à 8 bar, redémarrage à 6 bar. Le différentiel vaut 8 − 6 = **2 bar**. Ces nombres ne sont pas une recommandation pour votre compresseur.

Pendant une consommation, la pression peut descendre entre les deux seuils sans que le moteur tourne. Une fois le seuil bas atteint, la commande demande un redémarrage. Pour documenter ce cycle, notez les pressions affichées et les instants de départ et d’arrêt, sans intervenir sur les organes électriques.

<figure class="article-infographic article-infographic--compact">
<svg viewBox="0 0 520 390" role="img" aria-labelledby="pressostat-compresseur-pression-enclenchement-differentiel-title pressostat-compresseur-pression-enclenchement-differentiel-desc" xmlns="http://www.w3.org/2000/svg">
<title id="pressostat-compresseur-pression-enclenchement-differentiel-title">Deux seuils pour un même cycle</title><desc id="pressostat-compresseur-pression-enclenchement-differentiel-desc">Illustration hypothétique : démarrage à 6 bar et arrêt à 8 bar. La courbe est qualitative et ne prescrit aucun réglage.</desc>
<rect width="520" height="390" rx="20" fill="#10281e"/>
<text x="32" y="42" fill="white" font-size="23">Pression relative · exemple fictif</text>
<path d="M68 76v226h402" fill="none" stroke="#8abfa3" stroke-width="2"/>
<path d="M68 124h380M68 246h380" stroke="#8abfa3" stroke-width="2" stroke-dasharray="5 5"/>
<text x="28" y="132" fill="white" font-size="22">8</text><text x="28" y="254" fill="white" font-size="22">6</text>
<path d="M78 246L208 124L356 246L444 165" fill="none" stroke="#d3eb56" stroke-width="5"/>
<circle cx="208" cy="124" r="6" fill="white"/><circle cx="356" cy="246" r="6" fill="white"/>
<text x="180" y="104" fill="white" font-size="21">Arrêt</text><text x="280" y="281" fill="white" font-size="21">Démarrage</text>
<text x="355" y="331" fill="#8abfa3" font-size="21">Temps →</text><text x="32" y="366" fill="#d3eb56" font-size="23">Différentiel : 8 − 6 = 2 bar</text>
</svg>
<figcaption>Deux seuils pour un même cycle. Illustration hypothétique : démarrage à 6 bar et arrêt à 8 bar. La courbe est qualitative et ne prescrit aucun réglage.</figcaption>
</figure>

## Pourquoi il n’existe pas un réglage universel « 6–8 bar »

La [présentation du Condor MDR 2](https://condor-werke.de/en/products/pressure-switches/product/pressure-switch-mdr-2) décrit une famille de pressostats comportant un réglage de différentiel. La [fiche technique et ses diagrammes](https://condor-werke.de/fileadmin/content/PDF/Datenblaetter/Druckschalter/MDR-2/product-data-sheet-Condor-MDR-2.pdf) définissent des combinaisons de seuils possibles. La référence du pressostat et le domaine prévu par le compresseur doivent être vérifiés ensemble.

La documentation consultée comporte des formulations divergentes sur l’effet précis de la vis de différentiel. Nous ne publions donc pas de sens de rotation ni de procédure de réglage tirée de ces passages. Faites confirmer l’instruction de la version installée par le fabricant. Cette réserve n’empêche pas de comprendre les seuils ; elle interdit seulement de transformer une notice ambiguë en tutoriel certain.

## Distinguer trois observations fréquentes

| Observation | Ce qu’elle ne prouve pas seule |
| --- | --- |
| Redémarrage avec de l’air encore présent | Un défaut du pressostat |
| Cycles rapprochés | Une mauvaise valeur de différentiel |
| Pression de sortie insuffisante | Un seuil de cuve nécessairement trop bas |

Pour des cycles rapprochés, relevez d’abord le scénario d’usage et les consommateurs actifs. Un changement de cadence, une fuite ou une modification de réserve doit rester dans l’enquête. Le [suivi des temps de charge et de marche à vide](/guides/mesurer-temps-charge-vide-compresseur/) aide à distinguer les états réellement observés selon la technologie de la machine.

## Préparer un relevé utile au réparateur

Notre fiche de relevé comprend le modèle, la référence visible du pressostat, les deux seuils observés, la pression de sortie, le temps entre événements et les usages actifs. Ajoutez la date d’apparition du problème et toute intervention récente. Une photographie de l’étiquette accessible est utile ; ouvrir un boîtier électrique ne fait pas partie de ce relevé utilisateur.

Si la machine ne s’arrête plus normalement, ne cherchez pas son nouveau maximum par un essai prolongé. Arrêtez-la selon sa procédure et faites contrôler la commande et les protections. La soupape de sécurité ne doit pas devenir un moyen de régulation habituel.

## Une baisse de seuil économise-t-elle automatiquement de l’énergie ?

Il faut vérifier le poste critique et le fonctionnement complet de l’installation. Un réglage peut modifier le service disponible ; un gain ne se déduit pas du seul écart entre deux nombres. Le dossier sur la [réduction de pression et la demande artificielle](/guides/baisser-pression-reseau-demande-artificielle/) décrit les mesures nécessaires avant de conclure.

La décision pertinente est de comparer les seuils prescrits, les seuils observés et les besoins du poste. Une différence documentée permet une demande d’intervention précise. Une valeur copiée sur un autre compresseur ne remplace aucune de ces trois informations.

## Sources et méthode

Sources consultées le **26 septembre 2026**. Rédaction avec assistance d’IA et relecture interne, sans essai physique ni validation professionnelle externe. Les grilles de décision sont proposées par CompatAir ; les valeurs constructeur et les exemples hypothétiques sont distingués dans le texte.

- [Condor, pressostat MDR 2](https://condor-werke.de/en/products/pressure-switches/product/pressure-switch-mdr-2)
- [Condor, fiche MDR 2 et diagrammes de réglage](https://condor-werke.de/fileadmin/content/PDF/Datenblaetter/Druckschalter/MDR-2/product-data-sheet-Condor-MDR-2.pdf)
- [Metabo, Basic 265, fonctionnement et sécurité](https://www.metabo-service.com/manuals/1151663628_00_0310_Sx_Ax_de_en_fr_nl_it_es_pt_da_no_sv_fi_hu_pl_el_%20Basic%20265.pdf)
