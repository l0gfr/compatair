const product = {
	"id": "dynabrade-52206",
	"slug": "meuleuse-dynabrade-52206",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 52206",
	"brand": "Dynabrade",
	"model": "52206",
	"mpn": "52206",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "52206",
		"distinguishingAttributes": {
			"Puissance moteur": "298 W",
			"Vitesse moteur publiée": "30 000 tr/min",
			"Masse": "0,5 kg",
			"Longueur": "152 mm",
			"Hauteur": "94 mm"
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
		"src": "/images/products/dynabrade-52206-technical.webp",
		"alt": "Repères techniques Dynabrade 52206 : consommation maximale publiée de 595 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=60",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 52206, référence 52206, présente une consommation maximale publiée de 595 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 60. Puissance moteur : 298 W. Vitesse moteur publiée : 30 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 298 W.",
			"Vitesse moteur publiée : 30 000 tr/min.",
			"Masse : 0,5 kg.",
			"Longueur : 152 mm.",
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
				"dynabrade-52206-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "30 000 tr/min",
			"evidenceIds": [
				"dynabrade-52206-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,5 kg",
			"evidenceIds": [
				"dynabrade-52206-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "152 mm",
			"evidenceIds": [
				"dynabrade-52206-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "94 mm",
			"evidenceIds": [
				"dynabrade-52206-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-52206-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=60",
			"sourceLabel": "Dynabrade, catalogue D25.01, 52206, page 60",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 60-0, ligne 2. Consommation maximale publiée : 21 (595) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-52206-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-52206-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-52206-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-52206-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-52206-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
