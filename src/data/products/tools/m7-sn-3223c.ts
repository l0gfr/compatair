import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-sn-3223c",
	"slug": "m7-sn-3223c",
	"brand": "M7",
	"model": "SN-3223C",
	"mpn": "SN-3223C",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "M7 SN-3223C",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-sn-3223c.webp",
		"alt": "Repères techniques M7 SN-3223C, référence SN-3223C",
		"sourceUrl": "https://www.mighty-seven.com/product/429",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 SN-3223C, référence SN-3223C. Consommation moyenne publiée : 622,6 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Emmanchement : ⬣. Longueur publiée : 16-1/2\" / 419 (mm).",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 622,6 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : SN-3223C.",
			"Emmanchement : ⬣.",
			"Longueur publiée : 16-1/2\" / 419 (mm).",
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
				"m7-sn-3223c-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 622,6 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-sn-3223c-20260927"
			]
		},
		{
			"label": "Emmanchement",
			"value": "⬣",
			"evidenceIds": [
				"m7-sn-3223c-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "16-1/2\" / 419 (mm)",
			"evidenceIds": [
				"m7-sn-3223c-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "1/2\"",
			"evidenceIds": [
				"m7-sn-3223c-20260927"
			]
		},
		{
			"label": "Cadence de frappe",
			"value": "1900",
			"evidenceIds": [
				"m7-sn-3223c-20260927"
			]
		},
		{
			"label": "Capacité de mandrin",
			"value": "0.58 / 14.8 (mm)",
			"evidenceIds": [
				"m7-sn-3223c-20260927"
			]
		},
		{
			"label": "Course",
			"value": "119 (mm)",
			"evidenceIds": [
				"m7-sn-3223c-20260927"
			]
		},
		{
			"label": "Raccord d’air",
			"value": "1/2\"",
			"evidenceIds": [
				"m7-sn-3223c-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "8.5 kg",
			"evidenceIds": [
				"m7-sn-3223c-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "113.3 (dBA)",
			"evidenceIds": [
				"m7-sn-3223c-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "4.8 (m/s²)",
			"evidenceIds": [
				"m7-sn-3223c-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-sn-3223c-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/429",
			"sourceLabel": "M7, fiche technique constructeur SN-3223C, réf. SN-3223C",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 622,6 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-sn-3223c-20260927"
		],
		"workingPressureBar": [
			"m7-sn-3223c-20260927"
		],
		"airflowLpm": [
			"m7-sn-3223c-20260927"
		],
		"airflowBasis": [
			"m7-sn-3223c-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 622.6,
		"typical": 622.6,
		"max": 622.6
	},
	"airflowBasis": "average"
};

export default product;
