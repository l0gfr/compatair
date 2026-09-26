const product = {
	"id": "dynabrade-58436",
	"slug": "ponceuse-orbitale-dynabrade-58436",
	"categoryId": "ponceuse-orbitale",
	"category": "Ponceuse orbitale pneumatique",
	"label": "Ponceuse orbitale pneumatique Dynabrade 58436",
	"brand": "Dynabrade",
	"model": "58436",
	"mpn": "58436",
	"variant": {
		"familyId": "dynabrade-ponceuse-orbitale",
		"label": "58436",
		"distinguishingAttributes": {
			"Puissance moteur": "336 W",
			"Vitesse moteur publiée": "12 000 tr/min",
			"Diamètre du plateau": "152 mm",
			"Filetage de sortie": "5/16\"-24 Female",
			"Masse": "1,2 kg",
			"Longueur": "293 mm",
			"Hauteur": "131 mm"
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
		"src": "/images/products/dynabrade-58436-technical.webp",
		"alt": "Repères techniques Dynabrade 58436 : consommation maximale publiée de 651 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=166",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 58436, référence 58436, présente une consommation maximale publiée de 651 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 166. Puissance moteur : 336 W. Vitesse moteur publiée : 12 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 336 W.",
			"Vitesse moteur publiée : 12 000 tr/min.",
			"Diamètre du plateau : 152 mm.",
			"Filetage de sortie : 5/16\"-24 Female.",
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
			"value": "336 W",
			"evidenceIds": [
				"dynabrade-58436-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"dynabrade-58436-catalogue-d25-01"
			]
		},
		{
			"label": "Diamètre du plateau",
			"value": "152 mm",
			"evidenceIds": [
				"dynabrade-58436-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/16\"-24 Female",
			"evidenceIds": [
				"dynabrade-58436-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1,2 kg",
			"evidenceIds": [
				"dynabrade-58436-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "293 mm",
			"evidenceIds": [
				"dynabrade-58436-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "131 mm",
			"evidenceIds": [
				"dynabrade-58436-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-58436-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=166",
			"sourceLabel": "Dynabrade, catalogue D25.01, 58436, page 166",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 166-0, ligne 8. Consommation maximale publiée : 23 (651) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-58436-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-58436-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-58436-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-58436-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-58436-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
