import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-sp-air-sp-6252gca",
	"slug": "meuleuse-sp-air-sp-6252gca",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "SP AIR SP-6252GCA",
	"brand": "SP AIR",
	"model": "SP-6252GCA",
	"mpn": "SP-6252GCA",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 400,
		"typical": 400,
		"max": 400
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-sp-air-sp-6252gca.webp",
		"alt": "Repères techniques : SP AIR SP-6252GCA",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-6252gca",
		"label": "Référence SP-6252GCA",
		"distinguishingAttributes": {
			"reference": "SP-6252GCA",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "0.62 kg"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-6252GCA. Consommation publiée, régime non précisé : 400 L/min à 6,2 bar. Raccord publié : 1/4\"NPT. Masse publiée : 0.62 kg.",
		"verifiedFacts": [
			"Raccord publié : 1/4\"NPT.",
			"Masse publiée : 0.62 kg."
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
				"october-sp-air-p18"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.62 kg",
			"evidenceIds": [
				"october-sp-air-p18"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "SP AIR, catalogue Air Tools, page 18",
			"evidenceIds": [
				"october-sp-air-p18"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.62 MPa",
			"evidenceIds": [
				"october-sp-air-p18"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p18",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=18",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 18",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p18"
		],
		"workingPressureBar": [
			"october-sp-air-p18"
		],
		"airflowLpm": [
			"october-sp-air-p18"
		],
		"airflowBasis": [
			"october-sp-air-p18"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 400 L/min à 6,2 bar."
	]
};

export default product;
