import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-qe-343",
	"slug": "m7-qe-343",
	"brand": "M7",
	"model": "QE-343",
	"mpn": "QE-343",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "M7 QE-343",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-qe-343.webp",
		"alt": "Repères techniques M7 QE-343, référence QE-343",
		"sourceUrl": "https://www.mighty-seven.com/product/321",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 QE-343, référence QE-343. Consommation moyenne publiée : 184 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Capacité de mandrin : 1/2\" / 13 (mm). Puissance moteur publiée : 0.65.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 184 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : QE-343.",
			"Capacité de mandrin : 1/2\" / 13 (mm).",
			"Puissance moteur publiée : 0.65.",
			"Vitesse à vide : 800 (R.P.M)."
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
				"m7-qe-343-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 184 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-qe-343-20260927"
			]
		},
		{
			"label": "Capacité de mandrin",
			"value": "1/2\" / 13 (mm)",
			"evidenceIds": [
				"m7-qe-343-20260927"
			]
		},
		{
			"label": "Puissance moteur publiée",
			"value": "0.65",
			"evidenceIds": [
				"m7-qe-343-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "800 (R.P.M)",
			"evidenceIds": [
				"m7-qe-343-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "9\" / 230 (mm)",
			"evidenceIds": [
				"m7-qe-343-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-qe-343-20260927"
			]
		},
		{
			"label": "Couple de calage",
			"value": "11.15 (N.m)",
			"evidenceIds": [
				"m7-qe-343-20260927"
			]
		},
		{
			"label": "Raccord d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"m7-qe-343-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "1.8 kg",
			"evidenceIds": [
				"m7-qe-343-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "97.5 (dBA)",
			"evidenceIds": [
				"m7-qe-343-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "0.1 (m/s²)",
			"evidenceIds": [
				"m7-qe-343-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-qe-343-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/321",
			"sourceLabel": "M7, fiche technique constructeur QE-343, réf. QE-343",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 184 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-qe-343-20260927"
		],
		"workingPressureBar": [
			"m7-qe-343-20260927"
		],
		"airflowLpm": [
			"m7-qe-343-20260927"
		],
		"airflowBasis": [
			"m7-qe-343-20260927"
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
