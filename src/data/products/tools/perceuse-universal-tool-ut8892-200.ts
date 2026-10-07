import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-universal-tool-ut8892-200",
	"slug": "perceuse-universal-tool-ut8892-200",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Universal Tool UT8892-200",
	"brand": "Universal Tool",
	"model": "UT8892-200",
	"mpn": "UT8892-200",
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
		"src": "/images/products/perceuse-universal-tool-ut8892-200.webp",
		"alt": "Repères techniques : Universal Tool UT8892-200",
		"sourceUrl": "https://continentaltoolgroup.com/product/aircraft-drill-20000-rpm/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut8892-200",
		"label": "Référence UT8892-200",
		"distinguishingAttributes": {
			"reference": "UT8892-200",
			"Masse publiée": "0.54 kg",
			"Longueur publiée": "188 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT8892-200. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 0.54 kg. Longueur publiée : 188 mm.",
		"verifiedFacts": [
			"Masse publiée : 0.54 kg.",
			"Longueur publiée : 188 mm.",
			"Vitesse publiée : 20000 tr/min.",
			"Puissance publiée : 0.45 HP.",
			"Échappement : Rear.",
			"Commande : Ported."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "0.54 kg",
			"evidenceIds": [
				"october2-tools-ctg-pdp-422-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "188 mm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-422-p1"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "20000 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-422-p1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0.45 HP",
			"evidenceIds": [
				"october2-tools-ctg-pdp-422-p1"
			]
		},
		{
			"label": "Échappement",
			"value": "Rear",
			"evidenceIds": [
				"october2-tools-ctg-pdp-422-p1"
			]
		},
		{
			"label": "Commande",
			"value": "Ported",
			"evidenceIds": [
				"october2-tools-ctg-pdp-422-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-422-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose (I.D. in.)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-422-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Rec. Air Pressure: 90 psi-6.2 bar",
			"evidenceIds": [
				"october2-tools-ctg-pdp-422-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-422-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-422-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aircraft-drill-20000-rpm/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT8892-200",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 866e76b23ce2ccd0936d7bb2c59b35de37184fb10e72ebe493202a468aba1480. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-422-p1"
		],
		"recommendedHose": [
			"october2-tools-ctg-pdp-422-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-422-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-422-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-422-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
