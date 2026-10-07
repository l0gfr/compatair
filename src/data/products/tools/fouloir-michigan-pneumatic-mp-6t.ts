import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fouloir-michigan-pneumatic-mp-6t",
	"slug": "fouloir-michigan-pneumatic-mp-6t",
	"categoryId": "fouloir",
	"category": "fouloir",
	"label": "Michigan Pneumatic MP-6T",
	"brand": "Michigan Pneumatic",
	"model": "MP-6T",
	"mpn": "MP-6T",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/fouloir-michigan-pneumatic-mp-6t.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-6T",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/5-Rammers_V3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-6t",
		"label": "Référence MP-6T",
		"distinguishingAttributes": {
			"reference": "MP-6T",
			"Masse publiée": "39.5 lbs",
			"Ligne technique constructeur": "MP-6T 5-3/4\" Steel T 1-1/2\" 5-1/2\" 750 49\" 39.5 lbs 1/2\" 1/2\" 38 cfm 94558"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-6T. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 39.5 lbs. Ligne technique constructeur : MP-6T 5-3/4\" Steel T 1-1/2\" 5-1/2\" 750 49\" 39.5 lbs 1/2\" 1/2\" 38 cfm 94558.",
		"verifiedFacts": [
			"Masse publiée : 39.5 lbs.",
			"Ligne technique constructeur : MP-6T 5-3/4\" Steel T 1-1/2\" 5-1/2\" 750 49\" 39.5 lbs 1/2\" 1/2\" 38 cfm 94558."
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
			"value": "39.5 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-5-pdf-p6"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-6T 5-3/4\" Steel T 1-1/2\" 5-1/2\" 750 49\" 39.5 lbs 1/2\" 1/2\" 38 cfm 94558",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-5-pdf-p6"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-5-pdf-p6"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "38 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-5-pdf-p6"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-5-pdf-p6",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/5-Rammers_V3.pdf#page=6",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 5, page PDF 6",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : daa0a640fccce93e6ce22aa4d173f30872ad77ea4f3d710917b36dcf6b85bab5. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-5-pdf-p6"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-5-pdf-p6"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-5-pdf-p6"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
