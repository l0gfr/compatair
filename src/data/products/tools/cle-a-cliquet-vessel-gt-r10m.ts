import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-vessel-gt-r10m",
	"slug": "cle-a-cliquet-vessel-gt-r10m",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "VESSEL GT-R10M",
	"brand": "VESSEL",
	"model": "GT-R10M",
	"mpn": "GT-R10M",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 300,
		"typical": 300,
		"max": 300
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-vessel-gt-r10m.webp",
		"alt": "Repères techniques : VESSEL GT-R10M",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-r10m",
		"label": "Référence GT-R10M",
		"distinguishingAttributes": {
			"reference": "GT-R10M",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "250 tr/min",
			"Code EDP publié": "339003"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-R10M. Consommation publiée, régime non précisé : 300 L/min à 6 bar. Raccord publié : Rc 1/4. Vitesse à vide : 250 tr/min.",
		"verifiedFacts": [
			"Raccord publié : Rc 1/4.",
			"Vitesse à vide : 250 tr/min.",
			"Code EDP publié : 339003."
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
				"october-vessel-air-p27"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "250 tr/min",
			"evidenceIds": [
				"october-vessel-air-p27"
			]
		},
		{
			"label": "Code EDP publié",
			"value": "339003",
			"evidenceIds": [
				"october-vessel-air-p27"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "VESSEL, catalogue Air Tools, page 27",
			"evidenceIds": [
				"october-vessel-air-p27"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.6MPa",
			"evidenceIds": [
				"october-vessel-air-p27"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p27",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=27",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 27",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-vessel-air-p27"
		],
		"workingPressureBar": [
			"october-vessel-air-p27"
		],
		"airflowLpm": [
			"october-vessel-air-p27"
		],
		"airflowBasis": [
			"october-vessel-air-p27"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 300 L/min à 6 bar."
	]
};

export default product;
