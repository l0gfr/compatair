import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-universal-tool-ut8630",
	"slug": "burineur-universal-tool-ut8630",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Universal Tool UT8630",
	"brand": "Universal Tool",
	"model": "UT8630",
	"mpn": "UT8630",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT / BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-universal-tool-ut8630.webp",
		"alt": "Repères techniques : Universal Tool UT8630",
		"sourceUrl": "https://continentaltoolgroup.com/product/straight-chisel-scaler/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut8630",
		"label": "Référence UT8630",
		"distinguishingAttributes": {
			"reference": "UT8630",
			"Masse publiée": "2 kg",
			"Longueur publiée": "241 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT8630. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 2 kg. Longueur publiée : 241 mm.",
		"verifiedFacts": [
			"Masse publiée : 2 kg.",
			"Longueur publiée : 241 mm.",
			"Matériau du corps : Steel.",
			"Type de retenue : B1."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2 kg",
			"evidenceIds": [
				"october2-tools-ctg-pdp-111-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "241 mm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-111-p1"
			]
		},
		{
			"label": "Matériau du corps",
			"value": "Steel",
			"evidenceIds": [
				"october2-tools-ctg-pdp-111-p1"
			]
		},
		{
			"label": "Type de retenue",
			"value": "B1",
			"evidenceIds": [
				"october2-tools-ctg-pdp-111-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT / BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-111-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-111-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Rec. Air Pressure: 90 psi-6.2 bar",
			"evidenceIds": [
				"october2-tools-ctg-pdp-111-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "16 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-111-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-111-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/straight-chisel-scaler/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT8630",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : a56201d4d1fdbebbdf1feea585d55c1416f9b371ad3bc204b9ac03edd443dfe0. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-111-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-111-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-111-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-111-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
