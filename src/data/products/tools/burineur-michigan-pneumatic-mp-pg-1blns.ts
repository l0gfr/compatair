import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "burineur-michigan-pneumatic-mp-pg-1blns",
	"slug": "burineur-michigan-pneumatic-mp-pg-1blns",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Michigan Pneumatic MP-PG-1BLNS",
	"brand": "Michigan Pneumatic",
	"model": "MP-PG-1BLNS",
	"mpn": "MP-PG-1BLNS",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-michigan-pneumatic-mp-pg-1blns.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-PG-1BLNS",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/4-Scalers_V2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-pg-1blns",
		"label": "Référence MP-PG-1BLNS",
		"distinguishingAttributes": {
			"reference": "MP-PG-1BLNS",
			"Masse publiée": "6.9 lbs",
			"Ligne technique constructeur": "MP-PG-1BLNS Pistol 1-1/2\" 4800 18-1/4\" 6.9 lbs 1/4\" 3/8\" 15 cfm GAZ-751-MPT"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-PG-1BLNS. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 6.9 lbs. Ligne technique constructeur : MP-PG-1BLNS Pistol 1-1/2\" 4800 18-1/4\" 6.9 lbs 1/4\" 3/8\" 15 cfm GAZ-751-MPT.",
		"verifiedFacts": [
			"Masse publiée : 6.9 lbs.",
			"Ligne technique constructeur : MP-PG-1BLNS Pistol 1-1/2\" 4800 18-1/4\" 6.9 lbs 1/4\" 3/8\" 15 cfm GAZ-751-MPT."
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
			"value": "6.9 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-4-pdf-p5"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-PG-1BLNS Pistol 1-1/2\" 4800 18-1/4\" 6.9 lbs 1/4\" 3/8\" 15 cfm GAZ-751-MPT",
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
			"value": "15 cfm",
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
