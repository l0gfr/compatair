import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-michigan-pneumatic-mp-erd60-783",
	"slug": "perceuse-michigan-pneumatic-mp-erd60-783",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Michigan Pneumatic MP-ERD60-783",
	"brand": "Michigan Pneumatic",
	"model": "MP-ERD60-783",
	"mpn": "MP-ERD60-783",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-michigan-pneumatic-mp-erd60-783.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-ERD60-783",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/2-Clay%20Diggers_Pavement-Breakers_Rock-Drills_v2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-erd60-783",
		"label": "Référence MP-ERD60-783",
		"distinguishingAttributes": {
			"reference": "MP-ERD60-783",
			"Masse publiée": "60 lbs",
			"Ligne technique constructeur": "MP-ERD60-783 7/8\" Hex x 3-1/4\" 3\" 2-5/8\" 2100 22-3/8\" 60 lbs 3/4\" 3/4\" 92 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-ERD60-783. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 60 lbs. Ligne technique constructeur : MP-ERD60-783 7/8\" Hex x 3-1/4\" 3\" 2-5/8\" 2100 22-3/8\" 60 lbs 3/4\" 3/4\" 92 cfm.",
		"verifiedFacts": [
			"Masse publiée : 60 lbs.",
			"Ligne technique constructeur : MP-ERD60-783 7/8\" Hex x 3-1/4\" 3\" 2-5/8\" 2100 22-3/8\" 60 lbs 3/4\" 3/4\" 92 cfm."
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
			"value": "60 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-2-pdf-p7"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-ERD60-783 7/8\" Hex x 3-1/4\" 3\" 2-5/8\" 2100 22-3/8\" 60 lbs 3/4\" 3/4\" 92 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-2-pdf-p7"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-2-pdf-p7"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "92 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-2-pdf-p7"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-2-pdf-p7",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/2-Clay%20Diggers_Pavement-Breakers_Rock-Drills_v2.pdf#page=7",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 2, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0b2ca87443deae9dcee91a027835f636714c90bee64bce363e2c72c7ecd031bf. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-2-pdf-p7"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-2-pdf-p7"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-2-pdf-p7"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
