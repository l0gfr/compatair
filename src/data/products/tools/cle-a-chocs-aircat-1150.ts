import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-aircat-1150",
	"slug": "cle-a-chocs-aircat-1150",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aircat 1150",
	"brand": "Aircat",
	"model": "1150",
	"mpn": "1150",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-aircat-1150.webp",
		"alt": "Repères techniques : Aircat 1150",
		"sourceUrl": "https://continentaltoolgroup.com/product/aircat-1-2-composite-impact-wrench-4/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-1150",
		"label": "Référence 1150",
		"distinguishingAttributes": {
			"reference": "1150",
			"Masse publiée": "4.5 lb",
			"Vitesse à vide": "9000 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 1150. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 4.5 lb. Vitesse à vide : 9000 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 4.5 lb.",
			"Vitesse à vide : 9000 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "4.5 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-154-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "9000 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-154-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-154-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-154-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-154-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "8 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-154-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-154-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aircat-1-2-composite-impact-wrench-4/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 1150",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 5d4f66d65260e71a4a6b2318ffebba434d3456073b93d364ca3de81ee9e9bccb. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-154-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-154-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-154-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-154-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
