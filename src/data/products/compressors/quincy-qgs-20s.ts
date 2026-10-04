const product: unknown = {
  "id": "quincy-qgs-20s",
  "slug": "quincy-qgs-20s",
  "brand": "Quincy",
  "model": "QGS-20S",
  "variant": {
    "familyId": "quincy-qgs-20s",
    "label": "QGS-20S",
    "distinguishingAttributes": {
      "équipement": "QGS-20S",
      "pressionDeConfiguration": "8,618 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 8.618,
  "fadCurve": [
    {
      "pressureBar": 8.618,
      "litersPerMinute": 1724.496
    }
  ],
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/quincy-qgs-20s.svg",
    "alt": "Repères techniques : Quincy QGS-20S",
    "sourceUrl": "https://www.quincycompressor.com/wp-content/uploads/2023/12/QC-QGS-QGSV-4p-AP-1-min.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "QGS-20S",
      "evidenceIds": [
        "october4b-quincy-qgs-qgsv-p2"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "8,618 bar (125 psig publiés)",
      "evidenceIds": [
        "october4b-quincy-qgs-qgsv-p2",
        "october4b-nist-conversions-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october4b-quincy-qgs-qgsv-p2"
      ]
    },
    {
      "label": "Air livré à 8,618 bar",
      "value": "1 724,496 L/min (60,9 cfm publiés)",
      "evidenceIds": [
        "october4b-quincy-qgs-qgsv-p2",
        "october4b-nist-conversions-p1"
      ]
    },
    {
      "label": "Colonne réservoir du document original",
      "value": "120 gallon",
      "evidenceIds": [
        "october4b-quincy-qgs-qgsv-p2"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october4b-quincy-qgs-qgsv-p2"
      ]
    }
  ],
  "editorial": {
    "overview": "Quincy QGS-20S. 1 724,496 L/min déclarés à 8,618 bar. Configuration constructeur : QGS-20S.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8,618 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 1 724,496 L/min déclarés à 8,618 bar."
    ],
    "limitations": [
      "Les valeurs originales sont exprimées en psig et cfm ; conversion SI selon NIST, sans interpolation de FAD.",
      "Cuve non qualifiée en litres : la table utilise gallon sans en préciser la définition ; NA ne vaut pas zéro.",
      "Le cycle de service, la fréquence et le régime de vitesse du point QGSV ne sont pas qualifiés par ce tableau.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "Le plafond CompatAir correspond à la pression de la configuration retenue, sans qualification de la soupape ni des autres versions."
    ]
  },
  "evidence": [
    {
      "id": "october4b-quincy-qgs-qgsv-p2",
      "sourceUrl": "https://www.quincycompressor.com/wp-content/uploads/2023/12/QC-QGS-QGSV-4p-AP-1-min.pdf#page=2",
      "sourceLabel": "Quincy, QGS et QGSV, page PDF 2",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 3846893a6d89c68cf8053db3ba68ff0fdc4a1b20e9f71940c73a2813bb8245f8 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october4b-nist-conversions-p1",
      "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
      "sourceLabel": "NIST, Guide to the SI, appendix B.8, table de conversion",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-04",
      "confidence": "B",
      "notes": "SHA-256 d3ba38edef97bc380f20879b3c5b16067cc25bf230584cc7af67638b500c8c30 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "model": [
      "october4b-quincy-qgs-qgsv-p2"
    ],
    "maxPressureBar": [
      "october4b-quincy-qgs-qgsv-p2",
      "october4b-nist-conversions-p1"
    ],
    "fadCurve": [
      "october4b-quincy-qgs-qgsv-p2",
      "october4b-nist-conversions-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Identités de pression, tension, contrôleur et démarreur consolidées avant le décompte du lot."
  ]
};

export default product;
