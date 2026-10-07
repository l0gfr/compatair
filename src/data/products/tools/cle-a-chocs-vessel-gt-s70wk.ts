import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-vessel-gt-s70wk",
	"slug": "cle-a-chocs-vessel-gt-s70wk",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "VESSEL GT-S70WK",
	"brand": "VESSEL",
	"model": "GT-S70WK",
	"mpn": "GT-S70WK",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 390,
		"typical": 390,
		"max": 390
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-vessel-gt-s70wk.webp",
		"alt": "Repères techniques : VESSEL GT-S70WK",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-s70wk",
		"label": "Référence GT-S70WK",
		"distinguishingAttributes": {
			"reference": "GT-S70WK",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "7,000 tr/min",
			"Code EDP publié": "324017"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-S70WK. Consommation publiée, régime non précisé : 390 L/min à 6 bar. Raccord publié : Rc 1/4. Vitesse à vide : 7,000 tr/min.",
		"verifiedFacts": [
			"Raccord publié : Rc 1/4.",
			"Vitesse à vide : 7,000 tr/min.",
			"Code EDP publié : 324017."
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
			"value": "7,000 tr/min",
			"evidenceIds": [
				"october-vessel-air-p25"
			]
		},
		{
			"label": "Code EDP publié",
			"value": "324017",
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
		"Consommation publiée, régime non précisé : 390 L/min à 6 bar."
	]
};

export default product;
