const product = {
	"id": "dynabrade-52903",
	"slug": "perceuse-dynabrade-52903",
	"categoryId": "perceuse",
	"category": "Perceuse pneumatique",
	"label": "Perceuse pneumatique Dynabrade 52903",
	"brand": "Dynabrade",
	"model": "52903",
	"mpn": "52903",
	"variant": {
		"familyId": "dynabrade-perceuse",
		"label": "52903",
		"distinguishingAttributes": {
			"Puissance moteur": "298 W",
			"Vitesse moteur publiée": "500 tr/min",
			"Mandrin": "1/4\"",
			"Filetage de broche": "3/8\"-24 Male",
			"Masse": "1,7 kg",
			"Longueur": "268 mm",
			"Hauteur": "300 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 651,
		"typical": 651,
		"max": 651
	},
	"usagePattern": "intermittent",
	"confidence": "A",
	"image": {
		"src": "/images/products/dynabrade-52903-technical.webp",
		"alt": "Repères techniques Dynabrade 52903 : consommation maximale publiée de 651 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=137",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 52903, référence 52903, présente une consommation maximale publiée de 651 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 137. Puissance moteur : 298 W. Vitesse moteur publiée : 500 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 298 W.",
			"Vitesse moteur publiée : 500 tr/min.",
			"Mandrin : 1/4\".",
			"Filetage de broche : 3/8\"-24 Male."
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
			"value": "298 W",
			"evidenceIds": [
				"dynabrade-52903-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "500 tr/min",
			"evidenceIds": [
				"dynabrade-52903-catalogue-d25-01"
			]
		},
		{
			"label": "Mandrin",
			"value": "1/4\"",
			"evidenceIds": [
				"dynabrade-52903-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de broche",
			"value": "3/8\"-24 Male",
			"evidenceIds": [
				"dynabrade-52903-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1,7 kg",
			"evidenceIds": [
				"dynabrade-52903-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "268 mm",
			"evidenceIds": [
				"dynabrade-52903-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "300 mm",
			"evidenceIds": [
				"dynabrade-52903-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-52903-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=137",
			"sourceLabel": "Dynabrade, catalogue D25.01, 52903, page 137",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 137-0, ligne 1. Consommation maximale publiée : 23 (651) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-52903-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-52903-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-52903-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
