import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-cleco-24rta40t4",
	"slug": "boulonneuse-cleco-24rta40t4",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Cleco 24RTA40T4",
	"brand": "Cleco",
	"model": "24RTA40T4",
	"mpn": "24RTA40T4",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-cleco-24rta40t4.webp",
		"alt": "Repères techniques : Cleco 24RTA40T4",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/Cleco_SP-1000-EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "cleco-24rta40t4",
		"label": "Référence 24RTA40T4",
		"distinguishingAttributes": {
			"reference": "24RTA40T4",
			"Fonction dans le catalogue": "boulonneuse",
			"Caractéristiques du tableau constructeur": "24RTA40T4 130 19 .2 - 29 .5 26 - 40 5 .1 2 .3 17 .7 449 7/8 \u2014 2 .36 60 0 .59 15 0 .67 17 .0 0 .93 23 .5"
		}
	},
	"editorial": {
		"overview": "Cleco 24RTA40T4. Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul. Fonction dans le catalogue : boulonneuse. Caractéristiques du tableau constructeur : 24RTA40T4 130 19 .2 - 29 .5 26 - 40 5 .1 2 .3 17 .7 449 7/8 \u2014 2 .36 60 0 .59 15 0 .67 17 .0 0 .93 23 .5.",
		"verifiedFacts": [
			"Fonction dans le catalogue : boulonneuse.",
			"Caractéristiques du tableau constructeur : 24RTA40T4 130 19 .2 - 29 .5 26 - 40 5 .1 2 .3 17 .7 449 7/8 \u2014 2 .36 60 0 .59 15 0 .67 17 .0 0 .93 23 .5."
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
			"value": "boulonneuse",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p35"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "24RTA40T4 130 19 .2 - 29 .5 26 - 40 5 .1 2 .3 17 .7 449 7/8 \u2014 2 .36 60 0 .59 15 0 .67 17 .0 0 .93 23 .5",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p35"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation de cette ligne n’est pas établie ; une pression de couple, de puissance ou de vitesse n’est pas transposée.",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p35"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-cleco-sp1000-pdf-p35",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/Cleco_SP-1000-EN_en.pdf#page=35",
			"sourceLabel": "Cleco, catalogue constructeur cleco-sp1000.pdf, page PDF 35",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : d4b1a134c27b40febe6ad33aa138bad7b337e6775f0fdc06fa8a058d4c99a3e9. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p35"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p35"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p35"
		]
	},
	"notes": [
		"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul."
	]
};

export default product;
