import type { CompressorInput } from '../../../domain/catalog';

const product: CompressorInput = {
	"id": "ceccato-csa-15-ff-sur-cuve-500-l-10-bar",
	"slug": "ceccato-csa-15-ff-sur-cuve-500-l-10-bar",
	"brand": "Ceccato",
	"model": "CSA 15",
	"variant": {
		"familyId": "ceccato-csa-15",
		"label": "FF sur cuve 500 L ; 10 bar",
		"distinguishingAttributes": {
			"configuration": "FF sur cuve 500 L",
			"pression": "10 bar",
			"cuve": "500 L"
		}
	},
	"tankLiters": 500,
	"maxPressureBar": 10,
	"fadCurve": [
		{
			"pressureBar": 9.5,
			"litersPerMinute": 1550
		}
	],
	"oilType": "unknown",
	"powerKw": 11,
	"weightKg": 450,
	"mobility": "fixed",
	"confidence": "B",
	"status": "unknown",
	"image": {
		"src": "/images/products/ceccato-csa-15-ff-sur-cuve-500-l-10-bar.webp",
		"alt": "Repères techniques : Ceccato CSA 15, FF sur cuve 500 L ; 10 bar",
		"sourceUrl": "https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/csa-7-5-20-hp/leaflets/Ceccato_CSA_7.5-20_Leaflet_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"specifications": [
		{
			"label": "Configuration",
			"value": "CSA 15 Full Feature, cuve 500 L, 10 bar",
			"evidenceIds": [
				"ceccato-csa-15-ff-sur-cuve-500-l-10-bar-reserved-20261103-1"
			]
		},
		{
			"label": "FAD à 9,5 bar",
			"value": "93 m³/h",
			"evidenceIds": [
				"ceccato-csa-15-ff-sur-cuve-500-l-10-bar-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "11 kW",
			"evidenceIds": [
				"ceccato-csa-15-ff-sur-cuve-500-l-10-bar-reserved-20261103-1"
			]
		},
		{
			"label": "Masse de la version",
			"value": "450 kg",
			"evidenceIds": [
				"ceccato-csa-15-ff-sur-cuve-500-l-10-bar-reserved-20261103-1"
			]
		}
	],
	"editorial": {
		"overview": "Ceccato CSA 15. La CSA 15 FF sur 500 L en version 10 bar pèse 450 kg. La cuve 270 L avec sécheur donne 385 kg, celle de 500 L donne 450 kg, contre 255 kg pour le Pack au sol. Le tableau distingue le maximum 10 bar de la mesure à 9,5 bar. La page HTML reste inaccessible ; seule la brochure complète constitue ici la preuve actuelle.",
		"verifiedFacts": [
			"Configuration : CSA 15 Full Feature, cuve 500 L, 10 bar.",
			"FAD à 9,5 bar : 93 m³/h.",
			"Puissance : 11 kW.",
			"Masse de la version : 450 kg."
		],
		"limitations": [
			"Mode de lubrification et taux de marche du groupe non établis dans la brochure. La page HTML inaccessible reste signalée."
		]
	},
	"evidence": [
		{
			"id": "october-ceccato-csa-7-5-20-hp-pdf-p6",
			"sourceUrl": "https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/csa-7-5-20-hp/leaflets/Ceccato_CSA_7.5-20_Leaflet_EN.pdf#page=6",
			"sourceLabel": "Ceccato, documentation constructeur, page 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 b36c0fbb8a63a69867b66a6e663923588ccfd8e2def16303b3be948aa706c23c. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "october-ceccato-csa-7-5-20-hp",
			"sourceUrl": "https://www.ceccato.com/fr-international/air-compressor-products/rotary-screw-compressor/fixed-speed/csa-7-5-20-hp",
			"sourceLabel": "Ceccato, documentation constructeur",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 a396f7642312e7bc1e0f7624ec55b4836b176f0deb7ba6e0ae70e4ce9cbe4df6. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "ceccato-csa-15-ff-sur-cuve-500-l-10-bar-reserved-20261103-1",
			"sourceUrl": "https://www.ceccato.com/content/dam/brands/Ceccato/restyling-website-ceccato/products/screw-compressors/fixed-speed/csa-7-5-20-hp/leaflets/Ceccato_CSA_7.5-20_Leaflet_EN.pdf#page=6",
			"sourceLabel": "Ceccato : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 b36c0fbb8a63a69867b66a6e663923588ccfd8e2def16303b3be948aa706c23c. La CSA 15 FF sur 500 L en version 10 bar pèse 450 kg. La cuve 270 L avec sécheur donne 385 kg, celle de 500 L donne 450 kg, contre 255 kg pour le Pack au sol. Le tableau distingue le maximum 10 bar de la mesure à 9,5 bar. La page HTML reste inaccessible ; seule la brochure complète constitue ici la preuve actuelle."
		}
	],
	"fieldSources": {
		"tankLiters": [
			"october-ceccato-csa-7-5-20-hp-pdf-p6"
		],
		"maxPressureBar": [
			"october-ceccato-csa-7-5-20-hp-pdf-p6"
		],
		"fadCurve": [
			"october-ceccato-csa-7-5-20-hp-pdf-p6"
		],
		"powerKw": [
			"october-ceccato-csa-7-5-20-hp-pdf-p6"
		],
		"weightKg": [
			"october-ceccato-csa-7-5-20-hp-pdf-p6"
		],
		"editorial": [
			"ceccato-csa-15-ff-sur-cuve-500-l-10-bar-reserved-20261103-1"
		],
		"specifications": [
			"ceccato-csa-15-ff-sur-cuve-500-l-10-bar-reserved-20261103-1"
		]
	},
	"notes": [
		"Tableau page 6 ; conditions ISO 1217 conservées. Aucun essai physique réalisé."
	]
};

export default product;
