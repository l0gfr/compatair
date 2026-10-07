import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-aircat-1880-p-a",
	"slug": "cle-a-chocs-aircat-1880-p-a",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aircat 1880-P-A",
	"brand": "Aircat",
	"model": "1880-P-A",
	"mpn": "1880-P-A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/2-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-aircat-1880-p-a.webp",
		"alt": "Repères techniques : Aircat 1880-P-A",
		"sourceUrl": "https://continentaltoolgroup.com/product/aircat-1-pistol-grip-impact-wrench/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-1880-p-a",
		"label": "Référence 1880-P-A",
		"distinguishingAttributes": {
			"reference": "1880-P-A",
			"Masse publiée": "23.5 lb",
			"Vitesse à vide": "4800 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 1880-P-A. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 23.5 lb. Vitesse à vide : 4800 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 23.5 lb.",
			"Vitesse à vide : 4800 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "23.5 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-142-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "4800 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-142-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/2-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-142-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "1/2-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-142-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-142-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "16 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-142-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-142-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aircat-1-pistol-grip-impact-wrench/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 1880-P-A",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 6ccfd48348ab5db4e774339478fe15aca4a210bfa253c9ab21351f39b9c34be8. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-142-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-142-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-142-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-142-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
