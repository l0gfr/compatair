const product = {
	"id": "meuleuse-rodcraft-rc7058-8951000278",
	"slug": "meuleuse-rodcraft-rc7058-8951000278",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Rodcraft RC7058 (réf. 8951000278)",
	"brand": "Rodcraft",
	"model": "RC7058",
	"mpn": "8951000278",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 288,
		"typical": 288,
		"max": 288
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-rodcraft-rc7058-8951000278.webp",
		"alt": "Repères techniques : Rodcraft RC7058 (réf. 8951000278)",
		"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodcraft-rc7058",
		"label": "Référence 8951000278",
		"distinguishingAttributes": {
			"reference": "8951000278",
			"Masse publiée": "0.82 kg",
			"Dimensions publiées": "190x145x50 mm"
		}
	},
	"editorial": {
		"overview": "Rodcraft RC7058 (réf. 8951000278). Consommation moyenne : 288 L/min à 6,3 bar. Masse publiée : 0.82 kg. Dimensions publiées : 190x145x50 mm.",
		"verifiedFacts": [
			"Masse publiée : 0.82 kg.",
			"Dimensions publiées : 190x145x50 mm.",
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
			"value": "0.82 kg",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p58"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "190x145x50 mm",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p58"
			]
		},
		{
			"label": "Diamètre de tuyau",
			"value": "8 mm",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p58"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "All technical data is based on a tool incoming pressure of max. 6.3 bar (90 psi), glossary PDF 4.",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p58",
				"october2-tools-rodcraft-catalog-p4"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "288 L/min",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p58",
				"october2-tools-rodcraft-catalog-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rodcraft-catalog-p58",
			"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf#page=58",
			"sourceLabel": "Rodcraft Tools and Workshop Equipment 2017-2018, catalogue fabricant, page PDF 58",
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
			"october2-tools-rodcraft-catalog-p58"
		],
		"workingPressureBar": [
			"october2-tools-rodcraft-catalog-p58",
			"october2-tools-rodcraft-catalog-p4"
		],
		"airflowLpm": [
			"october2-tools-rodcraft-catalog-p58",
			"october2-tools-rodcraft-catalog-p4"
		],
		"airflowBasis": [
			"october2-tools-rodcraft-catalog-p58"
		]
	},
	"notes": [
		"Consommation moyenne : 288 L/min à 6,3 bar."
	]
};

export default product;
