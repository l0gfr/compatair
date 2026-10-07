import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-qe-432",
	"slug": "m7-qe-432",
	"brand": "M7",
	"model": "QE-432",
	"mpn": "QE-432",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "M7 QE-432",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-qe-432.webp",
		"alt": "Repères techniques M7 QE-432, référence QE-432",
		"sourceUrl": "https://www.mighty-seven.com/product/309",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 QE-432, référence QE-432. Consommation moyenne publiée : 135 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Capacité de mandrin : 3/8\" / 10 (mm). Puissance moteur publiée : 0.70.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 135 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : QE-432.",
			"Capacité de mandrin : 3/8\" / 10 (mm).",
			"Puissance moteur publiée : 0.70.",
			"Vitesse à vide : 2200 (R.P.M)."
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
				"m7-qe-432-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 135 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-qe-432-20260927"
			]
		},
		{
			"label": "Capacité de mandrin",
			"value": "3/8\" / 10 (mm)",
			"evidenceIds": [
				"m7-qe-432-20260927"
			]
		},
		{
			"label": "Puissance moteur publiée",
			"value": "0.70",
			"evidenceIds": [
				"m7-qe-432-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2200 (R.P.M)",
			"evidenceIds": [
				"m7-qe-432-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "8-29/32\" / 226 (mm)",
			"evidenceIds": [
				"m7-qe-432-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-qe-432-20260927"
			]
		},
		{
			"label": "Couple de calage",
			"value": "8.76 (N.m)",
			"evidenceIds": [
				"m7-qe-432-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "1.18 kg",
			"evidenceIds": [
				"m7-qe-432-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "90.0 (dBA)",
			"evidenceIds": [
				"m7-qe-432-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "3.0 (m/s²)",
			"evidenceIds": [
				"m7-qe-432-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-qe-432-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/309",
			"sourceLabel": "M7, fiche technique constructeur QE-432, réf. QE-432",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 135 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-qe-432-20260927"
		],
		"workingPressureBar": [
			"m7-qe-432-20260927"
		],
		"airflowLpm": [
			"m7-qe-432-20260927"
		],
		"airflowBasis": [
			"m7-qe-432-20260927"
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
