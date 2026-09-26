const product = {
	"id": "dynabrade-56715",
	"slug": "meuleuse-dynabrade-56715",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 56715",
	"brand": "Dynabrade",
	"model": "56715",
	"mpn": "56715",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "56715",
		"distinguishingAttributes": {
			"Puissance moteur": "298 W",
			"Vitesse moteur publiée": "12 000 tr/min",
			"Pince": "1/4\" / 6 mm",
			"Masse": "0,7 kg",
			"Longueur": "227 mm",
			"Hauteur": "125 mm"
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
	"connectorSize": "Entrée 1/4 pouce NPT",
	"image": {
		"src": "/images/products/dynabrade-56715-technical.webp",
		"alt": "Repères techniques Dynabrade 56715 : consommation maximale publiée de 595 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=71",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 56715, référence 56715, présente une consommation maximale publiée de 595 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 71. Puissance moteur : 298 W. Vitesse moteur publiée : 12 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 298 W.",
			"Vitesse moteur publiée : 12 000 tr/min.",
			"Pince : 1/4\" / 6 mm.",
			"Masse : 0,7 kg.",
			"Entrée d’air : 1/4 pouce NPT."
		],
		"limitations": [
			"Le calcul conserve la consommation maximale publiée, sans la réduire selon un cycle de travail supposé. Cette valeur ne constitue pas une mesure de débit réalisée par CompatAir.",
			"Le catalogue ne fournit pas de courbe de consommation selon la pression pour cette référence. Vérifier la pression dynamique à l’entrée de l’outil pendant son fonctionnement.",
			"Le diamètre de flexible n’est pas repris faute de valeur individuelle non ambiguë dans le tableau sélectionné.",
			"Cette fiche repose sur l’édition D25.01 du catalogue international. Elle ne prouve ni la disponibilité actuelle en France ni l’équipement exact livré par un vendeur."
		]
	},
	"specifications": [
		{
			"label": "Puissance moteur",
			"value": "298 W",
			"evidenceIds": [
				"dynabrade-56715-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"dynabrade-56715-catalogue-d25-01"
			]
		},
		{
			"label": "Pince",
			"value": "1/4\" / 6 mm",
			"evidenceIds": [
				"dynabrade-56715-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,7 kg",
			"evidenceIds": [
				"dynabrade-56715-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "227 mm",
			"evidenceIds": [
				"dynabrade-56715-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "125 mm",
			"evidenceIds": [
				"dynabrade-56715-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-56715-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=71",
			"sourceLabel": "Dynabrade, catalogue D25.01, 56715, page 71",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 71-0, ligne 1. Consommation maximale publiée : 21 (595) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-56715-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-56715-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-56715-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-56715-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
