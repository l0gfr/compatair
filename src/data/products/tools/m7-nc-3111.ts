import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-nc-3111",
	"slug": "m7-nc-3111",
	"brand": "M7",
	"model": "NC-3111",
	"mpn": "NC-3111",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "M7 NC-3111",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-nc-3111.webp",
		"alt": "Repères techniques M7 NC-3111, référence NC-3111",
		"sourceUrl": "https://www.mighty-seven.com/product/3543",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 NC-3111, référence NC-3111. Consommation moyenne publiée : 113 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Carré d’entraînement : 3/8\". Capacité de boulon : 1/2\" / 13 (mm).",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 113 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : NC-3111.",
			"Carré d’entraînement : 3/8\".",
			"Capacité de boulon : 1/2\" / 13 (mm).",
			"Plage de couple publiée : 70-130 (FT-LB) / 95-176 (Nm)."
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
				"m7-nc-3111-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 113 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-nc-3111-20260927"
			]
		},
		{
			"label": "Carré d’entraînement",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-nc-3111-20260927"
			]
		},
		{
			"label": "Capacité de boulon",
			"value": "1/2\" / 13 (mm)",
			"evidenceIds": [
				"m7-nc-3111-20260927"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "70-130 (FT-LB) / 95-176 (Nm)",
			"evidenceIds": [
				"m7-nc-3111-20260927"
			]
		},
		{
			"label": "Couple maximal publié",
			"value": "160 (FT-LB) / 216 (Nm)",
			"evidenceIds": [
				"m7-nc-3111-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "9000 (R.P.M)",
			"evidenceIds": [
				"m7-nc-3111-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "6-7/16\" / 163 (mm)",
			"evidenceIds": [
				"m7-nc-3111-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-nc-3111-20260927"
			]
		},
		{
			"label": "Raccord d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"m7-nc-3111-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "93.3 (dBA)",
			"evidenceIds": [
				"m7-nc-3111-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "4.1 (m/s²)",
			"evidenceIds": [
				"m7-nc-3111-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-nc-3111-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/3543",
			"sourceLabel": "M7, fiche technique constructeur NC-3111, réf. NC-3111",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 113 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-nc-3111-20260927"
		],
		"workingPressureBar": [
			"m7-nc-3111-20260927"
		],
		"airflowLpm": [
			"m7-nc-3111-20260927"
		],
		"airflowBasis": [
			"m7-nc-3111-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 113,
		"typical": 113,
		"max": 113
	},
	"airflowBasis": "average"
};

export default product;
