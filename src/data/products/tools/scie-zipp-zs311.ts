import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-zipp-zs311",
	"slug": "scie-zipp-zs311",
	"categoryId": "scie",
	"category": "scie",
	"label": "ZIPP ZS311",
	"brand": "ZIPP",
	"model": "ZS311",
	"mpn": "ZS311",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-zipp-zs311.webp",
		"alt": "Repères techniques : ZIPP ZS311",
		"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "zipp-zs311",
		"label": "Référence ZS311",
		"distinguishingAttributes": {
			"reference": "ZS311",
			"Référence constructeur": "ZS311",
			"Configuration publiée": "24T X 5 ZS317 24T X 5"
		}
	},
	"editorial": {
		"overview": "ZIPP ZS311. La ZS311 est la scie à course 10 mm, 9 500 coups/min et 0,7 kg ; la ZS317 passe à 25 mm, 5 000 coups/min et 0,96 kg. La ZS311M est une autre variante à 10 000 coups/min et 0,45 kg. La table complète publie 100 L/min moyens, absents de la transcription antérieure ; aucun maximum en charge n’en est déduit.",
		"verifiedFacts": [
			"Cadence : 9 500 coups/min.",
			"Course : 10 mm.",
			"Masse : 0,7 kg.",
			"Consommation moyenne documentaire : 3,5 cfm (100 L/min).",
			"Pression de service publiée : 90 psi / 6,2 bar, distincte d’une pression de mesure démontrée."
		],
		"limitations": [
			"Consommation moyenne ou de régime non précisé, sans qualification maximale/en charge ni appariement de pression de mesure suffisant : aucun verdict conclusif n’en est déduit."
		]
	},
	"specifications": [
		{
			"label": "Cadence",
			"value": "9 500 coups/min",
			"evidenceIds": [
				"scie-zipp-zs311-reserved-20261103-1"
			]
		},
		{
			"label": "Course",
			"value": "10 mm",
			"evidenceIds": [
				"scie-zipp-zs311-reserved-20261103-1"
			]
		},
		{
			"label": "Masse",
			"value": "0,7 kg",
			"evidenceIds": [
				"scie-zipp-zs311-reserved-20261103-1"
			]
		},
		{
			"label": "Consommation moyenne documentaire",
			"value": "3,5 cfm (100 L/min)",
			"evidenceIds": [
				"scie-zipp-zs311-reserved-20261103-1"
			]
		},
		{
			"label": "Pression de service publiée",
			"value": "90 psi / 6,2 bar, distincte d’une pression de mesure démontrée",
			"evidenceIds": [
				"scie-zipp-zs311-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-b-zipp-tools-p97",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=97",
			"sourceLabel": "ZIPP, catalogue général pneumatique, page PDF 97",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 5904c6537cbcbd47da75d3a30cd5a1966cfc5b51c4db0b0d4ed65da32c8434b6. Données déclarées par le fabricant ; aucun essai physique CompatAir."
		},
		{
			"id": "scie-zipp-zs311-reserved-20261103-1",
			"sourceUrl": "https://www.airtools.com.tw/wp-content/uploads/ZIPP-TOOL-General-Catalog.pdf#page=97",
			"sourceLabel": "ZIPP : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 a775ada40d09420c6d5c77f5da66defb2adf2c36c5e32f2a047afa188fd38df3. La ZS311 est la scie à course 10 mm, 9 500 coups/min et 0,7 kg ; la ZS317 passe à 25 mm, 5 000 coups/min et 0,96 kg. La ZS311M est une autre variante à 10 000 coups/min et 0,45 kg. La table complète publie 100 L/min moyens, absents de la transcription antérieure ; aucun maximum en charge n’en est déduit."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-b-zipp-tools-p97"
		],
		"workingPressureBar": [
			"october-b-zipp-tools-p97"
		],
		"demandModel": [
			"scie-zipp-zs311-reserved-20261103-1"
		],
		"airflowLpm": [
			"scie-zipp-zs311-reserved-20261103-1"
		],
		"airflowBasis": [
			"scie-zipp-zs311-reserved-20261103-1"
		],
		"editorial": [
			"scie-zipp-zs311-reserved-20261103-1"
		],
		"specifications": [
			"scie-zipp-zs311-reserved-20261103-1"
		]
	},
	"notes": [
		"La consommation par minute ou par cycle n’est pas établie dans ce tableau ; aucune demande n’est déduite de la vitesse ou de la puissance."
	],
	"airflowLpm": {
		"min": 100,
		"typical": 100,
		"max": 100
	},
	"airflowBasis": "average"
};

export default product;
