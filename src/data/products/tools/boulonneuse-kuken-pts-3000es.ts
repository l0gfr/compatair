import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-kuken-pts-3000es",
	"slug": "boulonneuse-kuken-pts-3000es",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "KUKEN PTS-3000ES",
	"brand": "KUKEN",
	"model": "PTS-3000ES",
	"mpn": "PTS-3000ES",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "Le tableau établit les caractéristiques individuelles. La consommation normale n’est pas explicitement rattachée à un régime en charge et à une pression de mesure.",
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-kuken-pts-3000es-technical-20261116-reviews.svg",
		"alt": "Repères techniques : KUKEN PTS-3000ES",
		"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "kuken-pts-3000es",
		"label": "Référence PTS-3000ES",
		"distinguishingAttributes": {
			"reference": "PTS-3000ES",
			"Masse publiée": "14.9 kg (32.8 lb)",
			"Longueur publiée": "497.0 mm"
		}
	},
	"editorial": {
		"overview": "La PTS-3000ES couvre 1 000–3 000 Nm avec un carré 1½ pouce, 497 mm et 14,9 kg. La PTS-1000ES couvre 400–1 000 Nm avec un carré 1 pouce ; la 1000E allonge le corps à 720 mm. La réaction de couple et le choix de douille font partie de l’installation. Le tableau à 0,62 MPa donne 0,57 m³/min normalisés, sans préciser le régime de consommation ; le calcul d’air reste non conclusif.",
		"verifiedFacts": [
			"Masse publiée : 14.9 kg (32.8 lb).",
			"Longueur publiée : 497.0 mm."
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
			"value": "14.9 kg (32.8 lb)",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p7"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "497.0 mm",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p7"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Les pressions des colonnes de couple et de vitesse ne sont pas transposées à la consommation.",
			"evidenceIds": [
				"october2b-tools-oct2b-kuken-best-selection-pdf-p7"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-kuken-best-selection-pdf-p7",
			"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf#page=7",
			"sourceLabel": "KUKEN, Best Selection, catalogue constructeur, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0da76488e568242877887f713ecd81203eaa9f2322c20eb65648d25bb7e71cc7. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:boulonneuse-kuken-pts-3000es:0",
			"sourceUrl": "https://www.kuken.co.jp/en/catalogue/pdf/best_selection.pdf",
			"sourceLabel": "KUKEN, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La PTS-3000ES couvre 1 000–3 000 Nm avec un carré 1½ pouce, 497 mm et 14,9 kg. La PTS-1000ES couvre 400–1 000 Nm avec un carré 1 pouce ; la 1000E allonge le corps à 720 mm. La réaction de couple et le choix de douille font partie de l’installation. Le tableau à 0,62 MPa donne 0,57 m³/min normalisés, sans préciser le régime de consommation ; le calcul d’air reste non conclusif. GET complet SHA-256 0da76488e568242877887f713ecd81203eaa9f2322c20eb65648d25bb7e71cc7. Pages PDF lues : 7."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p7"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p7"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-kuken-best-selection-pdf-p7"
		]
	},
	"notes": [
		"Le tableau établit les caractéristiques individuelles. La consommation normale n’est pas explicitement rattachée à un régime en charge et à une pression de mesure."
	]
};

export default product;
