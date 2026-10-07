import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-dotco-14csl92-38",
	"slug": "perceuse-dotco-14csl92-38",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Dotco 14CSL92-38",
	"brand": "Dotco",
	"model": "14CSL92-38",
	"mpn": "14CSL92-38",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-dotco-14csl92-38.webp",
		"alt": "Repères techniques : Dotco 14CSL92-38",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-14csl92-38",
		"label": "Référence 14CSL92-38",
		"distinguishingAttributes": {
			"reference": "14CSL92-38",
			"Vitesse publiée": "3200 rpm",
			"Caractéristiques du tableau constructeur": "14CSL92-38 14CSL92-40 3200 1/4\" 0.95 160 1/4\" 1/4\""
		}
	},
	"editorial": {
		"overview": "Dotco 14CSL92-38. Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul. Vitesse publiée : 3200 rpm. Caractéristiques du tableau constructeur : 14CSL92-38 14CSL92-40 3200 1/4\" 0.95 160 1/4\" 1/4\".",
		"verifiedFacts": [
			"Vitesse publiée : 3200 rpm.",
			"Caractéristiques du tableau constructeur : 14CSL92-38 14CSL92-40 3200 1/4\" 0.95 160 1/4\" 1/4\"."
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
			"value": "3200 rpm",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p50"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "14CSL92-38 14CSL92-40 3200 1/4\" 0.95 160 1/4\" 1/4\"",
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
