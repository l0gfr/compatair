const product = {
	"id": "dynabrade-54740",
	"slug": "tronconneuse-dynabrade-54740",
	"categoryId": "tronconneuse",
	"category": "Tronçonneuse pneumatique",
	"label": "Tronçonneuse pneumatique Dynabrade 54740",
	"brand": "Dynabrade",
	"model": "54740",
	"mpn": "54740",
	"variant": {
		"familyId": "dynabrade-tronconneuse",
		"label": "54740",
		"distinguishingAttributes": {
			"Puissance moteur": "522 W",
			"Vitesse moteur publiée": "18 000 tr/min",
			"Filetage de sortie": "3/8\"-24 Male",
			"Masse": "1,7 kg",
			"Longueur": "204 mm",
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
		"min": 1161,
		"typical": 1161,
		"max": 1161
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-54740-technical.webp",
		"alt": "Repères techniques Dynabrade 54740 : consommation maximale publiée de 1 161 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=110",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 54740, référence 54740, présente une consommation maximale publiée de 1 161 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 110. Puissance moteur : 522 W. Vitesse moteur publiée : 18 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 522 W.",
			"Vitesse moteur publiée : 18 000 tr/min.",
			"Filetage de sortie : 3/8\"-24 Male.",
			"Masse : 1,7 kg.",
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
				"dynabrade-54740-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "18 000 tr/min",
			"evidenceIds": [
				"dynabrade-54740-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "3/8\"-24 Male",
			"evidenceIds": [
				"dynabrade-54740-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1,7 kg",
			"evidenceIds": [
				"dynabrade-54740-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "204 mm",
			"evidenceIds": [
				"dynabrade-54740-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "79 mm",
			"evidenceIds": [
				"dynabrade-54740-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-54740-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=110",
			"sourceLabel": "Dynabrade, catalogue D25.01, 54740, page 110",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 110-0, ligne 5. Consommation maximale publiée : 41 (1,161) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-54740-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-54740-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-54740-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-54740-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-54740-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
