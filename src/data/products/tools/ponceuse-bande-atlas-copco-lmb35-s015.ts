// Source facts: atlas-copco-reviewed-2026-09-26.json.
const product = {
  "id": "atlas-copco-8423030520",
  "slug": "ponceuse-bande-atlas-copco-lmb35-s015",
  "categoryId": "ponceuse-bande",
  "category": "Ponceuse à bande pneumatique",
  "label": "Ponceuse à bande pneumatique Atlas Copco LMB35 S015",
  "brand": "Atlas Copco",
  "model": "LMB35 S015",
  "mpn": "8423030520",
  "variant": {
    "familyId": "atlas-copco-15994817931",
    "label": "LMB35 S015",
    "distinguishingAttributes": {
      "Vitesse maximale à vide": "22000 tr/min",
      "Puissance maximale": "0,35 kW",
      "Masse": "1 kg",
      "Longueur": "302 mm",
      "Dimensions de bande": "19X520 mm",
      "Vitesse de bande": "1500 m/min",
      "Consommation à vide": "660 L/min (11 l/s)",
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
    "min": 660,
    "typical": 660,
    "max": 660
  },
  "usagePattern": "continuous",
  "confidence": "A",
  "connectorSize": "Entrée 1/4 pouce BSP ; 1/4 pouce NPT ; flexible intérieur 10 mm",
  "recommendedHose": {
    "innerDiameterMm": 10
  },
  "image": {
    "src": "/images/products/atlas-copco-8423030520-technical.webp",
    "alt": "Atlas Copco LMB35 S015, référence 8423030520 : 660 L/min à vide, référence 6,3 bar",
    "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/surface-sanding-and-polishing/lmb35-s015-sku8423030520",
    "sourceLabel": "Repères techniques CompatAir d’après Atlas Copco"
  },
  "editorial": {
    "overview": "Atlas Copco LMB35 S015, référence 8423030520, demande 660 L/min à vide selon la fiche fabricant. Le dimensionnement utilise la pression de référence de 6,3 bar documentée dans le catalogue Industrial Tools and Solutions UK. Vitesse maximale à vide : 22000 tr/min. Puissance maximale : 0,35 kW.",
    "verifiedFacts": [
      "Vitesse maximale à vide : 22000 tr/min.",
      "Puissance maximale : 0,35 kW.",
      "Masse : 1 kg.",
      "Longueur : 302 mm.",
      "Consommation à vide : 660 L/min, convertis depuis 11 l/s.",
      "Flexible recommandé : 10 mm de diamètre intérieur."
    ],
    "limitations": [
      "La consommation à vide reste celle du fabricant. Aucun cycle de travail supposé ne la réduit dans le scénario de référence.",
      "La pression de référence provient du catalogue UK, page 3, recoupé avec la référence individuelle. Le document ne fournit pas de courbe débit-pression pour cette fiche. Une évolution de la notice du modèle doit entraîner une nouvelle vérification.",
      "Ces valeurs déclarées ne constituent pas un essai physique de CompatAir. La fiche internationale ne prouve ni un stock actuel en France ni le contenu de l’offre d’un vendeur.",
      "La fiche indique des filetages BSP et NPT. Confirmer le raccord de la variante livrée dans sa notice avant de choisir un adaptateur.",
      "La longueur du flexible n’est pas spécifiée ici. Le diamètre seul ne permet pas de valider les pertes du réseau."
    ]
  },
  "specifications": [
    {
      "label": "Vitesse maximale à vide",
      "value": "22000 tr/min",
      "evidenceIds": [
        "atlas-copco-8423030520-fiche-fabricant"
      ]
    },
    {
      "label": "Puissance maximale",
      "value": "0,35 kW",
      "evidenceIds": [
        "atlas-copco-8423030520-fiche-fabricant"
      ]
    },
    {
      "label": "Masse",
      "value": "1 kg",
      "evidenceIds": [
        "atlas-copco-8423030520-fiche-fabricant"
      ]
    },
    {
      "label": "Longueur",
      "value": "302 mm",
      "evidenceIds": [
        "atlas-copco-8423030520-fiche-fabricant"
      ]
    },
    {
      "label": "Dimensions de bande",
      "value": "19X520 mm",
      "evidenceIds": [
        "atlas-copco-8423030520-fiche-fabricant"
      ]
    },
    {
      "label": "Vitesse de bande",
      "value": "1500 m/min",
      "evidenceIds": [
        "atlas-copco-8423030520-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation à vide",
      "value": "660 L/min (11 l/s)",
      "evidenceIds": [
        "atlas-copco-8423030520-fiche-fabricant"
      ]
    },
    {
      "label": "Pression maximale admise",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8423030520-fiche-fabricant"
      ]
    },
    {
      "label": "Pression de référence des performances",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8423030520-catalogue-uk"
      ]
    }
  ],
  "evidence": [
    {
      "id": "atlas-copco-8423030520-fiche-fabricant",
      "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/material-removal-tools/surface-sanding-and-polishing/lmb35-s015-sku8423030520",
      "sourceLabel": "Atlas Copco, LMB35 S015, 8423030520",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Caractéristiques individuelles versionnées, valeurs sources en L/s et CFM, empreinte SHA-256 de la fiche consultée."
    },
    {
      "id": "atlas-copco-8423030520-catalogue-uk",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=223",
      "sourceLabel": "Atlas Copco, Industrial Tools and Solutions UK, page PDF 223 ; conditions page 3",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Référence 8423030520 présente au tableau. Conditions générales : air détendu à la pression atmosphérique, pression de travail 6,3 bar sauf exception. Le millésime de cette édition n’est pas affirmé."
    }
  ],
  "fieldSources": {
    "mpn": [
      "atlas-copco-8423030520-fiche-fabricant",
      "atlas-copco-8423030520-catalogue-uk"
    ],
    "airflowLpm": [
      "atlas-copco-8423030520-fiche-fabricant"
    ],
    "workingPressureBar": [
      "atlas-copco-8423030520-catalogue-uk",
      "atlas-copco-8423030520-fiche-fabricant"
    ],
    "connectorSize": [
      "atlas-copco-8423030520-fiche-fabricant"
    ],
    "recommendedHose": [
      "atlas-copco-8423030520-fiche-fabricant"
    ]
  },
  "notes": [
    "Le verdict concerne l’alimentation en air. Les exigences de couple, d’accessoire et de sécurité restent celles de la notice de l’outil."
  ]
};
export default product;
