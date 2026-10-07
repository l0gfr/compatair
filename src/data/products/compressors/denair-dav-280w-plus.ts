import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "denair-dav-280w-plus",
  "slug": "denair-dav-280w-plus",
  "brand": "DENAIR",
  "model": "DAV-280W+",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "denair-dav-280w-plus",
    "label": "DAV-280W+",
    "distinguishingAttributes": {
      "équipement": "DAV-280W+",
      "pressionDeConfiguration": "7 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 7,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 7,
      "litersPerMinute": 60240
    }
  ],
  "oilType": "unknown",
  "powerKw": 280,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/denair-dav-280w-plus.svg",
    "alt": "Repères techniques : DENAIR DAV-280W+",
    "sourceUrl": "https://www.denair.net/uploads/DENAIR-PM-VSD-Double-Stage-Catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "DENAIR DAV-280W+. 60 240 L/min déclarés à 7 bar, maximum de la plage FAD publiée, sans qualification du régime moteur. Configuration constructeur : DAV-280W+.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 7 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 60 240 L/min déclarés à 7 bar, maximum de la plage FAD publiée, sans qualification du régime moteur."
    ],
    "limitations": [
      "Maximum de la plage FAD à la pression de cette ligne ; minimum de régulation publié séparément. Cuve, fréquence et cycle de marche non chiffrés. Le suffixe + désigne la gamme à deux étages, conservée comme Plus dans l’identité normalisée.",
      "Le plafond de configuration retenu correspond à la pression de service de cette ligne, sans attribuer cette capacité aux autres variantes.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "DAV-280W+",
      "evidenceIds": [
        "october5-denair-double-stage-p11"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "7 bar",
      "evidenceIds": [
        "october5-denair-double-stage-p11"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october5-denair-double-stage-p11"
      ]
    },
    {
      "label": "FAD maximal déclaré à 7 bar",
      "value": "60 240 L/min",
      "evidenceIds": [
        "october5-denair-double-stage-p11"
      ]
    },
    {
      "label": "FAD minimal déclaré à 7 bar",
      "value": "24 100 L/min ; minimum de régulation, distinct de la capacité maximale",
      "evidenceIds": [
        "october5-denair-double-stage-p11"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "280 kW",
      "evidenceIds": [
        "october5-denair-double-stage-p11"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october5-denair-double-stage-p11"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-denair-double-stage-p11",
      "sourceUrl": "https://www.denair.net/uploads/DENAIR-PM-VSD-Double-Stage-Catalogue.pdf#page=11",
      "sourceLabel": "DENAIR, PM VSD Rotary Screw Air Compressors, gammes DAV et DAV+, page PDF 11",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 a0072a0e9d479eb5aee4a7f73160f0ca838a21d922d7d609c9daa4769ef5e28e de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october5-denair-double-stage-p11"
    ],
    "model": [
      "october5-denair-double-stage-p11"
    ],
    "maxPressureBar": [
      "october5-denair-double-stage-p11"
    ],
    "fadCurve": [
      "october5-denair-double-stage-p11"
    ],
    "powerKw": [
      "october5-denair-double-stage-p11"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};

export default product;
