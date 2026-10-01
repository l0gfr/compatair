const product = {
	"id": "ponceuse-orbitale-sp-air-sp-3800-a5m",
	"slug": "ponceuse-orbitale-sp-air-sp-3800-a5m",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "SP AIR SP-3800-A5M",
	"brand": "SP AIR",
	"model": "SP-3800-A5M",
	"mpn": "SP-3800-A5M",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 300,
		"typical": 300,
		"max": 300
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-sp-air-sp-3800-a5m.webp",
		"alt": "Repères techniques : SP AIR SP-3800-A5M",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-3800-a5m",
		"label": "Référence SP-3800-A5M",
		"distinguishingAttributes": {
			"reference": "SP-3800-A5M",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "1.57 kg"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-3800-A5M. Consommation publiée, régime non précisé : 300 L/min à 6,2 bar. Raccord publié : 1/4\"NPT. Masse publiée : 1.57 kg.",
		"verifiedFacts": [
			"Raccord publié : 1/4\"NPT.",
			"Masse publiée : 1.57 kg."
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
				"october-sp-air-p15"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.57 kg",
			"evidenceIds": [
				"october-sp-air-p15"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "SP AIR, catalogue Air Tools, page 15",
			"evidenceIds": [
				"october-sp-air-p15"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.62 MPa",
			"evidenceIds": [
				"october-sp-air-p15"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p15",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=15",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 15",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p15"
		],
		"workingPressureBar": [
			"october-sp-air-p15"
		],
		"airflowLpm": [
			"october-sp-air-p15"
		],
		"airflowBasis": [
			"october-sp-air-p15"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 300 L/min à 6,2 bar."
	]
};

export default product;
