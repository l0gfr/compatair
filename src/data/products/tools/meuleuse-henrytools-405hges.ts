import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-henrytools-405hges",
	"slug": "meuleuse-henrytools-405hges",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Henrytools 405HGES",
	"brand": "Henrytools",
	"model": "405HGES",
	"mpn": "405HGES",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-henrytools-405hges.webp",
		"alt": "Repères techniques : Henrytools 405HGES",
		"sourceUrl": "https://henrytools.com/assets/images/parts_manuals_PDF/2020-06-22_405HGES-400HGES_side-exhaust-double-bearing-die-grinder.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "henrytools-405hges",
		"label": "Référence 405HGES",
		"distinguishingAttributes": {
			"reference": "405HGES",
			"Puissance du tableau modèle/famille": "1.2 H.P.",
			"Consommation du tableau modèle/famille, hors calcul": "35 cfm"
		}
	},
	"editorial": {
		"overview": "Henrytools 405HGES. La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés. Puissance du tableau modèle/famille : 1.2 H.P.. Consommation du tableau modèle/famille, hors calcul : 35 cfm.",
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
				"october2b-tools-oct2b-henry-68-pdf-p1"
			]
		},
		{
			"label": "Consommation du tableau modèle/famille, hors calcul",
			"value": "35 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-henry-68-pdf-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure du tableau de consommation n’est pas explicitement établie.",
			"evidenceIds": [
				"october2b-tools-oct2b-henry-68-pdf-p1",
				"october2b-tools-oct2b-henry-68-pdf-p2"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-henry-68-pdf-p1",
			"sourceUrl": "https://henrytools.com/assets/images/parts_manuals_PDF/2020-06-22_405HGES-400HGES_side-exhaust-double-bearing-die-grinder.pdf#page=1",
			"sourceLabel": "Henrytools, notice constructeur 405HGES, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 96bf05546aae7011d5a43357791df57788f424c2e236c9a4268e273ba5d3fe36. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "october2b-tools-oct2b-henry-68-pdf-p2",
			"sourceUrl": "https://henrytools.com/assets/images/parts_manuals_PDF/2020-06-22_405HGES-400HGES_side-exhaust-double-bearing-die-grinder.pdf#page=2",
			"sourceLabel": "Henrytools, notice constructeur 405HGES, page PDF 2",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 96bf05546aae7011d5a43357791df57788f424c2e236c9a4268e273ba5d3fe36. Document complémentaire de la référence exacte, sans essai CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-henry-68-pdf-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-henry-68-pdf-p1",
			"october2b-tools-oct2b-henry-68-pdf-p2"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-henry-68-pdf-p1"
		]
	},
	"notes": [
		"La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés."
	]
};

export default product;
