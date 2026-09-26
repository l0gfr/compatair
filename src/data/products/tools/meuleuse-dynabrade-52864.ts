const product = {
	"id": "dynabrade-52864",
	"slug": "meuleuse-dynabrade-52864",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 52864",
	"brand": "Dynabrade",
	"model": "52864",
	"mpn": "52864",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "52864",
		"distinguishingAttributes": {
			"Puissance moteur": "298 W",
			"Pince": "6 mm",
			"Vitesse moteur publiée": "25 000 tr/min",
			"Échappement": "Arrière",
			"Masse": "0,48 kg",
			"Longueur": "144 mm",
			"Diamètre indiqué au tableau": "39 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 566,
		"typical": 566,
		"max": 566
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-52864-technical.webp",
		"alt": "Repères techniques Dynabrade 52864 : consommation maximale publiée de 566 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=47",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 52864, référence 52864, présente une consommation maximale publiée de 566 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 47. Puissance moteur : 298 W. Pince : 6 mm.",
		"verifiedFacts": [
			"Puissance moteur : 298 W.",
			"Pince : 6 mm.",
			"Vitesse moteur publiée : 25 000 tr/min.",
			"Échappement : Arrière.",
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
				"dynabrade-52864-catalogue-d25-01"
			]
		},
		{
			"label": "Pince",
			"value": "6 mm",
			"evidenceIds": [
				"dynabrade-52864-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "25 000 tr/min",
			"evidenceIds": [
				"dynabrade-52864-catalogue-d25-01"
			]
		},
		{
			"label": "Échappement",
			"value": "Arrière",
			"evidenceIds": [
				"dynabrade-52864-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,48 kg",
			"evidenceIds": [
				"dynabrade-52864-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "144 mm",
			"evidenceIds": [
				"dynabrade-52864-catalogue-d25-01"
			]
		},
		{
			"label": "Diamètre indiqué au tableau",
			"value": "39 mm",
			"evidenceIds": [
				"dynabrade-52864-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-52864-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=47",
			"sourceLabel": "Dynabrade, catalogue D25.01, 52864, page 47",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 47-0, ligne 4. Consommation maximale publiée : 20 (566) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-52864-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-52864-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-52864-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-52864-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-52864-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
