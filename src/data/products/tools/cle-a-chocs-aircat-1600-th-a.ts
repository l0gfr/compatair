import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-aircat-1600-th-a",
	"slug": "cle-a-chocs-aircat-1600-th-a",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aircat 1600-TH-A",
	"brand": "Aircat",
	"model": "1600-TH-A",
	"mpn": "1600-TH-A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "3/8-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-aircat-1600-th-a.webp",
		"alt": "Repères techniques : Aircat 1600-TH-A",
		"sourceUrl": "https://continentaltoolgroup.com/product/aircat-3-4-impact-wrench-2/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-1600-th-a",
		"label": "Référence 1600-TH-A",
		"distinguishingAttributes": {
			"reference": "1600-TH-A",
			"Masse publiée": "8.1 lb",
			"Vitesse à vide": "4500 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 1600-TH-A. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 8.1 lb. Vitesse à vide : 4500 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 8.1 lb.",
			"Vitesse à vide : 4500 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "8.1 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-324-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4500 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-324-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-324-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "1/2-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-324-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-324-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "10 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-324-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-324-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aircat-3-4-impact-wrench-2/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 1600-TH-A",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 46fcad81ab639d3925b6210521eb17c99a9cd0285edf5af89ed0a783507829fa. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-324-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-324-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-324-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-324-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
