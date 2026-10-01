const product = {
	"id": "cle-a-chocs-sp-air-sp-390dx",
	"slug": "cle-a-chocs-sp-air-sp-390dx",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "SP AIR SP-390DX",
	"brand": "SP AIR",
	"model": "SP-390DX",
	"mpn": "SP-390DX",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1000,
		"typical": 1000,
		"max": 1000
	},
	"airflowBasis": "unqualified",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-sp-air-sp-390dx.webp",
		"alt": "Repères techniques : SP AIR SP-390DX",
		"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sp-air-sp-390dx",
		"label": "Référence SP-390DX",
		"distinguishingAttributes": {
			"reference": "SP-390DX",
			"Raccord publié": "3/8\"NPT",
			"Masse publiée": "7.1 kg",
			"Longueur hors tout": "470 mm"
		}
	},
	"editorial": {
		"overview": "SP AIR SP-390DX. Consommation publiée, régime non précisé : 1 000 L/min à 6,2 bar. Raccord publié : 3/8\"NPT. Masse publiée : 7.1 kg.",
		"verifiedFacts": [
			"Raccord publié : 3/8\"NPT.",
			"Masse publiée : 7.1 kg.",
			"Longueur hors tout : 470 mm.",
			"Vitesse à vide : 4000 tr/min."
		],
		"limitations": [
			"Régime de consommation non précisé : aucun maximum supposé ; le verdict reste insufficient_data.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Raccord publié",
			"value": "3/8\"NPT",
			"evidenceIds": [
				"october-sp-air-p11"
			]
		},
		{
			"label": "Masse publiée",
			"value": "7.1 kg",
			"evidenceIds": [
				"october-sp-air-p11"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "470 mm",
			"evidenceIds": [
				"october-sp-air-p11"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4000 tr/min",
			"evidenceIds": [
				"october-sp-air-p11"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "SP AIR, catalogue Air Tools, page 11",
			"evidenceIds": [
				"october-sp-air-p11"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "Air pressure: 0.62 MPa",
			"evidenceIds": [
				"october-sp-air-p11"
			]
		}
	],
	"evidence": [
		{
			"id": "october-sp-air-p11",
			"sourceUrl": "https://spair.vessel.co.jp/download/SP_catalog_all_E.pdf#page=11",
			"sourceLabel": "SP AIR, catalogue Air Tools, page 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 85aa3c367832416b252ecf5c0bc354487a760e41de3e8a2e9cf0090670d16ba5. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-sp-air-p11"
		],
		"workingPressureBar": [
			"october-sp-air-p11"
		],
		"airflowLpm": [
			"october-sp-air-p11"
		],
		"airflowBasis": [
			"october-sp-air-p11"
		]
	},
	"notes": [
		"Consommation publiée, régime non précisé : 1 000 L/min à 6,2 bar."
	]
};

export default product;
