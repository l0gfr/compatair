import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-rongpeng-rp27315",
	"slug": "meuleuse-rongpeng-rp27315",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Rongpeng RP27315",
	"brand": "Rongpeng",
	"model": "RP27315",
	"mpn": "RP27315",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-rongpeng-rp27315.webp",
		"alt": "Repères techniques : Rongpeng RP27315",
		"sourceUrl": "https://www.rongpeng.com/Angle-Die-Grinder",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rongpeng-rp27315",
		"label": "Référence RP27315",
		"distinguishingAttributes": {
			"reference": "RP27315",
			"Vitesse à vide": "22,000 tr/min",
			"Masse publiée": "0.49 kg"
		}
	},
	"editorial": {
		"overview": "Rongpeng RP27315. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 22,000 tr/min. Masse publiée : 0.49 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 22,000 tr/min.",
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
			"value": "22,000 tr/min",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-129-p1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.49 kg",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-129-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "162 mm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-129-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working Pressure;0.63MPA",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-129-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "3 cfm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-129-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rongpeng-pdp-129-p1",
			"sourceUrl": "https://www.rongpeng.com/Angle-Die-Grinder",
			"sourceLabel": "Rongpeng, documentation technique fabricant",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 5b49e149a141472dd5942e1d0c62cecc1570277f9a0af75d741aa03e13858804. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rongpeng-pdp-129-p1"
		],
		"workingPressureBar": [
			"october2-tools-rongpeng-pdp-129-p1"
		],
		"demandExplanation": [
			"october2-tools-rongpeng-pdp-129-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
