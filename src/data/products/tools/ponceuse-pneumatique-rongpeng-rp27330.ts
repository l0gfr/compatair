import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-pneumatique-rongpeng-rp27330",
	"slug": "ponceuse-pneumatique-rongpeng-rp27330",
	"categoryId": "ponceuse-pneumatique",
	"category": "ponceuse-pneumatique",
	"label": "Rongpeng RP27330",
	"brand": "Rongpeng",
	"model": "RP27330",
	"mpn": "RP27330",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-pneumatique-rongpeng-rp27330.webp",
		"alt": "Repères techniques : Rongpeng RP27330",
		"sourceUrl": "https://www.rongpeng.com/Air-Sander",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rongpeng-rp27330",
		"label": "Référence RP27330",
		"distinguishingAttributes": {
			"reference": "RP27330",
			"Vitesse à vide": "12,000 tr/min",
			"Masse publiée": "0.94 kg"
		}
	},
	"editorial": {
		"overview": "Rongpeng RP27330. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 12,000 tr/min. Masse publiée : 0.94 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 12,000 tr/min.",
			"Masse publiée : 0.94 kg.",
			"Longueur publiée : 186.5 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "12,000 tr/min",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-91-p1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.94 kg",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-91-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "186.5 mm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-91-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working Pressure;0.63MPA",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-91-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4.5 cfm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-91-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rongpeng-pdp-91-p1",
			"sourceUrl": "https://www.rongpeng.com/Air-Sander",
			"sourceLabel": "Rongpeng, documentation technique fabricant",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 64112320f840b197650fb28a02e0ddda53701ce292bd787ba77451b426e28251. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rongpeng-pdp-91-p1"
		],
		"workingPressureBar": [
			"october2-tools-rongpeng-pdp-91-p1"
		],
		"demandExplanation": [
			"october2-tools-rongpeng-pdp-91-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
