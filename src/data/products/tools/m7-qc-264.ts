import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-qc-264",
	"slug": "m7-qc-264",
	"brand": "M7",
	"model": "QC-264",
	"mpn": "QC-264",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "M7 QC-264",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-qc-264.webp",
		"alt": "Repères techniques M7 QC-264, référence QC-264",
		"sourceUrl": "https://www.mighty-seven.com/product/278",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 QC-264, référence QC-264. Consommation moyenne publiée : 141 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Diamètre de plateau : 4\" / 100 (mm). Puissance moteur publiée : 0.5.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 141 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : QC-264.",
			"Diamètre de plateau : 4\" / 100 (mm).",
			"Puissance moteur publiée : 0.5.",
			"Vitesse à vide : 15000 (R.P.M)."
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
				"m7-qc-264-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 141 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-qc-264-20260927"
			]
		},
		{
			"label": "Diamètre de plateau",
			"value": "4\" / 100 (mm)",
			"evidenceIds": [
				"m7-qc-264-20260927"
			]
		},
		{
			"label": "Puissance moteur publiée",
			"value": "0.5",
			"evidenceIds": [
				"m7-qc-264-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "15000 (R.P.M)",
			"evidenceIds": [
				"m7-qc-264-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "9-5/32\" / 232 (mm)",
			"evidenceIds": [
				"m7-qc-264-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-qc-264-20260927"
			]
		},
		{
			"label": "Raccord d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"m7-qc-264-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "1.1 kg",
			"evidenceIds": [
				"m7-qc-264-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "85.0 (dBA)",
			"evidenceIds": [
				"m7-qc-264-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "2.2 (m/s²)",
			"evidenceIds": [
				"m7-qc-264-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-qc-264-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/278",
			"sourceLabel": "M7, fiche technique constructeur QC-264, réf. QC-264",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 141 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-qc-264-20260927"
		],
		"workingPressureBar": [
			"m7-qc-264-20260927"
		],
		"airflowLpm": [
			"m7-qc-264-20260927"
		],
		"airflowBasis": [
			"m7-qc-264-20260927"
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
