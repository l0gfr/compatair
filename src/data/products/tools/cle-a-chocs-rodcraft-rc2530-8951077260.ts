const product = {
	"id": "cle-a-chocs-rodcraft-rc2530-8951077260",
	"slug": "cle-a-chocs-rodcraft-rc2530-8951077260",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Rodcraft RC2530 (réf. 8951077260)",
	"brand": "Rodcraft",
	"model": "RC2530",
	"mpn": "8951077260",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 600,
		"typical": 600,
		"max": 600
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-rodcraft-rc2530-8951077260.webp",
		"alt": "Repères techniques : Rodcraft RC2530 (réf. 8951077260)",
		"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodcraft-rc2530",
		"label": "Référence 8951077260",
		"distinguishingAttributes": {
			"reference": "8951077260",
			"Vitesse publiée": "3600 min-1",
			"Masse publiée": "17.7 kg"
		}
	},
	"editorial": {
		"overview": "Rodcraft RC2530 (réf. 8951077260). Consommation moyenne : 600 L/min à 6,3 bar. Vitesse publiée : 3600 min-1. Masse publiée : 17.7 kg.",
		"verifiedFacts": [
			"Vitesse publiée : 3600 min-1.",
			"Masse publiée : 17.7 kg.",
			"Dimensions publiées : 520x190x123 mm.",
			"Diamètre de tuyau : 19 mm."
		],
		"limitations": [
			"Une consommation moyenne, à vide ou de régime non précisé ne confirme pas le débit maximal en charge ; le verdict reste insufficient_data.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse publiée",
			"value": "3600 min-1",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p17"
			]
		},
		{
			"label": "Masse publiée",
			"value": "17.7 kg",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p17"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "520x190x123 mm",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p17"
			]
		},
		{
			"label": "Diamètre de tuyau",
			"value": "19 mm",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p17"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "All technical data is based on a tool incoming pressure of max. 6.3 bar (90 psi), glossary PDF 4.",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p17",
				"october2-tools-rodcraft-catalog-p4"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "600 L/min",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p17",
				"october2-tools-rodcraft-catalog-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rodcraft-catalog-p17",
			"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf#page=17",
			"sourceLabel": "Rodcraft Tools and Workshop Equipment 2017-2018, catalogue fabricant, page PDF 17",
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
			"october2-tools-rodcraft-catalog-p17"
		],
		"workingPressureBar": [
			"october2-tools-rodcraft-catalog-p17",
			"october2-tools-rodcraft-catalog-p4"
		],
		"airflowLpm": [
			"october2-tools-rodcraft-catalog-p17",
			"october2-tools-rodcraft-catalog-p4"
		],
		"airflowBasis": [
			"october2-tools-rodcraft-catalog-p17"
		]
	},
	"notes": [
		"Consommation moyenne : 600 L/min à 6,3 bar."
	]
};

export default product;
