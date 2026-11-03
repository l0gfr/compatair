import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-bosch-0-607-451-604-0607451604",
	"slug": "visseuse-bosch-0-607-451-604-0607451604",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Bosch 0 607 451 604 (réf. 0607451604)",
	"brand": "Bosch",
	"model": "0 607 451 604",
	"mpn": "0607451604",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 840,
		"typical": 840,
		"max": 840
	},
	"airflowBasis": "free-speed",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-bosch-0-607-451-604-0607451604.webp",
		"alt": "Repères techniques : Bosch 0 607 451 604 (réf. 0607451604)",
		"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "bosch-0-607-451-604",
		"label": "Référence 0607451604",
		"distinguishingAttributes": {
			"reference": "0607451604",
			"Vitesse à vide": "280 tr/min",
			"Masse": "1.7 kg"
		}
	},
	"editorial": {
		"overview": "Bosch 0 607 451 604. La 0 607 451 604 est la visseuse d’angle à coupure 370 W, 7–30 Nm sur assemblage dur. La 606 donne 7–27 Nm et 360 tr/min contre 280 ici. Le couple du tableau dur n’est pas transféré à un assemblage tendre. Les 840 L/min sont explicitement à vide et restent non dimensionnants en charge.",
		"verifiedFacts": [
			"Type : Visseuse d’angle à coupure, réglage externe.",
			"Couple, assemblage dur à 30 degrés : 7–30 Nm.",
			"Puissance : 370 W.",
			"Vitesse à vide : 280 tr/min.",
			"Débit explicitement à vide : 14 L/s (840 L/min)."
		],
		"limitations": [
			"Performances déclarées sous le protocole du catalogue : pression dynamique 6,3 bar, flexible de 4 m. Les régimes à vide/en charge restent distincts.",
			"Catalogue historique ; équipement et disponibilité actuels à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Type",
			"value": "Visseuse d’angle à coupure, réglage externe",
			"evidenceIds": [
				"visseuse-bosch-0-607-451-604-0607451604-reserved-20261103-1"
			]
		},
		{
			"label": "Couple, assemblage dur à 30 degrés",
			"value": "7–30 Nm",
			"evidenceIds": [
				"visseuse-bosch-0-607-451-604-0607451604-reserved-20261103-1"
			]
		},
		{
			"label": "Puissance",
			"value": "370 W",
			"evidenceIds": [
				"visseuse-bosch-0-607-451-604-0607451604-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "280 tr/min",
			"evidenceIds": [
				"visseuse-bosch-0-607-451-604-0607451604-reserved-20261103-1"
			]
		},
		{
			"label": "Débit explicitement à vide",
			"value": "14 L/s (840 L/min)",
			"evidenceIds": [
				"visseuse-bosch-0-607-451-604-0607451604-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-bosch-industry-p62",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf#page=62",
			"sourceLabel": "Bosch, Industrial air tools catalogue, page 62",
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
			"id": "visseuse-bosch-0-607-451-604-0607451604-reserved-20261103-1",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf#page=62",
			"sourceLabel": "Bosch : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 54586613160c46c045dd75ba02ebb5b2962a5dbb09c773f0902d4d8b10d41eab. La 0 607 451 604 est la visseuse d’angle à coupure 370 W, 7–30 Nm sur assemblage dur. La 606 donne 7–27 Nm et 360 tr/min contre 280 ici. Le couple du tableau dur n’est pas transféré à un assemblage tendre. Les 840 L/min sont explicitement à vide et restent non dimensionnants en charge."
		},
		{
			"id": "visseuse-bosch-0-607-451-604-0607451604-reserved-20261103-1-3",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf#page=63",
			"sourceLabel": "Bosch : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 54586613160c46c045dd75ba02ebb5b2962a5dbb09c773f0902d4d8b10d41eab. La 0 607 451 604 est la visseuse d’angle à coupure 370 W, 7–30 Nm sur assemblage dur. La 606 donne 7–27 Nm et 360 tr/min contre 280 ici. Le couple du tableau dur n’est pas transféré à un assemblage tendre. Les 840 L/min sont explicitement à vide et restent non dimensionnants en charge."
		},
		{
			"id": "visseuse-bosch-0-607-451-604-0607451604-reserved-20261103-1-4",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf#page=4",
			"sourceLabel": "Bosch : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 54586613160c46c045dd75ba02ebb5b2962a5dbb09c773f0902d4d8b10d41eab. La 0 607 451 604 est la visseuse d’angle à coupure 370 W, 7–30 Nm sur assemblage dur. La 606 donne 7–27 Nm et 360 tr/min contre 280 ici. Le couple du tableau dur n’est pas transféré à un assemblage tendre. Les 840 L/min sont explicitement à vide et restent non dimensionnants en charge."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-bosch-industry-p62"
		],
		"workingPressureBar": [
			"october-bosch-industry-p4"
		],
		"airflowLpm": [
			"october-bosch-industry-p62"
		],
		"airflowBasis": [
			"october-bosch-industry-p62"
		],
		"editorial": [
			"visseuse-bosch-0-607-451-604-0607451604-reserved-20261103-1"
		],
		"specifications": [
			"visseuse-bosch-0-607-451-604-0607451604-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation à vide : 840 L/min à 6,3 bar."
	]
};

export default product;
