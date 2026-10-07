import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-sp-air-sp-1540",
	"slug": "perceuse-sp-air-sp-1540",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "SP AIR SP-1540",
	"brand": "SP AIR",
	"model": "SP-1540",
	"mpn": "SP-1540",
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
		"src": "/images/products/perceuse-sp-air-sp-1540.webp",
		"alt": "Repères techniques : SP AIR SP-1540",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-1540",
		"label": "Référence SP-1540",
		"distinguishingAttributes": {
			"reference": "SP-1540",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "0.98 kg",
			"Longueur hors tout": "180 mm"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-1540. Consommation publiée, régime non précisé : 400 L/min à 6,2 bar. Raccord publié : 1/4\"NPT. Masse publiée : 0.98 kg.",
		"verifiedFacts": [
			"Raccord publié : 1/4\"NPT.",
			"Masse publiée : 0.98 kg.",
			"Longueur hors tout : 180 mm.",
			"Vitesse à vide : 3000 tr/min."
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
				"october-sp-air-p13"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.98 kg",
			"evidenceIds": [
				"october-sp-air-p13"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "180 mm",
			"evidenceIds": [
				"october-sp-air-p13"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3000 tr/min",
			"evidenceIds": [
				"october-sp-air-p13"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "SP AIR, catalogue Air Tools, page 13",
			"evidenceIds": [
				"october-sp-air-p13"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.62 MPa",
			"evidenceIds": [
				"october-sp-air-p13"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p13",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=13",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 13",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p13"
		],
		"workingPressureBar": [
			"october-sp-air-p13"
		],
		"airflowLpm": [
			"october-sp-air-p13"
		],
		"airflowBasis": [
			"october-sp-air-p13"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 400 L/min à 6,2 bar."
	]
};

export default product;
