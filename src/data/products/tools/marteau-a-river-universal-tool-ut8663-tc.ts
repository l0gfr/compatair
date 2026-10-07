import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-universal-tool-ut8663-tc",
	"slug": "marteau-a-river-universal-tool-ut8663-tc",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "Universal Tool UT8663-TC",
	"brand": "Universal Tool",
	"model": "UT8663-TC",
	"mpn": "UT8663-TC",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/marteau-a-river-universal-tool-ut8663-tc.webp",
		"alt": "Repères techniques : Universal Tool UT8663-TC",
		"sourceUrl": "https://continentaltoolgroup.com/product/aero-riveting-hammer-3/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut8663-tc",
		"label": "Référence UT8663-TC",
		"distinguishingAttributes": {
			"reference": "UT8663-TC",
			"Masse publiée": "1.3 kg",
			"Longueur publiée": "177 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT8663-TC. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 1.3 kg. Longueur publiée : 177 mm.",
		"verifiedFacts": [
			"Masse publiée : 1.3 kg.",
			"Longueur publiée : 177 mm.",
			"Matériau du corps : Aluminum.",
			"Type de retenue : Spring."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Le diamètre intérieur publié « 8-Mar » (Rec. Hose (I.D. in.)) n’est pas converti en une valeur de calcul.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1.3 kg",
			"evidenceIds": [
				"october2-tools-ctg-pdp-223-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "177 mm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-223-p1"
			]
		},
		{
			"label": "Matériau du corps",
			"value": "Aluminum",
			"evidenceIds": [
				"october2-tools-ctg-pdp-223-p1"
			]
		},
		{
			"label": "Type de retenue",
			"value": "Spring",
			"evidenceIds": [
				"october2-tools-ctg-pdp-223-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-223-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose (I.D. in.)",
			"value": "8-Mar",
			"evidenceIds": [
				"october2-tools-ctg-pdp-223-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Rec. Air Pressure: 90 psi-6.2 bar",
			"evidenceIds": [
				"october2-tools-ctg-pdp-223-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "28 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-223-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-223-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aero-riveting-hammer-3/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT8663-TC",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : f33f3a9627c5ee2dc41884d3c6690e59d947873e338b90ab07636358dae854e2. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-223-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-223-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-223-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-223-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
