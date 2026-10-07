import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "ingersoll-rand-rsb22ie",
  "slug": "ingersoll-rand-rsb22ie",
  "brand": "Ingersoll Rand",
  "model": "RSb22ie",
  "variant": {
    "familyId": "ingersoll-rand-rsb22ie",
    "label": "Compresseur RSb à vitesse fixe, fiche du fabricant pour le marché indien",
    "distinguishingAttributes": {
      "équipement": "Compresseur RSb à vitesse fixe, fiche du fabricant pour le marché indien",
      "pressionDeConfiguration": "13,5 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13.5,
  "fadCurve": [
    {
      "pressureBar": 13.5,
      "litersPerMinute": 2690.1
    }
  ],
  "powerKw": 22,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/ingersoll-rand-rsb22ie.svg",
    "alt": "Repères techniques : Ingersoll Rand RSb22ie",
    "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta3c1d56420975795/blt018ce183b6dac062/6a882c594d1fbd2b5ae5a9e8/IR_RSb15-22ie-ne_Flyer_2_Page_2025-02.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Compresseur RSb à vitesse fixe, fiche du fabricant pour le marché indien",
      "evidenceIds": [
        "october4c-ir-rsb15-22-p2"
      ]
    },
    {
      "label": "Pression maximale publiée",
      "value": "13,5 bar",
      "evidenceIds": [
        "october4c-ir-rsb15-22-p2"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4c-ir-rsb15-22-p2"
      ]
    },
    {
      "label": "Air livré à 13,5 bar",
      "value": "2 690,1 L/min (95 cfm publiés)",
      "evidenceIds": [
        "october4c-ir-rsb15-22-p2",
        "october4c-nist-conversions-p1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "22 kW",
      "evidenceIds": [
        "october4c-ir-rsb15-22-p2"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4c-ir-rsb15-22-p2"
      ]
    }
  ],
  "editorial": {
    "overview": "Ingersoll Rand RSb22ie. 2 690,1 L/min déclarés à 13,5 bar. Configuration constructeur : Compresseur RSb à vitesse fixe, fiche du fabricant pour le marché indien.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13,5 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 2 690,1 L/min déclarés à 13,5 bar."
    ],
    "limitations": [
      "Fiche commerciale Ingersoll Rand India de février 2025 ; disponibilité, certification et raccordement sur le marché français à confirmer.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil."
    ]
  },
  "evidence": [
    {
      "id": "october4c-ir-rsb15-22-p2",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta3c1d56420975795/blt018ce183b6dac062/6a882c594d1fbd2b5ae5a9e8/IR_RSb15-22ie-ne_Flyer_2_Page_2025-02.pdf#page=2",
      "sourceLabel": "Ingersoll Rand, catalogue constructeur RSb15-22, page PDF 2",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 18e0d3f6818b7b0656c8406b227e19fdd2ce5390486cd6c3b867c6eb71dbaabc de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4c-nist-conversions-p1",
      "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
      "sourceLabel": "NIST, Guide to the SI, appendix B.8, document constructeur",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 057d9641caab13e6632aa7f70eeb1b76d676ae3e131b3e6ed73b8bf6ca0c28c3 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-ir-rsb15-22-p2"
    ],
    "maxPressureBar": [
      "october4c-ir-rsb15-22-p2"
    ],
    "fadCurve": [
      "october4c-ir-rsb15-22-p2",
      "october4c-nist-conversions-p1"
    ],
    "powerKw": [
      "october4c-ir-rsb15-22-p2"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};
export default product;
