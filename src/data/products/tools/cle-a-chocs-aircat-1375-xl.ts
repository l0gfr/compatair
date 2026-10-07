import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-aircat-1375-xl",
	"slug": "cle-a-chocs-aircat-1375-xl",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aircat 1375-XL",
	"brand": "Aircat",
	"model": "1375-XL",
	"mpn": "1375-XL",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-aircat-1375-xl.webp",
		"alt": "Repères techniques : Aircat 1375-XL",
		"sourceUrl": "https://continentaltoolgroup.com/product/1-2-nitrocat-composite-impact-wrench/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-1375-xl",
		"label": "Référence 1375-XL",
		"distinguishingAttributes": {
			"reference": "1375-XL",
			"Masse publiée": "2.75 lb",
			"Vitesse à vide": "10000 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 1375-XL. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 2.75 lb. Vitesse à vide : 10000 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 2.75 lb.",
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
			"value": "2.75 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-305-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "10000 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-305-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-305-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-305-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-305-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "6 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-305-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-305-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/1-2-nitrocat-composite-impact-wrench/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 1375-XL",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : ac2eef55c43fbb18f99966cd0eaddb49c51dcada056a69c56828ab52b027d4f2. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-305-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-305-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-305-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-305-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
