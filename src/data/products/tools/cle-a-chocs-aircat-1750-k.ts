import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-aircat-1750-k",
	"slug": "cle-a-chocs-aircat-1750-k",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aircat 1750-K",
	"brand": "Aircat",
	"model": "1750-K",
	"mpn": "1750-K",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "3/8-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-aircat-1750-k.webp",
		"alt": "Repères techniques : Aircat 1750-K",
		"sourceUrl": "https://continentaltoolgroup.com/product/aircat-3-4-nitrocat-composite-twin-clutch-impact-wrench/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-1750-k",
		"label": "Référence 1750-K",
		"distinguishingAttributes": {
			"reference": "1750-K",
			"Masse publiée": "9 lb",
			"Vitesse à vide": "4500 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 1750-K. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 9 lb. Vitesse à vide : 4500 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 9 lb.",
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
			"value": "9 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-321-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4500 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-321-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-321-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "1/2-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-321-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-321-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "8 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-321-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-321-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aircat-3-4-nitrocat-composite-twin-clutch-impact-wrench/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 1750-K",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 5a399f95fbccf3be191960c0393ad19fee1ee322536152be7844f45bb5921abf. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-321-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-321-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-321-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-321-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
