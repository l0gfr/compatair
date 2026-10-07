import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-rongpeng-rp7431",
	"slug": "cle-a-chocs-rongpeng-rp7431",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Rongpeng RP7431",
	"brand": "Rongpeng",
	"model": "RP7431",
	"mpn": "RP7431",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-rongpeng-rp7431.webp",
		"alt": "Repères techniques : Rongpeng RP7431",
		"sourceUrl": "https://www.rongpeng.com/Impact-Wrench-Manufacturer",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rongpeng-rp7431",
		"label": "Référence RP7431",
		"distinguishingAttributes": {
			"reference": "RP7431",
			"Vitesse à vide": "7500 tr/min",
			"Masse publiée": "2.6 kg"
		}
	},
	"editorial": {
		"overview": "Rongpeng RP7431. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 7500 tr/min. Masse publiée : 2.6 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 7500 tr/min.",
			"Masse publiée : 2.6 kg.",
			"Longueur publiée : 185 mm.",
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
				"october2-tools-rongpeng-pdp-65-p1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.6 kg",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-65-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "185 mm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-65-p1"
			]
		},
		{
			"label": "Couple de travail déclaré",
			"value": "570 Nm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-65-p1"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "1/2 in",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-65-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Recommended air pressure:90PSI(6.3Bar",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-65-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "5 cfm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-65-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rongpeng-pdp-65-p1",
			"sourceUrl": "https://www.rongpeng.com/Impact-Wrench-Manufacturer",
			"sourceLabel": "Rongpeng, documentation technique fabricant",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : ee50b252d7fda146d0e8d686fcb0267be0de19265c77b2b23ec9a34015ab48ee. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rongpeng-pdp-65-p1"
		],
		"workingPressureBar": [
			"october2-tools-rongpeng-pdp-65-p1"
		],
		"demandExplanation": [
			"october2-tools-rongpeng-pdp-65-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
