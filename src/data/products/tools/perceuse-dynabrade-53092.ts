const product = {
	"id": "dynabrade-53092",
	"slug": "perceuse-dynabrade-53092",
	"categoryId": "perceuse",
	"category": "Perceuse pneumatique",
	"label": "Perceuse pneumatique Dynabrade 53092",
	"brand": "Dynabrade",
	"model": "53092",
	"mpn": "53092",
	"variant": {
		"familyId": "dynabrade-perceuse",
		"label": "53092",
		"distinguishingAttributes": {
			"Puissance moteur": "522 W",
			"Vitesse moteur publiée": "500 tr/min",
			"Filetage de broche": "1/2\"-20 Male",
			"Masse": "2,2 kg",
			"Longueur": "270 mm",
			"Hauteur": "163 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 850,
		"typical": 850,
		"max": 850
	},
	"usagePattern": "intermittent",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-53092-technical.webp",
		"alt": "Repères techniques Dynabrade 53092 : consommation maximale publiée de 850 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=135",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 53092, référence 53092, présente une consommation maximale publiée de 850 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 135. Puissance moteur : 522 W. Vitesse moteur publiée : 500 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 522 W.",
			"Vitesse moteur publiée : 500 tr/min.",
			"Filetage de broche : 1/2\"-20 Male.",
			"Masse : 2,2 kg.",
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
			"value": "522 W",
			"evidenceIds": [
				"dynabrade-53092-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "500 tr/min",
			"evidenceIds": [
				"dynabrade-53092-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de broche",
			"value": "1/2\"-20 Male",
			"evidenceIds": [
				"dynabrade-53092-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "2,2 kg",
			"evidenceIds": [
				"dynabrade-53092-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "270 mm",
			"evidenceIds": [
				"dynabrade-53092-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "163 mm",
			"evidenceIds": [
				"dynabrade-53092-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-53092-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=135",
			"sourceLabel": "Dynabrade, catalogue D25.01, 53092, page 135",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 135-0, ligne 4. Consommation maximale publiée : 30 (850) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-53092-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-53092-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-53092-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-53092-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-53092-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
