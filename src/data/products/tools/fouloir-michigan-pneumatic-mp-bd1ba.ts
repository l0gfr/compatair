import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fouloir-michigan-pneumatic-mp-bd1ba",
	"slug": "fouloir-michigan-pneumatic-mp-bd1ba",
	"categoryId": "fouloir",
	"category": "fouloir",
	"label": "Michigan Pneumatic MP-BD1BA",
	"brand": "Michigan Pneumatic",
	"model": "MP-BD1BA",
	"mpn": "MP-BD1BA",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/fouloir-michigan-pneumatic-mp-bd1ba.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-BD1BA",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/5-Rammers_V3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-bd1ba",
		"label": "Référence MP-BD1BA",
		"distinguishingAttributes": {
			"reference": "MP-BD1BA",
			"Masse publiée": "10 lbs",
			"Ligne technique constructeur": "MP-BD1BA 2-3/8\" Rubber 802 1\" 4\" 1240 20-1/4\" 10 lbs 3/8\" 1/2\" 19 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-BD1BA. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 10 lbs. Ligne technique constructeur : MP-BD1BA 2-3/8\" Rubber 802 1\" 4\" 1240 20-1/4\" 10 lbs 3/8\" 1/2\" 19 cfm.",
		"verifiedFacts": [
			"Masse publiée : 10 lbs.",
			"Ligne technique constructeur : MP-BD1BA 2-3/8\" Rubber 802 1\" 4\" 1240 20-1/4\" 10 lbs 3/8\" 1/2\" 19 cfm."
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
			"value": "10 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-5-pdf-p2"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-BD1BA 2-3/8\" Rubber 802 1\" 4\" 1240 20-1/4\" 10 lbs 3/8\" 1/2\" 19 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-5-pdf-p2"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-5-pdf-p2"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "19 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-5-pdf-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-5-pdf-p2",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/5-Rammers_V3.pdf#page=2",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 5, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : daa0a640fccce93e6ce22aa4d173f30872ad77ea4f3d710917b36dcf6b85bab5. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-5-pdf-p2"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-5-pdf-p2"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-5-pdf-p2"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
