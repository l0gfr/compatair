import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "tronconneuse-rongpeng-rp27620",
	"slug": "tronconneuse-rongpeng-rp27620",
	"categoryId": "tronconneuse",
	"category": "tronconneuse",
	"label": "Rongpeng RP27620",
	"brand": "Rongpeng",
	"model": "RP27620",
	"mpn": "RP27620",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/tronconneuse-rongpeng-rp27620.webp",
		"alt": "Repères techniques : Rongpeng RP27620",
		"sourceUrl": "https://www.rongpeng.com/Air-Cut-off-Tool",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rongpeng-rp27620",
		"label": "Référence RP27620",
		"distinguishingAttributes": {
			"reference": "RP27620",
			"Vitesse à vide": "20000 tr/min",
			"Masse publiée": "0.73 kg"
		}
	},
	"editorial": {
		"overview": "Rongpeng RP27620. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Vitesse à vide : 20000 tr/min. Masse publiée : 0.73 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 20000 tr/min.",
			"Masse publiée : 0.73 kg.",
			"Longueur publiée : 197 mm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "20000 tr/min",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-131-p1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.73 kg",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-131-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "197 mm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-131-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-131-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rongpeng-pdp-131-p1",
			"sourceUrl": "https://www.rongpeng.com/Air-Cut-off-Tool",
			"sourceLabel": "Rongpeng, documentation technique fabricant",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 65c0f55518320bd7067709c73eefdee373c7d4abb237a27ca6698f685f382ef4. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rongpeng-pdp-131-p1"
		],
		"workingPressureBar": [
			"october2-tools-rongpeng-pdp-131-p1"
		],
		"demandExplanation": [
			"october2-tools-rongpeng-pdp-131-p1"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
