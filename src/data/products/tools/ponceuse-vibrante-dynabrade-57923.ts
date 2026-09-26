const product = {
	"id": "dynabrade-57923",
	"slug": "ponceuse-vibrante-dynabrade-57923",
	"categoryId": "ponceuse-vibrante",
	"category": "Ponceuse vibrante pneumatique",
	"label": "Ponceuse vibrante pneumatique Dynabrade 57923",
	"brand": "Dynabrade",
	"model": "57923",
	"mpn": "57923",
	"variant": {
		"familyId": "dynabrade-ponceuse-vibrante",
		"label": "57923",
		"distinguishingAttributes": {
			"Vitesse moteur publiée": "20 000 tr/min",
			"Masse": "0,5 kg",
			"Longueur": "140 mm",
			"Hauteur": "76 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 255,
		"typical": 255,
		"max": 255
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-57923-technical.webp",
		"alt": "Repères techniques Dynabrade 57923 : consommation maximale publiée de 255 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=173",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 57923, référence 57923, présente une consommation maximale publiée de 255 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 173. Vitesse moteur publiée : 20 000 tr/min. Masse : 0,5 kg.",
		"verifiedFacts": [
			"Vitesse moteur publiée : 20 000 tr/min.",
			"Masse : 0,5 kg.",
			"Longueur : 140 mm.",
			"Hauteur : 76 mm.",
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
			"label": "Vitesse moteur publiée",
			"value": "20 000 tr/min",
			"evidenceIds": [
				"dynabrade-57923-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,5 kg",
			"evidenceIds": [
				"dynabrade-57923-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "140 mm",
			"evidenceIds": [
				"dynabrade-57923-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "76 mm",
			"evidenceIds": [
				"dynabrade-57923-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-57923-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=173",
			"sourceLabel": "Dynabrade, catalogue D25.01, 57923, page 173",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 173-0, ligne 2. Consommation maximale publiée : 9 (255) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-57923-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-57923-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-57923-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-57923-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-57923-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
