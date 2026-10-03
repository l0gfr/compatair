const product = {
	"id": "visseuse-cleco-2rsa-10b",
	"slug": "visseuse-cleco-2rsa-10b",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Cleco 2RSA-10B",
	"brand": "Cleco",
	"model": "2RSA-10B",
	"mpn": "2RSA-10B",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-cleco-2rsa-10b.webp",
		"alt": "Repères techniques : Cleco 2RSA-10B",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/Cleco_SP-1000-EN_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "cleco-2rsa-10b",
		"label": "Référence 2RSA-10B",
		"distinguishingAttributes": {
			"reference": "2RSA-10B",
			"Consommation documentaire (SCFM)": "6",
			"Caractéristiques du tableau constructeur": "2RSA-10B 0 .5 - 8 .06 - 0 .9 1000 7 .6 194 0 .5 0 .20 1/8” 3/16” 6"
		}
	},
	"editorial": {
		"overview": "Cleco 2RSA-10B. Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul. Consommation documentaire (SCFM) : 6. Caractéristiques du tableau constructeur : 2RSA-10B 0 .5 - 8 .06 - 0 .9 1000 7 .6 194 0 .5 0 .20 1/8” 3/16” 6.",
		"verifiedFacts": [
			"Consommation documentaire (SCFM) : 6.",
			"Caractéristiques du tableau constructeur : 2RSA-10B 0 .5 - 8 .06 - 0 .9 1000 7 .6 194 0 .5 0 .20 1/8” 3/16” 6."
		],
		"limitations": [
			"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
			"Référence physique explicitement listée dans un tableau constructeur. Aucune variante n’est générée à partir d’un code de nomenclature. Consulter le tableau source pour les dimensions et les exceptions exactes.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Consommation documentaire (SCFM)",
			"value": "6",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p8"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "2RSA-10B 0 .5 - 8 .06 - 0 .9 1000 7 .6 194 0 .5 0 .20 1/8” 3/16” 6",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p8"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation de cette ligne n’est pas établie ; une pression de couple, de puissance ou de vitesse n’est pas transposée.",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-sp1000-pdf-p8"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-cleco-sp1000-pdf-p8",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/Cleco_SP-1000-EN_en.pdf#page=8",
			"sourceLabel": "Cleco, catalogue constructeur cleco-sp1000.pdf, page PDF 8",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : d4b1a134c27b40febe6ad33aa138bad7b337e6775f0fdc06fa8a058d4c99a3e9. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p8"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p8"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-cleco-sp1000-pdf-p8"
		]
	},
	"notes": [
		"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul."
	]
};

export default product;
