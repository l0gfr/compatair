import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-bosch-0-607-253-101-0607253101",
	"slug": "meuleuse-bosch-0-607-253-101-0607253101",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Bosch 0 607 253 101 (réf. 0607253101)",
	"brand": "Bosch",
	"model": "0 607 253 101",
	"mpn": "0607253101",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 360,
		"typical": 360,
		"max": 360
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-bosch-0-607-253-101-0607253101.webp",
		"alt": "Repères techniques : Bosch 0 607 253 101 (réf. 0607253101)",
		"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "bosch-0-607-253-101",
		"label": "Référence 0607253101",
		"distinguishingAttributes": {
			"reference": "0607253101",
			"Vitesse à vide": "33000 tr/min",
			"Masse": "0.7 kg"
		}
	},
	"editorial": {
		"overview": "Bosch 0 607 253 101 (réf. 0607253101). Consommation en charge : 360 L/min à 6,3 bar. Vitesse à vide : 33000 tr/min. Masse : 0.7 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 33000 tr/min.",
			"Masse : 0.7 kg."
		],
		"limitations": [
			"Dimensionnement à la consommation publiée, sans réduction par un cycle d’utilisation supposé.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "33000 tr/min",
			"evidenceIds": [
				"october-bosch-industry-p28"
			]
		},
		{
			"label": "Masse",
			"value": "0.7 kg",
			"evidenceIds": [
				"october-bosch-industry-p28"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Bosch, Industrial air tools catalogue, page 28 ; tableau réparti sur les pages 28–29",
			"evidenceIds": [
				"october-bosch-industry-p28"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All of the performance data / specifications in this catalogue refer to 6.3 bar (91 PSI) flow pressure with 4 m hose length.",
			"evidenceIds": [
				"october-bosch-industry-p28",
				"october-bosch-industry-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october-bosch-industry-p28",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf#page=28",
			"sourceLabel": "Bosch, Industrial air tools catalogue, page 28",
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
			"october-bosch-industry-p28"
		],
		"workingPressureBar": [
			"october-bosch-industry-p4"
		],
		"airflowLpm": [
			"october-bosch-industry-p28"
		]
	},
	"notes": [
		"Consommation en charge : 360 L/min à 6,3 bar."
	]
};

export default product;
