import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "lime-alternative-michigan-pneumatic-mp-4160-l07",
	"slug": "lime-alternative-michigan-pneumatic-mp-4160-l07",
	"categoryId": "lime-alternative",
	"category": "lime-alternative",
	"label": "Michigan Pneumatic MP-4160-L07",
	"brand": "Michigan Pneumatic",
	"model": "MP-4160-L07",
	"mpn": "MP-4160-L07",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/lime-alternative-michigan-pneumatic-mp-4160-l07.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-4160-L07",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/14-Specialty%20Tools_v2.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-4160-l07",
		"label": "Référence MP-4160-L07",
		"distinguishingAttributes": {
			"reference": "MP-4160-L07",
			"Masse publiée": "0.44 lbs",
			"Ligne technique constructeur": "MP-4160-L07 0.7\" 19,000 spm 7.3\" 0.44 lbs 1/4\" 3/8\" 1.6 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-4160-L07. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 0.44 lbs. Ligne technique constructeur : MP-4160-L07 0.7\" 19,000 spm 7.3\" 0.44 lbs 1/4\" 3/8\" 1.6 cfm.",
		"verifiedFacts": [
			"Masse publiée : 0.44 lbs.",
			"Ligne technique constructeur : MP-4160-L07 0.7\" 19,000 spm 7.3\" 0.44 lbs 1/4\" 3/8\" 1.6 cfm."
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
			"value": "0.44 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-14-pdf-p3"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-4160-L07 0.7\" 19,000 spm 7.3\" 0.44 lbs 1/4\" 3/8\" 1.6 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-14-pdf-p3"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-14-pdf-p3"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "1.6 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-14-pdf-p3"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-14-pdf-p3",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/14-Specialty%20Tools_v2.pdf#page=3",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 14, page PDF 3",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 79cb397c5a27dbf6fdb30b158a554e1e6e03c232011a7fe84cfdec1610e55bb2. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-14-pdf-p3"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-14-pdf-p3"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-14-pdf-p3"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
