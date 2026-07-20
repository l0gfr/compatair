const product = {
  "id": "metabo-bp-10",
  "slug": "soufflette-metabo-bp-10",
  "categoryId": "soufflette",
  "category": "Soufflette",
  "label": "Soufflette Metabo BP 10",
  "brand": "Metabo",
  "model": "BP 10",
  "mpn": "601579000",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 2,
    "typical": 6,
    "max": 6
  },
  "airflowLpm": {
    "min": 100,
    "typical": 200,
    "max": 200
  },
  "connectorSize": "Raccord 1/4 pouce",
  "usagePattern": "intermittent",
  "confidence": "A",
  "image": {
    "src": "/images/products/metabo-bp-10.webp",
    "alt": "Soufflette Metabo BP 10",
    "sourceUrl": "https://www.metabo.com/t3/fileadmin/metabo/uk/070_news/03_catalogue_logos/METABO_CORDED_RANGE_2025_A5_web_version.pdf",
    "sourceLabel": "Visuel officiel Metabo BP 10"
  },
  "editorial": {
    "overview": "La BP 10 est une soufflette compacte. CompatAir retient la borne haute publiée de 200 L/min pour ne pas sous-dimensionner le compresseur.",
    "verifiedFacts": [
      "Metabo publie une plage de 100 à 200 L/min entre 2 et 6 bar.",
      "Le poids publié est de 0,1 kg."
    ],
    "limitations": [
      "La valeur de débit correspond à la condition « plage de consommation publiée, borne haute retenue » publiée par le fabricant ; elle n’est pas remplacée par une moyenne d’usage.",
      "Le fabricant ne relie pas chaque valeur de débit à un point de pression distinct. La comparaison utilise donc la borne haute documentée."
    ]
  },
  "specifications": [
    {
      "label": "Pression publiée",
      "value": "2 à 6 bar",
      "evidenceIds": [
        "metabo-bp-10-manufacturer-2026"
      ]
    },
    {
      "label": "Plage de consommation publiée, borne haute retenue",
      "value": "100 à 200 L/min",
      "evidenceIds": [
        "metabo-bp-10-manufacturer-2026"
      ]
    },
    {
      "label": "Poids",
      "value": "0,1 kg",
      "evidenceIds": [
        "metabo-bp-10-manufacturer-2026"
      ]
    }
  ],
  "evidence": [
    {
      "id": "metabo-bp-10-manufacturer-2026",
      "sourceUrl": "https://www.metabo.com/t3/fileadmin/metabo/uk/070_news/03_catalogue_logos/METABO_CORDED_RANGE_2025_A5_web_version.pdf",
      "sourceLabel": "Metabo, catalogue officiel 2025, BP 10",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-07-20",
      "confidence": "A"
    }
  ],
  "fieldSources": {
    "model": [
      "metabo-bp-10-manufacturer-2026"
    ],
    "mpn": [
      "metabo-bp-10-manufacturer-2026"
    ],
    "workingPressureBar": [
      "metabo-bp-10-manufacturer-2026"
    ],
    "airflowLpm": [
      "metabo-bp-10-manufacturer-2026"
    ],
    "connectorSize": [
      "metabo-bp-10-manufacturer-2026"
    ],
    "specifications": [
      "metabo-bp-10-manufacturer-2026"
    ]
  },
  "notes": []
};

export default product;
