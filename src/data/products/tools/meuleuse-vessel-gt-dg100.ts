import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-vessel-gt-dg100",
	"slug": "meuleuse-vessel-gt-dg100",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "VESSEL GT-DG100",
	"brand": "VESSEL",
	"model": "GT-DG100",
	"mpn": "GT-DG100",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 700,
		"typical": 700,
		"max": 700
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-vessel-gt-dg100.webp",
		"alt": "Repères techniques : VESSEL GT-DG100",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-dg100",
		"label": "Référence GT-DG100",
		"distinguishingAttributes": {
			"reference": "GT-DG100",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "13,500 tr/min",
			"Code EDP publié": "310630"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-DG100. Consommation publiée, régime non précisé : 700 L/min à 6 bar. Raccord publié : Rc 1/4. Vitesse à vide : 13,500 tr/min.",
		"verifiedFacts": [
			"Raccord publié : Rc 1/4.",
			"Vitesse à vide : 13,500 tr/min.",
			"Code EDP publié : 310630."
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
				"october-vessel-air-p34"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "13,500 tr/min",
			"evidenceIds": [
				"october-vessel-air-p34"
			]
		},
		{
			"label": "Code EDP publié",
			"value": "310630",
			"evidenceIds": [
				"october-vessel-air-p34"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "VESSEL, catalogue Air Tools, page 34",
			"evidenceIds": [
				"october-vessel-air-p34"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.6MPa",
			"evidenceIds": [
				"october-vessel-air-p34"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p34",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=34",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 34",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-vessel-air-p34"
		],
		"workingPressureBar": [
			"october-vessel-air-p34"
		],
		"airflowLpm": [
			"october-vessel-air-p34"
		],
		"airflowBasis": [
			"october-vessel-air-p34"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 700 L/min à 6 bar."
	]
};

export default product;
