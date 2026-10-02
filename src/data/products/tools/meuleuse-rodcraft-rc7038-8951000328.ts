const product = {
	"id": "meuleuse-rodcraft-rc7038-8951000328",
	"slug": "meuleuse-rodcraft-rc7038-8951000328",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Rodcraft RC7038 (réf. 8951000328)",
	"brand": "Rodcraft",
	"model": "RC7038",
	"mpn": "8951000328",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 500,
		"typical": 500,
		"max": 500
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-rodcraft-rc7038-8951000328.webp",
		"alt": "Repères techniques : Rodcraft RC7038 (réf. 8951000328)",
		"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodcraft-rc7038",
		"label": "Référence 8951000328",
		"distinguishingAttributes": {
			"reference": "8951000328",
			"Masse publiée": "0.92 kg",
			"Dimensions publiées": "210x72x43 mm"
		}
	},
	"editorial": {
		"overview": "Rodcraft RC7038 (réf. 8951000328). Consommation moyenne : 500 L/min à 6,3 bar. Masse publiée : 0.92 kg. Dimensions publiées : 210x72x43 mm.",
		"verifiedFacts": [
			"Masse publiée : 0.92 kg.",
			"Dimensions publiées : 210x72x43 mm.",
			"Diamètre de tuyau : 8 mm."
		],
		"limitations": [
			"Une consommation moyenne, à vide ou de régime non précisé ne confirme pas le débit maximal en charge ; le verdict reste insufficient_data.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "0.92 kg",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p62"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "210x72x43 mm",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p62"
			]
		},
		{
			"label": "Diamètre de tuyau",
			"value": "8 mm",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p62"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "All technical data is based on a tool incoming pressure of max. 6.3 bar (90 psi), glossary PDF 4.",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p62",
				"october2-tools-rodcraft-catalog-p4"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "500 L/min",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p62",
				"october2-tools-rodcraft-catalog-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rodcraft-catalog-p62",
			"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf#page=62",
			"sourceLabel": "Rodcraft Tools and Workshop Equipment 2017-2018, catalogue fabricant, page PDF 62",
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
			"october2-tools-rodcraft-catalog-p62"
		],
		"workingPressureBar": [
			"october2-tools-rodcraft-catalog-p62",
			"october2-tools-rodcraft-catalog-p4"
		],
		"airflowLpm": [
			"october2-tools-rodcraft-catalog-p62",
			"october2-tools-rodcraft-catalog-p4"
		],
		"airflowBasis": [
			"october2-tools-rodcraft-catalog-p62"
		]
	},
	"notes": [
		"Consommation moyenne : 500 L/min à 6,3 bar."
	]
};

export default product;
