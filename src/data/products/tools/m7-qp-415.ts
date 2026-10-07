import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-qp-415",
	"slug": "m7-qp-415",
	"brand": "M7",
	"model": "QP-415",
	"mpn": "QP-415",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "M7 QP-415",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-qp-415.webp",
		"alt": "Repères techniques M7 QP-415, référence QP-415",
		"sourceUrl": "https://www.mighty-seven.com/product/557",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 QP-415, référence QP-415. Consommation moyenne publiée : 141 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Diamètre de plateau : 5\" / 127 (mm). Vitesse à vide : 2500 (R.P.M).",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 141 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : QP-415.",
			"Diamètre de plateau : 5\" / 127 (mm).",
			"Vitesse à vide : 2500 (R.P.M).",
			"Longueur publiée : 8-11/32\" / 211 (mm)."
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
				"m7-qp-415-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 141 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-qp-415-20260927"
			]
		},
		{
			"label": "Diamètre de plateau",
			"value": "5\" / 127 (mm)",
			"evidenceIds": [
				"m7-qp-415-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2500 (R.P.M)",
			"evidenceIds": [
				"m7-qp-415-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "8-11/32\" / 211 (mm)",
			"evidenceIds": [
				"m7-qp-415-20260927"
			]
		},
		{
			"label": "Puissance moteur publiée",
			"value": "0.5",
			"evidenceIds": [
				"m7-qp-415-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-qp-415-20260927"
			]
		},
		{
			"label": "Filetage de broche",
			"value": "5/16\"-24",
			"evidenceIds": [
				"m7-qp-415-20260927"
			]
		},
		{
			"label": "Raccord d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"m7-qp-415-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "85.0 (dBA)",
			"evidenceIds": [
				"m7-qp-415-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "1.1 (m/s²)",
			"evidenceIds": [
				"m7-qp-415-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-qp-415-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/557",
			"sourceLabel": "M7, fiche technique constructeur QP-415, réf. QP-415",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 141 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-qp-415-20260927"
		],
		"workingPressureBar": [
			"m7-qp-415-20260927"
		],
		"airflowLpm": [
			"m7-qp-415-20260927"
		],
		"airflowBasis": [
			"m7-qp-415-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 141,
		"typical": 141,
		"max": 141
	},
	"airflowBasis": "average"
};

export default product;
