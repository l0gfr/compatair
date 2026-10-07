import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-rongpeng-rp7324",
	"slug": "ponceuse-orbitale-rongpeng-rp7324",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Rongpeng RP7324",
	"brand": "Rongpeng",
	"model": "RP7324",
	"mpn": "RP7324",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-rongpeng-rp7324.webp",
		"alt": "Repères techniques : Rongpeng RP7324",
		"sourceUrl": "https://www.rongpeng.com/RONGPENG-Air-Square-Orbit-Sander-RP7324",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rongpeng-rp7324",
		"label": "Référence RP7324",
		"distinguishingAttributes": {
			"reference": "RP7324",
			"Masse publiée": "2.3 kg",
			"Dimensions du plateau": "90x165 mm"
		}
	},
	"editorial": {
		"overview": "Rongpeng RP7324. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 2.3 kg. Dimensions du plateau : 90x165 mm.",
		"verifiedFacts": [
			"Masse publiée : 2.3 kg.",
			"Dimensions du plateau : 90x165 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2.3 kg",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-99-p1"
			]
		},
		{
			"label": "Dimensions du plateau",
			"value": "90x165 mm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-99-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-99-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "6 cfm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-99-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rongpeng-pdp-99-p1",
			"sourceUrl": "https://www.rongpeng.com/RONGPENG-Air-Square-Orbit-Sander-RP7324",
			"sourceLabel": "Rongpeng, documentation technique fabricant",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 531fd4775741bd28673d7fe40be80b550a29770e3ae2944cab7c3410010ce38d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rongpeng-pdp-99-p1"
		],
		"workingPressureBar": [
			"october2-tools-rongpeng-pdp-99-p1"
		],
		"demandExplanation": [
			"october2-tools-rongpeng-pdp-99-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
