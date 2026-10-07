import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "riveteuse-far-rac-2200",
	"slug": "riveteuse-far-rac-2200",
	"categoryId": "riveteuse",
	"category": "riveteuse",
	"label": "FAR RAC 2200",
	"brand": "FAR",
	"model": "RAC 2200",
	"mpn": "RAC 2200",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"typical": 6
	},
	"demandExplanation": "La notice donne 8.4 Nl par cycle et une pression d’utilisation 6 bar ; le point de mesure du volume n’est pas explicitement associé, donc aucun débit moyen n’est calculé.",
	"confidence": "B",
	"image": {
		"src": "/images/products/riveteuse-far-rac-2200.webp",
		"alt": "Repères techniques : FAR RAC 2200",
		"sourceUrl": "https://www.far.bo.it/en/download/price-lists-and-general-catalogue/category/4-riveting-tools-for-blind-rivets.html?download=23%3Arac-2200",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "far-rac-2200",
		"label": "Référence RAC 2200",
		"distinguishingAttributes": {
			"reference": "RAC 2200",
			"Consommation par cycle originale": "8.4 Nl/cycle",
			"Masse du pistolet / ensemble": "1.070 kg / 5.850 kg"
		}
	},
	"editorial": {
		"overview": "FAR RAC 2200. La notice donne 8.4 Nl par cycle et une pression d’utilisation 6 bar ; le point de mesure du volume n’est pas explicitement associé, donc aucun débit moyen n’est calculé. Consommation par cycle originale : 8.4 Nl/cycle. Masse du pistolet / ensemble : 1.070 kg / 5.850 kg.",
		"verifiedFacts": [
			"Consommation par cycle originale : 8.4 Nl/cycle.",
			"Masse du pistolet / ensemble : 1.070 kg / 5.850 kg.",
			"Diamètre intérieur minimal du tuyau : 8 mm."
		],
		"limitations": [
			"La notice donne 8.4 Nl par cycle et une pression d’utilisation 6 bar ; le point de mesure du volume n’est pas explicitement associé, donc aucun débit moyen n’est calculé.",
			"Révision 13, septembre 2022. Unité originale Nl/cycle conservée ; aucune température normale ni pression de référence non publiée n’est inventée.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Consommation par cycle originale",
			"value": "8.4 Nl/cycle",
			"evidenceIds": [
				"october2b-tools-oct2b-far-rac2200-manual-pdf-p18"
			]
		},
		{
			"label": "Masse du pistolet / ensemble",
			"value": "1.070 kg / 5.850 kg",
			"evidenceIds": [
				"october2b-tools-oct2b-far-rac2200-manual-pdf-p18"
			]
		},
		{
			"label": "Diamètre intérieur minimal du tuyau",
			"value": "8 mm",
			"evidenceIds": [
				"october2b-tools-oct2b-far-rac2200-manual-pdf-p18"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working pressure 6 BAR, p.18. La notice ne lie pas explicitement la consommation par cycle à ce point de pression.",
			"evidenceIds": [
				"october2b-tools-oct2b-far-rac2200-manual-pdf-p18"
			]
		}
	],
	"evidence": [
		{
			"id": "october2b-tools-oct2b-far-rac2200-manual-pdf-p18",
			"sourceUrl": "https://www.far.bo.it/en/download/price-lists-and-general-catalogue/category/4-riveting-tools-for-blind-rivets.html?download=23%3Arac-2200#page=18",
			"sourceLabel": "FAR, notice RAC 2200, révision 13 septembre 2022, données techniques p.18, page PDF 18",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 830e535aef97907a688f387642ad89f397e5af811e9ab43a9f1a65cb3488efdf. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2b-tools-oct2b-far-rac2200-manual-pdf-p18"
		],
		"workingPressureBar": [
			"october2b-tools-oct2b-far-rac2200-manual-pdf-p18"
		],
		"demandExplanation": [
			"october2b-tools-oct2b-far-rac2200-manual-pdf-p18"
		]
	},
	"notes": [
		"La notice donne 8.4 Nl par cycle et une pression d’utilisation 6 bar ; le point de mesure du volume n’est pas explicitement associé, donc aucun débit moyen n’est calculé."
	]
};

export default product;
