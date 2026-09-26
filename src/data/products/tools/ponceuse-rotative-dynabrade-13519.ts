const product = {
	"id": "dynabrade-13519",
	"slug": "ponceuse-rotative-dynabrade-13519",
	"categoryId": "ponceuse-rotative",
	"category": "Ponceuse rotative pneumatique",
	"label": "Ponceuse rotative pneumatique Dynabrade 13519",
	"brand": "Dynabrade",
	"model": "13519",
	"mpn": "13519",
	"variant": {
		"familyId": "dynabrade-ponceuse-rotative",
		"label": "13519",
		"distinguishingAttributes": {
			"Puissance moteur": "744 W",
			"Vitesse moteur publiée": "6 000 tr/min",
			"Alésage de la roue": "5/8\"-11 Male",
			"Masse": "2 kg",
			"Longueur": "472 mm",
			"Hauteur": "48 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 1256,
		"typical": 1256,
		"max": 1256
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 3/8 pouce NPT",
	"image": {
		"src": "/images/products/dynabrade-13519-technical.webp",
		"alt": "Repères techniques Dynabrade 13519 : consommation maximale publiée de 1 256 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=37",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 13519, référence 13519, présente une consommation maximale publiée de 1 256 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 37. Puissance moteur : 744 W. Vitesse moteur publiée : 6 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 744 W.",
			"Vitesse moteur publiée : 6 000 tr/min.",
			"Alésage de la roue : 5/8\"-11 Male.",
			"Masse : 2 kg.",
			"Entrée d’air : 3/8 pouce NPT."
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
			"value": "744 W",
			"evidenceIds": [
				"dynabrade-13519-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "6 000 tr/min",
			"evidenceIds": [
				"dynabrade-13519-catalogue-d25-01"
			]
		},
		{
			"label": "Alésage de la roue",
			"value": "5/8\"-11 Male",
			"evidenceIds": [
				"dynabrade-13519-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "2 kg",
			"evidenceIds": [
				"dynabrade-13519-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "472 mm",
			"evidenceIds": [
				"dynabrade-13519-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "48 mm",
			"evidenceIds": [
				"dynabrade-13519-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-13519-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=37",
			"sourceLabel": "Dynabrade, catalogue D25.01, 13519, page 37",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 37-0, ligne 2. Consommation maximale publiée : 44 (1,256) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-13519-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-13519-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-13519-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-13519-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
