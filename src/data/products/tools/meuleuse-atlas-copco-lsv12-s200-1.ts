// Source facts: atlas-copco-reviewed-2026-09-26.json.
const product = {
  "id": "atlas-copco-8423112406",
  "slug": "meuleuse-atlas-copco-lsv12-s200-1",
  "categoryId": "meuleuse",
  "category": "Meuleuse pneumatique",
  "label": "Meuleuse pneumatique Atlas Copco LSV12 S200-1",
  "brand": "Atlas Copco",
  "model": "LSV12 S200-1",
  "mpn": "8423112406",
  "variant": {
    "familyId": "atlas-copco-6058596235",
    "label": "LSV12 S200-1",
    "distinguishingAttributes": {
      "Vitesse maximale à vide": "20000 tr/min",
      "Puissance maximale": "0,29 kW",
      "Masse": "0,5 kg",
      "Longueur": "166 mm",
      "Forme": "Renvoi d’angle",
      "Pince": "6 mm",
      "Consommation à vide": "384 L/min (6.4 l/s)",
      "Consommation à puissance maximale": "570 L/min (9.5 l/s)",
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
    "min": 570,
    "typical": 570,
    "max": 570
  },
  "usagePattern": "continuous",
  "confidence": "A",
  "connectorSize": "Entrée 1/4 pouce BSP ; flexible intérieur 8 mm",
  "recommendedHose": {
    "innerDiameterMm": 8
  },
  "image": {
    "src": "/images/products/atlas-copco-8423112406-technical.webp",
    "alt": "Atlas Copco LSV12 S200-1, référence 8423112406 : 570 L/min à puissance maximale, référence 6,3 bar",
    "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/precision-grinding/lsv12-s200-1-sku8423112406",
    "sourceLabel": "Repères techniques CompatAir d’après Atlas Copco"
  },
  "editorial": {
    "overview": "Atlas Copco LSV12 S200-1, référence 8423112406, demande 570 L/min à puissance maximale selon la fiche fabricant. Le dimensionnement utilise la pression de référence de 6,3 bar documentée dans le catalogue Industrial Tools and Solutions UK. Vitesse maximale à vide : 20000 tr/min. Puissance maximale : 0,29 kW.",
    "verifiedFacts": [
      "Vitesse maximale à vide : 20000 tr/min.",
      "Puissance maximale : 0,29 kW.",
      "Masse : 0,5 kg.",
      "Longueur : 166 mm.",
      "Consommation à vide : 384 L/min, convertis depuis 6.4 l/s.",
      "Consommation à puissance maximale : 570 L/min, convertis depuis 9.5 l/s.",
      "Flexible recommandé : 8 mm de diamètre intérieur."
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
      "value": "20000 tr/min",
      "evidenceIds": [
        "atlas-copco-8423112406-fiche-fabricant"
      ]
    },
    {
      "label": "Puissance maximale",
      "value": "0,29 kW",
      "evidenceIds": [
        "atlas-copco-8423112406-fiche-fabricant"
      ]
    },
    {
      "label": "Masse",
      "value": "0,5 kg",
      "evidenceIds": [
        "atlas-copco-8423112406-fiche-fabricant"
      ]
    },
    {
      "label": "Longueur",
      "value": "166 mm",
      "evidenceIds": [
        "atlas-copco-8423112406-fiche-fabricant"
      ]
    },
    {
      "label": "Forme",
      "value": "Renvoi d’angle",
      "evidenceIds": [
        "atlas-copco-8423112406-fiche-fabricant"
      ]
    },
    {
      "label": "Pince",
      "value": "6 mm",
      "evidenceIds": [
        "atlas-copco-8423112406-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation à vide",
      "value": "384 L/min (6.4 l/s)",
      "evidenceIds": [
        "atlas-copco-8423112406-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation à puissance maximale",
      "value": "570 L/min (9.5 l/s)",
      "evidenceIds": [
        "atlas-copco-8423112406-fiche-fabricant"
      ]
    },
    {
      "label": "Pression maximale admise",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8423112406-fiche-fabricant"
      ]
    },
    {
      "label": "Pression de référence des performances",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8423112406-catalogue-uk"
      ]
    }
  ],
  "evidence": [
    {
      "id": "atlas-copco-8423112406-fiche-fabricant",
      "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/precision-grinding/lsv12-s200-1-sku8423112406",
      "sourceLabel": "Atlas Copco, LSV12 S200-1, 8423112406",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Caractéristiques individuelles versionnées, valeurs sources en L/s et CFM, empreinte SHA-256 de la fiche consultée."
    },
    {
      "id": "atlas-copco-8423112406-catalogue-uk",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=211",
      "sourceLabel": "Atlas Copco, Industrial Tools and Solutions UK, page PDF 211 ; conditions page 3",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Référence 8423112406 présente au tableau. Conditions générales : air détendu à la pression atmosphérique, pression de travail 6,3 bar sauf exception. Le millésime de cette édition n’est pas affirmé."
    }
  ],
  "fieldSources": {
    "mpn": [
      "atlas-copco-8423112406-fiche-fabricant",
      "atlas-copco-8423112406-catalogue-uk"
    ],
    "airflowLpm": [
      "atlas-copco-8423112406-fiche-fabricant"
    ],
    "workingPressureBar": [
      "atlas-copco-8423112406-catalogue-uk",
      "atlas-copco-8423112406-fiche-fabricant"
    ],
    "connectorSize": [
      "atlas-copco-8423112406-fiche-fabricant"
    ],
    "recommendedHose": [
      "atlas-copco-8423112406-fiche-fabricant"
    ]
  },
  "notes": [
    "Le verdict concerne l’alimentation en air. Les exigences de couple, d’accessoire et de sécurité restent celles de la notice de l’outil."
  ]
};
export default product;
