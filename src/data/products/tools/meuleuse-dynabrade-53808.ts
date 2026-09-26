const product = {
	"id": "dynabrade-53808",
	"slug": "meuleuse-dynabrade-53808",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 53808",
	"brand": "Dynabrade",
	"model": "53808",
	"mpn": "53808",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "53808",
		"distinguishingAttributes": {
			"Puissance moteur": "373 W",
			"Vitesse moteur publiée": "24 000 tr/min",
			"Échappement": "Arrière",
			"Masse": "0,95 kg",
			"Longueur": "170 mm",
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
		"min": 821,
		"typical": 821,
		"max": 821
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT",
	"image": {
		"src": "/images/products/dynabrade-53808-technical.webp",
		"alt": "Repères techniques Dynabrade 53808 : consommation maximale publiée de 821 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=62",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 53808, référence 53808, présente une consommation maximale publiée de 821 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 62. Puissance moteur : 373 W. Vitesse moteur publiée : 24 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 373 W.",
			"Vitesse moteur publiée : 24 000 tr/min.",
			"Échappement : Arrière.",
			"Masse : 0,95 kg.",
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
				"dynabrade-53808-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "24 000 tr/min",
			"evidenceIds": [
				"dynabrade-53808-catalogue-d25-01"
			]
		},
		{
			"label": "Échappement",
			"value": "Arrière",
			"evidenceIds": [
				"dynabrade-53808-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,95 kg",
			"evidenceIds": [
				"dynabrade-53808-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "170 mm",
			"evidenceIds": [
				"dynabrade-53808-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "45 mm",
			"evidenceIds": [
				"dynabrade-53808-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-53808-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=62",
			"sourceLabel": "Dynabrade, catalogue D25.01, 53808, page 62",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 62-1, ligne 2. Consommation maximale publiée : 29 (821) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-53808-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-53808-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-53808-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-53808-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
