import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-omer-700-738-cno-sag",
	"slug": "agrafeuse-cloueuse-omer-700-738-cno-sag",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Omer 700.738 CNO-SAG",
	"brand": "Omer",
	"model": "700.738 CNO-SAG",
	"mpn": "700.738 CNO-SAG",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le volume par coup publié n’est pas rattaché à un point de pression de mesure. La plage de fonctionnement ne permet pas de reconstituer ce point.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-omer-700-738-cno-sag.webp",
		"alt": "Repères techniques : Omer 700.738 CNO-SAG",
		"sourceUrl": "https://www.omertools.com/wp-content/uploads/2024/03/CATALOGO_2017.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "omer-700-738-cno-sag",
		"label": "Référence 700.738 CNO-SAG",
		"distinguishingAttributes": {
			"reference": "700.738 CNO-SAG",
			"Longueur des fixations utilisables": "15 ÷ 40 mm",
			"Capacité du magasin": "150 fixations"
		}
	},
	"editorial": {
		"overview": "Omer 700.738 CNO-SAG. Le volume par coup publié n’est pas rattaché à un point de pression de mesure. La plage de fonctionnement ne permet pas de reconstituer ce point. Longueur des fixations utilisables : 15 ÷ 40 mm. Capacité du magasin : 150 fixations.",
		"verifiedFacts": [
			"Longueur des fixations utilisables : 15 ÷ 40 mm.",
			"Capacité du magasin : 150 fixations.",
			"Masse publiée : 1,70 kg.",
			"Dimensions (L × W × H) : 340 x 77 x 258 mm.",
			"Pression de fonctionnement originale : 5 ÷ 7,5 kg/cm².",
			"Volume par cycle original : 0,75 litri/colpo."
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
			"value": "15 ÷ 40 mm",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p34"
			]
		},
		{
			"label": "Capacité du magasin",
			"value": "150 fixations",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p34"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,70 kg",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p34"
			]
		},
		{
			"label": "Dimensions (L × W × H)",
			"value": "340 x 77 x 258 mm",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p34"
			]
		},
		{
			"label": "Pression de fonctionnement originale",
			"value": "5 ÷ 7,5 kg/cm²",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p34"
			]
		},
		{
			"label": "Volume par cycle original",
			"value": "0,75 litri/colpo",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p34"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Le tableau donne une plage de fonctionnement ; il ne donne pas la pression de mesure de son volume par cycle.",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p34"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-omer-2017-pdf-p34",
			"sourceUrl": "https://www.omertools.com/wp-content/uploads/2024/03/CATALOGO_2017.pdf#page=34",
			"sourceLabel": "Omer, The world of Fastening, catalogue constructeur 2017, page PDF 34",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : fd0c4d3cc4edfbb1e60aefe73acde4739f3e3919f580d97e4c3b26bca75fca44. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-omer-2017-pdf-p34"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-omer-2017-pdf-p34"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-omer-2017-pdf-p34"
		]
	},
	"notes": [
		"Le volume par coup publié n’est pas rattaché à un point de pression de mesure. La plage de fonctionnement ne permet pas de reconstituer ce point."
	]
};

export default product;
