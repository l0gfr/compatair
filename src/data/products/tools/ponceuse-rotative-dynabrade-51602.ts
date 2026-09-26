const product = {
	"id": "dynabrade-51602",
	"slug": "ponceuse-rotative-dynabrade-51602",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Dynabrade 51602",
	"brand": "Dynabrade",
	"model": "51602",
	"mpn": "51602",
	"variant": {
		"familyId": "dynabrade-ponceuse-rotative",
		"label": "51602",
		"distinguishingAttributes": {
			"Puissance moteur": "522 W",
			"Vitesse moteur publiée": "0-2,000 tr/min",
			"Diamètre du plateau": "152 mm",
			"Filetage de sortie": "M14 Male",
			"Masse": "2,2 kg",
			"Longueur": "330 mm",
			"Hauteur": "79 mm"
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
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-51602-technical.webp",
		"alt": "Repères techniques Dynabrade 51602 : consommation maximale publiée de 1 218 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=86",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 51602, référence 51602, présente une consommation maximale publiée de 1 218 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 86. Puissance moteur : 522 W. Vitesse moteur publiée : 0-2,000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 522 W.",
			"Vitesse moteur publiée : 0-2,000 tr/min.",
			"Diamètre du plateau : 152 mm.",
			"Filetage de sortie : M14 Male.",
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
				"dynabrade-51602-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "0-2,000 tr/min",
			"evidenceIds": [
				"dynabrade-51602-catalogue-d25-01"
			]
		},
		{
			"label": "Diamètre du plateau",
			"value": "152 mm",
			"evidenceIds": [
				"dynabrade-51602-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "M14 Male",
			"evidenceIds": [
				"dynabrade-51602-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "2,2 kg",
			"evidenceIds": [
				"dynabrade-51602-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "330 mm",
			"evidenceIds": [
				"dynabrade-51602-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "79 mm",
			"evidenceIds": [
				"dynabrade-51602-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-51602-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=86",
			"sourceLabel": "Dynabrade, catalogue D25.01, 51602, page 86",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 86-0, ligne 4. Consommation maximale publiée : 43 (1,218) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-51602-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-51602-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-51602-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-51602-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-51602-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
