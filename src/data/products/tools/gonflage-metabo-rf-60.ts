const product = {
  "id": "metabo-rf-60",
  "slug": "gonflage-metabo-rf-60",
  "categoryId": "gonflage",
  "category": "Gonflage",
  "label": "Pistolet de gonflage Metabo RF 60",
  "brand": "Metabo",
  "model": "RF 60",
  "mpn": "602233000",
  "ean": "4007430241009",
  "demandModel": "variable-volume",
  "workingPressureBar": {
    "min": 0.5,
    "typical": 6,
    "max": 12
  },
  "demandExplanation": "Le volume d’air dépend du pneu, de sa pression initiale, de la pression cible et du temps de gonflage.",
  "usagePattern": "intermittent",
  "confidence": "A",
  "image": {
    "src": "/images/products/metabo-rf-60.webp",
    "alt": "Pistolet de gonflage Metabo RF 60",
    "sourceUrl": "https://www.metabo.com/com/en/tools/compressed-air/compressors/construction-site-compressors/rf-60-compressed-air-tyre-inflation-and-pressure-gauge/602233000",
    "sourceLabel": "Visuel officiel Metabo RF 60"
  },
  "editorial": {
    "overview": "Le RF 60 mesure et ajuste la pression entre 0,5 et 12 bar. Un débit fixe ne décrirait pas correctement un gonflage.",
    "verifiedFacts": [
      "La longueur de flexible publiée est de 35 cm.",
      "Le poids publié est de 0,45 kg."
    ],
    "limitations": [
      "Le volume à fournir dépend de l’objet et de la durée de l’opération ; le fabricant ne publie pas de débit fixe comparable."
    ]
  },
  "specifications": [
    {
      "label": "Pression publiée",
      "value": "0,5 à 12 bar",
      "evidenceIds": [
        "metabo-rf-60-manufacturer-2026"
      ]
    },
    {
      "label": "Flexible",
      "value": "35 cm",
      "evidenceIds": [
        "metabo-rf-60-manufacturer-2026"
      ]
    },
    {
      "label": "Poids",
      "value": "0,45 kg",
      "evidenceIds": [
        "metabo-rf-60-manufacturer-2026"
      ]
    }
  ],
  "evidence": [
    {
      "id": "metabo-602233000-datasheet-20260927",
      "sourceUrl": "https://be.prod.metabo.com/download/com/en/pdf/21010",
      "sourceLabel": "Metabo, fiche PDF officielle 602233000 (EAN)",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-27",
      "confidence": "A",
      "notes": "EAN vérifié dans la fiche PDF liée par la nouvelle page officielle."
    },
    {
      "id": "metabo-rf-60-manufacturer-2026",
      "sourceUrl": "https://www.metabo.com/com/en/tools/compressed-air/compressors/construction-site-compressors/rf-60-compressed-air-tyre-inflation-and-pressure-gauge/602233000",
      "sourceLabel": "Metabo, fiche officielle RF 60",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-27",
      "confidence": "A"
    }
  ],
  "fieldSources": {
    "ean": ["metabo-602233000-datasheet-20260927"],
    "model": [
      "metabo-rf-60-manufacturer-2026"
    ],
    "mpn": [
      "metabo-rf-60-manufacturer-2026"
    ],
    "workingPressureBar": [
      "metabo-rf-60-manufacturer-2026"
    ],
    "specifications": [
      "metabo-rf-60-manufacturer-2026"
    ]
  },
  "notes": []
};

export default product;
