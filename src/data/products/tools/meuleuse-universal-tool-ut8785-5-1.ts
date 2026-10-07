import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-universal-tool-ut8785-5-1",
	"slug": "meuleuse-universal-tool-ut8785-5-1",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Universal Tool UT8785-5-1",
	"brand": "Universal Tool",
	"model": "UT8785-5-1",
	"mpn": "UT8785-5-1",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "3/8-in. (Air Inlet  (NPT / BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-universal-tool-ut8785-5-1.webp",
		"alt": "Repères techniques : Universal Tool UT8785-5-1",
		"sourceUrl": "https://continentaltoolgroup.com/product/5-angle-grinder/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut8785-5-1",
		"label": "Référence UT8785-5-1",
		"distinguishingAttributes": {
			"reference": "UT8785-5-1",
			"Masse publiée": "2.2 kg",
			"Longueur publiée": "266 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT8785-5-1. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 2.2 kg. Longueur publiée : 266 mm.",
		"verifiedFacts": [
			"Masse publiée : 2.2 kg.",
			"Longueur publiée : 266 mm.",
			"Puissance publiée : 1.3 HP.",
			"Échappement : Side."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2.2 kg",
			"evidenceIds": [
				"october2-tools-ctg-pdp-239-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "266 mm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-239-p1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "1.3 HP",
			"evidenceIds": [
				"october2-tools-ctg-pdp-239-p1"
			]
		},
		{
			"label": "Échappement",
			"value": "Side",
			"evidenceIds": [
				"october2-tools-ctg-pdp-239-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet  (NPT / BSP)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-239-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-239-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Rec. Air Pressure: 90 psi-6.2 bar",
			"evidenceIds": [
				"october2-tools-ctg-pdp-239-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "26 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-239-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-239-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/5-angle-grinder/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT8785-5-1",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : da8dc404e429a61092954f11d68247f7543a9b69be5b8fa65eadf47857819e60. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-239-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-239-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-239-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-239-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
