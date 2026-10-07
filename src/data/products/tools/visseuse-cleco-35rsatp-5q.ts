import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "visseuse-cleco-35rsatp-5q",
	"slug": "visseuse-cleco-35rsatp-5q",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Cleco 35RSATP-5Q",
	"brand": "Cleco",
	"model": "35RSATP-5Q",
	"mpn": "35RSATP-5Q",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-cleco-35rsatp-5q.webp",
		"alt": "Repères techniques : Cleco 35RSATP-5Q",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/Cleco_SP-1000-EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "cleco-35rsatp-5q",
		"label": "Référence 35RSATP-5Q",
		"distinguishingAttributes": {
			"reference": "35RSATP-5Q",
			"Consommation documentaire (SCFM)": "24",
			"Caractéristiques du tableau constructeur": "35RSATP-5Q 35RSATP-5-3 15 - 180 2 - 20 350 9 .8 248 3 .4 1 .5 1/4” 5/16” 24"
		}
	},
	"editorial": {
		"overview": "Cleco 35RSATP-5Q. Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul. Consommation documentaire (SCFM) : 24. Caractéristiques du tableau constructeur : 35RSATP-5Q 35RSATP-5-3 15 - 180 2 - 20 350 9 .8 248 3 .4 1 .5 1/4” 5/16” 24.",
		"verifiedFacts": [
			"Consommation documentaire (SCFM) : 24.",
			"Caractéristiques du tableau constructeur : 35RSATP-5Q 35RSATP-5-3 15 - 180 2 - 20 350 9 .8 248 3 .4 1 .5 1/4” 5/16” 24."
		],
		"limitations": [
			"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
			"Référence physique explicitement listée dans un tableau constructeur. Aucune variante n’est générée à partir d’un code de nomenclature. Consulter le tableau source pour les dimensions et les exceptions exactes.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Consommation documentaire (SCFM)",
			"value": "24",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p11"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "35RSATP-5Q 35RSATP-5-3 15 - 180 2 - 20 350 9 .8 248 3 .4 1 .5 1/4” 5/16” 24",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p11"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation de cette ligne n’est pas établie ; une pression de couple, de puissance ou de vitesse n’est pas transposée.",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p11"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-cleco-sp1000-pdf-p11",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/Cleco_SP-1000-EN_en.pdf#page=11",
			"sourceLabel": "Cleco, catalogue constructeur cleco-sp1000.pdf, page PDF 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : d4b1a134c27b40febe6ad33aa138bad7b337e6775f0fdc06fa8a058d4c99a3e9. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p11"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p11"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p11"
		]
	},
	"notes": [
		"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul."
	]
};

export default product;
