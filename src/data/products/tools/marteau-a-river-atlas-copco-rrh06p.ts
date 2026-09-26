// Source facts: atlas-copco-reviewed-2026-09-26.json.
const product = {
  "id": "atlas-copco-8426111104",
  "slug": "marteau-a-river-atlas-copco-rrh06p",
  "categoryId": "marteau-a-river",
  "category": "Marteau à river pneumatique",
  "label": "Marteau à river pneumatique Atlas Copco RRH06P",
  "brand": "Atlas Copco",
  "model": "RRH06P",
  "mpn": "8426111104",
  "variant": {
    "familyId": "atlas-copco-15825025547",
    "label": "RRH06P",
    "distinguishingAttributes": {
      "Masse": "1,3 kg",
      "Diamètre du piston": "15 mm",
      "Course du piston": "102 mm",
      "Cadence de frappe": "2160 coups/min",
      "Queue de bouterolle": "10,2 mm",
      "Consommation publiée": "540 L/min (9 l/s)",
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
    "min": 540,
    "typical": 540,
    "max": 540
  },
  "usagePattern": "intermittent",
  "confidence": "A",
  "connectorSize": "Entrée 1/4 BSP ; flexible intérieur 10 mm",
  "recommendedHose": {
    "innerDiameterMm": 10
  },
  "image": {
    "src": "/images/products/atlas-copco-8426111104-technical.webp",
    "alt": "Atlas Copco RRH06P, référence 8426111104 : 540 L/min publiée, référence 6,3 bar",
    "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/riveting-systems/rrh06p-sku8426111104",
    "sourceLabel": "Repères techniques CompatAir d’après Atlas Copco"
  },
  "editorial": {
    "overview": "Atlas Copco RRH06P, référence 8426111104, demande 540 L/min publiée selon la fiche fabricant. Le dimensionnement utilise la pression de référence de 6,3 bar documentée dans le catalogue Industrial Tools and Solutions UK. Masse : 1,3 kg. Diamètre du piston : 15 mm.",
    "verifiedFacts": [
      "Masse : 1,3 kg.",
      "Diamètre du piston : 15 mm.",
      "Course du piston : 102 mm.",
      "Cadence de frappe : 2160 coups/min.",
      "Consommation publiée : 540 L/min, convertis depuis 9 l/s.",
      "Flexible recommandé : 10 mm de diamètre intérieur."
    ],
    "limitations": [
      "La consommation publiée reste celle du fabricant. Aucun cycle de travail supposé ne la réduit dans le scénario de référence.",
      "La pression maximale admise de 7 bar n’est pas la pression de référence du débit. Aucune consommation à 7 bar n’est extrapolée.",
      "La pression de référence provient du catalogue UK, page 3, recoupé avec la référence individuelle. Le document ne fournit pas de courbe débit-pression pour cette fiche. Une évolution de la notice du modèle doit entraîner une nouvelle vérification.",
      "Ces valeurs déclarées ne constituent pas un essai physique de CompatAir. La fiche internationale ne prouve ni un stock actuel en France ni le contenu de l’offre d’un vendeur.",
      "La longueur du flexible n’est pas spécifiée ici. Le diamètre seul ne permet pas de valider les pertes du réseau."
    ]
  },
  "specifications": [
    {
      "label": "Masse",
      "value": "1,3 kg",
      "evidenceIds": [
        "atlas-copco-8426111104-fiche-fabricant"
      ]
    },
    {
      "label": "Diamètre du piston",
      "value": "15 mm",
      "evidenceIds": [
        "atlas-copco-8426111104-fiche-fabricant"
      ]
    },
    {
      "label": "Course du piston",
      "value": "102 mm",
      "evidenceIds": [
        "atlas-copco-8426111104-fiche-fabricant"
      ]
    },
    {
      "label": "Cadence de frappe",
      "value": "2160 coups/min",
      "evidenceIds": [
        "atlas-copco-8426111104-fiche-fabricant"
      ]
    },
    {
      "label": "Queue de bouterolle",
      "value": "10,2 mm",
      "evidenceIds": [
        "atlas-copco-8426111104-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation publiée",
      "value": "540 L/min (9 l/s)",
      "evidenceIds": [
        "atlas-copco-8426111104-fiche-fabricant"
      ]
    },
    {
      "label": "Pression maximale admise",
      "value": "7 bar",
      "evidenceIds": [
        "atlas-copco-8426111104-fiche-fabricant"
      ]
    },
    {
      "label": "Pression de référence des performances",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8426111104-catalogue-uk"
      ]
    }
  ],
  "evidence": [
    {
      "id": "atlas-copco-8426111104-fiche-fabricant",
      "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/riveting-systems/rrh06p-sku8426111104",
      "sourceLabel": "Atlas Copco, RRH06P, 8426111104",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Caractéristiques individuelles versionnées, valeurs sources en L/s et CFM, empreinte SHA-256 de la fiche consultée."
    },
    {
      "id": "atlas-copco-8426111104-catalogue-uk",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=242",
      "sourceLabel": "Atlas Copco, Industrial Tools and Solutions UK, page PDF 242 ; conditions page 3",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Référence 8426111104 présente au tableau. Conditions générales : air détendu à la pression atmosphérique, pression de travail 6,3 bar sauf exception. Le millésime de cette édition n’est pas affirmé."
    }
  ],
  "fieldSources": {
    "mpn": [
      "atlas-copco-8426111104-fiche-fabricant",
      "atlas-copco-8426111104-catalogue-uk"
    ],
    "airflowLpm": [
      "atlas-copco-8426111104-fiche-fabricant"
    ],
    "workingPressureBar": [
      "atlas-copco-8426111104-catalogue-uk",
      "atlas-copco-8426111104-fiche-fabricant"
    ],
    "connectorSize": [
      "atlas-copco-8426111104-fiche-fabricant"
    ],
    "recommendedHose": [
      "atlas-copco-8426111104-fiche-fabricant"
    ]
  },
  "notes": [
    "Le verdict concerne l’alimentation en air. Les exigences de couple, d’accessoire et de sécurité restent celles de la notice de l’outil."
  ]
};
export default product;
