import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "ozen-osc-110-d",
  "slug": "ozen-osc-110-d",
  "brand": "Ozen",
  "model": "OSC 110 D",
  "variant": {
    "familyId": "ozen-osc-110-d",
    "label": "OSC 110 D",
    "distinguishingAttributes": {
      "équipement": "OSC 110 D",
      "pressionDeConfiguration": "13 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 12.5,
      "litersPerMinute": 15280
    }
  ],
  "powerKw": 110,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/ozen-osc-110-d.svg",
    "alt": "Repères techniques : Ozen OSC 110 D",
    "sourceUrl": "https://ozenkompresor.com.tr/wp-content/uploads/2026/01/katalog-2025.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "OSC 110 D",
      "evidenceIds": [
        "october4c-ozen-catalog-2025-p19"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "13 bar",
      "evidenceIds": [
        "october4c-ozen-catalog-2025-p19"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-ozen-catalog-2025-p19"
      ]
    },
    {
      "label": "Air livré à 12,5 bar",
      "value": "15 280 L/min",
      "evidenceIds": [
        "october4c-ozen-catalog-2025-p19"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "110 kW",
      "evidenceIds": [
        "october4c-ozen-catalog-2025-p19"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-ozen-catalog-2025-p19"
      ]
    },
    {
      "label": "Lecture du tableau constructeur",
      "value": "OSC 110 D : débit de la configuration 13 bar mesuré à 12,5 bar selon la note du tableau ; 15,28 m³/min, masse publiée 2 740 kg. Ne pas assimiler cette machine à l’OSC 110 S de 4 070 kg.",
      "evidenceIds": [
        "october4c-ozen-catalog-2025-p19",
        "ozen-osc-110-d-reserved-20261031-1"
      ]
    }
  ],
  "editorial": {
    "overview": "Ozen OSC 110 D. 15 280 L/min déclarés à 12,5 bar. Configuration constructeur : OSC 110 D.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 15 280 L/min déclarés à 12,5 bar.",
      "OSC 110 D : débit de la configuration 13 bar mesuré à 12,5 bar selon la note du tableau ; 15,28 m³/min, masse publiée 2 740 kg. Ne pas assimiler cette machine à l’OSC 110 S de 4 070 kg."
    ],
    "limitations": [
      "Marque officielle Özen ; alias Ozen utilisé pour la recherche. La cuve, la fréquence et le cycle de service ne sont pas qualifiés dans le tableau.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
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
      "id": "ozen-osc-110-d-reserved-20261031-1",
      "sourceUrl": "https://ozenkompresor.com.tr/wp-content/uploads/2026/01/katalog-2025.pdf#page=19",
      "sourceLabel": "Ozen OSC 110 D : relecture documentaire du 31 octobre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-31",
      "confidence": "B",
      "notes": "SHA-256 cfcfbd23c05cfe5db69ec1bb59c552a6543cf1597869b67811a985d1b7458b60. OSC 110 D : débit de la configuration 13 bar mesuré à 12,5 bar selon la note du tableau ; 15,28 m³/min, masse publiée 2 740 kg. Ne pas assimiler cette machine à l’OSC 110 S de 4 070 kg."
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
      "october4c-ozen-catalog-2025-p19"
    ],
    "powerKw": [
      "october4c-ozen-catalog-2025-p19"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};

export default product;
