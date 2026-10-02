const product = {
	"id": "cle-a-chocs-rodcraft-rc2257-8951000037",
	"slug": "cle-a-chocs-rodcraft-rc2257-8951000037",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Rodcraft RC2257 (réf. 8951000037)",
	"brand": "Rodcraft",
	"model": "RC2257",
	"mpn": "8951000037",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 200,
		"typical": 200,
		"max": 200
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-rodcraft-rc2257-8951000037.webp",
		"alt": "Repères techniques : Rodcraft RC2257 (réf. 8951000037)",
		"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodcraft-rc2257",
		"label": "Référence 8951000037",
		"distinguishingAttributes": {
			"reference": "8951000037",
			"Vitesse publiée": "8950 min-1",
			"Masse publiée": "2.5 kg"
		}
	},
	"editorial": {
		"overview": "Rodcraft RC2257 (réf. 8951000037). Consommation moyenne : 200 L/min à 6,3 bar. Vitesse publiée : 8950 min-1. Masse publiée : 2.5 kg.",
		"verifiedFacts": [
			"Vitesse publiée : 8950 min-1.",
			"Masse publiée : 2.5 kg.",
			"Dimensions publiées : 213x194x70 mm.",
			"Diamètre de tuyau : 10 mm.",
			"Carré de sortie : 1/2\"."
		],
		"limitations": [
			"Une consommation moyenne, à vide ou de régime non précisé ne confirme pas le débit maximal en charge ; le verdict reste insufficient_data.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse publiée",
			"value": "8950 min-1",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p12"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.5 kg",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p12"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "213x194x70 mm",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p12"
			]
		},
		{
			"label": "Diamètre de tuyau",
			"value": "10 mm",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p12"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "1/2\"",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p12"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "All technical data is based on a tool incoming pressure of max. 6.3 bar (90 psi), glossary PDF 4.",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p12",
				"october2-tools-rodcraft-catalog-p4"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "200 L/min",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p12",
				"october2-tools-rodcraft-catalog-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rodcraft-catalog-p12",
			"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf#page=12",
			"sourceLabel": "Rodcraft Tools and Workshop Equipment 2017-2018, catalogue fabricant, page PDF 12",
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
			"october2-tools-rodcraft-catalog-p12"
		],
		"workingPressureBar": [
			"october2-tools-rodcraft-catalog-p12",
			"october2-tools-rodcraft-catalog-p4"
		],
		"airflowLpm": [
			"october2-tools-rodcraft-catalog-p12",
			"october2-tools-rodcraft-catalog-p4"
		],
		"airflowBasis": [
			"october2-tools-rodcraft-catalog-p12"
		]
	},
	"notes": [
		"Consommation moyenne : 200 L/min à 6,3 bar."
	]
};

export default product;
