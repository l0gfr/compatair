const product = {
	"id": "ponceuse-rotative-sp-air-sp-1350",
	"slug": "ponceuse-rotative-sp-air-sp-1350",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "SP AIR SP-1350",
	"brand": "SP AIR",
	"model": "SP-1350",
	"mpn": "SP-1350",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 760,
		"typical": 760,
		"max": 760
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-sp-air-sp-1350.webp",
		"alt": "Repères techniques : SP AIR SP-1350",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-1350",
		"label": "Référence SP-1350",
		"distinguishingAttributes": {
			"reference": "SP-1350",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "0.96 kg"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-1350. Consommation publiée, régime non précisé : 760 L/min à 6,2 bar. Raccord publié : 1/4\"NPT. Masse publiée : 0.96 kg.",
		"verifiedFacts": [
			"Raccord publié : 1/4\"NPT.",
			"Masse publiée : 0.96 kg."
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
				"october-sp-air-p16"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.96 kg",
			"evidenceIds": [
				"october-sp-air-p16"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "SP AIR, catalogue Air Tools, page 16",
			"evidenceIds": [
				"october-sp-air-p16"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.62 MPa",
			"evidenceIds": [
				"october-sp-air-p16"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p16",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=16",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 16",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p16"
		],
		"workingPressureBar": [
			"october-sp-air-p16"
		],
		"airflowLpm": [
			"october-sp-air-p16"
		],
		"airflowBasis": [
			"october-sp-air-p16"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 760 L/min à 6,2 bar."
	]
};

export default product;
