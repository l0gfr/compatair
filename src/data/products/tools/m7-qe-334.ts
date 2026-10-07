import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-qe-334",
	"slug": "m7-qe-334",
	"brand": "M7",
	"model": "QE-334",
	"mpn": "QE-334",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "M7 QE-334",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-qe-334.webp",
		"alt": "Repères techniques M7 QE-334, référence QE-334",
		"sourceUrl": "https://www.mighty-seven.com/product/307",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 QE-334, référence QE-334. Consommation moyenne publiée : 184 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Capacité de mandrin : 3/8\" / 10 (mm). Puissance moteur publiée : 0.60.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 184 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : QE-334.",
			"Capacité de mandrin : 3/8\" / 10 (mm).",
			"Puissance moteur publiée : 0.60.",
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
				"m7-qe-334-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 184 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-qe-334-20260927"
			]
		},
		{
			"label": "Capacité de mandrin",
			"value": "3/8\" / 10 (mm)",
			"evidenceIds": [
				"m7-qe-334-20260927"
			]
		},
		{
			"label": "Puissance moteur publiée",
			"value": "0.60",
			"evidenceIds": [
				"m7-qe-334-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2200 (R.P.M)",
			"evidenceIds": [
				"m7-qe-334-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "7-1/2\" / 190 (mm)",
			"evidenceIds": [
				"m7-qe-334-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-qe-334-20260927"
			]
		},
		{
			"label": "Couple de calage",
			"value": "6.31 (N.m)",
			"evidenceIds": [
				"m7-qe-334-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "1.0 kg",
			"evidenceIds": [
				"m7-qe-334-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "92.0 (dBA)",
			"evidenceIds": [
				"m7-qe-334-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "0.2 (m/s²)",
			"evidenceIds": [
				"m7-qe-334-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-qe-334-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/307",
			"sourceLabel": "M7, fiche technique constructeur QE-334, réf. QE-334",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 184 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-qe-334-20260927"
		],
		"workingPressureBar": [
			"m7-qe-334-20260927"
		],
		"airflowLpm": [
			"m7-qe-334-20260927"
		],
		"airflowBasis": [
			"m7-qe-334-20260927"
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
