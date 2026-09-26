const product = {
	"id": "dynabrade-53249",
	"slug": "meuleuse-dynabrade-53249",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 53249",
	"brand": "Dynabrade",
	"model": "53249",
	"mpn": "53249",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "53249",
		"distinguishingAttributes": {
			"Puissance moteur": "2 237 W",
			"Vitesse moteur publiée": "6 000 tr/min",
			"Filetage de broche": "5/8\"-11 Male",
			"Masse": "5,2 kg",
			"Longueur": "241 mm",
			"Hauteur": "182 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 2464,
		"typical": 2464,
		"max": 2464
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/2 pouce NPT, flexible intérieur 13 mm",
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"image": {
		"src": "/images/products/dynabrade-53249-technical.webp",
		"alt": "Repères techniques Dynabrade 53249 : consommation maximale publiée de 2 464 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=104",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 53249, référence 53249, présente une consommation maximale publiée de 2 464 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 104. Puissance moteur : 2 237 W. Vitesse moteur publiée : 6 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 2 237 W.",
			"Vitesse moteur publiée : 6 000 tr/min.",
			"Filetage de broche : 5/8\"-11 Male.",
			"Masse : 5,2 kg.",
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
			"value": "2 237 W",
			"evidenceIds": [
				"dynabrade-53249-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "6 000 tr/min",
			"evidenceIds": [
				"dynabrade-53249-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de broche",
			"value": "5/8\"-11 Male",
			"evidenceIds": [
				"dynabrade-53249-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "5,2 kg",
			"evidenceIds": [
				"dynabrade-53249-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "241 mm",
			"evidenceIds": [
				"dynabrade-53249-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "182 mm",
			"evidenceIds": [
				"dynabrade-53249-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-53249-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=104",
			"sourceLabel": "Dynabrade, catalogue D25.01, 53249, page 104",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 104-0, ligne 7. Consommation maximale publiée : 87 (2,464) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-53249-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-53249-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-53249-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-53249-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-53249-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
