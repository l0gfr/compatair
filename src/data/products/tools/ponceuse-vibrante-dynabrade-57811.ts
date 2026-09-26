const product = {
	"id": "dynabrade-57811",
	"slug": "ponceuse-vibrante-dynabrade-57811",
	"categoryId": "ponceuse-vibrante",
	"category": "Ponceuse vibrante pneumatique",
	"label": "Ponceuse vibrante pneumatique Dynabrade 57811",
	"brand": "Dynabrade",
	"model": "57811",
	"mpn": "57811",
	"variant": {
		"familyId": "dynabrade-ponceuse-vibrante",
		"label": "57811",
		"distinguishingAttributes": {
			"Puissance moteur": "209 W",
			"Vitesse moteur publiée": "10 000 tr/min",
			"Masse": "1,2 kg",
			"Longueur": "184 mm",
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
		"src": "/images/products/dynabrade-57811-technical.webp",
		"alt": "Repères techniques Dynabrade 57811 : consommation maximale publiée de 510 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=175",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 57811, référence 57811, présente une consommation maximale publiée de 510 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 175. Puissance moteur : 209 W. Vitesse moteur publiée : 10 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 209 W.",
			"Vitesse moteur publiée : 10 000 tr/min.",
			"Masse : 1,2 kg.",
			"Longueur : 184 mm.",
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
			"value": "209 W",
			"evidenceIds": [
				"dynabrade-57811-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "10 000 tr/min",
			"evidenceIds": [
				"dynabrade-57811-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1,2 kg",
			"evidenceIds": [
				"dynabrade-57811-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "184 mm",
			"evidenceIds": [
				"dynabrade-57811-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "108 mm",
			"evidenceIds": [
				"dynabrade-57811-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-57811-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=175",
			"sourceLabel": "Dynabrade, catalogue D25.01, 57811, page 175",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 175-0, ligne 5. Consommation maximale publiée : 18 (510) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-57811-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-57811-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-57811-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-57811-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-57811-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
