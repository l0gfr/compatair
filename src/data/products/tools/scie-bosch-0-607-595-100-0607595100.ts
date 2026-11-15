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
		"src": "/images/products/scie-bosch-0-607-595-100-0607595100-technical-20261115-followup.svg",
		"alt": "Repères techniques : Bosch 0 607 595 100 (réf. 0607595100)",
		"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
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
		"overview": "Bosch 0 607 595 100 : découpeuse pour mousse jusqu’à 300 mm, cadence de 3 800 courses/min et puissance de 120 W. Les 561 114/116 sont des scies sauteuses de 400 W, 2 400 courses/min, destinées aux capacités matière de leur tableau propre. Les lames et guides de la découpeuse sont à commander séparément. Sa consommation en charge est de 5,5 L/s sous les conditions générales 6,3 bar et flexible de 4 m.",
		"verifiedFacts": [
			"Masse : 1.2 kg.",
			"Filetage de raccordement : G 1/4\".",
			"Type : Découpeuse pour mousse.",
			"Capacité dans la mousse : Jusqu’à 300 mm.",
			"Cadence : 3 800 courses/min.",
			"Puissance : 120 W.",
			"Accessoires de coupe : Lames et guides à commander séparément.",
			"Débit en charge : 5,5 L/s (330 L/min)."
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
		},
		{
			"label": "Type",
			"value": "Découpeuse pour mousse",
			"evidenceIds": [
				"review:2026-11-12-technical:scie-bosch-0-607-595-100-0607595100:0"
			]
		},
		{
			"label": "Capacité dans la mousse",
			"value": "Jusqu’à 300 mm",
			"evidenceIds": [
				"review:2026-11-12-technical:scie-bosch-0-607-595-100-0607595100:0"
			]
		},
		{
			"label": "Cadence",
			"value": "3 800 courses/min",
			"evidenceIds": [
				"review:2026-11-12-technical:scie-bosch-0-607-595-100-0607595100:0"
			]
		},
		{
			"label": "Puissance",
			"value": "120 W",
			"evidenceIds": [
				"review:2026-11-12-technical:scie-bosch-0-607-595-100-0607595100:0"
			]
		},
		{
			"label": "Accessoires de coupe",
			"value": "Lames et guides à commander séparément",
			"evidenceIds": [
				"review:2026-11-12-technical:scie-bosch-0-607-595-100-0607595100:0"
			]
		},
		{
			"label": "Débit en charge",
			"value": "5,5 L/s (330 L/min)",
			"evidenceIds": [
				"review:2026-11-12-technical:scie-bosch-0-607-595-100-0607595100:0"
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
		},
		{
			"id": "review:2026-11-12-technical:scie-bosch-0-607-595-100-0607595100:0",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf",
			"sourceLabel": "Bosch, document fabricant, pages PDF 4, 98, 99",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "Bosch 0 607 595 100 : découpeuse pour mousse jusqu’à 300 mm, cadence de 3 800 courses/min et puissance de 120 W. Les 561 114/116 sont des scies sauteuses de 400 W, 2 400 courses/min, destinées aux capacités matière de leur tableau propre. Les lames et guides de la découpeuse sont à commander séparément. Sa consommation en charge est de 5,5 L/s sous les conditions générales 6,3 bar et flexible de 4 m. GET complet : SHA-256 54586613160c46c045dd75ba02ebb5b2962a5dbb09c773f0902d4d8b10d41eab. Historique conservé."
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
