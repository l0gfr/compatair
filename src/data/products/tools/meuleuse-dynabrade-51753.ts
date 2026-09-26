const product = {
	"id": "dynabrade-51753",
	"slug": "meuleuse-dynabrade-51753",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 51753",
	"brand": "Dynabrade",
	"model": "51753",
	"mpn": "51753",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "51753",
		"distinguishingAttributes": {
			"Vitesse moteur publiée": "50 000 tr/min",
			"Échappement": "Arrière",
			"Masse": "0,4 kg",
			"Longueur": "152 mm",
			"Diamètre indiqué au tableau": "39 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 227,
		"typical": 227,
		"max": 227
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-51753-technical.webp",
		"alt": "Repères techniques Dynabrade 51753 : consommation maximale publiée de 227 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=48",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 51753, référence 51753, présente une consommation maximale publiée de 227 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 48. Vitesse moteur publiée : 50 000 tr/min. Échappement : Arrière.",
		"verifiedFacts": [
			"Vitesse moteur publiée : 50 000 tr/min.",
			"Échappement : Arrière.",
			"Masse : 0,4 kg.",
			"Longueur : 152 mm.",
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
			"label": "Vitesse moteur publiée",
			"value": "50 000 tr/min",
			"evidenceIds": [
				"dynabrade-51753-catalogue-d25-01"
			]
		},
		{
			"label": "Échappement",
			"value": "Arrière",
			"evidenceIds": [
				"dynabrade-51753-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,4 kg",
			"evidenceIds": [
				"dynabrade-51753-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "152 mm",
			"evidenceIds": [
				"dynabrade-51753-catalogue-d25-01"
			]
		},
		{
			"label": "Diamètre indiqué au tableau",
			"value": "39 mm",
			"evidenceIds": [
				"dynabrade-51753-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-51753-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=48",
			"sourceLabel": "Dynabrade, catalogue D25.01, 51753, page 48",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 48-0, ligne 5. Consommation maximale publiée : 8 (227) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-51753-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-51753-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-51753-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-51753-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-51753-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
