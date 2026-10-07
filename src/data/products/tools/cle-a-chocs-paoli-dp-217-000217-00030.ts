import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-paoli-dp-217-000217-00030",
	"slug": "cle-a-chocs-paoli-dp-217-000217-00030",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Paoli DP 217 (réf. 000217.00030)",
	"brand": "Paoli",
	"model": "DP 217",
	"mpn": "000217.00030",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-paoli-dp-217-000217-00030.webp",
		"alt": "Repères techniques : Paoli DP 217 (réf. 000217.00030)",
		"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "paoli-dp-217",
		"label": "Référence 000217.00030",
		"distinguishingAttributes": {
			"reference": "000217.00030",
			"Carré de sortie": "1 in",
			"Masse publiée": "6 kg"
		}
	},
	"editorial": {
		"overview": "Paoli DP 217 (réf. 000217.00030). Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Carré de sortie : 1 in. Masse publiée : 6 kg.",
		"verifiedFacts": [
			"Carré de sortie : 1 in.",
			"Masse publiée : 6 kg.",
			"Vitesse à vide : 5400 tr/min.",
			"Longueur avec enclume courte : 248 mm.",
			"Diamètre intérieur du tuyau : 13 mm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Carré de sortie",
			"value": "1 in",
			"evidenceIds": [
				"october2-tools-paoli-general-p48"
			]
		},
		{
			"label": "Masse publiée",
			"value": "6 kg",
			"evidenceIds": [
				"october2-tools-paoli-general-p48"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5400 tr/min",
			"evidenceIds": [
				"october2-tools-paoli-general-p48"
			]
		},
		{
			"label": "Longueur avec enclume courte",
			"value": "248 mm",
			"evidenceIds": [
				"october2-tools-paoli-general-p48"
			]
		},
		{
			"label": "Diamètre intérieur du tuyau",
			"value": "13 mm",
			"evidenceIds": [
				"october2-tools-paoli-general-p48"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working pressure Pressione di utilizzo 6,3 bar - 91 psi 6,3 bar - 91 psi",
			"evidenceIds": [
				"october2-tools-paoli-general-p48"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-paoli-general-p48",
			"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf#page=48",
			"sourceLabel": "Paoli, documentation technique fabricant, page PDF 48",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 4a60f1e1ab29d27422ad6cd8605948f5e32d197f27b3c300700631554a6d1352. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-paoli-general-p48"
		],
		"workingPressureBar": [
			"october2-tools-paoli-general-p48"
		],
		"demandExplanation": [
			"october2-tools-paoli-general-p48"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
