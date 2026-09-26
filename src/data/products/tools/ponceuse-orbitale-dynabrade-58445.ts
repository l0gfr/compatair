const product = {
	"id": "dynabrade-58445",
	"slug": "ponceuse-orbitale-dynabrade-58445",
	"categoryId": "ponceuse-orbitale",
	"category": "Ponceuse orbitale pneumatique",
	"label": "Ponceuse orbitale pneumatique Dynabrade 58445",
	"brand": "Dynabrade",
	"model": "58445",
	"mpn": "58445",
	"variant": {
		"familyId": "dynabrade-ponceuse-orbitale",
		"label": "58445",
		"distinguishingAttributes": {
			"Puissance moteur": "336 W",
			"Vitesse moteur publiée": "900 tr/min",
			"Diamètre du plateau": "203 mm",
			"Masse": "1,8 kg",
			"Longueur": "319 mm",
			"Hauteur": "142 mm"
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
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-58445-technical.webp",
		"alt": "Repères techniques Dynabrade 58445 : consommation maximale publiée de 651 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=168",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade 58445, référence 58445, présente une consommation maximale publiée de 651 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 168. Puissance moteur : 336 W. Vitesse moteur publiée : 900 tr/min.",
		"verifiedFacts": [
			"Puissance moteur : 336 W.",
			"Vitesse moteur publiée : 900 tr/min.",
			"Diamètre du plateau : 203 mm.",
			"Masse : 1,8 kg.",
			"Entrée d’air : 1/4 pouce NPT.",
			"Flexible : 6 mm de diamètre intérieur publié."
		],
		"limitations": [
			"Le calcul conserve la consommation maximale publiée, sans la réduire selon un cycle de travail supposé. Cette valeur ne constitue pas une mesure de débit réalisée par CompatAir.",
			"Le catalogue ne fournit pas de courbe de consommation selon la pression pour cette référence. Vérifier la pression dynamique à l’entrée de l’outil pendant son fonctionnement.",
			"Le diamètre intérieur publié ne suffit pas à valider un réseau : la longueur, les raccords et les pertes de pression restent à contrôler.",
			"Cette fiche repose sur l’édition D25.01 du catalogue international. Elle ne prouve ni la disponibilité actuelle en France ni l’équipement exact livré par un vendeur."
		]
	},
	"specifications": [
		{
			"label": "Puissance moteur",
			"value": "336 W",
			"evidenceIds": [
				"dynabrade-58445-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "900 tr/min",
			"evidenceIds": [
				"dynabrade-58445-catalogue-d25-01"
			]
		},
		{
			"label": "Diamètre du plateau",
			"value": "203 mm",
			"evidenceIds": [
				"dynabrade-58445-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1,8 kg",
			"evidenceIds": [
				"dynabrade-58445-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "319 mm",
			"evidenceIds": [
				"dynabrade-58445-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "142 mm",
			"evidenceIds": [
				"dynabrade-58445-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-58445-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=168",
			"sourceLabel": "Dynabrade, catalogue D25.01, 58445, page 168",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 168-0, ligne 5. Consommation maximale publiée : 23 (651) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-58445-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-58445-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-58445-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-58445-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-58445-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
