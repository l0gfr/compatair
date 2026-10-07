import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-qp-215",
	"slug": "m7-qp-215",
	"brand": "M7",
	"model": "QP-215",
	"mpn": "QP-215",
	"categoryId": "ponceuse-rotative",
	"category": "ponceuse-rotative",
	"label": "M7 QP-215",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-qp-215.webp",
		"alt": "Repères techniques M7 QP-215, référence QP-215",
		"sourceUrl": "https://www.mighty-seven.com/product/267",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 QP-215, référence QP-215. Consommation moyenne publiée : 184 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Diamètre de plateau : 5\" / 127 (mm). Filetage de broche : 7/16\"-20.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 184 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : QP-215.",
			"Diamètre de plateau : 5\" / 127 (mm).",
			"Filetage de broche : 7/16\"-20.",
			"Puissance moteur publiée : 0.80."
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
				"m7-qp-215-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 184 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-qp-215-20260927"
			]
		},
		{
			"label": "Diamètre de plateau",
			"value": "5\" / 127 (mm)",
			"evidenceIds": [
				"m7-qp-215-20260927"
			]
		},
		{
			"label": "Filetage de broche",
			"value": "7/16\"-20",
			"evidenceIds": [
				"m7-qp-215-20260927"
			]
		},
		{
			"label": "Puissance moteur publiée",
			"value": "0.80",
			"evidenceIds": [
				"m7-qp-215-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "16000 (R.P.M)",
			"evidenceIds": [
				"m7-qp-215-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "6-19/64\" / 160 (mm)",
			"evidenceIds": [
				"m7-qp-215-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-qp-215-20260927"
			]
		},
		{
			"label": "Raccord d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"m7-qp-215-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "1.20 kg",
			"evidenceIds": [
				"m7-qp-215-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "60.0 (dBA)",
			"evidenceIds": [
				"m7-qp-215-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "1.8 (m/s²)",
			"evidenceIds": [
				"m7-qp-215-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-qp-215-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/267",
			"sourceLabel": "M7, fiche technique constructeur QP-215, réf. QP-215",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 184 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-qp-215-20260927"
		],
		"workingPressureBar": [
			"m7-qp-215-20260927"
		],
		"airflowLpm": [
			"m7-qp-215-20260927"
		],
		"airflowBasis": [
			"m7-qp-215-20260927"
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
