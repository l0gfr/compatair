const product = {
	"id": "ponceuse-orbitale-rodcraft-rc7682-8951000005",
	"slug": "ponceuse-orbitale-rodcraft-rc7682-8951000005",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "Rodcraft RC7682 (réf. 8951000005)",
	"brand": "Rodcraft",
	"model": "RC7682",
	"mpn": "8951000005",
	"demandModel": "fixed-flow",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"airflowLpm": {
		"min": 380,
		"typical": 380,
		"max": 380
	},
	"airflowBasis": "average",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-rodcraft-rc7682-8951000005.webp",
		"alt": "Repères techniques : Rodcraft RC7682 (réf. 8951000005)",
		"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodcraft-rc7682",
		"label": "Référence 8951000005",
		"distinguishingAttributes": {
			"reference": "8951000005",
			"Masse publiée": "0.5 kg",
			"Dimensions publiées": "260x165x37 mm"
		}
	},
	"editorial": {
		"overview": "Rodcraft RC7682 (réf. 8951000005). Consommation moyenne : 380 L/min à 6,3 bar. Masse publiée : 0.5 kg. Dimensions publiées : 260x165x37 mm.",
		"verifiedFacts": [
			"Masse publiée : 0.5 kg.",
			"Dimensions publiées : 260x165x37 mm.",
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
			"value": "0.5 kg",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p70"
			]
		},
		{
			"label": "Dimensions publiées",
			"value": "260x165x37 mm",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p70"
			]
		},
		{
			"label": "Diamètre de tuyau",
			"value": "8 mm",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p70"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "All technical data is based on a tool incoming pressure of max. 6.3 bar (90 psi), glossary PDF 4.",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p70",
				"october2-tools-rodcraft-catalog-p4"
			]
		},
		{
			"label": "Consommation dans son unité originale",
			"value": "380 L/min",
			"evidenceIds": [
				"october2-tools-rodcraft-catalog-p70",
				"october2-tools-rodcraft-catalog-p4"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rodcraft-catalog-p70",
			"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf#page=70",
			"sourceLabel": "Rodcraft Tools and Workshop Equipment 2017-2018, catalogue fabricant, page PDF 70",
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
			"october2-tools-rodcraft-catalog-p70"
		],
		"workingPressureBar": [
			"october2-tools-rodcraft-catalog-p70",
			"october2-tools-rodcraft-catalog-p4"
		],
		"airflowLpm": [
			"october2-tools-rodcraft-catalog-p70",
			"october2-tools-rodcraft-catalog-p4"
		],
		"airflowBasis": [
			"october2-tools-rodcraft-catalog-p70"
		]
	},
	"notes": [
		"Consommation moyenne : 380 L/min à 6,3 bar."
	]
};

export default product;
