import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-rongpeng-rp9510",
	"slug": "cle-a-chocs-rongpeng-rp9510",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Rongpeng RP9510",
	"brand": "Rongpeng",
	"model": "RP9510",
	"mpn": "RP9510",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-rongpeng-rp9510.webp",
		"alt": "Repères techniques : Rongpeng RP9510",
		"sourceUrl": "https://www.rongpeng.com/RONGPENG-RP9510-1/2-INCH-Impact-Wrench",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rongpeng-rp9510",
		"label": "Référence RP9510",
		"distinguishingAttributes": {
			"reference": "RP9510",
			"Vitesse à vide": "7000 tr/min",
			"Masse publiée": "2.0 kg"
		}
	},
	"editorial": {
		"overview": "Rongpeng RP9510. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 7000 tr/min. Masse publiée : 2.0 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 7000 tr/min.",
			"Masse publiée : 2.0 kg.",
			"Couple de travail déclaré : 1356 Nm."
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
				"october2-tools-rongpeng-pdp-54-p1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.0 kg",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-54-p1"
			]
		},
		{
			"label": "Couple de travail déclaré",
			"value": "1356 Nm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-54-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-54-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "7 cfm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-54-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rongpeng-pdp-54-p1",
			"sourceUrl": "https://www.rongpeng.com/RONGPENG-RP9510-1/2-INCH-Impact-Wrench",
			"sourceLabel": "Rongpeng, documentation technique fabricant",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 2cf3e3594d92c451e94a9495607e5b4f98a7acbc3abb5144a3c823a7c4dc7a44. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rongpeng-pdp-54-p1"
		],
		"workingPressureBar": [
			"october2-tools-rongpeng-pdp-54-p1"
		],
		"demandExplanation": [
			"october2-tools-rongpeng-pdp-54-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
