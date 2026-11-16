import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
  "id": "rotair-mdvn-37-p",
  "slug": "rotair-mdvn-37-p",
  "brand": "Rotair",
  "model": "MDVN 37 P",
  "distributorSkus": [],
  "identifierAliases": [],
  "variant": {
    "familyId": "rotair-mdvn-37-p",
    "label": "Configuration constructeur MDVN 37 P à 7,0 bar",
    "distinguishingAttributes": {
      "équipement": "Configuration constructeur MDVN 37 P à 7,0 bar",
      "pressionDeConfiguration": "7 bar",
      "cuve": "Non documentée"
    }
  },
  "maxPressureBar": 7,
  "fadCurve": [
    {
      "pressureBar": 7,
      "litersPerMinute": 3600
    }
  ],
  "oilType": "unknown",
  "confidence": "B",
  "status": "unknown",
  "image": {
    "src": "/images/products/rotair-mdvn-37-p-technical-20261116-followup.svg",
    "alt": "Repères techniques : Rotair MDVN 37 P",
    "sourceUrl": "https://www.rotairspa.com/portable-compressors-diesel/mdvn-range/",
    "sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
  },
  "editorial": {
    "overview": "Rotair MDVN 37 P : compresseur diesel à moteur Perkins Stage IIIa, distinct du moteur Kubota de la version voisine. La configuration 7 bar fournit 3 600 L/min ; la version 10 bar donne 2 900 L/min. Le fabricant réserve cette famille aux pays où les normes d’émissions concernées ne s’appliquent pas. La MDVN 30 Rehlko Stage V répond à une autre destination.",
    "verifiedFacts": [
      "Pression de la configuration documentée : 7 bar.",
      "FAD sous pression identifié séparément des valeurs d’aspiration : 3 600 L/min déclarés à 7 bar.",
      "Motorisation : Perkins Stage IIIa.",
      "Destination annoncée : Pays sans application des normes et réglementations d’émissions concernées ; vérifier admissibilité locale.",
      "Versions de pression distinctes : 7 bar : 3 600 L/min ; 10 bar : 2900 L/min ; 12 bar : 2 250 L/min.",
      "Option sablage : Refroidissement et séchage, non attribués au groupe générique."
    ],
    "limitations": [
      "Les autres colonnes de pression décrivent les versions proposées ; aucun débit intermédiaire ni pression de sécurité de cette configuration ne sont déduits.",
      "Le réservoir de carburant et le réservoir d’huile ne constituent pas une cuve de stockage d’air. La disponibilité locale et le dispositif d’attelage doivent être vérifiés.",
      "Aucune interpolation de FAD, aucun essai physique CompatAir ; disponibilité et raccordement local à confirmer.",
      "Cycle de service non documenté : une compatibilité continue ne peut pas être conclue à partir de ce seul profil.",
      "La fréquence électrique de cette configuration n’est pas documentée.",
      "Cuve non documentée : l’autonomie et le volume de stockage ne peuvent pas être conclus à partir de ce profil.",
      "La source documente ce point de pression. Elle ne prouve pas le maximum matériel ; au-delà, le verdict doit rester données insuffisantes."
    ]
  },
  "specifications": [
    {
      "label": "Configuration constructeur",
      "value": "Configuration constructeur MDVN 37 P à 7,0 bar",
      "evidenceIds": [
        "october7-rotair-mdvn-p1"
      ]
    },
    {
      "label": "Pression de la configuration retenue",
      "value": "7 bar",
      "evidenceIds": [
        "october7-rotair-mdvn-p1"
      ]
    },
    {
      "label": "Cuve de stockage",
      "value": "Non documentée en litres",
      "evidenceIds": [
        "october7-rotair-mdvn-p1"
      ]
    },
    {
      "label": "Air livré à 7 bar",
      "value": "3 600 L/min",
      "evidenceIds": [
        "october7-rotair-mdvn-p1"
      ]
    },
    {
      "label": "Pression publiée, unités originales",
      "value": "7 bar / 102 psi",
      "evidenceIds": [
        "october7-rotair-mdvn-p1"
      ]
    },
    {
      "label": "Débit restitué publié, unités originales",
      "value": "3600 lt/min / 127 cfm",
      "evidenceIds": [
        "october7-rotair-mdvn-p1"
      ]
    },
    {
      "label": "Fréquence de la configuration retenue",
      "value": "Non documentée",
      "evidenceIds": [
        "october7-rotair-mdvn-p1"
      ]
    },
    {
      "label": "Motorisation",
      "value": "Perkins Stage IIIa",
      "evidenceIds": [
        "review:2026-11-16-technical:rotair-mdvn-37-p:0"
      ]
    },
    {
      "label": "Destination annoncée",
      "value": "Pays sans application des normes et réglementations d’émissions concernées ; vérifier admissibilité locale",
      "evidenceIds": [
        "review:2026-11-16-technical:rotair-mdvn-37-p:0"
      ]
    },
    {
      "label": "Versions de pression distinctes",
      "value": "7 bar : 3 600 L/min ; 10 bar : 2900 L/min ; 12 bar : 2 250 L/min",
      "evidenceIds": [
        "review:2026-11-16-technical:rotair-mdvn-37-p:0"
      ]
    },
    {
      "label": "Option sablage",
      "value": "Refroidissement et séchage, non attribués au groupe générique",
      "evidenceIds": [
        "review:2026-11-16-technical:rotair-mdvn-37-p:0"
      ]
    }
  ],
  "evidence": [
    {
      "id": "october7-rotair-mdvn-p1",
      "sourceUrl": "https://www.rotairspa.com/portable-compressors-diesel/mdvn-range/",
      "sourceLabel": "Rotair, gamme constructeur de compresseurs mobiles, document constructeur",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-10-07",
      "confidence": "B",
      "notes": "SHA-256 c46081e4b4e881c8aa68ca24a3f3a545a35014031c6793bb91f8a4809e9050a2 de la réponse HTTP originale. Données déclarées ; aucun essai physique CompatAir."
    },
    {
      "id": "review:2026-11-16-technical:rotair-mdvn-37-p:0",
      "sourceUrl": "https://www.rotairspa.com/portable-compressors-diesel/mdvn-range/",
      "sourceLabel": "Rotair, document constructeur vérifié le 16 novembre 2026",
      "sourceType": "manufacturer",
      "sourceRole": "primary",
      "retrievedAt": "2026-11-16",
      "confidence": "B",
      "notes": "Rotair MDVN 37 P : compresseur diesel à moteur Perkins Stage IIIa, distinct du moteur Kubota de la version voisine. La configuration 7 bar fournit 3 600 L/min ; la version 10 bar donne 2 900 L/min. Le fabricant réserve cette famille aux pays où les normes d’émissions concernées ne s’appliquent pas. La MDVN 30 Rehlko Stage V répond à une autre destination. GET complet SHA-256 a9da2bb39af41c45f89cf10960a9928ab6c21a32459e5599d3421ec58c7f897a. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
    }
  ],
  "fieldSources": {
    "model": [
      "october7-rotair-mdvn-p1"
    ],
    "maxPressureBar": [
      "october7-rotair-mdvn-p1"
    ],
    "maxPressureBasis": [
      "october7-rotair-mdvn-p1"
    ],
    "fadCurve": [
      "october7-rotair-mdvn-p1"
    ]
  },
  "notes": [
    "Portée de la source : FAD-pressure-qualified.",
    "Originaux archivés en privé avec date, HTTP, URL finale, octets et SHA-256 ; seules les pages et cellules nécessaires sont versionnées.",
    "Les caractéristiques décrivent la configuration constructeur indiquée dans cette fiche ; les autres équipements ou alimentations doivent être vérifiés séparément."
  ],
  "maxPressureBasis": "selected-working-pressure-ceiling"
};

export default product;
