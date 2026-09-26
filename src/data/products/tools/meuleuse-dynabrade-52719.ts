const product = {
	"id": "dynabrade-52719",
	"slug": "meuleuse-dynabrade-52719",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 52719",
	"brand": "Dynabrade",
	"model": "52719",
	"mpn": "52719",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "52719",
		"distinguishingAttributes": {
			"Puissance moteur": "744 W",
			"Vitesse moteur publiée": "12 000 tr/min",
			"Filetage de sortie": "3/8\"-24 Male",
			"Masse": "1,5 kg",
			"Longueur": "335 mm",
			"Hauteur": "48 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1076,
		"typical": 1076,
		"max": 1076
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 3/8 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-52719-technical.webp",
		"alt": "Repères techniques Dynabrade 52719 : consommation maximale publiée de 1 076 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=107",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 52719, référence 52719, présente une consommation maximale publiée de 1 076 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 107. Puissance moteur : 744 W. Vitesse moteur publiée : 12 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 744 W.",
			"Vitesse moteur publiée : 12 000 tr/min.",
			"Filetage de sortie : 3/8\"-24 Male.",
			"Masse : 1,5 kg.",
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
			"value": "744 W",
			"evidenceIds": [
				"dynabrade-52719-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"dynabrade-52719-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "3/8\"-24 Male",
			"evidenceIds": [
				"dynabrade-52719-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1,5 kg",
			"evidenceIds": [
				"dynabrade-52719-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "335 mm",
			"evidenceIds": [
				"dynabrade-52719-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "48 mm",
			"evidenceIds": [
				"dynabrade-52719-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-52719-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=107",
			"sourceLabel": "Dynabrade, catalogue D25.01, 52719, page 107",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 107-0, ligne 5. Consommation maximale publiée : 38 (1,076) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-52719-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-52719-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-52719-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-52719-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-52719-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
