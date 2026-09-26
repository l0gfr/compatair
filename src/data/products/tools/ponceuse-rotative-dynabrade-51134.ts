const product = {
	"id": "dynabrade-51134",
	"slug": "ponceuse-rotative-dynabrade-51134",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Dynabrade 51134",
	"brand": "Dynabrade",
	"model": "51134",
	"mpn": "51134",
	"variant": {
		"familyId": "dynabrade-ponceuse-rotative",
		"label": "51134",
		"distinguishingAttributes": {
			"Puissance moteur": "373 W",
			"Vitesse moteur publiée": "18 000 tr/min",
			"Filetage de l’adaptateur": "1/4\"-20 Female",
			"Masse": "1,5 kg",
			"Longueur": "435 mm",
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
		"min": 850,
		"typical": 850,
		"max": 850
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-51134-technical.webp",
		"alt": "Repères techniques Dynabrade 51134 : consommation maximale publiée de 850 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=38",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 51134, référence 51134, présente une consommation maximale publiée de 850 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 38. Puissance moteur : 373 W. Vitesse moteur publiée : 18 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 373 W.",
			"Vitesse moteur publiée : 18 000 tr/min.",
			"Filetage de l’adaptateur : 1/4\"-20 Female.",
			"Masse : 1,5 kg.",
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
			"value": "373 W",
			"evidenceIds": [
				"dynabrade-51134-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "18 000 tr/min",
			"evidenceIds": [
				"dynabrade-51134-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de l’adaptateur",
			"value": "1/4\"-20 Female",
			"evidenceIds": [
				"dynabrade-51134-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1,5 kg",
			"evidenceIds": [
				"dynabrade-51134-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "435 mm",
			"evidenceIds": [
				"dynabrade-51134-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "48 mm",
			"evidenceIds": [
				"dynabrade-51134-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-51134-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=38",
			"sourceLabel": "Dynabrade, catalogue D25.01, 51134, page 38",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 38-0, ligne 2. Consommation maximale publiée : 30 (850) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-51134-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-51134-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-51134-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-51134-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-51134-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
