import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-vessel-gt-p65w",
	"slug": "cle-a-chocs-vessel-gt-p65w",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "VESSEL GT-P65W",
	"brand": "VESSEL",
	"model": "GT-P65W",
	"mpn": "GT-P65W",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 380,
		"typical": 380,
		"max": 380
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-vessel-gt-p65w.webp",
		"alt": "Repères techniques : VESSEL GT-P65W",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-p65w",
		"label": "Référence GT-P65W",
		"distinguishingAttributes": {
			"reference": "GT-P65W",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "8,500 tr/min",
			"Code EDP publié": "324038"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-P65W. Consommation publiée, régime non précisé : 380 L/min à 6 bar. Raccord publié : Rc 1/4. Vitesse à vide : 8,500 tr/min.",
		"verifiedFacts": [
			"Raccord publié : Rc 1/4.",
			"Vitesse à vide : 8,500 tr/min.",
			"Code EDP publié : 324038."
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
			"value": "8,500 tr/min",
			"evidenceIds": [
				"october-vessel-air-p25"
			]
		},
		{
			"label": "Code EDP publié",
			"value": "324038",
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
		"Consommation publiée, régime non précisé : 380 L/min à 6 bar."
	]
};

export default product;
