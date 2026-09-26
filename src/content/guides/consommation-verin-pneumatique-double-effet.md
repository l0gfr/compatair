---
title: "Consommation d’un vérin pneumatique double effet : calculer les litres par cycle"
seoTitle: "Consommation vérin double effet : calcul par cycle"
description: "Calculez le besoin d’air d’un vérin avec sa course, sa tige et sa cadence. Distinguez litres par cycle, débit moyen et débit de pointe du distributeur."
pubDate: "2026-09-26"
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "menuiserie-agencement"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["force-verin-pneumatique-diametre-pression", "choisir-distributeur-pneumatique-debit-nominal", "utiliser-plusieurs-outils-pneumatiques"]
sources: ["https://www.festo.com/media/cms/media/mam_upload/market/Festo_General_operating_conditions_en.pdf", "https://www.festo.com/ee/en/s/air-consumption"]
---

**Un vérin double effet consomme de l’air dans les deux sens.** Pour dimensionner son alimentation, il faut connaître l’alésage, le diamètre de tige, la course, la pression et le nombre d’allers-retours. Le seul diamètre du vérin ne permet de choisir ni le compresseur ni le distributeur.

Le résultat recherché dépend aussi de la décision : un bilan par minute sert à évaluer la production d’air, tandis qu’un mouvement rapide demande une vérification du débit pendant la course. Nous proposons de conserver ces deux lignes dans toute consultation d’intégrateur.

## Les données à relever avant de calculer

