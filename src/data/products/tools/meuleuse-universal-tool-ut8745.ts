import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-universal-tool-ut8745",
	"slug": "meuleuse-universal-tool-ut8745",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Universal Tool UT8745",
	"brand": "Universal Tool",
	"model": "UT8745",
	"mpn": "UT8745",
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
		"src": "/images/products/meuleuse-universal-tool-ut8745.webp",
		"alt": "Repères techniques : Universal Tool UT8745",
		"sourceUrl": "https://continentaltoolgroup.com/product/5-extended-angle-grinder-3/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut8745",
		"label": "Référence UT8745",
		"distinguishingAttributes": {
			"reference": "UT8745",
			"Masse publiée": "1.4 kg",
			"Longueur publiée": "254 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT8745. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 1.4 kg. Longueur publiée : 254 mm.",
		"verifiedFacts": [
			"Masse publiée : 1.4 kg.",
			"Longueur publiée : 254 mm.",
			"Puissance publiée : 1.2 HP.",
			"Échappement : Bottom."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1.4 kg",
			"evidenceIds": [
				"october2-tools-ctg-pdp-301-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "254 mm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-301-p1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "1.2 HP",
			"evidenceIds": [
				"october2-tools-ctg-pdp-301-p1"
			]
		},
		{
			"label": "Échappement",
			"value": "Bottom",
			"evidenceIds": [
				"october2-tools-ctg-pdp-301-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT / BSP)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-301-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in)",
			"value": "1/2-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-301-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Rec. Air Pressure: 90 psi-6.2 bar",
			"evidenceIds": [
				"october2-tools-ctg-pdp-301-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "18 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-301-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-301-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/5-extended-angle-grinder-3/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT8745",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 5c060a0e6b474dbbf8ed91310401846ad95b7a03f73837ea35c83edd194f40e7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-301-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-301-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-301-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-301-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
