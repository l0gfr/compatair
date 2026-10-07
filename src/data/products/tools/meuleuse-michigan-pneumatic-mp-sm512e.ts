import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-michigan-pneumatic-mp-sm512e",
	"slug": "meuleuse-michigan-pneumatic-mp-sm512e",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Michigan Pneumatic MP-SM512E",
	"brand": "Michigan Pneumatic",
	"model": "MP-SM512E",
	"mpn": "MP-SM512E",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-michigan-pneumatic-mp-sm512e.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-SM512E",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/10-Grinders_V3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-sm512e",
		"label": "Référence MP-SM512E",
		"distinguishingAttributes": {
			"reference": "MP-SM512E",
			"Masse publiée": "2.6 lbs",
			"Ligne technique constructeur": "MP-SM512E Straight Rear 1/4\" 23,000 rpm 0.25 13-1/4\" 2.6 lbs 1/4\" 3/8\" 4 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-SM512E. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 2.6 lbs. Ligne technique constructeur : MP-SM512E Straight Rear 1/4\" 23,000 rpm 0.25 13-1/4\" 2.6 lbs 1/4\" 3/8\" 4 cfm.",
		"verifiedFacts": [
			"Masse publiée : 2.6 lbs.",
			"Ligne technique constructeur : MP-SM512E Straight Rear 1/4\" 23,000 rpm 0.25 13-1/4\" 2.6 lbs 1/4\" 3/8\" 4 cfm."
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
				"october2b-tools-oct2b-michigan-10-pdf-p27"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-SM512E Straight Rear 1/4\" 23,000 rpm 0.25 13-1/4\" 2.6 lbs 1/4\" 3/8\" 4 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p27"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p27"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p27"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-10-pdf-p27",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/10-Grinders_V3.pdf#page=27",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 10, page PDF 27",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 68a07091e12cedba8fd2c428b652540aa3e7b34b0fa2da703b0f9115ca7e8705. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-10-pdf-p27"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-10-pdf-p27"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-10-pdf-p27"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
