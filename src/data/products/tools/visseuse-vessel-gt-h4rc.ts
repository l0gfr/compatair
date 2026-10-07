import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-vessel-gt-h4rc",
	"slug": "visseuse-vessel-gt-h4rc",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "VESSEL GT-H4RC",
	"brand": "VESSEL",
	"model": "GT-H4RC",
	"mpn": "GT-H4RC",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 200,
		"typical": 200,
		"max": 200
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-vessel-gt-h4rc.webp",
		"alt": "Repères techniques : VESSEL GT-H4RC",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-h4rc",
		"label": "Référence GT-H4RC",
		"distinguishingAttributes": {
			"reference": "GT-H4RC",
			"Raccord publié": "G 1/4",
			"Vitesse à vide": "1,500 tr/min",
			"Code EDP publié": "311034"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-H4RC. Consommation publiée, régime non précisé : 200 L/min à 6 bar. Raccord publié : G 1/4. Vitesse à vide : 1,500 tr/min.",
		"verifiedFacts": [
			"Raccord publié : G 1/4.",
			"Vitesse à vide : 1,500 tr/min.",
			"Code EDP publié : 311034."
		],
		"limitations": [
			"Régime de consommation non précisé : aucun maximum supposé ; le verdict reste insufficient_data.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Raccord publié",
			"value": "G 1/4",
			"evidenceIds": [
				"october-vessel-air-p9"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1,500 tr/min",
			"evidenceIds": [
				"october-vessel-air-p9"
			]
		},
		{
			"label": "Code EDP publié",
			"value": "311034",
			"evidenceIds": [
				"october-vessel-air-p9"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "VESSEL, catalogue Air Tools, page 9",
			"evidenceIds": [
				"october-vessel-air-p9"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.6MPa",
			"evidenceIds": [
				"october-vessel-air-p9"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p9",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=9",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-vessel-air-p9"
		],
		"workingPressureBar": [
			"october-vessel-air-p9"
		],
		"airflowLpm": [
			"october-vessel-air-p9"
		],
		"airflowBasis": [
			"october-vessel-air-p9"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 200 L/min à 6 bar."
	]
};

export default product;
