const product = {
	"id": "dynabrade-52596",
	"slug": "ponceuse-rotative-dynabrade-52596",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Dynabrade 52596",
	"brand": "Dynabrade",
	"model": "52596",
	"mpn": "52596",
	"variant": {
		"familyId": "dynabrade-ponceuse-rotative",
		"label": "52596",
		"distinguishingAttributes": {
			"Puissance moteur": "970 W",
			"Vitesse moteur publiée": "12 000 tr/min",
			"Filetage de sortie": "5/8\"-11 Male",
			"Masse": "2,5 kg",
			"Longueur": "410 mm",
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
		"src": "/images/products/dynabrade-52596-technical.webp",
		"alt": "Repères techniques Dynabrade 52596 : consommation maximale publiée de 1 218 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=91",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 52596, référence 52596, présente une consommation maximale publiée de 1 218 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 91. Puissance moteur : 970 W. Vitesse moteur publiée : 12 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 970 W.",
			"Vitesse moteur publiée : 12 000 tr/min.",
			"Filetage de sortie : 5/8\"-11 Male.",
			"Masse : 2,5 kg.",
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
			"label": "Puissance moteur",
			"value": "970 W",
			"evidenceIds": [
				"dynabrade-52596-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"dynabrade-52596-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/8\"-11 Male",
			"evidenceIds": [
				"dynabrade-52596-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "2,5 kg",
			"evidenceIds": [
				"dynabrade-52596-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "410 mm",
			"evidenceIds": [
				"dynabrade-52596-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "100 mm",
			"evidenceIds": [
				"dynabrade-52596-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-52596-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=91",
			"sourceLabel": "Dynabrade, catalogue D25.01, 52596, page 91",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 91-0, ligne 1. Consommation maximale publiée : 43 (1,218) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-52596-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-52596-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-52596-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-52596-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-52596-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
