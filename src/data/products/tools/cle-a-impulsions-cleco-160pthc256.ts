import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-impulsions-cleco-160pthc256",
	"slug": "cle-a-impulsions-cleco-160pthc256",
	"categoryId": "cle-a-impulsions",
	"category": "cle-a-impulsions",
	"label": "Cleco 160PTHC256",
	"brand": "Cleco",
	"model": "160PTHC256",
	"mpn": "160PTHC256",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-impulsions-cleco-160pthc256.webp",
		"alt": "Repères techniques : Cleco 160PTHC256",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "cleco-160pthc256",
		"label": "Référence 160PTHC256",
		"distinguishingAttributes": {
			"reference": "160PTHC256",
			"Fonction dans le catalogue": "cle-a-impulsions",
			"Caractéristiques du tableau constructeur": "160PTHC256 Carré 3/4\" M16 100 - 160 2 500 2,6 36 245 0,25 / 0,72 < 77 < 2,5 1/2\""
		}
	},
	"editorial": {
		"overview": "Cleco 160PTHC256. Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul. Fonction dans le catalogue : cle-a-impulsions. Caractéristiques du tableau constructeur : 160PTHC256 Carré 3/4\" M16 100 - 160 2 500 2,6 36 245 0,25 / 0,72 < 77 < 2,5 1/2\".",
		"verifiedFacts": [
			"Fonction dans le catalogue : cle-a-impulsions.",
			"Caractéristiques du tableau constructeur : 160PTHC256 Carré 3/4\" M16 100 - 160 2 500 2,6 36 245 0,25 / 0,72 < 77 < 2,5 1/2\"."
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
			"value": "cle-a-impulsions",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p82"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "160PTHC256 Carré 3/4\" M16 100 - 160 2 500 2,6 36 245 0,25 / 0,72 < 77 < 2,5 1/2\"",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p82"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation de cette ligne n’est pas établie ; une pression de couple, de puissance ou de vitesse n’est pas transposée.",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p82"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-cleco-gi1250-pdf-p82",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=82",
			"sourceLabel": "Cleco, catalogue constructeur cleco-gi1250.pdf, page PDF 82",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 8668d5e77a6b2469dc9b9012841e65bbfb947234a8087faa6fdd90384b3babac. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p82"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p82"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p82"
		]
	},
	"notes": [
		"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul."
	]
};

export default product;
