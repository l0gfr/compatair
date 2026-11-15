import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-bosch-0-607-661-509-0607661509",
	"slug": "cle-a-impulsions-bosch-0-607-661-509-0607661509",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Bosch 0 607 661 509 (réf. 0607661509)",
	"brand": "Bosch",
	"model": "0 607 661 509",
	"mpn": "0607661509",
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
		"src": "/images/products/cle-a-impulsions-bosch-0-607-661-509-0607661509-technical-20261115-followup.svg",
		"alt": "Repères techniques : Bosch 0 607 661 509 (réf. 0607661509)",
		"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"variant": {
		"familyId": "bosch-0-607-661-509",
		"label": "Référence 0607661509",
		"distinguishingAttributes": {
			"reference": "0607661509",
			"Vitesse à vide": "4000 tr/min",
			"Masse": "1.1 kg"
		}
	},
	"editorial": {
		"overview": "Bosch 0 607 661 509 : outil à impulsions avec arrêt automatique et carré 3/8 pouce. Le tableau publie 8–18 Nm pour assemblage dur à 30° et 5–15 Nm pour assemblage tendre à 720°. Les 505/506 couvrent 13–35 et 12–29 Nm ; la 506 utilise un mandrin rapide 1/4 pouce. Les 8 L/s de la 509 sont mesurés en charge sous les conditions du catalogue, 6,3 bar dynamiques et flexible de 4 m.",
		"verifiedFacts": [
			"Vitesse à vide : 4000 tr/min.",
			"Masse : 1.1 kg.",
			"Sortie : Carré 3/8 pouce.",
			"Couple, assemblage dur à 30° : 8–18 Nm.",
			"Couple, assemblage tendre à 720° : 5–15 Nm.",
			"Débit en charge : 8 L/s (480 L/min)."
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
		},
		{
			"label": "Sortie",
			"value": "Carré 3/8 pouce",
			"evidenceIds": [
				"review:2026-11-12-technical:cle-a-impulsions-bosch-0-607-661-509-0607661509:0"
			]
		},
		{
			"label": "Couple, assemblage dur à 30°",
			"value": "8–18 Nm",
			"evidenceIds": [
				"review:2026-11-12-technical:cle-a-impulsions-bosch-0-607-661-509-0607661509:0"
			]
		},
		{
			"label": "Couple, assemblage tendre à 720°",
			"value": "5–15 Nm",
			"evidenceIds": [
				"review:2026-11-12-technical:cle-a-impulsions-bosch-0-607-661-509-0607661509:0"
			]
		},
		{
			"label": "Débit en charge",
			"value": "8 L/s (480 L/min)",
			"evidenceIds": [
				"review:2026-11-12-technical:cle-a-impulsions-bosch-0-607-661-509-0607661509:0"
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
			"id": "review:2026-11-12-technical:cle-a-impulsions-bosch-0-607-661-509-0607661509:0",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf",
			"sourceLabel": "Bosch, document fabricant, pages PDF 4, 66, 67",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "Bosch 0 607 661 509 : outil à impulsions avec arrêt automatique et carré 3/8 pouce. Le tableau publie 8–18 Nm pour assemblage dur à 30° et 5–15 Nm pour assemblage tendre à 720°. Les 505/506 couvrent 13–35 et 12–29 Nm ; la 506 utilise un mandrin rapide 1/4 pouce. Les 8 L/s de la 509 sont mesurés en charge sous les conditions du catalogue, 6,3 bar dynamiques et flexible de 4 m. GET complet : SHA-256 54586613160c46c045dd75ba02ebb5b2962a5dbb09c773f0902d4d8b10d41eab. Historique conservé."
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
