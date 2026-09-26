const product = {
	"id": "dynabrade-57572",
	"slug": "ponceuse-orbitale-dynabrade-57572",
	"categoryId": "ponceuse-orbitale",
	"category": "Ponceuse orbitale pneumatique",
	"label": "Ponceuse orbitale pneumatique Dynabrade 57572",
	"brand": "Dynabrade",
	"model": "57572",
	"mpn": "57572",
	"variant": {
		"familyId": "dynabrade-ponceuse-orbitale",
		"label": "57572",
		"distinguishingAttributes": {
			"Puissance moteur": "179 W",
			"Vitesse moteur publiée": "10 000 tr/min",
			"Diamètre du plateau": "127 mm",
			"Filetage de sortie": "5/16\"-24 Female",
			"Masse": "1 kg",
			"Longueur": "165 mm",
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
		"min": 453,
		"typical": 453,
		"max": 453
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-57572-technical.webp",
		"alt": "Repères techniques Dynabrade 57572 : consommation maximale publiée de 453 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=152",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 57572, référence 57572, présente une consommation maximale publiée de 453 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 152. Puissance moteur : 179 W. Vitesse moteur publiée : 10 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 179 W.",
			"Vitesse moteur publiée : 10 000 tr/min.",
			"Diamètre du plateau : 127 mm.",
			"Filetage de sortie : 5/16\"-24 Female.",
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
			"value": "179 W",
			"evidenceIds": [
				"dynabrade-57572-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "10 000 tr/min",
			"evidenceIds": [
				"dynabrade-57572-catalogue-d25-01"
			]
		},
		{
			"label": "Diamètre du plateau",
			"value": "127 mm",
			"evidenceIds": [
				"dynabrade-57572-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/16\"-24 Female",
			"evidenceIds": [
				"dynabrade-57572-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1 kg",
			"evidenceIds": [
				"dynabrade-57572-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "165 mm",
			"evidenceIds": [
				"dynabrade-57572-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "92 mm",
			"evidenceIds": [
				"dynabrade-57572-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-57572-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=152",
			"sourceLabel": "Dynabrade, catalogue D25.01, 57572, page 152",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 152-0, ligne 1. Consommation maximale publiée : 16 (453) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-57572-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-57572-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-57572-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-57572-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-57572-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
