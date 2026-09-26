// Source facts: atlas-copco-reviewed-2026-09-26.json.
const product = {
  "id": "atlas-copco-8431070424",
  "slug": "boulonneuse-atlas-copco-ltd38-r32-rr",
  "categoryId": "boulonneuse",
  "category": "Boulonneuse pneumatique",
  "label": "Boulonneuse pneumatique Atlas Copco LTD38 R32-RR",
  "brand": "Atlas Copco",
  "model": "LTD38 R32-RR",
  "mpn": "8431070424",
  "variant": {
    "familyId": "atlas-copco-20530477195",
    "label": "LTD38 R32-RR",
    "distinguishingAttributes": {
      "Vitesse à vide": "560 tr/min",
      "Couple maximal de la plage": "32 Nm",
      "Couple minimal de la plage": "18 Nm",
      "Masse": "2,1 kg",
      "Longueur": "377 mm",
      "Dimension de sortie": "1/2\"",
      "Type de sortie": "Carré mâle",
      "Carré d’entraînement": "1/2 pouce",
      "Forme": "Droit",
      "Réversible": "Oui",
      "Arrêt automatique": "Oui",
      "Consommation à vide": "960 L/min (16 l/s)",
      "Pression maximale admise": "7 bar",
      "Pression de référence des performances": "6,3 bar",
      "Flexible recommandé, indication fabricant": "10/16 mm"
    }
  },
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 6.3,
    "typical": 6.3,
    "max": 7
  },
  "airflowLpm": {
    "min": 960,
    "typical": 960,
    "max": 960
  },
  "usagePattern": "intermittent",
  "confidence": "A",
  "image": {
    "src": "/images/products/atlas-copco-8431070424-technical.webp",
    "alt": "Atlas Copco LTD38 R32-RR, référence 8431070424 : 960 L/min à vide, référence 6,3 bar",
    "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/assembly-solutions/pneumatic-assembly-tools/ltd38-r32-rr-sku8431070424",
    "sourceLabel": "Repères techniques CompatAir d’après Atlas Copco"
  },
  "editorial": {
    "overview": "Atlas Copco LTD38 R32-RR, référence 8431070424, demande 960 L/min à vide selon la fiche fabricant. Le dimensionnement utilise la pression de référence de 6,3 bar documentée dans le catalogue Industrial Tools and Solutions UK. Vitesse à vide : 560 tr/min. Couple maximal de la plage : 32 Nm.",
    "verifiedFacts": [
      "Vitesse à vide : 560 tr/min.",
      "Couple maximal de la plage : 32 Nm.",
      "Couple minimal de la plage : 18 Nm.",
      "Masse : 2,1 kg.",
      "Consommation à vide : 960 L/min, convertis depuis 16 l/s."
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
      "value": "560 tr/min",
      "evidenceIds": [
        "atlas-copco-8431070424-fiche-fabricant"
      ]
    },
    {
      "label": "Couple maximal de la plage",
      "value": "32 Nm",
      "evidenceIds": [
        "atlas-copco-8431070424-fiche-fabricant"
      ]
    },
    {
      "label": "Couple minimal de la plage",
      "value": "18 Nm",
      "evidenceIds": [
        "atlas-copco-8431070424-fiche-fabricant"
      ]
    },
    {
      "label": "Masse",
      "value": "2,1 kg",
      "evidenceIds": [
        "atlas-copco-8431070424-fiche-fabricant"
      ]
    },
    {
      "label": "Longueur",
      "value": "377 mm",
      "evidenceIds": [
        "atlas-copco-8431070424-fiche-fabricant"
      ]
    },
    {
      "label": "Dimension de sortie",
      "value": "1/2\"",
      "evidenceIds": [
        "atlas-copco-8431070424-fiche-fabricant"
      ]
    },
    {
      "label": "Type de sortie",
      "value": "Carré mâle",
      "evidenceIds": [
        "atlas-copco-8431070424-fiche-fabricant"
      ]
    },
    {
      "label": "Carré d’entraînement",
      "value": "1/2 pouce",
      "evidenceIds": [
        "atlas-copco-8431070424-fiche-fabricant"
      ]
    },
    {
      "label": "Forme",
      "value": "Droit",
      "evidenceIds": [
        "atlas-copco-8431070424-fiche-fabricant"
      ]
    },
    {
      "label": "Réversible",
      "value": "Oui",
      "evidenceIds": [
        "atlas-copco-8431070424-fiche-fabricant"
      ]
    },
    {
      "label": "Arrêt automatique",
      "value": "Oui",
      "evidenceIds": [
        "atlas-copco-8431070424-fiche-fabricant"
      ]
    },
    {
      "label": "Consommation à vide",
      "value": "960 L/min (16 l/s)",
      "evidenceIds": [
        "atlas-copco-8431070424-fiche-fabricant"
      ]
    },
    {
      "label": "Pression maximale admise",
      "value": "7 bar",
      "evidenceIds": [
        "atlas-copco-8431070424-fiche-fabricant"
      ]
    },
    {
      "label": "Pression de référence des performances",
      "value": "6,3 bar",
      "evidenceIds": [
        "atlas-copco-8431070424-catalogue-uk"
      ]
    },
    {
      "label": "Flexible recommandé, indication fabricant",
      "value": "10/16 mm",
      "evidenceIds": [
        "atlas-copco-8431070424-fiche-fabricant"
      ]
    }
  ],
  "evidence": [
    {
      "id": "atlas-copco-8431070424-fiche-fabricant",
      "sourceUrl": "https://www.atlascopco.com/en-ca/itba/products/assembly-solutions/pneumatic-assembly-tools/ltd38-r32-rr-sku8431070424",
      "sourceLabel": "Atlas Copco, LTD38 R32-RR, 8431070424",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Caractéristiques individuelles versionnées, valeurs sources en L/s et CFM, empreinte SHA-256 de la fiche consultée."
    },
    {
      "id": "atlas-copco-8431070424-catalogue-uk",
      "sourceUrl": "https://www.atlascopco.com/content/dam/atlas-copco/industrial-technique/general/documents/catalogs/Industrial%20Tools%20and%20Solutions_uk.pdf#page=50",
      "sourceLabel": "Atlas Copco, Industrial Tools and Solutions UK, page PDF 50 ; conditions page 3",
      "sourceType": "manufacturer",
      "retrievedAt": "2026-09-26",
      "confidence": "A",
      "notes": "Référence 8431070424 présente au tableau. Conditions générales : air détendu à la pression atmosphérique, pression de travail 6,3 bar sauf exception. Le millésime de cette édition n’est pas affirmé."
    }
  ],
  "fieldSources": {
    "mpn": [
      "atlas-copco-8431070424-fiche-fabricant",
      "atlas-copco-8431070424-catalogue-uk"
    ],
    "airflowLpm": [
      "atlas-copco-8431070424-fiche-fabricant"
    ],
    "workingPressureBar": [
      "atlas-copco-8431070424-catalogue-uk",
      "atlas-copco-8431070424-fiche-fabricant"
    ]
  },
  "notes": [
    "Le verdict concerne l’alimentation en air. Les exigences de couple, d’accessoire et de sécurité restent celles de la notice de l’outil."
  ]
};
export default product;
