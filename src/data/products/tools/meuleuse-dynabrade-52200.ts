const product = {
	"id": "dynabrade-52200",
	"slug": "meuleuse-dynabrade-52200",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 52200",
	"brand": "Dynabrade",
	"model": "52200",
	"mpn": "52200",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "52200",
		"distinguishingAttributes": {
			"Puissance moteur": "298 W",
			"Vitesse moteur publiée": "25 000 tr/min",
			"Masse": "0,4 kg",
			"Longueur": "130 mm",
			"Hauteur": "41 mm"
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
		"src": "/images/products/dynabrade-52200-technical.webp",
		"alt": "Repères techniques Dynabrade 52200 : consommation maximale publiée de 566 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=56",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 52200, référence 52200, présente une consommation maximale publiée de 566 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 56. Puissance moteur : 298 W. Vitesse moteur publiée : 25 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 298 W.",
			"Vitesse moteur publiée : 25 000 tr/min.",
			"Masse : 0,4 kg.",
			"Longueur : 130 mm.",
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
				"dynabrade-52200-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "25 000 tr/min",
			"evidenceIds": [
				"dynabrade-52200-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,4 kg",
			"evidenceIds": [
				"dynabrade-52200-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "130 mm",
			"evidenceIds": [
				"dynabrade-52200-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "41 mm",
			"evidenceIds": [
				"dynabrade-52200-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-52200-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=56",
			"sourceLabel": "Dynabrade, catalogue D25.01, 52200, page 56",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 56-1, ligne 1. Consommation maximale publiée : 20 (566) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-52200-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-52200-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-52200-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-52200-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-52200-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
