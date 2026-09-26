const product = {
	"id": "dynabrade-60052",
	"slug": "meuleuse-dynabrade-60052",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 60052",
	"brand": "Dynabrade",
	"model": "60052",
	"mpn": "60052",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "60052",
		"distinguishingAttributes": {
			"Vitesse moteur publiée": "35 000 tr/min",
			"Pince et référence": "3/32\" (60119)",
			"Masse": "0,45 kg",
			"Longueur": "135 mm",
			"Hauteur": "38 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 227,
		"typical": 227,
		"max": 227
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-60052-technical.webp",
		"alt": "Repères techniques Dynabrade 60052 : consommation maximale publiée de 227 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=49",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 60052, référence 60052, présente une consommation maximale publiée de 227 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 49. Vitesse moteur publiée : 35 000 tr/min. Pince et référence : 3/32\" (60119).",
		"verifiedFacts": [
			"Vitesse moteur publiée : 35 000 tr/min.",
			"Pince et référence : 3/32\" (60119).",
			"Masse : 0,45 kg.",
			"Longueur : 135 mm.",
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
			"value": "35 000 tr/min",
			"evidenceIds": [
				"dynabrade-60052-catalogue-d25-01"
			]
		},
		{
			"label": "Pince et référence",
			"value": "3/32\" (60119)",
			"evidenceIds": [
				"dynabrade-60052-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,45 kg",
			"evidenceIds": [
				"dynabrade-60052-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "135 mm",
			"evidenceIds": [
				"dynabrade-60052-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "38 mm",
			"evidenceIds": [
				"dynabrade-60052-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-60052-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=49",
			"sourceLabel": "Dynabrade, catalogue D25.01, 60052, page 49",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 49-0, ligne 2. Consommation maximale publiée : 8 (227) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-60052-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-60052-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-60052-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-60052-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-60052-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
