import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-atp-atp50pt-cr",
	"slug": "cle-a-chocs-atp-atp50pt-cr",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "ATP ATP50PT-CR",
	"brand": "ATP",
	"model": "ATP50PT-CR",
	"mpn": "ATP50PT-CR",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"connectorSize": "¼” (Air Inlet NPT (in))",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-atp-atp50pt-cr.webp",
		"alt": "Repères techniques : ATP ATP50PT-CR",
		"sourceUrl": "https://continentaltoolgroup.com/product/cr-pistol-grip-impact-wrench-1-2-square-drive/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atp-atp50pt-cr",
		"label": "Référence ATP50PT-CR",
		"distinguishingAttributes": {
			"reference": "ATP50PT-CR",
			"Masse publiée (lb/kg)": "4.4 (2)",
			"Retenue de douille": "Collar Retainer"
		}
	},
	"editorial": {
		"overview": "ATP ATP50PT-CR. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée (lb/kg) : 4.4 (2). Retenue de douille : Collar Retainer.",
		"verifiedFacts": [
			"Masse publiée (lb/kg) : 4.4 (2).",
			"Retenue de douille : Collar Retainer."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée (lb/kg)",
			"value": "4.4 (2)",
			"evidenceIds": [
				"october2-tools-ctg-extra-pdp-117-p1"
			]
		},
		{
			"label": "Retenue de douille",
			"value": "Collar Retainer",
			"evidenceIds": [
				"october2-tools-ctg-extra-pdp-117-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet NPT (in)",
			"value": "¼”",
			"evidenceIds": [
				"october2-tools-ctg-extra-pdp-117-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-extra-pdp-117-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-extra-pdp-117-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/cr-pistol-grip-impact-wrench-1-2-square-drive/",
			"sourceLabel": "ATP, fiche fabricant de la référence ATP50PT-CR",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 2a3a36af30cc9d5601924280befda54ad291593fa539302f4646308960e43363. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-extra-pdp-117-p1"
		],
		"mpn": [
			"october2-tools-ctg-extra-pdp-117-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-extra-pdp-117-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-extra-pdp-117-p1"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
