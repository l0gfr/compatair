import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "ozen-osc-132-d",
  "slug": "ozen-osc-132-d",
  "brand": "Ozen",
  "model": "OSC 132 D",
  "variant": {
    "familyId": "ozen-osc-132-d",
    "label": "OSC 132 D",
    "distinguishingAttributes": {
      "équipement": "OSC 132 D",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [],
  "powerKw": 132,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/ozen-osc-132-d.svg",
    "alt": "Repères techniques : Ozen OSC 132 D",
    "sourceUrl": "https://ozenkompresor.com.tr/wp-content/uploads/2026/01/katalog-2025.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Modèle",
      "value": "OSC132D",
      "evidenceIds": [
        "ozen-osc-132-d-reserved-20261103-1"
      ]
    },
    {
      "label": "Capacité de la ligne de travail13 bar",
      "value": "18,28 m³/min, pression effective de mesure à confirmer",
      "evidenceIds": [
        "ozen-osc-132-d-reserved-20261103-1"
      ]
    },
    {
      "label": "Puissance moteur",
      "value": "132 kW",
      "evidenceIds": [
        "ozen-osc-132-d-reserved-20261103-1"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "3 250 kg",
      "evidenceIds": [
        "ozen-osc-132-d-reserved-20261103-1"
      ]
    },
    {
      "label": "Raccord",
      "value": "3\"",
      "evidenceIds": [
        "ozen-osc-132-d-reserved-20261103-1"
      ]
    },
    {
      "label": "Dimensions En×Boy×Yükseklik",
      "value": "1 600 × 3 200 × 1 855 mm",
      "evidenceIds": [
        "ozen-osc-132-d-reserved-20261103-1"
      ]
    }
  ],
  "editorial": {
    "overview": "Ozen OSC 132 D. La OSC132D annonce18,28 m³/min sur la ligne 13 bar, contre 15,28 pour la OSC110D. La note de page décale13 vers12,5 bar mais nommeSHD : son application exacte àOSC doit être confirmée. Le point12,5 bar est retiré du moteur plutôt que de supposer la portée de ce renvoi.",
    "verifiedFacts": [
      "Modèle : OSC132D.",
      "Capacité de la ligne de travail13 bar : 18,28 m³/min, pression effective de mesure à confirmer.",
      "Puissance moteur : 132 kW.",
      "Masse publiée : 3 250 kg.",
      "Raccord : 3\".",
      "Dimensions En×Boy×Yükseklik : 1 600 × 3 200 × 1 855 mm."
    ],
    "limitations": [
      "Renvoi de mesure mentionnantSHD dans la tableOSC : portée à confirmer auprès d’Özen.",
      "Capacité conservée dans les spécifications, courbe FAD vide. Cuve, fréquence et taux de marche non établis."
    ]
  },
  "evidence": [
    {
      "id": "october4c-ozen-catalog-2025-p19",
      "sourceUrl": "https://ozenkompresor.com.tr/wp-content/uploads/2026/01/katalog-2025.pdf#page=19",
      "sourceLabel": "Özen, catalogue constructeur 2025, page PDF 19",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 cfcfbd23c05cfe5db69ec1bb59c552a6543cf1597869b67811a985d1b7458b60 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "ozen-osc-132-d-reserved-20261103-1",
      "sourceUrl": "https://ozenkompresor.com.tr/wp-content/uploads/2026/01/katalog-2025.pdf#page=19",
      "sourceLabel": "Ozen : revue factuelle du 3 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-03",
      "confidence": "B",
      "notes": "GET complet HTTP200 SHA-256 cfcfbd23c05cfe5db69ec1bb59c552a6543cf1597869b67811a985d1b7458b60. La OSC132D annonce18,28 m³/min sur la ligne 13 bar, contre 15,28 pour la OSC110D. La note de page décale13 vers12,5 bar mais nommeSHD : son application exacte àOSC doit être confirmée. Le point12,5 bar est retiré du moteur plutôt que de supposer la portée de ce renvoi."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4c-ozen-catalog-2025-p19"
    ],
    "model": [
      "october4c-ozen-catalog-2025-p19"
    ],
    "maxPressureBar": [
      "october4c-ozen-catalog-2025-p19"
    ],
    "fadCurve": [
      "ozen-osc-132-d-reserved-20261103-1"
    ],
    "powerKw": [
      "ozen-osc-132-d-reserved-20261103-1"
    ],
    "weightKg": [
      "ozen-osc-132-d-reserved-20261103-1"
    ],
    "editorial": [
      "ozen-osc-132-d-reserved-20261103-1"
    ],
    "specifications": [
      "ozen-osc-132-d-reserved-20261103-1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ],
  "weightKg": 3250
};
export default product;
