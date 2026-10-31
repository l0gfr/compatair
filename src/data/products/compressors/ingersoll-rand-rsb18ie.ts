import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "ingersoll-rand-rsb18ie",
  "slug": "ingersoll-rand-rsb18ie",
  "brand": "Ingersoll Rand",
  "model": "RSb18ie",
  "variant": {
    "familyId": "ingersoll-rand-rsb18ie",
    "label": "Compresseur RSb à vitesse fixe, fiche du fabricant pour le marché indien",
    "distinguishingAttributes": {
      "équipement": "Compresseur RSb à vitesse fixe, fiche du fabricant pour le marché indien",
      "pressionDeConfiguration": "13,5 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 13.5,
  "fadCurve": [],
  "powerKw": 18,
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/ingersoll-rand-rsb18ie.svg",
    "alt": "Repères techniques : Ingersoll Rand RSb18ie",
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
      "label": "Puissance publiée",
      "value": "18 kW",
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
    },
    {
      "label": "Relevé historique FAD, pression de mesure à confirmer",
      "value": "[{\"pressureBar\":13.5,\"litersPerMinute\":2208.714}]",
      "evidenceIds": [
        "october4c-ir-rsb15-22-p2",
        "ingersoll-rand-rsb18ie-reserved-20261031-1",
        "ingersoll-rand-rsb18ie-reserved-20261031-2"
      ]
    }
  ],
  "editorial": {
    "overview": "Ingersoll Rand RSb18ie. Le tableau RSb15–22ie sépare Capacity FAD de Max Pressure. Les 13,5 bar sont un maximum ; la pression de mesure des 60 ou 78 cfm reste à confirmer.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 13,5 bar.",
      "Capacité FAD publiée : 78 cfm ; pression de mesure non explicitée dans la table."
    ],
    "limitations": [
      "Fiche commerciale Ingersoll Rand India de février 2025 ; disponibilité, certification et raccordement sur le marché français à confirmer.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le tableau RSb15–22ie sépare Capacity FAD de Max Pressure. Les 13,5 bar sont un maximum ; la pression de mesure des 60 ou 78 cfm reste à confirmer."
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
      "id": "ingersoll-rand-rsb18ie-reserved-20261031-1",
      "sourceUrl": "https://azure-na-assets.contentstack.com/v3/assets/blta3c1d56420975795/blt018ce183b6dac062/6a882c594d1fbd2b5ae5a9e8/IR_RSb15-22ie-ne_Flyer_2_Page_2025-02.pdf#page=2",
      "sourceLabel": "Ingersoll Rand RSb18ie : relecture documentaire du 31 octobre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-31",
      "confidence": "B",
      "notes": "SHA-256 18e0d3f6818b7b0656c8406b227e19fdd2ce5390486cd6c3b867c6eb71dbaabc. Le tableau RSb15–22ie sépare Capacity FAD de Max Pressure. Les 13,5 bar sont un maximum ; la pression de mesure des 60 ou 78 cfm reste à confirmer."
    },
    {
      "id": "ingersoll-rand-rsb18ie-reserved-20261031-2",
      "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
      "sourceLabel": "NIST, Guide for the Use of the International System of Units, Appendix B.8",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-31",
      "confidence": "B",
      "notes": "SHA-256 992d3ba563c488bafab61059fe47eb7238178b9def650a0b8c11707cc887699f. Facteurs de conversion d’unités uniquement. La référence, le régime et la pression de mesure de la machine dépendent de ses documents constructeur, cités séparément."
    }
  ],
  "fieldSources": {
    "model": [
      "october4c-ir-rsb15-22-p2"
    ],
    "maxPressureBar": [
      "october4c-ir-rsb15-22-p2"
    ],
    "powerKw": [
      "october4c-ir-rsb15-22-p2"
    ],
    "fadCurve": [
      "ingersoll-rand-rsb18ie-reserved-20261031-1",
      "ingersoll-rand-rsb18ie-reserved-20261031-2"
    ]
  },
  "notes": [
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ]
};

export default product;
