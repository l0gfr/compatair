const product = {
	"id": "dynabrade-53812",
	"slug": "meuleuse-dynabrade-53812",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 53812",
	"brand": "Dynabrade",
	"model": "53812",
	"mpn": "53812",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "53812",
		"distinguishingAttributes": {
			"Puissance moteur": "522 W",
			"Vitesse moteur publiée": "20 000 tr/min",
			"Échappement": "Arrière",
			"Masse": "1,04 kg",
			"Longueur": "184 mm",
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
		"min": 1076,
		"typical": 1076,
		"max": 1076
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT",
	"image": {
		"src": "/images/products/dynabrade-53812-technical.webp",
		"alt": "Repères techniques Dynabrade 53812 : consommation maximale publiée de 1 076 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=66",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 53812, référence 53812, présente une consommation maximale publiée de 1 076 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 66. Puissance moteur : 522 W. Vitesse moteur publiée : 20 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 522 W.",
			"Vitesse moteur publiée : 20 000 tr/min.",
			"Échappement : Arrière.",
			"Masse : 1,04 kg.",
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
			"value": "522 W",
			"evidenceIds": [
				"dynabrade-53812-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "20 000 tr/min",
			"evidenceIds": [
				"dynabrade-53812-catalogue-d25-01"
			]
		},
		{
			"label": "Échappement",
			"value": "Arrière",
			"evidenceIds": [
				"dynabrade-53812-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1,04 kg",
			"evidenceIds": [
				"dynabrade-53812-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "184 mm",
			"evidenceIds": [
				"dynabrade-53812-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "45 mm",
			"evidenceIds": [
				"dynabrade-53812-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-53812-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=66",
			"sourceLabel": "Dynabrade, catalogue D25.01, 53812, page 66",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 66-0, ligne 2. Consommation maximale publiée : 38 (1,076) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-53812-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-53812-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-53812-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-53812-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
