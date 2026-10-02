const product = {
	"id": "scie-rodcraft-rc6050-8951079001",
	"slug": "scie-rodcraft-rc6050-8951079001",
	"categoryId": "scie",
	"category": "scie",
	"label": "Rodcraft RC6050 (réf. 8951079001)",
	"brand": "Rodcraft",
	"model": "RC6050",
	"mpn": "8951079001",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 220,
		"typical": 220,
		"max": 220
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/scie-rodcraft-rc6050-8951079001.webp",
		"alt": "Repères techniques : Rodcraft RC6050 (réf. 8951079001)",
		"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodcraft-rc6050",
		"label": "Référence 8951079001",
		"distinguishingAttributes": {
			"reference": "8951079001",
			"Masse publiée": "0.65 kg",
			"Dimensions publiées": "262x38 mm"
		}
	},
	"editorial": {
		"overview": "Rodcraft RC6050 (réf. 8951079001). Consommation moyenne : 220 L/min à 6,3 bar. Masse publiée : 0.65 kg. Dimensions publiées : 262x38 mm.",
		"verifiedFacts": [
			"Masse publiée : 0.65 kg.",
			"Dimensions publiées : 262x38 mm.",
			"Diamètre de tuyau : 8 mm.",
			"Course : 10 mm."
		],
		"limitations": [
			"Une consommation moyenne, à vide ou de régime non précisé ne confirme pas le débit maximal en charge ; le verdict reste insufficient_data.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "0.65 kg",
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
			"label": "Consommation dans son unité originale",
			"value": "220 L/min",
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
			"notes": "SHA-256 de la réponse source : c10fd37c2e1adf9ac34431eb523b1933644b83f1cec85b376d30cd77aab01ef3. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
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
		"airflowLpm": [
			"october2-tools-rodcraft-catalog-p50",
			"october2-tools-rodcraft-catalog-p4"
		],
		"airflowBasis": [
			"october2-tools-rodcraft-catalog-p50"
		]
	},
	"notes": [
		"Consommation moyenne : 220 L/min à 6,3 bar."
	]
};

export default product;
