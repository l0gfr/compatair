import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-henrytools-420rard",
	"slug": "meuleuse-henrytools-420rard",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Henrytools 420RARD",
	"brand": "Henrytools",
	"model": "420RARD",
	"mpn": "420RARD",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-henrytools-420rard.webp",
		"alt": "Repères techniques : Henrytools 420RARD",
		"sourceUrl": "https://henrytools.com/assets/images/parts_manuals_PDF/09-05-20222_420RAR_AngleGrinder_RearExhaust_Henrytools_Manuals.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "henrytools-420rard",
		"label": "Référence 420RARD",
		"distinguishingAttributes": {
			"reference": "420RARD",
			"Puissance du tableau modèle/famille": "1.2 H.P.",
			"Consommation du tableau modèle/famille, hors calcul": "25 cfm"
		}
	},
	"editorial": {
		"overview": "Henrytools 420RARD. La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés. Puissance du tableau modèle/famille : 1.2 H.P.. Consommation du tableau modèle/famille, hors calcul : 25 cfm.",
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
				"october2b-tools-oct2b-henry-70-pdf-p1"
			]
		},
		{
			"label": "Consommation du tableau modèle/famille, hors calcul",
			"value": "25 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-henry-70-pdf-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure du tableau de consommation n’est pas explicitement établie.",
			"evidenceIds": [
				"october2b-tools-oct2b-henry-70-pdf-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-henry-70-pdf-p1",
			"sourceUrl": "https://henrytools.com/assets/images/parts_manuals_PDF/09-05-20222_420RAR_AngleGrinder_RearExhaust_Henrytools_Manuals.pdf#page=1",
			"sourceLabel": "Henrytools, notice constructeur 420RA4R, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 5e017fcb8a041b9cbde7edb5fd2a69d91ab186bd1cfe1f5786117e272488794a. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-henry-70-pdf-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-henry-70-pdf-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-henry-70-pdf-p1"
		]
	},
	"notes": [
		"La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés."
	]
};

export default product;
