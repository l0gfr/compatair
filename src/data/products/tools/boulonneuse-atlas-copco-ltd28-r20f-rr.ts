// Source facts: atlas-copco-reviewed-2026-09-26.json.
const product = {
  "id": "atlas-copco-8431070388",
  "slug": "boulonneuse-atlas-copco-ltd28-r20f-rr",
  "categoryId": "boulonneuse",
  "category": "Boulonneuse pneumatique",
  "label": "Boulonneuse pneumatique Atlas Copco LTD28 R20F-RR",
  "brand": "Atlas Copco",
  "model": "LTD28 R20F-RR",
  "mpn": "8431070388",
  "variant": {
    "familyId": "atlas-copco-20530477195",
    "label": "LTD28 R20F-RR",
    "distinguishingAttributes": {
      "Vitesse à vide": "570 tr/min",
      "Couple maximal de la plage": "20 Nm",
      "Couple minimal de la plage": "10 Nm",
      "Masse": "1,7 kg",
      "Longueur": "421 mm",
      "Dimension de sortie": "3/8\"",
      "Type de sortie": "Carré mâle",
      "Carré d’entraînement": "3/8 pouce",
      "Forme": "Droit",
      "Réversible": "Oui",
      "Arrêt automatique": "Oui",
      "Consommation à vide": "480 L/min (8 l/s)",
      "Pression maximale admise": "7 bar",
      "Pression de référence des performances": "6,3 bar",
      "Flexible recommandé, indication fabricant": "10/13 mm"
    }
  },
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6.3,
    "typical": 6.3,
    "max": 7
  },
  "airflowLpm": {
    "min": 480,
    "typical": 480,
    "max": 480
  },
  "usagePattern": "intermittent",
  "confidence": "A",
  "image": {
    "src": "/images/products/atlas-copco-8431070388-technical.webp",
    "alt": "Atlas Copco LTD28 R20F-RR, référence 8431070388 : 480 L/min à vide, référence 6,3 bar",
    "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/assembly-solutions/pneumatic-assembly-tools/ltd28-r20f-rr-sku8431070388",
    "sourceLabel": "Repères techniques CompatAir d’après Atlas Copco"
  },
  "editorial": {
    "overview": "Atlas Copco LTD28 R20F-RR, référence 8431070388, demande 480 L/min à vide selon la fiche fabricant. Le dimensionnement utilise la pression de référence de 6,3 bar documentée dans le catalogue Industrial Tools and Solutions UK. Vitesse à vide : 570 tr/min. Couple maximal de la plage : 20 Nm.",
    "verifiedFacts": [
      "Vitesse à vide : 570 tr/min.",
      "Couple maximal de la plage : 20 Nm.",
      "Couple minimal de la plage : 10 Nm.",
      "Masse : 1,7 kg.",
      "Consommation à vide : 480 L/min, convertis depuis 8 l/s."
    ],
    "limitations": [
      "La consommation à vide reste celle du fabricant. Aucun cycle de travail supposé ne la réduit dans le scénario de référence.",
      "La pression maximale admise de 7 bar n’est pas la pression de référence du débit. Aucune consommation à 7 bar n’est extrapolée.",
      "La pression de référence provient du catalogue UK, page 3, recoupé avec la référence individuelle. Le document ne fournit pas de courbe débit-pression pour cette fiche. Une évolution de la notice du modèle doit entraîner une nouvelle vérification.",
      "Ces valeurs déclarées ne constituent pas un essai physique de CompatAir. La fiche internationale ne prouve ni un stock actuel en France ni le contenu de l’offre d’un vendeur.",
      "Le flexible doit être confirmé dans la notice individuelle avant installation."
    ]
  },
  "specifications": [
    {
      "label": "Vitesse à vide",
      "value": "570 tr/min",
      "evidenceIds": [
        "atlas-copco-8431070388-fiche-fabricant"
      ]
    },
    {
      "label": "Couple maximal de la plage",
      "value": "20 Nm",
      "evidenceIds": [
        "atlas-copco-8431070388-fiche-fabricant"
      ]
    },
    {
      "label": "Couple minimal de la plage",
      "value": "10 Nm",
      "evidenceIds": [
        "atlas-copco-8431070388-fiche-fabricant"
      ]
    },
    {
      "label": "Masse",
      "value": "1,7 kg",
      "evidenceIds": [
        "atlas-copco-8431070388-fiche-fabricant"
      ]
    },
    {
      "label": "Longueur",
      "value": "421 mm",
      "evidenceIds": [
        "atlas-copco-8431070388-fiche-fabricant"
      ]
    },
    {
      "label": "Dimension de sortie",
      "value": "3/8\"",
      "evidenceIds": [
        "atlas-copco-8431070388-fiche-fabricant"
      ]
    },
    {
      "label": "Type de sortie",
      "value": "Carré mâle",
      "evidenceIds": [
        "atlas-copco-8431070388-fiche-fabricant"
      ]
    },
    {
      "label": "Carré d’entraînement",
      "value": "3/8 pouce",
      "evidenceIds": [
        "atlas-copco-8431070388-fiche-fabricant"
      ]
    },
    {
      "label": "Forme",
      "value": "Droit",
      "evidenceIds": [
        "atlas-copco-8431070388-fiche-fabricant"
      ]
    },
    {
      "label": "Réversible",
      "value": "Oui",
      "evidenceIds": [
        "atlas-copco-8431070388-fiche-fabricant"
      ]
    },
    {
      "label": "Arrêt automatique",
      "value": "Oui",
      "evidenceIds": [
        "atlas-copco-8431070388-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation à vide",
      "value": "480 L/min (8 l/s)",
      "evidenceIds": [
        "atlas-copco-8431070388-fiche-fabricant"
      ]
    },
    {
      "label": "Pression maximale admise",
      "value": "7 bar",
      "evidenceIds": [
        "atlas-copco-8431070388-fiche-fabricant"
      ]
    },
    {
      "label": "Pression de référence des performances",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8431070388-catalogue-uk"
      ]
    },
    {
      "label": "Flexible recommandé, indication fabricant",
      "value": "10/13 mm",
      "evidenceIds": [
        "atlas-copco-8431070388-fiche-fabricant"
      ]
    }
  ],
  "evidence": [
    {
      "id": "atlas-copco-8431070388-fiche-fabricant",
      "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/assembly-solutions/pneumatic-assembly-tools/ltd28-r20f-rr-sku8431070388",
      "sourceLabel": "Atlas Copco, LTD28 R20F-RR, 8431070388",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Caractéristiques individuelles versionnées, valeurs sources en L/s et CFM, empreinte SHA-256 de la fiche consultée."
    },
    {
      "id": "atlas-copco-8431070388-catalogue-uk",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=50",
      "sourceLabel": "Atlas Copco, Industrial Tools and Solutions UK, page PDF 50 ; conditions page 3",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Référence 8431070388 présente au tableau. Conditions générales : air détendu à la pression atmosphérique, pression de travail 6,3 bar sauf exception. Le millésime de cette édition n’est pas affirmé."
    }
  ],
  "fieldSources": {
    "mpn": [
      "atlas-copco-8431070388-fiche-fabricant",
      "atlas-copco-8431070388-catalogue-uk"
    ],
    "airflowLpm": [
      "atlas-copco-8431070388-fiche-fabricant"
    ],
    "workingPressureBar": [
      "atlas-copco-8431070388-catalogue-uk",
      "atlas-copco-8431070388-fiche-fabricant"
    ]
  },
  "notes": [
    "Le verdict concerne l’alimentation en air. Les exigences de couple, d’accessoire et de sécurité restent celles de la notice de l’outil."
  ]
};
export default product;
