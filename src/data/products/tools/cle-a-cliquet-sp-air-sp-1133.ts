const product = {
	"id": "cle-a-cliquet-sp-air-sp-1133",
	"slug": "cle-a-cliquet-sp-air-sp-1133",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "SP AIR SP-1133",
	"brand": "SP AIR",
	"model": "SP-1133",
	"mpn": "SP-1133",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 200,
		"typical": 200,
		"max": 200
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-sp-air-sp-1133.webp",
		"alt": "Repères techniques : SP AIR SP-1133",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-1133",
		"label": "Référence SP-1133",
		"distinguishingAttributes": {
			"reference": "SP-1133",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "1.2 kg",
			"Longueur hors tout": "254 mm"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-1133. Consommation publiée, régime non précisé : 200 L/min à 6,2 bar. Raccord publié : 1/4\"NPT. Masse publiée : 1.2 kg.",
		"verifiedFacts": [
			"Raccord publié : 1/4\"NPT.",
			"Masse publiée : 1.2 kg.",
			"Longueur hors tout : 254 mm.",
			"Vitesse à vide : 160 tr/min."
		],
		"limitations": [
			"Régime de consommation non précisé : aucun maximum supposé ; le verdict reste insufficient_data.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Raccord publié",
			"value": "1/4\"NPT",
			"evidenceIds": [
				"october-sp-air-p5"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.2 kg",
			"evidenceIds": [
				"october-sp-air-p5"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "254 mm",
			"evidenceIds": [
				"october-sp-air-p5"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "160 tr/min",
			"evidenceIds": [
				"october-sp-air-p5"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "SP AIR, catalogue Air Tools, page 5",
			"evidenceIds": [
				"october-sp-air-p5"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.62 MPa",
			"evidenceIds": [
				"october-sp-air-p5"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p5",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=5",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p5"
		],
		"workingPressureBar": [
			"october-sp-air-p5"
		],
		"airflowLpm": [
			"october-sp-air-p5"
		],
		"airflowBasis": [
			"october-sp-air-p5"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 200 L/min à 6,2 bar."
	]
};

export default product;
