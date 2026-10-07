import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-aircat-1300-th-a",
	"slug": "cle-a-chocs-aircat-1300-th-a",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aircat 1300-TH-A",
	"brand": "Aircat",
	"model": "1300-TH-A",
	"mpn": "1300-TH-A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-aircat-1300-th-a.webp",
		"alt": "Repères techniques : Aircat 1300-TH-A",
		"sourceUrl": "https://continentaltoolgroup.com/product/aircat-3-8-composite-impact-wrench/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-1300-th-a",
		"label": "Référence 1300-TH-A",
		"distinguishingAttributes": {
			"reference": "1300-TH-A",
			"Masse publiée": "2.63 lb",
			"Vitesse à vide": "10000 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 1300-TH-A. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 2.63 lb. Vitesse à vide : 10000 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 2.63 lb.",
			"Vitesse à vide : 10000 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2.63 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-328-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "10000 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-328-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-328-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-328-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-328-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "6 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-328-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-328-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aircat-3-8-composite-impact-wrench/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 1300-TH-A",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 16d2eb789759baec32577d2ef5b4f6512e3cd70bfa3b86889eccb6de4b61d7db. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-328-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-328-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-328-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-328-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
