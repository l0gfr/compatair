import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-master-power-mp4424",
	"slug": "meuleuse-master-power-mp4424",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Master Power MP4424",
	"brand": "Master Power",
	"model": "MP4424",
	"mpn": "MP4424",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-master-power-mp4424.webp",
		"alt": "Repères techniques : Master Power MP4424",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "master-power-mp4424",
		"label": "Référence MP4424",
		"distinguishingAttributes": {
			"reference": "MP4424",
			"Fonction dans le catalogue": "meuleuse",
			"Caractéristiques du tableau constructeur": "MP4424 220 20000 1\" 1/2\" 160 0.55 10 0.51 1/4\" 1/4\""
		}
	},
	"editorial": {
		"overview": "Master Power MP4424. Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul. Fonction dans le catalogue : meuleuse. Caractéristiques du tableau constructeur : MP4424 220 20000 1\" 1/2\" 160 0.55 10 0.51 1/4\" 1/4\".",
		"verifiedFacts": [
			"Fonction dans le catalogue : meuleuse.",
			"Caractéristiques du tableau constructeur : MP4424 220 20000 1\" 1/2\" 160 0.55 10 0.51 1/4\" 1/4\"."
		],
		"limitations": [
			"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
			"Référence physique explicitement listée dans un tableau constructeur. Aucune variante n’est générée à partir d’un code de nomenclature. Consulter le tableau source pour les dimensions et les exceptions exactes.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Fonction dans le catalogue",
			"value": "meuleuse",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p58"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "MP4424 220 20000 1\" 1/2\" 160 0.55 10 0.51 1/4\" 1/4\"",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p58"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation de cette ligne n’est pas établie ; une pression de couple, de puissance ou de vitesse n’est pas transposée.",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p58"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-cleco-gi1250-pdf-p58",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=58",
			"sourceLabel": "Cleco, catalogue constructeur cleco-gi1250.pdf, page PDF 58",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 8668d5e77a6b2469dc9b9012841e65bbfb947234a8087faa6fdd90384b3babac. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p58"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p58"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p58"
		]
	},
	"notes": [
		"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul."
	]
};

export default product;
