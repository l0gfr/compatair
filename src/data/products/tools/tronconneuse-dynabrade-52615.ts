const product = {
	"id": "dynabrade-52615",
	"slug": "tronconneuse-dynabrade-52615",
	"categoryId": "tronconneuse",
	"category": "Tronçonneuse pneumatique",
	"label": "Tronçonneuse pneumatique Dynabrade 52615",
	"brand": "Dynabrade",
	"model": "52615",
	"mpn": "52615",
	"variant": {
		"familyId": "dynabrade-tronconneuse",
		"label": "52615",
		"distinguishingAttributes": {
			"Puissance moteur": "969 W",
			"Vitesse moteur publiée": "12 000 tr/min",
			"Filetage de broche": "3/8\"-24",
			"Masse": "3,3 kg",
			"Longueur": "385 mm",
			"Hauteur": "213 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1189,
		"typical": 1189,
		"max": 1189
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 3/8 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-52615-technical.webp",
		"alt": "Repères techniques Dynabrade 52615 : consommation maximale publiée de 1 189 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=116",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 52615, référence 52615, présente une consommation maximale publiée de 1 189 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 116. Puissance moteur : 969 W. Vitesse moteur publiée : 12 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 969 W.",
			"Vitesse moteur publiée : 12 000 tr/min.",
			"Filetage de broche : 3/8\"-24.",
			"Masse : 3,3 kg.",
			"Entrée d’air : 3/8 pouce NPT.",
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
			"value": "969 W",
			"evidenceIds": [
				"dynabrade-52615-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"dynabrade-52615-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de broche",
			"value": "3/8\"-24",
			"evidenceIds": [
				"dynabrade-52615-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "3,3 kg",
			"evidenceIds": [
				"dynabrade-52615-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "385 mm",
			"evidenceIds": [
				"dynabrade-52615-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "213 mm",
			"evidenceIds": [
				"dynabrade-52615-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-52615-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=116",
			"sourceLabel": "Dynabrade, catalogue D25.01, 52615, page 116",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 116-0, ligne 1. Consommation maximale publiée : 42 (1,189) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-52615-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-52615-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-52615-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-52615-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-52615-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
