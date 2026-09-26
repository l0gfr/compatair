const product = {
	"id": "dynabrade-52430",
	"slug": "tronconneuse-dynabrade-52430",
	"categoryId": "tronconneuse",
	"category": "Tronçonneuse pneumatique",
	"label": "Tronçonneuse pneumatique Dynabrade 52430",
	"brand": "Dynabrade",
	"model": "52430",
	"mpn": "52430",
	"variant": {
		"familyId": "dynabrade-tronconneuse",
		"label": "52430",
		"distinguishingAttributes": {
			"Puissance moteur": "522 W",
			"Vitesse moteur publiée": "15 000 tr/min",
			"Filetage de sortie": "3/8\"-24 Male",
			"Masse": "1,2 kg",
			"Longueur": "187 mm",
			"Hauteur": "121 mm"
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
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-52430-technical.webp",
		"alt": "Repères techniques Dynabrade 52430 : consommation maximale publiée de 906 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=111",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 52430, référence 52430, présente une consommation maximale publiée de 906 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 111. Puissance moteur : 522 W. Vitesse moteur publiée : 15 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 522 W.",
			"Vitesse moteur publiée : 15 000 tr/min.",
			"Filetage de sortie : 3/8\"-24 Male.",
			"Masse : 1,2 kg.",
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
			"label": "Puissance moteur",
			"value": "522 W",
			"evidenceIds": [
				"dynabrade-52430-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "15 000 tr/min",
			"evidenceIds": [
				"dynabrade-52430-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "3/8\"-24 Male",
			"evidenceIds": [
				"dynabrade-52430-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1,2 kg",
			"evidenceIds": [
				"dynabrade-52430-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "187 mm",
			"evidenceIds": [
				"dynabrade-52430-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "121 mm",
			"evidenceIds": [
				"dynabrade-52430-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-52430-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=111",
			"sourceLabel": "Dynabrade, catalogue D25.01, 52430, page 111",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 111-0, ligne 1. Consommation maximale publiée : 32 (906) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-52430-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-52430-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-52430-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-52430-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-52430-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
