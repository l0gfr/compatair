import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "lime-alternative-sp-air-sp-1700f",
	"slug": "lime-alternative-sp-air-sp-1700f",
	"categoryId": "lime-alternative",
	"category": "lime-alternative",
	"label": "SP AIR SP-1700F",
	"brand": "SP AIR",
	"model": "SP-1700F",
	"mpn": "SP-1700F",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 300,
		"typical": 300,
		"max": 300
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/lime-alternative-sp-air-sp-1700f.webp",
		"alt": "Repères techniques : SP AIR SP-1700F",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-1700f",
		"label": "Référence SP-1700F",
		"distinguishingAttributes": {
			"reference": "SP-1700F",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "0.42 kg"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-1700F. Consommation publiée, régime non précisé : 300 L/min à 6,2 bar. Raccord publié : 1/4\"NPT. Masse publiée : 0.42 kg.",
		"verifiedFacts": [
			"Raccord publié : 1/4\"NPT.",
			"Masse publiée : 0.42 kg."
		],
		"limitations": [
			"Régime de consommation non précisé : aucun maximum supposé ; le verdict reste insufficient_data.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Raccord publié",
			"value": "1/4\"NPT",
			"evidenceIds": [
				"october-sp-air-p21"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.42 kg",
			"evidenceIds": [
				"october-sp-air-p21"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "SP AIR, catalogue Air Tools, page 21",
			"evidenceIds": [
				"october-sp-air-p21"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.62 MPa",
			"evidenceIds": [
				"october-sp-air-p21"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p21",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=21",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 21",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p21"
		],
		"workingPressureBar": [
			"october-sp-air-p21"
		],
		"airflowLpm": [
			"october-sp-air-p21"
		],
		"airflowBasis": [
			"october-sp-air-p21"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 300 L/min à 6,2 bar."
	]
};

export default product;
