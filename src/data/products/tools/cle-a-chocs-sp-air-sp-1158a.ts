import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-sp-air-sp-1158a",
	"slug": "cle-a-chocs-sp-air-sp-1158a",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "SP AIR SP-1158A",
	"brand": "SP AIR",
	"model": "SP-1158A",
	"mpn": "SP-1158A",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1110,
		"typical": 1110,
		"max": 1110
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-sp-air-sp-1158a.webp",
		"alt": "Repères techniques : SP AIR SP-1158A",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-1158a",
		"label": "Référence SP-1158A",
		"distinguishingAttributes": {
			"reference": "SP-1158A",
			"Raccord publié": "3/8\"NPT",
			"Masse publiée": "5.5 kg",
			"Longueur hors tout": "220 mm"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-1158A. Consommation publiée, régime non précisé : 1 110 L/min à 6,2 bar. Raccord publié : 3/8\"NPT. Masse publiée : 5.5 kg.",
		"verifiedFacts": [
			"Raccord publié : 3/8\"NPT.",
			"Masse publiée : 5.5 kg.",
			"Longueur hors tout : 220 mm.",
			"Vitesse à vide : 5500 tr/min."
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
				"october-sp-air-p10"
			]
		},
		{
			"label": "Masse publiée",
			"value": "5.5 kg",
			"evidenceIds": [
				"october-sp-air-p10"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "220 mm",
			"evidenceIds": [
				"october-sp-air-p10"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5500 tr/min",
			"evidenceIds": [
				"october-sp-air-p10"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "SP AIR, catalogue Air Tools, page 10",
			"evidenceIds": [
				"october-sp-air-p10"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.62 MPa",
			"evidenceIds": [
				"october-sp-air-p10"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p10",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=10",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 10",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p10"
		],
		"workingPressureBar": [
			"october-sp-air-p10"
		],
		"airflowLpm": [
			"october-sp-air-p10"
		],
		"airflowBasis": [
			"october-sp-air-p10"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 1 110 L/min à 6,2 bar."
	]
};

export default product;
