import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-sp-air-sp-6254gca",
	"slug": "meuleuse-sp-air-sp-6254gca",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "SP AIR SP-6254GCA",
	"brand": "SP AIR",
	"model": "SP-6254GCA",
	"mpn": "SP-6254GCA",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 550,
		"typical": 550,
		"max": 550
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-sp-air-sp-6254gca.webp",
		"alt": "Repères techniques : SP AIR SP-6254GCA",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-6254gca",
		"label": "Référence SP-6254GCA",
		"distinguishingAttributes": {
			"reference": "SP-6254GCA",
			"Raccord publié": "3/8\"NPT",
			"Masse publiée": "1.8 kg"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-6254GCA. Consommation publiée, régime non précisé : 550 L/min à 6,2 bar. Raccord publié : 3/8\"NPT. Masse publiée : 1.8 kg.",
		"verifiedFacts": [
			"Raccord publié : 3/8\"NPT.",
			"Masse publiée : 1.8 kg."
		],
		"limitations": [
			"Régime de consommation non précisé : aucun maximum supposé ; le verdict reste insufficient_data.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Raccord publié",
			"value": "3/8\"NPT",
			"evidenceIds": [
				"october-sp-air-p18"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.8 kg",
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
		"Consommation publiée, régime non précisé : 550 L/min à 6,2 bar."
	]
};

export default product;
