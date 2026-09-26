const product = {
	"id": "dynabrade-14306",
	"slug": "ponceuse-bande-dynabrade-14306",
	"categoryId": "ponceuse-bande",
	"category": "Ponceuse à bande pneumatique",
	"label": "Ponceuse à bande pneumatique Dynabrade 14306",
	"brand": "Dynabrade",
	"model": "14306",
	"mpn": "14306",
	"variant": {
		"familyId": "dynabrade-ponceuse-bande",
		"label": "14306",
		"distinguishingAttributes": {
			"Puissance moteur": "1 790 W",
			"Vitesse moteur publiée": "13 000 tr/min",
			"Bande abrasive, pouces (mm)": "2 (51) W x 45 (1,143) L",
			"Masse": "8,7 kg",
			"Longueur": "581 mm",
			"Hauteur": "241 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 3002,
		"typical": 3002,
		"max": 3002
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/2 pouce NPT, flexible intérieur 13 mm",
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"image": {
		"src": "/images/products/dynabrade-14306-technical.webp",
		"alt": "Repères techniques Dynabrade 14306 : consommation maximale publiée de 3 002 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=28",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 14306, référence 14306, présente une consommation maximale publiée de 3 002 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 28. Puissance moteur : 1 790 W. Vitesse moteur publiée : 13 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 1 790 W.",
			"Vitesse moteur publiée : 13 000 tr/min.",
			"Bande abrasive, pouces (mm) : 2 (51) W x 45 (1,143) L.",
			"Masse : 8,7 kg.",
			"Entrée d’air : 1/2 pouce NPT.",
			"Flexible : 13 mm de diamètre intérieur publié."
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
			"value": "1 790 W",
			"evidenceIds": [
				"dynabrade-14306-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "13 000 tr/min",
			"evidenceIds": [
				"dynabrade-14306-catalogue-d25-01"
			]
		},
		{
			"label": "Bande abrasive, pouces (mm)",
			"value": "2 (51) W x 45 (1,143) L",
			"evidenceIds": [
				"dynabrade-14306-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "8,7 kg",
			"evidenceIds": [
				"dynabrade-14306-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "581 mm",
			"evidenceIds": [
				"dynabrade-14306-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "241 mm",
			"evidenceIds": [
				"dynabrade-14306-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-14306-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=28",
			"sourceLabel": "Dynabrade, catalogue D25.01, 14306, page 28",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 28-0, ligne 3. Consommation maximale publiée : 106 (3,002) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-14306-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-14306-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-14306-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-14306-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-14306-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
