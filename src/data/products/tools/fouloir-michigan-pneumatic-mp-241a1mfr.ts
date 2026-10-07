import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fouloir-michigan-pneumatic-mp-241a1mfr",
	"slug": "fouloir-michigan-pneumatic-mp-241a1mfr",
	"categoryId": "fouloir",
	"category": "fouloir",
	"label": "Michigan Pneumatic MP-241A1MFR",
	"brand": "Michigan Pneumatic",
	"model": "MP-241A1MFR",
	"mpn": "MP-241A1MFR",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/fouloir-michigan-pneumatic-mp-241a1mfr.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-241A1MFR",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/5-Rammers_V3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-241a1mfr",
		"label": "Référence MP-241A1MFR",
		"distinguishingAttributes": {
			"reference": "MP-241A1MFR",
			"Masse publiée": "26.0 lbs",
			"Ligne technique constructeur": "MP-241A1MFR 1-1/4 x 3\" Peen 803 1-5/16\" 4\" 1590 52-1/2\" 26.0 lbs 1/2\" 1/2\" 29 cfm TX-00203"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-241A1MFR. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 26.0 lbs. Ligne technique constructeur : MP-241A1MFR 1-1/4 x 3\" Peen 803 1-5/16\" 4\" 1590 52-1/2\" 26.0 lbs 1/2\" 1/2\" 29 cfm TX-00203.",
		"verifiedFacts": [
			"Masse publiée : 26.0 lbs.",
			"Ligne technique constructeur : MP-241A1MFR 1-1/4 x 3\" Peen 803 1-5/16\" 4\" 1590 52-1/2\" 26.0 lbs 1/2\" 1/2\" 29 cfm TX-00203."
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
			"value": "26.0 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-5-pdf-p8"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-241A1MFR 1-1/4 x 3\" Peen 803 1-5/16\" 4\" 1590 52-1/2\" 26.0 lbs 1/2\" 1/2\" 29 cfm TX-00203",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-5-pdf-p8"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-5-pdf-p8"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "29 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-5-pdf-p8"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-5-pdf-p8",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/5-Rammers_V3.pdf#page=8",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 5, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : daa0a640fccce93e6ce22aa4d173f30872ad77ea4f3d710917b36dcf6b85bab5. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-5-pdf-p8"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-5-pdf-p8"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-5-pdf-p8"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
