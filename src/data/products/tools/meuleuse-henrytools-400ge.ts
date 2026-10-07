import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-henrytools-400ge",
	"slug": "meuleuse-henrytools-400ge",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Henrytools 400GE",
	"brand": "Henrytools",
	"model": "400GE",
	"mpn": "400GE",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-henrytools-400ge.webp",
		"alt": "Repères techniques : Henrytools 400GE",
		"sourceUrl": "https://henrytools.com/assets/images/parts_manuals_PDF/2024-04-13_400GE_SideExhaust_Horizontal_DieGrinder_Manual.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "henrytools-400ge",
		"label": "Référence 400GE",
		"distinguishingAttributes": {
			"reference": "400GE",
			"Puissance du tableau modèle/famille": "1.2 H.P.",
			"Consommation du tableau modèle/famille, hors calcul": "35 cfm"
		}
	},
	"editorial": {
		"overview": "Henrytools 400GE. La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés. Puissance du tableau modèle/famille : 1.2 H.P.. Consommation du tableau modèle/famille, hors calcul : 35 cfm.",
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
				"october2b-tools-oct2b-henry-60-pdf-p1"
			]
		},
		{
			"label": "Consommation du tableau modèle/famille, hors calcul",
			"value": "35 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-henry-60-pdf-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure du tableau de consommation n’est pas explicitement établie.",
			"evidenceIds": [
				"october2b-tools-oct2b-henry-60-pdf-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-henry-60-pdf-p1",
			"sourceUrl": "https://henrytools.com/assets/images/parts_manuals_PDF/2024-04-13_400GE_SideExhaust_Horizontal_DieGrinder_Manual.pdf#page=1",
			"sourceLabel": "Henrytools, notice constructeur 400GE, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : bec07504ca30fb49bff52770073472a18504848659124d607d14a2ad85d85c82. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-henry-60-pdf-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-henry-60-pdf-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-henry-60-pdf-p1"
		]
	},
	"notes": [
		"La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés."
	]
};

export default product;
