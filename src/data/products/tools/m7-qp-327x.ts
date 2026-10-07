import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-qp-327x",
	"slug": "m7-qp-327x",
	"brand": "M7",
	"model": "QP-327X",
	"mpn": "QP-327X",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "M7 QP-327X",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-qp-327x.webp",
		"alt": "Repères techniques M7 QP-327X, référence QP-327X",
		"sourceUrl": "https://www.mighty-seven.com/product/270",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 QP-327X, référence QP-327X. Consommation moyenne publiée : 169 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Diamètre de plateau : 7\" / 178 (mm). Filetage de broche : M14 x P2.0.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 169 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : QP-327X.",
			"Diamètre de plateau : 7\" / 178 (mm).",
			"Filetage de broche : M14 x P2.0.",
			"Puissance moteur publiée : 0.40."
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
				"m7-qp-327x-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 169 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-qp-327x-20260927"
			]
		},
		{
			"label": "Diamètre de plateau",
			"value": "7\" / 178 (mm)",
			"evidenceIds": [
				"m7-qp-327x-20260927"
			]
		},
		{
			"label": "Filetage de broche",
			"value": "M14 x P2.0",
			"evidenceIds": [
				"m7-qp-327x-20260927"
			]
		},
		{
			"label": "Puissance moteur publiée",
			"value": "0.40",
			"evidenceIds": [
				"m7-qp-327x-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "2500 (R.P.M)",
			"evidenceIds": [
				"m7-qp-327x-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "16\" / 406 (mm)",
			"evidenceIds": [
				"m7-qp-327x-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-qp-327x-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "2.04 kg",
			"evidenceIds": [
				"m7-qp-327x-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "84.0 (dBA)",
			"evidenceIds": [
				"m7-qp-327x-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "2.5 (m/s²)",
			"evidenceIds": [
				"m7-qp-327x-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-qp-327x-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/270",
			"sourceLabel": "M7, fiche technique constructeur QP-327X, réf. QP-327X",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 169 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-qp-327x-20260927"
		],
		"workingPressureBar": [
			"m7-qp-327x-20260927"
		],
		"airflowLpm": [
			"m7-qp-327x-20260927"
		],
		"airflowBasis": [
			"m7-qp-327x-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 169,
		"typical": 169,
		"max": 169
	},
	"airflowBasis": "average"
};

export default product;
