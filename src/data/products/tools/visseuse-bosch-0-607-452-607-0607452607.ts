const product = {
	"id": "visseuse-bosch-0-607-452-607-0607452607",
	"slug": "visseuse-bosch-0-607-452-607-0607452607",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Bosch 0 607 452 607 (réf. 0607452607)",
	"brand": "Bosch",
	"model": "0 607 452 607",
	"mpn": "0607452607",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1320,
		"typical": 1320,
		"max": 1320
	},
	"airflowBasis": "free-speed",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-bosch-0-607-452-607-0607452607.webp",
		"alt": "Repères techniques : Bosch 0 607 452 607 (réf. 0607452607)",
		"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "bosch-0-607-452-607",
		"label": "Référence 0607452607",
		"distinguishingAttributes": {
			"reference": "0607452607",
			"Vitesse à vide": "320 tr/min",
			"Masse": "1.8 kg"
		}
	},
	"editorial": {
		"overview": "Bosch 0 607 452 607 (réf. 0607452607). Consommation à vide : 1 320 L/min à 6,3 bar. Vitesse à vide : 320 tr/min. Masse : 1.8 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 320 tr/min.",
			"Masse : 1.8 kg."
		],
		"limitations": [
			"Consommation à vide seule : aucun maximum ou débit en charge supposé ; le verdict reste insufficient_data.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "320 tr/min",
			"evidenceIds": [
				"october-bosch-industry-p64"
			]
		},
		{
			"label": "Masse",
			"value": "1.8 kg",
			"evidenceIds": [
				"october-bosch-industry-p64"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Bosch, Industrial air tools catalogue, page 64 ; tableau réparti sur les pages 64–65",
			"evidenceIds": [
				"october-bosch-industry-p64"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All of the performance data / specifications in this catalogue refer to 6.3 bar (91 PSI) flow pressure with 4 m hose length.",
			"evidenceIds": [
				"october-bosch-industry-p64",
				"october-bosch-industry-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october-bosch-industry-p64",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf#page=64",
			"sourceLabel": "Bosch, Industrial air tools catalogue, page 64",
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
			"october-bosch-industry-p64"
		],
		"workingPressureBar": [
			"october-bosch-industry-p4"
		],
		"airflowLpm": [
			"october-bosch-industry-p64"
		],
		"airflowBasis": [
			"october-bosch-industry-p64"
		]
	},
	"notes": [
		"Consommation à vide : 1 320 L/min à 6,3 bar."
	]
};

export default product;
