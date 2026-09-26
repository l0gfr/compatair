const product = {
	"id": "dynabrade-40352",
	"slug": "ponceuse-bande-dynabrade-40352",
	"categoryId": "ponceuse-bande",
	"category": "Ponceuse à bande pneumatique",
	"label": "Ponceuse à bande pneumatique Dynabrade 40352",
	"brand": "Dynabrade",
	"model": "40352",
	"mpn": "40352",
	"variant": {
		"familyId": "dynabrade-ponceuse-bande",
		"label": "40352",
		"distinguishingAttributes": {
			"Puissance moteur": "298 W",
			"Vitesse moteur publiée": "25 000 tr/min",
			"Bande abrasive, pouces (mm)": "1/8 - 3/4 (3 - 19) x 18 (457)",
			"Masse": "0,86 kg",
			"Longueur": "356 mm",
			"Hauteur": "105 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 626,
		"typical": 626,
		"max": 626
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-40352-technical.webp",
		"alt": "Repères techniques Dynabrade 40352 : consommation maximale publiée de 626 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=14",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 40352, référence 40352, présente une consommation maximale publiée de 626 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 14. Puissance moteur : 298 W. Vitesse moteur publiée : 25 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 298 W.",
			"Vitesse moteur publiée : 25 000 tr/min.",
			"Bande abrasive, pouces (mm) : 1/8 - 3/4 (3 - 19) x 18 (457).",
			"Masse : 0,86 kg.",
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
			"value": "298 W",
			"evidenceIds": [
				"dynabrade-40352-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "25 000 tr/min",
			"evidenceIds": [
				"dynabrade-40352-catalogue-d25-01"
			]
		},
		{
			"label": "Bande abrasive, pouces (mm)",
			"value": "1/8 - 3/4 (3 - 19) x 18 (457)",
			"evidenceIds": [
				"dynabrade-40352-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,86 kg",
			"evidenceIds": [
				"dynabrade-40352-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "356 mm",
			"evidenceIds": [
				"dynabrade-40352-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "105 mm",
			"evidenceIds": [
				"dynabrade-40352-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-40352-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=14",
			"sourceLabel": "Dynabrade, catalogue D25.01, 40352, page 14",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 14-0, ligne 1. Consommation maximale publiée : 22 (626) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-40352-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-40352-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-40352-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-40352-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-40352-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
