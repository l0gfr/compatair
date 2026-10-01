const product = {
	"id": "cle-a-chocs-vessel-gt-p18j",
	"slug": "cle-a-chocs-vessel-gt-p18j",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "VESSEL GT-P18J",
	"brand": "VESSEL",
	"model": "GT-P18J",
	"mpn": "GT-P18J",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 520,
		"typical": 520,
		"max": 520
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-vessel-gt-p18j.webp",
		"alt": "Repères techniques : VESSEL GT-P18J",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-p18j",
		"label": "Référence GT-P18J",
		"distinguishingAttributes": {
			"reference": "GT-P18J",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "5,000 tr/min",
			"Code EDP publié": "331292"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-P18J. Consommation publiée, régime non précisé : 520 L/min à 6 bar. Raccord publié : Rc 1/4. Vitesse à vide : 5,000 tr/min.",
		"verifiedFacts": [
			"Raccord publié : Rc 1/4.",
			"Vitesse à vide : 5,000 tr/min.",
			"Code EDP publié : 331292."
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
			"value": "5,000 tr/min",
			"evidenceIds": [
				"october-vessel-air-p23"
			]
		},
		{
			"label": "Code EDP publié",
			"value": "331292",
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
		"Consommation publiée, régime non précisé : 520 L/min à 6 bar."
	]
};

export default product;
