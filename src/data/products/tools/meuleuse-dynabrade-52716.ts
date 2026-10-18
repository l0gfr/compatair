import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "dynabrade-52716",
	"slug": "meuleuse-dynabrade-52716",
	"categoryId": "meuleuse",
	"category": "Meuleuse pneumatique",
	"label": "Meuleuse pneumatique Dynabrade 52716",
	"brand": "Dynabrade",
	"model": "52716",
	"mpn": "52716",
	"variant": {
		"familyId": "dynabrade-meuleuse",
		"label": "52716",
		"distinguishingAttributes": {
			"Puissance moteur": "744 W",
			"Vitesse moteur publiée": "15 000 tr/min",
			"Filetage de sortie": "3/8\"-24 Male",
			"Longueur": "225 mm",
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
		"min": 1104,
		"typical": 1104,
		"max": 1104
	},
	"usagePattern": "continuous",
	"confidence": "A",
	"connectorSize": "Entrée 3/8 pouce NPT, flexible intérieur 10 mm",
	"recommendedHose": {
		"innerDiameterMm": 10
	},
	"image": {
		"src": "/images/products/dynabrade-52716-technical.webp",
		"alt": "Repères techniques Dynabrade 52716 : consommation maximale publiée de 1 104 L/min à 6,2 bar",
		"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=107",
		"sourceLabel": "Repères techniques CompatAir d’après le catalogue Dynabrade D25.01"
	},
	"editorial": {
		"overview": "52716 : meuleuse pour cônes ou meules-bouchons de 38 mm, sur sortie filetée mâle 3/8-24. Elle annonce 15 000 tr/min et un maximum de 1 104 L/min à 6,2 bar, contre 12 000 tr/min et 1 076 L/min pour la 52715. La vitesse admissible de l’accessoire doit suivre le modèle retenu.",
		"verifiedFacts": [
			"Puissance moteur : 744 W.",
			"Vitesse moteur publiée : 15 000 tr/min.",
			"Filetage de sortie : 3/8\"-24 Male.",
			"Longueur : 225 mm.",
			"Entrée d’air : 3/8 pouce NPT.",
			"Flexible : 10 mm de diamètre intérieur publié."
		],
		"limitations": [
			"Le filetage 3/8-24 ne désigne pas une pince de 3/8 pouce.",
			"La masse imprimée avec deux expressions incohérentes n’est pas arbitrée pour choisir une valeur."
		]
	},
	"specifications": [
		{
			"label": "Puissance moteur",
			"value": "744 W",
			"evidenceIds": [
				"dynabrade-52716-catalogue-d25-01"
			]
		},
		{
			"label": "Vitesse moteur publiée",
			"value": "15 000 tr/min",
			"evidenceIds": [
				"dynabrade-52716-catalogue-d25-01"
			]
		},
		{
			"label": "Filetage de sortie",
			"value": "3/8\"-24 Male",
			"evidenceIds": [
				"dynabrade-52716-catalogue-d25-01"
			]
		},
		{
			"label": "Longueur",
			"value": "225 mm",
			"evidenceIds": [
				"dynabrade-52716-catalogue-d25-01"
			]
		},
		{
			"label": "Hauteur",
			"value": "48 mm",
			"evidenceIds": [
				"dynabrade-52716-catalogue-d25-01"
			]
		}
	],
	"evidence": [
		{
			"id": "dynabrade-52716-catalogue-d25-01",
			"sourceUrl": "https://www17.dynabrade.com/pdf/dynabrade-industrial-catalog.pdf#page=107",
			"sourceLabel": "Dynabrade, catalogue D25.01, 52716, page 107",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-26",
			"confidence": "A",
			"notes": "Tableau 107-0, ligne 2. Consommation maximale publiée : 39 (1,104) SCFM (L/min). Pression : 90 PSIG (6,2 bar). Cellules sources et empreinte SHA-256 versionnées."
		}
	],
	"fieldSources": {
		"mpn": [
			"dynabrade-52716-catalogue-d25-01"
		],
		"airflowLpm": [
			"dynabrade-52716-catalogue-d25-01"
		],
		"workingPressureBar": [
			"dynabrade-52716-catalogue-d25-01"
		],
		"connectorSize": [
			"dynabrade-52716-catalogue-d25-01"
		],
		"recommendedHose": [
			"dynabrade-52716-catalogue-d25-01"
		]
	},
	"notes": [
		"Caractéristiques déclarées par le fabricant, sans essai physique par CompatAir.",
		"La compatibilité calculée concerne l’alimentation en air. Le choix des abrasifs, carters et équipements de protection relève de la notice de l’outil."
	]
};

export default product;
