const product = {
	"id": "visseuse-vessel-gt-s6hs",
	"slug": "visseuse-vessel-gt-s6hs",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "VESSEL GT-S6HS",
	"brand": "VESSEL",
	"model": "GT-S6HS",
	"mpn": "GT-S6HS",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 300,
		"typical": 300,
		"max": 300
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-vessel-gt-s6hs.webp",
		"alt": "Repères techniques : VESSEL GT-S6HS",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-s6hs",
		"label": "Référence GT-S6HS",
		"distinguishingAttributes": {
			"reference": "GT-S6HS",
			"Raccord publié": "G 1/4",
			"Vitesse à vide": "10,000 tr/min",
			"Code EDP publié": "311107"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-S6HS. Consommation publiée, régime non précisé : 300 L/min à 6 bar. Raccord publié : G 1/4. Vitesse à vide : 10,000 tr/min.",
		"verifiedFacts": [
			"Raccord publié : G 1/4.",
			"Vitesse à vide : 10,000 tr/min.",
			"Code EDP publié : 311107."
		],
		"limitations": [
			"Régime de consommation non précisé : aucun maximum supposé ; le verdict reste insufficient_data.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Raccord publié",
			"value": "G 1/4",
			"evidenceIds": [
				"october-vessel-air-p11"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "10,000 tr/min",
			"evidenceIds": [
				"october-vessel-air-p11"
			]
		},
		{
			"label": "Code EDP publié",
			"value": "311107",
			"evidenceIds": [
				"october-vessel-air-p11"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "VESSEL, catalogue Air Tools, page 11",
			"evidenceIds": [
				"october-vessel-air-p11"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.6MPa",
			"evidenceIds": [
				"october-vessel-air-p11"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p11",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=11",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-vessel-air-p11"
		],
		"workingPressureBar": [
			"october-vessel-air-p11"
		],
		"airflowLpm": [
			"october-vessel-air-p11"
		],
		"airflowBasis": [
			"october-vessel-air-p11"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 300 L/min à 6 bar."
	]
};

export default product;
