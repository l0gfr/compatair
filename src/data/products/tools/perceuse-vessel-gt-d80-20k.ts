const product = {
	"id": "perceuse-vessel-gt-d80-20k",
	"slug": "perceuse-vessel-gt-d80-20k",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "VESSEL GT-D80-20K",
	"brand": "VESSEL",
	"model": "GT-D80-20K",
	"mpn": "GT-D80-20K",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 350,
		"typical": 350,
		"max": 350
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-vessel-gt-d80-20k.webp",
		"alt": "Repères techniques : VESSEL GT-D80-20K",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-d80-20k",
		"label": "Référence GT-D80-20K",
		"distinguishingAttributes": {
			"reference": "GT-D80-20K",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "2,000 tr/min",
			"Code EDP publié": "310605"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-D80-20K. Consommation publiée, régime non précisé : 350 L/min à 6 bar. Raccord publié : Rc 1/4. Vitesse à vide : 2,000 tr/min.",
		"verifiedFacts": [
			"Raccord publié : Rc 1/4.",
			"Vitesse à vide : 2,000 tr/min.",
			"Code EDP publié : 310605."
		],
		"limitations": [
			"Régime de consommation non précisé : aucun maximum supposé ; le verdict reste insufficient_data.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Raccord publié",
			"value": "Rc 1/4",
			"evidenceIds": [
				"october-vessel-air-p39"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2,000 tr/min",
			"evidenceIds": [
				"october-vessel-air-p39"
			]
		},
		{
			"label": "Code EDP publié",
			"value": "310605",
			"evidenceIds": [
				"october-vessel-air-p39"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "VESSEL, catalogue Air Tools, page 39",
			"evidenceIds": [
				"october-vessel-air-p39"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "air pressure: 0.6MPa",
			"evidenceIds": [
				"october-vessel-air-p39"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p39",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=39",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 39",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-vessel-air-p39"
		],
		"workingPressureBar": [
			"october-vessel-air-p39"
		],
		"airflowLpm": [
			"october-vessel-air-p39"
		],
		"airflowBasis": [
			"october-vessel-air-p39"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 350 L/min à 6 bar."
	]
};

export default product;
