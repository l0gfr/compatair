import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-aircat-6700-6-338cv",
	"slug": "ponceuse-orbitale-aircat-6700-6-338cv",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Aircat 6700-6-338CV",
	"brand": "Aircat",
	"model": "6700-6-338CV",
	"mpn": "6700-6-338CV",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"connectorSize": "1/4-in. (Air Inlet (NPT/BSP))",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-aircat-6700-6-338cv.webp",
		"alt": "Repères techniques : Aircat 6700-6-338CV",
		"sourceUrl": "https://continentaltoolgroup.com/product/aircat-central-vac-orbital-palm-sander/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "aircat-6700-6-338cv",
		"label": "Référence 6700-6-338CV",
		"distinguishingAttributes": {
			"reference": "6700-6-338CV",
			"Masse publiée": "1.8 lb",
			"Vitesse à vide": "11000 tr/min"
		}
	},
	"editorial": {
		"overview": "Aircat 6700-6-338CV. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 1.8 lb. Vitesse à vide : 11000 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 1.8 lb.",
			"Vitesse à vide : 11000 tr/min.",
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
			"value": "1.8 lb",
			"evidenceIds": [
				"october2-tools-ctg-pdp-338-p1"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "11000 tr/min",
			"evidenceIds": [
				"october2-tools-ctg-pdp-338-p1"
			]
		},
		{
			"label": "Échappement",
			"value": "Rear",
			"evidenceIds": [
				"october2-tools-ctg-pdp-338-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet (NPT/BSP)",
			"value": "1/4-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-338-p1"
			]
		},
		{
			"label": "Champ fabricant : Rec. Hose Size (in.)",
			"value": "3/8-in.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-338-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-pdp-338-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-pdp-338-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/aircat-central-vac-orbital-palm-sander/",
			"sourceLabel": "Aircat, fiche fabricant de la référence 6700-6-338CV",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 03dfa8975f6c0dc86d0652e481bbf346297b8ae4a604d7451188a0f826b7f60c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-pdp-338-p1"
		],
		"mpn": [
			"october2-tools-ctg-pdp-338-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-pdp-338-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-pdp-338-p1"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
