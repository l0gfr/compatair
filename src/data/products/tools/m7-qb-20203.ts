import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-qb-20203",
	"slug": "m7-qb-20203",
	"brand": "M7",
	"model": "QB-20203",
	"mpn": "QB-20203",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "M7 QB-20203",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-qb-20203.webp",
		"alt": "Repères techniques M7 QB-20203, référence QB-20203",
		"sourceUrl": "https://www.mighty-seven.com/product/238",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 QB-20203, référence QB-20203. Consommation moyenne publiée : 85 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Diamètre de plateau : 2\" + 3\". Vitesse à vide : 14000 (R.P.M).",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 85 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : QB-20203.",
			"Diamètre de plateau : 2\" + 3\".",
			"Vitesse à vide : 14000 (R.P.M).",
			"Longueur publiée : 5-1/8\" / 130 (mm)."
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
				"m7-qb-20203-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 85 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-qb-20203-20260927"
			]
		},
		{
			"label": "Diamètre de plateau",
			"value": "2\" + 3\"",
			"evidenceIds": [
				"m7-qb-20203-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "14000 (R.P.M)",
			"evidenceIds": [
				"m7-qb-20203-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "5-1/8\" / 130 (mm)",
			"evidenceIds": [
				"m7-qb-20203-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-qb-20203-20260927"
			]
		},
		{
			"label": "Orbite",
			"value": "3.0 (mm)",
			"evidenceIds": [
				"m7-qb-20203-20260927"
			]
		},
		{
			"label": "Raccord d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"m7-qb-20203-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "0.5 kg",
			"evidenceIds": [
				"m7-qb-20203-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "81.6 (dBA)",
			"evidenceIds": [
				"m7-qb-20203-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "1.5 (m/s²)",
			"evidenceIds": [
				"m7-qb-20203-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-qb-20203-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/238",
			"sourceLabel": "M7, fiche technique constructeur QB-20203, réf. QB-20203",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 85 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-qb-20203-20260927"
		],
		"workingPressureBar": [
			"m7-qb-20203-20260927"
		],
		"airflowLpm": [
			"m7-qb-20203-20260927"
		],
		"airflowBasis": [
			"m7-qb-20203-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 85,
		"typical": 85,
		"max": 85
	},
	"airflowBasis": "average"
};

export default product;
