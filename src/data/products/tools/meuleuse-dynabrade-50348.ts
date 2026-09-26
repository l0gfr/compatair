const product = {
	"id": "dynabrade-50348",
	"slug": "meuleuse-dynabrade-50348",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 50348",
	"brand": "Dynabrade",
	"model": "50348",
	"mpn": "50348",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "50348",
		"distinguishingAttributes": {
			"Puissance moteur": "1 491 W",
			"Vitesse moteur publiée": "6 000 tr/min",
			"Filetage de sortie": "5/8\"-11 Male",
			"Masse": "3,9 kg",
			"Longueur": "349 mm",
			"Hauteur": "132 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1812,
		"typical": 1812,
		"max": 1812
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/2 pouce NPT, flexible intérieur 13 mm",
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"image": {
		"src": "/images/products/dynabrade-50348-technical.webp",
		"alt": "Repères techniques Dynabrade 50348 : consommation maximale publiée de 1 812 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=102",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 50348, référence 50348, présente une consommation maximale publiée de 1 812 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 102. Puissance moteur : 1 491 W. Vitesse moteur publiée : 6 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 1 491 W.",
			"Vitesse moteur publiée : 6 000 tr/min.",
			"Filetage de sortie : 5/8\"-11 Male.",
			"Masse : 3,9 kg.",
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
			"value": "1 491 W",
			"evidenceIds": [
				"dynabrade-50348-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "6 000 tr/min",
			"evidenceIds": [
				"dynabrade-50348-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/8\"-11 Male",
			"evidenceIds": [
				"dynabrade-50348-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "3,9 kg",
			"evidenceIds": [
				"dynabrade-50348-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "349 mm",
			"evidenceIds": [
				"dynabrade-50348-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "132 mm",
			"evidenceIds": [
				"dynabrade-50348-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-50348-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=102",
			"sourceLabel": "Dynabrade, catalogue D25.01, 50348, page 102",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 102-0, ligne 1. Consommation maximale publiée : 64 (1,812) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-50348-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-50348-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-50348-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-50348-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-50348-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
