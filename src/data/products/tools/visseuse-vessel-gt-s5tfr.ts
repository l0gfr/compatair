const product = {
	"id": "visseuse-vessel-gt-s5tfr",
	"slug": "visseuse-vessel-gt-s5tfr",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "VESSEL GT-S5TFR",
	"brand": "VESSEL",
	"model": "GT-S5TFR",
	"mpn": "GT-S5TFR",
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
		"src": "/images/products/visseuse-vessel-gt-s5tfr.webp",
		"alt": "Repères techniques : VESSEL GT-S5TFR",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-s5tfr",
		"label": "Référence GT-S5TFR",
		"distinguishingAttributes": {
			"reference": "GT-S5TFR",
			"Raccord publié": "Rc 1/8",
			"Vitesse à vide": "700 tr/min",
			"Code EDP publié": "311213"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-S5TFR. Consommation publiée, régime non précisé : 350 L/min à 6 bar. Raccord publié : Rc 1/8. Vitesse à vide : 700 tr/min.",
		"verifiedFacts": [
			"Raccord publié : Rc 1/8.",
			"Vitesse à vide : 700 tr/min.",
			"Code EDP publié : 311213."
		],
		"limitations": [
			"Régime de consommation non précisé : aucun maximum supposé ; le verdict reste insufficient_data.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Raccord publié",
			"value": "Rc 1/8",
			"evidenceIds": [
				"october-vessel-air-p13"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "700 tr/min",
			"evidenceIds": [
				"october-vessel-air-p13"
			]
		},
		{
			"label": "Code EDP publié",
			"value": "311213",
			"evidenceIds": [
				"october-vessel-air-p13"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "VESSEL, catalogue Air Tools, page 13",
			"evidenceIds": [
				"october-vessel-air-p13"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.6MPa",
			"evidenceIds": [
				"october-vessel-air-p13"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p13",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=13",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 13",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-vessel-air-p13"
		],
		"workingPressureBar": [
			"october-vessel-air-p13"
		],
		"airflowLpm": [
			"october-vessel-air-p13"
		],
		"airflowBasis": [
			"october-vessel-air-p13"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 350 L/min à 6 bar."
	]
};

export default product;
