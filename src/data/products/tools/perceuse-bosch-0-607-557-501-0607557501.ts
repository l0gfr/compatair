import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-bosch-0-607-557-501-0607557501",
	"slug": "perceuse-bosch-0-607-557-501-0607557501",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Bosch 0 607 557 501 (réf. 0607557501)",
	"brand": "Bosch",
	"model": "0 607 557 501",
	"mpn": "0607557501",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 960,
		"typical": 960,
		"max": 960
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-bosch-0-607-557-501-0607557501.webp",
		"alt": "Repères techniques : Bosch 0 607 557 501 (réf. 0607557501)",
		"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "bosch-0-607-557-501",
		"label": "Référence 0607557501",
		"distinguishingAttributes": {
			"reference": "0607557501",
			"Vitesse à vide": "850 tr/min",
			"Masse": "2.7 kg"
		}
	},
	"editorial": {
		"overview": "Bosch 0 607 557 501 (réf. 0607557501). Consommation en charge : 960 L/min à 6,3 bar. Vitesse à vide : 850 tr/min. Masse : 2.7 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 850 tr/min.",
			"Masse : 2.7 kg."
		],
		"limitations": [
			"Dimensionnement à la consommation publiée, sans réduction par un cycle d’utilisation supposé.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "850 tr/min",
			"evidenceIds": [
				"october-bosch-industry-p14"
			]
		},
		{
			"label": "Masse",
			"value": "2.7 kg",
			"evidenceIds": [
				"october-bosch-industry-p14"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Bosch, Industrial air tools catalogue, page 14 ; tableau réparti sur les pages 14–15",
			"evidenceIds": [
				"october-bosch-industry-p14"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All of the performance data / specifications in this catalogue refer to 6.3 bar (91 PSI) flow pressure with 4 m hose length.",
			"evidenceIds": [
				"october-bosch-industry-p14",
				"october-bosch-industry-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october-bosch-industry-p14",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf#page=14",
			"sourceLabel": "Bosch, Industrial air tools catalogue, page 14",
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
			"october-bosch-industry-p14"
		],
		"workingPressureBar": [
			"october-bosch-industry-p4"
		],
		"airflowLpm": [
			"october-bosch-industry-p14"
		]
	},
	"notes": [
		"Consommation en charge : 960 L/min à 6,3 bar."
	]
};

export default product;
