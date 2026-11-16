import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-kuken-kw-385g",
	"slug": "cle-a-chocs-kuken-kw-385g",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "KUKEN KW-385G",
	"brand": "KUKEN",
	"model": "KW-385G",
	"mpn": "KW-385G",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit les caractéristiques individuelles. La consommation normale n’est pas explicitement rattachée à un régime en charge et à une pression de mesure.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-kuken-kw-385g-technical-20261116-reviews.svg",
		"alt": "Repères techniques : KUKEN KW-385G",
		"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "kuken-kw-385g",
		"label": "Référence KW-385G",
		"distinguishingAttributes": {
			"reference": "KW-385G",
			"Masse publiée": "9.4 kg (20.2 lb)",
			"Longueur publiée": "365.0 mm"
		}
	},
	"editorial": {
		"overview": "La KW-385G utilise un carré 1 pouce et un mécanisme Swing Hammer, pour 340–1 370 Nm recommandés et 1 600 Nm maximum. La 385GL allonge le corps de 365 à 525 mm et passe de 9,4 à 10,1 kg ; elle n’augmente pas le couple publié. La brochure associe 9,4 kg à 20,2 lb, valeurs non équivalentes : les deux transcriptions restent visibles. Les 0,73 m³/min n’ont pas de régime établi.",
		"verifiedFacts": [
			"Masse publiée : 9.4 kg (20.2 lb).",
			"Longueur publiée : 365.0 mm."
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
			"value": "9.4 kg (20.2 lb)",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p15"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "365.0 mm",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p15"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Les pressions des colonnes de couple et de vitesse ne sont pas transposées à la consommation.",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p15"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-kuken-best-selection-pdf-p15",
			"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf#page=15",
			"sourceLabel": "KUKEN, Best Selection, catalogue constructeur, page PDF 15",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0da76488e568242877887f713ecd81203eaa9f2322c20eb65648d25bb7e71cc7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:cle-a-chocs-kuken-kw-385g:0",
			"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf",
			"sourceLabel": "KUKEN, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La KW-385G utilise un carré 1 pouce et un mécanisme Swing Hammer, pour 340–1 370 Nm recommandés et 1 600 Nm maximum. La 385GL allonge le corps de 365 à 525 mm et passe de 9,4 à 10,1 kg ; elle n’augmente pas le couple publié. La brochure associe 9,4 kg à 20,2 lb, valeurs non équivalentes : les deux transcriptions restent visibles. Les 0,73 m³/min n’ont pas de régime établi. GET complet SHA-256 0da76488e568242877887f713ecd81203eaa9f2322c20eb65648d25bb7e71cc7. Pages PDF lues : 15."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p15"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p15"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p15"
		]
	},
	"notes": [
		"Le tableau établit les caractéristiques individuelles. La consommation normale n’est pas explicitement rattachée à un régime en charge et à une pression de mesure."
	]
};

export default product;
