import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "ponceuse-orbitale-kuken-dam-05a",
	"slug": "ponceuse-orbitale-kuken-dam-05a",
	"categoryId": "ponceuse-orbitale",
	"category": "ponceuse-orbitale",
	"label": "KUKEN DAM-05A",
	"brand": "KUKEN",
	"model": "DAM-05A",
	"mpn": "DAM-05A",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit les caractéristiques individuelles. La consommation normale n’est pas explicitement rattachée à un régime en charge et à une pression de mesure.",
	"confidence": "B",
	"image": {
		"src": "/images/products/ponceuse-orbitale-kuken-dam-05a-technical-20261116-reviews.svg",
		"alt": "Repères techniques : KUKEN DAM-05A",
		"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "kuken-dam-05a",
		"label": "Référence DAM-05A",
		"distinguishingAttributes": {
			"reference": "DAM-05A",
			"Masse publiée": "1.1 kg (2.4 lb)",
			"Longueur publiée": "183.0 mm"
		}
	},
	"editorial": {
		"overview": "La DAM-05A est la ponceuse 125 mm sans aspiration à orbite de 10 mm. La DAM-05AS ajoute l’aspiration et mesure 180 mm au lieu de 183 mm ; la DAM-055 réduit l’orbite à 5 mm. Les trois annoncent 9 500 tr/min et 1,1 kg. L’orbite et l’extraction de poussière différencient le travail ; les 0,38 m³/min restent hors dimensionnement faute de régime explicite.",
		"verifiedFacts": [
			"Masse publiée : 1.1 kg (2.4 lb).",
			"Longueur publiée : 183.0 mm."
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
			"value": "1.1 kg (2.4 lb)",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p20"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "183.0 mm",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p20"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Les pressions des colonnes de couple et de vitesse ne sont pas transposées à la consommation.",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p20"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-kuken-best-selection-pdf-p20",
			"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf#page=20",
			"sourceLabel": "KUKEN, Best Selection, catalogue constructeur, page PDF 20",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0da76488e568242877887f713ecd81203eaa9f2322c20eb65648d25bb7e71cc7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:ponceuse-orbitale-kuken-dam-05a:0",
			"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf",
			"sourceLabel": "KUKEN, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La DAM-05A est la ponceuse 125 mm sans aspiration à orbite de 10 mm. La DAM-05AS ajoute l’aspiration et mesure 180 mm au lieu de 183 mm ; la DAM-055 réduit l’orbite à 5 mm. Les trois annoncent 9 500 tr/min et 1,1 kg. L’orbite et l’extraction de poussière différencient le travail ; les 0,38 m³/min restent hors dimensionnement faute de régime explicite. GET complet SHA-256 0da76488e568242877887f713ecd81203eaa9f2322c20eb65648d25bb7e71cc7. Pages PDF lues : 20."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p20"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p20"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p20"
		]
	},
	"notes": [
		"Le tableau établit les caractéristiques individuelles. La consommation normale n’est pas explicitement rattachée à un régime en charge et à une pression de mesure."
	]
};

export default product;
