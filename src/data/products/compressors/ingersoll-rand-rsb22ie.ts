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
  "fadCurve": [],
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
      "label": "Modèle et marché",
      "value": "RSb22ie, vitesse fixe, fiche Inde02/2025",
      "evidenceIds": [
        "ingersoll-rand-rsb22ie-reserved-20261103-1"
      ]
    },
    {
      "label": "Puissance nominale",
      "value": "22 kW",
      "evidenceIds": [
        "ingersoll-rand-rsb22ie-reserved-20261103-1"
      ]
    },
    {
      "label": "Ligne de pression maximale13,5 bar",
      "value": "95 cfm publiés, pression de mesure FAD non explicitée",
      "evidenceIds": [
        "ingersoll-rand-rsb22ie-reserved-20261103-1"
      ]
    },
    {
      "label": "Masse publiée",
      "value": "642 kg",
      "evidenceIds": [
        "ingersoll-rand-rsb22ie-reserved-20261103-1"
      ]
    },
    {
      "label": "Dimensions L×W×H",
      "value": "1 400 × 826 × 1 275 mm",
      "evidenceIds": [
        "ingersoll-rand-rsb22ie-reserved-20261103-1"
      ]
    }
  ],
  "editorial": {
    "overview": "Ingersoll Rand RSb22ie. La RSb22ie fixe de 22 kW est distincte de la RSb22ne à vitesse variable. La table affiche95 cfm face au plafond 13,5 bar, mais son pied de page ISO 1217 n’explicite pas la pression de mesure ; les RSb18ie et 15ie affichent78 et 60 cfm dans cette colonne. Le débit reste documentaire.",
    "verifiedFacts": [
      "Modèle et marché : RSb22ie, vitesse fixe, fiche Inde02/2025.",
      "Puissance nominale : 22 kW.",
      "Ligne de pression maximale13,5 bar : 95 cfm publiés, pression de mesure FAD non explicitée.",
      "Masse publiée : 642 kg.",
      "Dimensions L×W×H : 1 400 × 826 × 1 275 mm."
    ],
    "limitations": [
      "Aucun point FAD n’est créé à partir de la seule colonne MaxPressure.",
      "Fiche du marché indien ; raccordement, révision livrée et disponibilité française à confirmer.",
      "Cuve, fréquence et taux de marche du groupe non établis."
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
    },
    {
      "id": "ingersoll-rand-rsb22ie-reserved-20261103-1",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta3c1d56420975795/blt018ce183b6dac062/6a882c594d1fbd2b5ae5a9e8/IR_RSb15-22ie-ne_Flyer_2_Page_2025-02.pdf#page=2",
      "sourceLabel": "Ingersoll Rand : revue factuelle du 3 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-03",
      "confidence": "B",
      "notes": "GET complet HTTP200 SHA-256 18e0d3f6818b7b0656c8406b227e19fdd2ce5390486cd6c3b867c6eb71dbaabc. La RSb22ie fixe de 22 kW est distincte de la RSb22ne à vitesse variable. La table affiche95 cfm face au plafond 13,5 bar, mais son pied de page ISO 1217 n’explicite pas la pression de mesure ; les RSb18ie et 15ie affichent78 et 60 cfm dans cette colonne. Le débit reste documentaire."
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
      "ingersoll-rand-rsb22ie-reserved-20261103-1"
    ],
    "powerKw": [
      "ingersoll-rand-rsb22ie-reserved-20261103-1"
    ],
    "weightKg": [
      "ingersoll-rand-rsb22ie-reserved-20261103-1"
    ],
    "editorial": [
      "ingersoll-rand-rsb22ie-reserved-20261103-1"
    ],
    "specifications": [
      "ingersoll-rand-rsb22ie-reserved-20261103-1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ],
  "weightKg": 642
};
export default product;
