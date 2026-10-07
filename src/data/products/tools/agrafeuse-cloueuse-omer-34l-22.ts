import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-omer-34l-22",
	"slug": "agrafeuse-cloueuse-omer-34l-22",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Omer 34L.22",
	"brand": "Omer",
	"model": "34L.22",
	"mpn": "34L.22",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le volume par coup publié n’est pas rattaché à un point de pression de mesure. La plage de fonctionnement ne permet pas de reconstituer ce point.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-omer-34l-22.webp",
		"alt": "Repères techniques : Omer 34L.22",
		"sourceUrl": "https://www.omertools.com/wp-content/uploads/2024/03/CATALOGO_2017.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "omer-34l-22",
		"label": "Référence 34L.22",
		"distinguishingAttributes": {
			"reference": "34L.22",
			"Longueur des fixations utilisables": "18 ÷ 22 mm",
			"Capacité du magasin": "100 fixations"
		}
	},
	"editorial": {
		"overview": "Omer 34L.22. Le volume par coup publié n’est pas rattaché à un point de pression de mesure. La plage de fonctionnement ne permet pas de reconstituer ce point. Longueur des fixations utilisables : 18 ÷ 22 mm. Capacité du magasin : 100 fixations.",
		"verifiedFacts": [
			"Longueur des fixations utilisables : 18 ÷ 22 mm.",
			"Capacité du magasin : 100 fixations.",
			"Masse publiée : 2,45 kg.",
			"Dimensions (L × W × H) : 342 x 115 x 222 mm.",
			"Pression de fonctionnement originale : 5 ÷ 7 kg/cm².",
			"Volume par cycle original : 1,32 litri/colpo."
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
			"value": "18 ÷ 22 mm",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p64"
			]
		},
		{
			"label": "Capacité du magasin",
			"value": "100 fixations",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p64"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2,45 kg",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p64"
			]
		},
		{
			"label": "Dimensions (L × W × H)",
			"value": "342 x 115 x 222 mm",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p64"
			]
		},
		{
			"label": "Pression de fonctionnement originale",
			"value": "5 ÷ 7 kg/cm²",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p64"
			]
		},
		{
			"label": "Volume par cycle original",
			"value": "1,32 litri/colpo",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p64"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Le tableau donne une plage de fonctionnement ; il ne donne pas la pression de mesure de son volume par cycle.",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p64"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-omer-2017-pdf-p64",
			"sourceUrl": "https://www.omertools.com/wp-content/uploads/2024/03/CATALOGO_2017.pdf#page=64",
			"sourceLabel": "Omer, The world of Fastening, catalogue constructeur 2017, page PDF 64",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : fd0c4d3cc4edfbb1e60aefe73acde4739f3e3919f580d97e4c3b26bca75fca44. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-omer-2017-pdf-p64"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-omer-2017-pdf-p64"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-omer-2017-pdf-p64"
		]
	},
	"notes": [
		"Le volume par coup publié n’est pas rattaché à un point de pression de mesure. La plage de fonctionnement ne permet pas de reconstituer ce point."
	]
};

export default product;
