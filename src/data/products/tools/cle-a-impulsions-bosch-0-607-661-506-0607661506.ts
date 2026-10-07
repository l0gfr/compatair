import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-bosch-0-607-661-506-0607661506",
	"slug": "cle-a-impulsions-bosch-0-607-661-506-0607661506",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Bosch 0 607 661 506 (réf. 0607661506)",
	"brand": "Bosch",
	"model": "0 607 661 506",
	"mpn": "0607661506",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 540,
		"typical": 540,
		"max": 540
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-bosch-0-607-661-506-0607661506.webp",
		"alt": "Repères techniques : Bosch 0 607 661 506 (réf. 0607661506)",
		"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "bosch-0-607-661-506",
		"label": "Référence 0607661506",
		"distinguishingAttributes": {
			"reference": "0607661506",
			"Vitesse à vide": "4500 tr/min",
			"Masse": "1.1 kg"
		}
	},
	"editorial": {
		"overview": "Bosch 0 607 661 506 (réf. 0607661506). Consommation en charge : 540 L/min à 6,3 bar. Vitesse à vide : 4500 tr/min. Masse : 1.1 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 4500 tr/min.",
			"Masse : 1.1 kg."
		],
		"limitations": [
			"Dimensionnement à la consommation publiée, sans réduction par un cycle d’utilisation supposé.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "4500 tr/min",
			"evidenceIds": [
				"october-bosch-industry-p66"
			]
		},
		{
			"label": "Masse",
			"value": "1.1 kg",
			"evidenceIds": [
				"october-bosch-industry-p66"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Bosch, Industrial air tools catalogue, page 66 ; tableau réparti sur les pages 66–67",
			"evidenceIds": [
				"october-bosch-industry-p66"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All of the performance data / specifications in this catalogue refer to 6.3 bar (91 PSI) flow pressure with 4 m hose length.",
			"evidenceIds": [
				"october-bosch-industry-p66",
				"october-bosch-industry-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october-bosch-industry-p66",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf#page=66",
			"sourceLabel": "Bosch, Industrial air tools catalogue, page 66",
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
			"october-bosch-industry-p66"
		],
		"workingPressureBar": [
			"october-bosch-industry-p4"
		],
		"airflowLpm": [
			"october-bosch-industry-p66"
		]
	},
	"notes": [
		"Consommation en charge : 540 L/min à 6,3 bar."
	]
};

export default product;
