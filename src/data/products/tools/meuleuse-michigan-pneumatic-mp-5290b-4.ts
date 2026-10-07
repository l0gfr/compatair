import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-michigan-pneumatic-mp-5290b-4",
	"slug": "meuleuse-michigan-pneumatic-mp-5290b-4",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Michigan Pneumatic MP-5290B-4",
	"brand": "Michigan Pneumatic",
	"model": "MP-5290B-4",
	"mpn": "MP-5290B-4",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-michigan-pneumatic-mp-5290b-4.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-5290B-4",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/10-Grinders_V3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-5290b-4",
		"label": "Référence MP-5290B-4",
		"distinguishingAttributes": {
			"reference": "MP-5290B-4",
			"Masse publiée": "2.6 lbs",
			"Ligne technique constructeur": "MP-5290B-4 Angle 1/4\" 12,000 rpm 1 8-3/8\" 2.6 lbs 1/4\" 3/8\" 5.3 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-5290B-4. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 2.6 lbs. Ligne technique constructeur : MP-5290B-4 Angle 1/4\" 12,000 rpm 1 8-3/8\" 2.6 lbs 1/4\" 3/8\" 5.3 cfm.",
		"verifiedFacts": [
			"Masse publiée : 2.6 lbs.",
			"Ligne technique constructeur : MP-5290B-4 Angle 1/4\" 12,000 rpm 1 8-3/8\" 2.6 lbs 1/4\" 3/8\" 5.3 cfm."
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
			"value": "2.6 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p26"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-5290B-4 Angle 1/4\" 12,000 rpm 1 8-3/8\" 2.6 lbs 1/4\" 3/8\" 5.3 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p26"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p26"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "5.3 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p26"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-10-pdf-p26",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/10-Grinders_V3.pdf#page=26",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 10, page PDF 26",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 68a07091e12cedba8fd2c428b652540aa3e7b34b0fa2da703b0f9115ca7e8705. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-10-pdf-p26"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-10-pdf-p26"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-10-pdf-p26"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
