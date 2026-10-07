import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-michigan-pneumatic-mp-1509exthgs-583cw",
	"slug": "meuleuse-michigan-pneumatic-mp-1509exthgs-583cw",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Michigan Pneumatic MP-1509EXTHGS-583CW",
	"brand": "Michigan Pneumatic",
	"model": "MP-1509EXTHGS-583CW",
	"mpn": "MP-1509EXTHGS-583CW",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-michigan-pneumatic-mp-1509exthgs-583cw.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-1509EXTHGS-583CW",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/10-Grinders_V3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-1509exthgs-583cw",
		"label": "Référence MP-1509EXTHGS-583CW",
		"distinguishingAttributes": {
			"reference": "MP-1509EXTHGS-583CW",
			"Masse publiée": "3.5 lbs",
			"Ligne technique constructeur": "MP-1509EXTHGS-583CW 1.25\" 5/8\"-11 External Thread Side 9,000 1.5 14-3/8\" 3.5 lbs 3/8\" 3/8\" 19 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-1509EXTHGS-583CW. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 3.5 lbs. Ligne technique constructeur : MP-1509EXTHGS-583CW 1.25\" 5/8\"-11 External Thread Side 9,000 1.5 14-3/8\" 3.5 lbs 3/8\" 3/8\" 19 cfm.",
		"verifiedFacts": [
			"Masse publiée : 3.5 lbs.",
			"Ligne technique constructeur : MP-1509EXTHGS-583CW 1.25\" 5/8\"-11 External Thread Side 9,000 1.5 14-3/8\" 3.5 lbs 3/8\" 3/8\" 19 cfm."
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
			"value": "3.5 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p8"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-1509EXTHGS-583CW 1.25\" 5/8\"-11 External Thread Side 9,000 1.5 14-3/8\" 3.5 lbs 3/8\" 3/8\" 19 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p8"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p8"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "19 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p8"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-10-pdf-p8",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/10-Grinders_V3.pdf#page=8",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 10, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 68a07091e12cedba8fd2c428b652540aa3e7b34b0fa2da703b0f9115ca7e8705. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-10-pdf-p8"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-10-pdf-p8"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-10-pdf-p8"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
