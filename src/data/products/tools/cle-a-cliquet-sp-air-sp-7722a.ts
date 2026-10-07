import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-sp-air-sp-7722a",
	"slug": "cle-a-cliquet-sp-air-sp-7722a",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "SP AIR SP-7722A",
	"brand": "SP AIR",
	"model": "SP-7722A",
	"mpn": "SP-7722A",
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
		"src": "/images/products/cle-a-cliquet-sp-air-sp-7722a.webp",
		"alt": "Repères techniques : SP AIR SP-7722A",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-7722a",
		"label": "Référence SP-7722A",
		"distinguishingAttributes": {
			"reference": "SP-7722A",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "0.6 kg",
			"Longueur hors tout": "165 mm"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-7722A. Consommation publiée, régime non précisé : 400 L/min à 6,2 bar. Raccord publié : 1/4\"NPT. Masse publiée : 0.6 kg.",
		"verifiedFacts": [
			"Raccord publié : 1/4\"NPT.",
			"Masse publiée : 0.6 kg.",
			"Longueur hors tout : 165 mm.",
			"Vitesse à vide : 500 tr/min."
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
				"october-sp-air-p2"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.6 kg",
			"evidenceIds": [
				"october-sp-air-p2"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "165 mm",
			"evidenceIds": [
				"october-sp-air-p2"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "500 tr/min",
			"evidenceIds": [
				"october-sp-air-p2"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "SP AIR, catalogue Air Tools, page 2",
			"evidenceIds": [
				"october-sp-air-p2"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.62 MPa",
			"evidenceIds": [
				"october-sp-air-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p2",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=2",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p2"
		],
		"workingPressureBar": [
			"october-sp-air-p2"
		],
		"airflowLpm": [
			"october-sp-air-p2"
		],
		"airflowBasis": [
			"october-sp-air-p2"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 400 L/min à 6,2 bar."
	]
};

export default product;
