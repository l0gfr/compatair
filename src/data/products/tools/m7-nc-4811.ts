import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-nc-4811",
	"slug": "m7-nc-4811",
	"brand": "M7",
	"model": "NC-4811",
	"mpn": "NC-4811",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "M7 NC-4811",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-nc-4811.webp",
		"alt": "Repères techniques M7 NC-4811, référence NC-4811",
		"sourceUrl": "https://www.mighty-seven.com/product/48",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 NC-4811, référence NC-4811. Consommation moyenne publiée : 240 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Carré d’entraînement : 1/2\". Plage de couple publiée : 118-140 (FT-LB) / 160-189 (Nm).",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 240 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : NC-4811.",
			"Carré d’entraînement : 1/2\".",
			"Plage de couple publiée : 118-140 (FT-LB) / 160-189 (Nm).",
			"Couple maximal publié : 210 (FT-LB) / 285 (Nm)."
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
				"m7-nc-4811-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 240 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-nc-4811-20260927"
			]
		},
		{
			"label": "Carré d’entraînement",
			"value": "1/2\"",
			"evidenceIds": [
				"m7-nc-4811-20260927"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "118-140 (FT-LB) / 160-189 (Nm)",
			"evidenceIds": [
				"m7-nc-4811-20260927"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "210 (FT-LB) / 285 (Nm)",
			"evidenceIds": [
				"m7-nc-4811-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5500 (R.P.M)",
			"evidenceIds": [
				"m7-nc-4811-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "10-9/32\" / 260 (mm)",
			"evidenceIds": [
				"m7-nc-4811-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-nc-4811-20260927"
			]
		},
		{
			"label": "Raccord d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"m7-nc-4811-20260927"
			]
		},
		{
			"label": "Capacité de boulon",
			"value": "9/16\" / 14 (mm)",
			"evidenceIds": [
				"m7-nc-4811-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "1.70 kg",
			"evidenceIds": [
				"m7-nc-4811-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "85.0 (dBA)",
			"evidenceIds": [
				"m7-nc-4811-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "5.3 (m/s²)",
			"evidenceIds": [
				"m7-nc-4811-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-nc-4811-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/48",
			"sourceLabel": "M7, fiche technique constructeur NC-4811, réf. NC-4811",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 240 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-nc-4811-20260927"
		],
		"workingPressureBar": [
			"m7-nc-4811-20260927"
		],
		"airflowLpm": [
			"m7-nc-4811-20260927"
		],
		"airflowBasis": [
			"m7-nc-4811-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 240,
		"typical": 240,
		"max": 240
	},
	"airflowBasis": "average"
};

export default product;
