const product = {
	"id": "dynabrade-11486",
	"slug": "ponceuse-bande-dynabrade-11486",
	"categoryId": "ponceuse-bande",
	"category": "Ponceuse à bande pneumatique",
	"label": "Ponceuse à bande pneumatique Dynabrade 11486",
	"brand": "Dynabrade",
	"model": "11486",
	"mpn": "11486",
	"variant": {
		"familyId": "dynabrade-ponceuse-bande",
		"label": "11486",
		"distinguishingAttributes": {
			"Puissance moteur": "895 W",
			"Vitesse moteur publiée": "13 000 tr/min",
			"Bande abrasive, pouces (mm)": "1 (25) W x 30 (762) L",
			"Masse": "4,1 kg",
			"Longueur": "559 mm",
			"Hauteur": "178 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1643,
		"typical": 1643,
		"max": 1643
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/2 pouce NPT, flexible intérieur 13 mm",
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"image": {
		"src": "/images/products/dynabrade-11486-technical.webp",
		"alt": "Repères techniques Dynabrade 11486 : consommation maximale publiée de 1 643 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=25",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 11486, référence 11486, présente une consommation maximale publiée de 1 643 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 25. Puissance moteur : 895 W. Vitesse moteur publiée : 13 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 895 W.",
			"Vitesse moteur publiée : 13 000 tr/min.",
			"Bande abrasive, pouces (mm) : 1 (25) W x 30 (762) L.",
			"Masse : 4,1 kg.",
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
			"label": "Puissance moteur",
			"value": "895 W",
			"evidenceIds": [
				"dynabrade-11486-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "13 000 tr/min",
			"evidenceIds": [
				"dynabrade-11486-catalogue-d25-01"
			]
		},
		{
			"label": "Bande abrasive, pouces (mm)",
			"value": "1 (25) W x 30 (762) L",
			"evidenceIds": [
				"dynabrade-11486-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "4,1 kg",
			"evidenceIds": [
				"dynabrade-11486-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "559 mm",
			"evidenceIds": [
				"dynabrade-11486-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "178 mm",
			"evidenceIds": [
				"dynabrade-11486-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-11486-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=25",
			"sourceLabel": "Dynabrade, catalogue D25.01, 11486, page 25",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 25-0, ligne 1. Consommation maximale publiée : 58 (1,643) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-11486-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-11486-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-11486-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-11486-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-11486-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
