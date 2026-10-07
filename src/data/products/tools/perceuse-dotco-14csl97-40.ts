import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-dotco-14csl97-40",
	"slug": "perceuse-dotco-14csl97-40",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Dotco 14CSL97-40",
	"brand": "Dotco",
	"model": "14CSL97-40",
	"mpn": "14CSL97-40",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-dotco-14csl97-40.webp",
		"alt": "Repères techniques : Dotco 14CSL97-40",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-14csl97-40",
		"label": "Référence 14CSL97-40",
		"distinguishingAttributes": {
			"reference": "14CSL97-40",
			"Vitesse publiée": "500 rpm",
			"Caractéristiques du tableau constructeur": "14CSL97-51 14CSL97-40 500 3/8\" 1.31 205 3/8\" 1/4\""
		}
	},
	"editorial": {
		"overview": "Dotco 14CSL97-40. Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul. Vitesse publiée : 500 rpm. Caractéristiques du tableau constructeur : 14CSL97-51 14CSL97-40 500 3/8\" 1.31 205 3/8\" 1/4\".",
		"verifiedFacts": [
			"Vitesse publiée : 500 rpm.",
			"Caractéristiques du tableau constructeur : 14CSL97-51 14CSL97-40 500 3/8\" 1.31 205 3/8\" 1/4\"."
		],
		"limitations": [
			"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
			"Référence physique explicitement listée dans un tableau constructeur. Aucune variante n’est générée à partir d’un code de nomenclature. Consulter le tableau source pour les dimensions et les exceptions exactes.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse publiée",
			"value": "500 rpm",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p50"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "14CSL97-51 14CSL97-40 500 3/8\" 1.31 205 3/8\" 1/4\"",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p50"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation de cette ligne n’est pas établie ; une pression de couple, de puissance ou de vitesse n’est pas transposée.",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p50"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-cleco-gi1250-pdf-p50",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=50",
			"sourceLabel": "Cleco, catalogue constructeur cleco-gi1250.pdf, page PDF 50",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 8668d5e77a6b2469dc9b9012841e65bbfb947234a8087faa6fdd90384b3babac. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p50"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p50"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p50"
		]
	},
	"notes": [
		"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul."
	]
};

export default product;
