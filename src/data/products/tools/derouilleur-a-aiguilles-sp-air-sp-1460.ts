const product = {
	"id": "derouilleur-a-aiguilles-sp-air-sp-1460",
	"slug": "derouilleur-a-aiguilles-sp-air-sp-1460",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "SP AIR SP-1460",
	"brand": "SP AIR",
	"model": "SP-1460",
	"mpn": "SP-1460",
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
		"src": "/images/products/derouilleur-a-aiguilles-sp-air-sp-1460.webp",
		"alt": "Repères techniques : SP AIR SP-1460",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-1460",
		"label": "Référence SP-1460",
		"distinguishingAttributes": {
			"reference": "SP-1460",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "1.26 kg"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-1460. Consommation publiée, régime non précisé : 200 L/min à 6,2 bar. Raccord publié : 1/4\"NPT. Masse publiée : 1.26 kg.",
		"verifiedFacts": [
			"Raccord publié : 1/4\"NPT.",
			"Masse publiée : 1.26 kg."
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
				"october-sp-air-p23"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.26 kg",
			"evidenceIds": [
				"october-sp-air-p23"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "SP AIR, catalogue Air Tools, page 23",
			"evidenceIds": [
				"october-sp-air-p23"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.62 MPa",
			"evidenceIds": [
				"october-sp-air-p23"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p23",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=23",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 23",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p23"
		],
		"workingPressureBar": [
			"october-sp-air-p23"
		],
		"airflowLpm": [
			"october-sp-air-p23"
		],
		"airflowBasis": [
			"october-sp-air-p23"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 200 L/min à 6,2 bar."
	]
};

export default product;
