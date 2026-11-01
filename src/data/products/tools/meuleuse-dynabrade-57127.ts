import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "dynabrade-57127",
	"slug": "meuleuse-dynabrade-57127",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 57127",
	"brand": "Dynabrade",
	"model": "57127",
	"mpn": "57127",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "57127",
		"distinguishingAttributes": {
			"Puissance moteur": "410 W",
			"Vitesse moteur publiée": "15 000 tr/min",
			"Filetage de sortie": "3/8\"-24 Male",
			"Longueur": "152 mm",
			"Hauteur": "98 mm"
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
	"connectorSize": "Entrée 1/4 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-57127-technical.svg",
		"alt": "Repères techniques Dynabrade 57127 : débit dimensionnant non établi",
		"sourceUrl": "https://apac.dynabrade.com/assets/05dbd0b7-eb77-4b78-b67a-6d3dda34b75b/4074394753-pd0337r.pdf#page=2",
		"sourceLabel": "Carte technique CompatAir, notice constructeur et unités originales dans les spécifications"
	},
	"editorial": {
		"overview": "Dynabrade 57127. La notice PD03.37R retrouvée couvre 57127 et les numéros de série 0H1000 et suivants. Les unités CFM et SCFM sont conservées distinctes ; aucun rapprochement silencieux des volumes standard au FAD. Le catalogue D25.01 reste indisponible à son ancienne adresse. Consommation maximale, unités de la notice : 5 CFM / 33 SCFM (934 L/min). Pression du tableau : 90 PSIG (6,2 bar). Filetage de broche : 3/8-24 mâle.",
		"verifiedFacts": [
			"Puissance moteur : 410 W.",
			"Vitesse moteur publiée : 15 000 tr/min.",
			"Filetage de sortie : 3/8\"-24 Male.",
			"Longueur : 152 mm.",
			"Entrée d’air : 1/4 pouce NPT.",
			"Flexible : 10 mm de diamètre intérieur publié.",
			"Consommation maximale, unités de la notice : 5 CFM / 33 SCFM (934 L/min).",
			"Pression du tableau : 90 PSIG (6,2 bar).",
			"Filetage de broche : 3/8-24 mâle.",
			"Puissance publiée : 0,55 hp (410 W)."
		],
		"limitations": [
			"Le catalogue ne fournit pas de courbe de consommation selon la pression pour cette référence. Vérifier la pression dynamique à l’entrée de l’outil pendant son fonctionnement.",
			"Le diamètre intérieur publié ne suffit pas à valider un réseau : la longueur, les raccords et les pertes de pression restent à contrôler.",
			"Cette fiche repose sur l’édition D25.01 du catalogue international. Elle ne prouve ni la disponibilité actuelle en France ni l’équipement exact livré par un vendeur.",
			"La notice PD03.37R retrouvée couvre 57127 et les numéros de série 0H1000 et suivants. Les unités CFM et SCFM sont conservées distinctes ; aucun rapprochement silencieux des volumes standard au FAD. Le catalogue D25.01 reste indisponible à son ancienne adresse.",
			"Les unités SCFM restent documentaires : les conditions de référence ne permettent pas ici un rapprochement dimensionnant avec le FAD du compresseur."
		]
	},
	"specifications": [
		{
			"label": "Puissance moteur",
			"value": "410 W",
			"evidenceIds": [
				"dynabrade-57127-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "15 000 tr/min",
			"evidenceIds": [
				"dynabrade-57127-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "3/8\"-24 Male",
			"evidenceIds": [
				"dynabrade-57127-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "152 mm",
			"evidenceIds": [
				"dynabrade-57127-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "98 mm",
			"evidenceIds": [
				"dynabrade-57127-catalogue-d25-01"
			]
		},
		{
			"label": "Consommation maximale, unités de la notice",
			"value": "5 CFM / 33 SCFM (934 L/min)",
			"evidenceIds": [
				"dynabrade-57127-reserved-20261101-1"
			]
		},
		{
			"label": "Pression du tableau",
			"value": "90 PSIG (6,2 bar)",
			"evidenceIds": [
				"dynabrade-57127-reserved-20261101-1"
			]
		},
		{
			"label": "Filetage de broche",
			"value": "3/8-24 mâle",
			"evidenceIds": [
				"dynabrade-57127-reserved-20261101-1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0,55 hp (410 W)",
			"evidenceIds": [
				"dynabrade-57127-reserved-20261101-1"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-57127-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=95",
			"sourceLabel": "Dynabrade, catalogue D25.01, 57127, page 95",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 95-0, ligne 5. Consommation maximale publiée : 33 (934) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		},
		{
			"id": "dynabrade-57127-reserved-20261101-1",
			"sourceUrl": "https://apac.dynabrade.com/assets/05dbd0b7-eb77-4b78-b67a-6d3dda34b75b/4074394753-pd0337r.pdf#page=2",
			"sourceLabel": "Dynabrade : revue factuelle du 1 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-01",
			"confidence": "B",
			"notes": "Corps complet GET HTTP200 SHA-256 370096010bb52fe0a305b41d63c86af5afbb753cc80dd2760b7e090a73dd99e0. Passage page=2. Lecture de la référence et des configurations voisines, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-57127-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-57127-reserved-20261101-1"
		],
		"workingPressureBar": [
			"dynabrade-57127-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-57127-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-57127-catalogue-d25-01"
		],
		"demandModel": [
			"dynabrade-57127-reserved-20261101-1"
		],
		"airflowBasis": [
			"dynabrade-57127-reserved-20261101-1"
		],
		"demandExplanation": [
			"dynabrade-57127-reserved-20261101-1"
		],
		"editorial": [
			"dynabrade-57127-reserved-20261101-1"
		],
		"specifications": [
			"dynabrade-57127-reserved-20261101-1"
		],
		"image": [
			"dynabrade-57127-reserved-20261101-1"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	],
	"demandExplanation": "Le document publie un débit en SCFM ; les conditions de référence nécessaires au rapprochement avec le FAD ne sont pas qualifiées ici. Les unités originales restent visibles."
};

export default product;
