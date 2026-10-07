import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-universal-tool-ut8664",
	"slug": "marteau-a-river-universal-tool-ut8664",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "Universal Tool UT8664",
	"brand": "Universal Tool",
	"model": "UT8664",
	"mpn": "UT8664",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.2,
		"typical": 6.2,
		"max": 6.2
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"recommendedHose": {
		"innerDiameterMm": 9.525
	},
	"confidence": "B",
	"image": {
		"src": "/images/products/marteau-a-river-universal-tool-ut8664.webp",
		"alt": "Repères techniques : Universal Tool UT8664",
		"sourceUrl": "https://continentaltoolgroup.com/product/aero-riveting-hammer-4/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut8664",
		"label": "Référence UT8664",
		"distinguishingAttributes": {
			"reference": "UT8664",
			"Masse publiée": "1.4 kg",
			"Longueur publiée": "227 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT8664. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 1.4 kg. Longueur publiée : 227 mm.",
		"verifiedFacts": [
			"Masse publiée : 1.4 kg.",
			"Longueur publiée : 227 mm.",
			"Matériau du corps : Aluminum.",
			"Type de retenue : Spring."
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
				"october2-tools-ctg-pdp-238-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "227 mm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-238-p1"
			]
		},
		{
			"label": "Matériau du corps",
			"value": "Aluminum",
			"evidenceIds": [
				"october2-tools-ctg-pdp-238-p1"
			]
		},
		{
			"label": "Type de retenue",
			"value": "Spring",
			"evidenceIds": [
				"october2-tools-ctg-pdp-238-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-238-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose (I.D. in.)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-238-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Rec. Air Pressure: 90 psi-6.2 bar",
			"evidenceIds": [
				"october2-tools-ctg-pdp-238-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "28 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-238-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-238-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aero-riveting-hammer-4/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT8664",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 831f05f3c3639be05f308529e3c6a0f2740a9cbeedcd36d68ef6312e8ef5d6fe. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-238-p1"
		],
		"recommendedHose": [
			"october2-tools-ctg-pdp-238-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-238-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-238-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-238-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
