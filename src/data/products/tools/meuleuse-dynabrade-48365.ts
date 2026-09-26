const product = {
	"id": "dynabrade-48365",
	"slug": "meuleuse-dynabrade-48365",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 48365",
	"brand": "Dynabrade",
	"model": "48365",
	"mpn": "48365",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "48365",
		"distinguishingAttributes": {
			"Puissance moteur": "298 W",
			"Vitesse moteur publiée": "20 000 tr/min",
			"Pince": "1/8\" / 3 mm",
			"Masse": "0,4 kg",
			"Longueur": "162 mm",
			"Hauteur": "44 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 651,
		"typical": 651,
		"max": 651
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-48365-technical.webp",
		"alt": "Repères techniques Dynabrade 48365 : consommation maximale publiée de 651 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=56",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 48365, référence 48365, présente une consommation maximale publiée de 651 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 56. Puissance moteur : 298 W. Vitesse moteur publiée : 20 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 298 W.",
			"Vitesse moteur publiée : 20 000 tr/min.",
			"Pince : 1/8\" / 3 mm.",
			"Masse : 0,4 kg.",
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
				"dynabrade-48365-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "20 000 tr/min",
			"evidenceIds": [
				"dynabrade-48365-catalogue-d25-01"
			]
		},
		{
			"label": "Pince",
			"value": "1/8\" / 3 mm",
			"evidenceIds": [
				"dynabrade-48365-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,4 kg",
			"evidenceIds": [
				"dynabrade-48365-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "162 mm",
			"evidenceIds": [
				"dynabrade-48365-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "44 mm",
			"evidenceIds": [
				"dynabrade-48365-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-48365-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=56",
			"sourceLabel": "Dynabrade, catalogue D25.01, 48365, page 56",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 56-0, ligne 6. Consommation maximale publiée : 23 (651) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-48365-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-48365-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-48365-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-48365-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-48365-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
