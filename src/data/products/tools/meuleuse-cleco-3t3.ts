const product = {
	"id": "meuleuse-cleco-3t3",
	"slug": "meuleuse-cleco-3t3",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Cleco 3T3",
	"brand": "Cleco",
	"model": "3T3",
	"mpn": "3T3",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-cleco-3t3.webp",
		"alt": "Repères techniques : Cleco 3T3",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "cleco-3t3",
		"label": "Référence 3T3",
		"distinguishingAttributes": {
			"reference": "3T3",
			"Consommation documentaire (SCFM)": "21",
			"Caractéristiques du tableau constructeur": "25GELC-140-W 3T3 Inline Grinder, Extended, Side Exhaust 3/8”-24 External Thread 3” (75mm) Type 1 14,000 1.4 1.0 14.5 368 3.7 1.7 21"
		}
	},
	"editorial": {
		"overview": "Cleco 3T3. Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul. Consommation documentaire (SCFM) : 21. Caractéristiques du tableau constructeur : 25GELC-140-W 3T3 Inline Grinder, Extended, Side Exhaust 3/8”-24 External Thread 3” (75mm) Type 1 14,000 1.4 1.0 14.5 368 3.7 1.7 21.",
		"verifiedFacts": [
			"Consommation documentaire (SCFM) : 21.",
			"Caractéristiques du tableau constructeur : 25GELC-140-W 3T3 Inline Grinder, Extended, Side Exhaust 3/8”-24 External Thread 3” (75mm) Type 1 14,000 1.4 1.0 14.5 368 3.7 1.7 21."
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
			"value": "21",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p40"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "25GELC-140-W 3T3 Inline Grinder, Extended, Side Exhaust 3/8”-24 External Thread 3” (75mm) Type 1 14,000 1.4 1.0 14.5 368 3.7 1.7 21",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p40"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation de cette ligne n’est pas établie ; une pression de couple, de puissance ou de vitesse n’est pas transposée.",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p40"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-cleco-gi1250-pdf-p40",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=40",
			"sourceLabel": "Cleco, catalogue constructeur cleco-gi1250.pdf, page PDF 40",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 8668d5e77a6b2469dc9b9012841e65bbfb947234a8087faa6fdd90384b3babac. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p40"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p40"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p40"
		]
	},
	"notes": [
		"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul."
	]
};

export default product;
