const product = {
	"id": "cle-a-chocs-vessel-gt-1600vp",
	"slug": "cle-a-chocs-vessel-gt-1600vp",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "VESSEL GT-1600VP",
	"brand": "VESSEL",
	"model": "GT-1600VP",
	"mpn": "GT-1600VP",
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
		"src": "/images/products/cle-a-chocs-vessel-gt-1600vp.webp",
		"alt": "Repères techniques : VESSEL GT-1600VP",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-1600vp",
		"label": "Référence GT-1600VP",
		"distinguishingAttributes": {
			"reference": "GT-1600VP",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "8,500 tr/min",
			"Code EDP publié": "336010"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-1600VP. Consommation publiée, régime non précisé : 400 L/min à 6 bar. Raccord publié : Rc 1/4. Vitesse à vide : 8,500 tr/min.",
		"verifiedFacts": [
			"Raccord publié : Rc 1/4.",
			"Vitesse à vide : 8,500 tr/min.",
			"Code EDP publié : 336010."
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
				"october-vessel-air-p17"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "8,500 tr/min",
			"evidenceIds": [
				"october-vessel-air-p17"
			]
		},
		{
			"label": "Code EDP publié",
			"value": "336010",
			"evidenceIds": [
				"october-vessel-air-p17"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "VESSEL, catalogue Air Tools, page 17",
			"evidenceIds": [
				"october-vessel-air-p17"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.6MPa",
			"evidenceIds": [
				"october-vessel-air-p17"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p17",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=17",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-vessel-air-p17"
		],
		"workingPressureBar": [
			"october-vessel-air-p17"
		],
		"airflowLpm": [
			"october-vessel-air-p17"
		],
		"airflowBasis": [
			"october-vessel-air-p17"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 400 L/min à 6 bar."
	]
};

export default product;
