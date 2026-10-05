---
title: "Özen OSC 55 DS : pourquoi le débit de la colonne 13 bar est mesuré à 12,5 bar"
seoTitle: "Özen OSC 55 DS : 7,87 m³/min mesurés à 12,5 bar"
description: "Le catalogue Özen sépare la classe de pression et le point FAD. Lisez les minima VSD et les notes avant d’utiliser la colonne 13 bar du OSC 55 DS."
pubDate: "2026-10-05"
updatedDate: "2026-10-05"
category: "Comprendre"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle", "atelier-poids-lourds"]
readingTime: 7
featured: false
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["debit-restitue-fad-vs-debit-aspire", "lire-fiche-cagi-compresseur-iso-1217", "mesurer-temps-charge-vide-compresseur"]
sources: ["https://ozenkompresor.com.tr/wp-content/uploads/2026/01/katalog-2025.pdf"]
---
Dans le catalogue Özen, la colonne marquée « 13 » du [OSC 55 DS](/compresseurs/ozen-osc-55-ds/) annonce **7,87 m³/min**. Une reprise rapide peut en faire « 7,87 m³/min à 13 bar ». La note de la page précise pourtant que la performance de cette classe est mesurée à **12,5 bar**. Cet écart doit rester visible lorsque l'on dimensionne un processus qui demande une pression élevée.

