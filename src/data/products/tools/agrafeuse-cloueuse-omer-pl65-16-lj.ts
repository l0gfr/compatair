import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "agrafeuse-cloueuse-omer-pl65-16-lj",
	"slug": "agrafeuse-cloueuse-omer-pl65-16-lj",
	"categoryId": "agrafeuse-cloueuse",
	"category": "agrafeuse-cloueuse",
	"label": "Omer PL65.16 LJ",
	"brand": "Omer",
	"model": "PL65.16 LJ",
	"mpn": "PL65.16 LJ",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le volume par coup publié n’est pas rattaché à un point de pression de mesure. La plage de fonctionnement ne permet pas de reconstituer ce point.",
	"confidence": "B",
	"image": {
		"src": "/images/products/agrafeuse-cloueuse-omer-pl65-16-lj.webp",
		"alt": "Repères techniques : Omer PL65.16 LJ",
		"sourceUrl": "https://www.omertools.com/wp-content/uploads/2024/03/CATALOGO_2017.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "omer-pl65-16-lj",
		"label": "Référence PL65.16 LJ",
		"distinguishingAttributes": {
			"reference": "PL65.16 LJ",
			"Longueur des fixations utilisables": "10 ÷ 16 mm",
			"Capacité du magasin": "200 fixations"
		}
	},
	"editorial": {
		"overview": "Omer PL65.16 LJ. Le volume par coup publié n’est pas rattaché à un point de pression de mesure. La plage de fonctionnement ne permet pas de reconstituer ce point. Longueur des fixations utilisables : 10 ÷ 16 mm. Capacité du magasin : 200 fixations.",
		"verifiedFacts": [
			"Longueur des fixations utilisables : 10 ÷ 16 mm.",
			"Capacité du magasin : 200 fixations.",
			"Masse publiée : 1,85 kg.",
			"Dimensions (L × W × H) : 357 x 64 x 249 mm.",
			"Pression de fonctionnement originale : 4,5 ÷ 6,5 kg/cm².",
			"Volume par cycle original : 0,20 litri/colpo."
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
			"value": "10 ÷ 16 mm",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p56"
			]
		},
		{
			"label": "Capacité du magasin",
			"value": "200 fixations",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p56"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1,85 kg",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p56"
			]
		},
		{
			"label": "Dimensions (L × W × H)",
			"value": "357 x 64 x 249 mm",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p56"
			]
		},
		{
			"label": "Pression de fonctionnement originale",
			"value": "4,5 ÷ 6,5 kg/cm²",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p56"
			]
		},
		{
			"label": "Volume par cycle original",
			"value": "0,20 litri/colpo",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p56"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Le tableau donne une plage de fonctionnement ; il ne donne pas la pression de mesure de son volume par cycle.",
			"evidenceIds": [
				"october2b-tools-oct2b-omer-2017-pdf-p56"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-omer-2017-pdf-p56",
			"sourceUrl": "https://www.omertools.com/wp-content/uploads/2024/03/CATALOGO_2017.pdf#page=56",
			"sourceLabel": "Omer, The world of Fastening, catalogue constructeur 2017, page PDF 56",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : fd0c4d3cc4edfbb1e60aefe73acde4739f3e3919f580d97e4c3b26bca75fca44. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-omer-2017-pdf-p56"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-omer-2017-pdf-p56"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-omer-2017-pdf-p56"
		]
	},
	"notes": [
		"Le volume par coup publié n’est pas rattaché à un point de pression de mesure. La plage de fonctionnement ne permet pas de reconstituer ce point."
	]
};

export default product;
