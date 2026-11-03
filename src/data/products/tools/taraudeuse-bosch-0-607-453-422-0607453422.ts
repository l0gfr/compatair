import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "taraudeuse-bosch-0-607-453-422-0607453422",
	"slug": "taraudeuse-bosch-0-607-453-422-0607453422",
	"categoryId": "taraudeuse",
	"category": "taraudeuse",
	"label": "Bosch 0 607 453 422 (réf. 0607453422)",
	"brand": "Bosch",
	"model": "0 607 453 422",
	"mpn": "0607453422",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 450,
		"typical": 450,
		"max": 450
	},
	"airflowBasis": "free-speed",
	"confidence": "B",
	"image": {
		"src": "/images/products/taraudeuse-bosch-0-607-453-422-0607453422.webp",
		"alt": "Repères techniques : Bosch 0 607 453 422 (réf. 0607453422)",
		"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "bosch-0-607-453-422",
		"label": "Référence 0607453422",
		"distinguishingAttributes": {
			"reference": "0607453422",
			"Vitesse à vide": "1500 tr/min",
			"Masse": "1.1 kg"
		}
	},
	"editorial": {
		"overview": "Bosch 0 607 453 422. La 0 607 453 422 est la taraudeuse sans mandrin, jusqu’à 4 mm et 1,2–4,5 Nm à 1 500 tr/min. La 421 va jusqu’à 5 mm, 1,2–5,5 Nm et 950 tr/min. La mention maximum du débit concerne explicitement le régime à vide ; elle ne permet pas un verdict en charge.",
		"verifiedFacts": [
			"Type : Taraudeuse à embrayage, sans mandrin.",
			"Diamètre de filetage et goujon : Jusqu’à 4 mm.",
			"Couple de serrage : 1,2–4,5 Nm.",
			"Vitesse à vide : 1 500 tr/min.",
			"Débit maximal explicitement à vide : 7,5 L/s (450 L/min)."
		],
		"limitations": [
			"Performances déclarées sous le protocole du catalogue : pression dynamique 6,3 bar, flexible de 4 m. Les régimes à vide/en charge restent distincts.",
			"Catalogue historique ; équipement et disponibilité actuels à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "Taraudeuse à embrayage, sans mandrin",
			"evidenceIds": [
				"taraudeuse-bosch-0-607-453-422-0607453422-reserved-20261103-1"
			]
		},
		{
			"label": "Diamètre de filetage et goujon",
			"value": "Jusqu’à 4 mm",
			"evidenceIds": [
				"taraudeuse-bosch-0-607-453-422-0607453422-reserved-20261103-1"
			]
		},
		{
			"label": "Couple de serrage",
			"value": "1,2–4,5 Nm",
			"evidenceIds": [
				"taraudeuse-bosch-0-607-453-422-0607453422-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1 500 tr/min",
			"evidenceIds": [
				"taraudeuse-bosch-0-607-453-422-0607453422-reserved-20261103-1"
			]
		},
		{
			"label": "Débit maximal explicitement à vide",
			"value": "7,5 L/s (450 L/min)",
			"evidenceIds": [
				"taraudeuse-bosch-0-607-453-422-0607453422-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-bosch-industry-p74",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf#page=74",
			"sourceLabel": "Bosch, Industrial air tools catalogue, page 74",
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
		},
		{
			"id": "taraudeuse-bosch-0-607-453-422-0607453422-reserved-20261103-1",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf#page=74",
			"sourceLabel": "Bosch : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 54586613160c46c045dd75ba02ebb5b2962a5dbb09c773f0902d4d8b10d41eab. La 0 607 453 422 est la taraudeuse sans mandrin, jusqu’à 4 mm et 1,2–4,5 Nm à 1 500 tr/min. La 421 va jusqu’à 5 mm, 1,2–5,5 Nm et 950 tr/min. La mention maximum du débit concerne explicitement le régime à vide ; elle ne permet pas un verdict en charge."
		},
		{
			"id": "taraudeuse-bosch-0-607-453-422-0607453422-reserved-20261103-1-3",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf#page=75",
			"sourceLabel": "Bosch : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 54586613160c46c045dd75ba02ebb5b2962a5dbb09c773f0902d4d8b10d41eab. La 0 607 453 422 est la taraudeuse sans mandrin, jusqu’à 4 mm et 1,2–4,5 Nm à 1 500 tr/min. La 421 va jusqu’à 5 mm, 1,2–5,5 Nm et 950 tr/min. La mention maximum du débit concerne explicitement le régime à vide ; elle ne permet pas un verdict en charge."
		},
		{
			"id": "taraudeuse-bosch-0-607-453-422-0607453422-reserved-20261103-1-4",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf#page=4",
			"sourceLabel": "Bosch : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 54586613160c46c045dd75ba02ebb5b2962a5dbb09c773f0902d4d8b10d41eab. La 0 607 453 422 est la taraudeuse sans mandrin, jusqu’à 4 mm et 1,2–4,5 Nm à 1 500 tr/min. La 421 va jusqu’à 5 mm, 1,2–5,5 Nm et 950 tr/min. La mention maximum du débit concerne explicitement le régime à vide ; elle ne permet pas un verdict en charge."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-bosch-industry-p74"
		],
		"workingPressureBar": [
			"october-bosch-industry-p4"
		],
		"airflowLpm": [
			"october-bosch-industry-p74"
		],
		"airflowBasis": [
			"october-bosch-industry-p74"
		],
		"editorial": [
			"taraudeuse-bosch-0-607-453-422-0607453422-reserved-20261103-1"
		],
		"specifications": [
			"taraudeuse-bosch-0-607-453-422-0607453422-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation à vide : 450 L/min à 6,3 bar."
	]
};

export default product;
