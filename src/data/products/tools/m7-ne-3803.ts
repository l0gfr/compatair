import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-ne-3803",
	"slug": "m7-ne-3803",
	"brand": "M7",
	"model": "NE-3803",
	"mpn": "NE-3803",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "M7 NE-3803",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-ne-3803.webp",
		"alt": "Repères techniques M7 NE-3803, référence NE-3803",
		"sourceUrl": "https://www.mighty-seven.com/product/121",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 NE-3803, référence NE-3803. Consommation moyenne publiée : 102 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Carré d’entraînement : 3/8\". Plage de couple publiée : 5-30 (FT-LB) / 7-40 (Nm).",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 102 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : NE-3803.",
			"Carré d’entraînement : 3/8\".",
			"Plage de couple publiée : 5-30 (FT-LB) / 7-40 (Nm).",
			"Couple maximal publié : 35 (FT-LB) / 47.6 (Nm)."
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
				"m7-ne-3803-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 102 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-ne-3803-20260927"
			]
		},
		{
			"label": "Carré d’entraînement",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-ne-3803-20260927"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "5-30 (FT-LB) / 7-40 (Nm)",
			"evidenceIds": [
				"m7-ne-3803-20260927"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "35 (FT-LB) / 47.6 (Nm)",
			"evidenceIds": [
				"m7-ne-3803-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "300 (R.P.M)",
			"evidenceIds": [
				"m7-ne-3803-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "8-1/2\" / 220 (mm)",
			"evidenceIds": [
				"m7-ne-3803-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-ne-3803-20260927"
			]
		},
		{
			"label": "Raccord d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"m7-ne-3803-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "0.63 kg",
			"evidenceIds": [
				"m7-ne-3803-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "92.0 (dBA)",
			"evidenceIds": [
				"m7-ne-3803-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "3.2 (m/s²)",
			"evidenceIds": [
				"m7-ne-3803-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-ne-3803-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/121",
			"sourceLabel": "M7, fiche technique constructeur NE-3803, réf. NE-3803",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 102 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-ne-3803-20260927"
		],
		"workingPressureBar": [
			"m7-ne-3803-20260927"
		],
		"airflowLpm": [
			"m7-ne-3803-20260927"
		],
		"airflowBasis": [
			"m7-ne-3803-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 102,
		"typical": 102,
		"max": 102
	},
	"airflowBasis": "average"
};

export default product;
