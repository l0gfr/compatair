---
title: "Compresseur en altitude : débit, pression et choix pour un chantier en montagne"
seoTitle: "Compresseur en altitude : quel débit reste disponible ?"
description: "Chantier en montagne : pourquoi FAD, débit normalisé, rapport de pression et puissance moteur ne se corrigent pas avec un pourcentage unique."
pubDate: 2026-09-26
category: "Choisir"
audiences: ["professionnel"]
metiers: ["btp-chantier", "maintenance-industrielle"]
readingTime: 5
featured: false
reviewStatus: "internal"
relatedGuides: ["choisir-compresseur-mobile-chantier-fad-autonomie", "bar-psi-pression-absolue-relative", "convertir-cfm-l-min-nl-min-air-comprime"]
sources:
  - https://www.atlascopco.com/en-au/compressors/wiki/compressed-air-articles/dimensioning-compressor-installations-at-high-altitudes
  - https://www.atlascopco.com/content/dam/atlas-copco/local-countries/saudi-arabia/documents/Compressed_Air_Manual_tcm44-1249312.pdf
---

**La fiche d’un compresseur au niveau de la mer ne suffit pas pour garantir son débit sur un chantier en montagne.** Atlas Copco demande de prendre en compte la pression ambiante, la température, le refroidissement, la technologie du compresseur et sa motorisation. La correction peut toucher plusieurs caractéristiques ; elle ne se résume pas à retirer le même pourcentage à tous les débits. [Dimensionnement en altitude](https://www.atlascopco.com/en-au/compressors/wiki/compressed-air-articles/dimensioning-compressor-installations-at-high-altitudes).

## Pourquoi les mêmes 7 bar demandent un rapport différent

Une pression manométrique s’exprime par rapport à l’atmosphère locale. Pour calculer un rapport de compression, il faut employer les pressions **absolues**. Le [guide bar, psi et pression absolue](/guides/bar-psi-pression-absolue-relative/) détaille cette distinction. Le manuel Atlas Copco l’applique au dimensionnement en altitude, chapitre 3.1.3.

Voici un exemple pédagogique avec des pressions ambiantes choisies, **sans leur attribuer une altitude précise**. Il suppose 7 bar de surpression en sortie, une aspiration à la pression ambiante et aucune perte dans les conduites :

<p class="article-table-hint">Sur petit écran, faites défiler le tableau horizontalement.</p>

<div class="article-table-scroll" tabindex="0" role="region" aria-label="Exemple de rapport de compression en pression absolue">

| Hypothèse | Pression ambiante absolue | Pression de sortie absolue | Rapport sortie / entrée |
| --- | --- | --- | --- |
| Cas A | 1,00 bar | 7 + 1 = 8,00 bar | 8,00 / 1,00 = 8 |
| Cas B | 0,80 bar | 7 + 0,8 = 7,80 bar | 7,80 / 0,80 = 9,75 |

</div>

La consigne manométrique est la même, mais le rapport passe de 8 à 9,75 dans ces hypothèses. Cela ne fournit ni le rendement, ni la température de refoulement, ni le débit corrigé d’un modèle. Il faut les données du fabricant pour ces résultats.

<div class="article-infographic" tabindex="0" role="group" aria-label="Même consigne, rapport différent">
<svg viewBox="0 0 680 404" role="img" aria-labelledby="altitude-title altitude-desc" xmlns="http://www.w3.org/2000/svg">
<title id="altitude-title">Même consigne, rapport différent</title><desc id="altitude-desc">Hypothèse A : atmosphère à 1,00 bar absolu : 7 bar relatifs donnent un rapport de 8. Hypothèse B : atmosphère à 0,80 bar absolu : 7 bar relatifs donnent un rapport de 9,75. Ce que le calcul ne donne pas : Le débit ou la puissance d’un compresseur réel. Exemple sans pertes ; aucune altitude n’est déduite.</desc>
<rect width="680" height="404" rx="20" fill="#10281e"/><text x="28" y="43" fill="#d3eb56" font-size="25" font-weight="700">Même consigne, rapport différent</text>
<rect x="24" y="70" width="632" height="73" rx="10" fill="#203f31"/><text x="40" y="98" fill="#d3eb56" font-size="22" font-weight="700">Hypothèse A : atmosphère à 1,00 bar absolu</text><text x="40" y="126" fill="white" font-size="20">7 bar relatifs donnent un rapport de 8.</text>
<rect x="24" y="158" width="632" height="73" rx="10" fill="#203f31"/><text x="40" y="186" fill="#d3eb56" font-size="22" font-weight="700">Hypothèse B : atmosphère à 0,80 bar absolu</text><text x="40" y="214" fill="white" font-size="20">7 bar relatifs donnent un rapport de 9,75.</text>
<rect x="24" y="246" width="632" height="73" rx="10" fill="#203f31"/><text x="40" y="274" fill="#d3eb56" font-size="22" font-weight="700">Ce que le calcul ne donne pas</text><text x="40" y="302" fill="white" font-size="20">Le débit ou la puissance d’un compresseur réel.</text>
<text x="28" y="379" fill="white" font-size="19">Exemple sans pertes ; aucune altitude n’est déduite.</text>
</svg>
</div>

## FAD et débit normalisé : deux lectures à ne pas mélanger

Le [manuel Atlas Copco, page PDF 72](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/saudi-arabia/documents/Compressed_Air_Manual_tcm44-1249312.pdf) sépare explicitement l’effet sur le FAD et celui sur le débit massique ou normalisé. Dans son tableau illustratif à 7 bar relatifs et température ambiante constante, un piston mono-étagé apparaît avec une réduction de 5 % du FAD et de 17 % du débit massique/normalisé par tranche de 1 000 m.

Ces indications générales ne constituent pas une courbe certifiée pour le compresseur de votre devis. Elles montrent surtout pourquoi « perte de débit en altitude » exige de préciser **quel débit**. Nous ne les appliquons pas automatiquement au catalogue CompatAir et ne les prolongeons pas à une altitude non validée.

Pour comparer des offres, demandez que le débit fourni et le besoin de l’outil soient exprimés avec leurs conditions de référence. Si un fournisseur annonce un FAD aux conditions d’aspiration et l’autre des litres normalisés, mettez d’abord les bases en cohérence. Le [guide de conversion](/guides/convertir-cfm-l-min-nl-min-air-comprime/) aide à repérer ce manque d’information.

## Le moteur et le refroidissement font partie du choix

Le manuel traite séparément les effets sur les moteurs électriques et thermiques. Il souligne aussi l’incidence de la moindre densité d’air sur le refroidissement. Une validation de l’élément compresseur ne suffit donc pas à qualifier l’ensemble motorisé dans son environnement réel. Source : chapitre 3.1.3, pages PDF 71 à 73.

Pour un chantier mobile, nous conseillons de transmettre au loueur l’altitude du site, la température de travail prévue, l’emplacement de la machine et la liste des outils. Demandez une réponse sur le débit et la pression utilisables du **groupe complet**, ainsi que sur ses limites de service. N’assimilez pas la puissance inscrite sur le moteur à une puissance garantie dans toutes les conditions.

## Préparer un devis qui peut être vérifié sur place

Une demande utile décrit d’abord le travail : outils exacts, nombre simultané, séquences et pression nécessaire au poste. Elle décrit ensuite le site et la liaison. Enfin, elle exige que le fournisseur identifie les conditions retenues pour son calcul. C’est notre proposition de dossier, pas une liste d’obligations réglementaires.

Nous proposons de conserver quatre éléments à la réception : la référence du groupe, la confirmation écrite pour le site, la configuration des flexibles et le relevé de pression pendant la séquence représentative. Si le chantier change d’altitude ou de température, la confirmation initiale doit être réexaminée ; un essai dans un dépôt situé ailleurs ne documente pas automatiquement la nouvelle situation.

## Faut-il simplement prendre la taille au-dessus ?

Pas sans connaître ce qui limite l’installation. Une classe de compresseur supérieure ne résout pas à elle seule un moteur hors de son domaine de fonctionnement, une pression maximale réduite ou une liaison mal dimensionnée. Le critère d’achat doit rester une capacité documentée sur le site, avec le cycle demandé.

Comparez les autres paramètres dans le [guide du compresseur mobile de chantier](/guides/choisir-compresseur-mobile-chantier-fad-autonomie/). Pour une utilisation stationnaire, vérifiez aussi la [ventilation du local](/guides/ventilation-local-compresseur-surchauffe/). En l’absence de confirmation constructeur pour l’altitude concernée, CompatAir ne transforme pas une fiche nominale en verdict local garanti.

## Sources et périmètre

Sources consultées le **26 septembre 2026**. Analyse documentaire interne : CompatAir n’a pas réalisé d’essai physique de ces équipements. Les scénarios et calculs pédagogiques sont distingués des caractéristiques publiées.

- [Atlas Copco, dimensionnement en altitude](https://www.atlascopco.com/en-au/compressors/wiki/compressed-air-articles/dimensioning-compressor-installations-at-high-altitudes)
- [Atlas Copco, Compressed Air Manual, chapitre 3.1.3, pages PDF 71 à 73](https://www.atlascopco.com/content/dam/atlas-copco/local-countries/saudi-arabia/documents/Compressed_Air_Manual_tcm44-1249312.pdf)
