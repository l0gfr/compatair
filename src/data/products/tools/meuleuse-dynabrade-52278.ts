const product = {
	"id": "dynabrade-52278",
	"slug": "meuleuse-dynabrade-52278",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 52278",
	"brand": "Dynabrade",
	"model": "52278",
	"mpn": "52278",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "52278",
		"distinguishingAttributes": {
			"Puissance moteur": "522 W",
			"Vitesse moteur publiée": "20 000 tr/min",
			"Longueur": "206 mm",
			"Hauteur": "48 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1048,
		"typical": 1048,
		"max": 1048
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-52278-technical.webp",
		"alt": "Repères techniques Dynabrade 52278 : consommation maximale publiée de 1 048 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=65",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 52278, référence 52278, présente une consommation maximale publiée de 1 048 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 65. Puissance moteur : 522 W. Vitesse moteur publiée : 20 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 522 W.",
			"Vitesse moteur publiée : 20 000 tr/min.",
			"Longueur : 206 mm.",
			"Hauteur : 48 mm.",
			"Entrée d’air : 1/4 pouce NPT.",
			"Flexible : 10 mm de diamètre intérieur publié."
		],
		"limitations": [
			"Masse non retenue : le tableau publie des unités contradictoires (2.3 (0.7)).",
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
				"dynabrade-52278-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "20 000 tr/min",
			"evidenceIds": [
				"dynabrade-52278-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "206 mm",
			"evidenceIds": [
				"dynabrade-52278-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "48 mm",
			"evidenceIds": [
				"dynabrade-52278-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-52278-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=65",
			"sourceLabel": "Dynabrade, catalogue D25.01, 52278, page 65",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 65-1, ligne 6. Consommation maximale publiée : 37 (1,048) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-52278-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-52278-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-52278-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-52278-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-52278-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
