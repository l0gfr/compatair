import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "fs-curtis-eco-pure-132w",
  "slug": "fs-curtis-eco-pure-132w",
  "brand": "FS-Curtis",
  "model": "ECO-Pure 132W",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "fs-curtis-eco-pure-132w",
    "label": "ECO-Pure 132W",
    "distinguishingAttributes": {
      "équipement": "ECO-Pure 132W",
      "pressionDeConfiguration": "6,895 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 6.895,
  "fadCurve": [],
  "oilType": "oil-free",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/fs-curtis-eco-pure-132w.svg",
    "alt": "Repères techniques : FS-Curtis ECO-Pure 132W",
    "sourceUrl": "https://us.fscurtis.com/product/eco-pure-110-250kw/",
    "sourceLabel": "Carte technique CompatAir, données déclarées par le constructeur"
  },
  "editorial": {
    "overview": "FS-Curtis ECO-Pure 132W. La table actuelle distingue EP132W à refroidissement par eau de EP132 refroidi par air. Elle affiche424 et 806 CFM sur une plage100–150 psi, sans point pression-débit apparié. Le point historique851,1 cfm à100 psig reste archivé ; sa ficheCAGI est actuellement inaccessible et aucun remplacement numérique n’est déduit du tableau.",
    "verifiedFacts": [
      "Modèle dans le tableau courant : EP132W.",
      "Puissance publiée : 132 kW /175 HP.",
      "Refroidissement : Par eau.",
      "Plage de pression publiée : 100–150 psi.",
      "Colonnes FAD du tableau : 424 et 806 CFM ; correspondance de pression non précisée.",
      "Niveau sonore déclaré : 72 dB(A).",
      "Masse dans son unité publiée : 10 571 lb."
    ],
    "limitations": [
      "6,895 bar est le plafond de sélection correspondant au point100 psig retenu historiquement ; le maximum matériel reste distinct.",
      "Le tableau web ne confirme pas le point CAGI historique : courbe FAD vide, compatibilité indéterminée.",
      "Les sous-entêtes du tableau FAD sont libellés Min.(psi)/Max.(psi) sous CFM ; ambiguïté d’unité signalée, sans correction supposée.",
      "Fréquence électrique, cuve et taux de marche du groupe non établis."
    ]
  },
  "specifications": [
    {
      "label": "Modèle dans le tableau courant",
      "value": "EP132W",
      "evidenceIds": [
        "fs-curtis-eco-pure-132w-reserved-20261103-1"
      ]
    },
    {
      "label": "Puissance publiée",
      "value": "132 kW /175 HP",
      "evidenceIds": [
        "fs-curtis-eco-pure-132w-reserved-20261103-1"
      ]
    },
    {
      "label": "Refroidissement",
      "value": "Par eau",
      "evidenceIds": [
        "fs-curtis-eco-pure-132w-reserved-20261103-1"
      ]
    },
    {
      "label": "Plage de pression publiée",
      "value": "100–150 psi",
      "evidenceIds": [
        "fs-curtis-eco-pure-132w-reserved-20261103-1"
      ]
    },
    {
      "label": "Colonnes FAD du tableau",
      "value": "424 et 806 CFM ; correspondance de pression non précisée",
      "evidenceIds": [
        "fs-curtis-eco-pure-132w-reserved-20261103-1"
      ]
    },
    {
      "label": "Niveau sonore déclaré",
      "value": "72 dB(A)",
      "evidenceIds": [
        "fs-curtis-eco-pure-132w-reserved-20261103-1"
      ]
    },
    {
      "label": "Masse dans son unité publiée",
      "value": "10 571 lb",
      "evidenceIds": [
        "fs-curtis-eco-pure-132w-reserved-20261103-1"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-fsc-ep132w-p1",
      "sourceUrl": "https://us.fscurtis.com/wp-content/uploads/2026/01/ep132w-100psi-cagi-data-sheet.pdf#page=1",
      "sourceLabel": "FS-Curtis, fiche technique constructeur au format CAGI, page PDF 1",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "SHA-256 4f0f45301e8d59f9fea52ea6044c7bff2dfd4032843f312b9fd16eef05fa7bf4 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "october7-nist-conversions-p1",
      "sourceUrl": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b8",
      "sourceLabel": "NIST, facteurs de conversion officiels, document constructeur",
      "sourceType": "manual",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "SHA-256 99092c3ae6a5030fdb6901f601cb87d99c07d62f31a164a4a0b6786847c5cc6c de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "fs-curtis-eco-pure-132w-reserved-20261103-1",
      "sourceUrl": "https://us.fscurtis.com/product/eco-pure-110-250kw/",
      "sourceLabel": "FS-Curtis : revue factuelle du 3 novembre 2026",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-03",
      "confidence": "B",
      "notes": "GET complet HTTP200 SHA-256 668b23a2d78a26a2cb7290ea4f891c0d5874894f581a5155648fe6f7930bfe46. La table actuelle distingue EP132W à refroidissement par eau de EP132 refroidi par air. Elle affiche424 et 806 CFM sur une plage100–150 psi, sans point pression-débit apparié. Le point historique851,1 cfm à100 psig reste archivé ; sa ficheCAGI est actuellement inaccessible et aucun remplacement numérique n’est déduit du tableau."
    }
  ],
  "fieldSources": {
    "model": [
      "october7-fsc-ep132w-p1"
    ],
    "maxPressureBar": [
      "fs-curtis-eco-pure-132w-reserved-20261103-1"
    ],
    "maxPressureBasis": [
      "fs-curtis-eco-pure-132w-reserved-20261103-1"
    ],
    "fadCurve": [
      "fs-curtis-eco-pure-132w-reserved-20261103-1"
    ],
    "oilType": [
      "october7-fsc-ep132w-p1"
    ],
    "image": [
      "fs-curtis-eco-pure-132w-reserved-20261103-1"
    ],
    "powerKw": [
      "fs-curtis-eco-pure-132w-reserved-20261103-1"
    ],
    "editorial": [
      "fs-curtis-eco-pure-132w-reserved-20261103-1"
    ],
    "specifications": [
      "fs-curtis-eco-pure-132w-reserved-20261103-1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ],
  "maxPressureBasis": "selected-working-pressure-ceiling",
  "powerKw": 132
};

export default product;
