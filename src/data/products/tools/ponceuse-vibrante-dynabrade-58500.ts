const product = {
	"id": "dynabrade-58500",
	"slug": "ponceuse-vibrante-dynabrade-58500",
	"categoryId": "ponceuse-vibrante",
	"category": "Ponceuse vibrante pneumatique",
	"label": "Ponceuse vibrante pneumatique Dynabrade 58500",
	"brand": "Dynabrade",
	"model": "58500",
	"mpn": "58500",
	"variant": {
		"familyId": "dynabrade-ponceuse-vibrante",
		"label": "58500",
		"distinguishingAttributes": {
			"Puissance moteur": "112 W",
			"Vitesse moteur publiée": "10 000 tr/min",
			"Masse": "0,7 kg",
			"Longueur": "147 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 368,
		"typical": 368,
		"max": 368
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-58500-technical.webp",
		"alt": "Repères techniques Dynabrade 58500 : consommation maximale publiée de 368 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=176",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 58500, référence 58500, présente une consommation maximale publiée de 368 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 176. Puissance moteur : 112 W. Vitesse moteur publiée : 10 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 112 W.",
			"Vitesse moteur publiée : 10 000 tr/min.",
			"Masse : 0,7 kg.",
			"Longueur : 147 mm.",
			"Entrée d’air : 1/4 pouce NPT.",
			"Flexible : 6 mm de diamètre intérieur publié."
		],
		"limitations": [
			"Hauteur non retenue : le tableau publie des unités contradictoires (3-1/2 (91)).",
			"Le calcul conserve la consommation maximale publiée, sans la réduire selon un cycle de travail supposé. Cette valeur ne constitue pas une mesure de débit réalisée par CompatAir.",
			"Le catalogue ne fournit pas de courbe de consommation selon la pression pour cette référence. Vérifier la pression dynamique à l’entrée de l’outil pendant son fonctionnement.",
			"Le diamètre intérieur publié ne suffit pas à valider un réseau : la longueur, les raccords et les pertes de pression restent à contrôler.",
			"Cette fiche repose sur l’édition D25.01 du catalogue international. Elle ne prouve ni la disponibilité actuelle en France ni l’équipement exact livré par un vendeur."
		]
	},
	"specifications": [
		{
			"label": "Puissance moteur",
			"value": "112 W",
			"evidenceIds": [
				"dynabrade-58500-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "10 000 tr/min",
			"evidenceIds": [
				"dynabrade-58500-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,7 kg",
			"evidenceIds": [
				"dynabrade-58500-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "147 mm",
			"evidenceIds": [
				"dynabrade-58500-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-58500-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=176",
			"sourceLabel": "Dynabrade, catalogue D25.01, 58500, page 176",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 176-0, ligne 1. Consommation maximale publiée : 13 (368) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-58500-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-58500-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-58500-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-58500-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-58500-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
