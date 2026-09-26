const product = {
	"id": "dynabrade-52584",
	"slug": "tronconneuse-dynabrade-52584",
	"categoryId": "tronconneuse",
	"category": "Tronçonneuse pneumatique",
	"label": "Tronçonneuse pneumatique Dynabrade 52584",
	"brand": "Dynabrade",
	"model": "52584",
	"mpn": "52584",
	"variant": {
		"familyId": "dynabrade-tronconneuse",
		"label": "52584",
		"distinguishingAttributes": {
			"Diamètre indiqué au tableau": "115 mm",
			"Puissance moteur": "969 W",
			"Vitesse moteur publiée": "13 000 tr/min",
			"Filetage de sortie": "5/8\"-11",
			"Masse": "2,4 kg",
			"Longueur": "255 mm",
			"Hauteur": "100 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1218,
		"typical": 1218,
		"max": 1218
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 3/8 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-52584-technical.webp",
		"alt": "Repères techniques Dynabrade 52584 : consommation maximale publiée de 1 218 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=112",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 52584, référence 52584, présente une consommation maximale publiée de 1 218 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 112. Diamètre indiqué au tableau : 115 mm. Puissance moteur : 969 W.",
		"verifiedFacts": [
			"Diamètre indiqué au tableau : 115 mm.",
			"Puissance moteur : 969 W.",
			"Vitesse moteur publiée : 13 000 tr/min.",
			"Filetage de sortie : 5/8\"-11.",
			"Entrée d’air : 3/8 pouce NPT.",
			"Flexible : 10 mm de diamètre intérieur publié."
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
			"label": "Diamètre indiqué au tableau",
			"value": "115 mm",
			"evidenceIds": [
				"dynabrade-52584-catalogue-d25-01"
			]
		},
		{
			"label": "Puissance moteur",
			"value": "969 W",
			"evidenceIds": [
				"dynabrade-52584-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "13 000 tr/min",
			"evidenceIds": [
				"dynabrade-52584-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/8\"-11",
			"evidenceIds": [
				"dynabrade-52584-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "2,4 kg",
			"evidenceIds": [
				"dynabrade-52584-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "255 mm",
			"evidenceIds": [
				"dynabrade-52584-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "100 mm",
			"evidenceIds": [
				"dynabrade-52584-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-52584-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=112",
			"sourceLabel": "Dynabrade, catalogue D25.01, 52584, page 112",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 112-0, ligne 1. Consommation maximale publiée : 43 (1,218) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-52584-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-52584-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-52584-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-52584-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-52584-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
