const product = {
	"id": "dynabrade-52900",
	"slug": "ponceuse-bande-dynabrade-52900",
	"categoryId": "ponceuse-bande",
	"category": "Ponceuse à bande pneumatique",
	"label": "Ponceuse à bande pneumatique Dynabrade 52900",
	"brand": "Dynabrade",
	"model": "52900",
	"mpn": "52900",
	"variant": {
		"familyId": "dynabrade-ponceuse-bande",
		"label": "52900",
		"distinguishingAttributes": {
			"Puissance moteur": "969 W",
			"Vitesse moteur publiée": "3 500 tr/min",
			"Bande abrasive, pouces (mm)": "3 (76) W x 24 (610) L",
			"Masse": "5,7 kg",
			"Longueur": "337 mm",
			"Hauteur": "181 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1416,
		"typical": 1416,
		"max": 1416
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"image": {
		"src": "/images/products/dynabrade-52900-technical.webp",
		"alt": "Repères techniques Dynabrade 52900 : consommation maximale publiée de 1 416 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=29",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 52900, référence 52900, présente une consommation maximale publiée de 1 416 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 29. Puissance moteur : 969 W. Vitesse moteur publiée : 3 500 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 969 W.",
			"Vitesse moteur publiée : 3 500 tr/min.",
			"Bande abrasive, pouces (mm) : 3 (76) W x 24 (610) L.",
			"Masse : 5,7 kg."
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
			"label": "Puissance moteur",
			"value": "969 W",
			"evidenceIds": [
				"dynabrade-52900-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "3 500 tr/min",
			"evidenceIds": [
				"dynabrade-52900-catalogue-d25-01"
			]
		},
		{
			"label": "Bande abrasive, pouces (mm)",
			"value": "3 (76) W x 24 (610) L",
			"evidenceIds": [
				"dynabrade-52900-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "5,7 kg",
			"evidenceIds": [
				"dynabrade-52900-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "337 mm",
			"evidenceIds": [
				"dynabrade-52900-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "181 mm",
			"evidenceIds": [
				"dynabrade-52900-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-52900-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=29",
			"sourceLabel": "Dynabrade, catalogue D25.01, 52900, page 29",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 29-0, ligne 1. Consommation maximale publiée : 50 (1,416) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-52900-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-52900-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-52900-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
