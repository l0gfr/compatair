const product = {
	"id": "dynabrade-52558",
	"slug": "ponceuse-rotative-dynabrade-52558",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Dynabrade 52558",
	"brand": "Dynabrade",
	"model": "52558",
	"mpn": "52558",
	"variant": {
		"familyId": "dynabrade-ponceuse-rotative",
		"label": "52558",
		"distinguishingAttributes": {
			"Puissance moteur": "410 W",
			"Vitesse moteur publiée": "15 000 tr/min",
			"Filetage de sortie": "3/8\"-24 Male",
			"Longueur": "114 mm",
			"Hauteur": "98 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 934,
		"typical": 934,
		"max": 934
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-52558-technical.webp",
		"alt": "Repères techniques Dynabrade 52558 : consommation maximale publiée de 934 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=76",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 52558, référence 52558, présente une consommation maximale publiée de 934 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 76. Puissance moteur : 410 W. Vitesse moteur publiée : 15 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 410 W.",
			"Vitesse moteur publiée : 15 000 tr/min.",
			"Filetage de sortie : 3/8\"-24 Male.",
			"Longueur : 114 mm.",
			"Entrée d’air : 1/4 pouce NPT.",
			"Flexible : 10 mm de diamètre intérieur publié."
		],
		"limitations": [
			"Masse non retenue : le tableau publie des unités contradictoires (1.9 (0.8)).",
			"Le calcul conserve la consommation maximale publiée, sans la réduire selon un cycle de travail supposé. Cette valeur ne constitue pas une mesure de débit réalisée par CompatAir.",
			"Le catalogue ne fournit pas de courbe de consommation selon la pression pour cette référence. Vérifier la pression dynamique à l’entrée de l’outil pendant son fonctionnement.",
			"Le diamètre intérieur publié ne suffit pas à valider un réseau : la longueur, les raccords et les pertes de pression restent à contrôler.",
			"Cette fiche repose sur l’édition D25.01 du catalogue international. Elle ne prouve ni la disponibilité actuelle en France ni l’équipement exact livré par un vendeur."
		]
	},
	"specifications": [
		{
			"label": "Puissance moteur",
			"value": "410 W",
			"evidenceIds": [
				"dynabrade-52558-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "15 000 tr/min",
			"evidenceIds": [
				"dynabrade-52558-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "3/8\"-24 Male",
			"evidenceIds": [
				"dynabrade-52558-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "114 mm",
			"evidenceIds": [
				"dynabrade-52558-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "98 mm",
			"evidenceIds": [
				"dynabrade-52558-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-52558-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=76",
			"sourceLabel": "Dynabrade, catalogue D25.01, 52558, page 76",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 76-1, ligne 2. Consommation maximale publiée : 33 (934) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-52558-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-52558-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-52558-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-52558-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-52558-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
