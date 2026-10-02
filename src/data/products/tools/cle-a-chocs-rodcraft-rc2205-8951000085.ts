const product = {
	"id": "cle-a-chocs-rodcraft-rc2205-8951000085",
	"slug": "cle-a-chocs-rodcraft-rc2205-8951000085",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Rodcraft RC2205 (réf. 8951000085)",
	"brand": "Rodcraft",
	"model": "RC2205",
	"mpn": "8951000085",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 130,
		"typical": 130,
		"max": 130
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-rodcraft-rc2205-8951000085.webp",
		"alt": "Repères techniques : Rodcraft RC2205 (réf. 8951000085)",
		"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodcraft-rc2205",
		"label": "Référence 8951000085",
		"distinguishingAttributes": {
			"reference": "8951000085",
			"Vitesse publiée": "7800 min-1",
			"Masse publiée": "2,4 kg"
		}
	},
	"editorial": {
		"overview": "Rodcraft RC2205 (réf. 8951000085). Consommation moyenne : 130 L/min à 6,3 bar. Vitesse publiée : 7800 min-1. Masse publiée : 2,4 kg.",
		"verifiedFacts": [
			"Vitesse publiée : 7800 min-1.",
			"Masse publiée : 2,4 kg.",
			"Dimensions publiées : 150x140x40 mm.",
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
			"value": "7800 min-1",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p11"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2,4 kg",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p11"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "150x140x40 mm",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p11"
			]
		},
		{
			"label": "Diamètre de tuyau",
			"value": "10 mm",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p11"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "1/2\"",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p11"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "All technical data is based on a tool incoming pressure of max. 6.3 bar (90 psi), glossary PDF 4.",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p11",
				"october2-tools-rodcraft-catalog-p4"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "130 L/min",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p11",
				"october2-tools-rodcraft-catalog-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rodcraft-catalog-p11",
			"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf#page=11",
			"sourceLabel": "Rodcraft Tools and Workshop Equipment 2017-2018, catalogue fabricant, page PDF 11",
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
			"october2-tools-rodcraft-catalog-p11"
		],
		"workingPressureBar": [
			"october2-tools-rodcraft-catalog-p11",
			"october2-tools-rodcraft-catalog-p4"
		],
		"airflowLpm": [
			"october2-tools-rodcraft-catalog-p11",
			"october2-tools-rodcraft-catalog-p4"
		],
		"airflowBasis": [
			"october2-tools-rodcraft-catalog-p11"
		]
	},
	"notes": [
		"Consommation moyenne : 130 L/min à 6,3 bar."
	]
};

export default product;
