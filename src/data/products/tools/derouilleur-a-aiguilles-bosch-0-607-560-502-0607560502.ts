const product = {
	"id": "derouilleur-a-aiguilles-bosch-0-607-560-502-0607560502",
	"slug": "derouilleur-a-aiguilles-bosch-0-607-560-502-0607560502",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "Bosch 0 607 560 502 (réf. 0607560502)",
	"brand": "Bosch",
	"model": "0 607 560 502",
	"mpn": "0607560502",
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
		"src": "/images/products/derouilleur-a-aiguilles-bosch-0-607-560-502-0607560502.webp",
		"alt": "Repères techniques : Bosch 0 607 560 502 (réf. 0607560502)",
		"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "bosch-0-607-560-502",
		"label": "Référence 0607560502",
		"distinguishingAttributes": {
			"reference": "0607560502",
			"Masse": "2 kg",
			"Filetage de raccordement": "G 1/4\""
		}
	},
	"editorial": {
		"overview": "Bosch 0 607 560 502 (réf. 0607560502). Consommation à vide : 510 L/min à 6,3 bar. Masse : 2 kg. Filetage de raccordement : G 1/4\".",
		"verifiedFacts": [
			"Masse : 2 kg.",
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
			"value": "2 kg",
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
