const product = {
	"id": "visseuse-vessel-gt-plixd",
	"slug": "visseuse-vessel-gt-plixd",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "VESSEL GT-PLIXD",
	"brand": "VESSEL",
	"model": "GT-PLIXD",
	"mpn": "GT-PLIXD",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 290,
		"typical": 290,
		"max": 290
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-vessel-gt-plixd.webp",
		"alt": "Repères techniques : VESSEL GT-PLIXD",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-plixd",
		"label": "Référence GT-PLIXD",
		"distinguishingAttributes": {
			"reference": "GT-PLIXD",
			"Raccord publié": "G 1/4",
			"Longueur hors tout": "198 mm",
			"Masse hors accessoires": "740 g"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-PLIXD. Consommation publiée, régime non précisé : 290 L/min à 6 bar. Raccord publié : G 1/4. Longueur hors tout : 198 mm.",
		"verifiedFacts": [
			"Raccord publié : G 1/4.",
			"Longueur hors tout : 198 mm.",
			"Masse hors accessoires : 740 g.",
			"Vitesse à vide : 7,300 tr/min."
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
				"october-vessel-air-p7"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "198 mm",
			"evidenceIds": [
				"october-vessel-air-p7"
			]
		},
		{
			"label": "Masse hors accessoires",
			"value": "740 g",
			"evidenceIds": [
				"october-vessel-air-p7"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "7,300 tr/min",
			"evidenceIds": [
				"october-vessel-air-p7"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "VESSEL, catalogue Air Tools, page 7",
			"evidenceIds": [
				"october-vessel-air-p7"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.6MPa",
			"evidenceIds": [
				"october-vessel-air-p7"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p7",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=7",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-vessel-air-p7"
		],
		"workingPressureBar": [
			"october-vessel-air-p7"
		],
		"airflowLpm": [
			"october-vessel-air-p7"
		],
		"airflowBasis": [
			"october-vessel-air-p7"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 290 L/min à 6 bar."
	]
};

export default product;
