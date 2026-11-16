import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-vibrante-kuken-kst-7s",
	"slug": "ponceuse-vibrante-kuken-kst-7s",
	"categoryId": "ponceuse-vibrante",
	"category": "ponceuse-vibrante",
	"label": "KUKEN KST-7S",
	"brand": "KUKEN",
	"model": "KST-7S",
	"mpn": "KST-7S",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit les caractéristiques individuelles. La consommation normale n’est pas explicitement rattachée à un régime en charge et à une pression de mesure.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-vibrante-kuken-kst-7s-technical-20261116-reviews.svg",
		"alt": "Repères techniques : KUKEN KST-7S",
		"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "kuken-kst-7s",
		"label": "Référence KST-7S",
		"distinguishingAttributes": {
			"reference": "KST-7S",
			"Masse publiée": "1.3 kg (2.9 lb)",
			"Longueur publiée": "282.0 mm"
		}
	},
	"editorial": {
		"overview": "La KST-7S est une ponceuse à mouvement rectiligne, course de 6 mm, semelle 175 × 75 mm et 7 000 courses/min. Les KOS-42 et KOS-42S utilisent une orbite de 3 mm et une semelle 110 × 75 mm : ce sont d’autres mouvements de finition. La KST-7S mesure 282 mm et pèse 1,3 kg. Les 0,25 m³/min du tableau n’ont pas de régime de consommation établi.",
		"verifiedFacts": [
			"Masse publiée : 1.3 kg (2.9 lb).",
			"Longueur publiée : 282.0 mm."
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
			"value": "1.3 kg (2.9 lb)",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p22"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "282.0 mm",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p22"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Les pressions des colonnes de couple et de vitesse ne sont pas transposées à la consommation.",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p22"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-kuken-best-selection-pdf-p22",
			"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf#page=22",
			"sourceLabel": "KUKEN, Best Selection, catalogue constructeur, page PDF 22",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0da76488e568242877887f713ecd81203eaa9f2322c20eb65648d25bb7e71cc7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:ponceuse-vibrante-kuken-kst-7s:0",
			"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf",
			"sourceLabel": "KUKEN, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La KST-7S est une ponceuse à mouvement rectiligne, course de 6 mm, semelle 175 × 75 mm et 7 000 courses/min. Les KOS-42 et KOS-42S utilisent une orbite de 3 mm et une semelle 110 × 75 mm : ce sont d’autres mouvements de finition. La KST-7S mesure 282 mm et pèse 1,3 kg. Les 0,25 m³/min du tableau n’ont pas de régime de consommation établi. GET complet SHA-256 0da76488e568242877887f713ecd81203eaa9f2322c20eb65648d25bb7e71cc7. Pages PDF lues : 22."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p22"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p22"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p22"
		]
	},
	"notes": [
		"Le tableau établit les caractéristiques individuelles. La consommation normale n’est pas explicitement rattachée à un régime en charge et à une pression de mesure."
	]
};

export default product;
