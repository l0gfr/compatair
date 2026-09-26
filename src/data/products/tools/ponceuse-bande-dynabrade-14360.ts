const product = {
	"id": "dynabrade-14360",
	"slug": "ponceuse-bande-dynabrade-14360",
	"categoryId": "ponceuse-bande",
	"category": "Ponceuse à bande pneumatique",
	"label": "Ponceuse à bande pneumatique Dynabrade 14360",
	"brand": "Dynabrade",
	"model": "14360",
	"mpn": "14360",
	"variant": {
		"familyId": "dynabrade-ponceuse-bande",
		"label": "14360",
		"distinguishingAttributes": {
			"Vitesse moteur publiée": "3 400 tr/min",
			"Puissance moteur": "522 W",
			"Bande abrasive, pouces (mm)": "1/2 - 1-1/2 W x 30 L (13 - 38 x 762)",
			"Masse": "2,9 kg",
			"Longueur": "450 mm",
			"Hauteur": "254 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1124,
		"typical": 1124,
		"max": 1124
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"image": {
		"src": "/images/products/dynabrade-14360-technical.webp",
		"alt": "Repères techniques Dynabrade 14360 : consommation maximale publiée de 1 124 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=29",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 14360, référence 14360, présente une consommation maximale publiée de 1 124 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 29. Vitesse moteur publiée : 3 400 tr/min. Puissance moteur : 522 W.",
		"verifiedFacts": [
			"Vitesse moteur publiée : 3 400 tr/min.",
			"Puissance moteur : 522 W.",
			"Bande abrasive, pouces (mm) : 1/2 - 1-1/2 W x 30 L (13 - 38 x 762).",
			"Masse : 2,9 kg."
		],
		"limitations": [
			"Le calcul conserve la consommation maximale publiée, sans la réduire selon un cycle de travail supposé. Cette valeur ne constitue pas une mesure de débit réalisée par CompatAir.",
			"Le catalogue ne fournit pas de courbe de consommation selon la pression pour cette référence. Vérifier la pression dynamique à l’entrée de l’outil pendant son fonctionnement.",
			"Le diamètre de flexible n’est pas repris faute de valeur individuelle non ambiguë dans le tableau sélectionné.",
			"Le raccord d’entrée doit être confirmé dans la notice individuelle avant de choisir un adaptateur.",
			"Cette fiche repose sur l’édition D25.01 du catalogue international. Elle ne prouve ni la disponibilité actuelle en France ni l’équipement exact livré par un vendeur."
		]
	},
	"specifications": [
		{
			"label": "Vitesse moteur publiée",
			"value": "3 400 tr/min",
			"evidenceIds": [
				"dynabrade-14360-catalogue-d25-01"
			]
		},
		{
			"label": "Puissance moteur",
			"value": "522 W",
			"evidenceIds": [
				"dynabrade-14360-catalogue-d25-01"
			]
		},
		{
			"label": "Bande abrasive, pouces (mm)",
			"value": "1/2 - 1-1/2 W x 30 L (13 - 38 x 762)",
			"evidenceIds": [
				"dynabrade-14360-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "2,9 kg",
			"evidenceIds": [
				"dynabrade-14360-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "450 mm",
			"evidenceIds": [
				"dynabrade-14360-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "254 mm",
			"evidenceIds": [
				"dynabrade-14360-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-14360-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=29",
			"sourceLabel": "Dynabrade, catalogue D25.01, 14360, page 29",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 29-1, ligne 1. Consommation maximale publiée : 40 (1,124) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-14360-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-14360-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-14360-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
