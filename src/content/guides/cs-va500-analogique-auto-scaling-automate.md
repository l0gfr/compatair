---
title: "VA500 : pourquoi l’automate peut lire un autre débit après un changement d’échelle"
seoTitle: "VA500 : corriger l’échelle 4–20 mA de l’automate"
description: "Après un changement Auto Scaling, le VA500 et l’automate peuvent interpréter différemment le même courant. Vérifier grandeur, bornes et courant d’erreur."
pubDate: 2026-10-03
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["debitmetre-air-comprime-diametre-conditions-reference", "audit-reseau-air-comprime-protocole-mesures", "convertir-cfm-l-min-nl-min-air-comprime"]
sources: ["https://www.cs-instruments.com/fileadmin/cs-data/Bedienungsanleitungen/Instruction%20manuals_EN_new/Instruction_manual_VA500_EN.pdf"]
---

Le VA500 affiche un débit cohérent mais l’automate lit le double, ou la moitié, après une modification de configuration. Une échelle analogique différente suffit à créer cet écart sans changement réel du débit. **Il faut comparer la grandeur et les deux bornes de la voie, pas seulement l’intensité.**

## Auto Scaling dépend de plusieurs paramètres

La [notice VA500 V2.02, page 28](https://www.cs-instruments.com/fileadmin/cs-data/Bedienungsanleitungen/Instruction%20manuals_EN_new/Instruction_manual_VA500_EN.pdf#page=28) permet d’affecter à la voie une température, une vitesse ou un débit. L’échelle peut être automatique ou manuelle. En automatique, le calcul dépend du diamètre du tuyau, de la plage maximale valide du produit et des conditions de référence.

Un changement de diamètre déclaré peut donc modifier l’échelle retenue par le capteur. Si la conversion côté automate garde l’ancienne borne haute, les nombres affichés ne représentent plus la même relation courant–grandeur. Le [guide d’installation des débitmètres](/guides/debitmetre-air-comprime-diametre-conditions-reference/) traite les paramètres pneumatiques ; ici, il faut aussi les faire correspondre au traitement électrique.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 341" role="img" aria-labelledby="cs-va500-analogique-auto-scaling-automate-title cs-va500-analogique-auto-scaling-automate-desc" style="display:block;width:100%;height:auto;font-family:system-ui,sans-serif"><title id="cs-va500-analogique-auto-scaling-automate-title">VA500 : une intensité ne suffit pas sans échelle</title><desc id="cs-va500-analogique-auto-scaling-automate-desc">Scénario linéaire propre : 12 mA correspondent à 50 % de la plage. Avec une borne haute de 100 puis 200 m³/h, l’interprétation devient 50 puis 100 m³/h.</desc><rect width="520" height="341" rx="22" fill="#10281e"/><text x="26" y="42" fill="#d3eb56" font-size="25" font-weight="700">12 mA · même signal</text><path d="M45 120H473M45 215H473" stroke="#8abfa3" stroke-width="5"/><circle cx="259" cy="120" r="10" fill="#d3eb56"/><circle cx="259" cy="215" r="10" fill="#d3eb56"/><text x="38" y="97" fill="#eef2e9" font-size="20">0</text><text x="398" y="97" fill="#eef2e9" font-size="18">100 m³/h</text><text x="215" y="159" fill="#eef2e9" font-size="23">50 m³/h</text><text x="38" y="191" fill="#eef2e9" font-size="20">0</text><text x="398" y="191" fill="#eef2e9" font-size="18">200 m³/h</text><text x="206" y="255" fill="#eef2e9" font-size="23">100 m³/h</text><text x="27" y="305" fill="#eef2e9" font-size="20">Exemple de calcul, sans relevé terrain</text></svg>
<figcaption>Scénario linéaire propre : 12 mA correspondent à 50 % de la plage. Avec une borne haute de 100 puis 200 m³/h, l’interprétation devient 50 puis 100 m³/h.</figcaption>
</figure>

## Un scénario pour lire l’écart

Dans un exemple **linéaire et hypothétique**, une voie configurée de **4 à 20 mA** entre **0 et 100 m³/h** représente **50 m³/h à 12 mA** : (12 − 4) ÷ (20 − 4) = 0,5. Si sa borne haute devient **200 m³/h**, 12 mA représentent **100 m³/h**. Le signal est identique, l’échelle change.

Ce calcul explique un facteur deux possible, sans attribuer ces plages à un VA500 particulier. La configuration réelle doit fournir la grandeur, son unité, les bornes et le mode Auto Scaling. Le [protocole de mesure du réseau](/guides/audit-reseau-air-comprime-protocole-mesures/) aide à conserver ces paramètres avec les relevés.

## Séparer un dépassement de plage d’un défaut

La même page permet de choisir un courant d’erreur de **2 mA** ou **22 mA** pour un défaut capteur ou système. Le choix « None » applique le comportement NAMUR publié : **3,8–20,5 mA**, avec la zone inférieure à 4 mA pour un dépassement vers le bas et celle supérieure à 20 mA pour un dépassement vers le haut.

| Signal reçu | Lecture à confirmer dans la configuration |
| --- | --- |
| Dans la plage nominale | Grandeur et échelle correspondantes |
| 2 ou 22 mA | Courant d’erreur effectivement choisi |
| Entre 3,8 et 4 mA | Sous-plage selon le mode publié |
| Entre 20 et 20,5 mA | Dépassement haut selon ce mode |

Transformer chaque courant hors plage en zéro masquerait un état de défaut ou de dépassement. La validation des entrées et leur affichage d’indisponibilité relèvent du système d’acquisition installé.

Après alignement des échelles, comparer capteur et automate sur la même période, avec la même unité de volume. Le [guide des unités d’air](/guides/convertir-cfm-l-min-nl-min-air-comprime/) complète ce dernier contrôle : une bonne conversion électrique ne corrige pas une différence de référence pneumatique.

## Sources et méthode

Documents fabricant consultés le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne, sans essai physique ni validation professionnelle externe. Les calculs hypothétiques et les interprétations de CompatAir sont signalés dans le texte.

- [CS Instruments VA500, notice V2.02, avril 2026](https://www.cs-instruments.com/fileadmin/cs-data/Bedienungsanleitungen/Instruction%20manuals_EN_new/Instruction_manual_VA500_EN.pdf)
