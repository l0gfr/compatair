import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-cleco-34rcs29d1",
	"slug": "boulonneuse-cleco-34rcs29d1",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Cleco 34RCS29D1",
	"brand": "Cleco",
	"model": "34RCS29D1",
	"mpn": "34RCS29D1",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-cleco-34rcs29d1.webp",
		"alt": "Repères techniques : Cleco 34RCS29D1",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/Cleco_SP-1000-EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "cleco-34rcs29d1",
		"label": "Référence 34RCS29D1",
		"distinguishingAttributes": {
			"reference": "34RCS29D1",
			"Consommation documentaire (SCFM)": "34",
			"Caractéristiques du tableau constructeur": "34RCS29D1 34RCS29D3 490 21 29 5/16 8 19 .6 497 4 .5 2 .1 3/8” 5/16” 34"
		}
	},
	"editorial": {
		"overview": "Cleco 34RCS29D1. Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul. Consommation documentaire (SCFM) : 34. Caractéristiques du tableau constructeur : 34RCS29D1 34RCS29D3 490 21 29 5/16 8 19 .6 497 4 .5 2 .1 3/8” 5/16” 34.",
		"verifiedFacts": [
			"Consommation documentaire (SCFM) : 34.",
			"Caractéristiques du tableau constructeur : 34RCS29D1 34RCS29D3 490 21 29 5/16 8 19 .6 497 4 .5 2 .1 3/8” 5/16” 34."
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
			"value": "34",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p31"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "34RCS29D1 34RCS29D3 490 21 29 5/16 8 19 .6 497 4 .5 2 .1 3/8” 5/16” 34",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p31"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation de cette ligne n’est pas établie ; une pression de couple, de puissance ou de vitesse n’est pas transposée.",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p31"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-cleco-sp1000-pdf-p31",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/Cleco_SP-1000-EN_en.pdf#page=31",
			"sourceLabel": "Cleco, catalogue constructeur cleco-sp1000.pdf, page PDF 31",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : d4b1a134c27b40febe6ad33aa138bad7b337e6775f0fdc06fa8a058d4c99a3e9. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p31"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p31"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p31"
		]
	},
	"notes": [
		"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul."
	]
};

export default product;
