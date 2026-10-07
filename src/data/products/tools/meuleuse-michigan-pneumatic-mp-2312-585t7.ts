import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-michigan-pneumatic-mp-2312-585t7",
	"slug": "meuleuse-michigan-pneumatic-mp-2312-585t7",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Michigan Pneumatic MP-2312-585T7",
	"brand": "Michigan Pneumatic",
	"model": "MP-2312-585T7",
	"mpn": "MP-2312-585T7",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-michigan-pneumatic-mp-2312-585t7.webp",
		"alt": "Repères techniques : Michigan Pneumatic MP-2312-585T7",
		"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/10-Grinders_V3.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "michigan-pneumatic-mp-2312-585t7",
		"label": "Référence MP-2312-585T7",
		"distinguishingAttributes": {
			"reference": "MP-2312-585T7",
			"Masse publiée": "4.5 lbs",
			"Ligne technique constructeur": "MP-2312-585T7 5\" Type 27 12,000 rpm 5/8\"-11 2.3 10\" 4.5 lbs 3/8\" 1/2\" 35 cfm"
		}
	},
	"editorial": {
		"overview": "Michigan Pneumatic MP-2312-585T7. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 4.5 lbs. Ligne technique constructeur : MP-2312-585T7 5\" Type 27 12,000 rpm 5/8\"-11 2.3 10\" 4.5 lbs 3/8\" 1/2\" 35 cfm.",
		"verifiedFacts": [
			"Masse publiée : 4.5 lbs.",
			"Ligne technique constructeur : MP-2312-585T7 5\" Type 27 12,000 rpm 5/8\"-11 2.3 10\" 4.5 lbs 3/8\" 1/2\" 35 cfm."
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
			"value": "4.5 lbs",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p19"
			]
		},
		{
			"label": "Ligne technique constructeur",
			"value": "MP-2312-585T7 5\" Type 27 12,000 rpm 5/8\"-11 2.3 10\" 4.5 lbs 3/8\" 1/2\" 35 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p19"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Aucune pression de mesure de cette ligne de consommation n’est établie dans le tableau.",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p19"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "35 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-michigan-10-pdf-p19"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-michigan-10-pdf-p19",
			"sourceUrl": "https://www.michiganpneumatic.com/pdf/catalog-files/10-Grinders_V3.pdf#page=19",
			"sourceLabel": "Michigan Pneumatic, catalogue constructeur, section 10, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 68a07091e12cedba8fd2c428b652540aa3e7b34b0fa2da703b0f9115ca7e8705. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-michigan-10-pdf-p19"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-michigan-10-pdf-p19"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-michigan-10-pdf-p19"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
