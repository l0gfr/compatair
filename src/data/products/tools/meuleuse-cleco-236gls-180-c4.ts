import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-cleco-236gls-180-c4",
	"slug": "meuleuse-cleco-236gls-180-c4",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Cleco 236GLS-180-C4",
	"brand": "Cleco",
	"model": "236GLS-180-C4",
	"mpn": "236GLS-180-C4",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-cleco-236gls-180-c4.webp",
		"alt": "Repères techniques : Cleco 236GLS-180-C4",
		"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "cleco-236gls-180-c4",
		"label": "Référence 236GLS-180-C4",
		"distinguishingAttributes": {
			"reference": "236GLS-180-C4",
			"Consommation documentaire (SCFM)": "28",
			"Caractéristiques du tableau constructeur": "236GLS-180-C4 Inline Grinder, Side Exhaust 1/4” Collet 1” (25mm) Car. Burr, 2” (50mm) Wheel 18,000 0.9 0.7 6.8 173 1.4 0.6 28"
		}
	},
	"editorial": {
		"overview": "Cleco 236GLS-180-C4. Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul. Consommation documentaire (SCFM) : 28. Caractéristiques du tableau constructeur : 236GLS-180-C4 Inline Grinder, Side Exhaust 1/4” Collet 1” (25mm) Car. Burr, 2” (50mm) Wheel 18,000 0.9 0.7 6.8 173 1.4 0.6 28.",
		"verifiedFacts": [
			"Consommation documentaire (SCFM) : 28.",
			"Caractéristiques du tableau constructeur : 236GLS-180-C4 Inline Grinder, Side Exhaust 1/4” Collet 1” (25mm) Car. Burr, 2” (50mm) Wheel 18,000 0.9 0.7 6.8 173 1.4 0.6 28."
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
			"value": "28",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p39"
			]
		},
		{
			"label": "Caractéristiques du tableau constructeur",
			"value": "236GLS-180-C4 Inline Grinder, Side Exhaust 1/4” Collet 1” (25mm) Car. Burr, 2” (50mm) Wheel 18,000 0.9 0.7 6.8 173 1.4 0.6 28",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p39"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure de consommation de cette ligne n’est pas établie ; une pression de couple, de puissance ou de vitesse n’est pas transposée.",
			"evidenceIds": [
				"october2b-tools-oct2b-cleco-gi1250-pdf-p39"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-cleco-gi1250-pdf-p39",
			"sourceUrl": "https://www.clecotools.com/sites/clecotools/files/pim_pdfs/ATG_GI-1250-EU_en.pdf#page=39",
			"sourceLabel": "Cleco, catalogue constructeur cleco-gi1250.pdf, page PDF 39",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 8668d5e77a6b2469dc9b9012841e65bbfb947234a8087faa6fdd90384b3babac. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p39"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p39"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-cleco-gi1250-pdf-p39"
		]
	},
	"notes": [
		"Le tableau établit la référence et ses caractéristiques mécaniques. La consommation n’est pas associée à un point de pression et un régime suffisants pour le calcul."
	]
};

export default product;
