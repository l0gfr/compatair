const product = {
	"id": "dynabrade-43505",
	"slug": "meuleuse-dynabrade-43505",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 43505",
	"brand": "Dynabrade",
	"model": "43505",
	"mpn": "43505",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "43505",
		"distinguishingAttributes": {
			"Puissance moteur": "298 W",
			"Vitesse moteur publiée": "25 000 tr/min",
			"Masse": "0,6 kg",
			"Longueur": "280 mm",
			"Hauteur": "44 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 566,
		"typical": 566,
		"max": 566
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-43505-technical.webp",
		"alt": "Repères techniques Dynabrade 43505 : consommation maximale publiée de 566 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=55",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 43505, référence 43505, présente une consommation maximale publiée de 566 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 55. Puissance moteur : 298 W. Vitesse moteur publiée : 25 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 298 W.",
			"Vitesse moteur publiée : 25 000 tr/min.",
			"Masse : 0,6 kg.",
			"Longueur : 280 mm.",
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
			"value": "298 W",
			"evidenceIds": [
				"dynabrade-43505-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "25 000 tr/min",
			"evidenceIds": [
				"dynabrade-43505-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,6 kg",
			"evidenceIds": [
				"dynabrade-43505-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "280 mm",
			"evidenceIds": [
				"dynabrade-43505-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "44 mm",
			"evidenceIds": [
				"dynabrade-43505-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-43505-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=55",
			"sourceLabel": "Dynabrade, catalogue D25.01, 43505, page 55",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 55-0, ligne 2. Consommation maximale publiée : 20 (566) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-43505-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-43505-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-43505-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-43505-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-43505-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
