import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-dotco-15ls286-62",
	"slug": "perceuse-dotco-15ls286-62",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Dotco 15LS286-62",
	"brand": "Dotco",
	"model": "15LS286-62",
	"mpn": "15LS286-62",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-dotco-15ls286-62.webp",
		"alt": "Repères techniques : Dotco 15LS286-62",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-15ls286-62",
		"label": "Référence 15LS286-62",
		"distinguishingAttributes": {
			"reference": "15LS286-62",
			"Vitesse publiée": "840 rpm",
			"Caractéristiques du tableau constructeur": "15LS286-62 840 1/4\" C 0.85 323 1/4\" -28* 1/4\""
		}
	},
	"editorial": {
		"overview": "Dotco 15LS286-62. Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul. Vitesse publiée : 840 rpm. Caractéristiques du tableau constructeur : 15LS286-62 840 1/4\" C 0.85 323 1/4\" -28* 1/4\".",
		"verifiedFacts": [
			"Vitesse publiée : 840 rpm.",
			"Caractéristiques du tableau constructeur : 15LS286-62 840 1/4\" C 0.85 323 1/4\" -28* 1/4\"."
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
			"value": "840 rpm",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p52"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "15LS286-62 840 1/4\" C 0.85 323 1/4\" -28* 1/4\"",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p52"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation de cette ligne n’est pas établie ; une pression de couple, de puissance ou de vitesse n’est pas transposée.",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p52"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-cleco-gi1250-pdf-p52",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=52",
			"sourceLabel": "Cleco, catalogue constructeur cleco-gi1250.pdf, page PDF 52",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 8668d5e77a6b2469dc9b9012841e65bbfb947234a8087faa6fdd90384b3babac. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p52"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p52"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p52"
		]
	},
	"notes": [
		"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul."
	]
};

export default product;
