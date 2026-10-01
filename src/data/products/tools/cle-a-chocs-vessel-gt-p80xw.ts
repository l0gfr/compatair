const product = {
	"id": "cle-a-chocs-vessel-gt-p80xw",
	"slug": "cle-a-chocs-vessel-gt-p80xw",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "VESSEL GT-P80XW",
	"brand": "VESSEL",
	"model": "GT-P80XW",
	"mpn": "GT-P80XW",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 400,
		"typical": 400,
		"max": 400
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-vessel-gt-p80xw.webp",
		"alt": "Repères techniques : VESSEL GT-P80XW",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-p80xw",
		"label": "Référence GT-P80XW",
		"distinguishingAttributes": {
			"reference": "GT-P80XW",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "7,000 tr/min",
			"Code EDP publié": "324049"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-P80XW. Consommation publiée, régime non précisé : 400 L/min à 6 bar. Raccord publié : Rc 1/4. Vitesse à vide : 7,000 tr/min.",
		"verifiedFacts": [
			"Raccord publié : Rc 1/4.",
			"Vitesse à vide : 7,000 tr/min.",
			"Code EDP publié : 324049."
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
				"october-vessel-air-p23"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "7,000 tr/min",
			"evidenceIds": [
				"october-vessel-air-p23"
			]
		},
		{
			"label": "Code EDP publié",
			"value": "324049",
			"evidenceIds": [
				"october-vessel-air-p23"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "VESSEL, catalogue Air Tools, page 23",
			"evidenceIds": [
				"october-vessel-air-p23"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.6MPa",
			"evidenceIds": [
				"october-vessel-air-p23"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p23",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=23",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 23",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-vessel-air-p23"
		],
		"workingPressureBar": [
			"october-vessel-air-p23"
		],
		"airflowLpm": [
			"october-vessel-air-p23"
		],
		"airflowBasis": [
			"october-vessel-air-p23"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 400 L/min à 6 bar."
	]
};

export default product;
