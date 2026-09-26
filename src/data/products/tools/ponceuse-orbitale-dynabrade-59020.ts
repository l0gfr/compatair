const product = {
	"id": "dynabrade-59020",
	"slug": "ponceuse-orbitale-dynabrade-59020",
	"categoryId": "ponceuse-orbitale",
	"category": "Ponceuse orbitale pneumatique",
	"label": "Ponceuse orbitale pneumatique Dynabrade Dynorbital-Spirit 59020",
	"brand": "Dynabrade",
	"model": "Dynorbital-Spirit 59020",
	"mpn": "59020",
	"variant": {
		"familyId": "dynabrade-ponceuse-orbitale",
		"label": "Dynorbital-Spirit 59020",
		"distinguishingAttributes": {
			"Aspiration des poussières": "Sans aspiration",
			"Diamètre du plateau": "127 mm",
			"Diamètre de l’orbite": "5 mm",
			"Masse": "0,6 kg",
			"Longueur": "165 mm",
			"Puissance moteur": "186 W",
			"Vitesse moteur publiée": "12 000 tr/min"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 396,
		"typical": 396,
		"max": 396
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-59020-technical.webp",
		"alt": "Repères techniques Dynabrade Dynorbital-Spirit 59020 : consommation publiée de 396 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=157",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade Dynorbital-Spirit 59020, référence 59020, présente une consommation publiée de 396 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 157. Aspiration des poussières : Sans aspiration. Diamètre du plateau : 127 mm.",
		"verifiedFacts": [
			"Aspiration des poussières : Sans aspiration.",
			"Diamètre du plateau : 127 mm.",
			"Diamètre de l’orbite : 5 mm.",
			"Masse : 0,6 kg.",
			"Entrée d’air : 1/4 pouce NPT.",
			"Flexible : 6 mm de diamètre intérieur publié."
		],
		"limitations": [
			"Le calcul conserve la consommation publiée, sans la réduire selon un cycle de travail supposé. Cette valeur ne constitue pas une mesure de débit réalisée par CompatAir.",
			"Le catalogue ne fournit pas de courbe de consommation selon la pression pour cette référence. Vérifier la pression dynamique à l’entrée de l’outil pendant son fonctionnement.",
			"Le diamètre intérieur publié ne suffit pas à valider un réseau : la longueur, les raccords et les pertes de pression restent à contrôler.",
			"Cette fiche repose sur l’édition D25.01 du catalogue international. Elle ne prouve ni la disponibilité actuelle en France ni l’équipement exact livré par un vendeur."
		]
	},
	"specifications": [
		{
			"label": "Aspiration des poussières",
			"value": "Sans aspiration",
			"evidenceIds": [
				"dynabrade-59020-catalogue-d25-01"
			]
		},
		{
			"label": "Diamètre du plateau",
			"value": "127 mm",
			"evidenceIds": [
				"dynabrade-59020-catalogue-d25-01"
			]
		},
		{
			"label": "Diamètre de l’orbite",
			"value": "5 mm",
			"evidenceIds": [
				"dynabrade-59020-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,6 kg",
			"evidenceIds": [
				"dynabrade-59020-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "165 mm",
			"evidenceIds": [
				"dynabrade-59020-catalogue-d25-01"
			]
		},
		{
			"label": "Puissance moteur",
			"value": "186 W",
			"evidenceIds": [
				"dynabrade-59020-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"dynabrade-59020-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-59020-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=157",
			"sourceLabel": "Dynabrade, catalogue D25.01, 59020, page 157",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 157-0, ligne 5. Consommation publiée : 14 (396) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-59020-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-59020-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-59020-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-59020-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-59020-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
