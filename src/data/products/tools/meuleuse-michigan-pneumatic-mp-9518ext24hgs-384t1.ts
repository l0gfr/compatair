import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-michigan-pneumatic-mp-9518ext24hgs-384t1",
	"slug": "meuleuse-michigan-pneumatic-mp-9518ext24hgs-384t1",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Michigan Pneumatic MP-9518EXT24HGS-384T1",
	"brand": "Michigan Pneumatic",
	"model": "MP-9518EXT24HGS-384T1",
	"mpn": "MP-9518EXT24HGS-384T1",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-michigan-pneumatic-mp-9518ext24hgs-384t1.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-9518EXT24HGS-384T1",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/10-Grinders_V3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-9518ext24hgs-384t1",
		"label": "Référence MP-9518EXT24HGS-384T1",
		"distinguishingAttributes": {
			"reference": "MP-9518EXT24HGS-384T1",
			"Masse publiée": "7 lbs",
			"Ligne technique constructeur": "MP-9518EXT24HGS-384T1 4\" Type 1 Wheel 3/8\"-24 Thread Side 18,000 0.95 30-3/4\" 7 lbs 1/4\" 3/8\" 30 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-9518EXT24HGS-384T1. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 7 lbs. Ligne technique constructeur : MP-9518EXT24HGS-384T1 4\" Type 1 Wheel 3/8\"-24 Thread Side 18,000 0.95 30-3/4\" 7 lbs 1/4\" 3/8\" 30 cfm.",
		"verifiedFacts": [
			"Masse publiée : 7 lbs.",
			"Ligne technique constructeur : MP-9518EXT24HGS-384T1 4\" Type 1 Wheel 3/8\"-24 Thread Side 18,000 0.95 30-3/4\" 7 lbs 1/4\" 3/8\" 30 cfm."
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
			"value": "7 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p17"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-9518EXT24HGS-384T1 4\" Type 1 Wheel 3/8\"-24 Thread Side 18,000 0.95 30-3/4\" 7 lbs 1/4\" 3/8\" 30 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p17"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p17"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "30 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p17"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-10-pdf-p17",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/10-Grinders_V3.pdf#page=17",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 10, page PDF 17",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 68a07091e12cedba8fd2c428b652540aa3e7b34b0fa2da703b0f9115ca7e8705. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-10-pdf-p17"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-10-pdf-p17"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-10-pdf-p17"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