La [page du catalogue 2025 consacrée aux OSC DS](https://ozenkompresor.com.tr/wp-content/uploads/2026/01/katalog-2025.pdf) porte le numéro imprimé **27**, à la **page 26 du fichier PDF**. Le tableau sépare les capacités maximales et les lignes « Min Debi ». Le même document qualifie la performance selon **ISO 1217:2009, annexe C**, avec une pression d'entrée de 1 bar et une température ambiante de 20 °C.

## La note change la façon de nommer les points

Pour le OSC 55 DS, les données à conserver ensemble sont les suivantes :

| Colonne de classe de pression | Pression de mesure indiquée en note | Capacité maximale | Minimum publié |
|---|---:|---:|---:|
| 7,5 bar | 7 bar | 10,40 m³/min | 4,91 m³/min |
| 10 bar | 9,5 bar | 9,04 m³/min | 4,86 m³/min |
| 13 bar | 12,5 bar | 7,87 m³/min | 5,03 m³/min |

La puissance moteur de la ligne est **55 kW**. Le tableau ne fournit pas une courbe de puissance totale absorbée pour ces capacités. Il ne permet donc pas de calculer la consommation électrique d'une journée à partir de la seule puissance nominale.

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 400" role="img" aria-label="Özen OSC 55 DS, classe 13 bar : plage de 5,03 à 7,87 m³/min mesurée à 12,5 bar" style="display:block;width:100%;max-width:38rem;height:auto;margin:1.5rem auto 1.75rem"><rect width="420" height="400" rx="16" fill="#102018"/><text x="24" y="34" font-family="system-ui" font-size="19" font-weight="700" fill="#d8ef45">OSC 55 DS : classe et mesure</text><rect x="20" y="58" width="380" height="94" rx="10" fill="#254235"/><text x="36" y="82" font-family="system-ui" font-size="18" fill="#f7f8f2">Classe de pression</text><text x="36" y="112" font-family="system-ui" font-size="26" font-weight="800" fill="#d8ef45">13 bar</text><text x="36" y="139" font-family="system-ui" font-size="17" fill="#cbd8d0">en-tête du catalogue</text><rect x="20" y="166" width="380" height="94" rx="10" fill="#254235"/><text x="36" y="190" font-family="system-ui" font-size="18" fill="#f7f8f2">Point du débit FAD</text><text x="36" y="220" font-family="system-ui" font-size="26" font-weight="800" fill="#d8ef45">12,5 bar</text><text x="36" y="247" font-family="system-ui" font-size="17" fill="#cbd8d0">note de mesure</text><rect x="20" y="274" width="380" height="94" rx="10" fill="#254235"/><text x="36" y="298" font-family="system-ui" font-size="18" fill="#f7f8f2">Plage publiée</text><text x="36" y="328" font-family="system-ui" font-size="26" font-weight="800" fill="#d8ef45">5,03 à 7,87</text><text x="36" y="355" font-family="system-ui" font-size="17" fill="#cbd8d0">m³/min à 12,5 bar</text></svg>

## Une exigence à 13 bar demande une donnée correspondante

Si un équipement exige réellement 13 bar à son entrée pendant le fonctionnement, le point publié à 12,5 bar ne démontre pas le débit disponible à 13 bar. La classe de pression du groupe peut entrer dans le choix, mais il faut demander un point de performance et les conditions de réglage répondant à cette exigence.

Cette demande doit préciser où la pression est requise : sortie du groupe, après le traitement ou à l'équipement. Les accessoires et le réseau doivent ensuite être dimensionnés avec leurs propres données. Une ligne de catalogue ne garantit pas la pression à l'autre bout de l'installation.

Le guide [débit restitué et débit aspiré](/guides/debit-restitue-fad-vs-debit-aspire/) explique pourquoi un point FAD doit conserver sa pression. Celui consacré à la [lecture d'une fiche ISO 1217 ou CAGI](/guides/lire-fiche-cagi-compresseur-iso-1217/) montre aussi le rôle des notes, du périmètre de mesure et de la configuration. Ici, la note est nécessaire pour comprendre l'en-tête.

## Le minimum de la colonne 13 bar est distinct du maximum

Les **5,03 m³/min** figurent sur la ligne de minimum, sous les 7,87 m³/min. Ils ne doivent pas remplacer le maximum dans une fiche produit. À l'inverse, le maximum ne renseigne pas tout le fonctionnement de l'installation lors des périodes creuses.

L'écart calculé entre les bornes est de **2,84 m³/min**, soit **2 840 L/min**, au même point documenté de 12,5 bar. La conversion ne change pas les conditions de référence. Elle ne transforme pas non plus le minimum publié en une garantie de stabilité pour toutes les demandes plus petites.

Pour une demande sous la borne minimale, faites expliquer la stratégie de commande, le stockage prévu et les modes de fonctionnement de la version proposée. Une installation existante peut fournir un relevé des heures et des états de fonctionnement. Le dossier [mesurer les temps de charge et de marche à vide](/guides/mesurer-temps-charge-vide-compresseur/) aide à organiser ces observations avant une étude de remplacement.

## Éviter une comparaison déséquilibrée avec une autre marque

Comparer les 7,87 m³/min à un concurrent mesuré exactement à 13 bar mélangerait les points de pression. Comparer cette valeur à un chiffre de débit aspiré mélangerait les grandeurs. Pour un appel d'offres, demandez le débit livré à une même pression et les conditions de référence, puis la puissance totale si l'énergie doit départager les machines.

Les autres colonnes du OSC 55 DS ne sont pas des gains accessibles simplement en recopiant la valeur la plus élevée. Elles décrivent des classes et des points distincts. La table ne fournit pas une courbe intermédiaire permettant d'attribuer une capacité à toutes les pressions possibles.

Le catalogue d'export ne démontre pas non plus la fréquence, la disponibilité française ou l'équipement exact de chaque offre. Conservez la référence complète et demandez la documentation d'installation de la version livrée. Les contraintes de traitement, de local et d'entretien nécessitent des éléments supplémentaires au tableau de capacités.

## Une conclusion utilisable dans un cahier des charges

Vous pouvez demander « OSC 55 DS, classe 13 bar, performance déclarée de 5,03 à 7,87 m³/min mesurée à 12,5 bar » puis préciser votre pression requise et votre profil de demande. Cette formulation donne au fournisseur un point à confirmer ou à compléter. Elle évite de lui demander de valider une capacité qui aurait été déplacée silencieusement.

Le résultat documentaire est donc ferme : **7,87 m³/min est le maximum publié pour la colonne 13 bar, avec mesure explicitement rattachée à 12,5 bar**. Le besoin réel à une autre pression reste à qualifier avec le fabricant.

[Özen, catalogue 2025, page imprimée 27, page PDF 26](https://ozenkompresor.com.tr/wp-content/uploads/2026/01/katalog-2025.pdf), consulté le 5 octobre 2026. Les valeurs sont déclarées par le constructeur ; aucun essai physique CompatAir n'est présenté.
