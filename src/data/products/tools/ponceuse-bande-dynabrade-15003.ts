const product = {
	"id": "dynabrade-15003",
	"slug": "ponceuse-bande-dynabrade-15003",
	"categoryId": "ponceuse-bande",
	"category": "Ponceuse à bande pneumatique",
	"label": "Ponceuse à bande pneumatique Dynabrade 15003",
	"brand": "Dynabrade",
	"model": "15003",
	"mpn": "15003",
	"variant": {
		"familyId": "dynabrade-ponceuse-bande",
		"label": "15003",
		"distinguishingAttributes": {
			"Puissance moteur": "298 W",
			"Vitesse moteur publiée": "25 000 tr/min",
			"Bande abrasive, pouces (mm)": "1/8-1/2 (3-13) W x 12 (305) L",
			"Masse": "0,8 kg",
			"Longueur": "298 mm",
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
		"min": 566,
		"typical": 566,
		"max": 566
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-15003-technical.webp",
		"alt": "Repères techniques Dynabrade 15003 : consommation maximale publiée de 566 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=18",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 15003, référence 15003, présente une consommation maximale publiée de 566 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 18. Puissance moteur : 298 W. Vitesse moteur publiée : 25 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 298 W.",
			"Vitesse moteur publiée : 25 000 tr/min.",
			"Bande abrasive, pouces (mm) : 1/8-1/2 (3-13) W x 12 (305) L.",
			"Masse : 0,8 kg.",
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
				"dynabrade-15003-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "25 000 tr/min",
			"evidenceIds": [
				"dynabrade-15003-catalogue-d25-01"
			]
		},
		{
			"label": "Bande abrasive, pouces (mm)",
			"value": "1/8-1/2 (3-13) W x 12 (305) L",
			"evidenceIds": [
				"dynabrade-15003-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,8 kg",
			"evidenceIds": [
				"dynabrade-15003-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "298 mm",
			"evidenceIds": [
				"dynabrade-15003-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "89 mm",
			"evidenceIds": [
				"dynabrade-15003-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-15003-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=18",
			"sourceLabel": "Dynabrade, catalogue D25.01, 15003, page 18",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 18-0, ligne 1. Consommation maximale publiée : 20 (566) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-15003-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-15003-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-15003-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-15003-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-15003-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
