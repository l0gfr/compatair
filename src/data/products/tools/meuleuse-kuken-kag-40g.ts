import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-kuken-kag-40g",
	"slug": "meuleuse-kuken-kag-40g",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "KUKEN KAG-40G",
	"brand": "KUKEN",
	"model": "KAG-40G",
	"mpn": "KAG-40G",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit les caractéristiques individuelles. La consommation normale n’est pas explicitement rattachée à un régime en charge et à une pression de mesure.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-kuken-kag-40g.webp",
		"alt": "Repères techniques : KUKEN KAG-40G",
		"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "kuken-kag-40g",
		"label": "Référence KAG-40G",
		"distinguishingAttributes": {
			"reference": "KAG-40G",
			"Masse publiée": "0.95 kg (2.1 lb)",
			"Longueur publiée": "194.0 mm"
		}
	},
	"editorial": {
		"overview": "KUKEN KAG-40G. Le tableau établit les caractéristiques individuelles. La consommation normale n’est pas explicitement rattachée à un régime en charge et à une pression de mesure. Masse publiée : 0.95 kg (2.1 lb). Longueur publiée : 194.0 mm.",
		"verifiedFacts": [
			"Masse publiée : 0.95 kg (2.1 lb).",
			"Longueur publiée : 194.0 mm."
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
			"value": "0.95 kg (2.1 lb)",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p27"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "194.0 mm",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p27"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Les pressions des colonnes de couple et de vitesse ne sont pas transposées à la consommation.",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p27"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-kuken-best-selection-pdf-p27",
			"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf#page=27",
			"sourceLabel": "KUKEN, Best Selection, catalogue constructeur, page PDF 27",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0da76488e568242877887f713ecd81203eaa9f2322c20eb65648d25bb7e71cc7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p27"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p27"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p27"
		]
	},
	"notes": [
		"Le tableau établit les caractéristiques individuelles. La consommation normale n’est pas explicitement rattachée à un régime en charge et à une pression de mesure."
	]
};

export default product;
