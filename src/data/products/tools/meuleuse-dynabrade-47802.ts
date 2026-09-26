const product = {
	"id": "dynabrade-47802",
	"slug": "meuleuse-dynabrade-47802",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 47802",
	"brand": "Dynabrade",
	"model": "47802",
	"mpn": "47802",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "47802",
		"distinguishingAttributes": {
			"Puissance moteur": "298 W",
			"Vitesse moteur publiée": "20 000 tr/min",
			"Masse": "0,46 kg",
			"Longueur": "150 mm",
			"Hauteur": "73 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 708,
		"typical": 708,
		"max": 708
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-47802-technical.webp",
		"alt": "Repères techniques Dynabrade 47802 : consommation maximale publiée de 708 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=59",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 47802, référence 47802, présente une consommation maximale publiée de 708 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 59. Puissance moteur : 298 W. Vitesse moteur publiée : 20 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 298 W.",
			"Vitesse moteur publiée : 20 000 tr/min.",
			"Masse : 0,46 kg.",
			"Longueur : 150 mm.",
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
				"dynabrade-47802-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "20 000 tr/min",
			"evidenceIds": [
				"dynabrade-47802-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,46 kg",
			"evidenceIds": [
				"dynabrade-47802-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "150 mm",
			"evidenceIds": [
				"dynabrade-47802-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "73 mm",
			"evidenceIds": [
				"dynabrade-47802-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-47802-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=59",
			"sourceLabel": "Dynabrade, catalogue D25.01, 47802, page 59",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 59-0, ligne 3. Consommation maximale publiée : 25 (708) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-47802-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-47802-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-47802-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-47802-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-47802-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
