import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-henrytools-4721-gls",
	"slug": "meuleuse-henrytools-4721-gls",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Henrytools 4721-GLS",
	"brand": "Henrytools",
	"model": "4721-GLS",
	"mpn": "4721-GLS",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-henrytools-4721-gls.webp",
		"alt": "Repères techniques : Henrytools 4721-GLS",
		"sourceUrl": "https://henrytools.com/assets/images/parts_manuals_PDF/2011-01-08_4721GL_Die_Grinder_Manual.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "henrytools-4721-gls",
		"label": "Référence 4721-GLS",
		"distinguishingAttributes": {
			"reference": "4721-GLS",
			"Puissance du tableau modèle/famille": "0.9 H.P.",
			"Consommation du tableau modèle/famille, hors calcul": "25 cfm"
		}
	},
	"editorial": {
		"overview": "Henrytools 4721-GLS. La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés. Puissance du tableau modèle/famille : 0.9 H.P.. Consommation du tableau modèle/famille, hors calcul : 25 cfm.",
		"verifiedFacts": [
			"Puissance du tableau modèle/famille : 0.9 H.P..",
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
			"value": "0.9 H.P.",
			"evidenceIds": [
				"october2b-tools-oct2b-henry-55-pdf-p1"
			]
		},
		{
			"label": "Consommation du tableau modèle/famille, hors calcul",
			"value": "25 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-henry-55-pdf-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure du tableau de consommation n’est pas explicitement établie.",
			"evidenceIds": [
				"october2b-tools-oct2b-henry-55-pdf-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-henry-55-pdf-p1",
			"sourceUrl": "https://henrytools.com/assets/images/parts_manuals_PDF/2011-01-08_4721GL_Die_Grinder_Manual.pdf#page=1",
			"sourceLabel": "Henrytools, notice constructeur 4721-GL, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 79ff1ea4952298fbfd802d77bd727e1493ab5aec777a90f9735c6e8e79a7159a. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-henry-55-pdf-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-henry-55-pdf-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-henry-55-pdf-p1"
		]
	},
	"notes": [
		"La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés."
	]
};

export default product;
