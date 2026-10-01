const product = {
	"id": "burineur-bosch-0-607-560-500-0607560500",
	"slug": "burineur-bosch-0-607-560-500-0607560500",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Bosch 0 607 560 500 (réf. 0607560500)",
	"brand": "Bosch",
	"model": "0 607 560 500",
	"mpn": "0607560500",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 510,
		"typical": 510,
		"max": 510
	},
	"airflowBasis": "free-speed",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-bosch-0-607-560-500-0607560500.webp",
		"alt": "Repères techniques : Bosch 0 607 560 500 (réf. 0607560500)",
		"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "bosch-0-607-560-500",
		"label": "Référence 0607560500",
		"distinguishingAttributes": {
			"reference": "0607560500",
			"Masse": "1 kg",
			"Filetage de raccordement": "G 1/4\""
		}
	},
	"editorial": {
		"overview": "Bosch 0 607 560 500 (réf. 0607560500). Consommation à vide : 510 L/min à 6,3 bar. Masse : 1 kg. Filetage de raccordement : G 1/4\".",
		"verifiedFacts": [
			"Masse : 1 kg.",
			"Filetage de raccordement : G 1/4\"."
		],
		"limitations": [
			"Consommation à vide seule : aucun maximum ou débit en charge supposé ; le verdict reste insufficient_data.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "1 kg",
			"evidenceIds": [
				"october-bosch-industry-p92"
			]
		},
		{
			"label": "Filetage de raccordement",
			"value": "G 1/4\"",
			"evidenceIds": [
				"october-bosch-industry-p92"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Bosch, Industrial air tools catalogue, page 92 ; tableau réparti sur les pages 92–93",
			"evidenceIds": [
				"october-bosch-industry-p92"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All of the performance data / specifications in this catalogue refer to 6.3 bar (91 PSI) flow pressure with 4 m hose length.",
			"evidenceIds": [
				"october-bosch-industry-p92",
				"october-bosch-industry-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october-bosch-industry-p92",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf#page=92",
			"sourceLabel": "Bosch, Industrial air tools catalogue, page 92",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 54586613160c46c045dd75ba02ebb5b2962a5dbb09c773f0902d4d8b10d41eab. Caractéristiques déclarées, sans essai physique CompatAir."
		},
		{
			"id": "october-bosch-industry-p4",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf#page=4",
			"sourceLabel": "Bosch, Industrial air tools catalogue, page 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-09-30",
			"confidence": "B",
			"notes": "SHA-256 54586613160c46c045dd75ba02ebb5b2962a5dbb09c773f0902d4d8b10d41eab. Caractéristiques déclarées, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-bosch-industry-p92"
		],
		"workingPressureBar": [
			"october-bosch-industry-p4"
		],
		"airflowLpm": [
			"october-bosch-industry-p92"
		],
		"airflowBasis": [
			"october-bosch-industry-p92"
		]
	},
	"notes": [
		"Consommation à vide : 510 L/min à 6,3 bar."
	]
};

export default product;
