import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-universal-tool-ut9922",
	"slug": "burineur-universal-tool-ut9922",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Universal Tool UT9922",
	"brand": "Universal Tool",
	"model": "UT9922",
	"mpn": "UT9922",
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
		"src": "/images/products/burineur-universal-tool-ut9922.webp",
		"alt": "Repères techniques : Universal Tool UT9922",
		"sourceUrl": "https://continentaltoolgroup.com/product/recoilless-scaling-hammer-2/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut9922",
		"label": "Référence UT9922",
		"distinguishingAttributes": {
			"reference": "UT9922",
			"Masse publiée": "1.5 kg",
			"Longueur publiée": "210 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT9922. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 1.5 kg. Longueur publiée : 210 mm.",
		"verifiedFacts": [
			"Masse publiée : 1.5 kg.",
			"Longueur publiée : 210 mm.",
			"Matériau du corps : Steel.",
			"Type de retenue : Collet."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1.5 kg",
			"evidenceIds": [
				"october2-tools-ctg-pdp-114-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "210 mm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-114-p1"
			]
		},
		{
			"label": "Matériau du corps",
			"value": "Steel",
			"evidenceIds": [
				"october2-tools-ctg-pdp-114-p1"
			]
		},
		{
			"label": "Type de retenue",
			"value": "Collet",
			"evidenceIds": [
				"october2-tools-ctg-pdp-114-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT / BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-114-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-114-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Rec. Air Pressure: 90 psi-6.2 bar",
			"evidenceIds": [
				"october2-tools-ctg-pdp-114-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "12 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-114-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-114-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/recoilless-scaling-hammer-2/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT9922",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : a7af4764b175a7cefa5f8dc1c52d7d5af03882de73d991f186262d6a5b0cf1ad. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-114-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-114-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-114-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-114-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
