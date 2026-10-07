import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-henrytools-400ghsr2",
	"slug": "meuleuse-henrytools-400ghsr2",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Henrytools 400GHSR2",
	"brand": "Henrytools",
	"model": "400GHSR2",
	"mpn": "400GHSR2",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-henrytools-400ghsr2.webp",
		"alt": "Repères techniques : Henrytools 400GHSR2",
		"sourceUrl": "https://henrytools.com/assets/images/parts_manuals_PDF/01-19-2026_400GHSK2_Horizontal_Grinder_Side_Exhaust_ConeWheels_5_8_INCH.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "henrytools-400ghsr2",
		"label": "Référence 400GHSR2",
		"distinguishingAttributes": {
			"reference": "400GHSR2",
			"Puissance du tableau modèle/famille": "1.2 H.P.",
			"Consommation du tableau modèle/famille, hors calcul": "25 cfm"
		}
	},
	"editorial": {
		"overview": "Henrytools 400GHSR2. La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés. Puissance du tableau modèle/famille : 1.2 H.P.. Consommation du tableau modèle/famille, hors calcul : 25 cfm.",
		"verifiedFacts": [
			"Puissance du tableau modèle/famille : 1.2 H.P..",
			"Consommation du tableau modèle/famille, hors calcul : 25 cfm."
		],
		"limitations": [
			"La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés.",
			"Notice constructeur archivée ; le modèle exact est cité dans cette notice, sans expansion de nomenclature ni transfert entre familles.",
			"La plage ou pression d’alimentation de sécurité n’est pas assimilée à une pression de mesure de consommation.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Puissance du tableau modèle/famille",
			"value": "1.2 H.P.",
			"evidenceIds": [
				"october2b-tools-oct2b-henry-64-pdf-p1"
			]
		},
		{
			"label": "Consommation du tableau modèle/famille, hors calcul",
			"value": "25 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-henry-64-pdf-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure du tableau de consommation n’est pas explicitement établie.",
			"evidenceIds": [
				"october2b-tools-oct2b-henry-64-pdf-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-henry-64-pdf-p1",
			"sourceUrl": "https://henrytools.com/assets/images/parts_manuals_PDF/01-19-2026_400GHSK2_Horizontal_Grinder_Side_Exhaust_ConeWheels_5_8_INCH.pdf#page=1",
			"sourceLabel": "Henrytools, notice constructeur 400GHSK2, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c3f697a04f87630ae25ed6d1b394625754091aee753b9beb9190ae77c2e3079f. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-henry-64-pdf-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-henry-64-pdf-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-henry-64-pdf-p1"
		]
	},
	"notes": [
		"La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés."
	]
};

export default product;
