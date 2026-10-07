import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-sp-air-sp-7520kl",
	"slug": "perceuse-sp-air-sp-7520kl",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "SP AIR SP-7520KL",
	"brand": "SP AIR",
	"model": "SP-7520KL",
	"mpn": "SP-7520KL",
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
		"src": "/images/products/perceuse-sp-air-sp-7520kl.webp",
		"alt": "Repères techniques : SP AIR SP-7520KL",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-7520kl",
		"label": "Référence SP-7520KL",
		"distinguishingAttributes": {
			"reference": "SP-7520KL",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "1.04 kg",
			"Longueur hors tout": "167 mm"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-7520KL. Consommation publiée, régime non précisé : 400 L/min à 6,2 bar. Raccord publié : 1/4\"NPT. Masse publiée : 1.04 kg.",
		"verifiedFacts": [
			"Raccord publié : 1/4\"NPT.",
			"Masse publiée : 1.04 kg.",
			"Longueur hors tout : 167 mm.",
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
				"october-sp-air-p12"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.04 kg",
			"evidenceIds": [
				"october-sp-air-p12"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "167 mm",
			"evidenceIds": [
				"october-sp-air-p12"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "500 tr/min",
			"evidenceIds": [
				"october-sp-air-p12"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "SP AIR, catalogue Air Tools, page 12",
			"evidenceIds": [
				"october-sp-air-p12"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.62 MPa",
			"evidenceIds": [
				"october-sp-air-p12"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p12",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=12",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 12",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p12"
		],
		"workingPressureBar": [
			"october-sp-air-p12"
		],
		"airflowLpm": [
			"october-sp-air-p12"
		],
		"airflowBasis": [
			"october-sp-air-p12"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 400 L/min à 6,2 bar."
	]
};

export default product;
