import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-henrytools-660-vs",
	"slug": "meuleuse-henrytools-660-vs",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Henrytools 660-VS",
	"brand": "Henrytools",
	"model": "660-VS",
	"mpn": "660-VS",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-henrytools-660-vs.webp",
		"alt": "Repères techniques : Henrytools 660-VS",
		"sourceUrl": "https://henrytools.com/assets/images/parts_manuals_PDF/2010-05-13_660VL_VerticalGrinder_Series_Service_Manual_Henrytools.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "henrytools-660-vs",
		"label": "Référence 660-VS",
		"distinguishingAttributes": {
			"reference": "660-VS",
			"Puissance du tableau modèle/famille": "4 H.P.",
			"Consommation du tableau modèle/famille, hors calcul": "50 cfm"
		}
	},
	"editorial": {
		"overview": "Henrytools 660-VS. La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés. Puissance du tableau modèle/famille : 4 H.P.. Consommation du tableau modèle/famille, hors calcul : 50 cfm.",
		"verifiedFacts": [
			"Puissance du tableau modèle/famille : 4 H.P..",
			"Consommation du tableau modèle/famille, hors calcul : 50 cfm."
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
			"value": "4 H.P.",
			"evidenceIds": [
				"october2b-tools-oct2b-henry-85-pdf-p1"
			]
		},
		{
			"label": "Consommation du tableau modèle/famille, hors calcul",
			"value": "50 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-henry-85-pdf-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure du tableau de consommation n’est pas explicitement établie.",
			"evidenceIds": [
				"october2b-tools-oct2b-henry-85-pdf-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-henry-85-pdf-p1",
			"sourceUrl": "https://henrytools.com/assets/images/parts_manuals_PDF/2010-05-13_660VL_VerticalGrinder_Series_Service_Manual_Henrytools.pdf#page=1",
			"sourceLabel": "Henrytools, notice constructeur 660-VL, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 4eae5a41dfe4baba5a4dcfdb4afdddf99d6e991ef5cee67db03f7e2c3d80ece4. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-henry-85-pdf-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-henry-85-pdf-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-henry-85-pdf-p1"
		]
	},
	"notes": [
		"La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés."
	]
};

export default product;
