const product = {
	"id": "dynabrade-54734",
	"slug": "tronconneuse-dynabrade-54734",
	"categoryId": "tronconneuse",
	"category": "Tronçonneuse pneumatique",
	"label": "Tronçonneuse pneumatique Dynabrade 54734",
	"brand": "Dynabrade",
	"model": "54734",
	"mpn": "54734",
	"variant": {
		"familyId": "dynabrade-tronconneuse",
		"label": "54734",
		"distinguishingAttributes": {
			"Puissance moteur": "522 W",
			"Vitesse moteur publiée": "13 500 tr/min",
			"Filetage de sortie": "3/8\"-24 Male",
			"Masse": "1,4 kg",
			"Longueur": "202 mm",
			"Hauteur": "78 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1133,
		"typical": 1133,
		"max": 1133
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-54734-technical.webp",
		"alt": "Repères techniques Dynabrade 54734 : consommation maximale publiée de 1 133 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=110",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 54734, référence 54734, présente une consommation maximale publiée de 1 133 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 110. Puissance moteur : 522 W. Vitesse moteur publiée : 13 500 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 522 W.",
			"Vitesse moteur publiée : 13 500 tr/min.",
			"Filetage de sortie : 3/8\"-24 Male.",
			"Masse : 1,4 kg.",
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
				"dynabrade-54734-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "13 500 tr/min",
			"evidenceIds": [
				"dynabrade-54734-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "3/8\"-24 Male",
			"evidenceIds": [
				"dynabrade-54734-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1,4 kg",
			"evidenceIds": [
				"dynabrade-54734-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "202 mm",
			"evidenceIds": [
				"dynabrade-54734-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "78 mm",
			"evidenceIds": [
				"dynabrade-54734-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-54734-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=110",
			"sourceLabel": "Dynabrade, catalogue D25.01, 54734, page 110",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 110-0, ligne 3. Consommation maximale publiée : 40 (1,133) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-54734-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-54734-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-54734-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-54734-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-54734-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
