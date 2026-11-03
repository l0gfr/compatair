import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-rodcraft-rc3005-8951078042",
	"slug": "cle-a-cliquet-rodcraft-rc3005-8951078042",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Rodcraft RC3005 (réf. 8951078042)",
	"brand": "Rodcraft",
	"model": "RC3005",
	"mpn": "8951078042",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"max": 6.3
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-rodcraft-rc3005-8951078042.webp",
		"alt": "Repères techniques : Rodcraft RC3005 (réf. 8951078042)",
		"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rodcraft-rc3005",
		"label": "Référence 8951078042",
		"distinguishingAttributes": {
			"reference": "8951078042",
			"Vitesse publiée": "230 min-1",
			"Masse publiée": "0.55 kg"
		}
	},
	"editorial": {
		"overview": "Rodcraft RC3005. La RC3005 mesure 180 mm contre 205 mm pour la RC3010, avec les mêmes 20 Nm de travail et 30 Nm maximum. La RC3260 de 205 mm atteint 45 Nm maximum. Les 100 L/min sont une moyenne en charge selon le glossaire ; ni cette moyenne ni les 300 L/min à vide ne définissent un maximum apparié à une pression exacte.",
		"verifiedFacts": [
			"Carré : 3/8 pouce.",
			"Couple de travail : 20 Nm.",
			"Couple maximal : 30 Nm.",
			"Vitesse : 230 tr/min.",
			"Longueur : 180 mm.",
			"Consommations moyenne / à vide : 100 / 300 L/min."
		],
		"limitations": [
			"Glossaire constructeur p.4 : average = moyenne en charge ; cont. = consommation à vide. Le maximum d’entrée 6,3 bar n’est pas une pression exacte de mesure.",
			"Catalogue historique identifié ; équipement et disponibilité actuels à confirmer."
		]
	},
	"specifications": [
		{
			"label": "Carré",
			"value": "3/8 pouce",
			"evidenceIds": [
				"cle-a-cliquet-rodcraft-rc3005-8951078042-reserved-20261103-1"
			]
		},
		{
			"label": "Couple de travail",
			"value": "20 Nm",
			"evidenceIds": [
				"cle-a-cliquet-rodcraft-rc3005-8951078042-reserved-20261103-1"
			]
		},
		{
			"label": "Couple maximal",
			"value": "30 Nm",
			"evidenceIds": [
				"cle-a-cliquet-rodcraft-rc3005-8951078042-reserved-20261103-1"
			]
		},
		{
			"label": "Vitesse",
			"value": "230 tr/min",
			"evidenceIds": [
				"cle-a-cliquet-rodcraft-rc3005-8951078042-reserved-20261103-1"
			]
		},
		{
			"label": "Longueur",
			"value": "180 mm",
			"evidenceIds": [
				"cle-a-cliquet-rodcraft-rc3005-8951078042-reserved-20261103-1"
			]
		},
		{
			"label": "Consommations moyenne / à vide",
			"value": "100 / 300 L/min",
			"evidenceIds": [
				"cle-a-cliquet-rodcraft-rc3005-8951078042-reserved-20261103-1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rodcraft-catalog-p19",
			"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf#page=19",
			"sourceLabel": "Rodcraft Tools and Workshop Equipment 2017-2018, catalogue fabricant, page PDF 19",
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
		},
		{
			"id": "cle-a-cliquet-rodcraft-rc3005-8951078042-reserved-20261103-1",
			"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf#page=19",
			"sourceLabel": "Rodcraft : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 c10fd37c2e1adf9ac34431eb523b1933644b83f1cec85b376d30cd77aab01ef3. La RC3005 mesure 180 mm contre 205 mm pour la RC3010, avec les mêmes 20 Nm de travail et 30 Nm maximum. La RC3260 de 205 mm atteint 45 Nm maximum. Les 100 L/min sont une moyenne en charge selon le glossaire ; ni cette moyenne ni les 300 L/min à vide ne définissent un maximum apparié à une pression exacte."
		},
		{
			"id": "cle-a-cliquet-rodcraft-rc3005-8951078042-reserved-20261103-1-3",
			"sourceUrl": "https://www.photos.rodcraft.com/content/dam/brands/Rodcraft/literature/catalogs/RC_EN.pdf#page=4",
			"sourceLabel": "Rodcraft : revue factuelle du 3 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-03",
			"confidence": "B",
			"notes": "GET complet HTTP200 SHA-256 c10fd37c2e1adf9ac34431eb523b1933644b83f1cec85b376d30cd77aab01ef3. La RC3005 mesure 180 mm contre 205 mm pour la RC3010, avec les mêmes 20 Nm de travail et 30 Nm maximum. La RC3260 de 205 mm atteint 45 Nm maximum. Les 100 L/min sont une moyenne en charge selon le glossaire ; ni cette moyenne ni les 300 L/min à vide ne définissent un maximum apparié à une pression exacte."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rodcraft-catalog-p19"
		],
		"workingPressureBar": [
			"october2-tools-rodcraft-catalog-p19",
			"october2-tools-rodcraft-catalog-p4"
		],
		"demandExplanation": [
			"october2-tools-rodcraft-catalog-p19"
		],
		"editorial": [
			"cle-a-cliquet-rodcraft-rc3005-8951078042-reserved-20261103-1"
		],
		"specifications": [
			"cle-a-cliquet-rodcraft-rc3005-8951078042-reserved-20261103-1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
