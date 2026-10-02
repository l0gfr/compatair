const product = {
	"id": "cisaille-rodcraft-rc6212-8951076020",
	"slug": "cisaille-rodcraft-rc6212-8951076020",
	"categoryId": "cisaille",
	"category": "cisaille",
	"label": "Rodcraft RC6212 (réf. 8951076020)",
	"brand": "Rodcraft",
	"model": "RC6212",
	"mpn": "8951076020",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 360,
		"typical": 360,
		"max": 360
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cisaille-rodcraft-rc6212-8951076020.webp",
		"alt": "Repères techniques : Rodcraft RC6212 (réf. 8951076020)",
		"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodcraft-rc6212",
		"label": "Référence 8951076020",
		"distinguishingAttributes": {
			"reference": "8951076020",
			"Masse publiée": "1.2 kg",
			"Dimensions publiées": "265x40x60 mm"
		}
	},
	"editorial": {
		"overview": "Rodcraft RC6212 (réf. 8951076020). Consommation moyenne : 360 L/min à 6,3 bar. Masse publiée : 1.2 kg. Dimensions publiées : 265x40x60 mm.",
		"verifiedFacts": [
			"Masse publiée : 1.2 kg.",
			"Dimensions publiées : 265x40x60 mm.",
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
			"value": "1.2 kg",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p48"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "265x40x60 mm",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p48"
			]
		},
		{
			"label": "Diamètre de tuyau",
			"value": "8 mm",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p48"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "All technical data is based on a tool incoming pressure of max. 6.3 bar (90 psi), glossary PDF 4.",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p48",
				"october2-tools-rodcraft-catalog-p4"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "360 L/min",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p48",
				"october2-tools-rodcraft-catalog-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rodcraft-catalog-p48",
			"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf#page=48",
			"sourceLabel": "Rodcraft Tools and Workshop Equipment 2017-2018, catalogue fabricant, page PDF 48",
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
			"october2-tools-rodcraft-catalog-p48"
		],
		"workingPressureBar": [
			"october2-tools-rodcraft-catalog-p48",
			"october2-tools-rodcraft-catalog-p4"
		],
		"airflowLpm": [
			"october2-tools-rodcraft-catalog-p48",
			"october2-tools-rodcraft-catalog-p4"
		],
		"airflowBasis": [
			"october2-tools-rodcraft-catalog-p48"
		]
	},
	"notes": [
		"Consommation moyenne : 360 L/min à 6,3 bar."
	]
};

export default product;
