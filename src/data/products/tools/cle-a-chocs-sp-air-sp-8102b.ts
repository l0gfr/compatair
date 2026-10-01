const product = {
	"id": "cle-a-chocs-sp-air-sp-8102b",
	"slug": "cle-a-chocs-sp-air-sp-8102b",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "SP AIR SP-8102B",
	"brand": "SP AIR",
	"model": "SP-8102B",
	"mpn": "SP-8102B",
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
		"src": "/images/products/cle-a-chocs-sp-air-sp-8102b.webp",
		"alt": "Repères techniques : SP AIR SP-8102B",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-8102b",
		"label": "Référence SP-8102B",
		"distinguishingAttributes": {
			"reference": "SP-8102B",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "1 kg",
			"Longueur hors tout": "150 mm"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-8102B. Consommation publiée, régime non précisé : 400 L/min à 6,2 bar. Raccord publié : 1/4\"NPT. Masse publiée : 1 kg.",
		"verifiedFacts": [
			"Raccord publié : 1/4\"NPT.",
			"Masse publiée : 1 kg.",
			"Longueur hors tout : 150 mm.",
			"Vitesse à vide : 11500 tr/min."
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
				"october-sp-air-p11"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1 kg",
			"evidenceIds": [
				"october-sp-air-p11"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "150 mm",
			"evidenceIds": [
				"october-sp-air-p11"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "11500 tr/min",
			"evidenceIds": [
				"october-sp-air-p11"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "SP AIR, catalogue Air Tools, page 11",
			"evidenceIds": [
				"october-sp-air-p11"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.62 MPa",
			"evidenceIds": [
				"october-sp-air-p11"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p11",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=11",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p11"
		],
		"workingPressureBar": [
			"october-sp-air-p11"
		],
		"airflowLpm": [
			"october-sp-air-p11"
		],
		"airflowBasis": [
			"october-sp-air-p11"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 400 L/min à 6,2 bar."
	]
};

export default product;
