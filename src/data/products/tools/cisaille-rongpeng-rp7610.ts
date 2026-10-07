import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cisaille-rongpeng-rp7610",
	"slug": "cisaille-rongpeng-rp7610",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "Rongpeng RP7610",
	"brand": "Rongpeng",
	"model": "RP7610",
	"mpn": "RP7610",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-rongpeng-rp7610.webp",
		"alt": "Repères techniques : Rongpeng RP7610",
		"sourceUrl": "https://www.rongpeng.com/Air-Shear-Supplier",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rongpeng-rp7610",
		"label": "Référence RP7610",
		"distinguishingAttributes": {
			"reference": "RP7610",
			"Vitesse à vide": "1800 tr/min",
			"Masse publiée": "1.08 kg"
		}
	},
	"editorial": {
		"overview": "Rongpeng RP7610. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Vitesse à vide : 1800 tr/min. Masse publiée : 1.08 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 1800 tr/min.",
			"Masse publiée : 1.08 kg.",
			"Longueur publiée : 214 mm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "1800 tr/min",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-113-p1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.08 kg",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-113-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "214 mm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-113-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-113-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rongpeng-pdp-113-p1",
			"sourceUrl": "https://www.rongpeng.com/Air-Shear-Supplier",
			"sourceLabel": "Rongpeng, documentation technique fabricant",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : cc270fe71f3b4f8bdaf31d0aac55d735e922b805064e5ec03ccf1c24f03ccb56. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rongpeng-pdp-113-p1"
		],
		"workingPressureBar": [
			"october2-tools-rongpeng-pdp-113-p1"
		],
		"demandExplanation": [
			"october2-tools-rongpeng-pdp-113-p1"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
