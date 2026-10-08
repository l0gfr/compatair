import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "anest-iwata-slpa-15e-90",
  "slug": "anest-iwata-slpa-15e-90",
  "brand": "Anest Iwata",
  "model": "SLPA-15E-90",
  "variant": {
    "familyId": "anest-iwata-slpa-15e-90",
    "label": "Scroll oil-free ; w/Tank",
    "distinguishingAttributes": {
      "équipement": "Scroll oil-free ; w/Tank",
      "pointDocumentaire": "8 bar",
      "cuve": "90 L",
      "fréquence": "50 Hz",
      "phase": "single-phase"
    }
  },
  "tankLiters": 90,
  "maxPressureBar": 8,
  "maxPressureBasis": "explicit-maximum-working-pressure",
  "fadCurve": [
    {
      "pressureBar": 8,
      "litersPerMinute": 155
    }
  ],
  "powerKw": 1.5,
  "weightKg": 175,
  "noiseDb": 57,
  "phase": "single-phase",
  "voltage": "240 V",
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/anest-iwata-slpa-15e-90.svg",
    "alt": "Repères techniques : Anest Iwata SLPA-15E-90",
    "sourceUrl": "https://anest-iwata.com.au/product-guides/100-oil-free-scroll/air-energy-catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Scroll oil-free ; w/Tank",
      "evidenceIds": [
        "october8-iwata-energy-p5"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "8 bar",
      "evidenceIds": [
        "october8-iwata-energy-p5"
      ]
    },
    {
      "label": "Débit restitué déclaré à 8 bar",
      "value": "155 L/min (155 L/min publiés)",
      "evidenceIds": [
        "october8-iwata-energy-p5"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "90 L",
      "evidenceIds": [
        "october8-iwata-energy-p5"
      ]
    },
    {
      "label": "Commande publiée",
      "value": "Pressure switch",
      "evidenceIds": [
        "october8-iwata-energy-p5"
      ]
    },
    {
      "label": "Puissance moteur publiée, écriture native",
      "value": "1,5",
      "evidenceIds": [
        "october8-iwata-energy-p5"
      ]
    },
    {
      "label": "Débit publié, unité secondaire m³/h",
      "value": "9",
      "evidenceIds": [
        "october8-iwata-energy-p5"
      ]
    },
    {
      "label": "Alimentation publiée, Volt/Hz/Pha",
      "value": "240/50/1",
      "evidenceIds": [
        "october8-iwata-energy-p5"
      ]
    },
    {
      "label": "Conditions de mesure du bruit",
      "value": "Noise level measured at a distance of 1M according to ISO11201; tolerance±3dB",
      "evidenceIds": [
        "october8-iwata-energy-p5"
      ]
    },
    {
      "label": "Puissance native publiée",
      "value": "1,5 kW",
      "evidenceIds": [
        "october8-iwata-energy-p5"
      ]
    },
    {
      "label": "Masse en service ou nette publiée",
      "value": "175 kg",
      "evidenceIds": [
        "october8-iwata-energy-p5"
      ]
    },
    {
      "label": "Fréquence de la configuration publiée",
      "value": "50 Hz",
      "evidenceIds": [
        "october8-iwata-energy-p5"
      ]
    }
  ],
  "editorial": {
    "overview": "Anest Iwata SLPA-15E-90. 155 L/min déclarés à 8 bar. Configuration publiée : Scroll oil-free ; w/Tank.",
    "verifiedFacts": [
      "Débit réellement livré identifié séparément du déplacement : 155 L/min déclarés à 8 bar.",
      "Maximum de travail publié : 8 bar.",
      "Cuve documentée : 90 L.",
      "Phase électrique documentée : monophasée."
    ],
    "limitations": [
      "Données du catalogue australien : alimentation et configuration propres à ce marché, sans assimilation à une version européenne.",
      "Le débit natif L/min est conservé ; les m³/h publiés sont arrondis avec une précision différente.",
      "Oilfree ne démontre ni une aptitude à l’air respirable ni une installation sanitaire.",
      "Aucune interpolation de débit, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil."
    ]
  },
  "evidence": [
    {
      "id": "october8-iwata-energy-p5",
      "sourceUrl": "https://anest-iwata.com.au/product-guides/100-oil-free-scroll/air-energy-catalogue.pdf#page=5",
      "sourceLabel": "Anest Iwata Australia, Air Energy Catalogue, page PDF 5",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-08",
      "confidence": "B",
      "notes": "SHA-256 aff4c508ab6c389b0b3a5d370302d098cab772d9a532b44ba767031ae36371b8 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october8-iwata-energy-p5"
    ],
    "maxPressureBar": [
      "october8-iwata-energy-p5"
    ],
    "maxPressureBasis": [
      "october8-iwata-energy-p5"
    ],
    "fadCurve": [
      "october8-iwata-energy-p5"
    ],
    "tankLiters": [
      "october8-iwata-energy-p5"
    ],
    "powerKw": [
      "october8-iwata-energy-p5"
    ],
    "weightKg": [
      "october8-iwata-energy-p5"
    ],
    "noiseDb": [
      "october8-iwata-energy-p5"
    ],
    "oilType": [
      "october8-iwata-energy-p5"
    ],
    "voltage": [
      "october8-iwata-energy-p5"
    ],
    "phase": [
      "october8-iwata-energy-p5"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, MIME, URL finale, octets et SHA-256 ; seuls les extraits techniques utiles sont versionnés.",
    "Les caractéristiques décrivent la référence et le marché constructeur documentés ; aucun maximum ou cycle numérique n’est extrapolé."
  ]
};

export default product;
