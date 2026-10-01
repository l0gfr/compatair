const product = {
	"id": "meuleuse-vessel-gt-mg35sar",
	"slug": "meuleuse-vessel-gt-mg35sar",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "VESSEL GT-MG35SAR",
	"brand": "VESSEL",
	"model": "GT-MG35SAR",
	"mpn": "GT-MG35SAR",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6,
		"typical": 6,
		"max": 6
	},
	"airflowLpm": {
		"min": 285,
		"typical": 285,
		"max": 285
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-vessel-gt-mg35sar.webp",
		"alt": "Repères techniques : VESSEL GT-MG35SAR",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-mg35sar",
		"label": "Référence GT-MG35SAR",
		"distinguishingAttributes": {
			"reference": "GT-MG35SAR",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "35,000 tr/min",
			"Code EDP publié": "310772"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-MG35SAR. Consommation publiée, régime non précisé : 285 L/min à 6 bar. Raccord publié : Rc 1/4. Vitesse à vide : 35,000 tr/min.",
		"verifiedFacts": [
			"Raccord publié : Rc 1/4.",
			"Vitesse à vide : 35,000 tr/min.",
			"Code EDP publié : 310772."
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
				"october-vessel-air-p34"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "35,000 tr/min",
			"evidenceIds": [
				"october-vessel-air-p34"
			]
		},
		{
			"label": "Code EDP publié",
			"value": "310772",
			"evidenceIds": [
				"october-vessel-air-p34"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "VESSEL, catalogue Air Tools, page 34",
			"evidenceIds": [
				"october-vessel-air-p34"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.6MPa",
			"evidenceIds": [
				"october-vessel-air-p34"
			]
		}
	],
	"evidence": [
		{
			"id": "october-vessel-air-p34",
			"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf#page=34",
			"sourceLabel": "VESSEL, catalogue Air Tools, page 34",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 16761fb825c735f6ebff0614f708d44f28eb21392b11568d7224019e2dc296d0. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-vessel-air-p34"
		],
		"workingPressureBar": [
			"october-vessel-air-p34"
		],
		"airflowLpm": [
			"october-vessel-air-p34"
		],
		"airflowBasis": [
			"october-vessel-air-p34"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 285 L/min à 6 bar."
	]
};

export default product;
