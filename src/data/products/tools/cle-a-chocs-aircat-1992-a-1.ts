import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-aircat-1992-a-1",
	"slug": "cle-a-chocs-aircat-1992-a-1",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aircat 1992-A-1",
	"brand": "Aircat",
	"model": "1992-A-1",
	"mpn": "1992-A-1",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/2-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-aircat-1992-a-1.webp",
		"alt": "Repères techniques : Aircat 1992-A-1",
		"sourceUrl": "https://continentaltoolgroup.com/product/aircat-1-straight-impact-wrench-2/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-1992-a-1",
		"label": "Référence 1992-A-1",
		"distinguishingAttributes": {
			"reference": "1992-A-1",
			"Masse publiée": "25.2 lb",
			"Longueur publiée": "15.5 in"
		}
	},
	"editorial": {
		"overview": "Aircat 1992-A-1. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 25.2 lb. Longueur publiée : 15.5 in.",
		"verifiedFacts": [
			"Masse publiée : 25.2 lb.",
			"Longueur publiée : 15.5 in.",
			"Vitesse à vide : 5000 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "25.2 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-143-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "15.5 in",
			"evidenceIds": [
				"october2-tools-ctg-pdp-143-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5000 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-143-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/2-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-143-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "1/2-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-143-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-143-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "12 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-143-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-143-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aircat-1-straight-impact-wrench-2/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 1992-A-1",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 5e8522dd37968641acf31775e4328c36abc3bdc8fcf8602fc236b852c62e93f5. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-143-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-143-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-143-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-143-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
