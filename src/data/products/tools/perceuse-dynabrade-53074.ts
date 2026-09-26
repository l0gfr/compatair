const product = {
	"id": "dynabrade-53074",
	"slug": "perceuse-dynabrade-53074",
	"categoryId": "perceuse",
	"category": "Perceuse pneumatique",
	"label": "Perceuse pneumatique Dynabrade 53074",
	"brand": "Dynabrade",
	"model": "53074",
	"mpn": "53074",
	"variant": {
		"familyId": "dynabrade-perceuse",
		"label": "53074",
		"distinguishingAttributes": {
			"Puissance moteur": "298 W",
			"Vitesse moteur publiée": "5 000 tr/min",
			"Filetage de broche": "3/8\"-24 Male",
			"Masse": "0,9 kg",
			"Longueur": "203 mm",
			"Hauteur": "141 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 623,
		"typical": 623,
		"max": 623
	},
	"usagePattern": "intermittent",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-53074-technical.webp",
		"alt": "Repères techniques Dynabrade 53074 : consommation maximale publiée de 623 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=134",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 53074, référence 53074, présente une consommation maximale publiée de 623 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 134. Puissance moteur : 298 W. Vitesse moteur publiée : 5 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 298 W.",
			"Vitesse moteur publiée : 5 000 tr/min.",
			"Filetage de broche : 3/8\"-24 Male.",
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
			"value": "298 W",
			"evidenceIds": [
				"dynabrade-53074-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "5 000 tr/min",
			"evidenceIds": [
				"dynabrade-53074-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de broche",
			"value": "3/8\"-24 Male",
			"evidenceIds": [
				"dynabrade-53074-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,9 kg",
			"evidenceIds": [
				"dynabrade-53074-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "203 mm",
			"evidenceIds": [
				"dynabrade-53074-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "141 mm",
			"evidenceIds": [
				"dynabrade-53074-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-53074-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=134",
			"sourceLabel": "Dynabrade, catalogue D25.01, 53074, page 134",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 134-0, ligne 10. Consommation maximale publiée : 22 (623) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-53074-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-53074-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-53074-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-53074-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-53074-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
