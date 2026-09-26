const product = {
	"id": "dynabrade-57800",
	"slug": "ponceuse-vibrante-dynabrade-57800",
	"categoryId": "ponceuse-vibrante",
	"category": "Ponceuse vibrante pneumatique",
	"label": "Ponceuse vibrante pneumatique Dynabrade 57800",
	"brand": "Dynabrade",
	"model": "57800",
	"mpn": "57800",
	"variant": {
		"familyId": "dynabrade-ponceuse-vibrante",
		"label": "57800",
		"distinguishingAttributes": {
			"Puissance moteur": "179 W",
			"Vitesse moteur publiée": "8 000 tr/min",
			"Masse": "1,3 kg",
			"Longueur": "184 mm",
			"Hauteur": "108 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 453,
		"typical": 453,
		"max": 453
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-57800-technical.webp",
		"alt": "Repères techniques Dynabrade 57800 : consommation maximale publiée de 453 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=175",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 57800, référence 57800, présente une consommation maximale publiée de 453 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 175. Puissance moteur : 179 W. Vitesse moteur publiée : 8 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 179 W.",
			"Vitesse moteur publiée : 8 000 tr/min.",
			"Masse : 1,3 kg.",
			"Longueur : 184 mm.",
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
			"value": "179 W",
			"evidenceIds": [
				"dynabrade-57800-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "8 000 tr/min",
			"evidenceIds": [
				"dynabrade-57800-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1,3 kg",
			"evidenceIds": [
				"dynabrade-57800-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "184 mm",
			"evidenceIds": [
				"dynabrade-57800-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "108 mm",
			"evidenceIds": [
				"dynabrade-57800-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-57800-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=175",
			"sourceLabel": "Dynabrade, catalogue D25.01, 57800, page 175",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 175-0, ligne 1. Consommation maximale publiée : 16 (453) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-57800-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-57800-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-57800-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-57800-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-57800-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
