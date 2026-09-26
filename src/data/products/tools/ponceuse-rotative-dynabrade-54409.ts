const product = {
	"id": "dynabrade-54409",
	"slug": "ponceuse-rotative-dynabrade-54409",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Dynabrade 54409",
	"brand": "Dynabrade",
	"model": "54409",
	"mpn": "54409",
	"variant": {
		"familyId": "dynabrade-ponceuse-rotative",
		"label": "54409",
		"distinguishingAttributes": {
			"Puissance moteur": "522 W",
			"Vitesse moteur publiée": "12 000 tr/min",
			"Diamètre du plateau": "102 mm",
			"Corps de l’outil": "Composite",
			"Longueur": "316 mm",
			"Hauteur": "91 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1133,
		"typical": 1133,
		"max": 1133
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-54409-technical.webp",
		"alt": "Repères techniques Dynabrade 54409 : consommation maximale publiée de 1 133 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=77",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 54409, référence 54409, présente une consommation maximale publiée de 1 133 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 77. Puissance moteur : 522 W. Vitesse moteur publiée : 12 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 522 W.",
			"Vitesse moteur publiée : 12 000 tr/min.",
			"Diamètre du plateau : 102 mm.",
			"Corps de l’outil : Composite.",
			"Entrée d’air : 1/4 pouce NPT.",
			"Flexible : 10 mm de diamètre intérieur publié."
		],
		"limitations": [
			"Masse non retenue : le tableau publie des unités contradictoires (3.3 (1.4)).",
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
				"dynabrade-54409-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"dynabrade-54409-catalogue-d25-01"
			]
		},
		{
			"label": "Diamètre du plateau",
			"value": "102 mm",
			"evidenceIds": [
				"dynabrade-54409-catalogue-d25-01"
			]
		},
		{
			"label": "Corps de l’outil",
			"value": "Composite",
			"evidenceIds": [
				"dynabrade-54409-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "316 mm",
			"evidenceIds": [
				"dynabrade-54409-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "91 mm",
			"evidenceIds": [
				"dynabrade-54409-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-54409-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=77",
			"sourceLabel": "Dynabrade, catalogue D25.01, 54409, page 77",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 77-0, ligne 4. Consommation maximale publiée : 40 (1,133) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-54409-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-54409-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-54409-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-54409-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-54409-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
