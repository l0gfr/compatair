import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-vessel-gt-s6-5d",
	"slug": "visseuse-vessel-gt-s6-5d",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "VESSEL GT-S6.5D",
	"brand": "VESSEL",
	"model": "GT-S6.5D",
	"mpn": "GT-S6.5D",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 350,
		"typical": 350,
		"max": 350
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-vessel-gt-s6-5d.webp",
		"alt": "Repères techniques : VESSEL GT-S6.5D",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-s6-5d",
		"label": "Référence GT-S6.5D",
		"distinguishingAttributes": {
			"reference": "GT-S6.5D",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "7,500 tr/min",
			"Code EDP publié": "324040"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-S6.5D. Consommation publiée, régime non précisé : 350 L/min à 6 bar. Raccord publié : Rc 1/4. Vitesse à vide : 7,500 tr/min.",
		"verifiedFacts": [
			"Raccord publié : Rc 1/4.",
			"Vitesse à vide : 7,500 tr/min.",
			"Code EDP publié : 324040."
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
				"october-vessel-air-p11"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "7,500 tr/min",
			"evidenceIds": [
				"october-vessel-air-p11"
			]
		},
		{
			"label": "Code EDP publié",
			"value": "324040",
			"evidenceIds": [
				"october-vessel-air-p11"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "VESSEL, catalogue Air Tools, page 11",
			"evidenceIds": [
				"october-vessel-air-p11"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.6MPa",
			"evidenceIds": [
				"october-vessel-air-p11"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p11",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=11",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-vessel-air-p11"
		],
		"workingPressureBar": [
			"october-vessel-air-p11"
		],
		"airflowLpm": [
			"october-vessel-air-p11"
		],
		"airflowBasis": [
			"october-vessel-air-p11"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 350 L/min à 6 bar."
	]
};

export default product;
