import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-ra-1272th",
	"slug": "m7-ra-1272th",
	"brand": "M7",
	"model": "RA-1272TH",
	"mpn": "RA-1272TH",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "M7 RA-1272TH",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-ra-1272th.webp",
		"alt": "Repères techniques M7 RA-1272TH, référence RA-1272TH",
		"sourceUrl": "https://www.mighty-seven.com/product/610",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 RA-1272TH, référence RA-1272TH. Consommation moyenne publiée : 198 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Taille d’embout : 1/4\" / 6.35 (mm). Plage de couple publiée : 50-221 (FT-LB) / 68-300 (Nm).",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 198 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : RA-1272TH.",
			"Taille d’embout : 1/4\" / 6.35 (mm).",
			"Plage de couple publiée : 50-221 (FT-LB) / 68-300 (Nm).",
			"Vitesse à vide : 8000 (R.P.M)."
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
				"m7-ra-1272th-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 198 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-ra-1272th-20260927"
			]
		},
		{
			"label": "Taille d’embout",
			"value": "1/4\" / 6.35 (mm)",
			"evidenceIds": [
				"m7-ra-1272th-20260927"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "50-221 (FT-LB) / 68-300 (Nm)",
			"evidenceIds": [
				"m7-ra-1272th-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "8000 (R.P.M)",
			"evidenceIds": [
				"m7-ra-1272th-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "7-27/32\" / 187 (mm)",
			"evidenceIds": [
				"m7-ra-1272th-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-ra-1272th-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "1.2 kg",
			"evidenceIds": [
				"m7-ra-1272th-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "96.0 (dBA)",
			"evidenceIds": [
				"m7-ra-1272th-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "5.1 (m/s²)",
			"evidenceIds": [
				"m7-ra-1272th-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-ra-1272th-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/610",
			"sourceLabel": "M7, fiche technique constructeur RA-1272TH, réf. RA-1272TH",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 198 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-ra-1272th-20260927"
		],
		"workingPressureBar": [
			"m7-ra-1272th-20260927"
		],
		"airflowLpm": [
			"m7-ra-1272th-20260927"
		],
		"airflowBasis": [
			"m7-ra-1272th-20260927"
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
