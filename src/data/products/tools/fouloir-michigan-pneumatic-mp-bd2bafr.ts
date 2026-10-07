import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fouloir-michigan-pneumatic-mp-bd2bafr",
	"slug": "fouloir-michigan-pneumatic-mp-bd2bafr",
	"categoryId": "fouloir",
	"category": "fouloir",
	"label": "Michigan Pneumatic MP-BD2BAFR",
	"brand": "Michigan Pneumatic",
	"model": "MP-BD2BAFR",
	"mpn": "MP-BD2BAFR",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/fouloir-michigan-pneumatic-mp-bd2bafr.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-BD2BAFR",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/5-Rammers_V3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-bd2bafr",
		"label": "Référence MP-BD2BAFR",
		"distinguishingAttributes": {
			"reference": "MP-BD2BAFR",
			"Masse publiée": "7.125 lbs",
			"Ligne technique constructeur": "MP-BD2BAFR 1 x 2-7/8\" Peen 802 1\" 2-1/2\" 1725 16-1/4\" 7.125 lbs 3/8\" 1/2\" 15 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-BD2BAFR. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 7.125 lbs. Ligne technique constructeur : MP-BD2BAFR 1 x 2-7/8\" Peen 802 1\" 2-1/2\" 1725 16-1/4\" 7.125 lbs 3/8\" 1/2\" 15 cfm.",
		"verifiedFacts": [
			"Masse publiée : 7.125 lbs.",
			"Ligne technique constructeur : MP-BD2BAFR 1 x 2-7/8\" Peen 802 1\" 2-1/2\" 1725 16-1/4\" 7.125 lbs 3/8\" 1/2\" 15 cfm."
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
			"value": "7.125 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-5-pdf-p8"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-BD2BAFR 1 x 2-7/8\" Peen 802 1\" 2-1/2\" 1725 16-1/4\" 7.125 lbs 3/8\" 1/2\" 15 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-5-pdf-p8"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-5-pdf-p8"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "15 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-5-pdf-p8"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-5-pdf-p8",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/5-Rammers_V3.pdf#page=8",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 5, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : daa0a640fccce93e6ce22aa4d173f30872ad77ea4f3d710917b36dcf6b85bab5. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-5-pdf-p8"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-5-pdf-p8"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-5-pdf-p8"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
