// Source facts: atlas-copco-reviewed-2026-09-26.json.
const product = {
  "id": "atlas-copco-8425010130",
  "slug": "burineur-atlas-copco-rrc13",
  "categoryId": "burineur",
  "category": "Burineur pneumatique",
  "label": "Burineur pneumatique Atlas Copco RRC13",
  "brand": "Atlas Copco",
  "model": "RRC13",
  "mpn": "8425010130",
  "variant": {
    "familyId": "atlas-copco-6034854283",
    "label": "RRC13",
    "distinguishingAttributes": {
      "Masse": "1,4 kg",
      "Longueur": "221 mm",
      "Diamètre du piston": "15 mm",
      "Course du piston": "35 mm",
      "Cadence de frappe": "73 Hz",
      "Consommation publiée": "240 L/min (4 l/s)",
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
    "min": 240,
    "typical": 240,
    "max": 240
  },
  "usagePattern": "intermittent",
  "confidence": "A",
  "connectorSize": "Entrée 3/8 BSP ; flexible intérieur 10 mm",
  "recommendedHose": {
    "innerDiameterMm": 10
  },
  "image": {
    "src": "/images/products/atlas-copco-8425010130-technical.webp",
    "alt": "Atlas Copco RRC13, référence 8425010130 : 240 L/min publiée, référence 6,3 bar",
    "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/percussive/rrc13-sku8425010130",
    "sourceLabel": "Repères techniques CompatAir d’après Atlas Copco"
  },
  "editorial": {
    "overview": "Atlas Copco RRC13, référence 8425010130, demande 240 L/min publiée selon la fiche fabricant. Le dimensionnement utilise la pression de référence de 6,3 bar documentée dans le catalogue Industrial Tools and Solutions UK. Masse : 1,4 kg. Longueur : 221 mm.",
    "verifiedFacts": [
      "Masse : 1,4 kg.",
      "Longueur : 221 mm.",
      "Diamètre du piston : 15 mm.",
      "Course du piston : 35 mm.",
      "Consommation publiée : 240 L/min, convertis depuis 4 l/s.",
      "Flexible recommandé : 10 mm de diamètre intérieur."
    ],
    "limitations": [
      "La consommation publiée reste celle du fabricant. Aucun cycle de travail supposé ne la réduit dans le scénario de référence.",
      "La pression de référence provient du catalogue UK, page 3, recoupé avec la référence individuelle. Le document ne fournit pas de courbe débit-pression pour cette fiche. Une évolution de la notice du modèle doit entraîner une nouvelle vérification.",
      "Ces valeurs déclarées ne constituent pas un essai physique de CompatAir. La fiche internationale ne prouve ni un stock actuel en France ni le contenu de l’offre d’un vendeur.",
      "La longueur du flexible n’est pas spécifiée ici. Le diamètre seul ne permet pas de valider les pertes du réseau."
    ]
  },
  "specifications": [
    {
      "label": "Masse",
      "value": "1,4 kg",
      "evidenceIds": [
        "atlas-copco-8425010130-fiche-fabricant"
      ]
    },
    {
      "label": "Longueur",
      "value": "221 mm",
      "evidenceIds": [
        "atlas-copco-8425010130-fiche-fabricant"
      ]
    },
    {
      "label": "Diamètre du piston",
      "value": "15 mm",
      "evidenceIds": [
        "atlas-copco-8425010130-fiche-fabricant"
      ]
    },
    {
      "label": "Course du piston",
      "value": "35 mm",
      "evidenceIds": [
        "atlas-copco-8425010130-fiche-fabricant"
      ]
    },
    {
      "label": "Cadence de frappe",
      "value": "73 Hz",
      "evidenceIds": [
        "atlas-copco-8425010130-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation publiée",
      "value": "240 L/min (4 l/s)",
      "evidenceIds": [
        "atlas-copco-8425010130-fiche-fabricant"
      ]
    },
    {
      "label": "Pression maximale admise",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8425010130-fiche-fabricant"
      ]
    },
    {
      "label": "Pression de référence des performances",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8425010130-catalogue-uk"
      ]
    }
  ],
  "evidence": [
    {
      "id": "atlas-copco-8425010130-fiche-fabricant",
      "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/percussive/rrc13-sku8425010130",
      "sourceLabel": "Atlas Copco, RRC13, 8425010130",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Caractéristiques individuelles versionnées, valeurs sources en L/s et CFM, empreinte SHA-256 de la fiche consultée."
    },
    {
      "id": "atlas-copco-8425010130-catalogue-uk",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=236",
      "sourceLabel": "Atlas Copco, Industrial Tools and Solutions UK, page PDF 236 ; conditions page 3",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Référence 8425010130 présente au tableau. Conditions générales : air détendu à la pression atmosphérique, pression de travail 6,3 bar sauf exception. Le millésime de cette édition n’est pas affirmé."
    }
  ],
  "fieldSources": {
    "mpn": [
      "atlas-copco-8425010130-fiche-fabricant",
      "atlas-copco-8425010130-catalogue-uk"
    ],
    "airflowLpm": [
      "atlas-copco-8425010130-fiche-fabricant"
    ],
    "workingPressureBar": [
      "atlas-copco-8425010130-catalogue-uk",
      "atlas-copco-8425010130-fiche-fabricant"
    ],
    "connectorSize": [
      "atlas-copco-8425010130-fiche-fabricant"
    ],
    "recommendedHose": [
      "atlas-copco-8425010130-fiche-fabricant"
    ]
  },
  "notes": [
    "Le verdict concerne l’alimentation en air. Les exigences de couple, d’accessoire et de sécurité restent celles de la notice de l’outil."
  ]
};
export default product;
