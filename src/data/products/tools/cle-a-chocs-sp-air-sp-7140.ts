import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-sp-air-sp-7140",
	"slug": "cle-a-chocs-sp-air-sp-7140",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "SP AIR SP-7140",
	"brand": "SP AIR",
	"model": "SP-7140",
	"mpn": "SP-7140",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-sp-air-sp-7140.webp",
		"alt": "Repères techniques : SP AIR SP-7140",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-7140",
		"label": "Référence SP-7140",
		"distinguishingAttributes": {
			"reference": "SP-7140",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "2.1 kg",
			"Longueur hors tout": "185 mm"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-7140. Consommation publiée, régime non précisé : 600 L/min à 6,2 bar. Raccord publié : 1/4\"NPT. Masse publiée : 2.1 kg.",
		"verifiedFacts": [
			"Raccord publié : 1/4\"NPT.",
			"Masse publiée : 2.1 kg.",
			"Longueur hors tout : 185 mm.",
			"Vitesse à vide : 5800 tr/min."
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
				"october-sp-air-p8"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.1 kg",
			"evidenceIds": [
				"october-sp-air-p8"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "185 mm",
			"evidenceIds": [
				"october-sp-air-p8"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5800 tr/min",
			"evidenceIds": [
				"october-sp-air-p8"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "SP AIR, catalogue Air Tools, page 8",
			"evidenceIds": [
				"october-sp-air-p8"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.62 MPa",
			"evidenceIds": [
				"october-sp-air-p8"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p8",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=8",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p8"
		],
		"workingPressureBar": [
			"october-sp-air-p8"
		],
		"airflowLpm": [
			"october-sp-air-p8"
		],
		"airflowBasis": [
			"october-sp-air-p8"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 600 L/min à 6,2 bar."
	]
};

export default product;
