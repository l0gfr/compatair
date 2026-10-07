import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-michigan-pneumatic-mp-rb61-j-nep",
	"slug": "burineur-michigan-pneumatic-mp-rb61-j-nep",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Michigan Pneumatic MP-RB61-J-NEP",
	"brand": "Michigan Pneumatic",
	"model": "MP-RB61-J-NEP",
	"mpn": "MP-RB61-J-NEP",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-michigan-pneumatic-mp-rb61-j-nep.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-RB61-J-NEP",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/3-Rivet%20Busters_Chipping-Hammers_v2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-rb61-j-nep",
		"label": "Référence MP-RB61-J-NEP",
		"distinguishingAttributes": {
			"reference": "MP-RB61-J-NEP",
			"Masse publiée": "25.0 lbs",
			"Ligne technique constructeur": "MP-RB61-J-NEP* 2000 6\" 1-1/16\" 1300 20-1/4\" 25.0 lbs 1/2\" 1/2\" 28 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-RB61-J-NEP. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 25.0 lbs. Ligne technique constructeur : MP-RB61-J-NEP* 2000 6\" 1-1/16\" 1300 20-1/4\" 25.0 lbs 1/2\" 1/2\" 28 cfm.",
		"verifiedFacts": [
			"Masse publiée : 25.0 lbs.",
			"Ligne technique constructeur : MP-RB61-J-NEP* 2000 6\" 1-1/16\" 1300 20-1/4\" 25.0 lbs 1/2\" 1/2\" 28 cfm."
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
			"value": "25.0 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-3-pdf-p5"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-RB61-J-NEP* 2000 6\" 1-1/16\" 1300 20-1/4\" 25.0 lbs 1/2\" 1/2\" 28 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-3-pdf-p5"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-3-pdf-p5"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "28 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-3-pdf-p5"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-3-pdf-p5",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/3-Rivet%20Busters_Chipping-Hammers_v2.pdf#page=5",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 3, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : a11683057b26ed84ebb5e32d6e57b8a71d893d427fac414b42f396c07bdb6908. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-3-pdf-p5"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-3-pdf-p5"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-3-pdf-p5"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
