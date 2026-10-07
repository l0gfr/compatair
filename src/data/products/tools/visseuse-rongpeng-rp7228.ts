import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-rongpeng-rp7228",
	"slug": "visseuse-rongpeng-rp7228",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Rongpeng RP7228",
	"brand": "Rongpeng",
	"model": "RP7228",
	"mpn": "RP7228",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-rongpeng-rp7228.webp",
		"alt": "Repères techniques : Rongpeng RP7228",
		"sourceUrl": "https://www.rongpeng.com/Straight-Air-Screwdriver",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rongpeng-rp7228",
		"label": "Référence RP7228",
		"distinguishingAttributes": {
			"reference": "RP7228",
			"Vitesse à vide": "9000 tr/min",
			"Masse publiée": "1 kg"
		}
	},
	"editorial": {
		"overview": "Rongpeng RP7228. Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Vitesse à vide : 9000 tr/min. Masse publiée : 1 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 9000 tr/min.",
			"Masse publiée : 1 kg.",
			"Longueur publiée : 195 mm.",
			"Carré de sortie : 1/4 in."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "9000 tr/min",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-181-p1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1 kg",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-181-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "195 mm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-181-p1"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "1/4 in",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-181-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Recommended air pressure:90PSI(6.3Bar",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-181-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rongpeng-pdp-181-p1",
			"sourceUrl": "https://www.rongpeng.com/Straight-Air-Screwdriver",
			"sourceLabel": "Rongpeng, documentation technique fabricant",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 498399b264a99d55c7d927159fcd4bc343c9ecbe6fa187e12449a55d90ddd976. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rongpeng-pdp-181-p1"
		],
		"workingPressureBar": [
			"october2-tools-rongpeng-pdp-181-p1"
		],
		"demandExplanation": [
			"october2-tools-rongpeng-pdp-181-p1"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
