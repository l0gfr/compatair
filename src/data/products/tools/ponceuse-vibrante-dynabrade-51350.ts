const product = {
	"id": "dynabrade-51350",
	"slug": "ponceuse-vibrante-dynabrade-51350",
	"categoryId": "ponceuse-vibrante",
	"category": "Ponceuse vibrante pneumatique",
	"label": "Ponceuse vibrante pneumatique Dynabrade 51350",
	"brand": "Dynabrade",
	"model": "51350",
	"mpn": "51350",
	"variant": {
		"familyId": "dynabrade-ponceuse-vibrante",
		"label": "51350",
		"distinguishingAttributes": {
			"Cadence publiée": "2 400 courses/min",
			"Masse": "1,4 kg",
			"Longueur": "279 mm",
			"Hauteur": "95 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 510,
		"typical": 510,
		"max": 510
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-51350-technical.webp",
		"alt": "Repères techniques Dynabrade 51350 : consommation maximale publiée de 510 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=179",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 51350, référence 51350, présente une consommation maximale publiée de 510 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 179. Cadence publiée : 2 400 courses/min. Masse : 1,4 kg.",
		"verifiedFacts": [
			"Cadence publiée : 2 400 courses/min.",
			"Masse : 1,4 kg.",
			"Longueur : 279 mm.",
			"Hauteur : 95 mm.",
			"Entrée d’air : 1/4 pouce NPT.",
			"Flexible : 6 mm de diamètre intérieur publié."
		],
		"limitations": [
			"Puissance moteur non retenue : le tableau publie des unités contradictoires (.3 (186)).",
			"Le calcul conserve la consommation maximale publiée, sans la réduire selon un cycle de travail supposé. Cette valeur ne constitue pas une mesure de débit réalisée par CompatAir.",
			"Le catalogue ne fournit pas de courbe de consommation selon la pression pour cette référence. Vérifier la pression dynamique à l’entrée de l’outil pendant son fonctionnement.",
			"Le diamètre intérieur publié ne suffit pas à valider un réseau : la longueur, les raccords et les pertes de pression restent à contrôler.",
			"Cette fiche repose sur l’édition D25.01 du catalogue international. Elle ne prouve ni la disponibilité actuelle en France ni l’équipement exact livré par un vendeur."
		]
	},
	"specifications": [
		{
			"label": "Cadence publiée",
			"value": "2 400 courses/min",
			"evidenceIds": [
				"dynabrade-51350-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1,4 kg",
			"evidenceIds": [
				"dynabrade-51350-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "279 mm",
			"evidenceIds": [
				"dynabrade-51350-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "95 mm",
			"evidenceIds": [
				"dynabrade-51350-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-51350-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=179",
			"sourceLabel": "Dynabrade, catalogue D25.01, 51350, page 179",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 179-0, ligne 1. Consommation maximale publiée : 18 (510) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-51350-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-51350-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-51350-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-51350-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-51350-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
