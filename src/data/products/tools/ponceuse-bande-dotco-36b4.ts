import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-bande-dotco-36b4",
	"slug": "ponceuse-bande-dotco-36b4",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "Dotco 36B4",
	"brand": "Dotco",
	"model": "36B4",
	"mpn": "36B4",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-bande-dotco-36b4.webp",
		"alt": "Repères techniques : Dotco 36B4",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-36b4",
		"label": "Référence 36B4",
		"distinguishingAttributes": {
			"reference": "36B4",
			"Vitesse publiée": "20000 rpm",
			"Caractéristiques du tableau constructeur": "36B4• 20000 1\" wide x 12\" long sanding belt C Straight 0.8 287 1/4\""
		}
	},
	"editorial": {
		"overview": "Dotco 36B4. Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul. Vitesse publiée : 20000 rpm. Caractéristiques du tableau constructeur : 36B4• 20000 1\" wide x 12\" long sanding belt C Straight 0.8 287 1/4\".",
		"verifiedFacts": [
			"Vitesse publiée : 20000 rpm.",
			"Caractéristiques du tableau constructeur : 36B4• 20000 1\" wide x 12\" long sanding belt C Straight 0.8 287 1/4\"."
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
			"value": "20000 rpm",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p33"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "36B4• 20000 1\" wide x 12\" long sanding belt C Straight 0.8 287 1/4\"",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p33"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation de cette ligne n’est pas établie ; une pression de couple, de puissance ou de vitesse n’est pas transposée.",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p33"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-cleco-gi1250-pdf-p33",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=33",
			"sourceLabel": "Cleco, catalogue constructeur cleco-gi1250.pdf, page PDF 33",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 8668d5e77a6b2469dc9b9012841e65bbfb947234a8087faa6fdd90384b3babac. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p33"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p33"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p33"
		]
	},
	"notes": [
		"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul."
	]
};

export default product;
