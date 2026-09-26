const product = {
	"id": "dynabrade-52100",
	"slug": "meuleuse-dynabrade-52100",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 52100",
	"brand": "Dynabrade",
	"model": "52100",
	"mpn": "52100",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "52100",
		"distinguishingAttributes": {
			"Puissance moteur": "522 W",
			"Vitesse moteur publiée": "950 tr/min",
			"Filetage de sortie": "1/2\"-20 Male",
			"Masse": "1,6 kg",
			"Longueur": "318 mm",
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
		"min": 957,
		"typical": 957,
		"max": 957
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-52100-technical.webp",
		"alt": "Repères techniques Dynabrade 52100 : consommation maximale publiée de 957 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=65",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 52100, référence 52100, présente une consommation maximale publiée de 957 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 65. Puissance moteur : 522 W. Vitesse moteur publiée : 950 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 522 W.",
			"Vitesse moteur publiée : 950 tr/min.",
			"Filetage de sortie : 1/2\"-20 Male.",
			"Masse : 1,6 kg.",
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
			"value": "522 W",
			"evidenceIds": [
				"dynabrade-52100-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "950 tr/min",
			"evidenceIds": [
				"dynabrade-52100-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "1/2\"-20 Male",
			"evidenceIds": [
				"dynabrade-52100-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1,6 kg",
			"evidenceIds": [
				"dynabrade-52100-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "318 mm",
			"evidenceIds": [
				"dynabrade-52100-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "48 mm",
			"evidenceIds": [
				"dynabrade-52100-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-52100-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=65",
			"sourceLabel": "Dynabrade, catalogue D25.01, 52100, page 65",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 65-1, ligne 1. Consommation maximale publiée : 34 (957) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-52100-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-52100-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-52100-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-52100-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-52100-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
