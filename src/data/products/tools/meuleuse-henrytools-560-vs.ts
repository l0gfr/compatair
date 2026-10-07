import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-henrytools-560-vs",
	"slug": "meuleuse-henrytools-560-vs",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Henrytools 560-VS",
	"brand": "Henrytools",
	"model": "560-VS",
	"mpn": "560-VS",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-henrytools-560-vs.webp",
		"alt": "Repères techniques : Henrytools 560-VS",
		"sourceUrl": "https://henrytools.com/assets/images/parts_manuals_PDF/2015-12-10_560V%20Vertical%20Grinder%20_%20Manual_GRAYSCALE.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "henrytools-560-vs",
		"label": "Référence 560-VS",
		"distinguishingAttributes": {
			"reference": "560-VS",
			"Puissance du tableau modèle/famille": "3 H.P.",
			"Consommation du tableau modèle/famille, hors calcul": "45 cfm"
		}
	},
	"editorial": {
		"overview": "Henrytools 560-VS. La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés. Puissance du tableau modèle/famille : 3 H.P.. Consommation du tableau modèle/famille, hors calcul : 45 cfm.",
		"verifiedFacts": [
			"Puissance du tableau modèle/famille : 3 H.P..",
			"Consommation du tableau modèle/famille, hors calcul : 45 cfm."
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
			"value": "3 H.P.",
			"evidenceIds": [
				"october2b-tools-oct2b-henry-80-pdf-p1"
			]
		},
		{
			"label": "Consommation du tableau modèle/famille, hors calcul",
			"value": "45 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-henry-80-pdf-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure du tableau de consommation n’est pas explicitement établie.",
			"evidenceIds": [
				"october2b-tools-oct2b-henry-80-pdf-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-henry-80-pdf-p1",
			"sourceUrl": "https://henrytools.com/assets/images/parts_manuals_PDF/2015-12-10_560V%20Vertical%20Grinder%20_%20Manual_GRAYSCALE.pdf#page=1",
			"sourceLabel": "Henrytools, notice constructeur 560-VL, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : dbb97cf8d0fe06b5d55e64785488b3255bf41b0c5749c985d59710d832a3cb1c. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-henry-80-pdf-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-henry-80-pdf-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-henry-80-pdf-p1"
		]
	},
	"notes": [
		"La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés."
	]
};

export default product;
