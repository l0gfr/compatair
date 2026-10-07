import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-michigan-pneumatic-mp-72833-2",
	"slug": "ponceuse-orbitale-michigan-pneumatic-mp-72833-2",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Michigan Pneumatic MP-72833-2",
	"brand": "Michigan Pneumatic",
	"model": "MP-72833-2",
	"mpn": "MP-72833-2",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-michigan-pneumatic-mp-72833-2.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-72833-2",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/11-Sanders_V2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-72833-2",
		"label": "Référence MP-72833-2",
		"distinguishingAttributes": {
			"reference": "MP-72833-2",
			"Masse publiée": "1.5 lbs",
			"Ligne technique constructeur": "MP-72833-2 2\" 1/4\"-20 15,000 rpm 4-5/8\" 1.5 lbs 1/4\" 3/8\" 4 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-72833-2. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 1.5 lbs. Ligne technique constructeur : MP-72833-2 2\" 1/4\"-20 15,000 rpm 4-5/8\" 1.5 lbs 1/4\" 3/8\" 4 cfm.",
		"verifiedFacts": [
			"Masse publiée : 1.5 lbs.",
			"Ligne technique constructeur : MP-72833-2 2\" 1/4\"-20 15,000 rpm 4-5/8\" 1.5 lbs 1/4\" 3/8\" 4 cfm."
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
			"value": "1.5 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-11-pdf-p2"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-72833-2 2\" 1/4\"-20 15,000 rpm 4-5/8\" 1.5 lbs 1/4\" 3/8\" 4 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-11-pdf-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-11-pdf-p2"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-11-pdf-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-11-pdf-p2",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/11-Sanders_V2.pdf#page=2",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 11, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c7f8feaec707022985699c2229fe0d3eb9221d4f486b03528ec4ef2fcb25a46e. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-11-pdf-p2"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-11-pdf-p2"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-11-pdf-p2"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
