const product = {
	"id": "dynabrade-53502",
	"slug": "meuleuse-dynabrade-53502",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 53502",
	"brand": "Dynabrade",
	"model": "53502",
	"mpn": "53502",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "53502",
		"distinguishingAttributes": {
			"Puissance moteur": "373 W",
			"Vitesse moteur publiée": "20 000 tr/min",
			"Masse": "1,5 kg",
			"Longueur": "454 mm",
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
		"src": "/images/products/dynabrade-53502-technical.webp",
		"alt": "Repères techniques Dynabrade 53502 : consommation maximale publiée de 878 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=62",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 53502, référence 53502, présente une consommation maximale publiée de 878 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 62. Puissance moteur : 373 W. Vitesse moteur publiée : 20 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 373 W.",
			"Vitesse moteur publiée : 20 000 tr/min.",
			"Masse : 1,5 kg.",
			"Longueur : 454 mm.",
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
				"dynabrade-53502-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "20 000 tr/min",
			"evidenceIds": [
				"dynabrade-53502-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1,5 kg",
			"evidenceIds": [
				"dynabrade-53502-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "454 mm",
			"evidenceIds": [
				"dynabrade-53502-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "48 mm",
			"evidenceIds": [
				"dynabrade-53502-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-53502-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=62",
			"sourceLabel": "Dynabrade, catalogue D25.01, 53502, page 62",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 62-0, ligne 2. Consommation maximale publiée : 31 (878) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-53502-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-53502-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-53502-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-53502-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-53502-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
