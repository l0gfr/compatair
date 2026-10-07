import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-ne-332",
	"slug": "m7-ne-332",
	"brand": "M7",
	"model": "NE-332",
	"mpn": "NE-332",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "M7 NE-332",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-ne-332.webp",
		"alt": "Repères techniques M7 NE-332, référence NE-332",
		"sourceUrl": "https://www.mighty-seven.com/product/125",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 NE-332, référence NE-332. Consommation moyenne publiée : 113,28 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Carré d’entraînement : 3/8\". Plage de couple publiée : 10-45 (FT-LB) / 13.5-61 (Nm).",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 113,28 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : NE-332.",
			"Carré d’entraînement : 3/8\".",
			"Plage de couple publiée : 10-45 (FT-LB) / 13.5-61 (Nm).",
			"Couple maximal publié : 60 (FT-LB) / 81 (Nm)."
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
				"m7-ne-332-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 113,28 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-ne-332-20260927"
			]
		},
		{
			"label": "Carré d’entraînement",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-ne-332-20260927"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "10-45 (FT-LB) / 13.5-61 (Nm)",
			"evidenceIds": [
				"m7-ne-332-20260927"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "60 (FT-LB) / 81 (Nm)",
			"evidenceIds": [
				"m7-ne-332-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "160 (R.P.M)",
			"evidenceIds": [
				"m7-ne-332-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "10-3/8\" / 265 (mm)",
			"evidenceIds": [
				"m7-ne-332-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-ne-332-20260927"
			]
		},
		{
			"label": "Raccord d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"m7-ne-332-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "1.22 kg",
			"evidenceIds": [
				"m7-ne-332-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "90.5 (dBA)",
			"evidenceIds": [
				"m7-ne-332-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "4.4 (m/s²)",
			"evidenceIds": [
				"m7-ne-332-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-ne-332-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/125",
			"sourceLabel": "M7, fiche technique constructeur NE-332, réf. NE-332",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 113,28 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-ne-332-20260927"
		],
		"workingPressureBar": [
			"m7-ne-332-20260927"
		],
		"airflowLpm": [
			"m7-ne-332-20260927"
		],
		"airflowBasis": [
			"m7-ne-332-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 113.28,
		"typical": 113.28,
		"max": 113.28
	},
	"airflowBasis": "average"
};

export default product;
