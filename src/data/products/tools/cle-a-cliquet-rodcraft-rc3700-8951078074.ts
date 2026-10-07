import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-rodcraft-rc3700-8951078074",
	"slug": "cle-a-cliquet-rodcraft-rc3700-8951078074",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Rodcraft RC3700 (réf. 8951078074)",
	"brand": "Rodcraft",
	"model": "RC3700",
	"mpn": "8951078074",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.3
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-rodcraft-rc3700-8951078074.webp",
		"alt": "Repères techniques : Rodcraft RC3700 (réf. 8951078074)",
		"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodcraft-rc3700",
		"label": "Référence 8951078074",
		"distinguishingAttributes": {
			"reference": "8951078074",
			"Vitesse publiée": "320 min-1",
			"Masse publiée": "1.6 kg"
		}
	},
	"editorial": {
		"overview": "Rodcraft RC3700 (réf. 8951078074). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse publiée : 320 min-1. Masse publiée : 1.6 kg.",
		"verifiedFacts": [
			"Vitesse publiée : 320 min-1.",
			"Masse publiée : 1.6 kg.",
			"Dimensions publiées : 312x52x52 mm.",
			"Diamètre de tuyau : 8 mm.",
			"Carré de sortie : 1/2\"."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse publiée",
			"value": "320 min-1",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p21"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.6 kg",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p21"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "312x52x52 mm",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p21"
			]
		},
		{
			"label": "Diamètre de tuyau",
			"value": "8 mm",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p21"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "1/2\"",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p21"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "All technical data is based on a tool incoming pressure of max. 6.3 bar (90 psi), glossary PDF 4.",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p21",
				"october2-tools-rodcraft-catalog-p4"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "130 L/min",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p21",
				"october2-tools-rodcraft-catalog-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rodcraft-catalog-p21",
			"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf#page=21",
			"sourceLabel": "Rodcraft Tools and Workshop Equipment 2017-2018, catalogue fabricant, page PDF 21",
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
			"october2-tools-rodcraft-catalog-p21"
		],
		"workingPressureBar": [
			"october2-tools-rodcraft-catalog-p21",
			"october2-tools-rodcraft-catalog-p4"
		],
		"demandExplanation": [
			"october2-tools-rodcraft-catalog-p21"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
