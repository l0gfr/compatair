---
title: "Netter NTS : régler fréquence et amplitude avec deux commandes"
seoTitle: "Netter NTS : fréquence, amplitude et échappement"
description: "Sur le NTS, pression et étranglement d’échappement ont des effets distincts. Examinez les sections, la longueur des flexibles et les démarrages après réglage."
pubDate: "2026-10-03"
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 4
reviewStatus: "internal"
relatedGuides: ["vibreur-pneumatique-tremie-debit-compresseur", "silencieux-pneumatique-colmate-contre-pression", "netter-nts-redemarrage-arret-court"]
sources: ["https://www.nettervibration.com/files/NetterVibration/Products/NTS/Documents/KBA-NTS-1895DE_EN.pdf"]
---

**Sur un vibreur linéaire Netter NTS, la pression d’alimentation et l’étranglement de l’échappement ne règlent pas la même grandeur.** La première agit sur la fréquence ; le second peut servir à régler l’amplitude. Un échappement rétréci par le montage peut donc changer le fonctionnement sans modification du régulateur.

La [notice NTS, section 7, page anglaise 8](https://www.nettervibration.com/files/NetterVibration/Products/NTS/Documents/KBA-NTS-1895DE_EN.pdf#page=17) indique qu’une baisse de pression réduit la fréquence et la force annoncée, avec une amplitude presque constante. L’étranglement de l’échappement réduit l’amplitude et la force, avec une fréquence presque constante. Ces expressions ne décrivent pas des invariances exactes.

## Écrire le défaut avant de choisir une commande

Une cadence de vibration inadaptée et un déplacement vibratoire trop important sont deux problèmes différents. Pour un convoyeur, précisez si la demande concerne le comportement de la matière, la fréquence relevée ou l’amplitude du mouvement. « Vibrer moins » ne permet pas de choisir laquelle des deux commandes examiner.

Le réglage doit rester celui du modèle et du procédé installés. Aucune valeur de pression ou de course n’est déduite ici de la seule masse transportée. Le [guide des vibreurs de trémie](/guides/vibreur-pneumatique-tremie-debit-compresseur/) examine le besoin d’air d’une autre architecture ; une turbine ne doit pas être traitée comme ce piston linéaire.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1.5rem">
<svg viewBox="0 0 520 350" role="img" aria-labelledby="netter-nts-frequence-amplitude-etranglement-svg-title netter-nts-frequence-amplitude-etranglement-svg-desc" xmlns="http://www.w3.org/2000/svg">
<title id="netter-nts-frequence-amplitude-etranglement-svg-title">Deux commandes avec des effets différents</title><desc id="netter-nts-frequence-amplitude-etranglement-svg-desc">Selon la notice NTS, une baisse de pression réduit fréquence et force, avec une amplitude presque constante. L’étranglement d’échappement réduit amplitude et force, avec une fréquence presque constante. Circuit fonctionnel qualitatif, sans diamètre ni réglage prescrit.</desc>
<rect width="520" height="350" rx="20" fill="#10281e"/>
<g font-family="Manrope Variable, sans-serif"><text x="28" y="42" fill="white" font-size="23">NTS : deux commandes distinctes</text><circle cx="93" cy="133" r="38" fill="#203f31" stroke="#9ebdad" stroke-width="2"/><path d="M93 133l19-21M131 133h54m149 0h54" stroke="#d3eb56" stroke-width="3" fill="none"/><rect x="185" y="96" width="149" height="74" rx="10" fill="#203f31" stroke="#9ebdad" stroke-width="2"/><text x="222" y="142" fill="white" font-size="23">NTS</text><path d="M388 111l34 22-34 22m34-44-34 22 34 22M405 104v58m17-29h61" stroke="#d3eb56" stroke-width="3" fill="none"/><text x="33" y="216" fill="white" font-size="21">Pression</text><text x="33" y="246" fill="white" font-size="20">→ fréquence</text><text x="300" y="216" fill="white" font-size="21">Échappement</text><text x="300" y="246" fill="white" font-size="20">→ amplitude</text><text x="28" y="303" fill="white" font-size="20">Un flexible réduit peut ajouter</text><text x="28" y="335" fill="white" font-size="20">un étranglement involontaire.</text></g>
</svg>
<figcaption>Selon la notice NTS, une baisse de pression réduit fréquence et force, avec une amplitude presque constante. L’étranglement d’échappement réduit amplitude et force, avec une fréquence presque constante. Circuit fonctionnel qualitatif, sans diamètre ni réglage prescrit.</figcaption>
</figure>

## Chercher l’étranglement ajouté par le montage

La notice avertit qu’une section réduite constitue déjà un étranglement. Dans la [section 6, page anglaise 7](https://www.nettervibration.com/files/NetterVibration/Products/NTS/Documents/KBA-NTS-1895DE_EN.pdf#page=16), Netter précise que les diamètres nominaux annoncés correspondent à des flexibles allant jusqu’à **3 m** ; des liaisons d’alimentation plus longues nécessitent des sections plus grandes. Pour conserver la pleine performance, le flexible d’échappement doit avoir un diamètre nominal supérieur à celui de l’alimentation.

Le tableau de raccordement est propre à chaque taille. Comparer uniquement les filetages d’entrée et de sortie ne vérifie pas les diamètres intérieurs des flexibles réellement montés. Une rallonge ou un raccord ajouté après réception peut modifier cette partie du circuit.

L’échappement fait donc partie du contrôle après déplacement du vibreur. Le [guide des silencieux colmatés](/guides/silencieux-pneumatique-colmate-contre-pression/) présente un autre obstacle possible à l’évacuation, à distinguer du réglage volontaire.

## Respecter la limite de réduction publiée

Netter demande de ne réduire l’amplitude que jusqu’à **environ 50 %**, car une réduction plus importante peut créer des problèmes de démarrage. Cette indication n’autorise pas à viser une demi-amplitude dans toutes les applications, ni à en déduire un pourcentage d’économie d’air.

Si le vibreur commence à manquer des démarrages après réglage, notez séparément la position d’étranglement et les durées d’arrêt. Le [cas du NTS après un arrêt très court](/guides/netter-nts-redemarrage-arret-court/) décrit une autre cause documentée, liée au retour du piston.

| Modification récente | Contrôle pertinent |
| --- | --- |
| Pression réduite | Fréquence et fonctionnement du procédé |
| Échappement étranglé | Amplitude et capacité de démarrage |
| Flexible rallongé ou changé | Sections et longueur par rapport au tableau du modèle |
| Silencieux remplacé ou encrassé | Évacuation et fonction de la pièce montée |

Une remise en réglage réussie doit être observée sur le fonctionnement demandé, avec les mêmes conditions de matière et de montage. Ne retenez pas un simple changement sonore comme mesure de fréquence ou d’amplitude : les deux grandeurs demandent un relevé adapté si elles servent de critère de réception.

## Sources et méthode

Sources fabricant consultées le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne. Aucun essai physique ni validation professionnelle externe. Les scénarios de calcul et les procédures de réception proposées par CompatAir sont identifiés dans le texte.
