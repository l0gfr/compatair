import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-rongpeng-rp17407",
	"slug": "cle-a-chocs-rongpeng-rp17407",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Rongpeng RP17407",
	"brand": "Rongpeng",
	"model": "RP17407",
	"mpn": "RP17407",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-rongpeng-rp17407.webp",
		"alt": "Repères techniques : Rongpeng RP17407",
		"sourceUrl": "https://www.rongpeng.com/Impact-wrench-pneumatic-tools",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rongpeng-rp17407",
		"label": "Référence RP17407",
		"distinguishingAttributes": {
			"reference": "RP17407",
			"Vitesse à vide": "7500 tr/min",
			"Masse publiée": "2.1 kg"
		}
	},
	"editorial": {
		"overview": "Rongpeng RP17407. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 7500 tr/min. Masse publiée : 2.1 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 7500 tr/min.",
			"Masse publiée : 2.1 kg.",
			"Longueur publiée : 185 mm.",
			"Couple de travail déclaré : 610 Nm.",
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
				"october2-tools-rongpeng-pdp-52-p1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.1 kg",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-52-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "185 mm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-52-p1"
			]
		},
		{
			"label": "Couple de travail déclaré",
			"value": "610 Nm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-52-p1"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "1/2 in",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-52-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-52-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "6.5 cfm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-52-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rongpeng-pdp-52-p1",
			"sourceUrl": "https://www.rongpeng.com/Impact-wrench-pneumatic-tools",
			"sourceLabel": "Rongpeng, documentation technique fabricant",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : d30012b3e29d72d88e6e2ede5b1d7e8c3bc0722db10ed6f30834aeeb8af889a7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rongpeng-pdp-52-p1"
		],
		"workingPressureBar": [
			"october2-tools-rongpeng-pdp-52-p1"
		],
		"demandExplanation": [
			"october2-tools-rongpeng-pdp-52-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
