import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-universal-tool-ut8898-26",
	"slug": "perceuse-universal-tool-ut8898-26",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Universal Tool UT8898-26",
	"brand": "Universal Tool",
	"model": "UT8898-26",
	"mpn": "UT8898-26",
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
		"src": "/images/products/perceuse-universal-tool-ut8898-26.webp",
		"alt": "Repères techniques : Universal Tool UT8898-26",
		"sourceUrl": "https://continentaltoolgroup.com/product/1-4-aircraft-drill-2600-rpm/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "universal-tool-ut8898-26",
		"label": "Référence UT8898-26",
		"distinguishingAttributes": {
			"reference": "UT8898-26",
			"Masse publiée": "0.85 kg",
			"Longueur publiée": "183 mm"
		}
	},
	"editorial": {
		"overview": "Universal Tool UT8898-26. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 0.85 kg. Longueur publiée : 183 mm.",
		"verifiedFacts": [
			"Masse publiée : 0.85 kg.",
			"Longueur publiée : 183 mm.",
			"Vitesse publiée : 2600 tr/min.",
			"Puissance publiée : 0.66 kW.",
			"Échappement : Handle.",
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
			"value": "0.85 kg",
			"evidenceIds": [
				"october2-tools-ctg-pdp-48-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "183 mm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-48-p1"
			]
		},
		{
			"label": "Vitesse publiée",
			"value": "2600 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-48-p1"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "0.66 kW",
			"evidenceIds": [
				"october2-tools-ctg-pdp-48-p1"
			]
		},
		{
			"label": "Échappement",
			"value": "Handle",
			"evidenceIds": [
				"october2-tools-ctg-pdp-48-p1"
			]
		},
		{
			"label": "Commande",
			"value": "Ported",
			"evidenceIds": [
				"october2-tools-ctg-pdp-48-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-48-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose (I.D in.)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-48-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Rec. Air Pressure: 90 psi-6.2 bar",
			"evidenceIds": [
				"october2-tools-ctg-pdp-48-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "5.5 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-48-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-48-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/1-4-aircraft-drill-2600-rpm/",
			"sourceLabel": "Universal Tool, fiche fabricant de la référence UT8898-26",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 28524ff2080bf2b694890f3ad23fcd9fa515a70e8f37ed5eaa894c246b5d08bf. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-48-p1"
		],
		"recommendedHose": [
			"october2-tools-ctg-pdp-48-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-48-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-48-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-48-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
