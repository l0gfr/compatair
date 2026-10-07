import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "m7-qe-6011",
	"slug": "m7-qe-6011",
	"brand": "M7",
	"model": "QE-6011",
	"mpn": "QE-6011",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "M7 QE-6011",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/m7-qe-6011.webp",
		"alt": "Repères techniques M7 QE-6011, référence QE-6011",
		"sourceUrl": "https://www.mighty-seven.com/product/350",
		"sourceLabel": "Carte technique CompatAir, valeurs déclarées par le fabricant ; pas une photographie du produit"
	},
	"editorial": {
		"overview": "M7 QE-6011, référence QE-6011. Consommation moyenne publiée : 84 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie. Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé. Filetage de broche : 9/32\"-40. Puissance moteur publiée : 0.40.",
		"verifiedFacts": [
			"Pression de travail publiée : 6,3 bar. Aucun intervalle de fonctionnement supplémentaire n’est extrapolé.",
			"Consommation moyenne publiée : 84 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"Référence fabricant : QE-6011.",
			"Filetage de broche : 9/32\"-40.",
			"Puissance moteur publiée : 0.40.",
			"Vitesse à vide : 4000 (R.P.M)."
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
				"m7-qe-6011-20260927"
			]
		},
		{
			"label": "Condition de consommation",
			"value": "Consommation moyenne publiée : 84 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie.",
			"evidenceIds": [
				"m7-qe-6011-20260927"
			]
		},
		{
			"label": "Filetage de broche",
			"value": "9/32\"-40",
			"evidenceIds": [
				"m7-qe-6011-20260927"
			]
		},
		{
			"label": "Puissance moteur publiée",
			"value": "0.40",
			"evidenceIds": [
				"m7-qe-6011-20260927"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4000 (R.P.M)",
			"evidenceIds": [
				"m7-qe-6011-20260927"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "10\" / 256 (mm)",
			"evidenceIds": [
				"m7-qe-6011-20260927"
			]
		},
		{
			"label": "Flexible recommandé",
			"value": "3/8\"",
			"evidenceIds": [
				"m7-qe-6011-20260927"
			]
		},
		{
			"label": "Nombre d’aiguilles",
			"value": "1/4\"",
			"evidenceIds": [
				"m7-qe-6011-20260927"
			]
		},
		{
			"label": "Raccord d’air",
			"value": "1/4\"",
			"evidenceIds": [
				"m7-qe-6011-20260927"
			]
		},
		{
			"label": "Masse nette publiée",
			"value": "0.64 kg",
			"evidenceIds": [
				"m7-qe-6011-20260927"
			]
		},
		{
			"label": "Pression acoustique publiée (protocole non précisé)",
			"value": "81.5 (dBA)",
			"evidenceIds": [
				"m7-qe-6011-20260927"
			]
		},
		{
			"label": "Vibrations publiées (incertitude non précisée)",
			"value": "<2.5 (m/s²)",
			"evidenceIds": [
				"m7-qe-6011-20260927"
			]
		}
	],
	"evidence": [
		{
			"id": "m7-qe-6011-20260927",
			"sourceUrl": "https://www.mighty-seven.com/product/350",
			"sourceLabel": "M7, fiche technique constructeur QE-6011, réf. QE-6011",
			"sourceType": "manufacturer",
			"retrievedAt": "2026-09-27",
			"confidence": "A",
			"notes": "Consommation moyenne publiée : 84 L/min. Valeur SI du fabricant, sans conversion depuis une unité arrondie."
		}
	],
	"fieldSources": {
		"mpn": [
			"m7-qe-6011-20260927"
		],
		"workingPressureBar": [
			"m7-qe-6011-20260927"
		],
		"airflowLpm": [
			"m7-qe-6011-20260927"
		],
		"airflowBasis": [
			"m7-qe-6011-20260927"
		]
	},
	"notes": [
		"Données déclarées par le fabricant ; aucune mesure physique CompatAir."
	],
	"airflowLpm": {
		"min": 84,
		"typical": 84,
		"max": 84
	},
	"airflowBasis": "average"
};

export default product;
