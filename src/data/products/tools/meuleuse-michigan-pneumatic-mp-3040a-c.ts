import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-michigan-pneumatic-mp-3040a-c",
	"slug": "meuleuse-michigan-pneumatic-mp-3040a-c",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Michigan Pneumatic MP-3040A-C",
	"brand": "Michigan Pneumatic",
	"model": "MP-3040A-C",
	"mpn": "MP-3040A-C",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-michigan-pneumatic-mp-3040a-c.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-3040A-C",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/10-Grinders_V3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-3040a-c",
		"label": "Référence MP-3040A-C",
		"distinguishingAttributes": {
			"reference": "MP-3040A-C",
			"Masse publiée": "2.0 lbs",
			"Ligne technique constructeur": "MP-3040A-C Angle Side 1/4\" – – 13,500 rpm 0.7 2-1/2\" 8\" 2.0 lbs 1/4\" 3/8\" 10 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-3040A-C. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 2.0 lbs. Ligne technique constructeur : MP-3040A-C Angle Side 1/4\" – – 13,500 rpm 0.7 2-1/2\" 8\" 2.0 lbs 1/4\" 3/8\" 10 cfm.",
		"verifiedFacts": [
			"Masse publiée : 2.0 lbs.",
			"Ligne technique constructeur : MP-3040A-C Angle Side 1/4\" – – 13,500 rpm 0.7 2-1/2\" 8\" 2.0 lbs 1/4\" 3/8\" 10 cfm."
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
			"value": "2.0 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p25"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-3040A-C Angle Side 1/4\" – – 13,500 rpm 0.7 2-1/2\" 8\" 2.0 lbs 1/4\" 3/8\" 10 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p25"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p25"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "10 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p25"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-10-pdf-p25",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/10-Grinders_V3.pdf#page=25",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 10, page PDF 25",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 68a07091e12cedba8fd2c428b652540aa3e7b34b0fa2da703b0f9115ca7e8705. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-10-pdf-p25"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-10-pdf-p25"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-10-pdf-p25"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
