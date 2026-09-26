const product = {
	"id": "dynabrade-53460",
	"slug": "polisseuse-dynabrade-53460",
	"categoryId": "polisseuse",
	"category": "Polisseuse pneumatique",
	"label": "Polisseuse pneumatique Dynabrade 53460",
	"brand": "Dynabrade",
	"model": "53460",
	"mpn": "53460",
	"variant": {
		"familyId": "dynabrade-polisseuse",
		"label": "53460",
		"distinguishingAttributes": {
			"Puissance moteur": "298 W",
			"Vitesse moteur publiée": "3 200 tr/min",
			"Filetage de sortie": "3/8\"-24 Male",
			"Masse": "0,9 kg",
			"Longueur": "178 mm",
			"Hauteur": "70 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 595,
		"typical": 595,
		"max": 595
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-53460-technical.webp",
		"alt": "Repères techniques Dynabrade 53460 : consommation maximale publiée de 595 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=121",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 53460, référence 53460, présente une consommation maximale publiée de 595 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 121. Puissance moteur : 298 W. Vitesse moteur publiée : 3 200 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 298 W.",
			"Vitesse moteur publiée : 3 200 tr/min.",
			"Filetage de sortie : 3/8\"-24 Male.",
			"Masse : 0,9 kg.",
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
				"dynabrade-53460-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "3 200 tr/min",
			"evidenceIds": [
				"dynabrade-53460-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "3/8\"-24 Male",
			"evidenceIds": [
				"dynabrade-53460-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,9 kg",
			"evidenceIds": [
				"dynabrade-53460-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "178 mm",
			"evidenceIds": [
				"dynabrade-53460-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "70 mm",
			"evidenceIds": [
				"dynabrade-53460-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-53460-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=121",
			"sourceLabel": "Dynabrade, catalogue D25.01, 53460, page 121",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 121-1, ligne 1. Consommation maximale publiée : 21 (595) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-53460-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-53460-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-53460-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-53460-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-53460-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
