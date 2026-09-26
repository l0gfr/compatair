const product = {
	"id": "dynabrade-54424",
	"slug": "ponceuse-rotative-dynabrade-54424",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Dynabrade 54424",
	"brand": "Dynabrade",
	"model": "54424",
	"mpn": "54424",
	"variant": {
		"familyId": "dynabrade-ponceuse-rotative",
		"label": "54424",
		"distinguishingAttributes": {
			"Puissance moteur": "522 W",
			"Vitesse moteur publiée": "18 000 tr/min",
			"Diamètre du plateau": "76 mm",
			"Corps de l’outil": "Steel",
			"Masse": "1,8 kg",
			"Longueur": "308 mm",
			"Hauteur": "89 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1161,
		"typical": 1161,
		"max": 1161
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-54424-technical.webp",
		"alt": "Repères techniques Dynabrade 54424 : consommation maximale publiée de 1 161 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=77",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 54424, référence 54424, présente une consommation maximale publiée de 1 161 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 77. Puissance moteur : 522 W. Vitesse moteur publiée : 18 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 522 W.",
			"Vitesse moteur publiée : 18 000 tr/min.",
			"Diamètre du plateau : 76 mm.",
			"Corps de l’outil : Steel.",
			"Entrée d’air : 1/4 pouce NPT.",
			"Flexible : 10 mm de diamètre intérieur publié."
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
			"value": "522 W",
			"evidenceIds": [
				"dynabrade-54424-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "18 000 tr/min",
			"evidenceIds": [
				"dynabrade-54424-catalogue-d25-01"
			]
		},
		{
			"label": "Diamètre du plateau",
			"value": "76 mm",
			"evidenceIds": [
				"dynabrade-54424-catalogue-d25-01"
			]
		},
		{
			"label": "Corps de l’outil",
			"value": "Steel",
			"evidenceIds": [
				"dynabrade-54424-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1,8 kg",
			"evidenceIds": [
				"dynabrade-54424-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "308 mm",
			"evidenceIds": [
				"dynabrade-54424-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "89 mm",
			"evidenceIds": [
				"dynabrade-54424-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-54424-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=77",
			"sourceLabel": "Dynabrade, catalogue D25.01, 54424, page 77",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 77-1, ligne 2. Consommation maximale publiée : 41 (1,161) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-54424-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-54424-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-54424-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-54424-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-54424-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
