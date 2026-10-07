import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-rongpeng-rp7465",
	"slug": "cle-a-chocs-rongpeng-rp7465",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Rongpeng RP7465",
	"brand": "Rongpeng",
	"model": "RP7465",
	"mpn": "RP7465",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-rongpeng-rp7465.webp",
		"alt": "Repères techniques : Rongpeng RP7465",
		"sourceUrl": "https://www.rongpeng.com/1-Inch-Air-Impact-Wrench-RP7465",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rongpeng-rp7465",
		"label": "Référence RP7465",
		"distinguishingAttributes": {
			"reference": "RP7465",
			"Vitesse à vide": "4,000 tr/min",
			"Masse publiée": "15.5 kg"
		}
	},
	"editorial": {
		"overview": "Rongpeng RP7465. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 4,000 tr/min. Masse publiée : 15.5 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 4,000 tr/min.",
			"Masse publiée : 15.5 kg.",
			"Longueur publiée : 584 mm.",
			"Couple de travail déclaré : 2700 Nm.",
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
			"value": "4,000 tr/min",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-73-p1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "15.5 kg",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-73-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "584 mm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-73-p1"
			]
		},
		{
			"label": "Couple de travail déclaré",
			"value": "2700 Nm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-73-p1"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "1 in",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-73-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Recommended air pressure:90PSI(6.3Bar",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-73-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "35 cfm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-73-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rongpeng-pdp-73-p1",
			"sourceUrl": "https://www.rongpeng.com/1-Inch-Air-Impact-Wrench-RP7465",
			"sourceLabel": "Rongpeng, documentation technique fabricant",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 63c4c59c14b26a6b709a98b920ca10e6a449d62f608cdf9434aeb32a7abfd3f8. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rongpeng-pdp-73-p1"
		],
		"workingPressureBar": [
			"october2-tools-rongpeng-pdp-73-p1"
		],
		"demandExplanation": [
			"october2-tools-rongpeng-pdp-73-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
