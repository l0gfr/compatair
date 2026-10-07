import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
  "id": "pistolet-peinture-devilbiss-sri-pro-lite-mc1-buse-0-6-mm",
  "slug": "pistolet-peinture-devilbiss-sri-pro-lite-mc1-buse-0-6-mm",
  "categoryId": "pistolet-peinture",
  "category": "pistolet-peinture",
  "label": "DeVilbiss SRi PRO Lite MC1, buse 0.6 mm",
  "brand": "DeVilbiss",
  "model": "SRi PRO Lite MC1, buse 0.6 mm",
  "demandModel": "fixed-flow",
  "workingPressureBar": {
    "min": 1,
    "typical": 1,
    "max": 1
  },
  "airflowLpm": {
    "min": 50,
    "typical": 50,
    "max": 50
  },
  "confidence": "B",
  "variant": {
    "familyId": "devilbiss-sri-pro-lite",
    "label": "SRi PRO Lite MC1, buse 0.6 mm",
    "distinguishingAttributes": {
      "Chapeau d’air": "MC1 High Efficiency",
      "Buse recommandée avec ce chapeau": "0.6 mm",
      "Largeur de jet typique publiée": "60 mm à 50–100 mm de distance",
      "Masse sans godet": "395 g",
      "Entrée d’air": "1/4 BSP et 1/4 NPS mâle"
    }
  },
  "image": {
    "src": "/images/products/pistolet-peinture-devilbiss-sri-pro-lite-mc1-buse-0-6-mm.svg",
    "alt": "Repères techniques : DeVilbiss SRi PRO Lite MC1, buse 0.6 mm",
    "sourceUrl": "https://binks.canto.com/direct/document/e5pferut093q9bh95ksjqudk14/aJP_upvInFU6GqyJiv1MqAlw4q4/original?content-type=application%2Fpdf&name=SB-E-2-512-ENGLISH.pdf",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
  },
  "editorial": {
    "overview": "DeVilbiss SRi PRO Lite MC1, buse 0.6 mm. Consommation constructeur au point documenté : 50 L/min à 1 bar. Chapeau MC1 High Efficiency, buse inox 0.6 mm ; largeur de jet publiée 60 mm à 50–100 mm.",
    "verifiedFacts": [
      "Chapeau d’air : MC1 High Efficiency.",
      "Buse recommandée avec ce chapeau : 0.6 mm.",
      "Largeur de jet typique publiée : 60 mm à 50–100 mm de distance.",
      "Masse sans godet : 395 g.",
      "Entrée d’air : 1/4 BSP et 1/4 NPS mâle.",
      "Consommation publiée dans son unité originale : 50 L/Min, tableau AIR CAP PERFORMANCE GUIDE.",
      "Pression dans la source : 1 Bar, Recommended Air Inlet Pressure pour MC1."
    ],
    "limitations": [
      "Le tableau du chapeau MC1 recommande 1 bar. Ce point spécifique prime sur le réglage générique 2 bar indiqué ailleurs dans la notice pour les versions haute efficacité/HVLP.",
      "La configuration correspond à la matrice recommandée du fabricant. Aucun numéro de commande de pistolet complet n’est reconstitué à partir des numéros d’accessoires.",
      "Le besoin d’air concerne le chapeau au point de pression cité. Le débit de peinture en ml/min reste une autre grandeur et n’entre pas dans le calcul du compresseur.",
      "La largeur du jet est une valeur typique annoncée à 50–100 mm de distance. Le matériau et le réglage peuvent modifier le débit de peinture et le résultat.",
      "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
    ]
  },
  "specifications": [
    {
      "label": "Chapeau d’air",
      "value": "MC1 High Efficiency",
      "evidenceIds": [
        "october7-tools-devilbiss-sri-prolite-manual-p6"
      ]
    },
    {
      "label": "Buse recommandée avec ce chapeau",
      "value": "0.6 mm",
      "evidenceIds": [
        "october7-tools-devilbiss-sri-prolite-manual-p6"
      ]
    },
    {
      "label": "Largeur de jet typique publiée",
      "value": "60 mm à 50–100 mm de distance",
      "evidenceIds": [
        "october7-tools-devilbiss-sri-prolite-manual-p6"
      ]
    },
    {
      "label": "Masse sans godet",
      "value": "395 g",
      "evidenceIds": [
        "october7-tools-devilbiss-sri-prolite-manual-p6"
      ]
    },
    {
      "label": "Entrée d’air",
      "value": "1/4 BSP et 1/4 NPS mâle",
      "evidenceIds": [
        "october7-tools-devilbiss-sri-prolite-manual-p6"
      ]
    },
    {
      "label": "Consommation publiée dans son unité originale",
      "value": "50 L/Min, tableau AIR CAP PERFORMANCE GUIDE",
      "evidenceIds": [
        "october7-tools-devilbiss-sri-prolite-manual-p6"
      ]
    },
    {
      "label": "Pression dans la source",
      "value": "1 Bar, Recommended Air Inlet Pressure pour MC1",
      "evidenceIds": [
        "october7-tools-devilbiss-sri-prolite-manual-p6"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-tools-devilbiss-sri-prolite-manual-p6",
      "sourceUrl": "https://binks.canto.com/direct/document/e5pferut093q9bh95ksjqudk14/aJP_upvInFU6GqyJiv1MqAlw4q4/original?content-type=application%2Fpdf&name=SB-E-2-512-ENGLISH.pdf#page=6",
      "sourceLabel": "DeVilbiss, notice SRi PRO Lite SB-E-2-512 R5.0, mai 2025, page PDF 6",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 23bb52d97701861d9e030ba4717bb5ad9ac3cf20e39386aea0964106223fd944. Déclaration fabricant, sans essai physique CompatAir."
    },
    {
      "id": "october7-tools-devilbiss-sri-prolite-manual-p2",
      "sourceUrl": "https://binks.canto.com/direct/document/e5pferut093q9bh95ksjqudk14/aJP_upvInFU6GqyJiv1MqAlw4q4/original?content-type=application%2Fpdf&name=SB-E-2-512-ENGLISH.pdf#page=2",
      "sourceLabel": "DeVilbiss, notice SRi PRO Lite SB-E-2-512 R5.0, mai 2025, page PDF 2",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "Réponse primaire SHA-256 23bb52d97701861d9e030ba4717bb5ad9ac3cf20e39386aea0964106223fd944. Déclaration fabricant, sans essai physique CompatAir."
    }
  ],
  "fieldSources": {
    "workingPressureBar": [
      "october7-tools-devilbiss-sri-prolite-manual-p6",
      "october7-tools-devilbiss-sri-prolite-manual-p2"
    ],
    "airflowLpm": [
      "october7-tools-devilbiss-sri-prolite-manual-p6",
      "october7-tools-devilbiss-sri-prolite-manual-p2"
    ]
  },
  "notes": [
    "Chapeau MC1 High Efficiency, buse inox 0.6 mm ; largeur de jet publiée 60 mm à 50–100 mm.",
    "Le tableau du chapeau MC1 recommande 1 bar. Ce point spécifique prime sur le réglage générique 2 bar indiqué ailleurs dans la notice pour les versions haute efficacité/HVLP.",
    "La configuration correspond à la matrice recommandée du fabricant. Aucun numéro de commande de pistolet complet n’est reconstitué à partir des numéros d’accessoires.",
    "Le besoin d’air concerne le chapeau au point de pression cité. Le débit de peinture en ml/min reste une autre grandeur et n’entre pas dans le calcul du compresseur.",
    "La largeur du jet est une valeur typique annoncée à 50–100 mm de distance. Le matériau et le réglage peuvent modifier le débit de peinture et le résultat.",
    "Les limites du point documenté s’appliquent au pistolet ou à l’outil décrit ; les autres consommateurs du réseau sont à ajouter séparément."
  ]
};

export default product;
