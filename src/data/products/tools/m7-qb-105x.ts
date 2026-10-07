import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-qb-105x",
	"slug": "m7-qb-105x",
	"brand": "M7",
	"model": "QB-105X",
	"mpn": "QB-105X",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "M7 QB-105X",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-qb-105x.webp",
		"alt": "Repères techniques M7 QB-105X, référence QB-105X",
		"sourceUrl": "https://www.mighty-seven.com/product/197",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 QB-105X, référence QB-105X. Consommation moyenne publiée : 170 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Diamètre de plateau : 5\" / 125 x 22 (mm). Filetage de broche : 5/8\" -11.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 170 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : QB-105X.",
			"Diamètre de plateau : 5\" / 125 x 22 (mm).",
			"Filetage de broche : 5/8\" -11.",
			"Puissance moteur publiée : 0.78."
		],
		"limitations": [
			"Le besoin réel dépend de la charge, du cycle et des pertes de pression dans le flexible. Aucune mesure physique CompatAir.",
			"Une consommation moyenne ne constitue pas un débit maximal en usage continu. Vérifier le régime réel auprès du fabricant avant dimensionnement.",
			"Les valeurs acoustiques et vibratoires sont celles de cette fiche ; leurs protocoles et incertitudes ne sont pas détaillés ici."
		]
	},
	"specifications": [
		{
			"label": "Condition de pression",
			"value": "Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"evidenceIds": [
				"m7-qb-105x-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 170 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-qb-105x-20260927"
			]
		},
		{
			"label": "Diamètre de plateau",
			"value": "5\" / 125 x 22 (mm)",
			"evidenceIds": [
				"m7-qb-105x-20260927"
			]
		},
		{
			"label": "Filetage de broche",
			"value": "5/8\" -11",
			"evidenceIds": [
				"m7-qb-105x-20260927"
			]
		},
		{
			"label": "Puissance moteur publiée",
			"value": "0.78",
			"evidenceIds": [
				"m7-qb-105x-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "11000 (R.P.M)",
			"evidenceIds": [
				"m7-qb-105x-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "8-7/8\" / 226 (mm)",
			"evidenceIds": [
				"m7-qb-105x-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-qb-105x-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "1.81 kg",
			"evidenceIds": [
				"m7-qb-105x-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "87.1 (dBA)",
			"evidenceIds": [
				"m7-qb-105x-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "1.2 (m/s²)",
			"evidenceIds": [
				"m7-qb-105x-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-qb-105x-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/197",
			"sourceLabel": "M7, fiche technique constructeur QB-105X, réf. QB-105X",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 170 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-qb-105x-20260927"
		],
		"workingPressureBar": [
			"m7-qb-105x-20260927"
		],
		"airflowLpm": [
			"m7-qb-105x-20260927"
		],
		"airflowBasis": [
			"m7-qb-105x-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 170,
		"typical": 170,
		"max": 170
	},
	"airflowBasis": "average"
};

export default product;
