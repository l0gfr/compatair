import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-michigan-pneumatic-mp-1260-c8",
	"slug": "meuleuse-michigan-pneumatic-mp-1260-c8",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Michigan Pneumatic MP-1260-C8",
	"brand": "Michigan Pneumatic",
	"model": "MP-1260-C8",
	"mpn": "MP-1260-C8",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-michigan-pneumatic-mp-1260-c8.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-1260-C8",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/10-Grinders_V3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-1260-c8",
		"label": "Référence MP-1260-C8",
		"distinguishingAttributes": {
			"reference": "MP-1260-C8",
			"Masse publiée": "0.8 lbs",
			"Ligne technique constructeur": "MP-1260-C8 Straight 1/8\" Collet 60,000 rpm 6-1/16\" 0.8 lbs 1/4\" 1/4\" 1.8 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-1260-C8. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 0.8 lbs. Ligne technique constructeur : MP-1260-C8 Straight 1/8\" Collet 60,000 rpm 6-1/16\" 0.8 lbs 1/4\" 1/4\" 1.8 cfm.",
		"verifiedFacts": [
			"Masse publiée : 0.8 lbs.",
			"Ligne technique constructeur : MP-1260-C8 Straight 1/8\" Collet 60,000 rpm 6-1/16\" 0.8 lbs 1/4\" 1/4\" 1.8 cfm."
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
			"value": "0.8 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p28"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-1260-C8 Straight 1/8\" Collet 60,000 rpm 6-1/16\" 0.8 lbs 1/4\" 1/4\" 1.8 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p28"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p28"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "1.8 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p28"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-10-pdf-p28",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/10-Grinders_V3.pdf#page=28",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 10, page PDF 28",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 68a07091e12cedba8fd2c428b652540aa3e7b34b0fa2da703b0f9115ca7e8705. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-10-pdf-p28"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-10-pdf-p28"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-10-pdf-p28"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
