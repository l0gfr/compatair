import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-dotco-10b2500-01",
	"slug": "meuleuse-dotco-10b2500-01",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Dotco 10B2500-01",
	"brand": "Dotco",
	"model": "10B2500-01",
	"mpn": "10B2500-01",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-dotco-10b2500-01.webp",
		"alt": "Repères techniques : Dotco 10B2500-01",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "dotco-10b2500-01",
		"label": "Référence 10B2500-01",
		"distinguishingAttributes": {
			"reference": "10B2500-01",
			"Vitesse publiée": "23000 rpm",
			"Caractéristiques du tableau constructeur": "10B2500-01 23000 1\" carbide bur, 1 1/2 grinding wheel A 0.6 159 5.6 - 6.4 1/4\""
		}
	},
	"editorial": {
		"overview": "Dotco 10B2500-01. Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul. Vitesse publiée : 23000 rpm. Caractéristiques du tableau constructeur : 10B2500-01 23000 1\" carbide bur, 1 1/2 grinding wheel A 0.6 159 5.6 - 6.4 1/4\".",
		"verifiedFacts": [
			"Vitesse publiée : 23000 rpm.",
			"Caractéristiques du tableau constructeur : 10B2500-01 23000 1\" carbide bur, 1 1/2 grinding wheel A 0.6 159 5.6 - 6.4 1/4\"."
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
			"value": "23000 rpm",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p27"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "10B2500-01 23000 1\" carbide bur, 1 1/2 grinding wheel A 0.6 159 5.6 - 6.4 1/4\"",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p27"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation de cette ligne n’est pas établie ; une pression de couple, de puissance ou de vitesse n’est pas transposée.",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p27"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-cleco-gi1250-pdf-p27",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=27",
			"sourceLabel": "Cleco, catalogue constructeur cleco-gi1250.pdf, page PDF 27",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 8668d5e77a6b2469dc9b9012841e65bbfb947234a8087faa6fdd90384b3babac. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p27"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p27"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p27"
		]
	},
	"notes": [
		"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul."
	]
};

export default product;
