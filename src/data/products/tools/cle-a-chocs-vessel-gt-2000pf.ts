const product = {
	"id": "cle-a-chocs-vessel-gt-2000pf",
	"slug": "cle-a-chocs-vessel-gt-2000pf",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "VESSEL GT-2000PF",
	"brand": "VESSEL",
	"model": "GT-2000PF",
	"mpn": "GT-2000PF",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 430,
		"typical": 430,
		"max": 430
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-vessel-gt-2000pf.webp",
		"alt": "Repères techniques : VESSEL GT-2000PF",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-2000pf",
		"label": "Référence GT-2000PF",
		"distinguishingAttributes": {
			"reference": "GT-2000PF",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "5,500 tr/min",
			"Code EDP publié": "331298"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-2000PF. Consommation publiée, régime non précisé : 430 L/min à 6 bar. Raccord publié : Rc 1/4. Vitesse à vide : 5,500 tr/min.",
		"verifiedFacts": [
			"Raccord publié : Rc 1/4.",
			"Vitesse à vide : 5,500 tr/min.",
			"Code EDP publié : 331298."
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
				"october-vessel-air-p19"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5,500 tr/min",
			"evidenceIds": [
				"october-vessel-air-p19"
			]
		},
		{
			"label": "Code EDP publié",
			"value": "331298",
			"evidenceIds": [
				"october-vessel-air-p19"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "VESSEL, catalogue Air Tools, page 19",
			"evidenceIds": [
				"october-vessel-air-p19"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.6MPa",
			"evidenceIds": [
				"october-vessel-air-p19"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p19",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=19",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-vessel-air-p19"
		],
		"workingPressureBar": [
			"october-vessel-air-p19"
		],
		"airflowLpm": [
			"october-vessel-air-p19"
		],
		"airflowBasis": [
			"october-vessel-air-p19"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 430 L/min à 6 bar."
	]
};

export default product;
