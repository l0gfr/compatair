// Source facts: atlas-copco-reviewed-2026-09-26.json.
const product = {
  "id": "atlas-copco-8423012708",
  "slug": "meuleuse-atlas-copco-lsf29-s180e",
  "categoryId": "meuleuse",
  "category": "Meuleuse pneumatique",
  "label": "Meuleuse pneumatique Atlas Copco LSF29 S180E",
  "brand": "Atlas Copco",
  "model": "LSF29 S180E",
  "mpn": "8423012708",
  "variant": {
    "familyId": "atlas-copco-15825515659",
    "label": "LSF29 S180E",
    "distinguishingAttributes": {
      "Vitesse maximale à vide": "18000 tr/min",
      "Puissance maximale": "0,9 kW",
      "Masse": "1,4 kg",
      "Longueur": "332 mm",
      "Forme": "Droit",
      "Pince": "6 mm",
      "Consommation à vide": "360 L/min (6 l/s)",
      "Consommation à puissance maximale": "1 200 L/min (20 l/s)",
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
    "min": 1200,
    "typical": 1200,
    "max": 1200
  },
  "usagePattern": "continuous",
  "confidence": "A",
  "connectorSize": "Entrée 3/8 pouce BSP ; 3/8 pouce NPT ; flexible intérieur 13 mm",
  "recommendedHose": {
    "innerDiameterMm": 13
  },
  "image": {
    "src": "/images/products/atlas-copco-8423012708-technical.webp",
    "alt": "Atlas Copco LSF29 S180E, référence 8423012708 : 1 200 L/min à puissance maximale, référence 6,3 bar",
    "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/precision-grinding/lsf29-s180e-sku8423012708",
    "sourceLabel": "Repères techniques CompatAir d’après Atlas Copco"
  },
  "editorial": {
    "overview": "Atlas Copco LSF29 S180E, référence 8423012708, demande 1 200 L/min à puissance maximale selon la fiche fabricant. Le dimensionnement utilise la pression de référence de 6,3 bar documentée dans le catalogue Industrial Tools and Solutions UK. Vitesse maximale à vide : 18000 tr/min. Puissance maximale : 0,9 kW.",
    "verifiedFacts": [
      "Vitesse maximale à vide : 18000 tr/min.",
      "Puissance maximale : 0,9 kW.",
      "Masse : 1,4 kg.",
      "Longueur : 332 mm.",
      "Consommation à vide : 360 L/min, convertis depuis 6 l/s.",
      "Consommation à puissance maximale : 1 200 L/min, convertis depuis 20 l/s.",
      "Flexible recommandé : 13 mm de diamètre intérieur."
    ],
    "limitations": [
      "Le calcul conserve la plus élevée des consommations publiées pour les différentes phases. Il ne moyenne pas la marche à vide et le travail en charge.",
      "La pression de référence provient du catalogue UK, page 3, recoupé avec la référence individuelle. Le document ne fournit pas de courbe débit-pression pour cette fiche. Une évolution de la notice du modèle doit entraîner une nouvelle vérification.",
      "Ces valeurs déclarées ne constituent pas un essai physique de CompatAir. La fiche internationale ne prouve ni un stock actuel en France ni le contenu de l’offre d’un vendeur.",
      "La fiche indique des filetages BSP et NPT. Confirmer le raccord de la variante livrée dans sa notice avant de choisir un adaptateur.",
      "La longueur du flexible n’est pas spécifiée ici. Le diamètre seul ne permet pas de valider les pertes du réseau."
    ]
  },
  "specifications": [
    {
      "label": "Vitesse maximale à vide",
      "value": "18000 tr/min",
      "evidenceIds": [
        "atlas-copco-8423012708-fiche-fabricant"
      ]
    },
    {
      "label": "Puissance maximale",
      "value": "0,9 kW",
      "evidenceIds": [
        "atlas-copco-8423012708-fiche-fabricant"
      ]
    },
    {
      "label": "Masse",
      "value": "1,4 kg",
      "evidenceIds": [
        "atlas-copco-8423012708-fiche-fabricant"
      ]
    },
    {
      "label": "Longueur",
      "value": "332 mm",
      "evidenceIds": [
        "atlas-copco-8423012708-fiche-fabricant"
      ]
    },
    {
      "label": "Forme",
      "value": "Droit",
      "evidenceIds": [
        "atlas-copco-8423012708-fiche-fabricant"
      ]
    },
    {
      "label": "Pince",
      "value": "6 mm",
      "evidenceIds": [
        "atlas-copco-8423012708-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation à vide",
      "value": "360 L/min (6 l/s)",
      "evidenceIds": [
        "atlas-copco-8423012708-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation à puissance maximale",
      "value": "1 200 L/min (20 l/s)",
      "evidenceIds": [
        "atlas-copco-8423012708-fiche-fabricant"
      ]
    },
    {
      "label": "Pression maximale admise",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8423012708-fiche-fabricant"
      ]
    },
    {
      "label": "Pression de référence des performances",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8423012708-catalogue-uk"
      ]
    }
  ],
  "evidence": [
    {
      "id": "atlas-copco-8423012708-fiche-fabricant",
      "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/precision-grinding/lsf29-s180e-sku8423012708",
      "sourceLabel": "Atlas Copco, LSF29 S180E, 8423012708",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Caractéristiques individuelles versionnées, valeurs sources en L/s et CFM, empreinte SHA-256 de la fiche consultée."
    },
    {
      "id": "atlas-copco-8423012708-catalogue-uk",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=210",
      "sourceLabel": "Atlas Copco, Industrial Tools and Solutions UK, page PDF 210 ; conditions page 3",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Référence 8423012708 présente au tableau. Conditions générales : air détendu à la pression atmosphérique, pression de travail 6,3 bar sauf exception. Le millésime de cette édition n’est pas affirmé."
    }
  ],
  "fieldSources": {
    "mpn": [
      "atlas-copco-8423012708-fiche-fabricant",
      "atlas-copco-8423012708-catalogue-uk"
    ],
    "airflowLpm": [
      "atlas-copco-8423012708-fiche-fabricant"
    ],
    "workingPressureBar": [
      "atlas-copco-8423012708-catalogue-uk",
      "atlas-copco-8423012708-fiche-fabricant"
    ],
    "connectorSize": [
      "atlas-copco-8423012708-fiche-fabricant"
    ],
    "recommendedHose": [
      "atlas-copco-8423012708-fiche-fabricant"
    ]
  },
  "notes": [
    "Le verdict concerne l’alimentation en air. Les exigences de couple, d’accessoire et de sécurité restent celles de la notice de l’outil."
  ]
};
export default product;
