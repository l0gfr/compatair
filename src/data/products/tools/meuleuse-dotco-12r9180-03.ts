import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-dotco-12r9180-03",
	"slug": "meuleuse-dotco-12r9180-03",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Dotco 12R9180-03",
	"brand": "Dotco",
	"model": "12R9180-03",
	"mpn": "12R9180-03",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-dotco-12r9180-03.webp",
		"alt": "Repères techniques : Dotco 12R9180-03",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-12r9180-03",
		"label": "Référence 12R9180-03",
		"distinguishingAttributes": {
			"reference": "12R9180-03",
			"Vitesse publiée": "65000 rpm",
			"Caractéristiques du tableau constructeur": "12R9180-03* 65000** 1/8\" carbide bur,1/8\" diamond pin C 0.2 147 3 mm 1/8\""
		}
	},
	"editorial": {
		"overview": "Dotco 12R9180-03. Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul. Vitesse publiée : 65000 rpm. Caractéristiques du tableau constructeur : 12R9180-03* 65000** 1/8\" carbide bur,1/8\" diamond pin C 0.2 147 3 mm 1/8\".",
		"verifiedFacts": [
			"Vitesse publiée : 65000 rpm.",
			"Caractéristiques du tableau constructeur : 12R9180-03* 65000** 1/8\" carbide bur,1/8\" diamond pin C 0.2 147 3 mm 1/8\"."
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
			"value": "65000 rpm",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p25"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "12R9180-03* 65000** 1/8\" carbide bur,1/8\" diamond pin C 0.2 147 3 mm 1/8\"",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p25"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation de cette ligne n’est pas établie ; une pression de couple, de puissance ou de vitesse n’est pas transposée.",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p25"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-cleco-gi1250-pdf-p25",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=25",
			"sourceLabel": "Cleco, catalogue constructeur cleco-gi1250.pdf, page PDF 25",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 8668d5e77a6b2469dc9b9012841e65bbfb947234a8087faa6fdd90384b3babac. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p25"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p25"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p25"
		]
	},
	"notes": [
		"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul."
	]
};

export default product;
