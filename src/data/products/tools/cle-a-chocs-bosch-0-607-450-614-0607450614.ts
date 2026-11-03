import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-bosch-0-607-450-614-0607450614",
	"slug": "cle-a-chocs-bosch-0-607-450-614-0607450614",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Bosch 0 607 450 614 (réf. 0607450614)",
	"brand": "Bosch",
	"model": "0 607 450 614",
	"mpn": "0607450614",
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
	"airflowBasis": "free-speed",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-bosch-0-607-450-614-0607450614.webp",
		"alt": "Repères techniques : Bosch 0 607 450 614 (réf. 0607450614)",
		"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "bosch-0-607-450-614",
		"label": "Référence 0607450614",
		"distinguishingAttributes": {
			"reference": "0607450614",
			"Vitesse à vide": "10000 tr/min",
			"Masse": "1.3 kg"
		}
	},
	"editorial": {
		"overview": "Bosch 0 607 450 614. La 0 607 450 614 est la clé à chocs 3/8 pouce à trois positions de couple, 50–150 Nm conseillés et 200 Nm maximum. La 615 passe au carré 1/2 pouce et 550 Nm maximum. Le catalogue nomme explicitement le débit à vide : les 540 L/min ne sont pas utilisés comme consommation en charge.",
		"verifiedFacts": [
			"Carré : 3/8 pouce.",
			"Couple de serrage conseillé : 50–150 Nm.",
			"Couple maximal distinct : 200 Nm.",
			"Vitesse à vide : 10 000 tr/min.",
			"Débit explicitement à vide : 9 L/s (540 L/min)."
		],
		"limitations": [
			"Performances déclarées sous le protocole du catalogue : pression dynamique 6,3 bar, flexible de 4 m. Les régimes à vide/en charge restent distincts.",
			"Catalogue historique ; équipement et disponibilité actuels à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "3/8 pouce",
			"evidenceIds": [
				"cle-a-chocs-bosch-0-607-450-614-0607450614-reserved-20261103-1"
			]
		},
		{
			"label": "Couple de serrage conseillé",
			"value": "50–150 Nm",
			"evidenceIds": [
				"cle-a-chocs-bosch-0-607-450-614-0607450614-reserved-20261103-1"
			]
		},
		{
			"label": "Couple maximal distinct",
			"value": "200 Nm",
			"evidenceIds": [
				"cle-a-chocs-bosch-0-607-450-614-0607450614-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "10 000 tr/min",
			"evidenceIds": [
				"cle-a-chocs-bosch-0-607-450-614-0607450614-reserved-20261103-1"
			]
		},
		{
			"label": "Débit explicitement à vide",
			"value": "9 L/s (540 L/min)",
			"evidenceIds": [
				"cle-a-chocs-bosch-0-607-450-614-0607450614-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october-bosch-industry-p68",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf#page=68",
			"sourceLabel": "Bosch, Industrial air tools catalogue, page 68",
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
			"id": "cle-a-chocs-bosch-0-607-450-614-0607450614-reserved-20261103-1",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf#page=68",
			"sourceLabel": "Bosch : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 54586613160c46c045dd75ba02ebb5b2962a5dbb09c773f0902d4d8b10d41eab. La 0 607 450 614 est la clé à chocs 3/8 pouce à trois positions de couple, 50–150 Nm conseillés et 200 Nm maximum. La 615 passe au carré 1/2 pouce et 550 Nm maximum. Le catalogue nomme explicitement le débit à vide : les 540 L/min ne sont pas utilisés comme consommation en charge."
		},
		{
			"id": "cle-a-chocs-bosch-0-607-450-614-0607450614-reserved-20261103-1-3",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf#page=69",
			"sourceLabel": "Bosch : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 54586613160c46c045dd75ba02ebb5b2962a5dbb09c773f0902d4d8b10d41eab. La 0 607 450 614 est la clé à chocs 3/8 pouce à trois positions de couple, 50–150 Nm conseillés et 200 Nm maximum. La 615 passe au carré 1/2 pouce et 550 Nm maximum. Le catalogue nomme explicitement le débit à vide : les 540 L/min ne sont pas utilisés comme consommation en charge."
		},
		{
			"id": "cle-a-chocs-bosch-0-607-450-614-0607450614-reserved-20261103-1-4",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf#page=4",
			"sourceLabel": "Bosch : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 54586613160c46c045dd75ba02ebb5b2962a5dbb09c773f0902d4d8b10d41eab. La 0 607 450 614 est la clé à chocs 3/8 pouce à trois positions de couple, 50–150 Nm conseillés et 200 Nm maximum. La 615 passe au carré 1/2 pouce et 550 Nm maximum. Le catalogue nomme explicitement le débit à vide : les 540 L/min ne sont pas utilisés comme consommation en charge."
		}
	],
	"fieldSources": {
		"mpn": [
			"october-bosch-industry-p68"
		],
		"workingPressureBar": [
			"october-bosch-industry-p4"
		],
		"airflowLpm": [
			"october-bosch-industry-p68"
		],
		"airflowBasis": [
			"october-bosch-industry-p68"
		],
		"editorial": [
			"cle-a-chocs-bosch-0-607-450-614-0607450614-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-chocs-bosch-0-607-450-614-0607450614-reserved-20261103-1"
		]
	},
	"notes": [
		"Consommation à vide : 540 L/min à 6,3 bar."
	]
};

export default product;
