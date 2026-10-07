import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-pneumatique-rongpeng-rp7317",
	"slug": "ponceuse-pneumatique-rongpeng-rp7317",
	"categoryId": "ponceuse-pneumatique",
	"category": "ponceuse-pneumatique",
	"label": "Rongpeng RP7317",
	"brand": "Rongpeng",
	"model": "RP7317",
	"mpn": "RP7317",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.205,
		"typical": 6.205,
		"max": 6.205
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-pneumatique-rongpeng-rp7317.webp",
		"alt": "Repères techniques : Rongpeng RP7317",
		"sourceUrl": "https://www.rongpeng.com/5-Inch-High-Speed-Air-Sander-RP7317",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rongpeng-rp7317",
		"label": "Référence RP7317",
		"distinguishingAttributes": {
			"reference": "RP7317",
			"Masse publiée": "0.91 kg",
			"Diamètre du plateau publié": "3 in"
		}
	},
	"editorial": {
		"overview": "Rongpeng RP7317. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 0.91 kg. Diamètre du plateau publié : 3 in.",
		"verifiedFacts": [
			"Masse publiée : 0.91 kg.",
			"Diamètre du plateau publié : 3 in."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "0.91 kg",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-92-p1"
			]
		},
		{
			"label": "Diamètre du plateau publié",
			"value": "3 in",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-92-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "working pressure:90PSI",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-92-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4.0 cfm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-92-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rongpeng-pdp-92-p1",
			"sourceUrl": "https://www.rongpeng.com/5-Inch-High-Speed-Air-Sander-RP7317",
			"sourceLabel": "Rongpeng, documentation technique fabricant",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 6482853dc1c8346f8012d0aac545d7a3693e660bba152f84af7286d997036cf4. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rongpeng-pdp-92-p1"
		],
		"workingPressureBar": [
			"october2-tools-rongpeng-pdp-92-p1"
		],
		"demandExplanation": [
			"october2-tools-rongpeng-pdp-92-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
