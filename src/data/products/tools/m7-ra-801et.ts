import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-ra-801et",
	"slug": "m7-ra-801et",
	"brand": "M7",
	"model": "RA-801ET",
	"mpn": "RA-801ET",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "M7 RA-801ET",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-ra-801et.webp",
		"alt": "Repères techniques M7 RA-801ET, référence RA-801ET",
		"sourceUrl": "https://www.mighty-seven.com/product/376",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 RA-801ET, référence RA-801ET. Consommation moyenne publiée : 496 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Taille d’embout : 1/4\" / 6.35 (mm). Plage de couple publiée : 3.8-10.4 (FT-LB) / 5-14 (Nm).",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 496 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : RA-801ET.",
			"Taille d’embout : 1/4\" / 6.35 (mm).",
			"Plage de couple publiée : 3.8-10.4 (FT-LB) / 5-14 (Nm).",
			"Vitesse à vide : 1700 (R.P.M)."
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
				"m7-ra-801et-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 496 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-ra-801et-20260927"
			]
		},
		{
			"label": "Taille d’embout",
			"value": "1/4\" / 6.35 (mm)",
			"evidenceIds": [
				"m7-ra-801et-20260927"
			]
		},
		{
			"label": "Plage de couple publiée",
			"value": "3.8-10.4 (FT-LB) / 5-14 (Nm)",
			"evidenceIds": [
				"m7-ra-801et-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1700 (R.P.M)",
			"evidenceIds": [
				"m7-ra-801et-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "7-4/5\" / 198 (mm)",
			"evidenceIds": [
				"m7-ra-801et-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "1/4\"",
			"evidenceIds": [
				"m7-ra-801et-20260927"
			]
		},
		{
			"label": "Raccord d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"m7-ra-801et-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "1.20 kg",
			"evidenceIds": [
				"m7-ra-801et-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "93.6 (dBA)",
			"evidenceIds": [
				"m7-ra-801et-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "1.35 (m/s²)",
			"evidenceIds": [
				"m7-ra-801et-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-ra-801et-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/376",
			"sourceLabel": "M7, fiche technique constructeur RA-801ET, réf. RA-801ET",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 496 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-ra-801et-20260927"
		],
		"workingPressureBar": [
			"m7-ra-801et-20260927"
		],
		"airflowLpm": [
			"m7-ra-801et-20260927"
		],
		"airflowBasis": [
			"m7-ra-801et-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 496,
		"typical": 496,
		"max": 496
	},
	"airflowBasis": "average"
};

export default product;
