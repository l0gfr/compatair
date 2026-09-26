const product = {
	"id": "dynabrade-51624",
	"slug": "meuleuse-dynabrade-51624",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 51624",
	"brand": "Dynabrade",
	"model": "51624",
	"mpn": "51624",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "51624",
		"distinguishingAttributes": {
			"Puissance moteur": "75 W",
			"Vitesse moteur publiée": "35 000 tr/min",
			"Pince": "3 mm",
			"Masse": "0,5 kg",
			"Longueur": "132 mm",
			"Diamètre indiqué au tableau": "49 mm"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 227,
		"typical": 227,
		"max": 227
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-51624-technical.webp",
		"alt": "Repères techniques Dynabrade 51624 : consommation maximale publiée de 227 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=50",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 51624, référence 51624, présente une consommation maximale publiée de 227 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 50. Puissance moteur : 75 W. Vitesse moteur publiée : 35 000 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 75 W.",
			"Vitesse moteur publiée : 35 000 tr/min.",
			"Pince : 3 mm.",
			"Masse : 0,5 kg.",
			"Flexible : 6 mm de diamètre intérieur publié."
		],
		"limitations": [
			"Le calcul conserve la consommation maximale publiée, sans la réduire selon un cycle de travail supposé. Cette valeur ne constitue pas une mesure de débit réalisée par CompatAir.",
			"Le catalogue ne fournit pas de courbe de consommation selon la pression pour cette référence. Vérifier la pression dynamique à l’entrée de l’outil pendant son fonctionnement.",
			"Le diamètre intérieur publié ne suffit pas à valider un réseau : la longueur, les raccords et les pertes de pression restent à contrôler.",
			"Le raccord d’entrée doit être confirmé dans la notice individuelle avant de choisir un adaptateur.",
			"Cette fiche repose sur l’édition D25.01 du catalogue international. Elle ne prouve ni la disponibilité actuelle en France ni l’équipement exact livré par un vendeur."
		]
	},
	"specifications": [
		{
			"label": "Puissance moteur",
			"value": "75 W",
			"evidenceIds": [
				"dynabrade-51624-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "35 000 tr/min",
			"evidenceIds": [
				"dynabrade-51624-catalogue-d25-01"
			]
		},
		{
			"label": "Pince",
			"value": "3 mm",
			"evidenceIds": [
				"dynabrade-51624-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,5 kg",
			"evidenceIds": [
				"dynabrade-51624-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "132 mm",
			"evidenceIds": [
				"dynabrade-51624-catalogue-d25-01"
			]
		},
		{
			"label": "Diamètre indiqué au tableau",
			"value": "49 mm",
			"evidenceIds": [
				"dynabrade-51624-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-51624-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=50",
			"sourceLabel": "Dynabrade, catalogue D25.01, 51624, page 50",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 50-0, ligne 3. Consommation maximale publiée : 8 (227) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-51624-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-51624-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-51624-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-51624-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
