const product = {
	"id": "dynabrade-53091",
	"slug": "perceuse-dynabrade-53091",
	"categoryId": "perceuse",
	"category": "Perceuse pneumatique",
	"label": "Perceuse pneumatique Dynabrade 53091",
	"brand": "Dynabrade",
	"model": "53091",
	"mpn": "53091",
	"variant": {
		"familyId": "dynabrade-perceuse",
		"label": "53091",
		"distinguishingAttributes": {
			"Puissance moteur": "522 W",
			"Vitesse moteur publiée": "950 tr/min",
			"Filetage de broche": "1/2\"-20 Male",
			"Masse": "1,8 kg",
			"Longueur": "267 mm",
			"Hauteur": "163 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 935,
		"typical": 935,
		"max": 935
	},
	"usagePattern": "intermittent",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-53091-technical.webp",
		"alt": "Repères techniques Dynabrade 53091 : consommation maximale publiée de 935 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=135",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 53091, référence 53091, présente une consommation maximale publiée de 935 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 135. Puissance moteur : 522 W. Vitesse moteur publiée : 950 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 522 W.",
			"Vitesse moteur publiée : 950 tr/min.",
			"Filetage de broche : 1/2\"-20 Male.",
			"Masse : 1,8 kg.",
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
				"dynabrade-53091-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "950 tr/min",
			"evidenceIds": [
				"dynabrade-53091-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de broche",
			"value": "1/2\"-20 Male",
			"evidenceIds": [
				"dynabrade-53091-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1,8 kg",
			"evidenceIds": [
				"dynabrade-53091-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "267 mm",
			"evidenceIds": [
				"dynabrade-53091-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "163 mm",
			"evidenceIds": [
				"dynabrade-53091-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-53091-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=135",
			"sourceLabel": "Dynabrade, catalogue D25.01, 53091, page 135",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 135-0, ligne 3. Consommation maximale publiée : 33 (935) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-53091-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-53091-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-53091-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-53091-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-53091-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
