const product = {
	"id": "dynabrade-53807",
	"slug": "meuleuse-dynabrade-53807",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 53807",
	"brand": "Dynabrade",
	"model": "53807",
	"mpn": "53807",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "53807",
		"distinguishingAttributes": {
			"Puissance moteur": "373 W",
			"Vitesse moteur publiée": "24 000 tr/min",
			"Échappement": "Avant",
			"Masse": "0,86 kg",
			"Longueur": "143 mm",
			"Hauteur": "45 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 850,
		"typical": 850,
		"max": 850
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT",
	"image": {
		"src": "/images/products/dynabrade-53807-technical.webp",
		"alt": "Repères techniques Dynabrade 53807 : consommation maximale publiée de 850 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=62",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 53807, référence 53807, présente une consommation maximale publiée de 850 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 62. Puissance moteur : 373 W. Vitesse moteur publiée : 24 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 373 W.",
			"Vitesse moteur publiée : 24 000 tr/min.",
			"Échappement : Avant.",
			"Masse : 0,86 kg.",
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
			"value": "373 W",
			"evidenceIds": [
				"dynabrade-53807-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "24 000 tr/min",
			"evidenceIds": [
				"dynabrade-53807-catalogue-d25-01"
			]
		},
		{
			"label": "Échappement",
			"value": "Avant",
			"evidenceIds": [
				"dynabrade-53807-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,86 kg",
			"evidenceIds": [
				"dynabrade-53807-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "143 mm",
			"evidenceIds": [
				"dynabrade-53807-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "45 mm",
			"evidenceIds": [
				"dynabrade-53807-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-53807-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=62",
			"sourceLabel": "Dynabrade, catalogue D25.01, 53807, page 62",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 62-1, ligne 1. Consommation maximale publiée : 30 (850) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-53807-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-53807-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-53807-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-53807-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
