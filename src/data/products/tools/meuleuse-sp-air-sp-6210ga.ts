const product = {
	"id": "meuleuse-sp-air-sp-6210ga",
	"slug": "meuleuse-sp-air-sp-6210ga",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "SP AIR SP-6210GA",
	"brand": "SP AIR",
	"model": "SP-6210GA",
	"mpn": "SP-6210GA",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 250,
		"typical": 250,
		"max": 250
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-sp-air-sp-6210ga.webp",
		"alt": "Repères techniques : SP AIR SP-6210GA",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-6210ga",
		"label": "Référence SP-6210GA",
		"distinguishingAttributes": {
			"reference": "SP-6210GA",
			"Raccord publié": "1/4\"NPT",
			"Masse publiée": "0.44 kg"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-6210GA. Consommation publiée, régime non précisé : 250 L/min à 6,2 bar. Raccord publié : 1/4\"NPT. Masse publiée : 0.44 kg.",
		"verifiedFacts": [
			"Raccord publié : 1/4\"NPT.",
			"Masse publiée : 0.44 kg."
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
				"october-sp-air-p19"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.44 kg",
			"evidenceIds": [
				"october-sp-air-p19"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "SP AIR, catalogue Air Tools, page 19",
			"evidenceIds": [
				"october-sp-air-p19"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.62 MPa",
			"evidenceIds": [
				"october-sp-air-p19"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p19",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=19",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p19"
		],
		"workingPressureBar": [
			"october-sp-air-p19"
		],
		"airflowLpm": [
			"october-sp-air-p19"
		],
		"airflowBasis": [
			"october-sp-air-p19"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 250 L/min à 6,2 bar."
	]
};

export default product;
