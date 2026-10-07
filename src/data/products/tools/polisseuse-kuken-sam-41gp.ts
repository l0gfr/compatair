import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "polisseuse-kuken-sam-41gp",
	"slug": "polisseuse-kuken-sam-41gp",
	"categoryId": "polisseuse",
	"category": "polisseuse",
	"label": "KUKEN SAM-41GP",
	"brand": "KUKEN",
	"model": "SAM-41GP",
	"mpn": "SAM-41GP",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit les caractéristiques individuelles. La consommation normale n’est pas explicitement rattachée à un régime en charge et à une pression de mesure.",
	"confidence": "B",
	"image": {
		"src": "/images/products/polisseuse-kuken-sam-41gp.webp",
		"alt": "Repères techniques : KUKEN SAM-41GP",
		"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "kuken-sam-41gp",
		"label": "Référence SAM-41GP",
		"distinguishingAttributes": {
			"reference": "SAM-41GP",
			"Masse publiée": "0.7 kg (1.5 lb)",
			"Longueur publiée": "153.0 mm"
		}
	},
	"editorial": {
		"overview": "KUKEN SAM-41GP. Le tableau établit les caractéristiques individuelles. La consommation normale n’est pas explicitement rattachée à un régime en charge et à une pression de mesure. Masse publiée : 0.7 kg (1.5 lb). Longueur publiée : 153.0 mm.",
		"verifiedFacts": [
			"Masse publiée : 0.7 kg (1.5 lb).",
			"Longueur publiée : 153.0 mm."
		],
		"limitations": [
			"Le tableau établit les caractéristiques individuelles. La consommation normale n’est pas explicitement rattachée à un régime en charge et à une pression de mesure.",
			"Catalogue constructeur numérisé ; les conversions de masse servent à relire la ligne source.",
			"Les contrôleurs, réaction/supports, sockets, unités FRL et accessoires sont exclus. Les suffixes retenus sont des modèles explicitement imprimés.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "0.7 kg (1.5 lb)",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p24"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "153.0 mm",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p24"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Les pressions des colonnes de couple et de vitesse ne sont pas transposées à la consommation.",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p24"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-kuken-best-selection-pdf-p24",
			"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf#page=24",
			"sourceLabel": "KUKEN, Best Selection, catalogue constructeur, page PDF 24",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0da76488e568242877887f713ecd81203eaa9f2322c20eb65648d25bb7e71cc7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p24"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p24"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p24"
		]
	},
	"notes": [
		"Le tableau établit les caractéristiques individuelles. La consommation normale n’est pas explicitement rattachée à un régime en charge et à une pression de mesure."
	]
};

export default product;
