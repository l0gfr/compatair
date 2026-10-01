const product = {
	"id": "cle-a-chocs-bosch-0-607-450-622-0607450622",
	"slug": "cle-a-chocs-bosch-0-607-450-622-0607450622",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Bosch 0 607 450 622 (réf. 0607450622)",
	"brand": "Bosch",
	"model": "0 607 450 622",
	"mpn": "0607450622",
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
		"src": "/images/products/cle-a-chocs-bosch-0-607-450-622-0607450622.webp",
		"alt": "Repères techniques : Bosch 0 607 450 622 (réf. 0607450622)",
		"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "bosch-0-607-450-622",
		"label": "Référence 0607450622",
		"distinguishingAttributes": {
			"reference": "0607450622",
			"Vitesse à vide": "4500 tr/min",
			"Masse": "5.6 kg"
		}
	},
	"editorial": {
		"overview": "Bosch 0 607 450 622 (réf. 0607450622). Consommation à vide : 1 080 L/min à 6,3 bar. Vitesse à vide : 4500 tr/min. Masse : 5.6 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 4500 tr/min.",
			"Masse : 5.6 kg."
		],
		"limitations": [
			"Consommation à vide seule : aucun maximum ou débit en charge supposé ; le verdict reste insufficient_data.",
			"Données déclarées, sans essai physique CompatAir. La disponibilité actuelle, la notice de sécurité et la configuration livrée restent à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "4500 tr/min",
			"evidenceIds": [
				"october-bosch-industry-p72"
			]
		},
		{
			"label": "Masse",
			"value": "5.6 kg",
			"evidenceIds": [
				"october-bosch-industry-p72"
			]
		},
		{
			"label": "Localisation documentaire",
			"value": "Bosch, Industrial air tools catalogue, page 72 ; tableau réparti sur les pages 72–73",
			"evidenceIds": [
				"october-bosch-industry-p72"
			]
		},
		{
			"label": "Condition de pression originale",
			"value": "All of the performance data / specifications in this catalogue refer to 6.3 bar (91 PSI) flow pressure with 4 m hose length.",
			"evidenceIds": [
				"october-bosch-industry-p72",
				"october-bosch-industry-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october-bosch-industry-p72",
			"sourceUrl": "https://www.bosch-professional.com/fr/media/service_relaunch/downloads/kataloge/francais/industriewerkzeuge/catalogue_complet_des_outils_industriels_pneumatiques.pdf#page=72",
			"sourceLabel": "Bosch, Industrial air tools catalogue, page 72",
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
			"october-bosch-industry-p72"
		],
		"workingPressureBar": [
			"october-bosch-industry-p4"
		],
		"airflowLpm": [
			"october-bosch-industry-p72"
		],
		"airflowBasis": [
			"october-bosch-industry-p72"
		]
	},
	"notes": [
		"Consommation à vide : 1 080 L/min à 6,3 bar."
	]
};

export default product;
