const product = {
	"id": "dynabrade-53105",
	"slug": "perceuse-dynabrade-53105",
	"categoryId": "perceuse",
	"category": "Perceuse pneumatique",
	"label": "Perceuse pneumatique Dynabrade 53105",
	"brand": "Dynabrade",
	"model": "53105",
	"mpn": "53105",
	"variant": {
		"familyId": "dynabrade-perceuse",
		"label": "53105",
		"distinguishingAttributes": {
			"Puissance moteur": "522 W",
			"Vitesse moteur publiée": "950 tr/min",
			"Filetage de broche": "3/8\"-24 Male",
			"Masse": "2 kg",
			"Longueur": "310 mm",
			"Hauteur": "149 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1130,
		"typical": 1130,
		"max": 1130
	},
	"usagePattern": "intermittent",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-53105-technical.webp",
		"alt": "Repères techniques Dynabrade 53105 : consommation maximale publiée de 1 130 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=140",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 53105, référence 53105, présente une consommation maximale publiée de 1 130 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 140. Puissance moteur : 522 W. Vitesse moteur publiée : 950 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 522 W.",
			"Vitesse moteur publiée : 950 tr/min.",
			"Filetage de broche : 3/8\"-24 Male.",
			"Masse : 2 kg.",
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
				"dynabrade-53105-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "950 tr/min",
			"evidenceIds": [
				"dynabrade-53105-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de broche",
			"value": "3/8\"-24 Male",
			"evidenceIds": [
				"dynabrade-53105-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "2 kg",
			"evidenceIds": [
				"dynabrade-53105-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "310 mm",
			"evidenceIds": [
				"dynabrade-53105-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "149 mm",
			"evidenceIds": [
				"dynabrade-53105-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-53105-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=140",
			"sourceLabel": "Dynabrade, catalogue D25.01, 53105, page 140",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 140-0, ligne 3. Consommation maximale publiée : 40 (1,130) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-53105-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-53105-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-53105-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-53105-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-53105-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
