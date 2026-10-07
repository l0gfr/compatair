import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-vessel-gt-2000p",
	"slug": "cle-a-chocs-vessel-gt-2000p",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "VESSEL GT-2000P",
	"brand": "VESSEL",
	"model": "GT-2000P",
	"mpn": "GT-2000P",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 450,
		"typical": 450,
		"max": 450
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-vessel-gt-2000p.webp",
		"alt": "Repères techniques : VESSEL GT-2000P",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-2000p",
		"label": "Référence GT-2000P",
		"distinguishingAttributes": {
			"reference": "GT-2000P",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "5,000 tr/min",
			"Code EDP publié": "331295"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-2000P. Consommation publiée, régime non précisé : 450 L/min à 6 bar. Raccord publié : Rc 1/4. Vitesse à vide : 5,000 tr/min.",
		"verifiedFacts": [
			"Raccord publié : Rc 1/4.",
			"Vitesse à vide : 5,000 tr/min.",
			"Code EDP publié : 331295."
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
				"october-vessel-air-p23"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5,000 tr/min",
			"evidenceIds": [
				"october-vessel-air-p23"
			]
		},
		{
			"label": "Code EDP publié",
			"value": "331295",
			"evidenceIds": [
				"october-vessel-air-p23"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "VESSEL, catalogue Air Tools, page 23",
			"evidenceIds": [
				"october-vessel-air-p23"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.6MPa",
			"evidenceIds": [
				"october-vessel-air-p23"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p23",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=23",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 23",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-vessel-air-p23"
		],
		"workingPressureBar": [
			"october-vessel-air-p23"
		],
		"airflowLpm": [
			"october-vessel-air-p23"
		],
		"airflowBasis": [
			"october-vessel-air-p23"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 450 L/min à 6 bar."
	]
};

export default product;
