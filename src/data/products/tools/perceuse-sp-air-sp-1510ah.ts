const product = {
	"id": "perceuse-sp-air-sp-1510ah",
	"slug": "perceuse-sp-air-sp-1510ah",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "SP AIR SP-1510AH",
	"brand": "SP AIR",
	"model": "SP-1510AH",
	"mpn": "SP-1510AH",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 300,
		"typical": 300,
		"max": 300
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-sp-air-sp-1510ah.webp",
		"alt": "Repères techniques : SP AIR SP-1510AH",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-1510ah",
		"label": "Référence SP-1510AH",
		"distinguishingAttributes": {
			"reference": "SP-1510AH",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "1.22 kg",
			"Longueur hors tout": "208 mm"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-1510AH. Consommation publiée, régime non précisé : 300 L/min à 6,2 bar. Raccord publié : 1/4\"NPT. Masse publiée : 1.22 kg.",
		"verifiedFacts": [
			"Raccord publié : 1/4\"NPT.",
			"Masse publiée : 1.22 kg.",
			"Longueur hors tout : 208 mm.",
			"Vitesse à vide : 1800 tr/min."
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
				"october-sp-air-p13"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.22 kg",
			"evidenceIds": [
				"october-sp-air-p13"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "208 mm",
			"evidenceIds": [
				"october-sp-air-p13"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1800 tr/min",
			"evidenceIds": [
				"october-sp-air-p13"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "SP AIR, catalogue Air Tools, page 13",
			"evidenceIds": [
				"october-sp-air-p13"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.62 MPa",
			"evidenceIds": [
				"october-sp-air-p13"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p13",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=13",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 13",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p13"
		],
		"workingPressureBar": [
			"october-sp-air-p13"
		],
		"airflowLpm": [
			"october-sp-air-p13"
		],
		"airflowBasis": [
			"october-sp-air-p13"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 300 L/min à 6,2 bar."
	]
};

export default product;
