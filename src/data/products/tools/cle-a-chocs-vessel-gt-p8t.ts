const product = {
	"id": "cle-a-chocs-vessel-gt-p8t",
	"slug": "cle-a-chocs-vessel-gt-p8t",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "VESSEL GT-P8T",
	"brand": "VESSEL",
	"model": "GT-P8T",
	"mpn": "GT-P8T",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 310,
		"typical": 310,
		"max": 310
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-vessel-gt-p8t.webp",
		"alt": "Repères techniques : VESSEL GT-P8T",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-p8t",
		"label": "Référence GT-P8T",
		"distinguishingAttributes": {
			"reference": "GT-P8T",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "2,500 tr/min",
			"Code EDP publié": "324005"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-P8T. Consommation publiée, régime non précisé : 310 L/min à 6 bar. Raccord publié : Rc 1/4. Vitesse à vide : 2,500 tr/min.",
		"verifiedFacts": [
			"Raccord publié : Rc 1/4.",
			"Vitesse à vide : 2,500 tr/min.",
			"Code EDP publié : 324005."
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
				"october-vessel-air-p27"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2,500 tr/min",
			"evidenceIds": [
				"october-vessel-air-p27"
			]
		},
		{
			"label": "Code EDP publié",
			"value": "324005",
			"evidenceIds": [
				"october-vessel-air-p27"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "VESSEL, catalogue Air Tools, page 27",
			"evidenceIds": [
				"october-vessel-air-p27"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.6MPa",
			"evidenceIds": [
				"october-vessel-air-p27"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p27",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=27",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 27",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-vessel-air-p27"
		],
		"workingPressureBar": [
			"october-vessel-air-p27"
		],
		"airflowLpm": [
			"october-vessel-air-p27"
		],
		"airflowBasis": [
			"october-vessel-air-p27"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 310 L/min à 6 bar."
	]
};

export default product;
