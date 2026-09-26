const product = {
	"id": "dynabrade-50307",
	"slug": "ponceuse-rotative-dynabrade-50307",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Dynabrade 50307",
	"brand": "Dynabrade",
	"model": "50307",
	"mpn": "50307",
	"variant": {
		"familyId": "dynabrade-ponceuse-rotative",
		"label": "50307",
		"distinguishingAttributes": {
			"Puissance moteur": "895 W",
			"Vitesse moteur publiée": "11 000 tr/min",
			"Filetage de sortie": "5/8\"-11 Male",
			"Masse": "1,8 kg",
			"Longueur": "203 mm",
			"Hauteur": "152 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1020,
		"typical": 1020,
		"max": 1020
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/2 pouce NPT, flexible intérieur 13 mm",
	"recommendedHose": {
		"innerDiameterMm": 13
	},
	"image": {
		"src": "/images/products/dynabrade-50307-technical.webp",
		"alt": "Repères techniques Dynabrade 50307 : consommation maximale publiée de 1 020 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=82",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 50307, référence 50307, présente une consommation maximale publiée de 1 020 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 82. Puissance moteur : 895 W. Vitesse moteur publiée : 11 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 895 W.",
			"Vitesse moteur publiée : 11 000 tr/min.",
			"Filetage de sortie : 5/8\"-11 Male.",
			"Masse : 1,8 kg.",
			"Entrée d’air : 1/2 pouce NPT.",
			"Flexible : 13 mm de diamètre intérieur publié."
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
			"value": "895 W",
			"evidenceIds": [
				"dynabrade-50307-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "11 000 tr/min",
			"evidenceIds": [
				"dynabrade-50307-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "5/8\"-11 Male",
			"evidenceIds": [
				"dynabrade-50307-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1,8 kg",
			"evidenceIds": [
				"dynabrade-50307-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "203 mm",
			"evidenceIds": [
				"dynabrade-50307-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "152 mm",
			"evidenceIds": [
				"dynabrade-50307-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-50307-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=82",
			"sourceLabel": "Dynabrade, catalogue D25.01, 50307, page 82",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 82-0, ligne 2. Consommation maximale publiée : 36 (1,020) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-50307-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-50307-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-50307-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-50307-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-50307-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
