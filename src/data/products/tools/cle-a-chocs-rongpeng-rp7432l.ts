import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-rongpeng-rp7432l",
	"slug": "cle-a-chocs-rongpeng-rp7432l",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Rongpeng RP7432L",
	"brand": "Rongpeng",
	"model": "RP7432L",
	"mpn": "RP7432L",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-rongpeng-rp7432l.webp",
		"alt": "Repères techniques : Rongpeng RP7432L",
		"sourceUrl": "https://www.rongpeng.com/Extended-Anvil-Air-Impact-Wrench",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rongpeng-rp7432l",
		"label": "Référence RP7432L",
		"distinguishingAttributes": {
			"reference": "RP7432L",
			"Vitesse à vide": "7500 tr/min",
			"Masse publiée": "2.7 kg"
		}
	},
	"editorial": {
		"overview": "Rongpeng RP7432L. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 7500 tr/min. Masse publiée : 2.7 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 7500 tr/min.",
			"Masse publiée : 2.7 kg.",
			"Longueur publiée : 237 mm.",
			"Couple de travail déclaré : 570 Nm.",
			"Carré de sortie : 1/2 in."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "7500 tr/min",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-62-p1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.7 kg",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-62-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "237 mm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-62-p1"
			]
		},
		{
			"label": "Couple de travail déclaré",
			"value": "570 Nm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-62-p1"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "1/2 in",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-62-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Recommended air pressure:90PSI(6.3Bar",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-62-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "5 cfm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-62-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rongpeng-pdp-62-p1",
			"sourceUrl": "https://www.rongpeng.com/Extended-Anvil-Air-Impact-Wrench",
			"sourceLabel": "Rongpeng, documentation technique fabricant",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 869f36217a256eb60688007349463949295433102c6a4178ab0d71857765a2de. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rongpeng-pdp-62-p1"
		],
		"workingPressureBar": [
			"october2-tools-rongpeng-pdp-62-p1"
		],
		"demandExplanation": [
			"october2-tools-rongpeng-pdp-62-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
