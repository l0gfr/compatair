const product = {
	"id": "tronconneuse-sp-air-sp-7231awc",
	"slug": "tronconneuse-sp-air-sp-7231awc",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "SP AIR SP-7231AWC",
	"brand": "SP AIR",
	"model": "SP-7231AWC",
	"mpn": "SP-7231AWC",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 800,
		"typical": 800,
		"max": 800
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-sp-air-sp-7231awc.webp",
		"alt": "Repères techniques : SP AIR SP-7231AWC",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-7231awc",
		"label": "Référence SP-7231AWC",
		"distinguishingAttributes": {
			"reference": "SP-7231AWC",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "1.2 kg"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-7231AWC. Consommation publiée, régime non précisé : 800 L/min à 6,2 bar. Raccord publié : 1/4\"NPT. Masse publiée : 1.2 kg.",
		"verifiedFacts": [
			"Raccord publié : 1/4\"NPT.",
			"Masse publiée : 1.2 kg."
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
				"october-sp-air-p22"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.2 kg",
			"evidenceIds": [
				"october-sp-air-p22"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "SP AIR, catalogue Air Tools, page 22",
			"evidenceIds": [
				"october-sp-air-p22"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.62 MPa",
			"evidenceIds": [
				"october-sp-air-p22"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p22",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=22",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 22",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p22"
		],
		"workingPressureBar": [
			"october-sp-air-p22"
		],
		"airflowLpm": [
			"october-sp-air-p22"
		],
		"airflowBasis": [
			"october-sp-air-p22"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 800 L/min à 6,2 bar."
	]
};

export default product;
