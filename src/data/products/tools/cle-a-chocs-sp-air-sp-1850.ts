import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-sp-air-sp-1850",
	"slug": "cle-a-chocs-sp-air-sp-1850",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "SP AIR SP-1850",
	"brand": "SP AIR",
	"model": "SP-1850",
	"mpn": "SP-1850",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 200,
		"typical": 200,
		"max": 200
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-sp-air-sp-1850.webp",
		"alt": "Repères techniques : SP AIR SP-1850",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-1850",
		"label": "Référence SP-1850",
		"distinguishingAttributes": {
			"reference": "SP-1850",
			"Raccord publié": "3/8\"NPT",
			"Masse publiée": "0.5 kg",
			"Longueur hors tout": "137 mm"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-1850. Consommation publiée, régime non précisé : 200 L/min à 6,2 bar. Raccord publié : 3/8\"NPT. Masse publiée : 0.5 kg.",
		"verifiedFacts": [
			"Raccord publié : 3/8\"NPT.",
			"Masse publiée : 0.5 kg.",
			"Longueur hors tout : 137 mm.",
			"Vitesse à vide : 10000 tr/min."
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
				"october-sp-air-p9"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.5 kg",
			"evidenceIds": [
				"october-sp-air-p9"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "137 mm",
			"evidenceIds": [
				"october-sp-air-p9"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "10000 tr/min",
			"evidenceIds": [
				"october-sp-air-p9"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "SP AIR, catalogue Air Tools, page 9",
			"evidenceIds": [
				"october-sp-air-p9"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.62 MPa",
			"evidenceIds": [
				"october-sp-air-p9"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p9",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=9",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 9",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p9"
		],
		"workingPressureBar": [
			"october-sp-air-p9"
		],
		"airflowLpm": [
			"october-sp-air-p9"
		],
		"airflowBasis": [
			"october-sp-air-p9"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 200 L/min à 6,2 bar."
	]
};

export default product;
