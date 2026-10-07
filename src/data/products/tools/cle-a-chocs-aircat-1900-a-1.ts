import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-aircat-1900-a-1",
	"slug": "cle-a-chocs-aircat-1900-a-1",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aircat 1900-A-1",
	"brand": "Aircat",
	"model": "1900-A-1",
	"mpn": "1900-A-1",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/2-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-aircat-1900-a-1.webp",
		"alt": "Repères techniques : Aircat 1900-A-1",
		"sourceUrl": "https://continentaltoolgroup.com/product/aircat-1-super-duty-impact-wrench/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-1900-a-1",
		"label": "Référence 1900-A-1",
		"distinguishingAttributes": {
			"reference": "1900-A-1",
			"Masse publiée": "8.5 lb",
			"Vitesse à vide": "5500 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 1900-A-1. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 8.5 lb. Vitesse à vide : 5500 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 8.5 lb.",
			"Vitesse à vide : 5500 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "8.5 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-137-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5500 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-137-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/2-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-137-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "1/2-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-137-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-137-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "12 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-137-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-137-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aircat-1-super-duty-impact-wrench/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 1900-A-1",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 94f0f0e14ffdffb056eaab4af0adbcae47179902542e6534d3ddf4875abb3343. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-137-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-137-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-137-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-137-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
