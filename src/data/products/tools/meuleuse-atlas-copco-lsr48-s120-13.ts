// Source facts: atlas-copco-reviewed-2026-09-26.json.
const product = {
  "id": "atlas-copco-8423143006",
  "slug": "meuleuse-atlas-copco-lsr48-s120-13",
  "categoryId": "meuleuse",
  "category": "Meuleuse pneumatique",
  "label": "Meuleuse pneumatique Atlas Copco LSR48 S120-13",
  "brand": "Atlas Copco",
  "model": "LSR48 S120-13",
  "mpn": "8423143006",
  "variant": {
    "familyId": "atlas-copco-5089724171",
    "label": "LSR48 S120-13",
    "distinguishingAttributes": {
      "Vitesse maximale à vide": "12000 tr/min",
      "Puissance maximale": "1,8 kW",
      "Masse": "3,6 kg",
      "Longueur": "487 mm",
      "Forme": "Droit",
      "Filetage de broche": "5/8-11 UNC",
      "Longueur de broche": "42 mm",
      "Diamètre maximal de meule": "125 mm",
      "Consommation à vide": "780 L/min (13 l/s)",
      "Consommation à puissance maximale": "1 800 L/min (30 l/s)",
      "Pression maximale admise": "7 bar",
      "Pression de référence des performances": "6,3 bar"
    }
  },
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6.3,
    "typical": 6.3,
    "max": 7
  },
  "airflowLpm": {
    "min": 1800,
    "typical": 1800,
    "max": 1800
  },
  "usagePattern": "continuous",
  "confidence": "A",
  "connectorSize": "Entrée 1/2 pouce BSP ; flexible intérieur 16 mm",
  "recommendedHose": {
    "innerDiameterMm": 16
  },
  "image": {
    "src": "/images/products/atlas-copco-8423143006-technical.webp",
    "alt": "Atlas Copco LSR48 S120-13, référence 8423143006 : 1 800 L/min à puissance maximale, référence 6,3 bar",
    "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/rough-grinding-and-cutting/lsr48-s120-13-sku8423143006",
    "sourceLabel": "Repères techniques CompatAir d’après Atlas Copco"
  },
  "editorial": {
    "overview": "Atlas Copco LSR48 S120-13, référence 8423143006, demande 1 800 L/min à puissance maximale selon la fiche fabricant. Le dimensionnement utilise la pression de référence de 6,3 bar documentée dans le catalogue Industrial Tools and Solutions UK. Vitesse maximale à vide : 12000 tr/min. Puissance maximale : 1,8 kW.",
    "verifiedFacts": [
      "Vitesse maximale à vide : 12000 tr/min.",
      "Puissance maximale : 1,8 kW.",
      "Masse : 3,6 kg.",
      "Longueur : 487 mm.",
      "Consommation à vide : 780 L/min, convertis depuis 13 l/s.",
      "Consommation à puissance maximale : 1 800 L/min, convertis depuis 30 l/s.",
      "Flexible recommandé : 16 mm de diamètre intérieur."
    ],
    "limitations": [
      "Le calcul conserve la plus élevée des consommations publiées pour les différentes phases. Il ne moyenne pas la marche à vide et le travail en charge.",
      "La pression maximale admise de 7 bar n’est pas la pression de référence du débit. Aucune consommation à 7 bar n’est extrapolée.",
      "La pression de référence provient du catalogue UK, page 3, recoupé avec la référence individuelle. Le document ne fournit pas de courbe débit-pression pour cette fiche. Une évolution de la notice du modèle doit entraîner une nouvelle vérification.",
      "Ces valeurs déclarées ne constituent pas un essai physique de CompatAir. La fiche internationale ne prouve ni un stock actuel en France ni le contenu de l’offre d’un vendeur.",
      "La longueur du flexible n’est pas spécifiée ici. Le diamètre seul ne permet pas de valider les pertes du réseau."
    ]
  },
  "specifications": [
    {
      "label": "Vitesse maximale à vide",
      "value": "12000 tr/min",
      "evidenceIds": [
        "atlas-copco-8423143006-fiche-fabricant"
      ]
    },
    {
      "label": "Puissance maximale",
      "value": "1,8 kW",
      "evidenceIds": [
        "atlas-copco-8423143006-fiche-fabricant"
      ]
    },
    {
      "label": "Masse",
      "value": "3,6 kg",
      "evidenceIds": [
        "atlas-copco-8423143006-fiche-fabricant"
      ]
    },
    {
      "label": "Longueur",
      "value": "487 mm",
      "evidenceIds": [
        "atlas-copco-8423143006-fiche-fabricant"
      ]
    },
    {
      "label": "Forme",
      "value": "Droit",
      "evidenceIds": [
        "atlas-copco-8423143006-fiche-fabricant"
      ]
    },
    {
      "label": "Filetage de broche",
      "value": "5/8-11 UNC",
      "evidenceIds": [
        "atlas-copco-8423143006-fiche-fabricant"
      ]
    },
    {
      "label": "Longueur de broche",
      "value": "42 mm",
      "evidenceIds": [
        "atlas-copco-8423143006-fiche-fabricant"
      ]
    },
    {
      "label": "Diamètre maximal de meule",
      "value": "125 mm",
      "evidenceIds": [
        "atlas-copco-8423143006-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation à vide",
      "value": "780 L/min (13 l/s)",
      "evidenceIds": [
        "atlas-copco-8423143006-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation à puissance maximale",
      "value": "1 800 L/min (30 l/s)",
      "evidenceIds": [
        "atlas-copco-8423143006-fiche-fabricant"
      ]
    },
    {
      "label": "Pression maximale admise",
      "value": "7 bar",
      "evidenceIds": [
        "atlas-copco-8423143006-fiche-fabricant"
      ]
    },
    {
      "label": "Pression de référence des performances",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8423143006-catalogue-uk"
      ]
    }
  ],
  "evidence": [
    {
      "id": "atlas-copco-8423143006-fiche-fabricant",
      "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/rough-grinding-and-cutting/lsr48-s120-13-sku8423143006",
      "sourceLabel": "Atlas Copco, LSR48 S120-13, 8423143006",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Caractéristiques individuelles versionnées, valeurs sources en L/s et CFM, empreinte SHA-256 de la fiche consultée."
    },
    {
      "id": "atlas-copco-8423143006-catalogue-uk",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=213",
      "sourceLabel": "Atlas Copco, Industrial Tools and Solutions UK, page PDF 213 ; conditions page 3",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Référence 8423143006 présente au tableau. Conditions générales : air détendu à la pression atmosphérique, pression de travail 6,3 bar sauf exception. Le millésime de cette édition n’est pas affirmé."
    }
  ],
  "fieldSources": {
    "mpn": [
      "atlas-copco-8423143006-fiche-fabricant",
      "atlas-copco-8423143006-catalogue-uk"
    ],
    "airflowLpm": [
      "atlas-copco-8423143006-fiche-fabricant"
    ],
    "workingPressureBar": [
      "atlas-copco-8423143006-catalogue-uk",
      "atlas-copco-8423143006-fiche-fabricant"
    ],
    "connectorSize": [
      "atlas-copco-8423143006-fiche-fabricant"
    ],
    "recommendedHose": [
      "atlas-copco-8423143006-fiche-fabricant"
    ]
  },
  "notes": [
    "Le verdict concerne l’alimentation en air. Les exigences de couple, d’accessoire et de sécurité restent celles de la notice de l’outil."
  ]
};
export default product;
