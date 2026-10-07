import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-sp-air-sp-3006df-5",
	"slug": "ponceuse-orbitale-sp-air-sp-3006df-5",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "SP AIR SP-3006DF-5",
	"brand": "SP AIR",
	"model": "SP-3006DF-5",
	"mpn": "SP-3006DF-5",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 470,
		"typical": 470,
		"max": 470
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-sp-air-sp-3006df-5.webp",
		"alt": "Repères techniques : SP AIR SP-3006DF-5",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-3006df-5",
		"label": "Référence SP-3006DF-5",
		"distinguishingAttributes": {
			"reference": "SP-3006DF-5",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "0.65 kg"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-3006DF-5. Consommation publiée, régime non précisé : 470 L/min à 6,2 bar. Raccord publié : 1/4\"NPT. Masse publiée : 0.65 kg.",
		"verifiedFacts": [
			"Raccord publié : 1/4\"NPT.",
			"Masse publiée : 0.65 kg."
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
				"october-sp-air-p14"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.65 kg",
			"evidenceIds": [
				"october-sp-air-p14"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "SP AIR, catalogue Air Tools, page 14",
			"evidenceIds": [
				"october-sp-air-p14"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.62 MPa",
			"evidenceIds": [
				"october-sp-air-p14"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p14",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=14",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 14",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p14"
		],
		"workingPressureBar": [
			"october-sp-air-p14"
		],
		"airflowLpm": [
			"october-sp-air-p14"
		],
		"airflowBasis": [
			"october-sp-air-p14"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 470 L/min à 6,2 bar."
	]
};

export default product;
