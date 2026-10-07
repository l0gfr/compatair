import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-michigan-pneumatic-mp-9513extags-384t1",
	"slug": "meuleuse-michigan-pneumatic-mp-9513extags-384t1",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Michigan Pneumatic MP-9513EXTAGS-384T1",
	"brand": "Michigan Pneumatic",
	"model": "MP-9513EXTAGS-384T1",
	"mpn": "MP-9513EXTAGS-384T1",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-michigan-pneumatic-mp-9513extags-384t1.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-9513EXTAGS-384T1",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/10-Grinders_V3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-9513extags-384t1",
		"label": "Référence MP-9513EXTAGS-384T1",
		"distinguishingAttributes": {
			"reference": "MP-9513EXTAGS-384T1",
			"Masse publiée": "3.3 lbs",
			"Ligne technique constructeur": "MP-9513EXTAGS-384T1 4\" Type 1 3/8\"-24 External Thread Side 13,500 0.8 9-5/8\" 3.3 lbs 1/4\" 3/8\" 32 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-9513EXTAGS-384T1. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 3.3 lbs. Ligne technique constructeur : MP-9513EXTAGS-384T1 4\" Type 1 3/8\"-24 External Thread Side 13,500 0.8 9-5/8\" 3.3 lbs 1/4\" 3/8\" 32 cfm.",
		"verifiedFacts": [
			"Masse publiée : 3.3 lbs.",
			"Ligne technique constructeur : MP-9513EXTAGS-384T1 4\" Type 1 3/8\"-24 External Thread Side 13,500 0.8 9-5/8\" 3.3 lbs 1/4\" 3/8\" 32 cfm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Données du catalogue constructeur archivé ; consommation moyenne ou de régime non précisé, sans certification du besoin maximal en charge.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "3.3 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p4"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-9513EXTAGS-384T1 4\" Type 1 3/8\"-24 External Thread Side 13,500 0.8 9-5/8\" 3.3 lbs 1/4\" 3/8\" 32 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p4"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p4"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "32 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-10-pdf-p4",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/10-Grinders_V3.pdf#page=4",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 10, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 68a07091e12cedba8fd2c428b652540aa3e7b34b0fa2da703b0f9115ca7e8705. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-10-pdf-p4"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-10-pdf-p4"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-10-pdf-p4"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
