import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-universal-tool-ut8891-24",
	"slug": "perceuse-universal-tool-ut8891-24",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Universal Tool UT8891-24",
	"brand": "Universal Tool",
	"model": "UT8891-24",
	"mpn": "UT8891-24",
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
		"src": "/images/products/perceuse-universal-tool-ut8891-24.webp",
		"alt": "Repères techniques : Universal Tool UT8891-24",
		"sourceUrl": "https://continentaltoolgroup.com/product/aircraft-angle-drill-2400-rpm/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut8891-24",
		"label": "Référence UT8891-24",
		"distinguishingAttributes": {
			"reference": "UT8891-24",
			"Masse publiée": "0.75 kg",
			"Longueur publiée": "248 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT8891-24. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 0.75 kg. Longueur publiée : 248 mm.",
		"verifiedFacts": [
			"Masse publiée : 0.75 kg.",
			"Longueur publiée : 248 mm.",
			"Vitesse publiée : 2400 tr/min.",
			"Puissance publiée : 0.45 HP.",
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
			"value": "0.75 kg",
			"evidenceIds": [
				"october2-tools-ctg-pdp-391-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "248 mm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-391-p1"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "2400 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-391-p1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0.45 HP",
			"evidenceIds": [
				"october2-tools-ctg-pdp-391-p1"
			]
		},
		{
			"label": "Échappement",
			"value": "Rear",
			"evidenceIds": [
				"october2-tools-ctg-pdp-391-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT / BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-391-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-391-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Rec. Air Pressure: 90 psi-6.2 bar",
			"evidenceIds": [
				"october2-tools-ctg-pdp-391-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-391-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-391-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aircraft-angle-drill-2400-rpm/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT8891-24",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 6061f8f92ee0019ad5f55561ed4f9084e5fcdd7eb826edd745173b8fc08cda20. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-391-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-391-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-391-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-391-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
