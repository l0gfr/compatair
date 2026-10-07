import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-universal-tool-ut8800-22",
	"slug": "meuleuse-universal-tool-ut8800-22",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Universal Tool UT8800-22",
	"brand": "Universal Tool",
	"model": "UT8800-22",
	"mpn": "UT8800-22",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "3/8-in. (Air Inlet (NPT / BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-universal-tool-ut8800-22.webp",
		"alt": "Repères techniques : Universal Tool UT8800-22",
		"sourceUrl": "https://continentaltoolgroup.com/product/heavy-duty-straight-die-grinder-3/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut8800-22",
		"label": "Référence UT8800-22",
		"distinguishingAttributes": {
			"reference": "UT8800-22",
			"Masse publiée": "0.99 kg",
			"Longueur publiée": "224 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT8800-22. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 0.99 kg. Longueur publiée : 224 mm.",
		"verifiedFacts": [
			"Masse publiée : 0.99 kg.",
			"Longueur publiée : 224 mm.",
			"Puissance publiée : 1 HP.",
			"Échappement : Rear."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "0.99 kg",
			"evidenceIds": [
				"october2-tools-ctg-pdp-265-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "224 mm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-265-p1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "1 HP",
			"evidenceIds": [
				"october2-tools-ctg-pdp-265-p1"
			]
		},
		{
			"label": "Échappement",
			"value": "Rear",
			"evidenceIds": [
				"october2-tools-ctg-pdp-265-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT / BSP)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-265-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-265-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Rec. Air Pressure: 90 psi-6.2 bar",
			"evidenceIds": [
				"october2-tools-ctg-pdp-265-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "26 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-265-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-265-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/heavy-duty-straight-die-grinder-3/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT8800-22",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 8dd4816b8f81fb8ef69dd99d5ed9a369b0802fab4c02d5238c84e46ac61468f1. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-265-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-265-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-265-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-265-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
