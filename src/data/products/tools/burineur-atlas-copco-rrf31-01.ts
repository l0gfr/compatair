// Source facts: atlas-copco-reviewed-2026-09-26.json.
const product = {
  "id": "atlas-copco-8425110415",
  "slug": "burineur-atlas-copco-rrf31-01",
  "categoryId": "burineur",
  "category": "Burineur pneumatique",
  "label": "Burineur pneumatique Atlas Copco RRF31-01",
  "brand": "Atlas Copco",
  "model": "RRF31-01",
  "mpn": "8425110415",
  "variant": {
    "familyId": "atlas-copco-15825224843",
    "label": "RRF31-01",
    "distinguishingAttributes": {
      "Masse": "2,5 kg",
      "Diamètre du piston": "22 mm",
      "Course du piston": "43 mm",
      "Cadence de frappe": "38 Hz",
      "Consommation publiée": "450 L/min (7.5 l/s)",
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
    "min": 450,
    "typical": 450,
    "max": 450
  },
  "usagePattern": "intermittent",
  "confidence": "A",
  "connectorSize": "Entrée 3/8 BSP ; flexible intérieur 10 mm",
  "recommendedHose": {
    "innerDiameterMm": 10
  },
  "image": {
    "src": "/images/products/atlas-copco-8425110415-technical.webp",
    "alt": "Atlas Copco RRF31-01, référence 8425110415 : 450 L/min publiée, référence 6,3 bar",
    "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/percussive/rrf31-01-sku8425110415",
    "sourceLabel": "Repères techniques CompatAir d’après Atlas Copco"
  },
  "editorial": {
    "overview": "Atlas Copco RRF31-01, référence 8425110415, demande 450 L/min publiée selon la fiche fabricant. Le dimensionnement utilise la pression de référence de 6,3 bar documentée dans le catalogue Industrial Tools and Solutions UK. Masse : 2,5 kg. Diamètre du piston : 22 mm.",
    "verifiedFacts": [
      "Masse : 2,5 kg.",
      "Diamètre du piston : 22 mm.",
      "Course du piston : 43 mm.",
      "Cadence de frappe : 38 Hz.",
      "Consommation publiée : 450 L/min, convertis depuis 7.5 l/s.",
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
      "value": "2,5 kg",
      "evidenceIds": [
        "atlas-copco-8425110415-fiche-fabricant"
      ]
    },
    {
      "label": "Diamètre du piston",
      "value": "22 mm",
      "evidenceIds": [
        "atlas-copco-8425110415-fiche-fabricant"
      ]
    },
    {
      "label": "Course du piston",
      "value": "43 mm",
      "evidenceIds": [
        "atlas-copco-8425110415-fiche-fabricant"
      ]
    },
    {
      "label": "Cadence de frappe",
      "value": "38 Hz",
      "evidenceIds": [
        "atlas-copco-8425110415-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation publiée",
      "value": "450 L/min (7.5 l/s)",
      "evidenceIds": [
        "atlas-copco-8425110415-fiche-fabricant"
      ]
    },
    {
      "label": "Pression de référence des performances",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8425110415-catalogue-uk"
      ]
    }
  ],
  "evidence": [
    {
      "id": "atlas-copco-8425110415-fiche-fabricant",
      "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/percussive/rrf31-01-sku8425110415",
      "sourceLabel": "Atlas Copco, RRF31-01, 8425110415",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Caractéristiques individuelles versionnées, valeurs sources en L/s et CFM, empreinte SHA-256 de la fiche consultée."
    },
    {
      "id": "atlas-copco-8425110415-catalogue-uk",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=234",
      "sourceLabel": "Atlas Copco, Industrial Tools and Solutions UK, page PDF 234 ; conditions page 3",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Référence 8425110415 présente au tableau. Conditions générales : air détendu à la pression atmosphérique, pression de travail 6,3 bar sauf exception. Le millésime de cette édition n’est pas affirmé."
    }
  ],
  "fieldSources": {
    "mpn": [
      "atlas-copco-8425110415-fiche-fabricant",
      "atlas-copco-8425110415-catalogue-uk"
    ],
    "airflowLpm": [
      "atlas-copco-8425110415-fiche-fabricant"
    ],
    "workingPressureBar": [
      "atlas-copco-8425110415-catalogue-uk"
    ],
    "connectorSize": [
      "atlas-copco-8425110415-fiche-fabricant"
    ],
    "recommendedHose": [
      "atlas-copco-8425110415-fiche-fabricant"
    ]
  },
  "notes": [
    "Le verdict concerne l’alimentation en air. Les exigences de couple, d’accessoire et de sécurité restent celles de la notice de l’outil."
  ]
};
export default product;
