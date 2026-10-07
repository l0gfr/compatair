import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-cleco-250phf406",
	"slug": "cle-a-impulsions-cleco-250phf406",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Cleco 250PHF406",
	"brand": "Cleco",
	"model": "250PHF406",
	"mpn": "250PHF406",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-cleco-250phf406.webp",
		"alt": "Repères techniques : Cleco 250PHF406",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/Cleco_SP-1000-EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "cleco-250phf406",
		"label": "Référence 250PHF406",
		"distinguishingAttributes": {
			"reference": "250PHF406",
			"Consommation documentaire (SCFM)": "40.6",
			"Caractéristiques du tableau constructeur": "250PHF406 3/4” Sq .Dr . 118-184 160-250 4000 8 .6 3 .9 3/8” 1/2” 40 .6"
		}
	},
	"editorial": {
		"overview": "Cleco 250PHF406. Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul. Consommation documentaire (SCFM) : 40.6. Caractéristiques du tableau constructeur : 250PHF406 3/4” Sq .Dr . 118-184 160-250 4000 8 .6 3 .9 3/8” 1/2” 40 .6.",
		"verifiedFacts": [
			"Consommation documentaire (SCFM) : 40.6.",
			"Caractéristiques du tableau constructeur : 250PHF406 3/4” Sq .Dr . 118-184 160-250 4000 8 .6 3 .9 3/8” 1/2” 40 .6."
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
			"value": "40.6",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p45"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "250PHF406 3/4” Sq .Dr . 118-184 160-250 4000 8 .6 3 .9 3/8” 1/2” 40 .6",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p45"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation de cette ligne n’est pas établie ; une pression de couple, de puissance ou de vitesse n’est pas transposée.",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p45"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-cleco-sp1000-pdf-p45",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/Cleco_SP-1000-EN_en.pdf#page=45",
			"sourceLabel": "Cleco, catalogue constructeur cleco-sp1000.pdf, page PDF 45",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : d4b1a134c27b40febe6ad33aa138bad7b337e6775f0fdc06fa8a058d4c99a3e9. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p45"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p45"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p45"
		]
	},
	"notes": [
		"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul."
	]
};

export default product;
