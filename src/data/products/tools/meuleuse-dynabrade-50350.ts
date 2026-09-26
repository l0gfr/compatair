const product = {
	"id": "dynabrade-50350",
	"slug": "meuleuse-dynabrade-50350",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 50350",
	"brand": "Dynabrade",
	"model": "50350",
	"mpn": "50350",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "50350",
		"distinguishingAttributes": {
			"Puissance moteur": "893 W",
			"Vitesse moteur publiée": "6 000 tr/min",
			"Filetage de sortie": "5/8\"-11 Male",
			"Masse": "3,1 kg",
			"Longueur": "298 mm",
			"Hauteur": "118 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1218,
		"typical": 1218,
		"max": 1218
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/2 pouce NPT, flexible intérieur 13 mm",
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"image": {
		"src": "/images/products/dynabrade-50350-technical.webp",
		"alt": "Repères techniques Dynabrade 50350 : consommation maximale publiée de 1 218 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=102",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 50350, référence 50350, présente une consommation maximale publiée de 1 218 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 102. Puissance moteur : 893 W. Vitesse moteur publiée : 6 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 893 W.",
			"Vitesse moteur publiée : 6 000 tr/min.",
			"Filetage de sortie : 5/8\"-11 Male.",
			"Masse : 3,1 kg.",
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
			"value": "893 W",
			"evidenceIds": [
				"dynabrade-50350-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "6 000 tr/min",
			"evidenceIds": [
				"dynabrade-50350-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/8\"-11 Male",
			"evidenceIds": [
				"dynabrade-50350-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "3,1 kg",
			"evidenceIds": [
				"dynabrade-50350-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "298 mm",
			"evidenceIds": [
				"dynabrade-50350-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "118 mm",
			"evidenceIds": [
				"dynabrade-50350-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-50350-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=102",
			"sourceLabel": "Dynabrade, catalogue D25.01, 50350, page 102",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 102-0, ligne 2. Consommation maximale publiée : 43 (1,218) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-50350-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-50350-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-50350-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-50350-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-50350-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
