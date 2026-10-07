import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-vessel-gt-p80w",
	"slug": "cle-a-chocs-vessel-gt-p80w",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "VESSEL GT-P80W",
	"brand": "VESSEL",
	"model": "GT-P80W",
	"mpn": "GT-P80W",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 400,
		"typical": 400,
		"max": 400
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-vessel-gt-p80w.webp",
		"alt": "Repères techniques : VESSEL GT-P80W",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-p80w",
		"label": "Référence GT-P80W",
		"distinguishingAttributes": {
			"reference": "GT-P80W",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "7,500 tr/min",
			"Code EDP publié": "324048"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-P80W. Consommation publiée, régime non précisé : 400 L/min à 6 bar. Raccord publié : Rc 1/4. Vitesse à vide : 7,500 tr/min.",
		"verifiedFacts": [
			"Raccord publié : Rc 1/4.",
			"Vitesse à vide : 7,500 tr/min.",
			"Code EDP publié : 324048."
		],
		"limitations": [
			"Régime de consommation non précisé : aucun maximum supposé ; le verdict reste insufficient_data.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Raccord publié",
			"value": "Rc 1/4",
			"evidenceIds": [
				"october-vessel-air-p25"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "7,500 tr/min",
			"evidenceIds": [
				"october-vessel-air-p25"
			]
		},
		{
			"label": "Code EDP publié",
			"value": "324048",
			"evidenceIds": [
				"october-vessel-air-p25"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "VESSEL, catalogue Air Tools, page 25",
			"evidenceIds": [
				"october-vessel-air-p25"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.6MPa",
			"evidenceIds": [
				"october-vessel-air-p25"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p25",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=25",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 25",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-vessel-air-p25"
		],
		"workingPressureBar": [
			"october-vessel-air-p25"
		],
		"airflowLpm": [
			"october-vessel-air-p25"
		],
		"airflowBasis": [
			"october-vessel-air-p25"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 400 L/min à 6 bar."
	]
};

export default product;
