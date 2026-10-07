import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-aircat-1057-th",
	"slug": "cle-a-chocs-aircat-1057-th",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Aircat 1057-TH",
	"brand": "Aircat",
	"model": "1057-TH",
	"mpn": "1057-TH",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-aircat-1057-th.webp",
		"alt": "Repères techniques : Aircat 1057-TH",
		"sourceUrl": "https://continentaltoolgroup.com/product/aircat-1-2-stubby-impact-wrench/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-1057-th",
		"label": "Référence 1057-TH",
		"distinguishingAttributes": {
			"reference": "1057-TH",
			"Masse publiée": "2.8 lb",
			"Vitesse à vide": "9000 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 1057-TH. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 2.8 lb. Vitesse à vide : 9000 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 2.8 lb.",
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
			"value": "2.8 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-164-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "9000 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-164-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-164-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-164-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-164-p1"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "6 cfm",
			"evidenceIds": [
				"october2-tools-ctg-pdp-164-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-164-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aircat-1-2-stubby-impact-wrench/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 1057-TH",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c4aa4cf377ecb6a6e4ac5240e13e57f3d9f563d1eb012ab4902c9defba3198f5. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-164-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-164-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-164-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-164-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
