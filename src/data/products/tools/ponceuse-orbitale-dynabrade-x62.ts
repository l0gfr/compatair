const product = {
	"id": "dynabrade-x62",
	"slug": "ponceuse-orbitale-dynabrade-x62",
	"categoryId": "ponceuse-orbitale",
	"category": "Ponceuse orbitale pneumatique",
	"label": "Ponceuse orbitale pneumatique Dynabrade Dynorbital Extreme X62",
	"brand": "Dynabrade",
	"model": "Dynorbital Extreme X62",
	"mpn": "X62",
	"variant": {
		"familyId": "dynabrade-ponceuse-orbitale",
		"label": "Dynorbital Extreme X62",
		"distinguishingAttributes": {
			"Diamètre du plateau": "152 mm",
			"Fixation du plateau": "Adhésif",
			"Diamètre de l’orbite": "2,5 mm",
			"Aspiration des poussières": "Sans aspiration",
			"Vitesse moteur publiée": "12 000 tr/min",
			"Puissance moteur": "224 W",
			"Masse": "0,8 kg",
			"Hauteur": "95 mm",
			"Longueur": "188 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 538,
		"typical": 538,
		"max": 538
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-x62-technical.webp",
		"alt": "Repères techniques Dynabrade Dynorbital Extreme X62 : consommation maximale publiée de 538 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=155",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade Dynorbital Extreme X62, référence X62, présente une consommation maximale publiée de 538 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 155. Diamètre du plateau : 152 mm. Fixation du plateau : Adhésif.",
		"verifiedFacts": [
			"Diamètre du plateau : 152 mm.",
			"Fixation du plateau : Adhésif.",
			"Diamètre de l’orbite : 2,5 mm.",
			"Aspiration des poussières : Sans aspiration.",
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
			"label": "Diamètre du plateau",
			"value": "152 mm",
			"evidenceIds": [
				"dynabrade-x62-catalogue-d25-01"
			]
		},
		{
			"label": "Fixation du plateau",
			"value": "Adhésif",
			"evidenceIds": [
				"dynabrade-x62-catalogue-d25-01"
			]
		},
		{
			"label": "Diamètre de l’orbite",
			"value": "2,5 mm",
			"evidenceIds": [
				"dynabrade-x62-catalogue-d25-01"
			]
		},
		{
			"label": "Aspiration des poussières",
			"value": "Sans aspiration",
			"evidenceIds": [
				"dynabrade-x62-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"dynabrade-x62-catalogue-d25-01"
			]
		},
		{
			"label": "Puissance moteur",
			"value": "224 W",
			"evidenceIds": [
				"dynabrade-x62-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,8 kg",
			"evidenceIds": [
				"dynabrade-x62-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "95 mm",
			"evidenceIds": [
				"dynabrade-x62-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "188 mm",
			"evidenceIds": [
				"dynabrade-x62-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-x62-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=155",
			"sourceLabel": "Dynabrade, catalogue D25.01, X62, page 155",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 155-0, ligne 10. Consommation maximale publiée : 19 (538) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-x62-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-x62-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-x62-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-x62-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-x62-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
