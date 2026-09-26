const product = {
	"id": "dynabrade-52597",
	"slug": "ponceuse-rotative-dynabrade-52597",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Dynabrade 52597",
	"brand": "Dynabrade",
	"model": "52597",
	"mpn": "52597",
	"variant": {
		"familyId": "dynabrade-ponceuse-rotative",
		"label": "52597",
		"distinguishingAttributes": {
			"Puissance moteur": "969 W",
			"Vitesse moteur publiée": "6 000 tr/min",
			"Filetage de sortie": "5/8\"-11 Male",
			"Masse": "2,6 kg",
			"Longueur": "373 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1138,
		"typical": 1138,
		"max": 1138
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 3/8 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-52597-technical.webp",
		"alt": "Repères techniques Dynabrade 52597 : consommation maximale publiée de 1 138 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=92",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 52597, référence 52597, présente une consommation maximale publiée de 1 138 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 92. Puissance moteur : 969 W. Vitesse moteur publiée : 6 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 969 W.",
			"Vitesse moteur publiée : 6 000 tr/min.",
			"Filetage de sortie : 5/8\"-11 Male.",
			"Masse : 2,6 kg.",
			"Entrée d’air : 3/8 pouce NPT.",
			"Flexible : 10 mm de diamètre intérieur publié."
		],
		"limitations": [
			"Hauteur non retenue : le tableau publie des unités contradictoires (3-7/8 (104)).",
			"Le calcul conserve la consommation maximale publiée, sans la réduire selon un cycle de travail supposé. Cette valeur ne constitue pas une mesure de débit réalisée par CompatAir.",
			"Le catalogue ne fournit pas de courbe de consommation selon la pression pour cette référence. Vérifier la pression dynamique à l’entrée de l’outil pendant son fonctionnement.",
			"Le diamètre intérieur publié ne suffit pas à valider un réseau : la longueur, les raccords et les pertes de pression restent à contrôler.",
			"Cette fiche repose sur l’édition D25.01 du catalogue international. Elle ne prouve ni la disponibilité actuelle en France ni l’équipement exact livré par un vendeur."
		]
	},
	"specifications": [
		{
			"label": "Puissance moteur",
			"value": "969 W",
			"evidenceIds": [
				"dynabrade-52597-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "6 000 tr/min",
			"evidenceIds": [
				"dynabrade-52597-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/8\"-11 Male",
			"evidenceIds": [
				"dynabrade-52597-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "2,6 kg",
			"evidenceIds": [
				"dynabrade-52597-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "373 mm",
			"evidenceIds": [
				"dynabrade-52597-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-52597-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=92",
			"sourceLabel": "Dynabrade, catalogue D25.01, 52597, page 92",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 92-0, ligne 1. Consommation maximale publiée : 40 (1,138) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-52597-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-52597-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-52597-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-52597-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-52597-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
