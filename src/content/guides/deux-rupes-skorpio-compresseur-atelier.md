---
title: "Deux RUPES Skorpio simultanées : calculer le besoin"
seoTitle: "Deux RUPES Skorpio simultanées : calculer le besoin"
description: "Deux Skorpio RH356 actives ensemble représentent 680 L/min de consommation maximale publiée. Poser un scénario explicite avant de choisir le compresseur."
pubDate: 2026-09-26
category: "Choisir"
audiences: ["professionnel"]
metiers: ["carrosserie-peinture"]
readingTime: 3
relatedGuides: ["utiliser-plusieurs-outils-pneumatiques", "diagnostiquer-chute-pression-air-comprime", "devis-compresseur-deux-postes-poncage"]
sources: ["https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf", "https://www.gentilinair.com/en/products/esk1320-500"]
---

Un atelier qui ajoute une seconde Skorpio doit revoir la simultanéité, même si la première fonctionne correctement. RUPES publie 340 L/min au maximum à 6,2 bar pour RH356. Deux machines actives ensemble donnent donc une somme de 680 L/min, avant marge et avant les autres consommateurs.

| Référence exacte | Données pneumatiques publiées | Autres repères |
| --- | --- | --- |
| [RH356](/outils-pneumatiques/rupes-rh356/) (RH356) | 340 L/min ; 6,2 bar | Diamètre d’orbite : 6 mm ; Diamètre de plateau : 150 mm ; Masse publiée : 0,8 kg |
| [ESK1320/500](/compresseurs/gentilin-esk1320-500/) (814812004) | 800 L/min à 5 bar ; 740 L/min à 8 bar | Cuve 500 L ; pression max. 10 bar |

Sources fabricant consultées le 26 septembre 2026 : [RUPES RH356](https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=58), [Gentilin ESK1320/500](https://www.gentilinair.com/en/products/esk1320-500).

## Ce que la somme établit, et ce qu’elle n’établit pas

680 L/min est un calcul de demande maximale simultanée, pas une mesure de consommation moyenne. Si les opérateurs travaillent alternativement, le profil diffère. Si un troisième équipement consomme au même moment, sa demande doit être examinée séparément.

L’ESK1320/500 illustre le contrôle côté compresseur : Gentilin publie 740 L/min à 8 bar. L’écart arithmétique avec 680 vaut 60 L/min, soit environ 8,8 % du besoin. Ce faible écart brut ne constitue pas une validation du réseau ni une marge universellement suffisante.

<div class="article-infographic article-infographic--compact" tabindex="0" role="group" aria-label="Scénario de deux postes actifs">
<svg viewBox="0 0 380 333" role="img" aria-labelledby="deux-rupes-skorpio-compresseur-atelier-title deux-rupes-skorpio-compresseur-atelier-desc" xmlns="http://www.w3.org/2000/svg"><title id="deux-rupes-skorpio-compresseur-atelier-title">Scénario de deux postes actifs</title><desc id="deux-rupes-skorpio-compresseur-atelier-desc">Demande maximale publiée: 2 × 340 = 680 L/min à 6,2 bar ; Exemple de FAD documenté: ESK1320/500 : 740 L/min à 8 bar ; Écart brut calculé: 60 L/min ; environ 8,8 % du besoin</desc><rect width="380" height="333" rx="18" fill="#eef2e9"/><text x="20" y="32" font-size="19" font-weight="700" fill="#143426">Scénario de deux postes</text><text x="20" y="58" font-size="19" font-weight="700" fill="#143426">actifs</text><text x="20" y="100" font-size="16" font-weight="700" fill="#143426">Demande maximale publiée</text><text x="20" y="123" font-size="15" font-weight="400" fill="#143426">2 × 340 = 680 L/min à 6,2 bar</text><text x="20" y="162" font-size="16" font-weight="700" fill="#143426">Exemple de FAD documenté</text><text x="20" y="185" font-size="15" font-weight="400" fill="#143426">ESK1320/500 : 740 L/min à 8 bar</text><text x="20" y="224" font-size="16" font-weight="700" fill="#143426">Écart brut calculé</text><text x="20" y="247" font-size="15" font-weight="400" fill="#143426">60 L/min ; environ 8,8 % du besoin</text><text x="20" y="286" font-size="12" font-weight="400" fill="#143426">Ni pertes du réseau ni autres consommateurs</text><text x="20" y="305" font-size="12" font-weight="400" fill="#143426">inclus.</text></svg>
</div>

## Vérifier le point le plus éloigné

Les deux outils demandent une pression utile au poste. Le réseau, les filtres, les régulateurs et les flexibles peuvent réduire cette pression pendant l’action simultanée. Il faut donc contrôler le cas où les deux opérateurs utilisent réellement leurs machines, pas seulement lire le manomètre avec les gâchettes relâchées.

Le [guide sur plusieurs outils pneumatiques](/guides/utiliser-plusieurs-outils-pneumatiques/) permet de formaliser le scénario, et le [diagnostic de chute de pression](/guides/diagnostiquer-chute-pression-air-comprime/) aide à localiser une restriction.

L’intérêt du calcul est de rendre l’hypothèse visible. Il ne suffit pas de choisir un compresseur dont le chiffre commercial dépasse 680, surtout si ce chiffre est un débit aspiré ou un débit sans pression associée.
