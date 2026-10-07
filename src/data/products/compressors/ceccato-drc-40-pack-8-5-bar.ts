import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "ceccato-drc-40-pack-8-5-bar",
	"slug": "ceccato-drc-40-pack-8-5-bar",
	"brand": "Ceccato",
	"model": "DRC 40",
	"variant": {
		"familyId": "ceccato-drc-40",
		"label": "PACK ; 8.5 bar",
		"distinguishingAttributes": {
			"configuration": "PACK",
			"pression": "8,5 bar",
			"cuve": "0 L"
		}
	},
	"tankLiters": 0,
	"maxPressureBar": 8.5,
	"fadCurve": [
		{
			"pressureBar": 8,
			"litersPerMinute": 5350
		}
	],
	"dutyCycle": 1,
	"oilType": "unknown",
	"powerKw": 30,
	"weightKg": 530,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ceccato-drc-40-pack-8-5-bar.webp",
		"alt": "Repères techniques : Ceccato DRC 40, PACK ; 8.5 bar",
		"sourceUrl": "https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/drc/drc-40-60-hp-leaflet/Ceccato-DRC-40-60-FR.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Configuration",
			"value": "PACK",
			"evidenceIds": [
				"october-ceccato-drc-40-60-hp-pdf-p7"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "1320 × 830 × 1555 mm",
			"evidenceIds": [
				"october-ceccato-drc-40-60-hp-pdf-p7"
			]
		},
		{
			"label": "Condition du FAD",
			"value": "Débit d’air réel, ISO 1217 annexe C ; pression de référence séparée du maximum",
			"evidenceIds": [
				"october-ceccato-drc-40-60-hp-pdf-p7"
			]
		},
		{
			"label": "Pression maximale et pression de référence",
			"value": "8,5 bar maximum ; FAD mesuré à 8 bar",
			"evidenceIds": [
				"october-ceccato-drc-40-60-hp-pdf-p7"
			]
		}
	],
	"editorial": {
		"overview": "Ceccato DRC 40, PACK ; 8.5 bar. PACK. Débit restitué déclaré : 5 350 L/min à 8 bar.",
		"verifiedFacts": [
			"Dimensions publiées : 1320 × 830 × 1555 mm.",
			"Masse de cette configuration : 530 kg ; puissance moteur : 30 kW.",
			"La page constructeur de cette série prévoit le fonctionnement continu, sous ses conditions d’installation et d’entretien."
		],
		"limitations": [
			"Le point FAD appartient à cette configuration et à sa pression de référence ; aucune courbe de fonctionnement supplémentaire n’est inventée.",
			"Mode de lubrification non établi dans cette fiche ; aucune qualité d’air déduite.",
			"Configuration et pression explicites du catalogue, sans numéro d’article attribué artificiellement ; faire confirmer la version commandée.",
			"Disponibilité locale, alimentation électrique, dégagements d’entretien et qualité d’air au point d’usage à vérifier avant installation."
		]
	},
	"evidence": [
		{
			"id": "october-ceccato-drc-40-60-hp-pdf-p7",
			"sourceUrl": "https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/drc/drc-40-60-hp-leaflet/Ceccato-DRC-40-60-FR.pdf#page=7",
			"sourceLabel": "Ceccato, documentation constructeur, page 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 ae29fea152312268c9ead095b85747ff7cac22ef540dd47d57329efe0416aab0. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "october-ceccato-drc-40-60-hp",
			"sourceUrl": "https://www.ceccato.com/fr-international/air-compressor-products/rotary-screw-compressor/fixed-speed/drc-40-60-hp",
			"sourceLabel": "Ceccato, documentation constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 966a7cf39d84e7db67c23d9e472c7d7aa4fcf31990d595b9ff50180106673417. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october-ceccato-drc-40-60-hp-pdf-p7"
		],
		"maxPressureBar": [
			"october-ceccato-drc-40-60-hp-pdf-p7"
		],
		"fadCurve": [
			"october-ceccato-drc-40-60-hp-pdf-p7"
		],
		"powerKw": [
			"october-ceccato-drc-40-60-hp-pdf-p7"
		],
		"weightKg": [
			"october-ceccato-drc-40-60-hp-pdf-p7"
		],
		"dutyCycle": [
			"october-ceccato-drc-40-60-hp"
		]
	},
	"notes": [
		"Tableau page 7 ; conditions ISO 1217 conservées. Aucun essai physique réalisé."
	]
};

export default product;
