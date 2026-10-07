import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-paoli-dp-3450-003450-00001",
	"slug": "cle-a-chocs-paoli-dp-3450-003450-00001",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Paoli DP 3450 (réf. 003450.00001)",
	"brand": "Paoli",
	"model": "DP 3450",
	"mpn": "003450.00001",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-paoli-dp-3450-003450-00001.webp",
		"alt": "Repères techniques : Paoli DP 3450 (réf. 003450.00001)",
		"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "paoli-dp-3450",
		"label": "Référence 003450.00001",
		"distinguishingAttributes": {
			"reference": "003450.00001",
			"Masse publiée": "3,7 kg",
			"Vitesse à vide": "6000 tr/min"
		}
	},
	"editorial": {
		"overview": "Paoli DP 3450 (réf. 003450.00001). Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 3,7 kg. Vitesse à vide : 6000 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 3,7 kg.",
			"Vitesse à vide : 6000 tr/min.",
			"Diamètre intérieur du tuyau : 13 mm.",
			"Longueur publiée : 221 mm.",
			"Carré de sortie : 3/4 in."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "3,7 kg",
			"evidenceIds": [
				"october2-tools-paoli-general-p40"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6000 tr/min",
			"evidenceIds": [
				"october2-tools-paoli-general-p40"
			]
		},
		{
			"label": "Diamètre intérieur du tuyau",
			"value": "13 mm",
			"evidenceIds": [
				"october2-tools-paoli-general-p40"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "221 mm",
			"evidenceIds": [
				"october2-tools-paoli-general-p40"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "3/4 in",
			"evidenceIds": [
				"october2-tools-paoli-general-p40"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working pressure    Pressione di utilizzo 91 psi - 6,3 bar",
			"evidenceIds": [
				"october2-tools-paoli-general-p40"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-paoli-general-p40",
			"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf#page=40",
			"sourceLabel": "Paoli, documentation technique fabricant, page PDF 40",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 4a60f1e1ab29d27422ad6cd8605948f5e32d197f27b3c300700631554a6d1352. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-paoli-general-p40"
		],
		"workingPressureBar": [
			"october2-tools-paoli-general-p40"
		],
		"demandExplanation": [
			"october2-tools-paoli-general-p40"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
