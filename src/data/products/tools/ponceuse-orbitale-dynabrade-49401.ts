const product = {
	"id": "dynabrade-49401",
	"slug": "ponceuse-orbitale-dynabrade-49401",
	"categoryId": "ponceuse-orbitale",
	"category": "Ponceuse orbitale pneumatique",
	"label": "Ponceuse orbitale pneumatique Dynabrade 49401",
	"brand": "Dynabrade",
	"model": "49401",
	"mpn": "49401",
	"variant": {
		"familyId": "dynabrade-ponceuse-orbitale",
		"label": "49401",
		"distinguishingAttributes": {
			"Puissance moteur": "298 W",
			"Vitesse moteur publiée": "3 200 tr/min",
			"Filetage de sortie": "1/4\"-28 Female",
			"Masse": "0,9 kg",
			"Longueur": "316 mm",
			"Hauteur": "74 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 736,
		"typical": 736,
		"max": 736
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-49401-technical.webp",
		"alt": "Repères techniques Dynabrade 49401 : consommation maximale publiée de 736 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=162",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 49401, référence 49401, présente une consommation maximale publiée de 736 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 162. Puissance moteur : 298 W. Vitesse moteur publiée : 3 200 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 298 W.",
			"Vitesse moteur publiée : 3 200 tr/min.",
			"Filetage de sortie : 1/4\"-28 Female.",
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
				"dynabrade-49401-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "3 200 tr/min",
			"evidenceIds": [
				"dynabrade-49401-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "1/4\"-28 Female",
			"evidenceIds": [
				"dynabrade-49401-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,9 kg",
			"evidenceIds": [
				"dynabrade-49401-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "316 mm",
			"evidenceIds": [
				"dynabrade-49401-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "74 mm",
			"evidenceIds": [
				"dynabrade-49401-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-49401-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=162",
			"sourceLabel": "Dynabrade, catalogue D25.01, 49401, page 162",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 162-0, ligne 2. Consommation maximale publiée : 26 (736) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-49401-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-49401-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-49401-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-49401-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-49401-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
