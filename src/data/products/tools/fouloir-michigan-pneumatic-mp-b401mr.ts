import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "fouloir-michigan-pneumatic-mp-b401mr",
	"slug": "fouloir-michigan-pneumatic-mp-b401mr",
	"categoryId": "fouloir",
	"category": "fouloir",
	"label": "Michigan Pneumatic MP-B401MR",
	"brand": "Michigan Pneumatic",
	"model": "MP-B401MR",
	"mpn": "MP-B401MR",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/fouloir-michigan-pneumatic-mp-b401mr.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-B401MR",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/5-Rammers_V3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-b401mr",
		"label": "Référence MP-B401MR",
		"distinguishingAttributes": {
			"reference": "MP-B401MR",
			"Masse publiée": "4.6 lbs",
			"Ligne technique constructeur": "MP-B401MR 2-3/8\" Rubber 802 1-3/16\" 9/16\" 3500 3-5/16\" 19-1/4\" 4.6 lbs 3/8\" 3/8\" 14 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-B401MR. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 4.6 lbs. Ligne technique constructeur : MP-B401MR 2-3/8\" Rubber 802 1-3/16\" 9/16\" 3500 3-5/16\" 19-1/4\" 4.6 lbs 3/8\" 3/8\" 14 cfm.",
		"verifiedFacts": [
			"Masse publiée : 4.6 lbs.",
			"Ligne technique constructeur : MP-B401MR 2-3/8\" Rubber 802 1-3/16\" 9/16\" 3500 3-5/16\" 19-1/4\" 4.6 lbs 3/8\" 3/8\" 14 cfm."
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
			"value": "4.6 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-5-pdf-p3"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-B401MR 2-3/8\" Rubber 802 1-3/16\" 9/16\" 3500 3-5/16\" 19-1/4\" 4.6 lbs 3/8\" 3/8\" 14 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-5-pdf-p3"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-5-pdf-p3"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "14 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-5-pdf-p3"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-5-pdf-p3",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/5-Rammers_V3.pdf#page=3",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 5, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : daa0a640fccce93e6ce22aa4d173f30872ad77ea4f3d710917b36dcf6b85bab5. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-5-pdf-p3"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-5-pdf-p3"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-5-pdf-p3"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
