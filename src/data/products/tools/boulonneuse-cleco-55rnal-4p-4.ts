import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-cleco-55rnal-4p-4",
	"slug": "boulonneuse-cleco-55rnal-4p-4",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Cleco 55RNAL-4P-4",
	"brand": "Cleco",
	"model": "55RNAL-4P-4",
	"mpn": "55RNAL-4P-4",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-cleco-55rnal-4p-4.webp",
		"alt": "Repères techniques : Cleco 55RNAL-4P-4",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/Cleco_SP-1000-EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "cleco-55rnal-4p-4",
		"label": "Référence 55RNAL-4P-4",
		"distinguishingAttributes": {
			"reference": "55RNAL-4P-4",
			"Consommation documentaire (SCFM)": "55",
			"Caractéristiques du tableau constructeur": "55RNAL-4P-4 26 - 54 35 - 73 330 19 .1 486 7 .4 3 .3 1 .6 41 0 .7 18 P 1/2” 1/2” 55"
		}
	},
	"editorial": {
		"overview": "Cleco 55RNAL-4P-4. Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul. Consommation documentaire (SCFM) : 55. Caractéristiques du tableau constructeur : 55RNAL-4P-4 26 - 54 35 - 73 330 19 .1 486 7 .4 3 .3 1 .6 41 0 .7 18 P 1/2” 1/2” 55.",
		"verifiedFacts": [
			"Consommation documentaire (SCFM) : 55.",
			"Caractéristiques du tableau constructeur : 55RNAL-4P-4 26 - 54 35 - 73 330 19 .1 486 7 .4 3 .3 1 .6 41 0 .7 18 P 1/2” 1/2” 55."
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
			"value": "55",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p22"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "55RNAL-4P-4 26 - 54 35 - 73 330 19 .1 486 7 .4 3 .3 1 .6 41 0 .7 18 P 1/2” 1/2” 55",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p22"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation de cette ligne n’est pas établie ; une pression de couple, de puissance ou de vitesse n’est pas transposée.",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p22"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-cleco-sp1000-pdf-p22",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/Cleco_SP-1000-EN_en.pdf#page=22",
			"sourceLabel": "Cleco, catalogue constructeur cleco-sp1000.pdf, page PDF 22",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : d4b1a134c27b40febe6ad33aa138bad7b337e6775f0fdc06fa8a058d4c99a3e9. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p22"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p22"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p22"
		]
	},
	"notes": [
		"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul."
	]
};

export default product;
