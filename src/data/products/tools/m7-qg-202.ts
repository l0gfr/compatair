import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-qg-202",
	"slug": "m7-qg-202",
	"brand": "M7",
	"model": "QG-202",
	"mpn": "QG-202",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "M7 QG-202",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-qg-202.webp",
		"alt": "Repères techniques M7 QG-202, référence QG-202",
		"sourceUrl": "https://www.mighty-seven.com/product/300",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 QG-202, référence QG-202. Consommation moyenne publiée : 184 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Longueur publiée : 8-1/4\" / 210 (mm). Flexible recommandé : 3/8\".",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 184 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : QG-202.",
			"Longueur publiée : 8-1/4\" / 210 (mm).",
			"Flexible recommandé : 3/8\".",
			"Cadence de frappe : 2600."
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
				"m7-qg-202-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 184 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-qg-202-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "8-1/4\" / 210 (mm)",
			"evidenceIds": [
				"m7-qg-202-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-qg-202-20260927"
			]
		},
		{
			"label": "Cadence de frappe",
			"value": "2600",
			"evidenceIds": [
				"m7-qg-202-20260927"
			]
		},
		{
			"label": "Capacité de coupe",
			"value": "1.6 (mm)",
			"evidenceIds": [
				"m7-qg-202-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "1.10 kg",
			"evidenceIds": [
				"m7-qg-202-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "89.1 (dBA)",
			"evidenceIds": [
				"m7-qg-202-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "2.9 (m/s²)",
			"evidenceIds": [
				"m7-qg-202-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-qg-202-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/300",
			"sourceLabel": "M7, fiche technique constructeur QG-202, réf. QG-202",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 184 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-qg-202-20260927"
		],
		"workingPressureBar": [
			"m7-qg-202-20260927"
		],
		"airflowLpm": [
			"m7-qg-202-20260927"
		],
		"airflowBasis": [
			"m7-qg-202-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 184,
		"typical": 184,
		"max": 184
	},
	"airflowBasis": "average"
};

export default product;
