import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-bosch-0-607-160-505-0607160505",
	"slug": "perceuse-bosch-0-607-160-505-0607160505",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Bosch 0 607 160 505 (réf. 0607160505)",
	"brand": "Bosch",
	"model": "0 607 160 505",
	"mpn": "0607160505",
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
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-bosch-0-607-160-505-0607160505.webp",
		"alt": "Repères techniques : Bosch 0 607 160 505 (réf. 0607160505)",
		"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "bosch-0-607-160-505",
		"label": "Référence 0607160505",
		"distinguishingAttributes": {
			"reference": "0607160505",
			"Vitesse à vide": "850 tr/min",
			"Masse": "0.9 kg"
		}
	},
	"editorial": {
		"overview": "Bosch 0 607 160 505 (réf. 0607160505). Consommation en charge : 510 L/min à 6,3 bar. Vitesse à vide : 850 tr/min. Masse : 0.9 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 850 tr/min.",
			"Masse : 0.9 kg."
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
				"october-bosch-industry-p16"
			]
		},
		{
			"label": "Masse",
			"value": "0.9 kg",
			"evidenceIds": [
				"october-bosch-industry-p16"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Bosch, Industrial air tools catalogue, page 16 ; tableau réparti sur les pages 16–17",
			"evidenceIds": [
				"october-bosch-industry-p16"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All of the performance data / specifications in this catalogue refer to 6.3 bar (91 PSI) flow pressure with 4 m hose length.",
			"evidenceIds": [
				"october-bosch-industry-p16",
				"october-bosch-industry-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october-bosch-industry-p16",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf#page=16",
			"sourceLabel": "Bosch, Industrial air tools catalogue, page 16",
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
			"october-bosch-industry-p16"
		],
		"workingPressureBar": [
			"october-bosch-industry-p4"
		],
		"airflowLpm": [
			"october-bosch-industry-p16"
		]
	},
	"notes": [
		"Consommation en charge : 510 L/min à 6,3 bar."
	]
};

export default product;
