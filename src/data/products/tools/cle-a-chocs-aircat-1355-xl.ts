import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-aircat-1355-xl",
	"slug": "cle-a-chocs-aircat-1355-xl",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aircat 1355-XL",
	"brand": "Aircat",
	"model": "1355-XL",
	"mpn": "1355-XL",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-aircat-1355-xl.webp",
		"alt": "Repères techniques : Aircat 1355-XL",
		"sourceUrl": "https://continentaltoolgroup.com/product/aircat-3-8-nitrocat-composite-impact-wrench/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-1355-xl",
		"label": "Référence 1355-XL",
		"distinguishingAttributes": {
			"reference": "1355-XL",
			"Longueur publiée": "6 in",
			"Vitesse à vide": "10000 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 1355-XL. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Longueur publiée : 6 in. Vitesse à vide : 10000 tr/min.",
		"verifiedFacts": [
			"Longueur publiée : 6 in.",
			"Vitesse à vide : 10000 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Longueur publiée",
			"value": "6 in",
			"evidenceIds": [
				"october2-tools-ctg-pdp-329-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "10000 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-329-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-329-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-329-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-329-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "6 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-329-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-329-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aircat-3-8-nitrocat-composite-impact-wrench/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 1355-XL",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 123393936684f7a0fe8562d8fd60063b4d9890766cff5daa20489db35b27c722. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-329-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-329-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-329-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-329-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
