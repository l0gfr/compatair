const product = {
	"id": "dynabrade-56727",
	"slug": "meuleuse-dynabrade-56727",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 56727",
	"brand": "Dynabrade",
	"model": "56727",
	"mpn": "56727",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "56727",
		"distinguishingAttributes": {
			"Puissance moteur": "298 W",
			"Vitesse moteur publiée": "5 000 tr/min",
			"Pince": "1/4\" / 6 mm",
			"Masse": "1 kg",
			"Longueur": "254 mm",
			"Hauteur": "212 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 708,
		"typical": 708,
		"max": 708
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT",
	"image": {
		"src": "/images/products/dynabrade-56727-technical.webp",
		"alt": "Repères techniques Dynabrade 56727 : consommation maximale publiée de 708 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=71",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 56727, référence 56727, présente une consommation maximale publiée de 708 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 71. Puissance moteur : 298 W. Vitesse moteur publiée : 5 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 298 W.",
			"Vitesse moteur publiée : 5 000 tr/min.",
			"Pince : 1/4\" / 6 mm.",
			"Masse : 1 kg.",
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
				"dynabrade-56727-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "5 000 tr/min",
			"evidenceIds": [
				"dynabrade-56727-catalogue-d25-01"
			]
		},
		{
			"label": "Pince",
			"value": "1/4\" / 6 mm",
			"evidenceIds": [
				"dynabrade-56727-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1 kg",
			"evidenceIds": [
				"dynabrade-56727-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "254 mm",
			"evidenceIds": [
				"dynabrade-56727-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "212 mm",
			"evidenceIds": [
				"dynabrade-56727-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-56727-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=71",
			"sourceLabel": "Dynabrade, catalogue D25.01, 56727, page 71",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 71-0, ligne 4. Consommation maximale publiée : 25 (708) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-56727-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-56727-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-56727-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-56727-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
