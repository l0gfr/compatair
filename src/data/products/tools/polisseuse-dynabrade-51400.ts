const product = {
	"id": "dynabrade-51400",
	"slug": "polisseuse-dynabrade-51400",
	"categoryId": "polisseuse",
	"category": "Polisseuse pneumatique",
	"label": "Polisseuse pneumatique Dynabrade 51400",
	"brand": "Dynabrade",
	"model": "51400",
	"mpn": "51400",
	"variant": {
		"familyId": "dynabrade-polisseuse",
		"label": "51400",
		"distinguishingAttributes": {
			"Puissance moteur": "298 W",
			"Vitesse moteur publiée": "3 200 tr/min",
			"Filetage de sortie": "3/8\"-24 Male",
			"Masse": "0,8 kg",
			"Longueur": "222 mm",
			"Hauteur": "108 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 680,
		"typical": 680,
		"max": 680
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-51400-technical.webp",
		"alt": "Repères techniques Dynabrade 51400 : consommation maximale publiée de 680 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=121",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 51400, référence 51400, présente une consommation maximale publiée de 680 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 121. Puissance moteur : 298 W. Vitesse moteur publiée : 3 200 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 298 W.",
			"Vitesse moteur publiée : 3 200 tr/min.",
			"Filetage de sortie : 3/8\"-24 Male.",
			"Masse : 0,8 kg.",
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
			"value": "298 W",
			"evidenceIds": [
				"dynabrade-51400-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "3 200 tr/min",
			"evidenceIds": [
				"dynabrade-51400-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "3/8\"-24 Male",
			"evidenceIds": [
				"dynabrade-51400-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,8 kg",
			"evidenceIds": [
				"dynabrade-51400-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "222 mm",
			"evidenceIds": [
				"dynabrade-51400-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "108 mm",
			"evidenceIds": [
				"dynabrade-51400-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-51400-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=121",
			"sourceLabel": "Dynabrade, catalogue D25.01, 51400, page 121",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 121-0, ligne 1. Consommation maximale publiée : 24 (680) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-51400-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-51400-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-51400-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-51400-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-51400-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
