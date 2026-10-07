import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-rongpeng-rp7315",
	"slug": "meuleuse-rongpeng-rp7315",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Rongpeng RP7315",
	"brand": "Rongpeng",
	"model": "RP7315",
	"mpn": "RP7315",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-rongpeng-rp7315.webp",
		"alt": "Repères techniques : Rongpeng RP7315",
		"sourceUrl": "https://www.rongpeng.com/Rongpeng-Pneumatic-Grinder-Supplier",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rongpeng-rp7315",
		"label": "Référence RP7315",
		"distinguishingAttributes": {
			"reference": "RP7315",
			"Vitesse à vide": "20,000 tr/min",
			"Masse publiée": "0.49 kg"
		}
	},
	"editorial": {
		"overview": "Rongpeng RP7315. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 20,000 tr/min. Masse publiée : 0.49 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 20,000 tr/min.",
			"Masse publiée : 0.49 kg.",
			"Longueur publiée : 162 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "20,000 tr/min",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-148-p1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.49 kg",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-148-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "162 mm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-148-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working Pressure;0.63MPA",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-148-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "2.2 cfm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-148-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rongpeng-pdp-148-p1",
			"sourceUrl": "https://www.rongpeng.com/Rongpeng-Pneumatic-Grinder-Supplier",
			"sourceLabel": "Rongpeng, documentation technique fabricant",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 07d8e89ddca36df8be2559374a85e38f1727d33ae7756cc16f83033bd7eaba7f. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rongpeng-pdp-148-p1"
		],
		"workingPressureBar": [
			"october2-tools-rongpeng-pdp-148-p1"
		],
		"demandExplanation": [
			"october2-tools-rongpeng-pdp-148-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
