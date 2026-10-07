import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-kuken-kw-5000g",
	"slug": "cle-a-chocs-kuken-kw-5000g",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "KUKEN KW-5000G",
	"brand": "KUKEN",
	"model": "KW-5000G",
	"mpn": "KW-5000G",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit les caractéristiques individuelles. La consommation normale n’est pas explicitement rattachée à un régime en charge et à une pression de mesure.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-kuken-kw-5000g.webp",
		"alt": "Repères techniques : KUKEN KW-5000G",
		"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "kuken-kw-5000g",
		"label": "Référence KW-5000G",
		"distinguishingAttributes": {
			"reference": "KW-5000G",
			"Masse publiée": "16.0 kg (35.2 lb)",
			"Longueur publiée": "427.0 mm"
		}
	},
	"editorial": {
		"overview": "KUKEN KW-5000G. Le tableau établit les caractéristiques individuelles. La consommation normale n’est pas explicitement rattachée à un régime en charge et à une pression de mesure. Masse publiée : 16.0 kg (35.2 lb). Longueur publiée : 427.0 mm.",
		"verifiedFacts": [
			"Masse publiée : 16.0 kg (35.2 lb).",
			"Longueur publiée : 427.0 mm."
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
			"value": "16.0 kg (35.2 lb)",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p12"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "427.0 mm",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p12"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Les pressions des colonnes de couple et de vitesse ne sont pas transposées à la consommation.",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p12"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-kuken-best-selection-pdf-p12",
			"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf#page=12",
			"sourceLabel": "KUKEN, Best Selection, catalogue constructeur, page PDF 12",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0da76488e568242877887f713ecd81203eaa9f2322c20eb65648d25bb7e71cc7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p12"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p12"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p12"
		]
	},
	"notes": [
		"Le tableau établit les caractéristiques individuelles. La consommation normale n’est pas explicitement rattachée à un régime en charge et à une pression de mesure."
	]
};

export default product;
