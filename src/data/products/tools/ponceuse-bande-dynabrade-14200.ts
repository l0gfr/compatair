const product = {
	"id": "dynabrade-14200",
	"slug": "ponceuse-bande-dynabrade-14200",
	"categoryId": "ponceuse-bande",
	"category": "Ponceuse à bande pneumatique",
	"label": "Ponceuse à bande pneumatique Dynabrade 14200",
	"brand": "Dynabrade",
	"model": "14200",
	"mpn": "14200",
	"variant": {
		"familyId": "dynabrade-ponceuse-bande",
		"label": "14200",
		"distinguishingAttributes": {
			"Puissance moteur": "522 W",
			"Vitesse moteur publiée": "20 000 tr/min",
			"Bande abrasive, pouces (mm)": "1 (25) W x 18 (457) L",
			"Masse": "2,2 kg",
			"Longueur": "279 mm",
			"Hauteur": "127 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1020,
		"typical": 1020,
		"max": 1020
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-14200-technical.webp",
		"alt": "Repères techniques Dynabrade 14200 : consommation maximale publiée de 1 020 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=27",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 14200, référence 14200, présente une consommation maximale publiée de 1 020 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 27. Puissance moteur : 522 W. Vitesse moteur publiée : 20 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 522 W.",
			"Vitesse moteur publiée : 20 000 tr/min.",
			"Bande abrasive, pouces (mm) : 1 (25) W x 18 (457) L.",
			"Masse : 2,2 kg.",
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
				"dynabrade-14200-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "20 000 tr/min",
			"evidenceIds": [
				"dynabrade-14200-catalogue-d25-01"
			]
		},
		{
			"label": "Bande abrasive, pouces (mm)",
			"value": "1 (25) W x 18 (457) L",
			"evidenceIds": [
				"dynabrade-14200-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "2,2 kg",
			"evidenceIds": [
				"dynabrade-14200-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "279 mm",
			"evidenceIds": [
				"dynabrade-14200-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "127 mm",
			"evidenceIds": [
				"dynabrade-14200-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-14200-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=27",
			"sourceLabel": "Dynabrade, catalogue D25.01, 14200, page 27",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 27-0, ligne 1. Consommation maximale publiée : 36 (1,020) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-14200-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-14200-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-14200-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-14200-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-14200-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
