import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-ra-3111",
	"slug": "m7-ra-3111",
	"brand": "M7",
	"model": "RA-3111",
	"mpn": "RA-3111",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "M7 RA-3111",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-ra-3111.webp",
		"alt": "Repères techniques M7 RA-3111, référence RA-3111",
		"sourceUrl": "https://www.mighty-seven.com/product/3491",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 RA-3111, référence RA-3111. Consommation moyenne publiée : 198 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Taille d’embout : 7/64\" / 2.6 (mm). Plage de couple publiée : 9.7-18.5 (FT-LB).",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 198 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : RA-3111.",
			"Taille d’embout : 7/64\" / 2.6 (mm).",
			"Plage de couple publiée : 9.7-18.5 (FT-LB).",
			"Vitesse à vide : 1100 (R.P.M)."
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
				"m7-ra-3111-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 198 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-ra-3111-20260927"
			]
		},
		{
			"label": "Taille d’embout",
			"value": "7/64\" / 2.6 (mm)",
			"evidenceIds": [
				"m7-ra-3111-20260927"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "9.7-18.5 (FT-LB)",
			"evidenceIds": [
				"m7-ra-3111-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1100 (R.P.M)",
			"evidenceIds": [
				"m7-ra-3111-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "6-11/16\" / 170 (mm)",
			"evidenceIds": [
				"m7-ra-3111-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "1/4\"",
			"evidenceIds": [
				"m7-ra-3111-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "0.71 kg",
			"evidenceIds": [
				"m7-ra-3111-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "82.0 (dBA)",
			"evidenceIds": [
				"m7-ra-3111-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "0.73 (m/s²)",
			"evidenceIds": [
				"m7-ra-3111-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-ra-3111-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/3491",
			"sourceLabel": "M7, fiche technique constructeur RA-3111, réf. RA-3111",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 198 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-ra-3111-20260927"
		],
		"workingPressureBar": [
			"m7-ra-3111-20260927"
		],
		"airflowLpm": [
			"m7-ra-3111-20260927"
		],
		"airflowBasis": [
			"m7-ra-3111-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 198,
		"typical": 198,
		"max": 198
	},
	"airflowBasis": "average"
};

export default product;
