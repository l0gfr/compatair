const product = {
	"id": "dynabrade-12204",
	"slug": "ponceuse-vibrante-dynabrade-12204",
	"categoryId": "ponceuse-vibrante",
	"category": "Ponceuse vibrante pneumatique",
	"label": "Ponceuse vibrante pneumatique Dynabrade 12204",
	"brand": "Dynabrade",
	"model": "12204",
	"mpn": "12204",
	"variant": {
		"familyId": "dynabrade-ponceuse-vibrante",
		"label": "12204",
		"distinguishingAttributes": {
			"Puissance moteur": "298 W",
			"Cadence publiée": "2 400 courses/min",
			"Masse": "1,1 kg",
			"Longueur": "254 mm",
			"Hauteur": "38 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 595,
		"typical": 595,
		"max": 595
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-12204-technical.webp",
		"alt": "Repères techniques Dynabrade 12204 : consommation maximale publiée de 595 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=145",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 12204, référence 12204, présente une consommation maximale publiée de 595 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 145. Puissance moteur : 298 W. Cadence publiée : 2 400 courses/min.",
		"verifiedFacts": [
			"Puissance moteur : 298 W.",
			"Cadence publiée : 2 400 courses/min.",
			"Masse : 1,1 kg.",
			"Longueur : 254 mm.",
			"Entrée d’air : 1/4 pouce NPT.",
			"Flexible : 6 mm de diamètre intérieur publié."
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
			"label": "Puissance moteur",
			"value": "298 W",
			"evidenceIds": [
				"dynabrade-12204-catalogue-d25-01"
			]
		},
		{
			"label": "Cadence publiée",
			"value": "2 400 courses/min",
			"evidenceIds": [
				"dynabrade-12204-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1,1 kg",
			"evidenceIds": [
				"dynabrade-12204-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "254 mm",
			"evidenceIds": [
				"dynabrade-12204-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "38 mm",
			"evidenceIds": [
				"dynabrade-12204-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-12204-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=145",
			"sourceLabel": "Dynabrade, catalogue D25.01, 12204, page 145",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 145-1, ligne 1. Consommation maximale publiée : 21 (595) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-12204-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-12204-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-12204-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-12204-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-12204-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
