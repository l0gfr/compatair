const product = {
	"id": "visseuse-vessel-gt-p80xd",
	"slug": "visseuse-vessel-gt-p80xd",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "VESSEL GT-P80XD",
	"brand": "VESSEL",
	"model": "GT-P80XD",
	"mpn": "GT-P80XD",
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
		"src": "/images/products/visseuse-vessel-gt-p80xd.webp",
		"alt": "Repères techniques : VESSEL GT-P80XD",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-p80xd",
		"label": "Référence GT-P80XD",
		"distinguishingAttributes": {
			"reference": "GT-P80XD",
			"Raccord publié": "Rc 1/4",
			"Longueur hors tout": "172 mm",
			"Masse hors accessoires": "1,520 g"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-P80XD. Consommation publiée, régime non précisé : 400 L/min à 6 bar. Raccord publié : Rc 1/4. Longueur hors tout : 172 mm.",
		"verifiedFacts": [
			"Raccord publié : Rc 1/4.",
			"Longueur hors tout : 172 mm.",
			"Masse hors accessoires : 1,520 g.",
			"Vitesse à vide : 7,000 tr/min."
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
				"october-vessel-air-p7"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "172 mm",
			"evidenceIds": [
				"october-vessel-air-p7"
			]
		},
		{
			"label": "Masse hors accessoires",
			"value": "1,520 g",
			"evidenceIds": [
				"october-vessel-air-p7"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "7,000 tr/min",
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
		"Consommation publiée, régime non précisé : 400 L/min à 6 bar."
	]
};

export default product;
