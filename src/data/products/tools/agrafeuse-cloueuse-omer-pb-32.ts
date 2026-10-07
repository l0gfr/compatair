import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-omer-pb-32",
	"slug": "agrafeuse-cloueuse-omer-pb-32",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Omer PB.32",
	"brand": "Omer",
	"model": "PB.32",
	"mpn": "PB.32",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le volume par coup publié n’est pas rattaché à un point de pression de mesure. La plage de fonctionnement ne permet pas de reconstituer ce point.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-omer-pb-32.webp",
		"alt": "Repères techniques : Omer PB.32",
		"sourceUrl": "https://www.omertools.com/wp-content/uploads/2024/03/CATALOGO_2017.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "omer-pb-32",
		"label": "Référence PB.32",
		"distinguishingAttributes": {
			"reference": "PB.32",
			"Longueur des fixations utilisables": "15 ÷ 22 mm",
			"Capacité du magasin": "200 fixations"
		}
	},
	"editorial": {
		"overview": "Omer PB.32. Le volume par coup publié n’est pas rattaché à un point de pression de mesure. La plage de fonctionnement ne permet pas de reconstituer ce point. Longueur des fixations utilisables : 15 ÷ 22 mm. Capacité du magasin : 200 fixations.",
		"verifiedFacts": [
			"Longueur des fixations utilisables : 15 ÷ 22 mm.",
			"Capacité du magasin : 200 fixations.",
			"Masse publiée : 32,50 kg.",
			"Dimensions (L × W × H) : 700 x 550 x 1270 mm.",
			"Pression de fonctionnement originale : 5 ÷ 6 kg/cm².",
			"Volume par cycle original : 2,78 litri/colpo."
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
			"value": "15 ÷ 22 mm",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p62"
			]
		},
		{
			"label": "Capacité du magasin",
			"value": "200 fixations",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p62"
			]
		},
		{
			"label": "Masse publiée",
			"value": "32,50 kg",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p62"
			]
		},
		{
			"label": "Dimensions (L × W × H)",
			"value": "700 x 550 x 1270 mm",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p62"
			]
		},
		{
			"label": "Pression de fonctionnement originale",
			"value": "5 ÷ 6 kg/cm²",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p62"
			]
		},
		{
			"label": "Volume par cycle original",
			"value": "2,78 litri/colpo",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p62"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Le tableau donne une plage de fonctionnement ; il ne donne pas la pression de mesure de son volume par cycle.",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p62"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-omer-2017-pdf-p62",
			"sourceUrl": "https://www.omertools.com/wp-content/uploads/2024/03/CATALOGO_2017.pdf#page=62",
			"sourceLabel": "Omer, The world of Fastening, catalogue constructeur 2017, page PDF 62",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : fd0c4d3cc4edfbb1e60aefe73acde4739f3e3919f580d97e4c3b26bca75fca44. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-omer-2017-pdf-p62"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-omer-2017-pdf-p62"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-omer-2017-pdf-p62"
		]
	},
	"notes": [
		"Le volume par coup publié n’est pas rattaché à un point de pression de mesure. La plage de fonctionnement ne permet pas de reconstituer ce point."
	]
};

export default product;
