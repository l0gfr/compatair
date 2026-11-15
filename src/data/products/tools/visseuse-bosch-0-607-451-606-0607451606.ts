import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-bosch-0-607-451-606-0607451606",
	"slug": "visseuse-bosch-0-607-451-606-0607451606",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Bosch 0 607 451 606 (réf. 0607451606)",
	"brand": "Bosch",
	"model": "0 607 451 606",
	"mpn": "0607451606",
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
		"src": "/images/products/visseuse-bosch-0-607-451-606-0607451606-technical-20261115-followup.svg",
		"alt": "Repères techniques : Bosch 0 607 451 606 (réf. 0607451606)",
		"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 15 novembre 2026"
	},
	"variant": {
		"familyId": "bosch-0-607-451-606",
		"label": "Référence 0607451606",
		"distinguishingAttributes": {
			"reference": "0607451606",
			"Vitesse à vide": "360 tr/min",
			"Masse": "1.5 kg"
		}
	},
	"editorial": {
		"overview": "Bosch 0 607 451 606 : visseuse d’angle à arrêt automatique, carré 3/8 pouce et évacuation d’air centralisée, 360 tr/min et 1,5 kg. La 600 utilise le même carré mais une évacuation décentralisée et pèse 1,7 kg ; la 601 est en hexagone intérieur 1/4 pouce. Les plages publiées de la 606 sont 7–27 Nm en assemblage dur et 7–24 Nm en assemblage tendre. Les 14 L/s sont mesurés à vide et restent non dimensionnants.",
		"verifiedFacts": [
			"Vitesse à vide : 360 tr/min.",
			"Masse : 1.5 kg.",
			"Entraînement : Carré 3/8 pouce.",
			"Évacuation d’air : Centralisée.",
			"Couple dur à 30° : 7–27 Nm.",
			"Couple tendre à 720° : 7–24 Nm.",
			"Débit à vide : 14 L/s (840 L/min)."
		],
		"limitations": [
			"Consommation à vide seule : aucun maximum ou débit en charge supposé ; le verdict reste insufficient_data.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "360 tr/min",
			"evidenceIds": [
				"october-bosch-industry-p62"
			]
		},
		{
			"label": "Masse",
			"value": "1.5 kg",
			"evidenceIds": [
				"october-bosch-industry-p62"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Bosch, Industrial air tools catalogue, page 62 ; tableau réparti sur les pages 62–63",
			"evidenceIds": [
				"october-bosch-industry-p62"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All of the performance data / specifications in this catalogue refer to 6.3 bar (91 PSI) flow pressure with 4 m hose length.",
			"evidenceIds": [
				"october-bosch-industry-p62",
				"october-bosch-industry-p4"
			]
		},
		{
			"label": "Entraînement",
			"value": "Carré 3/8 pouce",
			"evidenceIds": [
				"review:2026-11-12-technical:visseuse-bosch-0-607-451-606-0607451606:0"
			]
		},
		{
			"label": "Évacuation d’air",
			"value": "Centralisée",
			"evidenceIds": [
				"review:2026-11-12-technical:visseuse-bosch-0-607-451-606-0607451606:0"
			]
		},
		{
			"label": "Couple dur à 30°",
			"value": "7–27 Nm",
			"evidenceIds": [
				"review:2026-11-12-technical:visseuse-bosch-0-607-451-606-0607451606:0"
			]
		},
		{
			"label": "Couple tendre à 720°",
			"value": "7–24 Nm",
			"evidenceIds": [
				"review:2026-11-12-technical:visseuse-bosch-0-607-451-606-0607451606:0"
			]
		},
		{
			"label": "Débit à vide",
			"value": "14 L/s (840 L/min)",
			"evidenceIds": [
				"review:2026-11-12-technical:visseuse-bosch-0-607-451-606-0607451606:0"
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
			"id": "review:2026-11-12-technical:visseuse-bosch-0-607-451-606-0607451606:0",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf",
			"sourceLabel": "Bosch, document fabricant, pages PDF 4, 62, 63",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-12",
			"confidence": "B",
			"notes": "Bosch 0 607 451 606 : visseuse d’angle à arrêt automatique, carré 3/8 pouce et évacuation d’air centralisée, 360 tr/min et 1,5 kg. La 600 utilise le même carré mais une évacuation décentralisée et pèse 1,7 kg ; la 601 est en hexagone intérieur 1/4 pouce. Les plages publiées de la 606 sont 7–27 Nm en assemblage dur et 7–24 Nm en assemblage tendre. Les 14 L/s sont mesurés à vide et restent non dimensionnants. GET complet : SHA-256 54586613160c46c045dd75ba02ebb5b2962a5dbb09c773f0902d4d8b10d41eab. Historique conservé."
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
		]
	},
	"notes": [
		"Consommation à vide : 840 L/min à 6,3 bar."
	]
};

export default product;
