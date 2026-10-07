import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-qe-444",
	"slug": "m7-qe-444",
	"brand": "M7",
	"model": "QE-444",
	"mpn": "QE-444",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "M7 QE-444",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-qe-444.webp",
		"alt": "Repères techniques M7 QE-444, référence QE-444",
		"sourceUrl": "https://www.mighty-seven.com/product/3551",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 QE-444, référence QE-444. Consommation moyenne publiée : 135 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Capacité de mandrin : 1/2\" / 13 (mm). Puissance moteur publiée : 0.50.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 135 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : QE-444.",
			"Capacité de mandrin : 1/2\" / 13 (mm).",
			"Puissance moteur publiée : 0.50.",
			"Vitesse à vide : 1300 (R.P.M)."
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
				"m7-qe-444-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 135 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-qe-444-20260927"
			]
		},
		{
			"label": "Capacité de mandrin",
			"value": "1/2\" / 13 (mm)",
			"evidenceIds": [
				"m7-qe-444-20260927"
			]
		},
		{
			"label": "Puissance moteur publiée",
			"value": "0.50",
			"evidenceIds": [
				"m7-qe-444-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1300 (R.P.M)",
			"evidenceIds": [
				"m7-qe-444-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "10-53/64\" / 270 (mm)",
			"evidenceIds": [
				"m7-qe-444-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-qe-444-20260927"
			]
		},
		{
			"label": "Raccord d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"m7-qe-444-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "1.73 kg",
			"evidenceIds": [
				"m7-qe-444-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "90.0 (dBA)",
			"evidenceIds": [
				"m7-qe-444-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "3.0 (m/s²)",
			"evidenceIds": [
				"m7-qe-444-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-qe-444-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/3551",
			"sourceLabel": "M7, fiche technique constructeur QE-444, réf. QE-444",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 135 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-qe-444-20260927"
		],
		"workingPressureBar": [
			"m7-qe-444-20260927"
		],
		"airflowLpm": [
			"m7-qe-444-20260927"
		],
		"airflowBasis": [
			"m7-qe-444-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 135,
		"typical": 135,
		"max": 135
	},
	"airflowBasis": "average"
};

export default product;
