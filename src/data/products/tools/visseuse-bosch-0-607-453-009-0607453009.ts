import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-bosch-0-607-453-009-0607453009",
	"slug": "visseuse-bosch-0-607-453-009-0607453009",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Bosch 0 607 453 009 (réf. 0607453009)",
	"brand": "Bosch",
	"model": "0 607 453 009",
	"mpn": "0607453009",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 390,
		"typical": 390,
		"max": 390
	},
	"airflowBasis": "free-speed",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-bosch-0-607-453-009-0607453009.webp",
		"alt": "Repères techniques : Bosch 0 607 453 009 (réf. 0607453009)",
		"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "bosch-0-607-453-009",
		"label": "Référence 0607453009",
		"distinguishingAttributes": {
			"reference": "0607453009",
			"Vitesse à vide": "950 tr/min",
			"Masse": "0.9 kg"
		}
	},
	"editorial": {
		"overview": "Bosch 0 607 453 009 (réf. 0607453009). Consommation à vide : 390 L/min à 6,3 bar. Vitesse à vide : 950 tr/min. Masse : 0.9 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 950 tr/min.",
			"Masse : 0.9 kg."
		],
		"limitations": [
			"Consommation à vide seule : aucun maximum ou débit en charge supposé ; le verdict reste insufficient_data.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "950 tr/min",
			"evidenceIds": [
				"october-bosch-industry-p54"
			]
		},
		{
			"label": "Masse",
			"value": "0.9 kg",
			"evidenceIds": [
				"october-bosch-industry-p54"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Bosch, Industrial air tools catalogue, page 54 ; tableau réparti sur les pages 54–55",
			"evidenceIds": [
				"october-bosch-industry-p54"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All of the performance data / specifications in this catalogue refer to 6.3 bar (91 PSI) flow pressure with 4 m hose length.",
			"evidenceIds": [
				"october-bosch-industry-p54",
				"october-bosch-industry-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october-bosch-industry-p54",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf#page=54",
			"sourceLabel": "Bosch, Industrial air tools catalogue, page 54",
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
			"october-bosch-industry-p54"
		],
		"workingPressureBar": [
			"october-bosch-industry-p4"
		],
		"airflowLpm": [
			"october-bosch-industry-p54"
		],
		"airflowBasis": [
			"october-bosch-industry-p54"
		]
	},
	"notes": [
		"Consommation à vide : 390 L/min à 6,3 bar."
	]
};

export default product;
