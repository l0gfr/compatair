import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-omer-sjk-16",
	"slug": "agrafeuse-cloueuse-omer-sjk-16",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Omer SJK.16",
	"brand": "Omer",
	"model": "SJK.16",
	"mpn": "SJK.16",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le volume par coup publié n’est pas rattaché à un point de pression de mesure. La plage de fonctionnement ne permet pas de reconstituer ce point.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-omer-sjk-16.webp",
		"alt": "Repères techniques : Omer SJK.16",
		"sourceUrl": "https://www.omertools.com/wp-content/uploads/2024/03/CATALOGO_2017.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "omer-sjk-16",
		"label": "Référence SJK.16",
		"distinguishingAttributes": {
			"reference": "SJK.16",
			"Longueur des fixations utilisables": "4 ÷ 16 mm",
			"Capacité du magasin": "170 fixations"
		}
	},
	"editorial": {
		"overview": "Omer SJK.16. Le volume par coup publié n’est pas rattaché à un point de pression de mesure. La plage de fonctionnement ne permet pas de reconstituer ce point. Longueur des fixations utilisables : 4 ÷ 16 mm. Capacité du magasin : 170 fixations.",
		"verifiedFacts": [
			"Longueur des fixations utilisables : 4 ÷ 16 mm.",
			"Capacité du magasin : 170 fixations.",
			"Masse publiée : 0,90 kg.",
			"Dimensions (L × W × H) : 223 x 43 x 148 mm.",
			"Pression de fonctionnement originale : 4 ÷ 6 kg/cm².",
			"Volume par cycle original : 0,13 litri/colpo."
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
			"value": "4 ÷ 16 mm",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p8"
			]
		},
		{
			"label": "Capacité du magasin",
			"value": "170 fixations",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p8"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,90 kg",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p8"
			]
		},
		{
			"label": "Dimensions (L × W × H)",
			"value": "223 x 43 x 148 mm",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p8"
			]
		},
		{
			"label": "Pression de fonctionnement originale",
			"value": "4 ÷ 6 kg/cm²",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p8"
			]
		},
		{
			"label": "Volume par cycle original",
			"value": "0,13 litri/colpo",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p8"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Le tableau donne une plage de fonctionnement ; il ne donne pas la pression de mesure de son volume par cycle.",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p8"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-omer-2017-pdf-p8",
			"sourceUrl": "https://www.omertools.com/wp-content/uploads/2024/03/CATALOGO_2017.pdf#page=8",
			"sourceLabel": "Omer, The world of Fastening, catalogue constructeur 2017, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : fd0c4d3cc4edfbb1e60aefe73acde4739f3e3919f580d97e4c3b26bca75fca44. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-omer-2017-pdf-p8"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-omer-2017-pdf-p8"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-omer-2017-pdf-p8"
		]
	},
	"notes": [
		"Le volume par coup publié n’est pas rattaché à un point de pression de mesure. La plage de fonctionnement ne permet pas de reconstituer ce point."
	]
};

export default product;
