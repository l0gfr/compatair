import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-michigan-pneumatic-mp-3765-st",
	"slug": "ponceuse-orbitale-michigan-pneumatic-mp-3765-st",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Michigan Pneumatic MP-3765-ST",
	"brand": "Michigan Pneumatic",
	"model": "MP-3765-ST",
	"mpn": "MP-3765-ST",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-michigan-pneumatic-mp-3765-st.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-3765-ST",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/11-Sanders_V2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-3765-st",
		"label": "Référence MP-3765-ST",
		"distinguishingAttributes": {
			"reference": "MP-3765-ST",
			"Masse publiée": "4.75 lbs",
			"Ligne technique constructeur": "MP-3765-ST 7\" 5/8\"-11 4500 rpm 1 4\" 12-3/4\" 4.75 lbs 1/4\" 3/8\" 9 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-3765-ST. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 4.75 lbs. Ligne technique constructeur : MP-3765-ST 7\" 5/8\"-11 4500 rpm 1 4\" 12-3/4\" 4.75 lbs 1/4\" 3/8\" 9 cfm.",
		"verifiedFacts": [
			"Masse publiée : 4.75 lbs.",
			"Ligne technique constructeur : MP-3765-ST 7\" 5/8\"-11 4500 rpm 1 4\" 12-3/4\" 4.75 lbs 1/4\" 3/8\" 9 cfm."
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
			"value": "4.75 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-11-pdf-p4"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-3765-ST 7\" 5/8\"-11 4500 rpm 1 4\" 12-3/4\" 4.75 lbs 1/4\" 3/8\" 9 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-11-pdf-p4"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-11-pdf-p4"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "9 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-11-pdf-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-11-pdf-p4",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/11-Sanders_V2.pdf#page=4",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 11, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c7f8feaec707022985699c2229fe0d3eb9221d4f486b03528ec4ef2fcb25a46e. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-11-pdf-p4"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-11-pdf-p4"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-11-pdf-p4"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
