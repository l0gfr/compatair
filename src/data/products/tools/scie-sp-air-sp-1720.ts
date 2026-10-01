const product = {
	"id": "scie-sp-air-sp-1720",
	"slug": "scie-sp-air-sp-1720",
	"categoryId": "scie",
	"category": "scie",
	"label": "SP AIR SP-1720",
	"brand": "SP AIR",
	"model": "SP-1720",
	"mpn": "SP-1720",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 320,
		"typical": 320,
		"max": 320
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-sp-air-sp-1720.webp",
		"alt": "Repères techniques : SP AIR SP-1720",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-1720",
		"label": "Référence SP-1720",
		"distinguishingAttributes": {
			"reference": "SP-1720",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "0.48 kg"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-1720. Consommation publiée, régime non précisé : 320 L/min à 6,2 bar. Raccord publié : 1/4\"NPT. Masse publiée : 0.48 kg.",
		"verifiedFacts": [
			"Raccord publié : 1/4\"NPT.",
			"Masse publiée : 0.48 kg."
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
				"october-sp-air-p21"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.48 kg",
			"evidenceIds": [
				"october-sp-air-p21"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "SP AIR, catalogue Air Tools, page 21",
			"evidenceIds": [
				"october-sp-air-p21"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.62 MPa",
			"evidenceIds": [
				"october-sp-air-p21"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p21",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=21",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 21",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p21"
		],
		"workingPressureBar": [
			"october-sp-air-p21"
		],
		"airflowLpm": [
			"october-sp-air-p21"
		],
		"airflowBasis": [
			"october-sp-air-p21"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 320 L/min à 6,2 bar."
	]
};

export default product;
