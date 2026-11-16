import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "quincy-qgs-40c",
  "slug": "quincy-qgs-40c",
  "brand": "Quincy",
  "model": "QGS-40C",
  "variant": {
    "familyId": "quincy-qgs-40c",
    "label": "QGS-40C",
    "distinguishingAttributes": {
      "équipement": "QGS-40C",
      "pressionDeConfiguration": "8,618 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 8.618,
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "fadCurve": [
    {
      "pressureBar": 8.618,
      "litersPerMinute": 4986.596
    }
  ],
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/quincy-qgs-40c-technical-20261116-followup.svg",
    "alt": "Repères techniques : Quincy QGS-40C",
    "sourceUrl": "https://www.quincycompressor.com/wp-content/uploads/2023/12/QC-QGS-QGSV-4p-AP-1-min.pdf",
    "sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "QGS-40C",
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
      "value": "4 986,596 L/min (176,1 cfm publiés)",
      "evidenceIds": [
        "october4b-quincy-qgs-qgsv-p2",
        "october4b-nist-conversions-p1"
      ]
    },
    {
      "label": "Colonne réservoir du document original",
      "value": "NA",
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
    },
    {
      "label": "Point original",
      "value": "176,1 cfm à125 psig ;40 hp",
      "evidenceIds": [
        "review:2026-11-16-technical:quincy-qgs-40c:0"
      ]
    },
    {
      "label": "Dimensions publiées FM/FMD",
      "value": "Longueur52/72 pouces ; largeur33 ; hauteur61",
      "evidenceIds": [
        "review:2026-11-16-technical:quincy-qgs-40c:0"
      ]
    },
    {
      "label": "Masses FM/FMD",
      "value": "1279/1545 lb ; ne pas fusionner les deux configurations",
      "evidenceIds": [
        "review:2026-11-16-technical:quincy-qgs-40c:0"
      ]
    }
  ],
  "editorial": {
    "overview": "La QGS-40C publie176,1 cfm à125 psig pour40 hp, contre 154,9 cfm pour la QGS-40. Le catalogue distingue les versions au sol avec ou sans sécheur dans les dimensions et masses. La colonne réservoir NA ne devient pas un volume nul.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 8,618 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 4 986,596 L/min déclarés à 8,618 bar.",
      "Point original : 176,1 cfm à125 psig ;40 hp.",
      "Dimensions publiées FM/FMD : Longueur52/72 pouces ; largeur33 ; hauteur61.",
      "Masses FM/FMD : 1279/1545 lb ; ne pas fusionner les deux configurations."
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
    },
    {
      "id": "review:2026-11-16-technical:quincy-qgs-40c:0",
      "sourceUrl": "https://www.quincycompressor.com/wp-content/uploads/2023/12/QC-QGS-QGSV-4p-AP-1-min.pdf",
      "sourceLabel": "Quincy, document constructeur vérifié le 16 novembre 2026",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-16",
      "confidence": "B",
      "notes": "La QGS-40C publie176,1 cfm à125 psig pour40 hp, contre 154,9 cfm pour la QGS-40. Le catalogue distingue les versions au sol avec ou sans sécheur dans les dimensions et masses. La colonne réservoir NA ne devient pas un volume nul. GET complet SHA-256 3846893a6d89c68cf8053db3ba68ff0fdc4a1b20e9f71940c73a2813bb8245f8. Pages PDF lues : 2."
    },
    {
      "id": "review:2026-11-16-technical:quincy-qgs-40c:1",
      "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
      "sourceLabel": "Quincy, document constructeur vérifié le 16 novembre 2026",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-16",
      "confidence": "B",
      "notes": "La QGS-40C publie176,1 cfm à125 psig pour40 hp, contre 154,9 cfm pour la QGS-40. Le catalogue distingue les versions au sol avec ou sans sécheur dans les dimensions et masses. La colonne réservoir NA ne devient pas un volume nul. GET complet SHA-256 751228aea7ee7b2d83bb7af67071a1647374ae710e5d02c44f45cee1e59c4546. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
    }
  ],
  "fieldSources": {
    "maxPressureBasis": [
      "october4b-quincy-qgs-qgsv-p2"
    ],
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
