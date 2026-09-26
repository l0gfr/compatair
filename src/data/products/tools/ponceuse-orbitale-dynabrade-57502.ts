const product = {
	"id": "dynabrade-57502",
	"slug": "ponceuse-orbitale-dynabrade-57502",
	"categoryId": "ponceuse-orbitale",
	"category": "Ponceuse orbitale pneumatique",
	"label": "Ponceuse orbitale pneumatique Dynabrade 57502",
	"brand": "Dynabrade",
	"model": "57502",
	"mpn": "57502",
	"variant": {
		"familyId": "dynabrade-ponceuse-orbitale",
		"label": "57502",
		"distinguishingAttributes": {
			"Puissance moteur": "60 W",
			"Vitesse moteur publiée": "7 500 tr/min",
			"Diamètre de l’orbite": "5 mm",
			"Diamètre du plateau": "32 mm",
			"Masse": "0,8 kg",
			"Longueur": "127 mm",
			"Hauteur": "92 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 170,
		"typical": 170,
		"max": 170
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-57502-technical.webp",
		"alt": "Repères techniques Dynabrade 57502 : consommation maximale publiée de 170 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=160",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 57502, référence 57502, présente une consommation maximale publiée de 170 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 160. Puissance moteur : 60 W. Vitesse moteur publiée : 7 500 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 60 W.",
			"Vitesse moteur publiée : 7 500 tr/min.",
			"Diamètre de l’orbite : 5 mm.",
			"Diamètre du plateau : 32 mm.",
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
			"value": "60 W",
			"evidenceIds": [
				"dynabrade-57502-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "7 500 tr/min",
			"evidenceIds": [
				"dynabrade-57502-catalogue-d25-01"
			]
		},
		{
			"label": "Diamètre de l’orbite",
			"value": "5 mm",
			"evidenceIds": [
				"dynabrade-57502-catalogue-d25-01"
			]
		},
		{
			"label": "Diamètre du plateau",
			"value": "32 mm",
			"evidenceIds": [
				"dynabrade-57502-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,8 kg",
			"evidenceIds": [
				"dynabrade-57502-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "127 mm",
			"evidenceIds": [
				"dynabrade-57502-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "92 mm",
			"evidenceIds": [
				"dynabrade-57502-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-57502-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=160",
			"sourceLabel": "Dynabrade, catalogue D25.01, 57502, page 160",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 160-0, ligne 2. Consommation maximale publiée : 6 (170) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-57502-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-57502-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-57502-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-57502-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-57502-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
