---
title: "Airpol mEnergy : changer la consigne modifie la plage de débit Ultra Speed"
seoTitle: "Airpol mEnergy : consigne et plage Ultra Speed"
description: "Le maximum du mEnergy change entre 6,5 et 10 bar. Lire minimum et maximum du tableau Airpol tout en conservant la limite de définition du débit Capacity."
pubDate: 2026-10-03
category: "Utiliser"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
author: "CompatAir"
reviewStatus: "internal"
relatedGuides: ["sequencer-plusieurs-compresseurs", "debitmetre-air-comprime-diametre-conditions-reference", "audit-reseau-air-comprime-protocole-mesures"]
sources: ["https://airpol.com.pl/wp-content/uploads/2026/08/EN-Katalog-Airpol-mEnergy-18-55kW.pdf"]
---

Le débit maximal d’un mEnergy ne se lit pas indépendamment de sa consigne de pression. La brochure Airpol publie plusieurs plages pour chaque modèle et décrit une adaptation de vitesse avec Ultra Speed. **Pour comparer un besoin d’atelier, choisir d’abord la colonne correspondant à la pression requise.**

## Le variateur agit dans une plage approuvée

La [brochure mEnergy d’août 2026, page 8](https://airpol.com.pl/wp-content/uploads/2026/08/EN-Katalog-Airpol-mEnergy-18-55kW.pdf#page=8) décrit une consigne réglable de **6,5 à 10 bar**. Ultra Speed adapte la vitesse pour atteindre le débit maximal possible à la pression choisie, en maintenant la consommation de puissance au niveau nominal du moteur selon Airpol.

Cette description de commande ne constitue pas un relevé électrique sur votre installation. Une puissance nominale et une plage de vitesse ne donnent pas, à elles seules, une consommation annuelle. Le [guide de séquencement des compresseurs](/guides/sequencer-plusieurs-compresseurs/) explique comment la demande et le rôle de chaque machine entrent dans le bilan.

<figure class="article-infographic article-infographic--compact" style="padding-bottom:1rem">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 358" role="img" aria-labelledby="airpol-menergy-ultra-speed-consigne-debit-title airpol-menergy-ultra-speed-consigne-debit-desc" style="display:block;width:100%;height:auto;font-family:system-ui,sans-serif"><title id="airpol-menergy-ultra-speed-consigne-debit-title">mEnergy 18 : plage publiée selon la consigne</title><desc id="airpol-menergy-ultra-speed-consigne-debit-desc">Brochure constructeur : 55–240 m³/h à 6,5 bar, 55–180 m³/h à 10 bar. Le libellé Capacity n’établit pas à lui seul une mesure FAD.</desc><rect width="520" height="358" rx="22" fill="#10281e"/><text x="25" y="43" fill="#d3eb56" font-size="24" font-weight="700">mEnergy 18 · tableau Capacity</text><text x="27" y="103" fill="#eef2e9" font-size="23">6,5 bar</text><path d="M80 131H460" stroke="#8abfa3" stroke-width="4"/><path d="M167.083 131H460" stroke="#d3eb56" stroke-width="14"/><text x="139" y="172" fill="#eef2e9" font-size="20">55</text><text x="426" y="172" fill="#eef2e9" font-size="20">240</text><text x="27" y="215" fill="#eef2e9" font-size="23">10 bar</text><path d="M80 243H460" stroke="#8abfa3" stroke-width="4"/><path d="M167.083 243H365" stroke="#d3eb56" stroke-width="14"/><text x="139" y="284" fill="#eef2e9" font-size="20">55</text><text x="335" y="284" fill="#eef2e9" font-size="20">180</text><text x="27" y="326" fill="#eef2e9" font-size="21">Même axe : 0–240 m³/h</text></svg>
<figcaption>Brochure constructeur : 55–240 m³/h à 6,5 bar, 55–180 m³/h à 10 bar. Le libellé Capacity n’établit pas à lui seul une mesure FAD.</figcaption>
</figure>

## Deux extrémités de plage ont un sens différent

La [page 15](https://airpol.com.pl/wp-content/uploads/2026/08/EN-Katalog-Airpol-mEnergy-18-55kW.pdf#page=15) donne pour **mEnergy 18**, comme pour 18 DRY, les plages « Capacity » suivantes :

| Consigne | Minimum publié | Maximum publié |
| --- | --- | --- |
| 6,5 bar | 55 m³/h | 240 m³/h |
| 7,5 bar | 55 m³/h | 220 m³/h |
| 8 bar | 55 m³/h | 215 m³/h |
| 9 bar | 55 m³/h | 200 m³/h |
| 10 bar | 55 m³/h | 180 m³/h |

Le maximum à 6,5 bar ne peut pas être conservé pour annoncer le service à 10 bar. Le minimum constant dans cette ligne ne signifie pas non plus que la machine satisfait une demande inférieure en régime stabilisé. Le comportement sous son minimum nécessite la documentation de régulation applicable, absente de ce tableau.

## Le mot Capacity laisse une qualification à obtenir

La brochure exprime les valeurs en **m³/h**, sans établir dans les pages examinées leur définition FAD ou une méthode ISO 1217. Nous les publions sous leur libellé documentaire. Elles ne deviennent pas une donnée de compatibilité FAD par simple multiplication vers L/min.

Le [guide du débit restitué](/guides/debitmetre-air-comprime-diametre-conditions-reference/) montre l’importance des conditions de référence. Le [protocole d’audit du réseau](/guides/audit-reseau-air-comprime-protocole-mesures/) aide à définir le besoin sous pression et les périodes de charge.

Avant une décision d’achat, demander à Airpol la définition de Capacity, le point de mesure et le comportement sous le minimum pour la référence exacte. La table permet déjà une conclusion précise : **la plage annoncée change avec la pression**. Elle ne permet pas encore de conclure qu’un outillage donné recevra un FAD suffisant ni de reprendre un gain énergétique commercial comme économie observée.

## Sources et méthode

Documents fabricant consultés le **3 octobre 2026**. Rédaction assistée par IA et revue documentaire interne, sans essai physique ni validation professionnelle externe. Les calculs hypothétiques et les interprétations de CompatAir sont signalés dans le texte.

- [Airpol mEnergy, brochure constructeur août 2026](https://airpol.com.pl/wp-content/uploads/2026/08/EN-Katalog-Airpol-mEnergy-18-55kW.pdf)
