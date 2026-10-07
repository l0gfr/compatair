import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-atp-atp1038ei-th",
	"slug": "cle-a-chocs-atp-atp1038ei-th",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "ATP ATP1038EI-TH",
	"brand": "ATP",
	"model": "ATP1038EI-TH",
	"mpn": "ATP1038EI-TH",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"connectorSize": "½” (Air Inlet NPT (in))",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-atp-atp1038ei-th.webp",
		"alt": "Repères techniques : ATP ATP1038EI-TH",
		"sourceUrl": "https://continentaltoolgroup.com/product/40880/",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "atp-atp1038ei-th",
		"label": "Référence ATP1038EI-TH",
		"distinguishingAttributes": {
			"reference": "ATP1038EI-TH",
			"Masse publiée (lb/kg)": "24 (10.9)",
			"Retenue de douille": "Through Hole"
		}
	},
	"editorial": {
		"overview": "ATP ATP1038EI-TH. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée (lb/kg) : 24 (10.9). Retenue de douille : Through Hole.",
		"verifiedFacts": [
			"Masse publiée (lb/kg) : 24 (10.9).",
			"Retenue de douille : Through Hole."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée (lb/kg)",
			"value": "24 (10.9)",
			"evidenceIds": [
				"october2-tools-ctg-extra-pdp-111-p1"
			]
		},
		{
			"label": "Retenue de douille",
			"value": "Through Hole",
			"evidenceIds": [
				"october2-tools-ctg-extra-pdp-111-p1"
			]
		},
		{
			"label": "Champ fabricant : Air Inlet NPT (in)",
			"value": "½”",
			"evidenceIds": [
				"october2-tools-ctg-extra-pdp-111-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-ctg-extra-pdp-111-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-ctg-extra-pdp-111-p1",
			"sourceUrl": "https://continentaltoolgroup.com/product/40880/",
			"sourceLabel": "ATP, fiche fabricant de la référence ATP1038EI-TH",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : a1bd14e651d9d12be02cd0e5817e780ed78fd5d06ee987dc364f19fc56e093d6. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"connectorSize": [
			"october2-tools-ctg-extra-pdp-111-p1"
		],
		"mpn": [
			"october2-tools-ctg-extra-pdp-111-p1"
		],
		"workingPressureBar": [
			"october2-tools-ctg-extra-pdp-111-p1"
		],
		"demandExplanation": [
			"october2-tools-ctg-extra-pdp-111-p1"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
