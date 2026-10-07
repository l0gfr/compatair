import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-aircat-1893-1",
	"slug": "cle-a-chocs-aircat-1893-1",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aircat 1893-1",
	"brand": "Aircat",
	"model": "1893-1",
	"mpn": "1893-1",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/2-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-aircat-1893-1.webp",
		"alt": "Repères techniques : Aircat 1893-1",
		"sourceUrl": "https://continentaltoolgroup.com/product/aircat-1-impact-wrench/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-1893-1",
		"label": "Référence 1893-1",
		"distinguishingAttributes": {
			"reference": "1893-1",
			"Masse publiée": "23.2 lb",
			"Vitesse à vide": "5000 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 1893-1. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 23.2 lb. Vitesse à vide : 5000 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 23.2 lb.",
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
			"value": "23.2 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-139-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5000 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-139-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/2-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-139-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "1/2-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-139-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-139-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "12 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-139-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-139-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aircat-1-impact-wrench/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 1893-1",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : d804e68370783363a1316c4b76a78f325f5d46621fd8c85dabe5ead4bd460dea. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-139-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-139-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-139-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-139-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
