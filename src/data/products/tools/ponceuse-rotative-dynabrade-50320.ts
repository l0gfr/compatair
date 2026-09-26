const product = {
	"id": "dynabrade-50320",
	"slug": "ponceuse-rotative-dynabrade-50320",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Dynabrade 50320",
	"brand": "Dynabrade",
	"model": "50320",
	"mpn": "50320",
	"variant": {
		"familyId": "dynabrade-ponceuse-rotative",
		"label": "50320",
		"distinguishingAttributes": {
			"Puissance moteur": "522 W",
			"Vitesse moteur publiée": "8 000 tr/min",
			"Filetage de sortie": "5/8\"-11 Male",
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
		"min": 850,
		"typical": 850,
		"max": 850
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-50320-technical.webp",
		"alt": "Repères techniques Dynabrade 50320 : consommation maximale publiée de 850 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=81",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 50320, référence 50320, présente une consommation maximale publiée de 850 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 81. Puissance moteur : 522 W. Vitesse moteur publiée : 8 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 522 W.",
			"Vitesse moteur publiée : 8 000 tr/min.",
			"Filetage de sortie : 5/8\"-11 Male.",
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
				"dynabrade-50320-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "8 000 tr/min",
			"evidenceIds": [
				"dynabrade-50320-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/8\"-11 Male",
			"evidenceIds": [
				"dynabrade-50320-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1 kg",
			"evidenceIds": [
				"dynabrade-50320-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "168 mm",
			"evidenceIds": [
				"dynabrade-50320-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "143 mm",
			"evidenceIds": [
				"dynabrade-50320-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-50320-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=81",
			"sourceLabel": "Dynabrade, catalogue D25.01, 50320, page 81",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 81-0, ligne 1. Consommation maximale publiée : 30 (850) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-50320-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-50320-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-50320-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-50320-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-50320-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
