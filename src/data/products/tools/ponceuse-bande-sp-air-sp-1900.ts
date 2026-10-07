import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-bande-sp-air-sp-1900",
	"slug": "ponceuse-bande-sp-air-sp-1900",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "SP AIR SP-1900",
	"brand": "SP AIR",
	"model": "SP-1900",
	"mpn": "SP-1900",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 140,
		"typical": 140,
		"max": 140
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-bande-sp-air-sp-1900.webp",
		"alt": "Repères techniques : SP AIR SP-1900",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-1900",
		"label": "Référence SP-1900",
		"distinguishingAttributes": {
			"reference": "SP-1900",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "0.35 kg"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-1900. Consommation publiée, régime non précisé : 140 L/min à 6,2 bar. Raccord publié : 1/4\"NPT. Masse publiée : 0.35 kg.",
		"verifiedFacts": [
			"Raccord publié : 1/4\"NPT.",
			"Masse publiée : 0.35 kg."
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
				"october-sp-air-p17"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.35 kg",
			"evidenceIds": [
				"october-sp-air-p17"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "SP AIR, catalogue Air Tools, page 17",
			"evidenceIds": [
				"october-sp-air-p17"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.62 MPa",
			"evidenceIds": [
				"october-sp-air-p17"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p17",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=17",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p17"
		],
		"workingPressureBar": [
			"october-sp-air-p17"
		],
		"airflowLpm": [
			"october-sp-air-p17"
		],
		"airflowBasis": [
			"october-sp-air-p17"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 140 L/min à 6,2 bar."
	]
};

export default product;
