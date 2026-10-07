import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-omer-12-40-g",
	"slug": "agrafeuse-cloueuse-omer-12-40-g",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Omer 12.40 G",
	"brand": "Omer",
	"model": "12.40 G",
	"mpn": "12.40 G",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le volume par coup publié n’est pas rattaché à un point de pression de mesure. La plage de fonctionnement ne permet pas de reconstituer ce point.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-omer-12-40-g.webp",
		"alt": "Repères techniques : Omer 12.40 G",
		"sourceUrl": "https://www.omertools.com/wp-content/uploads/2024/03/CATALOGO_2017.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "omer-12-40-g",
		"label": "Référence 12.40 G",
		"distinguishingAttributes": {
			"reference": "12.40 G",
			"Longueur des fixations utilisables": "25 ÷ 40 mm",
			"Capacité du magasin": "100 fixations"
		}
	},
	"editorial": {
		"overview": "Omer 12.40 G. Le volume par coup publié n’est pas rattaché à un point de pression de mesure. La plage de fonctionnement ne permet pas de reconstituer ce point. Longueur des fixations utilisables : 25 ÷ 40 mm. Capacité du magasin : 100 fixations.",
		"verifiedFacts": [
			"Longueur des fixations utilisables : 25 ÷ 40 mm.",
			"Capacité du magasin : 100 fixations.",
			"Masse publiée : 1,25 kg.",
			"Dimensions (L × W × H) : 252 x 52 x 228 mm.",
			"Pression de fonctionnement originale : 5 ÷ 7 kg/cm².",
			"Volume par cycle original : 0,34 litri/colpo."
		],
		"limitations": [
			"Le volume par coup publié n’est pas rattaché à un point de pression de mesure. La plage de fonctionnement ne permet pas de reconstituer ce point.",
			"Catalogue constructeur 2017, disponible dans les archives Omer. Les versions manuelles, électriques, dispositifs automatisés, accessoires et variantes à commande distante CLT/CLD sont exclus.",
			"Les autres points de pression et volumes ne sont pas interpolés ; les conversions kg/cm² ne sont pas supposées.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Longueur des fixations utilisables",
			"value": "25 ÷ 40 mm",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p46"
			]
		},
		{
			"label": "Capacité du magasin",
			"value": "100 fixations",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p46"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,25 kg",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p46"
			]
		},
		{
			"label": "Dimensions (L × W × H)",
			"value": "252 x 52 x 228 mm",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p46"
			]
		},
		{
			"label": "Pression de fonctionnement originale",
			"value": "5 ÷ 7 kg/cm²",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p46"
			]
		},
		{
			"label": "Volume par cycle original",
			"value": "0,34 litri/colpo",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p46"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Le tableau donne une plage de fonctionnement ; il ne donne pas la pression de mesure de son volume par cycle.",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p46"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-omer-2017-pdf-p46",
			"sourceUrl": "https://www.omertools.com/wp-content/uploads/2024/03/CATALOGO_2017.pdf#page=46",
			"sourceLabel": "Omer, The world of Fastening, catalogue constructeur 2017, page PDF 46",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : fd0c4d3cc4edfbb1e60aefe73acde4739f3e3919f580d97e4c3b26bca75fca44. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-omer-2017-pdf-p46"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-omer-2017-pdf-p46"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-omer-2017-pdf-p46"
		]
	},
	"notes": [
		"Le volume par coup publié n’est pas rattaché à un point de pression de mesure. La plage de fonctionnement ne permet pas de reconstituer ce point."
	]
};

export default product;
