const product = {
	"id": "cle-a-cliquet-vessel-gt-r10",
	"slug": "cle-a-cliquet-vessel-gt-r10",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "VESSEL GT-R10",
	"brand": "VESSEL",
	"model": "GT-R10",
	"mpn": "GT-R10",
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
		"src": "/images/products/cle-a-cliquet-vessel-gt-r10.webp",
		"alt": "Repères techniques : VESSEL GT-R10",
		"sourceUrl": "https://www.vessel.co.jp/userfiles/airtools/air-tools_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "vessel-gt-r10",
		"label": "Référence GT-R10",
		"distinguishingAttributes": {
			"reference": "GT-R10",
			"Raccord publié": "Rc 1/4",
			"Vitesse à vide": "160 tr/min",
			"Code EDP publié": "339001"
		}
	},
	"editorial": {
		"overview": "VESSEL GT-R10. Consommation publiée, régime non précisé : 400 L/min à 6 bar. Raccord publié : Rc 1/4. Vitesse à vide : 160 tr/min.",
		"verifiedFacts": [
			"Raccord publié : Rc 1/4.",
			"Vitesse à vide : 160 tr/min.",
			"Code EDP publié : 339001."
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
			"value": "160 tr/min",
			"evidenceIds": [
				"october-vessel-air-p27"
			]
		},
		{
			"label": "Code EDP publié",
			"value": "339001",
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
		"Consommation publiée, régime non précisé : 400 L/min à 6 bar."
	]
};

export default product;
