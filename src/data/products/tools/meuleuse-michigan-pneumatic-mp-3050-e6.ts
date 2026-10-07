import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-michigan-pneumatic-mp-3050-e6",
	"slug": "meuleuse-michigan-pneumatic-mp-3050-e6",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Michigan Pneumatic MP-3050-E6",
	"brand": "Michigan Pneumatic",
	"model": "MP-3050-E6",
	"mpn": "MP-3050-E6",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-michigan-pneumatic-mp-3050-e6.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-3050-E6",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/10-Grinders_V3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-3050-e6",
		"label": "Référence MP-3050-E6",
		"distinguishingAttributes": {
			"reference": "MP-3050-E6",
			"Masse publiée": "4.65 lbs",
			"Ligne technique constructeur": "MP-3050-E6 Angle Side – 3/8\"-24 6\" Type 27 13,500 rpm 0.7 2-3/4\" 10-3/4\" 4.65 lbs 1/4\" 3/8\" 11 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-3050-E6. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 4.65 lbs. Ligne technique constructeur : MP-3050-E6 Angle Side – 3/8\"-24 6\" Type 27 13,500 rpm 0.7 2-3/4\" 10-3/4\" 4.65 lbs 1/4\" 3/8\" 11 cfm.",
		"verifiedFacts": [
			"Masse publiée : 4.65 lbs.",
			"Ligne technique constructeur : MP-3050-E6 Angle Side – 3/8\"-24 6\" Type 27 13,500 rpm 0.7 2-3/4\" 10-3/4\" 4.65 lbs 1/4\" 3/8\" 11 cfm."
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
			"value": "4.65 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p24"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-3050-E6 Angle Side – 3/8\"-24 6\" Type 27 13,500 rpm 0.7 2-3/4\" 10-3/4\" 4.65 lbs 1/4\" 3/8\" 11 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p24"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p24"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "11 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p24"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-10-pdf-p24",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/10-Grinders_V3.pdf#page=24",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 10, page PDF 24",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 68a07091e12cedba8fd2c428b652540aa3e7b34b0fa2da703b0f9115ca7e8705. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-10-pdf-p24"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-10-pdf-p24"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-10-pdf-p24"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
