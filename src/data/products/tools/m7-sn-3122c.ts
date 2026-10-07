import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-sn-3122c",
	"slug": "m7-sn-3122c",
	"brand": "M7",
	"model": "SN-3122C",
	"mpn": "SN-3122C",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "M7 SN-3122C",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-sn-3122c.webp",
		"alt": "Repères techniques M7 SN-3122C, référence SN-3122C",
		"sourceUrl": "https://www.mighty-seven.com/product/422",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 SN-3122C, référence SN-3122C. Consommation moyenne publiée : 566 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Emmanchement : ⬣. Longueur publiée : 16\" / 405 (mm).",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 566 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : SN-3122C.",
			"Emmanchement : ⬣.",
			"Longueur publiée : 16\" / 405 (mm).",
			"Flexible recommandé : 1/2\"."
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
				"m7-sn-3122c-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 566 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-sn-3122c-20260927"
			]
		},
		{
			"label": "Emmanchement",
			"value": "⬣",
			"evidenceIds": [
				"m7-sn-3122c-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "16\" / 405 (mm)",
			"evidenceIds": [
				"m7-sn-3122c-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "1/2\"",
			"evidenceIds": [
				"m7-sn-3122c-20260927"
			]
		},
		{
			"label": "Cadence de frappe",
			"value": "2300",
			"evidenceIds": [
				"m7-sn-3122c-20260927"
			]
		},
		{
			"label": "Capacité de mandrin",
			"value": "0.58 / 14.8 (mm)",
			"evidenceIds": [
				"m7-sn-3122c-20260927"
			]
		},
		{
			"label": "Course",
			"value": "90 (mm)",
			"evidenceIds": [
				"m7-sn-3122c-20260927"
			]
		},
		{
			"label": "Raccord d’air",
			"value": "1/2\"",
			"evidenceIds": [
				"m7-sn-3122c-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "7.3 kg",
			"evidenceIds": [
				"m7-sn-3122c-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "114.3 (dBA)",
			"evidenceIds": [
				"m7-sn-3122c-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "9.4 (m/s²)",
			"evidenceIds": [
				"m7-sn-3122c-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-sn-3122c-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/422",
			"sourceLabel": "M7, fiche technique constructeur SN-3122C, réf. SN-3122C",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 566 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-sn-3122c-20260927"
		],
		"workingPressureBar": [
			"m7-sn-3122c-20260927"
		],
		"airflowLpm": [
			"m7-sn-3122c-20260927"
		],
		"airflowBasis": [
			"m7-sn-3122c-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 566,
		"typical": 566,
		"max": 566
	},
	"airflowBasis": "average"
};

export default product;
