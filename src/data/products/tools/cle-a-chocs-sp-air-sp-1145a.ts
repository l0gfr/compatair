import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-sp-air-sp-1145a",
	"slug": "cle-a-chocs-sp-air-sp-1145a",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "SP AIR SP-1145A",
	"brand": "SP AIR",
	"model": "SP-1145A",
	"mpn": "SP-1145A",
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
		"src": "/images/products/cle-a-chocs-sp-air-sp-1145a-technical-20261116-reviews.svg",
		"alt": "Repères techniques : SP AIR SP-1145A",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "sp-air-sp-1145a",
		"label": "Référence SP-1145A",
		"distinguishingAttributes": {
			"reference": "SP-1145A",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "2.5 kg",
			"Longueur hors tout": "190 mm"
		}
	},
	"editorial": {
		"overview": "La SP-1145A utilise un mécanisme Pin clutch, un carré 1/2 pouce et une plage publiée de 55–420 Nm à 6 000 tr/min. La SP-1148F passe à 55–475 Nm avec un mécanisme Twin Dog et 197 mm de long, contre 190 mm. Les 0,6 m³/min n’ont pas de régime explicite dans le tableau, même si sa pression de 0,62 MPa est indiquée : le moteur garde un résultat non conclusif.",
		"verifiedFacts": [
			"Raccord publié : 1/4\"NPT.",
			"Masse publiée : 2.5 kg.",
			"Longueur hors tout : 190 mm.",
			"Vitesse à vide : 6000 tr/min."
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
				"october-sp-air-p10"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.5 kg",
			"evidenceIds": [
				"october-sp-air-p10"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "190 mm",
			"evidenceIds": [
				"october-sp-air-p10"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6000 tr/min",
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
		},
		{
			"id": "review:2026-11-16-reviews:cle-a-chocs-sp-air-sp-1145a:0",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
			"sourceLabel": "SP AIR, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La SP-1145A utilise un mécanisme Pin clutch, un carré 1/2 pouce et une plage publiée de 55–420 Nm à 6 000 tr/min. La SP-1148F passe à 55–475 Nm avec un mécanisme Twin Dog et 197 mm de long, contre 190 mm. Les 0,6 m³/min n’ont pas de régime explicite dans le tableau, même si sa pression de 0,62 MPa est indiquée : le moteur garde un résultat non conclusif. GET complet SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Pages PDF lues : 10."
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
		"Consommation publiée, régime non précisé : 600 L/min à 6,2 bar."
	]
};

export default product;
