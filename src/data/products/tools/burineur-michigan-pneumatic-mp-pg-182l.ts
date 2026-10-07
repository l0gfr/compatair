import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-michigan-pneumatic-mp-pg-182l",
	"slug": "burineur-michigan-pneumatic-mp-pg-182l",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Michigan Pneumatic MP-PG-182L",
	"brand": "Michigan Pneumatic",
	"model": "MP-PG-182L",
	"mpn": "MP-PG-182L",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-michigan-pneumatic-mp-pg-182l.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-PG-182L",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/4-Scalers_V2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-pg-182l",
		"label": "Référence MP-PG-182L",
		"distinguishingAttributes": {
			"reference": "MP-PG-182L",
			"Masse publiée": "5.5 lbs",
			"Ligne technique constructeur": "MP-PG-182L Pistol 1-1/16\" 4000 14-3/4\" 5.5 lbs 1/4\" 3/8\" 13 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-PG-182L. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 5.5 lbs. Ligne technique constructeur : MP-PG-182L Pistol 1-1/16\" 4000 14-3/4\" 5.5 lbs 1/4\" 3/8\" 13 cfm.",
		"verifiedFacts": [
			"Masse publiée : 5.5 lbs.",
			"Ligne technique constructeur : MP-PG-182L Pistol 1-1/16\" 4000 14-3/4\" 5.5 lbs 1/4\" 3/8\" 13 cfm."
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
			"value": "5.5 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-4-pdf-p5"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-PG-182L Pistol 1-1/16\" 4000 14-3/4\" 5.5 lbs 1/4\" 3/8\" 13 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-4-pdf-p5"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-4-pdf-p5"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "13 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-4-pdf-p5"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-4-pdf-p5",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/4-Scalers_V2.pdf#page=5",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 4, page PDF 5",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 80c53e6f90b62f8a07009326cdb63ea8b3021669882c8e8376917e5859155804. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-4-pdf-p5"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-4-pdf-p5"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-4-pdf-p5"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
