import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-qa-151-a-b",
	"slug": "m7-qa-151-a-b",
	"brand": "M7",
	"model": "QA-151 A/B",
	"mpn": "QA-151 A/B",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "M7 QA-151 A/B",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-qa-151-a-b.webp",
		"alt": "Repères techniques M7 QA-151 A/B, référence QA-151 A/B",
		"sourceUrl": "https://www.mighty-seven.com/product/155",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 QA-151 A/B, référence QA-151 A/B. Consommation moyenne publiée : 345 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Diamètre de pince : 1/4\" / 6 (mm). Puissance moteur publiée : 0.9.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 345 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : QA-151 A/B.",
			"Diamètre de pince : 1/4\" / 6 (mm).",
			"Puissance moteur publiée : 0.9.",
			"Vitesse à vide : 18000 (R.P.M)."
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
				"m7-qa-151-a-b-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 345 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-qa-151-a-b-20260927"
			]
		},
		{
			"label": "Diamètre de pince",
			"value": "1/4\" / 6 (mm)",
			"evidenceIds": [
				"m7-qa-151-a-b-20260927"
			]
		},
		{
			"label": "Puissance moteur publiée",
			"value": "0.9",
			"evidenceIds": [
				"m7-qa-151-a-b-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "18000 (R.P.M)",
			"evidenceIds": [
				"m7-qa-151-a-b-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "7\" / 177 (mm)",
			"evidenceIds": [
				"m7-qa-151-a-b-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-qa-151-a-b-20260927"
			]
		},
		{
			"label": "Raccord d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"m7-qa-151-a-b-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "0.80 kg",
			"evidenceIds": [
				"m7-qa-151-a-b-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "75.0 (dBA)",
			"evidenceIds": [
				"m7-qa-151-a-b-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "2.1 (m/s²)",
			"evidenceIds": [
				"m7-qa-151-a-b-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-qa-151-a-b-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/155",
			"sourceLabel": "M7, fiche technique constructeur QA-151 A/B, réf. QA-151 A/B",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 345 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-qa-151-a-b-20260927"
		],
		"workingPressureBar": [
			"m7-qa-151-a-b-20260927"
		],
		"airflowLpm": [
			"m7-qa-151-a-b-20260927"
		],
		"airflowBasis": [
			"m7-qa-151-a-b-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 345,
		"typical": 345,
		"max": 345
	},
	"airflowBasis": "average"
};

export default product;
