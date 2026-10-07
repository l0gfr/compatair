import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-cleco-75rnal-2v-4",
	"slug": "boulonneuse-cleco-75rnal-2v-4",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Cleco 75RNAL-2V-4",
	"brand": "Cleco",
	"model": "75RNAL-2V-4",
	"mpn": "75RNAL-2V-4",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-cleco-75rnal-2v-4.webp",
		"alt": "Repères techniques : Cleco 75RNAL-2V-4",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/Cleco_SP-1000-EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "cleco-75rnal-2v-4",
		"label": "Référence 75RNAL-2V-4",
		"distinguishingAttributes": {
			"reference": "75RNAL-2V-4",
			"Consommation documentaire (SCFM)": "70",
			"Caractéristiques du tableau constructeur": "75RNAL-2V-4 90 - 190* 122 - 255* 130 21 .9 556 13 .3 6 .0 2 .5 64 1 .1 28 V 1/2” 1/2” 70"
		}
	},
	"editorial": {
		"overview": "Cleco 75RNAL-2V-4. Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul. Consommation documentaire (SCFM) : 70. Caractéristiques du tableau constructeur : 75RNAL-2V-4 90 - 190* 122 - 255* 130 21 .9 556 13 .3 6 .0 2 .5 64 1 .1 28 V 1/2” 1/2” 70.",
		"verifiedFacts": [
			"Consommation documentaire (SCFM) : 70.",
			"Caractéristiques du tableau constructeur : 75RNAL-2V-4 90 - 190* 122 - 255* 130 21 .9 556 13 .3 6 .0 2 .5 64 1 .1 28 V 1/2” 1/2” 70."
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
			"value": "70",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p22"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "75RNAL-2V-4 90 - 190* 122 - 255* 130 21 .9 556 13 .3 6 .0 2 .5 64 1 .1 28 V 1/2” 1/2” 70",
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