Le [calculateur Festo](https://www.festo.com/ee/en/s/air-consumption) distingue les modes simple effet, double effet et d’autres géométries. Sélectionnez donc le montage réel. Une tige traversante ou un vérin sans tige ne se traite pas comme un double effet à tige unique.

Sur la fiche machine, relevez la course réellement utilisée et précisez ce que le compteur appelle un « cycle ». Compter séparément sortie et retour, puis utiliser une consommation déjà donnée par aller-retour, double artificiellement le résultat. Conservez aussi la pression d’utilisation, avec sa référence relative ou absolue.

## Un exemple fabricant que l’on peut refaire

Festo documente un **DNC-32-500**, avec piston de **32 mm**, tige de **12 mm**, course de **500 mm** et pression relative de **6 bar**. Dans son approximation, la sortie consomme **2,815 L**, le retour **2,419 L**, soit **5,234 L par cycle complet**. Ces valeurs sont des résultats de calcul publiés, pas un relevé CompatAir. [Source : Festo, page 18](https://www.festo.com/media/cms/media/mam_upload/market/Festo_General_operating_conditions_en.pdf).

Les volumes géométriques, diamètres et course en millimètres, s’écrivent :

- sortie : `π × D² × course / 4 × 10⁻⁶`, en litres ;
- retour : `π × (D² − d²) × course / 4 × 10⁻⁶`, en litres.

La méthode de cette page multiplie chaque volume par `pression relative + 1`, avec une référence atmosphérique simplifiée de 1 bar. Ce n’est pas une convention universelle pour tous les volumes normalisés. Le [guide des unités de débit](/guides/convertir-cfm-l-min-nl-min-air-comprime/) explique pourquoi la température et la pression de référence doivent accompagner une comparaison.

<div class="article-infographic article-infographic--compact" role="group" aria-label="Consommation des deux chambres">
<svg viewBox="0 0 520 390" role="img" aria-labelledby="consommation-verin-pneumatique-double-effet-title consommation-verin-pneumatique-double-effet-desc" xmlns="http://www.w3.org/2000/svg">
<title id="consommation-verin-pneumatique-double-effet-title">Consommation des deux chambres</title><desc id="consommation-verin-pneumatique-double-effet-desc">Géométrie schématique non à l’échelle. La tige réduit le volume côté retour. Les deux consommations Festo s’additionnent par aller-retour.</desc>
<rect width="520" height="390" rx="20" fill="#10281e"/>
<text x="28" y="43" fill="#d3eb56" font-size="24" font-weight="700">DNC-32-500 · exemple Festo</text>
<rect x="40" y="80" width="345" height="90" rx="8" fill="#203f31" stroke="#8abfa3" stroke-width="2"/><rect x="238" y="82" width="16" height="86" fill="#d3eb56"/><rect x="254" y="118" width="224" height="16" fill="#8abfa3"/><text x="55" y="115" fill="white" font-size="21" font-weight="400">Côté fond</text>
<text x="55" y="150" fill="white" font-size="23" font-weight="400">32 mm</text>
<text x="273" y="107" fill="white" font-size="20" font-weight="400">Tige 12 mm</text>
<text x="28" y="220" fill="white" font-size="24" font-weight="400">Sortie : 2,815 L</text>
<text x="28" y="262" fill="white" font-size="24" font-weight="400">Retour : 2,419 L</text>
<text x="28" y="312" fill="#d3eb56" font-size="25" font-weight="700">Cycle complet : 5,234 L</text>
<text x="28" y="364" fill="white" font-size="21" font-weight="400">Course 500 mm · pression relative 6 bar</text>

</svg>
</div>

*Consommations publiées par Festo, avec sa convention de calcul. Géométrie schématique, non à l’échelle.*

## Passer des litres par cycle aux litres par minute

**Calcul CompatAir à partir de l’exemple publié :** à 10 cycles complets par minute, cadence hypothétique, `5,234 × 10 = 52,34 L/min`. À 20 cycles, le même calcul donne 104,68 L/min. Ce changement porte uniquement sur la cadence ; il ne démontre pas que le vérin atteint cette vitesse sous charge.

La consommation géométrique n’est pas le bilan complet de la machine. Demandez si le calcul fourni comprend les volumes de liaison, les autres actionneurs, les soufflages et les fuites. Une ligne « auxiliaires non renseignés » vaut mieux qu’un pourcentage ajouté sans explication. Pour plusieurs mouvements, utilisez leurs séquences dans le [bilan de simultanéité](/guides/utiliser-plusieurs-outils-pneumatiques/).

## Pourquoi cette moyenne ne choisit pas l’électrovanne

Répartir le volume sur toute la minute efface la durée du mouvement. À quantité identique par cycle, une course demandée en une fraction de seconde sollicite l’alimentation autrement qu’un déplacement lent suivi d’une longue attente. C’est une conséquence du calcul volume/temps, pas un débit maximal garanti.

Le dossier de sélection doit donc indiquer le temps de sortie et de retour souhaité, les liaisons et la charge. L’intégrateur peut alors vérifier le [distributeur et ses conditions de débit nominal](/guides/choisir-distributeur-pneumatique-debit-nominal/). Écrire « consommation moyenne inférieure au débit de la vanne » ne suffit pas à valider la cadence.

## Le livrable utile pour un atelier

Nous proposons un tableau par actionneur : référence, géométrie, course, pression, litres par cycle, cycles par minute et durée de chaque mouvement. Séparez les valeurs de notice, les calculs et les mesures. Faites apparaître les cases manquantes plutôt que de les remplir avec les dimensions d’un modèle voisin.

Le [calculateur CompatAir](/calculateur/) reste destiné aux profils d’outils documentés dans son catalogue. Ce guide n’y crée pas un profil de vérin fictif. Pour une machine automatisée, transmettez le bilan à son concepteur et vérifiez la cadence obtenue dans les conditions de réception convenues.

Le glossaire précise la définition de [cycle de vérin double effet](/glossaire/#cycle-verin-double-effet).

## Sources et méthode

Sources consultées le **26 septembre 2026**. Rédaction avec assistance d’IA et relecture éditoriale interne, sans essai physique ni validation professionnelle externe. Les exemples chiffrés explicitement hypothétiques ne sont pas des mesures de terrain.

- [Festo, General operating conditions, novembre 2022, page 18](https://www.festo.com/media/cms/media/mam_upload/market/Festo_General_operating_conditions_en.pdf)
- [Festo, calculateur de consommation des vérins](https://www.festo.com/ee/en/s/air-consumption)
