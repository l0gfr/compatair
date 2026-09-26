const product = {
	"id": "dynabrade-53868",
	"slug": "ponceuse-rotative-dynabrade-53868",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Dynabrade 53868",
	"brand": "Dynabrade",
	"model": "53868",
	"mpn": "53868",
	"variant": {
		"familyId": "dynabrade-ponceuse-rotative",
		"label": "53868",
		"distinguishingAttributes": {
			"Puissance moteur": "969 W",
			"Vitesse moteur publiée": "8 500 tr/min",
			"Filetage de sortie": "5/8\"-11 Male",
			"Masse": "2 kg",
			"Longueur": "255 mm",
			"Hauteur": "90 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1138,
		"typical": 1138,
		"max": 1138
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 3/8 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-53868-technical.webp",
		"alt": "Repères techniques Dynabrade 53868 : consommation maximale publiée de 1 138 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=83",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 53868, référence 53868, présente une consommation maximale publiée de 1 138 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 83. Puissance moteur : 969 W. Vitesse moteur publiée : 8 500 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 969 W.",
			"Vitesse moteur publiée : 8 500 tr/min.",
			"Filetage de sortie : 5/8\"-11 Male.",
			"Masse : 2 kg.",
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
			"value": "969 W",
			"evidenceIds": [
				"dynabrade-53868-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "8 500 tr/min",
			"evidenceIds": [
				"dynabrade-53868-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/8\"-11 Male",
			"evidenceIds": [
				"dynabrade-53868-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "2 kg",
			"evidenceIds": [
				"dynabrade-53868-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "255 mm",
			"evidenceIds": [
				"dynabrade-53868-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "90 mm",
			"evidenceIds": [
				"dynabrade-53868-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-53868-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=83",
			"sourceLabel": "Dynabrade, catalogue D25.01, 53868, page 83",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 83-0, ligne 3. Consommation maximale publiée : 40 (1,138) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-53868-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-53868-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-53868-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-53868-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-53868-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
