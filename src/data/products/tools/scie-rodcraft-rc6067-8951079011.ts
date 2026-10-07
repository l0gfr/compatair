import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "scie-rodcraft-rc6067-8951079011",
	"slug": "scie-rodcraft-rc6067-8951079011",
	"categoryId": "scie",
	"category": "scie",
	"label": "Rodcraft RC6067 (réf. 8951079011)",
	"brand": "Rodcraft",
	"model": "RC6067",
	"mpn": "8951079011",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.3
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-rodcraft-rc6067-8951079011.webp",
		"alt": "Repères techniques : Rodcraft RC6067 (réf. 8951079011)",
		"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodcraft-rc6067",
		"label": "Référence 8951079011",
		"distinguishingAttributes": {
			"reference": "8951079011",
			"Masse publiée": "0.51 kg",
			"Dimensions publiées": "262x38 mm"
		}
	},
	"editorial": {
		"overview": "Rodcraft RC6067 (réf. 8951079011). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 0.51 kg. Dimensions publiées : 262x38 mm.",
		"verifiedFacts": [
			"Masse publiée : 0.51 kg.",
			"Dimensions publiées : 262x38 mm.",
			"Diamètre de tuyau : 8 mm.",
			"Course : 10 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "0.51 kg",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p50"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "262x38 mm",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p50"
			]
		},
		{
			"label": "Diamètre de tuyau",
			"value": "8 mm",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p50"
			]
		},
		{
			"label": "Course",
			"value": "10 mm",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p50"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "All technical data is based on a tool incoming pressure of max. 6.3 bar (90 psi), glossary PDF 4.",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p50",
				"october2-tools-rodcraft-catalog-p4"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "150 L/min",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p50",
				"october2-tools-rodcraft-catalog-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rodcraft-catalog-p50",
			"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf#page=50",
			"sourceLabel": "Rodcraft Tools and Workshop Equipment 2017-2018, catalogue fabricant, page PDF 50",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c10fd37c2e1adf9ac34431eb523b1933644b83f1cec85b376d30cd77aab01ef3. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir. Portée revue le 2026-10-02 : plafond d’entrée du glossaire page PDF 4, pression de mesure de la consommation non établie."
		},
		{
			"id": "october2-tools-rodcraft-catalog-p4",
			"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf#page=4",
			"sourceLabel": "Rodcraft Tools and Workshop Equipment 2017-2018, catalogue fabricant, page PDF 4",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c10fd37c2e1adf9ac34431eb523b1933644b83f1cec85b376d30cd77aab01ef3. Document complémentaire de la référence exacte, sans essai CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rodcraft-catalog-p50"
		],
		"workingPressureBar": [
			"october2-tools-rodcraft-catalog-p50",
			"october2-tools-rodcraft-catalog-p4"
		],
		"demandExplanation": [
			"october2-tools-rodcraft-catalog-p50"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
