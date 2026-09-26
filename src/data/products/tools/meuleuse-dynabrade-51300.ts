const product = {
	"id": "dynabrade-51300",
	"slug": "meuleuse-dynabrade-51300",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 51300",
	"brand": "Dynabrade",
	"model": "51300",
	"mpn": "51300",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "51300",
		"distinguishingAttributes": {
			"Puissance moteur": "373 W",
			"Vitesse moteur publiée": "15 000 tr/min",
			"Filetage de sortie": "3/8\"-24 Male",
			"Masse": "0,7 kg",
			"Longueur": "178 mm",
			"Hauteur": "48 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 680,
		"typical": 680,
		"max": 680
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-51300-technical.webp",
		"alt": "Repères techniques Dynabrade 51300 : consommation maximale publiée de 680 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=61",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 51300, référence 51300, présente une consommation maximale publiée de 680 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 61. Puissance moteur : 373 W. Vitesse moteur publiée : 15 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 373 W.",
			"Vitesse moteur publiée : 15 000 tr/min.",
			"Filetage de sortie : 3/8\"-24 Male.",
			"Masse : 0,7 kg.",
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
				"dynabrade-51300-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "15 000 tr/min",
			"evidenceIds": [
				"dynabrade-51300-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "3/8\"-24 Male",
			"evidenceIds": [
				"dynabrade-51300-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,7 kg",
			"evidenceIds": [
				"dynabrade-51300-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "178 mm",
			"evidenceIds": [
				"dynabrade-51300-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "48 mm",
			"evidenceIds": [
				"dynabrade-51300-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-51300-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=61",
			"sourceLabel": "Dynabrade, catalogue D25.01, 51300, page 61",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 61-0, ligne 1. Consommation maximale publiée : 24 (680) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-51300-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-51300-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-51300-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-51300-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-51300-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
