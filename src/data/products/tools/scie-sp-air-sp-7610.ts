import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-sp-air-sp-7610",
	"slug": "scie-sp-air-sp-7610",
	"categoryId": "scie",
	"category": "scie",
	"label": "SP AIR SP-7610",
	"brand": "SP AIR",
	"model": "SP-7610",
	"mpn": "SP-7610",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 500,
		"typical": 500,
		"max": 500
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-sp-air-sp-7610.webp",
		"alt": "Repères techniques : SP AIR SP-7610",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-7610",
		"label": "Référence SP-7610",
		"distinguishingAttributes": {
			"reference": "SP-7610",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "0.6 kg"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-7610. Consommation publiée, régime non précisé : 500 L/min à 6,2 bar. Raccord publié : 1/4\"NPT. Masse publiée : 0.6 kg.",
		"verifiedFacts": [
			"Raccord publié : 1/4\"NPT.",
			"Masse publiée : 0.6 kg."
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
			"value": "0.6 kg",
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
		"Consommation publiée, régime non précisé : 500 L/min à 6,2 bar."
	]
};

export default product;
