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
		"src": "/images/products/meuleuse-kuken-kag-40g-technical-20261116-reviews.svg",
		"alt": "Repères techniques : KUKEN KAG-40G",
		"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
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
		"overview": "La KAG-40G est la version à gâchette de la meuleuse 100 mm, avec alésage 16 mm et 12 000 tr/min. La KAG-40 utilise un levier et pèse 1 kg pour 190 mm, contre 0,95 kg et 194 mm ; la KAG-20 est destinée aux disques de 50 mm. Les 0,35 m³/min du tableau à 0,62 MPa restent sans régime de consommation explicite.",
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
		},
		{
			"id": "review:2026-11-16-reviews:meuleuse-kuken-kag-40g:0",
			"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf",
			"sourceLabel": "KUKEN, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La KAG-40G est la version à gâchette de la meuleuse 100 mm, avec alésage 16 mm et 12 000 tr/min. La KAG-40 utilise un levier et pèse 1 kg pour 190 mm, contre 0,95 kg et 194 mm ; la KAG-20 est destinée aux disques de 50 mm. Les 0,35 m³/min du tableau à 0,62 MPa restent sans régime de consommation explicite. GET complet SHA-256 0da76488e568242877887f713ecd81203eaa9f2322c20eb65648d25bb7e71cc7. Pages PDF lues : 27."
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
