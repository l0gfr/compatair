import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "ceccato-drb-29-cuve-500-l-avec-secheur-10-bar",
	"slug": "ceccato-drb-29-cuve-500-l-avec-secheur-10-bar",
	"brand": "Ceccato",
	"model": "DRB 29",
	"variant": {
		"familyId": "ceccato-drb-29",
		"label": "cuve 500 L avec sécheur ; 10 bar",
		"distinguishingAttributes": {
			"configuration": "cuve 500 L avec sécheur",
			"pression": "10 bar",
			"cuve": "500 L"
		}
	},
	"tankLiters": 500,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 9.5,
			"litersPerMinute": 3300
		}
	],
	"dutyCycle": 1,
	"oilType": "unknown",
	"powerKw": 22,
	"weightKg": 595,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ceccato-drb-29-cuve-500-l-avec-secheur-10-bar.webp",
		"alt": "Repères techniques : Ceccato DRB 29, cuve 500 L avec sécheur ; 10 bar",
		"sourceUrl": "https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/drb/drb-20-35-hp/Ceccato_DRB20-34_EN_LR.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Configuration",
			"value": "cuve 500 L avec sécheur",
			"evidenceIds": [
				"october-ceccato-drb-p7"
			]
		},
		{
			"label": "Dimensions (L × l × h)",
			"value": "1940 × 835 × 1835 mm",
			"evidenceIds": [
				"october-ceccato-drb-p7"
			]
		},
		{
			"label": "Condition du FAD",
			"value": "Débit d’air réel, ISO 1217 annexe C ; pression de référence séparée du maximum",
			"evidenceIds": [
				"october-ceccato-drb-p7"
			]
		},
		{
			"label": "Pression maximale et pression de référence",
			"value": "10 bar maximum ; FAD mesuré à 9,5 bar",
			"evidenceIds": [
				"october-ceccato-drb-p7"
			]
		}
	],
	"editorial": {
		"overview": "Ceccato DRB 29, cuve 500 L avec sécheur ; 10 bar. cuve 500 L avec sécheur. Débit restitué déclaré : 3 300 L/min à 9,5 bar.",
		"verifiedFacts": [
			"Dimensions publiées : 1940 × 835 × 1835 mm.",
			"Masse de cette configuration : 595 kg ; puissance moteur : 22 kW.",
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
			"id": "october-ceccato-drb-p7",
			"sourceUrl": "https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/drb/drb-20-35-hp/Ceccato_DRB20-34_EN_LR.pdf#page=7",
			"sourceLabel": "Ceccato, documentation constructeur, page 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 36de017fd6f8e157e7827b0032fd27f34e40c340a8421cb4b889853235022c40. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "october-ceccato-drb-page",
			"sourceUrl": "https://www.ceccato.com/fr-international/air-compressor-products/rotary-screw-compressor/fixed-speed/drb-20-35-hp",
			"sourceLabel": "Ceccato, documentation constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 c8ff08a10788f55386eecb322217c51c8752900109487c3b4cb592ec5201df20. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october-ceccato-drb-p7"
		],
		"maxPressureBar": [
			"october-ceccato-drb-p7"
		],
		"fadCurve": [
			"october-ceccato-drb-p7"
		],
		"powerKw": [
			"october-ceccato-drb-p7"
		],
		"weightKg": [
			"october-ceccato-drb-p7"
		],
		"dutyCycle": [
			"october-ceccato-drb-page"
		]
	},
	"notes": [
		"Tableau page 7 ; conditions ISO 1217 conservées. Aucun essai physique réalisé."
	]
};

export default product;
