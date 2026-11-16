import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-sn-2124",
	"slug": "m7-sn-2124",
	"brand": "M7",
	"model": "SN-2124",
	"mpn": "SN-2124",
	"categoryId": "derouilleur-a-aiguilles",
	"category": "derouilleur-a-aiguilles",
	"label": "M7 SN-2124",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-sn-2124-technical-20261116-reviews.svg",
		"alt": "Repères techniques M7 SN-2124, référence SN-2124",
		"sourceUrl": "https://www.mighty-seven.com/product/434",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"editorial": {
		"overview": "Le SN-2124 est un dérouilleur à poignée pistolet de 350 mm, à 4 000 coups/min et course de 27 mm. La fiche indique des aiguilles 3 × 180 mm et le nombre 23, avec un suffixe d’unité « mm » incohérent sur le champ de comptage. Cette anomalie est conservée. Les 209 L/min sont une consommation moyenne ; ils ne sont pas transformés en débit en charge.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 209 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : SN-2124.",
			"Longueur publiée : 13-9/16\" / 350 (mm).",
			"Flexible recommandé : 3/8\".",
			"Cadence de frappe : 4000."
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
				"m7-sn-2124-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 209 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-sn-2124-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "13-9/16\" / 350 (mm)",
			"evidenceIds": [
				"m7-sn-2124-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-sn-2124-20260927"
			]
		},
		{
			"label": "Cadence de frappe",
			"value": "4000",
			"evidenceIds": [
				"m7-sn-2124-20260927"
			]
		},
		{
			"label": "Diamètre des aiguilles",
			"value": "3 x 180 (mm)",
			"evidenceIds": [
				"m7-sn-2124-20260927"
			]
		},
		{
			"label": "Nombre d’aiguilles",
			"value": "23 (mm)",
			"evidenceIds": [
				"m7-sn-2124-20260927"
			]
		},
		{
			"label": "Course",
			"value": "27 (mm)",
			"evidenceIds": [
				"m7-sn-2124-20260927"
			]
		},
		{
			"label": "Raccord d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"m7-sn-2124-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "3.6 kg",
			"evidenceIds": [
				"m7-sn-2124-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "99.0 (dBA)",
			"evidenceIds": [
				"m7-sn-2124-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "14.8 (m/s²)",
			"evidenceIds": [
				"m7-sn-2124-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-sn-2124-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/434",
			"sourceLabel": "M7, fiche technique constructeur SN-2124, réf. SN-2124",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 209 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		},
		{
			"id": "review:2026-11-16-reviews:m7-sn-2124:0",
			"sourceUrl": "https://www.mighty-seven.com/product/434",
			"sourceLabel": "M7, document constructeur relu le 16 novembre 2026",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Le SN-2124 est un dérouilleur à poignée pistolet de 350 mm, à 4 000 coups/min et course de 27 mm. La fiche indique des aiguilles 3 × 180 mm et le nombre 23, avec un suffixe d’unité « mm » incohérent sur le champ de comptage. Cette anomalie est conservée. Les 209 L/min sont une consommation moyenne ; ils ne sont pas transformés en débit en charge. GET complet SHA-256 125f25c66f4a40e72d4a034b8f141957601e5d0c29fd1dfaf8af356941921efd. Pages PDF lues : fiche HTML ; portée détaillée dans le compte rendu."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-sn-2124-20260927"
		],
		"workingPressureBar": [
			"m7-sn-2124-20260927"
		],
		"airflowLpm": [
			"m7-sn-2124-20260927"
		],
		"airflowBasis": [
			"m7-sn-2124-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 209,
		"typical": 209,
		"max": 209
	},
	"airflowBasis": "average"
};

export default product;
