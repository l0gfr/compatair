import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-rongpeng-rp7488",
	"slug": "cle-a-chocs-rongpeng-rp7488",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Rongpeng RP7488",
	"brand": "Rongpeng",
	"model": "RP7488",
	"mpn": "RP7488",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-rongpeng-rp7488.webp",
		"alt": "Repères techniques : Rongpeng RP7488",
		"sourceUrl": "https://www.rongpeng.com/1-Inch-Air-Impact-Wrench-RP7488",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rongpeng-rp7488",
		"label": "Référence RP7488",
		"distinguishingAttributes": {
			"reference": "RP7488",
			"Vitesse à vide": "3600 tr/min",
			"Masse publiée": "16.5 kg"
		}
	},
	"editorial": {
		"overview": "Rongpeng RP7488. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 3600 tr/min. Masse publiée : 16.5 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 3600 tr/min.",
			"Masse publiée : 16.5 kg.",
			"Longueur publiée : 586 mm.",
			"Couple de travail déclaré : 3100 Nm.",
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
			"value": "3600 tr/min",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-75-p1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "16.5 kg",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-75-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "586 mm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-75-p1"
			]
		},
		{
			"label": "Couple de travail déclaré",
			"value": "3100 Nm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-75-p1"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "1 in",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-75-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-75-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "1140 L/min",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-75-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rongpeng-pdp-75-p1",
			"sourceUrl": "https://www.rongpeng.com/1-Inch-Air-Impact-Wrench-RP7488",
			"sourceLabel": "Rongpeng, documentation technique fabricant",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : b8ba8b733ab4eacbf3073fa82f5044512313beb081e9f8ea8770bdb122559952. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rongpeng-pdp-75-p1"
		],
		"workingPressureBar": [
			"october2-tools-rongpeng-pdp-75-p1"
		],
		"demandExplanation": [
			"october2-tools-rongpeng-pdp-75-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
