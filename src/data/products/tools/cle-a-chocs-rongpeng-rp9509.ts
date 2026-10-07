import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-rongpeng-rp9509",
	"slug": "cle-a-chocs-rongpeng-rp9509",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Rongpeng RP9509",
	"brand": "Rongpeng",
	"model": "RP9509",
	"mpn": "RP9509",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-rongpeng-rp9509.webp",
		"alt": "Repères techniques : Rongpeng RP9509",
		"sourceUrl": "https://www.rongpeng.com/Air-Impact-Wrench-RP9509",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rongpeng-rp9509",
		"label": "Référence RP9509",
		"distinguishingAttributes": {
			"reference": "RP9509",
			"Vitesse à vide": "7000 tr/min",
			"Masse publiée": "2.0 kg"
		}
	},
	"editorial": {
		"overview": "Rongpeng RP9509. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 7000 tr/min. Masse publiée : 2.0 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 7000 tr/min.",
			"Masse publiée : 2.0 kg.",
			"Longueur publiée : 185 mm.",
			"Couple de travail déclaré : 1356 Nm.",
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
			"value": "7000 tr/min",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-51-p1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.0 kg",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-51-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "185 mm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-51-p1"
			]
		},
		{
			"label": "Couple de travail déclaré",
			"value": "1356 Nm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-51-p1"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "1/2 in",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-51-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Recommended Air Pressure:90PSI(6.3bar",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-51-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "6.5 cfm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-51-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rongpeng-pdp-51-p1",
			"sourceUrl": "https://www.rongpeng.com/Air-Impact-Wrench-RP9509",
			"sourceLabel": "Rongpeng, documentation technique fabricant",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : fd82be47adc889fa39fa1ad21845234d8e37d0703d11405ee9c10ed43e0ccf6f. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rongpeng-pdp-51-p1"
		],
		"workingPressureBar": [
			"october2-tools-rongpeng-pdp-51-p1"
		],
		"demandExplanation": [
			"october2-tools-rongpeng-pdp-51-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
