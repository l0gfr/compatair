import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-vibrante-universal-tool-ut8791",
	"slug": "ponceuse-vibrante-universal-tool-ut8791",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "Universal Tool UT8791",
	"brand": "Universal Tool",
	"model": "UT8791",
	"mpn": "UT8791",
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
		"src": "/images/products/ponceuse-vibrante-universal-tool-ut8791.webp",
		"alt": "Repères techniques : Universal Tool UT8791",
		"sourceUrl": "https://continentaltoolgroup.com/product/3-16-orbital-jitterbug-sander-2/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut8791",
		"label": "Référence UT8791",
		"distinguishingAttributes": {
			"reference": "UT8791",
			"Masse publiée": "1 kg",
			"Longueur publiée": "165 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT8791. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 1 kg. Longueur publiée : 165 mm.",
		"verifiedFacts": [
			"Masse publiée : 1 kg.",
			"Longueur publiée : 165 mm.",
			"Vitesse publiée : 10000 tr/min.",
			"Puissance publiée : 0.29 kW.",
			"Échappement : Rear."
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
			"value": "1 kg",
			"evidenceIds": [
				"october2-tools-ctg-pdp-72-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "165 mm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-72-p1"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "10000 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-72-p1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0.29 kW",
			"evidenceIds": [
				"october2-tools-ctg-pdp-72-p1"
			]
		},
		{
			"label": "Échappement",
			"value": "Rear",
			"evidenceIds": [
				"october2-tools-ctg-pdp-72-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-72-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose (I.D. in.)",
			"value": "8-Mar",
			"evidenceIds": [
				"october2-tools-ctg-pdp-72-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Rec. Air Pressure: 90 psi-6.2 bar",
			"evidenceIds": [
				"october2-tools-ctg-pdp-72-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "18 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-72-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-72-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/3-16-orbital-jitterbug-sander-2/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT8791",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 639e5528b51d06dc92fb4c1480f058c0f631c0814998ef959dc014875f3abc10. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-72-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-72-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-72-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-72-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
