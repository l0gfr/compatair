const product = {
	"id": "dynabrade-40320",
	"slug": "ponceuse-bande-dynabrade-40320",
	"categoryId": "ponceuse-bande",
	"category": "Ponceuse à bande pneumatique",
	"label": "Ponceuse à bande pneumatique Dynabrade 40320",
	"brand": "Dynabrade",
	"model": "40320",
	"mpn": "40320",
	"variant": {
		"familyId": "dynabrade-ponceuse-bande",
		"label": "40320",
		"distinguishingAttributes": {
			"Puissance moteur": "373 W",
			"Vitesse moteur publiée": "20 000 tr/min",
			"Bande abrasive, pouces (mm)": "1/8-3/4 (3-19) W x 18 (457) L",
			"Masse": "1,1 kg",
			"Longueur": "362 mm",
			"Hauteur": "124 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 793,
		"typical": 793,
		"max": 793
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-40320-technical.webp",
		"alt": "Repères techniques Dynabrade 40320 : consommation maximale publiée de 793 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=13",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 40320, référence 40320, présente une consommation maximale publiée de 793 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 13. Puissance moteur : 373 W. Vitesse moteur publiée : 20 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 373 W.",
			"Vitesse moteur publiée : 20 000 tr/min.",
			"Bande abrasive, pouces (mm) : 1/8-3/4 (3-19) W x 18 (457) L.",
			"Masse : 1,1 kg.",
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
			"value": "373 W",
			"evidenceIds": [
				"dynabrade-40320-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "20 000 tr/min",
			"evidenceIds": [
				"dynabrade-40320-catalogue-d25-01"
			]
		},
		{
			"label": "Bande abrasive, pouces (mm)",
			"value": "1/8-3/4 (3-19) W x 18 (457) L",
			"evidenceIds": [
				"dynabrade-40320-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1,1 kg",
			"evidenceIds": [
				"dynabrade-40320-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "362 mm",
			"evidenceIds": [
				"dynabrade-40320-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "124 mm",
			"evidenceIds": [
				"dynabrade-40320-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-40320-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=13",
			"sourceLabel": "Dynabrade, catalogue D25.01, 40320, page 13",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 13-0, ligne 1. Consommation maximale publiée : 28 (793) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-40320-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-40320-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-40320-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-40320-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-40320-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
