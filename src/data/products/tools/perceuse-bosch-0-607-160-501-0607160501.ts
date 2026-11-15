import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-bosch-0-607-160-501-0607160501",
	"slug": "perceuse-bosch-0-607-160-501-0607160501",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Bosch 0 607 160 501 (réf. 0607160501)",
	"brand": "Bosch",
	"model": "0 607 160 501",
	"mpn": "0607160501",
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
		"src": "/images/products/perceuse-bosch-0-607-160-501-0607160501-technical-20261115-followup.svg",
		"alt": "Repères techniques : Bosch 0 607 160 501 (réf. 0607160501)",
		"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"variant": {
		"familyId": "bosch-0-607-160-501",
		"label": "Référence 0607160501",
		"distinguishingAttributes": {
			"reference": "0607160501",
			"Vitesse à vide": "2800 tr/min",
			"Masse": "0.8 kg"
		}
	},
	"editorial": {
		"overview": "Bosch 0 607 160 501 : perceuse 320 W à mandrin à clé, capacité publiée de 6 mm dans l’acier, rotation à droite et 2 800 tr/min à vide. La 502 utilise un mandrin sans clé avec la même capacité ; la 504 à mandrin à clé couvre 10 mm à 850 tr/min. Les 8,5 L/s en charge restent associés aux conditions 6,3 bar dynamiques et flexible de 4 m.",
		"verifiedFacts": [
			"Vitesse à vide : 2800 tr/min.",
			"Masse : 0.8 kg.",
			"Mandrin : À clé.",
			"Capacité dans l’acier : 6 mm.",
			"Puissance : 320 W.",
			"Rotation : À droite.",
			"Débit en charge : 8,5 L/s (510 L/min)."
		],
		"limitations": [
			"Dimensionnement à la consommation publiée, sans réduction par un cycle d’utilisation supposé.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "2800 tr/min",
			"evidenceIds": [
				"october-bosch-industry-p16"
			]
		},
		{
			"label": "Masse",
			"value": "0.8 kg",
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
		},
		{
			"label": "Mandrin",
			"value": "À clé",
			"evidenceIds": [
				"review:2026-11-12-technical:perceuse-bosch-0-607-160-501-0607160501:0"
			]
		},
		{
			"label": "Capacité dans l’acier",
			"value": "6 mm",
			"evidenceIds": [
				"review:2026-11-12-technical:perceuse-bosch-0-607-160-501-0607160501:0"
			]
		},
		{
			"label": "Puissance",
			"value": "320 W",
			"evidenceIds": [
				"review:2026-11-12-technical:perceuse-bosch-0-607-160-501-0607160501:0"
			]
		},
		{
			"label": "Rotation",
			"value": "À droite",
			"evidenceIds": [
				"review:2026-11-12-technical:perceuse-bosch-0-607-160-501-0607160501:0"
			]
		},
		{
			"label": "Débit en charge",
			"value": "8,5 L/s (510 L/min)",
			"evidenceIds": [
				"review:2026-11-12-technical:perceuse-bosch-0-607-160-501-0607160501:0"
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
		},
		{
			"id": "review:2026-11-12-technical:perceuse-bosch-0-607-160-501-0607160501:0",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf",
			"sourceLabel": "Bosch, document fabricant, pages PDF 4, 16, 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "Bosch 0 607 160 501 : perceuse 320 W à mandrin à clé, capacité publiée de 6 mm dans l’acier, rotation à droite et 2 800 tr/min à vide. La 502 utilise un mandrin sans clé avec la même capacité ; la 504 à mandrin à clé couvre 10 mm à 850 tr/min. Les 8,5 L/s en charge restent associés aux conditions 6,3 bar dynamiques et flexible de 4 m. GET complet : SHA-256 54586613160c46c045dd75ba02ebb5b2962a5dbb09c773f0902d4d8b10d41eab. Historique conservé."
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
