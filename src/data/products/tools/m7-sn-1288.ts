import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-sn-1288",
	"slug": "m7-sn-1288",
	"brand": "M7",
	"model": "SN-1288",
	"mpn": "SN-1288",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "M7 SN-1288",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-sn-1288.webp",
		"alt": "Repères techniques M7 SN-1288, référence SN-1288",
		"sourceUrl": "https://www.mighty-seven.com/product/432",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 SN-1288, référence SN-1288. Consommation moyenne publiée : 85 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Longueur publiée : 11-3/8\" / 290 (mm). Flexible recommandé : 3/8\".",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 85 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : SN-1288.",
			"Longueur publiée : 11-3/8\" / 290 (mm).",
			"Flexible recommandé : 3/8\".",
			"Cadence de frappe : 5500."
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
				"m7-sn-1288-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 85 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-sn-1288-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "11-3/8\" / 290 (mm)",
			"evidenceIds": [
				"m7-sn-1288-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-sn-1288-20260927"
			]
		},
		{
			"label": "Cadence de frappe",
			"value": "5500",
			"evidenceIds": [
				"m7-sn-1288-20260927"
			]
		},
		{
			"label": "Diamètre des aiguilles",
			"value": "3 x 125 (mm)",
			"evidenceIds": [
				"m7-sn-1288-20260927"
			]
		},
		{
			"label": "Nombre d’aiguilles",
			"value": "12 (mm)",
			"evidenceIds": [
				"m7-sn-1288-20260927"
			]
		},
		{
			"label": "Course",
			"value": "32 (mm)",
			"evidenceIds": [
				"m7-sn-1288-20260927"
			]
		},
		{
			"label": "Raccord d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"m7-sn-1288-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "1.30 kg",
			"evidenceIds": [
				"m7-sn-1288-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "86.0 (dBA)",
			"evidenceIds": [
				"m7-sn-1288-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "7.7 (m/s²)",
			"evidenceIds": [
				"m7-sn-1288-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-sn-1288-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/432",
			"sourceLabel": "M7, fiche technique constructeur SN-1288, réf. SN-1288",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 85 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-sn-1288-20260927"
		],
		"workingPressureBar": [
			"m7-sn-1288-20260927"
		],
		"airflowLpm": [
			"m7-sn-1288-20260927"
		],
		"airflowBasis": [
			"m7-sn-1288-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 85,
		"typical": 85,
		"max": 85
	},
	"airflowBasis": "average"
};

export default product;
