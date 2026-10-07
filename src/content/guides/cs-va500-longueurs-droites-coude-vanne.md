---
title: "CS Instruments VA 500 : où poser la sonde après un coude ou une vanne ?"
seoTitle: "VA 500 : longueurs droites après coude et vanne"
description: "La notice VA 500 V2.02 demande 12 à 45 DN en amont selon l’obstacle. Choisissez le point de mesure à partir du trajet réel, puis vérifiez l’aval."
pubDate: "2026-10-07"
category: "Installer"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["debitmetre-air-comprime-diametre-conditions-reference", "audit-reseau-air-comprime-protocole-mesures", "diagnostiquer-chute-pression-air-comprime"]
sources: ["https://www.cs-instruments.com/cs-data/Bedienungsanleitungen/Instruction%20manuals_EN_new/Instruction_manual_VA500_EN.pdf"]
---

Une conduite comporte une longue portion droite, mais la dernière vanne est juste avant le point de mesure prévu. La longueur depuis le précédent coude ne répond alors pas à la question de pose. Pour le VA 500, la perturbation située en amont détermine la section droite demandée par le constructeur.

La [notice VA 500 V2.02, tableau 2 page 12](https://www.cs-instruments.com/cs-data/Bedienungsanleitungen/Instruction%20manuals_EN_new/Instruction_manual_VA500_EN.pdf#page=12) indique **12 DN** après un coude d’angle inférieur à 90°, **15 DN** après un coude à 90° ou un té, **20 DN** après deux coudes à 90° avec changement de direction « 1-dimensional » dans la notice, **35 DN** après deux coudes avec changement tridimensionnel et **45 DN** après une vanne d’arrêt. L’aval indiqué dans ces cas est **5 DN**. Les réductions et expansions ont aussi leur ligne dans ce tableau.

## Dessiner l’amont depuis le dernier obstacle

Repérez coudes, tés, vannes, réductions et changements de direction avant la sonde. Notez leurs positions. Ne mesurez pas seulement la longueur de tuyau disponible depuis le mur ; la question est la section qui suit la perturbation applicable au point retenu.

<div class="article-infographic article-infographic--compact" role="group" aria-label="VA 500 : la perturbation change l’amont" style="margin-bottom:1.75rem">
<svg viewBox="0 0 520 550" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="cs-va500-longueurs-droites-coude-vanne-title cs-va500-longueurs-droites-coude-vanne-desc" font-family="Manrope Variable, Arial, sans-serif"><title id="cs-va500-longueurs-droites-coude-vanne-title">VA 500 : la perturbation change l’amont</title><desc id="cs-va500-longueurs-droites-coude-vanne-desc">Valeurs du tableau 2 de la notice V2.02. Axe linéaire de 0 à 45 multiples de DN, barres proportionnelles ; le dessin ne remplace pas le plan de pose.</desc><rect width="520" height="550" rx="20" fill="#10281e"/><text x="28" y="42" fill="#d3eb56" font-size="22" text-anchor="start" font-weight="700">VA 500 : la perturbation change l’amont</text><path d="M190 105v340" stroke="#9ebdad" stroke-width="2"/><text x="180" y="142" fill="#ffffff" font-size="18" text-anchor="end" font-weight="400">Coude &lt; 90°</text><rect x="190" y="120" width="69.33" height="28" rx="4" fill="#d3eb56"/><text x="264.3333333333333" y="142" fill="#9ebdad" font-size="17" text-anchor="start" font-weight="400">12 DN</text><text x="180" y="207" fill="#ffffff" font-size="18" text-anchor="end" font-weight="400">Coude à 90°</text><rect x="190" y="185" width="86.67" height="28" rx="4" fill="#d3eb56"/><text x="281.66666666666663" y="207" fill="#9ebdad" font-size="17" text-anchor="start" font-weight="400">15 DN</text><text x="180" y="272" fill="#ffffff" font-size="18" text-anchor="end" font-weight="400">2 coudes, 1D</text><rect x="190" y="250" width="115.56" height="28" rx="4" fill="#d3eb56"/><text x="310.55555555555554" y="272" fill="#9ebdad" font-size="17" text-anchor="start" font-weight="400">20 DN</text><text x="180" y="337" fill="#ffffff" font-size="18" text-anchor="end" font-weight="400">2 coudes 3D</text><rect x="190" y="315" width="202.22" height="28" rx="4" fill="#d3eb56"/><text x="397.22222222222223" y="337" fill="#9ebdad" font-size="17" text-anchor="start" font-weight="400">35 DN</text><text x="180" y="402" fill="#ffffff" font-size="18" text-anchor="end" font-weight="400">Vanne</text><rect x="190" y="380" width="260.00" height="28" rx="4" fill="#d3eb56"/><text x="455.0" y="402" fill="#9ebdad" font-size="17" text-anchor="start" font-weight="400">45 DN</text><path d="M190 450h260" stroke="#9ebdad" stroke-width="2"/><path d="M190.00 450v6" stroke="#9ebdad"/><text x="190.00" y="478" text-anchor="middle" font-size="17" fill="#ffffff">0</text><path d="M276.67 450v6" stroke="#9ebdad"/><text x="276.67" y="478" text-anchor="middle" font-size="17" fill="#ffffff">15</text><path d="M363.33 450v6" stroke="#9ebdad"/><text x="363.33" y="478" text-anchor="middle" font-size="17" fill="#ffffff">30</text><path d="M450.00 450v6" stroke="#9ebdad"/><text x="450.00" y="478" text-anchor="middle" font-size="17" fill="#ffffff">45</text><text x="44" y="505" fill="#ffffff" font-size="19" text-anchor="start" font-weight="400">Aval demandé : 5 DN dans ces cinq cas</text></svg>
</div>

*Valeurs du tableau 2 de la notice V2.02. Axe linéaire de 0 à 45 multiples de DN, barres proportionnelles ; le dessin ne remplace pas le plan de pose.*

Pour illustrer le calcul, un multiple de 45 appliqué à un DN de 50 mm donne **2 250 mm**, soit **2,25 m**. Cet exemple géométrique n’est pas un plan approuvé. Il ne détermine pas le diamètre intérieur à saisir dans l’instrument et ne dispense pas d’identifier la conduite réelle.

Le [guide du débitmètre et des conditions de référence](/guides/debitmetre-air-comprime-diametre-conditions-reference/) traite ces autres paramètres. Les longueurs droites et le paramétrage du diamètre sont deux contrôles complémentaires.

## Si la section n’est pas disponible

Déplacez le point projeté ou demandez au fabricant une solution qualifiée pour la disposition réelle. Ne déclarez pas le montage satisfaisant parce que l’écran affiche une valeur plausible. Un résultat cohérent avec une estimation du compresseur n’est pas un contrôle de la qualité du profil d’écoulement.

Pour plusieurs obstacles rapprochés, le dessin complet doit être soumis au constructeur : la ligne la plus courte du tableau ne qualifie pas cette combinaison. La notice guide un cas de pose ; une combinaison d’éléments peut demander une réponse spécifique. La préparation du [protocole d’audit réseau](/guides/audit-reseau-air-comprime-protocole-mesures/) est l’occasion de conserver cette réponse.

## Ce qu’il faut vérifier avant de percer ou d’acheter

| Donnée d’implantation | Résultat attendu |
| --- | --- |
| Obstacles et sens de circulation | Cas de montage identifié |
| Sections droites amont et aval | Longueurs disponibles comparées à la notice |
| DN et diamètre intérieur | Deux valeurs documentées, sans confusion |
| Point et profondeur de sonde | Montage conforme au dossier exact |
| Domaine de pression | Accessoires et pose adaptés à la conduite |

La pose sous pression possède ses propres risques et exigences dans la notice. Ce guide prépare la décision d’emplacement ; il ne remplace pas sa procédure de montage ni la qualification de l’intervenant. Un emplacement refusé sur le plan évite une modification inutile de la conduite.

## La mesure reste une mesure située

Une fois la sonde posée, joindre le croquis et les paramètres au relevé. Si le réseau est ensuite modifié, une nouvelle vanne ou un nouveau té peut changer le montage documenté. Conservez donc la référence de l’emplacement avec les rapports, au lieu d’identifier la mesure seulement par « air général ».

Le [diagnostic de chute de pression](/guides/diagnostiquer-chute-pression-air-comprime/) peut utiliser ce relevé, avec les autres mesures du poste. L’emplacement est retenu seulement si son cas de pose et ses longueurs disponibles satisfont la notice. Aucune correction numérique du débit ne remplace une section droite manquante.

Sources primaires consultées le **7 octobre 2026**. Analyse documentaire de CompatAir avec assistance d’IA et relecture interne ; aucun essai physique ni avis professionnel externe. Les propositions de relevé et les scénarios de calcul sont distingués des données fabricant.
