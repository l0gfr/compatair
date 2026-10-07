import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-paoli-dp-362-bg-0362bg-00001",
	"slug": "cle-a-chocs-paoli-dp-362-bg-0362bg-00001",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Paoli DP 362 BG (réf. 0362BG.00001)",
	"brand": "Paoli",
	"model": "DP 362 BG",
	"mpn": "0362BG.00001",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-paoli-dp-362-bg-0362bg-00001.webp",
		"alt": "Repères techniques : Paoli DP 362 BG (réf. 0362BG.00001)",
		"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "paoli-dp-362-bg",
		"label": "Référence 0362BG.00001",
		"distinguishingAttributes": {
			"reference": "0362BG.00001",
			"Carré de sortie": "1 1/2 in",
			"Masse publiée": "14,5 kg"
		}
	},
	"editorial": {
		"overview": "Paoli DP 362 BG (réf. 0362BG.00001). Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Carré de sortie : 1 1/2 in. Masse publiée : 14,5 kg.",
		"verifiedFacts": [
			"Carré de sortie : 1 1/2 in.",
			"Masse publiée : 14,5 kg.",
			"Vitesse à vide : 3200 tr/min.",
			"Longueur avec enclume courte : 421 mm.",
			"Diamètre intérieur du tuyau : 16 mm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Carré de sortie",
			"value": "1 1/2 in",
			"evidenceIds": [
				"october2-tools-paoli-general-p74"
			]
		},
		{
			"label": "Masse publiée",
			"value": "14,5 kg",
			"evidenceIds": [
				"october2-tools-paoli-general-p74"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3200 tr/min",
			"evidenceIds": [
				"october2-tools-paoli-general-p74"
			]
		},
		{
			"label": "Longueur avec enclume courte",
			"value": "421 mm",
			"evidenceIds": [
				"october2-tools-paoli-general-p74"
			]
		},
		{
			"label": "Diamètre intérieur du tuyau",
			"value": "16 mm",
			"evidenceIds": [
				"october2-tools-paoli-general-p74"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working pressure Pressione di utilizzo 91 psi - 6,3 bar 91 psi - 6,3 bar",
			"evidenceIds": [
				"october2-tools-paoli-general-p74"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-paoli-general-p74",
			"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf#page=74",
			"sourceLabel": "Paoli, documentation technique fabricant, page PDF 74",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 4a60f1e1ab29d27422ad6cd8605948f5e32d197f27b3c300700631554a6d1352. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-paoli-general-p74"
		],
		"workingPressureBar": [
			"october2-tools-paoli-general-p74"
		],
		"demandExplanation": [
			"october2-tools-paoli-general-p74"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
