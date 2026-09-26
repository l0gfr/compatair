// Source facts: atlas-copco-reviewed-2026-09-26.json.
const product = {
  "id": "atlas-copco-8423122487",
  "slug": "meuleuse-atlas-copco-lsf19-s460e-1",
  "categoryId": "meuleuse",
  "category": "Meuleuse pneumatique",
  "label": "Meuleuse pneumatique Atlas Copco LSF19 S460E-1",
  "brand": "Atlas Copco",
  "model": "LSF19 S460E-1",
  "mpn": "8423122487",
  "variant": {
    "familyId": "atlas-copco-6058614539",
    "label": "LSF19 S460E-1",
    "distinguishingAttributes": {
      "Vitesse maximale à vide": "46000 tr/min",
      "Puissance maximale": "0,5 kW",
      "Masse": "0,7 kg",
      "Longueur": "293 mm",
      "Forme": "Droit",
      "Pince": "6 mm",
      "Consommation à vide": "900 L/min (15 l/s)",
      "Consommation à puissance maximale": "684 L/min (11.4 l/s)",
      "Pression maximale admise": "6,3 bar",
      "Pression de référence des performances": "6,3 bar"
    }
  },
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6.3,
    "typical": 6.3,
    "max": 6.3
  },
  "airflowLpm": {
    "min": 900,
    "typical": 900,
    "max": 900
  },
  "usagePattern": "continuous",
  "confidence": "A",
  "connectorSize": "Entrée 1/4 pouce BSP ; flexible intérieur 10 mm",
  "recommendedHose": {
    "innerDiameterMm": 10
  },
  "image": {
    "src": "/images/products/atlas-copco-8423122487-technical.webp",
    "alt": "Atlas Copco LSF19 S460E-1, référence 8423122487 : 900 L/min à vide, référence 6,3 bar",
    "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/precision-grinding/lsf19-s460e-1-sku8423122487",
    "sourceLabel": "Repères techniques CompatAir d’après Atlas Copco"
  },
  "editorial": {
    "overview": "Atlas Copco LSF19 S460E-1, référence 8423122487, demande 900 L/min à vide selon la fiche fabricant. Le dimensionnement utilise la pression de référence de 6,3 bar documentée dans le catalogue Industrial Tools and Solutions UK. Vitesse maximale à vide : 46000 tr/min. Puissance maximale : 0,5 kW.",
    "verifiedFacts": [
      "Vitesse maximale à vide : 46000 tr/min.",
      "Puissance maximale : 0,5 kW.",
      "Masse : 0,7 kg.",
      "Longueur : 293 mm.",
      "Consommation à vide : 900 L/min, convertis depuis 15 l/s.",
      "Consommation à puissance maximale : 684 L/min, convertis depuis 11.4 l/s.",
      "Flexible recommandé : 10 mm de diamètre intérieur."
    ],
    "limitations": [
      "Le calcul conserve la plus élevée des consommations publiées pour les différentes phases. Il ne moyenne pas la marche à vide et le travail en charge.",
      "La pression de référence provient du catalogue UK, page 3, recoupé avec la référence individuelle. Le document ne fournit pas de courbe débit-pression pour cette fiche. Une évolution de la notice du modèle doit entraîner une nouvelle vérification.",
      "Ces valeurs déclarées ne constituent pas un essai physique de CompatAir. La fiche internationale ne prouve ni un stock actuel en France ni le contenu de l’offre d’un vendeur.",
      "La longueur du flexible n’est pas spécifiée ici. Le diamètre seul ne permet pas de valider les pertes du réseau."
    ]
  },
  "specifications": [
    {
      "label": "Vitesse maximale à vide",
      "value": "46000 tr/min",
      "evidenceIds": [
        "atlas-copco-8423122487-fiche-fabricant"
      ]
    },
    {
      "label": "Puissance maximale",
      "value": "0,5 kW",
      "evidenceIds": [
        "atlas-copco-8423122487-fiche-fabricant"
      ]
    },
    {
      "label": "Masse",
      "value": "0,7 kg",
      "evidenceIds": [
        "atlas-copco-8423122487-fiche-fabricant"
      ]
    },
    {
      "label": "Longueur",
      "value": "293 mm",
      "evidenceIds": [
        "atlas-copco-8423122487-fiche-fabricant"
      ]
    },
    {
      "label": "Forme",
      "value": "Droit",
      "evidenceIds": [
        "atlas-copco-8423122487-fiche-fabricant"
      ]
    },
    {
      "label": "Pince",
      "value": "6 mm",
      "evidenceIds": [
        "atlas-copco-8423122487-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation à vide",
      "value": "900 L/min (15 l/s)",
      "evidenceIds": [
        "atlas-copco-8423122487-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation à puissance maximale",
      "value": "684 L/min (11.4 l/s)",
      "evidenceIds": [
        "atlas-copco-8423122487-fiche-fabricant"
      ]
    },
    {
      "label": "Pression maximale admise",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8423122487-fiche-fabricant"
      ]
    },
    {
      "label": "Pression de référence des performances",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8423122487-catalogue-uk"
      ]
    }
  ],
  "evidence": [
    {
      "id": "atlas-copco-8423122487-fiche-fabricant",
      "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/precision-grinding/lsf19-s460e-1-sku8423122487",
      "sourceLabel": "Atlas Copco, LSF19 S460E-1, 8423122487",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Caractéristiques individuelles versionnées, valeurs sources en L/s et CFM, empreinte SHA-256 de la fiche consultée."
    },
    {
      "id": "atlas-copco-8423122487-catalogue-uk",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=210",
      "sourceLabel": "Atlas Copco, Industrial Tools and Solutions UK, page PDF 210 ; conditions page 3",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Référence 8423122487 présente au tableau. Conditions générales : air détendu à la pression atmosphérique, pression de travail 6,3 bar sauf exception. Le millésime de cette édition n’est pas affirmé."
    }
  ],
  "fieldSources": {
    "mpn": [
      "atlas-copco-8423122487-fiche-fabricant",
      "atlas-copco-8423122487-catalogue-uk"
    ],
    "airflowLpm": [
      "atlas-copco-8423122487-fiche-fabricant"
    ],
    "workingPressureBar": [
      "atlas-copco-8423122487-catalogue-uk",
      "atlas-copco-8423122487-fiche-fabricant"
    ],
    "connectorSize": [
      "atlas-copco-8423122487-fiche-fabricant"
    ],
    "recommendedHose": [
      "atlas-copco-8423122487-fiche-fabricant"
    ]
  },
  "notes": [
    "Le verdict concerne l’alimentation en air. Les exigences de couple, d’accessoire et de sécurité restent celles de la notice de l’outil."
  ]
};
export default product;
