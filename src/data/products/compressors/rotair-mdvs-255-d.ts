import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "rotair-mdvs-255-d",
  "slug": "rotair-mdvs-255-d",
  "brand": "Rotair",
  "model": "MDVS 255 D",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "rotair-mdvs-255-d",
    "label": "Configuration constructeur MDVS 255 D à 8,0 bar",
    "distinguishingAttributes": {
      "équipement": "Configuration constructeur MDVS 255 D à 8,0 bar",
      "pressionDeConfiguration": "8 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 8,
  "fadCurve": [
    {
      "pressureBar": 8,
      "litersPerMinute": 25300
    }
  ],
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/rotair-mdvs-255-d.svg",
    "alt": "Repères techniques : Rotair MDVS 255 D",
    "sourceUrl": "https://www.rotairspa.com/portable-compressors-diesel/mdvs-range/",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "Rotair MDVS 255 D. 25 300 L/min déclarés à 8 bar. Configuration constructeur : Configuration constructeur MDVS 255 D à 8,0 bar.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 25 300 L/min déclarés à 8 bar."
    ],
    "limitations": [
      "Les autres colonnes de pression décrivent les versions proposées ; aucun débit intermédiaire ni pression de sécurité de cette configuration ne sont déduits.",
      "Le réservoir de carburant et le réservoir d’huile ne constituent pas une cuve de stockage d’air. La disponibilité locale et le dispositif d’attelage doivent être vérifiés.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "La source documente ce point de pression. Elle ne prouve pas le maximum matériel ; au-delà, le verdict doit rester données insuffisantes."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Configuration constructeur MDVS 255 D à 8,0 bar",
      "evidenceIds": [
        "october7-rotair-mdvs-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "8 bar",
      "evidenceIds": [
        "october7-rotair-mdvs-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october7-rotair-mdvs-p1"
      ]
    },
    {
      "label": "Air livré à 8 bar",
      "value": "25 300 L/min",
      "evidenceIds": [
        "october7-rotair-mdvs-p1"
      ]
    },
    {
      "label": "Pression publiée, unités originales",
      "value": "8 bar / 116 psi",
      "evidenceIds": [
        "october7-rotair-mdvs-p1"
      ]
    },
    {
      "label": "Débit restitué publié, unités originales",
      "value": "25300 lt/min / 893 cfm",
      "evidenceIds": [
        "october7-rotair-mdvs-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october7-rotair-mdvs-p1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-rotair-mdvs-p1",
      "sourceUrl": "https://www.rotairspa.com/portable-compressors-diesel/mdvs-range/",
      "sourceLabel": "Rotair, gamme constructeur de compresseurs mobiles, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "SHA-256 0b8f6f25287a0bc2991eadf70e37456b9f40c000b4ec239f4d9333ea1435870f de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october7-rotair-mdvs-p1"
    ],
    "maxPressureBar": [
      "october7-rotair-mdvs-p1"
    ],
    "maxPressureBasis": [
      "october7-rotair-mdvs-p1"
    ],
    "fadCurve": [
      "october7-rotair-mdvs-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ],
  "maxPressureBasis": "selected-working-pressure-ceiling"
};

export default product;
