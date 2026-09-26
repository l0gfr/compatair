const product = {
	"id": "dynabrade-56829",
	"slug": "ponceuse-orbitale-dynabrade-56829",
	"categoryId": "ponceuse-orbitale",
	"category": "Ponceuse orbitale pneumatique",
	"label": "Ponceuse orbitale pneumatique Dynabrade Dynorbital Supreme 56829",
	"brand": "Dynabrade",
	"model": "Dynorbital Supreme 56829",
	"mpn": "56829",
	"variant": {
		"familyId": "dynabrade-ponceuse-orbitale",
		"label": "Dynorbital Supreme 56829",
		"distinguishingAttributes": {
			"Aspiration des poussières": "Aspiration autonome",
			"Diamètre du plateau": "152 mm",
			"Diamètre de l’orbite": "5 mm",
			"Masse": "1 kg",
			"Longueur": "229 mm",
			"Puissance moteur": "209 W",
			"Vitesse moteur publiée": "12 000 tr/min"
		}
	},
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"airflowLpm": {
		"min": 510,
		"typical": 510,
		"max": 510
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-56829-technical.webp",
		"alt": "Repères techniques Dynabrade Dynorbital Supreme 56829 : consommation publiée de 510 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=151",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "Dynabrade Dynorbital Supreme 56829, référence 56829, présente une consommation publiée de 510 L/min. Le catalogue D25.01 indique une pression de 90 PSIG (6,2 bar), page 151. Aspiration des poussières : Aspiration autonome. Diamètre du plateau : 152 mm.",
		"verifiedFacts": [
			"Aspiration des poussières : Aspiration autonome.",
			"Diamètre du plateau : 152 mm.",
			"Diamètre de l’orbite : 5 mm.",
			"Masse : 1 kg.",
			"Entrée d’air : 1/4 pouce NPT.",
			"Flexible : 6 mm de diamètre intérieur publié."
		],
		"limitations": [
			"Le calcul conserve la consommation publiée, sans la réduire selon un cycle de travail supposé. Cette valeur ne constitue pas une mesure de débit réalisée par CompatAir.",
			"Le catalogue ne fournit pas de courbe de consommation selon la pression pour cette référence. Vérifier la pression dynamique à l’entrée de l’outil pendant son fonctionnement.",
			"Le diamètre intérieur publié ne suffit pas à valider un réseau : la longueur, les raccords et les pertes de pression restent à contrôler.",
			"Cette fiche repose sur l’édition D25.01 du catalogue international. Elle ne prouve ni la disponibilité actuelle en France ni l’équipement exact livré par un vendeur."
		]
	},
	"specifications": [
		{
			"label": "Aspiration des poussières",
			"value": "Aspiration autonome",
			"evidenceIds": [
				"dynabrade-56829-catalogue-d25-01"
			]
		},
		{
			"label": "Diamètre du plateau",
			"value": "152 mm",
			"evidenceIds": [
				"dynabrade-56829-catalogue-d25-01"
			]
		},
		{
			"label": "Diamètre de l’orbite",
			"value": "5 mm",
			"evidenceIds": [
				"dynabrade-56829-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "1 kg",
			"evidenceIds": [
				"dynabrade-56829-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "229 mm",
			"evidenceIds": [
				"dynabrade-56829-catalogue-d25-01"
			]
		},
		{
			"label": "Puissance moteur",
			"value": "209 W",
			"evidenceIds": [
				"dynabrade-56829-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "12 000 tr/min",
			"evidenceIds": [
				"dynabrade-56829-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-56829-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=151",
			"sourceLabel": "Dynabrade, catalogue D25.01, 56829, page 151",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 151-0, ligne 12. Consommation publiée : 18 (510) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-56829-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-56829-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-56829-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-56829-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-56829-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
