import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-vibrante-aircat-6700-jbs-332",
	"slug": "ponceuse-vibrante-aircat-6700-jbs-332",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "Aircat 6700-JBS-332",
	"brand": "Aircat",
	"model": "6700-JBS-332",
	"mpn": "6700-JBS-332",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-vibrante-aircat-6700-jbs-332.webp",
		"alt": "Repères techniques : Aircat 6700-JBS-332",
		"sourceUrl": "https://continentaltoolgroup.com/product/aircat-jitterbug-sander/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-6700-jbs-332",
		"label": "Référence 6700-JBS-332",
		"distinguishingAttributes": {
			"reference": "6700-JBS-332",
			"Masse publiée": "2.5 lb",
			"Vitesse à vide": "10000 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 6700-JBS-332. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 2.5 lb. Vitesse à vide : 10000 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 2.5 lb.",
			"Vitesse à vide : 10000 tr/min.",
			"Échappement : Rear."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2.5 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-345-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "10000 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-345-p1"
			]
		},
		{
			"label": "Échappement",
			"value": "Rear",
			"evidenceIds": [
				"october2-tools-ctg-pdp-345-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-345-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-345-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-345-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-345-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aircat-jitterbug-sander/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 6700-JBS-332",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 21bde5a78e7857918a68e2b998a2e7291c2c548ce6df082cf0642825652cfe7e. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-345-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-345-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-345-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-345-p1"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
