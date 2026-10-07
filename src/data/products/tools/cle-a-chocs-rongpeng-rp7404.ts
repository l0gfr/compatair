import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-rongpeng-rp7404",
	"slug": "cle-a-chocs-rongpeng-rp7404",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Rongpeng RP7404",
	"brand": "Rongpeng",
	"model": "RP7404",
	"mpn": "RP7404",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-rongpeng-rp7404.webp",
		"alt": "Repères techniques : Rongpeng RP7404",
		"sourceUrl": "https://www.rongpeng.com/Pneumatic-Wrench",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rongpeng-rp7404",
		"label": "Référence RP7404",
		"distinguishingAttributes": {
			"reference": "RP7404",
			"Masse publiée": "2.2 kg",
			"Longueur publiée": "178 mm"
		}
	},
	"editorial": {
		"overview": "Rongpeng RP7404. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 2.2 kg. Longueur publiée : 178 mm.",
		"verifiedFacts": [
			"Masse publiée : 2.2 kg.",
			"Longueur publiée : 178 mm.",
			"Couple de travail déclaré : 310 Nm.",
			"Carré de sortie : 1/2 in."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2.2 kg",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-60-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "178 mm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-60-p1"
			]
		},
		{
			"label": "Couple de travail déclaré",
			"value": "310 Nm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-60-p1"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "1/2 in",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-60-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-60-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-60-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rongpeng-pdp-60-p1",
			"sourceUrl": "https://www.rongpeng.com/Pneumatic-Wrench",
			"sourceLabel": "Rongpeng, documentation technique fabricant",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : e22409ed0f3c19c92ae8a0955b254b47fba6c305ba36c41f29ae88f242752382. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rongpeng-pdp-60-p1"
		],
		"workingPressureBar": [
			"october2-tools-rongpeng-pdp-60-p1"
		],
		"demandExplanation": [
			"october2-tools-rongpeng-pdp-60-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
