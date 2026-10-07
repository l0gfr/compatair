import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "marteau-a-river-michigan-pneumatic-mp-30xg",
	"slug": "marteau-a-river-michigan-pneumatic-mp-30xg",
	"categoryId": "marteau-a-river",
	"category": "marteau-a-river",
	"label": "Michigan Pneumatic MP-30XG",
	"brand": "Michigan Pneumatic",
	"model": "MP-30XG",
	"mpn": "MP-30XG",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/marteau-a-river-michigan-pneumatic-mp-30xg.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-30XG",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/6-Aircraft%20Riveters_v2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-30xg",
		"label": "Référence MP-30XG",
		"distinguishingAttributes": {
			"reference": "MP-30XG",
			"Masse publiée": "4.0 lbs",
			"Ligne technique constructeur": "MP-30XG Pistol 0.401 3/16\" 5/32\" 1/2\" x 2-7/8\" 2160 7-5/16\"10-13/16\"4.0 lbs 1/4\" 3/8\" 4 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-30XG. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 4.0 lbs. Ligne technique constructeur : MP-30XG Pistol 0.401 3/16\" 5/32\" 1/2\" x 2-7/8\" 2160 7-5/16\"10-13/16\"4.0 lbs 1/4\" 3/8\" 4 cfm.",
		"verifiedFacts": [
			"Masse publiée : 4.0 lbs.",
			"Ligne technique constructeur : MP-30XG Pistol 0.401 3/16\" 5/32\" 1/2\" x 2-7/8\" 2160 7-5/16\"10-13/16\"4.0 lbs 1/4\" 3/8\" 4 cfm."
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
			"value": "4.0 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-6-pdf-p3"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-30XG Pistol 0.401 3/16\" 5/32\" 1/2\" x 2-7/8\" 2160 7-5/16\"10-13/16\"4.0 lbs 1/4\" 3/8\" 4 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-6-pdf-p3"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-6-pdf-p3"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-6-pdf-p3"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-6-pdf-p3",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/6-Aircraft%20Riveters_v2.pdf#page=3",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 6, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : db4ad3c3e258481ba1d19f3b9c6afbd624eea583ec1d6652b495921b7a8dbe80. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-6-pdf-p3"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-6-pdf-p3"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-6-pdf-p3"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
