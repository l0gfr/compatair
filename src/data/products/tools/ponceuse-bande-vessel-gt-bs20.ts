const product = {
	"id": "ponceuse-bande-vessel-gt-bs20",
	"slug": "ponceuse-bande-vessel-gt-bs20",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "VESSEL GT-BS20",
	"brand": "VESSEL",
	"model": "GT-BS20",
	"mpn": "GT-BS20",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-bande-vessel-gt-bs20.webp",
		"alt": "Repères techniques : VESSEL GT-BS20",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-bs20",
		"label": "Référence GT-BS20",
		"distinguishingAttributes": {
			"reference": "GT-BS20",
			"Raccord publié": "Rc 1/4",
			"Longueur hors tout": "398 mm",
			"Masse hors accessoires": "1,300 g"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-BS20. Consommation publiée, régime non précisé : 600 L/min à 6 bar. Raccord publié : Rc 1/4. Longueur hors tout : 398 mm.",
		"verifiedFacts": [
			"Raccord publié : Rc 1/4.",
			"Longueur hors tout : 398 mm.",
			"Masse hors accessoires : 1,300 g.",
			"Vitesse à vide : 16,500 tr/min."
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
				"october-vessel-air-p31"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "398 mm",
			"evidenceIds": [
				"october-vessel-air-p31"
			]
		},
		{
			"label": "Masse hors accessoires",
			"value": "1,300 g",
			"evidenceIds": [
				"october-vessel-air-p31"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "16,500 tr/min",
			"evidenceIds": [
				"october-vessel-air-p31"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "VESSEL, catalogue Air Tools, page 31",
			"evidenceIds": [
				"october-vessel-air-p31"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.6MPa",
			"evidenceIds": [
				"october-vessel-air-p31"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p31",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=31",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 31",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-vessel-air-p31"
		],
		"workingPressureBar": [
			"october-vessel-air-p31"
		],
		"airflowLpm": [
			"october-vessel-air-p31"
		],
		"airflowBasis": [
			"october-vessel-air-p31"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 600 L/min à 6 bar."
	]
};

export default product;
