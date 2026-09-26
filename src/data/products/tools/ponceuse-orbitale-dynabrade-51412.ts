const product = {
	"id": "dynabrade-51412",
	"slug": "ponceuse-orbitale-dynabrade-51412",
	"categoryId": "ponceuse-orbitale",
	"category": "Ponceuse orbitale pneumatique",
	"label": "Ponceuse orbitale pneumatique Dynabrade 51412",
	"brand": "Dynabrade",
	"model": "51412",
	"mpn": "51412",
	"variant": {
		"familyId": "dynabrade-ponceuse-orbitale",
		"label": "51412",
		"distinguishingAttributes": {
			"Puissance moteur": "298 W",
			"Vitesse moteur publiée": "5 000 tr/min",
			"Filetage de sortie": "3/8\"-24 Male",
			"Masse": "0,8 kg",
			"Longueur": "203 mm",
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
		"min": 680,
		"typical": 680,
		"max": 680
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-51412-technical.webp",
		"alt": "Repères techniques Dynabrade 51412 : consommation maximale publiée de 680 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=161",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 51412, référence 51412, présente une consommation maximale publiée de 680 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 161. Puissance moteur : 298 W. Vitesse moteur publiée : 5 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 298 W.",
			"Vitesse moteur publiée : 5 000 tr/min.",
			"Filetage de sortie : 3/8\"-24 Male.",
			"Masse : 0,8 kg.",
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
				"dynabrade-51412-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "5 000 tr/min",
			"evidenceIds": [
				"dynabrade-51412-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "3/8\"-24 Male",
			"evidenceIds": [
				"dynabrade-51412-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,8 kg",
			"evidenceIds": [
				"dynabrade-51412-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "203 mm",
			"evidenceIds": [
				"dynabrade-51412-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "140 mm",
			"evidenceIds": [
				"dynabrade-51412-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-51412-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=161",
			"sourceLabel": "Dynabrade, catalogue D25.01, 51412, page 161",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 161-0, ligne 3. Consommation maximale publiée : 24 (680) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-51412-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-51412-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-51412-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-51412-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-51412-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
