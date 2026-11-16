import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-sp-air-sp-1762n",
	"slug": "cle-a-cliquet-sp-air-sp-1762n",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "SP AIR SP-1762N",
	"brand": "SP AIR",
	"model": "SP-1762N",
	"mpn": "SP-1762N",
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
		"src": "/images/products/cle-a-cliquet-sp-air-sp-1762n-technical-20261116-reviews.svg",
		"alt": "Repères techniques : SP AIR SP-1762N",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "sp-air-sp-1762n",
		"label": "Référence SP-1762N",
		"distinguishingAttributes": {
			"reference": "SP-1762N",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "0.54 kg",
			"Longueur hors tout": "185 mm"
		}
	},
	"editorial": {
		"overview": "La SP-1762N est le cliquet 3/8 pouce avec silencieux orientable : 185 mm, 200 tr/min et 0,54 kg. La SP-1762 standard est plus courte à 165 mm et tourne à 310 tr/min ; la 1762L est une version longue de 210 mm. Les trois partagent un couple publié de 20 Nm. Le régime des 0,2 m³/min n’est pas indiqué, ce qui les maintient hors dimensionnement.",
		"verifiedFacts": [
			"Raccord publié : 1/4\"NPT.",
			"Masse publiée : 0.54 kg.",
			"Longueur hors tout : 185 mm.",
			"Vitesse à vide : 200 tr/min."
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
				"october-sp-air-p5"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.54 kg",
			"evidenceIds": [
				"october-sp-air-p5"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "185 mm",
			"evidenceIds": [
				"october-sp-air-p5"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "200 tr/min",
			"evidenceIds": [
				"october-sp-air-p5"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "SP AIR, catalogue Air Tools, page 5",
			"evidenceIds": [
				"october-sp-air-p5"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.62 MPa",
			"evidenceIds": [
				"october-sp-air-p5"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p5",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=5",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:cle-a-cliquet-sp-air-sp-1762n:0",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
			"sourceLabel": "SP AIR, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La SP-1762N est le cliquet 3/8 pouce avec silencieux orientable : 185 mm, 200 tr/min et 0,54 kg. La SP-1762 standard est plus courte à 165 mm et tourne à 310 tr/min ; la 1762L est une version longue de 210 mm. Les trois partagent un couple publié de 20 Nm. Le régime des 0,2 m³/min n’est pas indiqué, ce qui les maintient hors dimensionnement. GET complet SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Pages PDF lues : 5."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p5"
		],
		"workingPressureBar": [
			"october-sp-air-p5"
		],
		"airflowLpm": [
			"october-sp-air-p5"
		],
		"airflowBasis": [
			"october-sp-air-p5"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 200 L/min à 6,2 bar."
	]
};

export default product;
