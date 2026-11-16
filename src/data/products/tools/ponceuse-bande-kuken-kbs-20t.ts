import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-bande-kuken-kbs-20t",
	"slug": "ponceuse-bande-kuken-kbs-20t",
	"categoryId": "ponceuse-bande",
	"category": "ponceuse-bande",
	"label": "KUKEN KBS-20T",
	"brand": "KUKEN",
	"model": "KBS-20T",
	"mpn": "KBS-20T",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit les caractéristiques individuelles. La consommation normale n’est pas explicitement rattachée à un régime en charge et à une pression de mesure.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-bande-kuken-kbs-20t-technical-20261116-reviews.svg",
		"alt": "Repères techniques : KUKEN KBS-20T",
		"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "kuken-kbs-20t",
		"label": "Référence KBS-20T",
		"distinguishingAttributes": {
			"reference": "KBS-20T",
			"Masse publiée": "1.6 kg (3.5 lb)",
			"Longueur publiée": "427.0 mm"
		}
	},
	"editorial": {
		"overview": "La KBS-20T reçoit une bande de 20 × 520 mm, contre 10 ou 12 × 330 mm pour les KBS-10A et KBS-12. Elle annonce 14 000 tr/min, 427 mm et 1,6 kg : le bras et la largeur de bande changent l’accès à la pièce. Les 0,62 m³/min figurent dans un tableau à 0,62 MPa, sans régime de consommation. Le conflit de vitesse de la KBS-12 reste propre à cette voisine et n’est pas transposé ici.",
		"verifiedFacts": [
			"Masse publiée : 1.6 kg (3.5 lb).",
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
			"value": "1.6 kg (3.5 lb)",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p25"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "427.0 mm",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p25"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Les pressions des colonnes de couple et de vitesse ne sont pas transposées à la consommation.",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p25"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-kuken-best-selection-pdf-p25",
			"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf#page=25",
			"sourceLabel": "KUKEN, Best Selection, catalogue constructeur, page PDF 25",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0da76488e568242877887f713ecd81203eaa9f2322c20eb65648d25bb7e71cc7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:ponceuse-bande-kuken-kbs-20t:0",
			"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf",
			"sourceLabel": "KUKEN, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La KBS-20T reçoit une bande de 20 × 520 mm, contre 10 ou 12 × 330 mm pour les KBS-10A et KBS-12. Elle annonce 14 000 tr/min, 427 mm et 1,6 kg : le bras et la largeur de bande changent l’accès à la pièce. Les 0,62 m³/min figurent dans un tableau à 0,62 MPa, sans régime de consommation. Le conflit de vitesse de la KBS-12 reste propre à cette voisine et n’est pas transposé ici. GET complet SHA-256 0da76488e568242877887f713ecd81203eaa9f2322c20eb65648d25bb7e71cc7. Pages PDF lues : 25."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p25"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p25"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p25"
		]
	},
	"notes": [
		"Le tableau établit les caractéristiques individuelles. La consommation normale n’est pas explicitement rattachée à un régime en charge et à une pression de mesure."
	]
};

export default product;
