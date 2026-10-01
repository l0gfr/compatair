const product = {
	"id": "cle-a-chocs-vessel-gt-p14jl",
	"slug": "cle-a-chocs-vessel-gt-p14jl",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "VESSEL GT-P14JL",
	"brand": "VESSEL",
	"model": "GT-P14JL",
	"mpn": "GT-P14JL",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 420,
		"typical": 420,
		"max": 420
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-vessel-gt-p14jl.webp",
		"alt": "Repères techniques : VESSEL GT-P14JL",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-p14jl",
		"label": "Référence GT-P14JL",
		"distinguishingAttributes": {
			"reference": "GT-P14JL",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "6,500 tr/min",
			"Code EDP publié": "331276"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-P14JL. Consommation publiée, régime non précisé : 420 L/min à 6 bar. Raccord publié : Rc 1/4. Vitesse à vide : 6,500 tr/min.",
		"verifiedFacts": [
			"Raccord publié : Rc 1/4.",
			"Vitesse à vide : 6,500 tr/min.",
			"Code EDP publié : 331276."
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
				"october-vessel-air-p21"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6,500 tr/min",
			"evidenceIds": [
				"october-vessel-air-p21"
			]
		},
		{
			"label": "Code EDP publié",
			"value": "331276",
			"evidenceIds": [
				"october-vessel-air-p21"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "VESSEL, catalogue Air Tools, page 21",
			"evidenceIds": [
				"october-vessel-air-p21"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.6MPa",
			"evidenceIds": [
				"october-vessel-air-p21"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p21",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=21",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 21",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-vessel-air-p21"
		],
		"workingPressureBar": [
			"october-vessel-air-p21"
		],
		"airflowLpm": [
			"october-vessel-air-p21"
		],
		"airflowBasis": [
			"october-vessel-air-p21"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 420 L/min à 6 bar."
	]
};

export default product;
