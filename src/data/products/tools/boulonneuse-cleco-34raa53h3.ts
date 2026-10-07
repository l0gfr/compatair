import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-cleco-34raa53h3",
	"slug": "boulonneuse-cleco-34raa53h3",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Cleco 34RAA53H3",
	"brand": "Cleco",
	"model": "34RAA53H3",
	"mpn": "34RAA53H3",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-cleco-34raa53h3.webp",
		"alt": "Repères techniques : Cleco 34RAA53H3",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/Cleco_SP-1000-EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "cleco-34raa53h3",
		"label": "Référence 34RAA53H3",
		"distinguishingAttributes": {
			"reference": "34RAA53H3",
			"Consommation documentaire (SCFM)": "34",
			"Caractéristiques du tableau constructeur": "34RAA53H3 5mm Female Hex 335 17-39 24-53 20 .7 526 8 .0 3 .5 2 .4 61 1 .06 27 3/8” 5/16” 34"
		}
	},
	"editorial": {
		"overview": "Cleco 34RAA53H3. Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul. Consommation documentaire (SCFM) : 34. Caractéristiques du tableau constructeur : 34RAA53H3 5mm Female Hex 335 17-39 24-53 20 .7 526 8 .0 3 .5 2 .4 61 1 .06 27 3/8” 5/16” 34.",
		"verifiedFacts": [
			"Consommation documentaire (SCFM) : 34.",
			"Caractéristiques du tableau constructeur : 34RAA53H3 5mm Female Hex 335 17-39 24-53 20 .7 526 8 .0 3 .5 2 .4 61 1 .06 27 3/8” 5/16” 34."
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
				"october2b-tools-oct2b-cleco-sp1000-pdf-p33"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "34RAA53H3 5mm Female Hex 335 17-39 24-53 20 .7 526 8 .0 3 .5 2 .4 61 1 .06 27 3/8” 5/16” 34",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p33"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation de cette ligne n’est pas établie ; une pression de couple, de puissance ou de vitesse n’est pas transposée.",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p33"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-cleco-sp1000-pdf-p33",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/Cleco_SP-1000-EN_en.pdf#page=33",
			"sourceLabel": "Cleco, catalogue constructeur cleco-sp1000.pdf, page PDF 33",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : d4b1a134c27b40febe6ad33aa138bad7b337e6775f0fdc06fa8a058d4c99a3e9. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p33"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p33"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p33"
		]
	},
	"notes": [
		"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul."
	]
};

export default product;
