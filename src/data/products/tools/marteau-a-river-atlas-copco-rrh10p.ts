// Source facts: atlas-copco-reviewed-2026-09-26.json.
const product = {
  "id": "atlas-copco-8426111020",
  "slug": "marteau-a-river-atlas-copco-rrh10p",
  "categoryId": "marteau-a-river",
  "category": "Marteau à river pneumatique",
  "label": "Marteau à river pneumatique Atlas Copco RRH10P",
  "brand": "Atlas Copco",
  "model": "RRH10P",
  "mpn": "8426111020",
  "variant": {
    "familyId": "atlas-copco-15825025547",
    "label": "RRH10P",
    "distinguishingAttributes": {
      "Masse": "2 kg",
      "Diamètre du piston": "19 mm",
      "Course du piston": "118 mm",
      "Cadence de frappe": "1500 coups/min",
      "Queue de bouterolle": "12,7 mm",
      "Consommation publiée": "720 L/min (12 l/s)",
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
    "min": 720,
    "typical": 720,
    "max": 720
  },
  "usagePattern": "intermittent",
  "confidence": "A",
  "connectorSize": "Entrée 1/4 BSP ; flexible intérieur 10 mm",
  "recommendedHose": {
    "innerDiameterMm": 10
  },
  "image": {
    "src": "/images/products/atlas-copco-8426111020-technical.webp",
    "alt": "Atlas Copco RRH10P, référence 8426111020 : 720 L/min publiée, référence 6,3 bar",
    "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/riveting-systems/rrh10p-sku8426111020",
    "sourceLabel": "Repères techniques CompatAir d’après Atlas Copco"
  },
  "editorial": {
    "overview": "Atlas Copco RRH10P, référence 8426111020, demande 720 L/min publiée selon la fiche fabricant. Le dimensionnement utilise la pression de référence de 6,3 bar documentée dans le catalogue Industrial Tools and Solutions UK. Masse : 2 kg. Diamètre du piston : 19 mm.",
    "verifiedFacts": [
      "Masse : 2 kg.",
      "Diamètre du piston : 19 mm.",
      "Course du piston : 118 mm.",
      "Cadence de frappe : 1500 coups/min.",
      "Consommation publiée : 720 L/min, convertis depuis 12 l/s.",
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
      "value": "2 kg",
      "evidenceIds": [
        "atlas-copco-8426111020-fiche-fabricant"
      ]
    },
    {
      "label": "Diamètre du piston",
      "value": "19 mm",
      "evidenceIds": [
        "atlas-copco-8426111020-fiche-fabricant"
      ]
    },
    {
      "label": "Course du piston",
      "value": "118 mm",
      "evidenceIds": [
        "atlas-copco-8426111020-fiche-fabricant"
      ]
    },
    {
      "label": "Cadence de frappe",
      "value": "1500 coups/min",
      "evidenceIds": [
        "atlas-copco-8426111020-fiche-fabricant"
      ]
    },
    {
      "label": "Queue de bouterolle",
      "value": "12,7 mm",
      "evidenceIds": [
        "atlas-copco-8426111020-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation publiée",
      "value": "720 L/min (12 l/s)",
      "evidenceIds": [
        "atlas-copco-8426111020-fiche-fabricant"
      ]
    },
    {
      "label": "Pression maximale admise",
      "value": "7 bar",
      "evidenceIds": [
        "atlas-copco-8426111020-fiche-fabricant"
      ]
    },
    {
      "label": "Pression de référence des performances",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8426111020-catalogue-uk"
      ]
    }
  ],
  "evidence": [
    {
      "id": "atlas-copco-8426111020-fiche-fabricant",
      "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/riveting-systems/rrh10p-sku8426111020",
      "sourceLabel": "Atlas Copco, RRH10P, 8426111020",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Caractéristiques individuelles versionnées, valeurs sources en L/s et CFM, empreinte SHA-256 de la fiche consultée."
    },
    {
      "id": "atlas-copco-8426111020-catalogue-uk",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=242",
      "sourceLabel": "Atlas Copco, Industrial Tools and Solutions UK, page PDF 242 ; conditions page 3",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Référence 8426111020 présente au tableau. Conditions générales : air détendu à la pression atmosphérique, pression de travail 6,3 bar sauf exception. Le millésime de cette édition n’est pas affirmé."
    }
  ],
  "fieldSources": {
    "mpn": [
      "atlas-copco-8426111020-fiche-fabricant",
      "atlas-copco-8426111020-catalogue-uk"
    ],
    "airflowLpm": [
      "atlas-copco-8426111020-fiche-fabricant"
    ],
    "workingPressureBar": [
      "atlas-copco-8426111020-catalogue-uk",
      "atlas-copco-8426111020-fiche-fabricant"
    ],
    "connectorSize": [
      "atlas-copco-8426111020-fiche-fabricant"
    ],
    "recommendedHose": [
      "atlas-copco-8426111020-fiche-fabricant"
    ]
  },
  "notes": [
    "Le verdict concerne l’alimentation en air. Les exigences de couple, d’accessoire et de sécurité restent celles de la notice de l’outil."
  ]
};
export default product;
