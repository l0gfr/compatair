import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "dynabrade-52418",
	"slug": "tronconneuse-dynabrade-52418",
	"categoryId": "tronconneuse",
	"category": "Tronçonneuse pneumatique",
	"label": "Tronçonneuse pneumatique Dynabrade 52418",
	"brand": "Dynabrade",
	"model": "52418",
	"mpn": "52418",
	"variant": {
		"familyId": "dynabrade-tronconneuse",
		"label": "52418",
		"distinguishingAttributes": {
			"Puissance moteur": "522 W",
			"Vitesse moteur publiée": "20 000 tr/min",
			"Pince": "3/8\"",
			"Masse": "1,3 kg",
			"Hauteur": "133 mm"
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
		"src": "/images/products/dynabrade-52418-technical.webp",
		"alt": "Repères techniques Dynabrade 52418 : consommation maximale publiée de 1 048 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=114",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 52418, référence 52418, présente une consommation maximale publiée de 1 048 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 114. Puissance moteur : 522 W. Vitesse moteur publiée : 20 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 522 W.",
			"Vitesse moteur publiée : 20 000 tr/min.",
			"Pince : 3/8\".",
			"Masse : 1,3 kg.",
			"Entrée d’air : 1/4 pouce NPT.",
			"Flexible : 10 mm de diamètre intérieur publié."
		],
		"limitations": [
			"Longueur non retenue : le tableau publie des unités contradictoires (10-15/16 (265)).",
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
				"dynabrade-52418-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "20 000 tr/min",
			"evidenceIds": [
				"dynabrade-52418-catalogue-d25-01"
			]
		},
		{
			"label": "Pince",
			"value": "3/8\"",
			"evidenceIds": [
				"dynabrade-52418-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1,3 kg",
			"evidenceIds": [
				"dynabrade-52418-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "133 mm",
			"evidenceIds": [
				"dynabrade-52418-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-52418-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=114",
			"sourceLabel": "Dynabrade, catalogue D25.01, 52418, page 114",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 114-0, ligne 1. Consommation maximale publiée : 37 (1,048) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-52418-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-52418-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-52418-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-52418-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-52418-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
