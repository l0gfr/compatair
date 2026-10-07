import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-cleco-wp-2059-8-6e",
	"slug": "cle-a-chocs-cleco-wp-2059-8-6e",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Cleco WP-2059-8-6E",
	"brand": "Cleco",
	"model": "WP-2059-8-6E",
	"mpn": "WP-2059-8-6E",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-cleco-wp-2059-8-6e.webp",
		"alt": "Repères techniques : Cleco WP-2059-8-6E",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/Cleco_SP-1000-EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "cleco-wp-2059-8-6e",
		"label": "Référence WP-2059-8-6E",
		"distinguishingAttributes": {
			"reference": "WP-2059-8-6E",
			"Consommation documentaire (SCFM)": "60",
			"Caractéristiques du tableau constructeur": "WP-2059-8-6E** 1 1/8 M24 1 250-750 350-1000 1,000 4,000 13 .8 350 14 .3 6 .5 1 .8 46 3/8” 3/8” 60"
		}
	},
	"editorial": {
		"overview": "Cleco WP-2059-8-6E. Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul. Consommation documentaire (SCFM) : 60. Caractéristiques du tableau constructeur : WP-2059-8-6E** 1 1/8 M24 1 250-750 350-1000 1,000 4,000 13 .8 350 14 .3 6 .5 1 .8 46 3/8” 3/8” 60.",
		"verifiedFacts": [
			"Consommation documentaire (SCFM) : 60.",
			"Caractéristiques du tableau constructeur : WP-2059-8-6E** 1 1/8 M24 1 250-750 350-1000 1,000 4,000 13 .8 350 14 .3 6 .5 1 .8 46 3/8” 3/8” 60."
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
			"value": "60",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p50"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "WP-2059-8-6E** 1 1/8 M24 1 250-750 350-1000 1,000 4,000 13 .8 350 14 .3 6 .5 1 .8 46 3/8” 3/8” 60",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p50"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation de cette ligne n’est pas établie ; une pression de couple, de puissance ou de vitesse n’est pas transposée.",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p50"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-cleco-sp1000-pdf-p50",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/Cleco_SP-1000-EN_en.pdf#page=50",
			"sourceLabel": "Cleco, catalogue constructeur cleco-sp1000.pdf, page PDF 50",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : d4b1a134c27b40febe6ad33aa138bad7b337e6775f0fdc06fa8a058d4c99a3e9. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p50"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p50"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p50"
		]
	},
	"notes": [
		"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul."
	]
};

export default product;
