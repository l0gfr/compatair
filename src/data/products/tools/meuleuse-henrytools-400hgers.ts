import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-henrytools-400hgers",
	"slug": "meuleuse-henrytools-400hgers",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Henrytools 400HGERS",
	"brand": "Henrytools",
	"model": "400HGERS",
	"mpn": "400HGERS",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-henrytools-400hgers.webp",
		"alt": "Repères techniques : Henrytools 400HGERS",
		"sourceUrl": "https://henrytools.com/assets/images/parts_manuals_PDF/2020-06-22_405HGERS-400HGERS-Series_REAR-exhaust-double-bearings-die-grinder.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "henrytools-400hgers",
		"label": "Référence 400HGERS",
		"distinguishingAttributes": {
			"reference": "400HGERS",
			"Puissance du tableau modèle/famille": "1.2 H.P.",
			"Consommation du tableau modèle/famille, hors calcul": "35 cfm"
		}
	},
	"editorial": {
		"overview": "Henrytools 400HGERS. La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés. Puissance du tableau modèle/famille : 1.2 H.P.. Consommation du tableau modèle/famille, hors calcul : 35 cfm.",
		"verifiedFacts": [
			"Puissance du tableau modèle/famille : 1.2 H.P..",
			"Consommation du tableau modèle/famille, hors calcul : 35 cfm."
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
				"october2b-tools-oct2b-henry-63-pdf-p1"
			]
		},
		{
			"label": "Consommation du tableau modèle/famille, hors calcul",
			"value": "35 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-henry-63-pdf-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure du tableau de consommation n’est pas explicitement établie.",
			"evidenceIds": [
				"october2b-tools-oct2b-henry-63-pdf-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-henry-63-pdf-p1",
			"sourceUrl": "https://henrytools.com/assets/images/parts_manuals_PDF/2020-06-22_405HGERS-400HGERS-Series_REAR-exhaust-double-bearings-die-grinder.pdf#page=1",
			"sourceLabel": "Henrytools, notice constructeur 400HGERS, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 5c8a4ba45ea6b7039811395525c0f511bda22ad83905a1917d3e4b15c4520701. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-henry-63-pdf-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-henry-63-pdf-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-henry-63-pdf-p1"
		]
	},
	"notes": [
		"La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés."
	]
};

export default product;
