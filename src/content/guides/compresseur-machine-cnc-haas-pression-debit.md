---
title: "Quel compresseur pour une machine CNC Haas : pression, débit et accessoires"
seoTitle: "Compresseur CNC Haas : débit, pression et installation"
description: "Lisez les besoins d’air d’une Haas VF-4 sans confondre pression minimale, débit publié et auxiliaires. Préparez le relevé et le scénario de réception."
pubDate: "2026-09-26"
category: "Installer"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 5
reviewStatus: "internal"
relatedGuides: ["guide-complet-dimensionner-compresseur-air", "diagnostiquer-chute-pression-air-comprime", "installer-reseau-air-comprime-atelier"]
sources: ["https://www.haascnc.com/owners/pre-install-guide/mills-pre-install/VF-4.html"]
---

**Le compresseur d’une machine CNC se dimensionne à partir du guide de préinstallation du modèle exact, puis du scénario réel de l’atelier.** Une pression minimale ne donne pas, à elle seule, le débit nécessaire. Les accessoires et les autres consommateurs doivent apparaître dans le bilan.

Le cas ci-dessous concerne la Haas VF-4 telle que présentée dans la source consultée. Il n’établit pas une règle pour toutes les fraiseuses Haas, toutes leurs générations ou leurs options.

## Lire ensemble les indications de la VF-4

Le [guide de préinstallation Haas VF-4](https://www.haascnc.com/owners/pre-install-guide/mills-pre-install/VF-4.html) publie **113,0 L/min à 6,9 bar**, avec l’équivalent **4 scfm à 100 psi**, et une pression minimale distincte de **5,5 bar**, soit **80 psi** dans son tableau. Haas demande une alimentation propre et sèche. Le document donne aussi des prescriptions de compresseur et de réserve, dont un service continu, à appliquer dans le contexte du guide complet.

Ces lignes ne permettent pas de déplacer librement le débit publié vers une autre pression. Elles ne donnent pas non plus la consommation exacte de chaque changement d’outil. Gardez le point de débit et la limite minimale comme deux informations différentes.

<figure class="article-infographic article-infographic--compact">
<svg viewBox="0 0 520 390" role="img" aria-labelledby="compresseur-machine-cnc-haas-pression-debit-title compresseur-machine-cnc-haas-pression-debit-desc" xmlns="http://www.w3.org/2000/svg">
<title id="compresseur-machine-cnc-haas-pression-debit-title">VF-4 : deux indications à garder distinctes</title><desc id="compresseur-machine-cnc-haas-pression-debit-desc">Valeurs du guide de préinstallation consulté ; elles ne sont pas une prescription pour toutes les CNC.</desc>
<rect width="520" height="390" rx="20" fill="#10281e"/>
<rect x="24" y="24" width="472" height="156" rx="12" fill="#203f31"/><text x="44" y="60" fill="#d3eb56" font-size="24" font-weight="700">Point de débit publié</text><text x="44" y="104" fill="white" font-size="22">113,0 L/min à 6,9 bar</text><text x="44" y="146" fill="#8abfa3" font-size="21">Équivalent affiché : 4 scfm à 100 psi</text>
<rect x="24" y="204" width="472" height="156" rx="12" fill="#203f31"/><text x="44" y="240" fill="#d3eb56" font-size="24" font-weight="700">Pression minimale affichée</text><text x="44" y="284" fill="white" font-size="22">5,5 bar</text><text x="44" y="326" fill="#8abfa3" font-size="21">Équivalent affiché : 80 psi</text>
</svg>
<figcaption>VF-4 : deux indications à garder distinctes. Valeurs du guide de préinstallation consulté ; elles ne sont pas une prescription pour toutes les CNC.</figcaption>
</figure>

## Ne pas convertir la puissance de broche en besoin d’air

Une fiche de CNC contient plusieurs puissances et plusieurs circuits. La puissance électrique de la broche ne fournit pas une consommation pneumatique. Dans la fiche de projet, recopiez les valeurs dans leurs rubriques d’origine plutôt que de les réunir sous « puissance machine ».

La comparaison des compresseurs doit ensuite utiliser un débit restitué documenté. Une puissance moteur identique à une indication de préinstallation n’établit pas, par elle-même, que deux compresseurs ont le même service rendu. Le [guide de dimensionnement](/guides/guide-complet-dimensionner-compresseur-air/) explique comment conserver pression, débit et régime dans le même raisonnement.

## Les auxiliaires changent le périmètre

Le guide Haas distingue le raccordement des auxiliaires du circuit régulé de la machine. La configuration réelle doit être validée avec l’installateur ; ce dossier ne donne pas de plan de raccordement alternatif.

Nous proposons de tenir un inventaire séparé des fonctions machine, des accessoires et des usages de l’atelier. Pour chaque ajout, demandez si son besoin est compris dans la valeur de préinstallation ou doit être ajouté.

| Élément du projet | Question à résoudre |
| --- | --- |
| Machine et options | Quelle notice et quelle configuration exactes ? |
| Soufflage auxiliaire | Inclus dans le besoin publié ou consommation séparée ? |
| Autres machines | Quels usages peuvent être simultanés ? |
| Traitement d’air | Quelle qualité et quel débit utile garantis ? |
| Liaison au poste | Quelles dimensions et quels raccords prescrits ? |

Si aucune consommation n’est disponible pour une option, marquez-la comme inconnue. Ne remplacez pas cette absence par un forfait ajouté arbitrairement à la VF-4.

## Organiser une réception représentative

Convenir d’un scénario de réception avant installation permet d’éviter un simple constat « la machine démarre ». Notre proposition est de documenter une séquence de travail autorisée et représentative, avec les accessoires prévus et les autres consommateurs convenus. Les personnes compétentes réalisent les mesures aux points appropriés.

Le compte rendu conserve la pression pendant la séquence, les événements machine observés et le comportement du compresseur. Une pression stable à vide n’est pas le même résultat qu’une pression disponible pendant un appel d’air. Si un défaut apparaît, le [diagnostic de chute de pression](/guides/diagnostiquer-chute-pression-air-comprime/) aide à distinguer production et distribution.

## Prévoir la suite de l’installation

Une seconde CNC ou un nouveau soufflage doit déclencher la mise à jour du bilan. La capacité libre ne se déduit pas du seul fait que la première machine fonctionne. Conservez la version des guides fabricants avec les hypothèses de simultanéité retenues.

Le résultat attendu du projet est une alimentation validée pour une configuration précise, avec ses limites et son programme d’entretien. Un nombre de litres de cuve ou de chevaux moteur isolé ne remplace pas cette preuve. Le [guide du réseau d’atelier](/guides/installer-reseau-air-comprime-atelier/) complète la préparation de la distribution.

## Sources et méthode

Sources consultées le **26 septembre 2026**. Rédaction avec assistance d’IA et relecture interne, sans essai physique ni validation professionnelle externe. Les grilles de décision sont proposées par CompatAir ; les valeurs constructeur et les exemples hypothétiques sont distingués dans le texte.

- [Haas Automation, guide de préinstallation VF-4](https://www.haascnc.com/owners/pre-install-guide/mills-pre-install/VF-4.html)
