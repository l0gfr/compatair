import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-sc-371",
	"slug": "m7-sc-371",
	"brand": "M7",
	"model": "SC-371",
	"mpn": "SC-371",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "M7 SC-371",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-sc-371.webp",
		"alt": "Repères techniques M7 SC-371, référence SC-371",
		"sourceUrl": "https://www.mighty-seven.com/product/406",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 SC-371, référence SC-371. Consommation moyenne publiée : 180 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Emmanchement : ●. Longueur publiée : 7-1/8\" / 180 (mm).",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 180 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : SC-371.",
			"Emmanchement : ●.",
			"Longueur publiée : 7-1/8\" / 180 (mm).",
			"Flexible recommandé : 3/8\"."
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
				"m7-sc-371-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 180 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-sc-371-20260927"
			]
		},
		{
			"label": "Emmanchement",
			"value": "●",
			"evidenceIds": [
				"m7-sc-371-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "7-1/8\" / 180 (mm)",
			"evidenceIds": [
				"m7-sc-371-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-sc-371-20260927"
			]
		},
		{
			"label": "Cadence de frappe",
			"value": "3000",
			"evidenceIds": [
				"m7-sc-371-20260927"
			]
		},
		{
			"label": "Capacité de mandrin",
			"value": "3/8\" / 10.2 (mm)",
			"evidenceIds": [
				"m7-sc-371-20260927"
			]
		},
		{
			"label": "Course",
			"value": "62.5 (mm)",
			"evidenceIds": [
				"m7-sc-371-20260927"
			]
		},
		{
			"label": "Raccord d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"m7-sc-371-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "1.7 kg",
			"evidenceIds": [
				"m7-sc-371-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "95.0 (dBA)",
			"evidenceIds": [
				"m7-sc-371-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "8.8 (m/s²)",
			"evidenceIds": [
				"m7-sc-371-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-sc-371-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/406",
			"sourceLabel": "M7, fiche technique constructeur SC-371, réf. SC-371",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 180 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-sc-371-20260927"
		],
		"workingPressureBar": [
			"m7-sc-371-20260927"
		],
		"airflowLpm": [
			"m7-sc-371-20260927"
		],
		"airflowBasis": [
			"m7-sc-371-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 180,
		"typical": 180,
		"max": 180
	},
	"airflowBasis": "average"
};

export default product;
