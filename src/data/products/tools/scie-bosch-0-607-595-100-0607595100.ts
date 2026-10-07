import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-bosch-0-607-595-100-0607595100",
	"slug": "scie-bosch-0-607-595-100-0607595100",
	"categoryId": "scie",
	"category": "scie",
	"label": "Bosch 0 607 595 100 (réf. 0607595100)",
	"brand": "Bosch",
	"model": "0 607 595 100",
	"mpn": "0607595100",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 330,
		"typical": 330,
		"max": 330
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-bosch-0-607-595-100-0607595100.webp",
		"alt": "Repères techniques : Bosch 0 607 595 100 (réf. 0607595100)",
		"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "bosch-0-607-595-100",
		"label": "Référence 0607595100",
		"distinguishingAttributes": {
			"reference": "0607595100",
			"Masse": "1.2 kg",
			"Filetage de raccordement": "G 1/4\""
		}
	},
	"editorial": {
		"overview": "Bosch 0 607 595 100 (réf. 0607595100). Consommation en charge : 330 L/min à 6,3 bar. Masse : 1.2 kg. Filetage de raccordement : G 1/4\".",
		"verifiedFacts": [
			"Masse : 1.2 kg.",
			"Filetage de raccordement : G 1/4\"."
		],
		"limitations": [
			"Dimensionnement à la consommation publiée, sans réduction par un cycle d’utilisation supposé.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Masse",
			"value": "1.2 kg",
			"evidenceIds": [
				"october-bosch-industry-p98"
			]
		},
		{
			"label": "Filetage de raccordement",
			"value": "G 1/4\"",
			"evidenceIds": [
				"october-bosch-industry-p98"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Bosch, Industrial air tools catalogue, page 98 ; tableau réparti sur les pages 98–99",
			"evidenceIds": [
				"october-bosch-industry-p98"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All of the performance data / specifications in this catalogue refer to 6.3 bar (91 PSI) flow pressure with 4 m hose length.",
			"evidenceIds": [
				"october-bosch-industry-p98",
				"october-bosch-industry-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october-bosch-industry-p98",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf#page=98",
			"sourceLabel": "Bosch, Industrial air tools catalogue, page 98",
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
			"october-bosch-industry-p98"
		],
		"workingPressureBar": [
			"october-bosch-industry-p4"
		],
		"airflowLpm": [
			"october-bosch-industry-p98"
		]
	},
	"notes": [
		"Consommation en charge : 330 L/min à 6,3 bar."
	]
};

export default product;
