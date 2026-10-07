import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-kuken-kr-133a",
	"slug": "cle-a-cliquet-kuken-kr-133a",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "KUKEN KR-133A",
	"brand": "KUKEN",
	"model": "KR-133A",
	"mpn": "KR-133A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit les caractéristiques individuelles. La consommation normale n’est pas explicitement rattachée à un régime en charge et à une pression de mesure.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-kuken-kr-133a.webp",
		"alt": "Repères techniques : KUKEN KR-133A",
		"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "kuken-kr-133a",
		"label": "Référence KR-133A",
		"distinguishingAttributes": {
			"reference": "KR-133A",
			"Masse publiée": "0.54 kg (1.2 lb)",
			"Longueur publiée": "170.0 mm"
		}
	},
	"editorial": {
		"overview": "KUKEN KR-133A. Le tableau établit les caractéristiques individuelles. La consommation normale n’est pas explicitement rattachée à un régime en charge et à une pression de mesure. Masse publiée : 0.54 kg (1.2 lb). Longueur publiée : 170.0 mm.",
		"verifiedFacts": [
			"Masse publiée : 0.54 kg (1.2 lb).",
			"Longueur publiée : 170.0 mm."
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
			"value": "0.54 kg (1.2 lb)",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p19"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "170.0 mm",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p19"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Les pressions des colonnes de couple et de vitesse ne sont pas transposées à la consommation.",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p19"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-kuken-best-selection-pdf-p19",
			"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf#page=19",
			"sourceLabel": "KUKEN, Best Selection, catalogue constructeur, page PDF 19",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0da76488e568242877887f713ecd81203eaa9f2322c20eb65648d25bb7e71cc7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p19"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p19"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p19"
		]
	},
	"notes": [
		"Le tableau établit les caractéristiques individuelles. La consommation normale n’est pas explicitement rattachée à un régime en charge et à une pression de mesure."
	]
};

export default product;
