import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-rongpeng-rp7462",
	"slug": "cle-a-chocs-rongpeng-rp7462",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Rongpeng RP7462",
	"brand": "Rongpeng",
	"model": "RP7462",
	"mpn": "RP7462",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-rongpeng-rp7462.webp",
		"alt": "Repères techniques : Rongpeng RP7462",
		"sourceUrl": "https://www.rongpeng.com/1-inch-high-torque-air-impact-wrench",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rongpeng-rp7462",
		"label": "Référence RP7462",
		"distinguishingAttributes": {
			"reference": "RP7462",
			"Vitesse à vide": "4600 tr/min",
			"Masse publiée": "7 kg"
		}
	},
	"editorial": {
		"overview": "Rongpeng RP7462. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 4600 tr/min. Masse publiée : 7 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 4600 tr/min.",
			"Masse publiée : 7 kg.",
			"Longueur publiée : 253 mm.",
			"Couple de travail déclaré : 1800 Nm.",
			"Carré de sortie : 1 in."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "4600 tr/min",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-67-p1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "7 kg",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-67-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "253 mm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-67-p1"
			]
		},
		{
			"label": "Couple de travail déclaré",
			"value": "1800 Nm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-67-p1"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "1 in",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-67-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-67-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "20 cfm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-67-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rongpeng-pdp-67-p1",
			"sourceUrl": "https://www.rongpeng.com/1-inch-high-torque-air-impact-wrench",
			"sourceLabel": "Rongpeng, documentation technique fabricant",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 4937d89272053d3f2d516a516f5779609b76dbe99903be6892e5e3c080fe288e. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rongpeng-pdp-67-p1"
		],
		"workingPressureBar": [
			"october2-tools-rongpeng-pdp-67-p1"
		],
		"demandExplanation": [
			"october2-tools-rongpeng-pdp-67-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
