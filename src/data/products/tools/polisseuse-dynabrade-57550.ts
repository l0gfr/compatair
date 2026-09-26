const product = {
	"id": "dynabrade-57550",
	"slug": "polisseuse-dynabrade-57550",
	"categoryId": "polisseuse",
	"category": "Polisseuse pneumatique",
	"label": "Polisseuse pneumatique Dynabrade 57550",
	"brand": "Dynabrade",
	"model": "57550",
	"mpn": "57550",
	"variant": {
		"familyId": "dynabrade-polisseuse",
		"label": "57550",
		"distinguishingAttributes": {
			"Puissance moteur": "186 W",
			"Vitesse moteur publiée": "2 400 tr/min",
			"Filetage de sortie": "1/4\"-20 Male",
			"Masse": "0,9 kg",
			"Longueur": "137 mm",
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
		"src": "/images/products/dynabrade-57550-technical.webp",
		"alt": "Repères techniques Dynabrade 57550 : consommation maximale publiée de 510 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=123",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 57550, référence 57550, présente une consommation maximale publiée de 510 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 123. Puissance moteur : 186 W. Vitesse moteur publiée : 2 400 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 186 W.",
			"Vitesse moteur publiée : 2 400 tr/min.",
			"Filetage de sortie : 1/4\"-20 Male.",
			"Masse : 0,9 kg.",
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
			"value": "186 W",
			"evidenceIds": [
				"dynabrade-57550-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "2 400 tr/min",
			"evidenceIds": [
				"dynabrade-57550-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "1/4\"-20 Male",
			"evidenceIds": [
				"dynabrade-57550-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,9 kg",
			"evidenceIds": [
				"dynabrade-57550-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "137 mm",
			"evidenceIds": [
				"dynabrade-57550-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "108 mm",
			"evidenceIds": [
				"dynabrade-57550-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-57550-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=123",
			"sourceLabel": "Dynabrade, catalogue D25.01, 57550, page 123",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 123-0, ligne 1. Consommation maximale publiée : 18 (510) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-57550-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-57550-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-57550-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-57550-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-57550-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
