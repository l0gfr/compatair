import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-rongpeng-rp7408",
	"slug": "cle-a-cliquet-rongpeng-rp7408",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Rongpeng RP7408",
	"brand": "Rongpeng",
	"model": "RP7408",
	"mpn": "RP7408",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-rongpeng-rp7408.webp",
		"alt": "Repères techniques : Rongpeng RP7408",
		"sourceUrl": "https://www.rongpeng.com/Ratchet-Wrench-Supplier",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rongpeng-rp7408",
		"label": "Référence RP7408",
		"distinguishingAttributes": {
			"reference": "RP7408",
			"Masse publiée": "1.2 kg",
			"Longueur publiée": "254 mm"
		}
	},
	"editorial": {
		"overview": "Rongpeng RP7408. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 1.2 kg. Longueur publiée : 254 mm.",
		"verifiedFacts": [
			"Masse publiée : 1.2 kg.",
			"Longueur publiée : 254 mm.",
			"Couple de travail déclaré : 68 Nm.",
			"Carré de sortie : 3/8 in."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1.2 kg",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-105-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "254 mm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-105-p1"
			]
		},
		{
			"label": "Couple de travail déclaré",
			"value": "68 Nm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-105-p1"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "3/8 in",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-105-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-105-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "3 cfm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-105-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rongpeng-pdp-105-p1",
			"sourceUrl": "https://www.rongpeng.com/Ratchet-Wrench-Supplier",
			"sourceLabel": "Rongpeng, documentation technique fabricant",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : ba105866a5d4fd8f93abd979e76de9196f068532a15f94476145cb185c8089e5. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rongpeng-pdp-105-p1"
		],
		"workingPressureBar": [
			"october2-tools-rongpeng-pdp-105-p1"
		],
		"demandExplanation": [
			"october2-tools-rongpeng-pdp-105-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
