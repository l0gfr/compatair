import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-henrytools-400ghsd",
	"slug": "meuleuse-henrytools-400ghsd",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Henrytools 400GHSD",
	"brand": "Henrytools",
	"model": "400GHSD",
	"mpn": "400GHSD",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-henrytools-400ghsd-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Henrytools 400GHSD",
		"sourceUrl": "https://henrytools.com/assets/images/parts_manuals_PDF/03-31-2024_400GHSD_Horizontal_Grinder_Side_Exhaust.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "henrytools-400ghsd",
		"label": "Référence 400GHSD",
		"distinguishingAttributes": {
			"reference": "400GHSD",
			"Puissance du tableau modèle/famille": "1.2 H.P.",
			"Consommation du tableau modèle/famille, hors calcul": "25 cfm"
		}
	},
	"editorial": {
		"overview": "La 400GHSD est la meuleuse horizontale à échappement latéral et commande par levier de la famille 400GH. La 400GHSK2 ajoute une autre commande ; les références et vitesses doivent être confirmées avant de choisir la meule. Le tableau de famille annonce 1,2 hp et 25 cfm en travail, sans pression de mesure associée. Ces 25 cfm ne deviennent pas un point de dimensionnement.",
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
				"october2b-tools-oct2b-henry-66-pdf-p1"
			]
		},
		{
			"label": "Consommation du tableau modèle/famille, hors calcul",
			"value": "25 cfm",
			"evidenceIds": [
				"october2b-tools-oct2b-henry-66-pdf-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "La pression de mesure du tableau de consommation n’est pas explicitement établie.",
			"evidenceIds": [
				"october2b-tools-oct2b-henry-66-pdf-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-henry-66-pdf-p1",
			"sourceUrl": "https://henrytools.com/assets/images/parts_manuals_PDF/03-31-2024_400GHSD_Horizontal_Grinder_Side_Exhaust.pdf#page=1",
			"sourceLabel": "Henrytools, notice constructeur 400GHSD, page PDF 1",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 26bfce40b3915d4db4edb3ebdd7218477cf2da92a4b9939a9e8a3a32c371779b. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:meuleuse-henrytools-400ghsd:0",
			"sourceUrl": "https://henrytools.com/assets/images/parts_manuals_PDF/03-31-2024_400GHSD_Horizontal_Grinder_Side_Exhaust.pdf",
			"sourceLabel": "Henrytools, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "La 400GHSD est la meuleuse horizontale à échappement latéral et commande par levier de la famille 400GH. La 400GHSK2 ajoute une autre commande ; les références et vitesses doivent être confirmées avant de choisir la meule. Le tableau de famille annonce 1,2 hp et 25 cfm en travail, sans pression de mesure associée. Ces 25 cfm ne deviennent pas un point de dimensionnement. GET complet SHA-256 26bfce40b3915d4db4edb3ebdd7218477cf2da92a4b9939a9e8a3a32c371779b. Pages PDF lues : 1."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-henry-66-pdf-p1"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-henry-66-pdf-p1"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-henry-66-pdf-p1"
		]
	},
	"notes": [
		"La notice établit les caractéristiques du modèle ou de sa famille. La consommation reste documentaire tant que son point de pression et son régime ne sont pas précisés."
	]
};

export default product;
