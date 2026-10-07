import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-master-power-mp4200",
	"slug": "meuleuse-master-power-mp4200",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Master Power MP4200",
	"brand": "Master Power",
	"model": "MP4200",
	"mpn": "MP4200",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-master-power-mp4200.webp",
		"alt": "Repères techniques : Master Power MP4200",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "master-power-mp4200",
		"label": "Référence MP4200",
		"distinguishingAttributes": {
			"reference": "MP4200",
			"Fonction dans le catalogue": "meuleuse",
			"Caractéristiques du tableau constructeur": "MP4200 100 70000 1/4\" 1/4\" 136 0.2 5 mm 0.23 1/8\" 1/8\", 3 mm"
		}
	},
	"editorial": {
		"overview": "Master Power MP4200. Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul. Fonction dans le catalogue : meuleuse. Caractéristiques du tableau constructeur : MP4200 100 70000 1/4\" 1/4\" 136 0.2 5 mm 0.23 1/8\" 1/8\", 3 mm.",
		"verifiedFacts": [
			"Fonction dans le catalogue : meuleuse.",
			"Caractéristiques du tableau constructeur : MP4200 100 70000 1/4\" 1/4\" 136 0.2 5 mm 0.23 1/8\" 1/8\", 3 mm."
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
				"october2b-tools-oct2b-cleco-gi1250-pdf-p59"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "MP4200 100 70000 1/4\" 1/4\" 136 0.2 5 mm 0.23 1/8\" 1/8\", 3 mm",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p59"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation de cette ligne n’est pas établie ; une pression de couple, de puissance ou de vitesse n’est pas transposée.",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p59"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-cleco-gi1250-pdf-p59",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=59",
			"sourceLabel": "Cleco, catalogue constructeur cleco-gi1250.pdf, page PDF 59",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 8668d5e77a6b2469dc9b9012841e65bbfb947234a8087faa6fdd90384b3babac. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p59"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p59"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p59"
		]
	},
	"notes": [
		"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul."
	]
};

export default product;
