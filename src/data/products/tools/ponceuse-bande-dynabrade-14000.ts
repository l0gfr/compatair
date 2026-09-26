const product = {
	"id": "dynabrade-14000",
	"slug": "ponceuse-bande-dynabrade-14000",
	"categoryId": "ponceuse-bande",
	"category": "Ponceuse à bande pneumatique",
	"label": "Ponceuse à bande pneumatique Dynabrade 14000",
	"brand": "Dynabrade",
	"model": "14000",
	"mpn": "14000",
	"variant": {
		"familyId": "dynabrade-ponceuse-bande",
		"label": "14000",
		"distinguishingAttributes": {
			"Puissance moteur": "373 W",
			"Vitesse moteur publiée": "20 000 tr/min",
			"Bande abrasive, pouces (mm)": "1/8-1/2 (3-13) W x 24 (610) L",
			"Masse": "1,4 kg",
			"Longueur": "371 mm",
			"Hauteur": "116 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 878,
		"typical": 878,
		"max": 878
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-14000-technical.webp",
		"alt": "Repères techniques Dynabrade 14000 : consommation maximale publiée de 878 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=10",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 14000, référence 14000, présente une consommation maximale publiée de 878 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 10. Puissance moteur : 373 W. Vitesse moteur publiée : 20 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 373 W.",
			"Vitesse moteur publiée : 20 000 tr/min.",
			"Bande abrasive, pouces (mm) : 1/8-1/2 (3-13) W x 24 (610) L.",
			"Masse : 1,4 kg.",
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
				"dynabrade-14000-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "20 000 tr/min",
			"evidenceIds": [
				"dynabrade-14000-catalogue-d25-01"
			]
		},
		{
			"label": "Bande abrasive, pouces (mm)",
			"value": "1/8-1/2 (3-13) W x 24 (610) L",
			"evidenceIds": [
				"dynabrade-14000-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1,4 kg",
			"evidenceIds": [
				"dynabrade-14000-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "371 mm",
			"evidenceIds": [
				"dynabrade-14000-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "116 mm",
			"evidenceIds": [
				"dynabrade-14000-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-14000-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=10",
			"sourceLabel": "Dynabrade, catalogue D25.01, 14000, page 10",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 10-0, ligne 1. Consommation maximale publiée : 31 (878) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-14000-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-14000-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-14000-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-14000-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-14000-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
