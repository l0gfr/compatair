const product = {
	"id": "dynabrade-52438",
	"slug": "tronconneuse-dynabrade-52438",
	"categoryId": "tronconneuse",
	"category": "Tronçonneuse pneumatique",
	"label": "Tronçonneuse pneumatique Dynabrade 52438",
	"brand": "Dynabrade",
	"model": "52438",
	"mpn": "52438",
	"variant": {
		"familyId": "dynabrade-tronconneuse",
		"label": "52438",
		"distinguishingAttributes": {
			"Puissance moteur": "746 W",
			"Vitesse moteur publiée": "12 000 tr/min",
			"Filetage de sortie": "3/8\"-24 Male",
			"Masse": "3 kg",
			"Longueur": "371 mm",
			"Hauteur": "114 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1138,
		"typical": 1138,
		"max": 1138
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 3/8 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-52438-technical.webp",
		"alt": "Repères techniques Dynabrade 52438 : consommation maximale publiée de 1 138 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=115",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 52438, référence 52438, présente une consommation maximale publiée de 1 138 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 115. Puissance moteur : 746 W. Vitesse moteur publiée : 12 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 746 W.",
			"Vitesse moteur publiée : 12 000 tr/min.",
			"Filetage de sortie : 3/8\"-24 Male.",
			"Masse : 3 kg.",
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
			"value": "746 W",
			"evidenceIds": [
				"dynabrade-52438-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"dynabrade-52438-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "3/8\"-24 Male",
			"evidenceIds": [
				"dynabrade-52438-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "3 kg",
			"evidenceIds": [
				"dynabrade-52438-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "371 mm",
			"evidenceIds": [
				"dynabrade-52438-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "114 mm",
			"evidenceIds": [
				"dynabrade-52438-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-52438-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=115",
			"sourceLabel": "Dynabrade, catalogue D25.01, 52438, page 115",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 115-0, ligne 2. Consommation maximale publiée : 40 (1,138) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-52438-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-52438-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-52438-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-52438-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-52438-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
