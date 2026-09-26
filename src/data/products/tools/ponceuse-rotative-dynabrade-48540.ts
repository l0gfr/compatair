const product = {
	"id": "dynabrade-48540",
	"slug": "ponceuse-rotative-dynabrade-48540",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Dynabrade 48540",
	"brand": "Dynabrade",
	"model": "48540",
	"mpn": "48540",
	"variant": {
		"familyId": "dynabrade-ponceuse-rotative",
		"label": "48540",
		"distinguishingAttributes": {
			"Puissance moteur": "298 W",
			"Vitesse moteur publiée": "12 000 tr/min",
			"Filetage de sortie": "1/4\"-20 Male",
			"Masse": "0,5 kg",
			"Longueur": "124 mm",
			"Hauteur": "89 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 765,
		"typical": 765,
		"max": 765
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-48540-technical.webp",
		"alt": "Repères techniques Dynabrade 48540 : consommation maximale publiée de 765 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=75",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 48540, référence 48540, présente une consommation maximale publiée de 765 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 75. Puissance moteur : 298 W. Vitesse moteur publiée : 12 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 298 W.",
			"Vitesse moteur publiée : 12 000 tr/min.",
			"Filetage de sortie : 1/4\"-20 Male.",
			"Masse : 0,5 kg.",
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
			"value": "298 W",
			"evidenceIds": [
				"dynabrade-48540-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"dynabrade-48540-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "1/4\"-20 Male",
			"evidenceIds": [
				"dynabrade-48540-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,5 kg",
			"evidenceIds": [
				"dynabrade-48540-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "124 mm",
			"evidenceIds": [
				"dynabrade-48540-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "89 mm",
			"evidenceIds": [
				"dynabrade-48540-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-48540-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=75",
			"sourceLabel": "Dynabrade, catalogue D25.01, 48540, page 75",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 75-1, ligne 4. Consommation maximale publiée : 27 (765) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-48540-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-48540-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-48540-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-48540-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-48540-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
