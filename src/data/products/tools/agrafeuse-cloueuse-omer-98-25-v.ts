import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-omer-98-25-v",
	"slug": "agrafeuse-cloueuse-omer-98-25-v",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Omer 98.25 V",
	"brand": "Omer",
	"model": "98.25 V",
	"mpn": "98.25 V",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le volume par coup publié n’est pas rattaché à un point de pression de mesure. La plage de fonctionnement ne permet pas de reconstituer ce point.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-omer-98-25-v.webp",
		"alt": "Repères techniques : Omer 98.25 V",
		"sourceUrl": "https://www.omertools.com/wp-content/uploads/2024/03/CATALOGO_2017.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "omer-98-25-v",
		"label": "Référence 98.25 V",
		"distinguishingAttributes": {
			"reference": "98.25 V",
			"Longueur des fixations utilisables": "12 ÷ 25 mm",
			"Capacité du magasin": "145 fixations"
		}
	},
	"editorial": {
		"overview": "Omer 98.25 V. Le volume par coup publié n’est pas rattaché à un point de pression de mesure. La plage de fonctionnement ne permet pas de reconstituer ce point. Longueur des fixations utilisables : 12 ÷ 25 mm. Capacité du magasin : 145 fixations.",
		"verifiedFacts": [
			"Longueur des fixations utilisables : 12 ÷ 25 mm.",
			"Capacité du magasin : 145 fixations.",
			"Masse publiée : 1,25 kg.",
			"Dimensions (L × W × H) : 226 x 50 x 223 mm.",
			"Pression de fonctionnement originale : 5 ÷ 6,5 kg/cm².",
			"Volume par cycle original : 0,31 litri/colpo."
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
			"value": "12 ÷ 25 mm",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p14"
			]
		},
		{
			"label": "Capacité du magasin",
			"value": "145 fixations",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p14"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,25 kg",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p14"
			]
		},
		{
			"label": "Dimensions (L × W × H)",
			"value": "226 x 50 x 223 mm",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p14"
			]
		},
		{
			"label": "Pression de fonctionnement originale",
			"value": "5 ÷ 6,5 kg/cm²",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p14"
			]
		},
		{
			"label": "Volume par cycle original",
			"value": "0,31 litri/colpo",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p14"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Le tableau donne une plage de fonctionnement ; il ne donne pas la pression de mesure de son volume par cycle.",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p14"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-omer-2017-pdf-p14",
			"sourceUrl": "https://www.omertools.com/wp-content/uploads/2024/03/CATALOGO_2017.pdf#page=14",
			"sourceLabel": "Omer, The world of Fastening, catalogue constructeur 2017, page PDF 14",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : fd0c4d3cc4edfbb1e60aefe73acde4739f3e3919f580d97e4c3b26bca75fca44. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-omer-2017-pdf-p14"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-omer-2017-pdf-p14"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-omer-2017-pdf-p14"
		]
	},
	"notes": [
		"Le volume par coup publié n’est pas rattaché à un point de pression de mesure. La plage de fonctionnement ne permet pas de reconstituer ce point."
	]
};

export default product;
