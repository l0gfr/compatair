import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-pneumatique-rongpeng-rp7335s",
	"slug": "ponceuse-pneumatique-rongpeng-rp7335s",
	"categoryId": "ponceuse-pneumatique",
	"category": "ponceuse-pneumatique",
	"label": "Rongpeng RP7335S",
	"brand": "Rongpeng",
	"model": "RP7335S",
	"mpn": "RP7335S",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-pneumatique-rongpeng-rp7335s.webp",
		"alt": "Repères techniques : Rongpeng RP7335S",
		"sourceUrl": "https://www.rongpeng.com/Air-Sander-Self-Vacuuming-RP7335S",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rongpeng-rp7335s",
		"label": "Référence RP7335S",
		"distinguishingAttributes": {
			"reference": "RP7335S",
			"Masse publiée": "0.8 kg",
			"Diamètre du plateau publié": "5 in"
		}
	},
	"editorial": {
		"overview": "Rongpeng RP7335S. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 0.8 kg. Diamètre du plateau publié : 5 in.",
		"verifiedFacts": [
			"Masse publiée : 0.8 kg.",
			"Diamètre du plateau publié : 5 in."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "0.8 kg",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-82-p1"
			]
		},
		{
			"label": "Diamètre du plateau publié",
			"value": "5 in",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-82-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-82-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4.5 cfm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-82-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rongpeng-pdp-82-p1",
			"sourceUrl": "https://www.rongpeng.com/Air-Sander-Self-Vacuuming-RP7335S",
			"sourceLabel": "Rongpeng, documentation technique fabricant",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c27ae6ecb1433f6b9c63032e2e14794b1c51f98e3bd5fdf8f8e15d1e0f1c961b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rongpeng-pdp-82-p1"
		],
		"workingPressureBar": [
			"october2-tools-rongpeng-pdp-82-p1"
		],
		"demandExplanation": [
			"october2-tools-rongpeng-pdp-82-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
