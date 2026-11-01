import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "dynabrade-58503",
	"slug": "ponceuse-vibrante-dynabrade-58503",
	"categoryId": "ponceuse-vibrante",
	"category": "Ponceuse vibrante pneumatique",
	"label": "Ponceuse vibrante pneumatique Dynabrade 58503",
	"brand": "Dynabrade",
	"model": "58503",
	"mpn": "58503",
	"variant": {
		"familyId": "dynabrade-ponceuse-vibrante",
		"label": "58503",
		"distinguishingAttributes": {
			"Puissance moteur": "112 W",
			"Vitesse moteur publiée": "10 000 tr/min",
			"Masse": "0,7 kg"
		}
	},
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 6 mm",
	"recommendedHose": {
		"innerDiameterMm": 6
	},
	"image": {
		"src": "/images/products/dynabrade-58503-technical.svg",
		"alt": "Repères techniques Dynabrade 58503 : débit dimensionnant non établi",
		"sourceUrl": "https://us.dynabrade.com/assets/585e7532-fca2-4c64-9c06-42632ef71ffe/4074395848-pd0725.pdf#page=2",
		"sourceLabel": "Carte technique CompatAir, notice constructeur et unités originales dans les spécifications"
	},
	"editorial": {
		"overview": "Dynabrade 58503. La notice et la page HTML sont accessibles, mais leurs puissances 112 W/82 W diffèrent. La géométrie de plateau et l’absence d’aspiration sont identifiées ; la puissance de la machine livrée doit être confirmée. Le débit SCFM reste documentaire tant que ses conditions de référence ne sont pas rapprochées du FAD. Consommation, unités de la notice : 13 SCFM (368 L/min) à 90 PSIG (6,2 bar). Puissance dans la notice PD07.25 : 0,15 hp (112 W). Puissance sur la fiche HTML actuelle : 0,11 hp (82 W).",
		"verifiedFacts": [
			"Puissance moteur : 112 W.",
			"Vitesse moteur publiée : 10 000 tr/min.",
			"Masse : 0,7 kg.",
			"Entrée d’air : 1/4 pouce NPT.",
			"Flexible : 6 mm de diamètre intérieur publié.",
			"Consommation, unités de la notice : 13 SCFM (368 L/min) à 90 PSIG (6,2 bar).",
			"Puissance dans la notice PD07.25 : 0,15 hp (112 W).",
			"Puissance sur la fiche HTML actuelle : 0,11 hp (82 W).",
			"Configuration : Non-Vacuum, plateau rectangulaire à fixation autoagrippante."
		],
		"limitations": [
			"Longueur non retenue : le tableau publie des unités contradictoires (6-1/4 (1857)).",
			"Hauteur non retenue : le tableau publie des unités contradictoires (3-1/2 (91)).",
			"Le catalogue ne fournit pas de courbe de consommation selon la pression pour cette référence. Vérifier la pression dynamique à l’entrée de l’outil pendant son fonctionnement.",
			"Le diamètre intérieur publié ne suffit pas à valider un réseau : la longueur, les raccords et les pertes de pression restent à contrôler.",
			"Cette fiche repose sur l’édition D25.01 du catalogue international. Elle ne prouve ni la disponibilité actuelle en France ni l’équipement exact livré par un vendeur.",
			"La notice et la page HTML sont accessibles, mais leurs puissances 112 W/82 W diffèrent. La géométrie de plateau et l’absence d’aspiration sont identifiées ; la puissance de la machine livrée doit être confirmée. Le débit SCFM reste documentaire tant que ses conditions de référence ne sont pas rapprochées du FAD.",
			"Les unités SCFM restent documentaires : les conditions de référence ne permettent pas ici un rapprochement dimensionnant avec le FAD du compresseur."
		]
	},
	"specifications": [
		{
			"label": "Puissance moteur",
			"value": "112 W",
			"evidenceIds": [
				"dynabrade-58503-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "10 000 tr/min",
			"evidenceIds": [
				"dynabrade-58503-catalogue-d25-01"
			]
		},
		{
			"label": "Masse",
			"value": "0,7 kg",
			"evidenceIds": [
				"dynabrade-58503-catalogue-d25-01"
			]
		},
		{
			"label": "Consommation, unités de la notice",
			"value": "13 SCFM (368 L/min) à 90 PSIG (6,2 bar)",
			"evidenceIds": [
				"dynabrade-58503-reserved-20261101-1"
			]
		},
		{
			"label": "Puissance dans la notice PD07.25",
			"value": "0,15 hp (112 W)",
			"evidenceIds": [
				"dynabrade-58503-reserved-20261101-1"
			]
		},
		{
			"label": "Puissance sur la fiche HTML actuelle",
			"value": "0,11 hp (82 W)",
			"evidenceIds": [
				"dynabrade-58503-reserved-20261101-1"
			]
		},
		{
			"label": "Configuration",
			"value": "Non-Vacuum, plateau rectangulaire à fixation autoagrippante",
			"evidenceIds": [
				"dynabrade-58503-reserved-20261101-1"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-58503-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=176",
			"sourceLabel": "Dynabrade, catalogue D25.01, 58503, page 176",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 176-0, ligne 2. Consommation maximale publiée : 13 (368) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		},
		{
			"id": "dynabrade-58503-reserved-20261101-1",
			"sourceUrl": "https://us.dynabrade.com/assets/585e7532-fca2-4c64-9c06-42632ef71ffe/4074395848-pd0725.pdf#page=2",
			"sourceLabel": "Dynabrade : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 9a1ed2f9dc88464d7c2a33ba7e56477090865ab2f79c1ba5a543a29f7b382292. Passage page=2. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-58503-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-58503-reserved-20261101-1"
		],
		"workingPressureBar": [
			"dynabrade-58503-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-58503-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-58503-catalogue-d25-01"
		],
		"demandModel": [
			"dynabrade-58503-reserved-20261101-1"
		],
		"airflowBasis": [
			"dynabrade-58503-reserved-20261101-1"
		],
		"demandExplanation": [
			"dynabrade-58503-reserved-20261101-1"
		],
		"editorial": [
			"dynabrade-58503-reserved-20261101-1"
		],
		"specifications": [
			"dynabrade-58503-reserved-20261101-1"
		],
		"image": [
			"dynabrade-58503-reserved-20261101-1"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	],
	"demandExplanation": "Le document publie un débit en SCFM ; les conditions de référence nécessaires au rapprochement avec le FAD ne sont pas qualifiées ici. Les unités originales restent visibles."
};

export default product;
