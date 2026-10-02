const product = {
	"id": "burineur-rodcraft-rc5176-8951171043",
	"slug": "burineur-rodcraft-rc5176-8951171043",
	"categoryId": "burineur",
	"category": "burineur",
	"label": "Rodcraft RC5176 (réf. 8951171043)",
	"brand": "Rodcraft",
	"model": "RC5176",
	"mpn": "8951171043",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.3
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/burineur-rodcraft-rc5176-8951171043.webp",
		"alt": "Repères techniques : Rodcraft RC5176 (réf. 8951171043)",
		"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodcraft-rc5176",
		"label": "Référence 8951171043",
		"distinguishingAttributes": {
			"reference": "8951171043",
			"Masse publiée": "2.05 kg",
			"Dimensions publiées": "245x162x39 mm"
		}
	},
	"editorial": {
		"overview": "Rodcraft RC5176 (réf. 8951171043). La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 2.05 kg. Dimensions publiées : 245x162x39 mm.",
		"verifiedFacts": [
			"Masse publiée : 2.05 kg.",
			"Dimensions publiées : 245x162x39 mm.",
			"Diamètre de tuyau : 8 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "2.05 kg",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p38"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "245x162x39 mm",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p38"
			]
		},
		{
			"label": "Diamètre de tuyau",
			"value": "8 mm",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p38"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "All technical data is based on a tool incoming pressure of max. 6.3 bar (90 psi), glossary PDF 4.",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p38",
				"october2-tools-rodcraft-catalog-p4"
			]
		},
		{
			"label": "Consommation à vide, hors calcul",
			"value": "380 L/min",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p38",
				"october2-tools-rodcraft-catalog-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rodcraft-catalog-p38",
			"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf#page=38",
			"sourceLabel": "Rodcraft Tools and Workshop Equipment 2017-2018, catalogue fabricant, page PDF 38",
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
			"october2-tools-rodcraft-catalog-p38"
		],
		"workingPressureBar": [
			"october2-tools-rodcraft-catalog-p38",
			"october2-tools-rodcraft-catalog-p4"
		],
		"demandExplanation": [
			"october2-tools-rodcraft-catalog-p38"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
