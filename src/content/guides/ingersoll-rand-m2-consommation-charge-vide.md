---
title: "Ingersoll Rand M2 : retenir la consommation en charge"
seoTitle: "Ingersoll Rand M2 : retenir la consommation en charge"
description: "Le tableau M2 distingue 19,8 L/s en charge et une valeur à vide plus faible. Conversion et conséquences pour dimensionner un poste de meulage."
pubDate: 2026-09-26
category: "Choisir"
audiences: ["professionnel"]
metiers: ["maintenance-industrielle"]
readingTime: 3
relatedGuides: ["compresseur-pour-meuleuse-pneumatique", "diagnostiquer-chute-pression-air-comprime"]
sources: ["https://powertools.ingersollrand.com/en-gb/asset-library/"]
---

Sur les M2A120RG4 et M2H180RG4, Ingersoll Rand publie 19,8 L/s en charge. Les consommations à vide sont respectivement 8,0 et 6,6 L/s. Retenir uniquement le petit chiffre ferait donc disparaître une partie importante du besoin documenté.

| Référence exacte | Données pneumatiques publiées | Autres repères |
| --- | --- | --- |
| [M2A120RG4](/outils-pneumatiques/ingersoll-rand-m2a120rg4/) (M2A120RG4) | 1188 L/min ; 6,2 bar | Vitesse à vide : 12000 tr/min ; Masse publiée : 1.62 kg ; Consommation en charge / à vide : 19.8 / 8.0 L/s |
| [M2H180RG4](/outils-pneumatiques/ingersoll-rand-m2h180rg4/) (M2H180RG4) | 1188 L/min ; 6,2 bar | Vitesse à vide : 18000 tr/min ; Masse publiée : 0.77 kg ; Consommation en charge / à vide : 19.8 / 6.6 L/s |

Sources fabricant consultées le 26 septembre 2026 : [Ingersoll Rand M2A120RG4](https://powertools.ingersollrand.com/en-gb/asset-library/#page=5), [Ingersoll Rand M2H180RG4](https://powertools.ingersollrand.com/en-gb/asset-library/#page=5).

## Refaire la conversion, régime par régime

| Référence | En charge | À vide |
| --- | --- | --- |
| M2A120RG4 | 19,8 × 60 = 1 188 L/min | 8,0 × 60 = 480 L/min |
| M2H180RG4 | 19,8 × 60 = 1 188 L/min | 6,6 × 60 = 396 L/min |

Pour M2H180RG4, la valeur en charge est exactement trois fois celle à vide. Le calcul porte sur les deux colonnes du catalogue ; il ne doit pas devenir une règle générale de multiplication applicable aux autres meuleuses.

<div class="article-infographic article-infographic--compact" tabindex="0" role="group" aria-label="M2H180RG4 : deux régimes">
<svg viewBox="0 0 380 288" role="img" aria-labelledby="ingersoll-rand-m2-consommation-charge-vide-title ingersoll-rand-m2-consommation-charge-vide-desc" xmlns="http://www.w3.org/2000/svg"><title id="ingersoll-rand-m2-consommation-charge-vide-title">M2H180RG4 : deux régimes</title><desc id="ingersoll-rand-m2-consommation-charge-vide-desc">À vide: 6,6 L/s = 396 L/min ; En charge: 19,8 L/s = 1 188 L/min ; Rapport calculé: 3 pour cette référence et ces colonnes</desc><rect width="380" height="288" rx="18" fill="#eef2e9"/><text x="20" y="32" font-size="19" font-weight="700" fill="#143426">M2H180RG4 : deux régimes</text><text x="20" y="74" font-size="16" font-weight="700" fill="#143426">À vide</text><text x="20" y="97" font-size="15" font-weight="400" fill="#143426">6,6 L/s = 396 L/min</text><text x="20" y="136" font-size="16" font-weight="700" fill="#143426">En charge</text><text x="20" y="159" font-size="15" font-weight="400" fill="#143426">19,8 L/s = 1 188 L/min</text><text x="20" y="198" font-size="16" font-weight="700" fill="#143426">Rapport calculé</text><text x="20" y="221" font-size="15" font-weight="400" fill="#143426">3 pour cette référence et ces colonnes</text><text x="20" y="260" font-size="12" font-weight="400" fill="#143426">Ne pas appliquer ce facteur aux autres outils.</text></svg>
</div>

## Contrôler la réserve de production avant le raccord

Ces références ne peuvent pas être dimensionnées comme un outil consommant seulement 400 L/min parce qu’un essai à vide semblait satisfaisant. Le compresseur doit être confronté à la demande représentative de l’opération, avec un débit restitué documenté à la pression utile.

La bibliothèque officielle Ingersoll Rand donne accès au document « IR Industrial Air Surface Preparation Tool Catalog.pdf ». Les lignes M2 se trouvent à la page PDF 5. Le catalogue conserve la qualification charge/vide ; elle doit accompagner toute transcription.

Une fois le débit vérifié, contrôlez le réseau pendant le travail. Le [diagnostic de pression dynamique](/guides/diagnostiquer-chute-pression-air-comprime/) aide à distinguer manque de production et restriction locale. Une cuve plus grande ne suffit pas à alimenter durablement une demande en charge supérieure à la production.

La pression de référence est documentée dans [Ingersoll Rand, IR Industrial Air Surface Preparation Tool Catalog.pdf, bibliothèque officielle, page PDF 26](https://powertools.ingersollrand.com/en-gb/asset-library/#page=26).
