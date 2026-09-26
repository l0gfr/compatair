---
title: "Outils à 6, 6,2 et 6,3 bar : garder la bonne référence"
seoTitle: "Outils à 6, 6,2 et 6,3 bar : garder la bonne référence"
description: "Nitto, RUPES et Fiam publient ici des pressions différentes. Distinguer conversion d’unité et changement de consigne pour conserver des calculs fiables."
pubDate: 2026-09-26
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
relatedGuides: ["bar-psi-pression-absolue-relative", "pression-travail-6-3-bar-outils-pneumatiques"]
sources: ["https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf", "https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf", "https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/15c5a/", "https://www.fiamgroup.com/wp-content/uploads/2019/11/en-85.pdf"]
---

Toutes les fiches pneumatiques ne se ramènent pas silencieusement à 6,3 bar. Les références examinées ici utilisent 6 bar pour Nitto MYG-40L, 6,2 bar pour RUPES RH356 et 6,3 bar pour Fiam 15C5A. Le calcul doit garder la pression propre à chaque source.

| Référence exacte | Données pneumatiques publiées | Autres repères |
| --- | --- | --- |
| [MYG-40L](/outils-pneumatiques/nitto-kohki-myg-40l/) (MYG-40L) | 690 L/min ; 6 bar | Vitesse de rotation publiée : 13000 tr/min ; Masse publiée : 1.55 kg |
| [RH356](/outils-pneumatiques/rupes-rh356/) (RH356) | 340 L/min ; 6,2 bar | Diamètre d’orbite : 6 mm ; Diamètre de plateau : 150 mm ; Masse publiée : 0,8 kg |
| [15C5A](/outils-pneumatiques/fiam-15c5a/) (112514375) | 330 L/min ; 6,3 bar | Couple de serrage indicatif : 0.4 ÷ 5 Nm ; Vitesse à vide : 650 tr/min ; Masse publiée : 0.59 kg |

Sources fabricant consultées le 26 septembre 2026 : [Nitto Kohki MYG-40L](https://www.nitto-kohki.eu/images/stories/products/pdf_catalogs/Tools_Catalog.pdf#page=36), [RUPES RH356](https://www.rupes.com/catalogue/2026/RUPES_Catalogue-2026_EN.pdf#page=58), [Fiam 15C5A](https://www.fiamgroup.com/en/products/handheld-air-screwdrivers/15c5a/).

## Convertir une unité n’est pas déplacer un point

Nitto exprime 0,6 MPa, qui vaut 6 bar. RUPES associe 6,2 bar à 90 PSIG dans son tableau. Ces écritures peuvent être normalisées pour la lecture, mais elles ne justifient pas de remplacer ensuite toutes les valeurs par une consigne commune arbitraire.

De même, convertir un débit de L/s en L/min conserve la quantité décrite. Recalculer ce débit pour une autre pression demanderait un modèle ou des mesures supplémentaires. Le [guide des unités de pression](/guides/bar-psi-pression-absolue-relative/) explique aussi la distinction entre pression absolue et relative.

<div class="article-infographic article-infographic--compact" tabindex="0" role="group" aria-label="Pressions de ces références">
<svg viewBox="0 0 380 307" role="img" aria-labelledby="outils-6-62-63-bar-pressions-fabricants-title outils-6-62-63-bar-pressions-fabricants-desc" xmlns="http://www.w3.org/2000/svg"><title id="outils-6-62-63-bar-pressions-fabricants-title">Pressions de ces références</title><desc id="outils-6-62-63-bar-pressions-fabricants-desc">Nitto MYG-40L: 0,6 MPa = 6 bar ; RUPES RH356: 6,2 bar dans le tableau ; Fiam 15C5A: 6,3 bar dans la documentation associée</desc><rect width="380" height="307" rx="18" fill="#eef2e9"/><text x="20" y="32" font-size="19" font-weight="700" fill="#143426">Pressions de ces références</text><text x="20" y="74" font-size="16" font-weight="700" fill="#143426">Nitto MYG-40L</text><text x="20" y="97" font-size="15" font-weight="400" fill="#143426">0,6 MPa = 6 bar</text><text x="20" y="136" font-size="16" font-weight="700" fill="#143426">RUPES RH356</text><text x="20" y="159" font-size="15" font-weight="400" fill="#143426">6,2 bar dans le tableau</text><text x="20" y="198" font-size="16" font-weight="700" fill="#143426">Fiam 15C5A</text><text x="20" y="221" font-size="15" font-weight="400" fill="#143426">6,3 bar dans la documentation associée</text><text x="20" y="260" font-size="12" font-weight="400" fill="#143426">Ne pas convertir un débit vers une autre</text><text x="20" y="279" font-size="12" font-weight="400" fill="#143426">pression sans preuve.</text></svg>
</div>

## Organiser un réseau avec plusieurs exigences

Le réglage du réseau et celui des postes doivent respecter les notices des équipements. Pour chaque outil, documentez la pression requise en fonctionnement et les pertes en amont. Une consigne de compresseur supérieure ne dispense pas de vérifier l’alimentation effectivement reçue par l’outil.

Dans un calcul de compatibilité, une donnée de FAD située à une autre pression doit être traitée selon une méthode explicite : interpolation documentée, borne conservatrice ou donnée insuffisante. L’utilisateur doit pouvoir comprendre laquelle a été retenue.

Cette discipline évite de produire des marges artificiellement précises à partir de points déplacés. Les faibles écarts numériques entre 6, 6,2 et 6,3 ne sont pas une raison pour supprimer la provenance du réglage.

La pression de référence est documentée dans [Fiam, brochure technique en-85, page PDF 9](https://www.fiamgroup.com/wp-content/uploads/2019/11/en-85.pdf#page=9).
