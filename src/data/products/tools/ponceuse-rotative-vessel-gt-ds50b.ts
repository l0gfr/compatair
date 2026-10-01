const product = {
	"id": "ponceuse-rotative-vessel-gt-ds50b",
	"slug": "ponceuse-rotative-vessel-gt-ds50b",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "VESSEL GT-DS50B",
	"brand": "VESSEL",
	"model": "GT-DS50B",
	"mpn": "GT-DS50B",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 650,
		"typical": 650,
		"max": 650
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-rotative-vessel-gt-ds50b.webp",
		"alt": "Repères techniques : VESSEL GT-DS50B",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-ds50b",
		"label": "Référence GT-DS50B",
		"distinguishingAttributes": {
			"reference": "GT-DS50B",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "5,000 tr/min",
			"Longueur hors tout": "211 mm"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-DS50B. Consommation publiée, régime non précisé : 650 L/min à 6 bar. Raccord publié : Rc 1/4. Vitesse à vide : 5,000 tr/min.",
		"verifiedFacts": [
			"Raccord publié : Rc 1/4.",
			"Vitesse à vide : 5,000 tr/min.",
			"Longueur hors tout : 211 mm.",
			"Masse hors accessoires : 1,150 g."
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
			"label": "Vitesse à vide",
			"value": "5,000 tr/min",
			"evidenceIds": [
				"october-vessel-air-p31"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "211 mm",
			"evidenceIds": [
				"october-vessel-air-p31"
			]
		},
		{
			"label": "Masse hors accessoires",
			"value": "1,150 g",
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
		"Consommation publiée, régime non précisé : 650 L/min à 6 bar."
	]
};

export default product;
