import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-bosch-0-607-450-616-0607450616",
	"slug": "cle-a-chocs-bosch-0-607-450-616-0607450616",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Bosch 0 607 450 616 (réf. 0607450616)",
	"brand": "Bosch",
	"model": "0 607 450 616",
	"mpn": "0607450616",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 1080,
		"typical": 1080,
		"max": 1080
	},
	"airflowBasis": "free-speed",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-bosch-0-607-450-616-0607450616-technical-20261115-followup.svg",
		"alt": "Repères techniques : Bosch 0 607 450 616 (réf. 0607450616)",
		"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"variant": {
		"familyId": "bosch-0-607-450-616",
		"label": "Référence 0607450616",
		"distinguishingAttributes": {
			"reference": "0607450616",
			"Vitesse à vide": "4600 tr/min",
			"Masse": "4.1 kg"
		}
	},
	"editorial": {
		"overview": "Bosch 0 607 450 616 : clé à chocs à carré 3/4 pouce et trois positions de couple, plage conseillée 300–900 Nm et maximum publié 1 200 Nm. La 615 utilise un carré 1/2 pouce pour 150–350 Nm conseillés et 550 Nm maximum. La 614 est en 3/8 pouce. Les 18 L/s de la 616 sont explicitement mesurés à vide : le dimensionnement en charge reste indéterminé.",
		"verifiedFacts": [
			"Vitesse à vide : 4600 tr/min.",
			"Masse : 4.1 kg.",
			"Carré : 3/4 pouce.",
			"Couple conseillé, vis classe 8.8 : 300–900 Nm.",
			"Couple maximal distinct : 1 200 Nm.",
			"Commande de couple : Trois positions.",
			"Débit à vide : 18 L/s (1 080 L/min)."
		],
		"limitations": [
			"Consommation à vide seule : aucun maximum ou débit en charge supposé ; le verdict reste insufficient_data.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "4600 tr/min",
			"evidenceIds": [
				"october-bosch-industry-p68"
			]
		},
		{
			"label": "Masse",
			"value": "4.1 kg",
			"evidenceIds": [
				"october-bosch-industry-p68"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Bosch, Industrial air tools catalogue, page 68 ; tableau réparti sur les pages 68–69",
			"evidenceIds": [
				"october-bosch-industry-p68"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All of the performance data / specifications in this catalogue refer to 6.3 bar (91 PSI) flow pressure with 4 m hose length.",
			"evidenceIds": [
				"october-bosch-industry-p68",
				"october-bosch-industry-p4"
			]
		},
		{
			"label": "Carré",
			"value": "3/4 pouce",
			"evidenceIds": [
				"review:2026-11-12-technical:cle-a-chocs-bosch-0-607-450-616-0607450616:0"
			]
		},
		{
			"label": "Couple conseillé, vis classe 8.8",
			"value": "300–900 Nm",
			"evidenceIds": [
				"review:2026-11-12-technical:cle-a-chocs-bosch-0-607-450-616-0607450616:0"
			]
		},
		{
			"label": "Couple maximal distinct",
			"value": "1 200 Nm",
			"evidenceIds": [
				"review:2026-11-12-technical:cle-a-chocs-bosch-0-607-450-616-0607450616:0"
			]
		},
		{
			"label": "Commande de couple",
			"value": "Trois positions",
			"evidenceIds": [
				"review:2026-11-12-technical:cle-a-chocs-bosch-0-607-450-616-0607450616:0"
			]
		},
		{
			"label": "Débit à vide",
			"value": "18 L/s (1 080 L/min)",
			"evidenceIds": [
				"review:2026-11-12-technical:cle-a-chocs-bosch-0-607-450-616-0607450616:0"
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
			"id": "review:2026-11-12-technical:cle-a-chocs-bosch-0-607-450-616-0607450616:0",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf",
			"sourceLabel": "Bosch, document fabricant, pages PDF 4, 68, 69",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "Bosch 0 607 450 616 : clé à chocs à carré 3/4 pouce et trois positions de couple, plage conseillée 300–900 Nm et maximum publié 1 200 Nm. La 615 utilise un carré 1/2 pouce pour 150–350 Nm conseillés et 550 Nm maximum. La 614 est en 3/8 pouce. Les 18 L/s de la 616 sont explicitement mesurés à vide : le dimensionnement en charge reste indéterminé. GET complet : SHA-256 54586613160c46c045dd75ba02ebb5b2962a5dbb09c773f0902d4d8b10d41eab. Historique conservé."
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
		]
	},
	"notes": [
		"Consommation à vide : 1 080 L/min à 6,3 bar."
	]
};

export default product;
