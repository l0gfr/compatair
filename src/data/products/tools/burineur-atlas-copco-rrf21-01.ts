// Source facts: atlas-copco-reviewed-2026-09-26.json.
const product = {
  "id": "atlas-copco-8425110405",
  "slug": "burineur-atlas-copco-rrf21-01",
  "categoryId": "burineur",
  "category": "Burineur pneumatique",
  "label": "Burineur pneumatique Atlas Copco RRF21-01",
  "brand": "Atlas Copco",
  "model": "RRF21-01",
  "mpn": "8425110405",
  "variant": {
    "familyId": "atlas-copco-15825224843",
    "label": "RRF21-01",
    "distinguishingAttributes": {
      "Masse": "1,75 kg",
      "Diamètre du piston": "18 mm",
      "Course du piston": "33 mm",
      "Cadence de frappe": "57 Hz",
      "Consommation publiée": "390 L/min (6.5 l/s)",
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
    "min": 390,
    "typical": 390,
    "max": 390
  },
  "usagePattern": "intermittent",
  "confidence": "A",
  "connectorSize": "Entrée 3/8 BSP ; flexible intérieur 10 mm",
  "recommendedHose": {
    "innerDiameterMm": 10
  },
  "image": {
    "src": "/images/products/atlas-copco-8425110405-technical.webp",
    "alt": "Atlas Copco RRF21-01, référence 8425110405 : 390 L/min publiée, référence 6,3 bar",
    "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/percussive/rrf21-01-sku8425110405",
    "sourceLabel": "Repères techniques CompatAir d’après Atlas Copco"
  },
  "editorial": {
    "overview": "Atlas Copco RRF21-01, référence 8425110405, demande 390 L/min publiée selon la fiche fabricant. Le dimensionnement utilise la pression de référence de 6,3 bar documentée dans le catalogue Industrial Tools and Solutions UK. Masse : 1,75 kg. Diamètre du piston : 18 mm.",
    "verifiedFacts": [
      "Masse : 1,75 kg.",
      "Diamètre du piston : 18 mm.",
      "Course du piston : 33 mm.",
      "Cadence de frappe : 57 Hz.",
      "Consommation publiée : 390 L/min, convertis depuis 6.5 l/s.",
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
      "value": "1,75 kg",
      "evidenceIds": [
        "atlas-copco-8425110405-fiche-fabricant"
      ]
    },
    {
      "label": "Diamètre du piston",
      "value": "18 mm",
      "evidenceIds": [
        "atlas-copco-8425110405-fiche-fabricant"
      ]
    },
    {
      "label": "Course du piston",
      "value": "33 mm",
      "evidenceIds": [
        "atlas-copco-8425110405-fiche-fabricant"
      ]
    },
    {
      "label": "Cadence de frappe",
      "value": "57 Hz",
      "evidenceIds": [
        "atlas-copco-8425110405-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation publiée",
      "value": "390 L/min (6.5 l/s)",
      "evidenceIds": [
        "atlas-copco-8425110405-fiche-fabricant"
      ]
    },
    {
      "label": "Pression de référence des performances",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8425110405-catalogue-uk"
      ]
    }
  ],
  "evidence": [
    {
      "id": "atlas-copco-8425110405-fiche-fabricant",
      "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/percussive/rrf21-01-sku8425110405",
      "sourceLabel": "Atlas Copco, RRF21-01, 8425110405",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Caractéristiques individuelles versionnées, valeurs sources en L/s et CFM, empreinte SHA-256 de la fiche consultée."
    },
    {
      "id": "atlas-copco-8425110405-catalogue-uk",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=234",
      "sourceLabel": "Atlas Copco, Industrial Tools and Solutions UK, page PDF 234 ; conditions page 3",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Référence 8425110405 présente au tableau. Conditions générales : air détendu à la pression atmosphérique, pression de travail 6,3 bar sauf exception. Le millésime de cette édition n’est pas affirmé."
    }
  ],
  "fieldSources": {
    "mpn": [
      "atlas-copco-8425110405-fiche-fabricant",
      "atlas-copco-8425110405-catalogue-uk"
    ],
    "airflowLpm": [
      "atlas-copco-8425110405-fiche-fabricant"
    ],
    "workingPressureBar": [
      "atlas-copco-8425110405-catalogue-uk"
    ],
    "connectorSize": [
      "atlas-copco-8425110405-fiche-fabricant"
    ],
    "recommendedHose": [
      "atlas-copco-8425110405-fiche-fabricant"
    ]
  },
  "notes": [
    "Le verdict concerne l’alimentation en air. Les exigences de couple, d’accessoire et de sécurité restent celles de la notice de l’outil."
  ]
};
export default product;
