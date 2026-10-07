import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-henrytools-65-vl",
	"slug": "meuleuse-henrytools-65-vl",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Henrytools 65-VL",
	"brand": "Henrytools",
	"model": "65-VL",
	"mpn": "65-VL",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-henrytools-65-vl.webp",
		"alt": "Repères techniques : Henrytools 65-VL",
		"sourceUrl": "https://henrytools.com/assets/images/parts_manuals_PDF/2025_01-17%2065V%20Vertical%20Grinder%20Series_%20HenryAirtool%20_%20Parts%20Manual.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "henrytools-65-vl",
		"label": "Référence 65-VL",
		"distinguishingAttributes": {
			"reference": "65-VL",
			"Puissance du tableau modèle/famille": "4 H.P.",
			"Consommation du tableau modèle/famille, hors calcul": "50 cfm"
		}
	},
	"editorial": {
		"overview": "Henrytools 65-VL. La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés. Puissance du tableau modèle/famille : 4 H.P.. Consommation du tableau modèle/famille, hors calcul : 50 cfm.",
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
				"october2b-tools-oct2b-henry-84-pdf-p1"
			]
		},
		{
			"label": "Consommation du tableau modèle/famille, hors calcul",
			"value": "50 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-henry-84-pdf-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure du tableau de consommation n’est pas explicitement établie.",
			"evidenceIds": [
				"october2b-tools-oct2b-henry-84-pdf-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-henry-84-pdf-p1",
			"sourceUrl": "https://henrytools.com/assets/images/parts_manuals_PDF/2025_01-17%2065V%20Vertical%20Grinder%20Series_%20HenryAirtool%20_%20Parts%20Manual.pdf#page=1",
			"sourceLabel": "Henrytools, notice constructeur 65-VL, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : ef5ec64f31fc889eb2e585a8c33da085079cfed3f1a7c2d6642bc05756851de8. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-henry-84-pdf-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-henry-84-pdf-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-henry-84-pdf-p1"
		]
	},
	"notes": [
		"La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés."
	]
};

export default product;
