import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "denair-dav-200-w-plus",
  "slug": "denair-dav-200-w-plus",
  "brand": "DENAIR",
  "model": "DAV-200(W)+",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "denair-dav-200-w-plus",
    "label": "DAV-200(W)+",
    "distinguishingAttributes": {
      "équipement": "DAV-200(W)+",
      "pressionDeConfiguration": "7 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 7,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 7,
      "litersPerMinute": 44450
    }
  ],
  "oilType": "unknown",
  "powerKw": 200,
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/denair-dav-200-w-plus.svg",
    "alt": "Repères techniques : DENAIR DAV-200(W)+",
    "sourceUrl": "https://www.denair.net/uploads/DENAIR-PM-VSD-Double-Stage-Catalogue.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "DENAIR DAV-200(W)+. 44 450 L/min déclarés à 7 bar, maximum de la plage FAD publiée, sans qualification du régime moteur. Configuration constructeur : DAV-200(W)+.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 7 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 44 450 L/min déclarés à 7 bar, maximum de la plage FAD publiée, sans qualification du régime moteur."
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
      "value": "DAV-200(W)+",
      "evidenceIds": [
        "october5-denair-double-stage-p10"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "7 bar",
      "evidenceIds": [
        "october5-denair-double-stage-p10"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october5-denair-double-stage-p10"
      ]
    },
    {
      "label": "FAD maximal déclaré à 7 bar",
      "value": "44 450 L/min",
      "evidenceIds": [
        "october5-denair-double-stage-p10"
      ]
    },
    {
      "label": "FAD minimal déclaré à 7 bar",
      "value": "17 780 L/min ; minimum de régulation, distinct de la capacité maximale",
      "evidenceIds": [
        "october5-denair-double-stage-p10"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "200 kW",
      "evidenceIds": [
        "october5-denair-double-stage-p10"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october5-denair-double-stage-p10"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october5-denair-double-stage-p10",
      "sourceUrl": "https://www.denair.net/uploads/DENAIR-PM-VSD-Double-Stage-Catalogue.pdf#page=10",
      "sourceLabel": "DENAIR, PM VSD Rotary Screw Air Compressors, gammes DAV et DAV+, page PDF 10",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-05",
      "confidence": "B",
      "notes": "SHA-256 a0072a0e9d479eb5aee4a7f73160f0ca838a21d922d7d609c9daa4769ef5e28e de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october5-denair-double-stage-p10"
    ],
    "model": [
      "october5-denair-double-stage-p10"
    ],
    "maxPressureBar": [
      "october5-denair-double-stage-p10"
    ],
    "fadCurve": [
      "october5-denair-double-stage-p10"
    ],
    "powerKw": [
      "october5-denair-double-stage-p10"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};

export default product;
