import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-qb-134",
	"slug": "m7-qb-134",
	"brand": "M7",
	"model": "QB-134",
	"mpn": "QB-134",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "M7 QB-134",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-qb-134.webp",
		"alt": "Repères techniques M7 QB-134, référence QB-134",
		"sourceUrl": "https://www.mighty-seven.com/product/644",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 QB-134, référence QB-134. Consommation moyenne publiée : 170 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Diamètre de plateau : 4\" / 100 x 16 (mm). Filetage de broche : M10 x P1.5.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 170 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : QB-134.",
			"Diamètre de plateau : 4\" / 100 x 16 (mm).",
			"Filetage de broche : M10 x P1.5.",
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
				"m7-qb-134-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 170 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-qb-134-20260927"
			]
		},
		{
			"label": "Diamètre de plateau",
			"value": "4\" / 100 x 16 (mm)",
			"evidenceIds": [
				"m7-qb-134-20260927"
			]
		},
		{
			"label": "Filetage de broche",
			"value": "M10 x P1.5",
			"evidenceIds": [
				"m7-qb-134-20260927"
			]
		},
		{
			"label": "Puissance moteur publiée",
			"value": "0.78",
			"evidenceIds": [
				"m7-qb-134-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "11000 (R.P.M)",
			"evidenceIds": [
				"m7-qb-134-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "9\" / 230 (mm)",
			"evidenceIds": [
				"m7-qb-134-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-qb-134-20260927"
			]
		},
		{
			"label": "Raccord d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"m7-qb-134-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "1.81 kg",
			"evidenceIds": [
				"m7-qb-134-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "87.8 (dBA)",
			"evidenceIds": [
				"m7-qb-134-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "1.2 (m/s²)",
			"evidenceIds": [
				"m7-qb-134-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-qb-134-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/644",
			"sourceLabel": "M7, fiche technique constructeur QB-134, réf. QB-134",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 170 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-qb-134-20260927"
		],
		"workingPressureBar": [
			"m7-qb-134-20260927"
		],
		"airflowLpm": [
			"m7-qb-134-20260927"
		],
		"airflowBasis": [
			"m7-qb-134-20260927"
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
