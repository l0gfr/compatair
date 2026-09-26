const product = {
	"id": "dynabrade-52294",
	"slug": "meuleuse-dynabrade-52294",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 52294",
	"brand": "Dynabrade",
	"model": "52294",
	"mpn": "52294",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "52294",
		"distinguishingAttributes": {
			"Puissance moteur": "522 W",
			"Vitesse moteur publiée": "20 000 tr/min",
			"Masse": "1 kg",
			"Longueur": "206 mm",
			"Hauteur": "140 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1048,
		"typical": 1048,
		"max": 1048
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-52294-technical.webp",
		"alt": "Repères techniques Dynabrade 52294 : consommation maximale publiée de 1 048 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=68",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 52294, référence 52294, présente une consommation maximale publiée de 1 048 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 68. Puissance moteur : 522 W. Vitesse moteur publiée : 20 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 522 W.",
			"Vitesse moteur publiée : 20 000 tr/min.",
			"Masse : 1 kg.",
			"Longueur : 206 mm.",
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
				"dynabrade-52294-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "20 000 tr/min",
			"evidenceIds": [
				"dynabrade-52294-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1 kg",
			"evidenceIds": [
				"dynabrade-52294-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "206 mm",
			"evidenceIds": [
				"dynabrade-52294-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "140 mm",
			"evidenceIds": [
				"dynabrade-52294-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-52294-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=68",
			"sourceLabel": "Dynabrade, catalogue D25.01, 52294, page 68",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 68-1, ligne 3. Consommation maximale publiée : 37 (1,048) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-52294-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-52294-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-52294-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-52294-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-52294-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
