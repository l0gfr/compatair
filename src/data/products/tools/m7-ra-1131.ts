import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-ra-1131",
	"slug": "m7-ra-1131",
	"brand": "M7",
	"model": "RA-1131",
	"mpn": "RA-1131",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "M7 RA-1131",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-ra-1131.webp",
		"alt": "Repères techniques M7 RA-1131, référence RA-1131",
		"sourceUrl": "https://www.mighty-seven.com/product/379",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 RA-1131, référence RA-1131. Consommation moyenne publiée : 127 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Taille d’embout : 1/4\" / 6.35 (mm). Plage de couple publiée : 0.7-2.9 (FT-LB) / 1-4 (Nm).",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 127 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : RA-1131.",
			"Taille d’embout : 1/4\" / 6.35 (mm).",
			"Plage de couple publiée : 0.7-2.9 (FT-LB) / 1-4 (Nm).",
			"Vitesse à vide : 1800 (R.P.M)."
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
				"m7-ra-1131-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 127 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-ra-1131-20260927"
			]
		},
		{
			"label": "Taille d’embout",
			"value": "1/4\" / 6.35 (mm)",
			"evidenceIds": [
				"m7-ra-1131-20260927"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "0.7-2.9 (FT-LB) / 1-4 (Nm)",
			"evidenceIds": [
				"m7-ra-1131-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1800 (R.P.M)",
			"evidenceIds": [
				"m7-ra-1131-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "9\" / 228 (mm)",
			"evidenceIds": [
				"m7-ra-1131-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-ra-1131-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "0.76 kg",
			"evidenceIds": [
				"m7-ra-1131-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "80.0 (dBA)",
			"evidenceIds": [
				"m7-ra-1131-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "2.3 (m/s²)",
			"evidenceIds": [
				"m7-ra-1131-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-ra-1131-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/379",
			"sourceLabel": "M7, fiche technique constructeur RA-1131, réf. RA-1131",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 127 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-ra-1131-20260927"
		],
		"workingPressureBar": [
			"m7-ra-1131-20260927"
		],
		"airflowLpm": [
			"m7-ra-1131-20260927"
		],
		"airflowBasis": [
			"m7-ra-1131-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 127,
		"typical": 127,
		"max": 127
	},
	"airflowBasis": "average"
};

export default product;
