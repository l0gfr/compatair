import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-rongpeng-rp7485",
	"slug": "cle-a-chocs-rongpeng-rp7485",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Rongpeng RP7485",
	"brand": "Rongpeng",
	"model": "RP7485",
	"mpn": "RP7485",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-rongpeng-rp7485.webp",
		"alt": "Repères techniques : Rongpeng RP7485",
		"sourceUrl": "https://www.rongpeng.com/1-Inch-Air-Impact-Wrench-RP7485",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rongpeng-rp7485",
		"label": "Référence RP7485",
		"distinguishingAttributes": {
			"reference": "RP7485",
			"Vitesse à vide": "3600 tr/min",
			"Masse publiée": "18 kg"
		}
	},
	"editorial": {
		"overview": "Rongpeng RP7485. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 3600 tr/min. Masse publiée : 18 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 3600 tr/min.",
			"Masse publiée : 18 kg.",
			"Longueur publiée : 585 mm.",
			"Couple de travail déclaré : 3000 Nm.",
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
				"october2-tools-rongpeng-pdp-74-p1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "18 kg",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-74-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "585 mm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-74-p1"
			]
		},
		{
			"label": "Couple de travail déclaré",
			"value": "3000 Nm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-74-p1"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "1 in",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-74-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Recommended air pressure:90PSI(6.3Bar",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-74-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "40 cfm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-74-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rongpeng-pdp-74-p1",
			"sourceUrl": "https://www.rongpeng.com/1-Inch-Air-Impact-Wrench-RP7485",
			"sourceLabel": "Rongpeng, documentation technique fabricant",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : d185ffbfed8a456178bd68793a8a5ccf06842367e6f532a6c63bece715e38603. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rongpeng-pdp-74-p1"
		],
		"workingPressureBar": [
			"october2-tools-rongpeng-pdp-74-p1"
		],
		"demandExplanation": [
			"october2-tools-rongpeng-pdp-74-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
