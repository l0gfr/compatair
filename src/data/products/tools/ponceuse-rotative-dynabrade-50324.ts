const product = {
	"id": "dynabrade-50324",
	"slug": "ponceuse-rotative-dynabrade-50324",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Dynabrade 50324",
	"brand": "Dynabrade",
	"model": "50324",
	"mpn": "50324",
	"variant": {
		"familyId": "dynabrade-ponceuse-rotative",
		"label": "50324",
		"distinguishingAttributes": {
			"Puissance moteur": "522 W",
			"Vitesse moteur publiée": "11 000 tr/min",
			"Filetage de sortie": "3/8\"-24 Male",
			"Masse": "1 kg",
			"Longueur": "168 mm",
			"Hauteur": "143 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 906,
		"typical": 906,
		"max": 906
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-50324-technical.webp",
		"alt": "Repères techniques Dynabrade 50324 : consommation maximale publiée de 906 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=80",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 50324, référence 50324, présente une consommation maximale publiée de 906 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 80. Puissance moteur : 522 W. Vitesse moteur publiée : 11 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 522 W.",
			"Vitesse moteur publiée : 11 000 tr/min.",
			"Filetage de sortie : 3/8\"-24 Male.",
			"Masse : 1 kg.",
			"Entrée d’air : 1/4 pouce NPT.",
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
			"value": "522 W",
			"evidenceIds": [
				"dynabrade-50324-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "11 000 tr/min",
			"evidenceIds": [
				"dynabrade-50324-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "3/8\"-24 Male",
			"evidenceIds": [
				"dynabrade-50324-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1 kg",
			"evidenceIds": [
				"dynabrade-50324-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "168 mm",
			"evidenceIds": [
				"dynabrade-50324-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "143 mm",
			"evidenceIds": [
				"dynabrade-50324-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-50324-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=80",
			"sourceLabel": "Dynabrade, catalogue D25.01, 50324, page 80",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 80-0, ligne 1. Consommation maximale publiée : 32 (906) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-50324-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-50324-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-50324-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-50324-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-50324-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
