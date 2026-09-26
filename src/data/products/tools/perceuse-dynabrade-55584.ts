const product = {
	"id": "dynabrade-55584",
	"slug": "perceuse-dynabrade-55584",
	"categoryId": "perceuse",
	"category": "Perceuse pneumatique",
	"label": "Perceuse pneumatique Dynabrade 55584",
	"brand": "Dynabrade",
	"model": "55584",
	"mpn": "55584",
	"variant": {
		"familyId": "dynabrade-perceuse",
		"label": "55584",
		"distinguishingAttributes": {
			"Vitesse moteur publiée": "900 tr/min",
			"Puissance moteur": "298 W",
			"Montage du foret": "9/32\"-40 Thread"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 736,
		"typical": 736,
		"max": 736
	},
	"usagePattern": "intermittent",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT",
	"image": {
		"src": "/images/products/dynabrade-55584-technical.webp",
		"alt": "Repères techniques Dynabrade 55584 : consommation maximale publiée de 736 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=133",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 55584, référence 55584, présente une consommation maximale publiée de 736 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 133. Vitesse moteur publiée : 900 tr/min. Puissance moteur : 298 W.",
		"verifiedFacts": [
			"Vitesse moteur publiée : 900 tr/min.",
			"Puissance moteur : 298 W.",
			"Montage du foret : 9/32\"-40 Thread.",
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
			"label": "Vitesse moteur publiée",
			"value": "900 tr/min",
			"evidenceIds": [
				"dynabrade-55584-catalogue-d25-01"
			]
		},
		{
			"label": "Puissance moteur",
			"value": "298 W",
			"evidenceIds": [
				"dynabrade-55584-catalogue-d25-01"
			]
		},
		{
			"label": "Montage du foret",
			"value": "9/32\"-40 Thread",
			"evidenceIds": [
				"dynabrade-55584-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-55584-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=133",
			"sourceLabel": "Dynabrade, catalogue D25.01, 55584, page 133",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 133-0, ligne 5. Consommation maximale publiée : 26 (736) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-55584-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-55584-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-55584-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-55584-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
