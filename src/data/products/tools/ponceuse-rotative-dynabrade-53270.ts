const product = {
	"id": "dynabrade-53270",
	"slug": "ponceuse-rotative-dynabrade-53270",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Dynabrade 53270",
	"brand": "Dynabrade",
	"model": "53270",
	"mpn": "53270",
	"variant": {
		"familyId": "dynabrade-ponceuse-rotative",
		"label": "53270",
		"distinguishingAttributes": {
			"Diamètre indiqué au tableau": "180 mm",
			"Puissance moteur": "2 100 W",
			"Vitesse moteur publiée": "8 500 tr/min",
			"Filetage de sortie": "5/8\"-11",
			"Masse": "2,8 kg",
			"Longueur": "340 mm",
			"Hauteur": "104 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 3256,
		"typical": 3256,
		"max": 3256
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/2 pouce NPT, flexible intérieur 13 mm",
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"image": {
		"src": "/images/products/dynabrade-53270-technical.webp",
		"alt": "Repères techniques Dynabrade 53270 : consommation maximale publiée de 3 256 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=84",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 53270, référence 53270, présente une consommation maximale publiée de 3 256 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 84. Diamètre indiqué au tableau : 180 mm. Puissance moteur : 2 100 W.",
		"verifiedFacts": [
			"Diamètre indiqué au tableau : 180 mm.",
			"Puissance moteur : 2 100 W.",
			"Vitesse moteur publiée : 8 500 tr/min.",
			"Filetage de sortie : 5/8\"-11.",
			"Entrée d’air : 1/2 pouce NPT.",
			"Flexible : 13 mm de diamètre intérieur publié."
		],
		"limitations": [
			"Le calcul conserve la consommation maximale publiée, sans la réduire selon un cycle de travail supposé. Cette valeur ne constitue pas une mesure de débit réalisée par CompatAir.",
			"Le catalogue ne fournit pas de courbe de consommation selon la pression pour cette référence. Vérifier la pression dynamique à l’entrée de l’outil pendant son fonctionnement.",
			"Le diamètre intérieur publié ne suffit pas à valider un réseau : la longueur, les raccords et les pertes de pression restent à contrôler.",
			"Cette fiche repose sur l’édition D25.01 du catalogue international. Elle ne prouve ni la disponibilité actuelle en France ni l’équipement exact livré par un vendeur."
		]
	},
	"specifications": [
		{
			"label": "Diamètre indiqué au tableau",
			"value": "180 mm",
			"evidenceIds": [
				"dynabrade-53270-catalogue-d25-01"
			]
		},
		{
			"label": "Puissance moteur",
			"value": "2 100 W",
			"evidenceIds": [
				"dynabrade-53270-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "8 500 tr/min",
			"evidenceIds": [
				"dynabrade-53270-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/8\"-11",
			"evidenceIds": [
				"dynabrade-53270-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "2,8 kg",
			"evidenceIds": [
				"dynabrade-53270-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "340 mm",
			"evidenceIds": [
				"dynabrade-53270-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "104 mm",
			"evidenceIds": [
				"dynabrade-53270-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-53270-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=84",
			"sourceLabel": "Dynabrade, catalogue D25.01, 53270, page 84",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 84-0, ligne 1. Consommation maximale publiée : 115 (3,256) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-53270-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-53270-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-53270-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-53270-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-53270-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
