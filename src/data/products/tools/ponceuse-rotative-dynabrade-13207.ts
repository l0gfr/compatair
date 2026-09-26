const product = {
	"id": "dynabrade-13207",
	"slug": "ponceuse-rotative-dynabrade-13207",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Dynabrade 13207",
	"brand": "Dynabrade",
	"model": "13207",
	"mpn": "13207",
	"variant": {
		"familyId": "dynabrade-ponceuse-rotative",
		"label": "13207",
		"distinguishingAttributes": {
			"Puissance moteur": "522 W",
			"Vitesse moteur publiée": "4 500 tr/min",
			"Alésage de la roue": "5/8\" or 1\"",
			"Filetage de sortie": "1/2\"-20 Male",
			"Masse": "1,8 kg",
			"Longueur": "346 mm",
			"Hauteur": "44 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1133,
		"typical": 1133,
		"max": 1133
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-13207-technical.webp",
		"alt": "Repères techniques Dynabrade 13207 : consommation maximale publiée de 1 133 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=35",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 13207, référence 13207, présente une consommation maximale publiée de 1 133 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 35. Puissance moteur : 522 W. Vitesse moteur publiée : 4 500 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 522 W.",
			"Vitesse moteur publiée : 4 500 tr/min.",
			"Alésage de la roue : 5/8\" or 1\".",
			"Filetage de sortie : 1/2\"-20 Male.",
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
				"dynabrade-13207-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "4 500 tr/min",
			"evidenceIds": [
				"dynabrade-13207-catalogue-d25-01"
			]
		},
		{
			"label": "Alésage de la roue",
			"value": "5/8\" or 1\"",
			"evidenceIds": [
				"dynabrade-13207-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "1/2\"-20 Male",
			"evidenceIds": [
				"dynabrade-13207-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1,8 kg",
			"evidenceIds": [
				"dynabrade-13207-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "346 mm",
			"evidenceIds": [
				"dynabrade-13207-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "44 mm",
			"evidenceIds": [
				"dynabrade-13207-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-13207-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=35",
			"sourceLabel": "Dynabrade, catalogue D25.01, 13207, page 35",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 35-1, ligne 2. Consommation maximale publiée : 40 (1,133) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-13207-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-13207-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-13207-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-13207-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-13207-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
