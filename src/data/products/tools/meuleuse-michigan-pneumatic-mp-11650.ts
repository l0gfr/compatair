import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-michigan-pneumatic-mp-11650",
	"slug": "meuleuse-michigan-pneumatic-mp-11650",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Michigan Pneumatic MP-11650",
	"brand": "Michigan Pneumatic",
	"model": "MP-11650",
	"mpn": "MP-11650",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-michigan-pneumatic-mp-11650.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-11650",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/10-Grinders_V3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-11650",
		"label": "Référence MP-11650",
		"distinguishingAttributes": {
			"reference": "MP-11650",
			"Masse publiée": "5.0 lbs",
			"Ligne technique constructeur": "MP-11650 Angle Side – 5/8\"-11 5\" Type 27 11,000 rpm 0.9 3-1/4\" 7-3/4\" 5.0 lbs 1/4\" 3/8\" 21.5 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-11650. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 5.0 lbs. Ligne technique constructeur : MP-11650 Angle Side – 5/8\"-11 5\" Type 27 11,000 rpm 0.9 3-1/4\" 7-3/4\" 5.0 lbs 1/4\" 3/8\" 21.5 cfm.",
		"verifiedFacts": [
			"Masse publiée : 5.0 lbs.",
			"Ligne technique constructeur : MP-11650 Angle Side – 5/8\"-11 5\" Type 27 11,000 rpm 0.9 3-1/4\" 7-3/4\" 5.0 lbs 1/4\" 3/8\" 21.5 cfm."
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
			"value": "5.0 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p24"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-11650 Angle Side – 5/8\"-11 5\" Type 27 11,000 rpm 0.9 3-1/4\" 7-3/4\" 5.0 lbs 1/4\" 3/8\" 21.5 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p24"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p24"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "21.5 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p24"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-10-pdf-p24",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/10-Grinders_V3.pdf#page=24",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 10, page PDF 24",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 68a07091e12cedba8fd2c428b652540aa3e7b34b0fa2da703b0f9115ca7e8705. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-10-pdf-p24"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-10-pdf-p24"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-10-pdf-p24"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
