import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-bosch-0-607-661-510-0607661510",
	"slug": "cle-a-impulsions-bosch-0-607-661-510-0607661510",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Bosch 0 607 661 510 (réf. 0607661510)",
	"brand": "Bosch",
	"model": "0 607 661 510",
	"mpn": "0607661510",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 480,
		"typical": 480,
		"max": 480
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-bosch-0-607-661-510-0607661510-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Bosch 0 607 661 510 (réf. 0607661510)",
		"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "bosch-0-607-661-510",
		"label": "Référence 0607661510",
		"distinguishingAttributes": {
			"reference": "0607661510",
			"Vitesse à vide": "4000 tr/min",
			"Masse": "1.2 kg"
		}
	},
	"editorial": {
		"overview": "La 0 607 661 510 est une visseuse à impulsions avec arrêt et mandrin rapide 1/4 pouce QRC. Elle vise 8–18 Nm sur assemblage dur et 5–15 Nm sur assemblage souple, à 4 000 tr/min. La 509 utilise un carré 3/8 ; les 505 et 506 couvrent 13–35 Nm sur assemblage dur. Les 8 L/s en charge sont donnés à 6,3 bar et quatre mètres de tuyau, soit 480 L/min pour le moteur.",
		"verifiedFacts": [
			"Vitesse à vide : 4000 tr/min.",
			"Masse : 1.2 kg."
		],
		"limitations": [
			"Dimensionnement à la consommation publiée, sans réduction par un cycle d’utilisation supposé.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "4000 tr/min",
			"evidenceIds": [
				"october-bosch-industry-p66"
			]
		},
		{
			"label": "Masse",
			"value": "1.2 kg",
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
		},
		{
			"id": "review:2026-11-16-reviews:cle-a-impulsions-bosch-0-607-661-510-0607661510:0",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf",
			"sourceLabel": "Bosch, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La 0 607 661 510 est une visseuse à impulsions avec arrêt et mandrin rapide 1/4 pouce QRC. Elle vise 8–18 Nm sur assemblage dur et 5–15 Nm sur assemblage souple, à 4 000 tr/min. La 509 utilise un carré 3/8 ; les 505 et 506 couvrent 13–35 Nm sur assemblage dur. Les 8 L/s en charge sont donnés à 6,3 bar et quatre mètres de tuyau, soit 480 L/min pour le moteur. GET complet SHA-256 54586613160c46c045dd75ba02ebb5b2962a5dbb09c773f0902d4d8b10d41eab. Pages PDF lues : 66, 4."
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
		"Consommation en charge : 480 L/min à 6,3 bar."
	]
};

export default product;
