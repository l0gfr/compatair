import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-paoli-dp-3400-003400-00001",
	"slug": "cle-a-chocs-paoli-dp-3400-003400-00001",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Paoli DP 3400 (réf. 003400.00001)",
	"brand": "Paoli",
	"model": "DP 3400",
	"mpn": "003400.00001",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-paoli-dp-3400-003400-00001.webp",
		"alt": "Repères techniques : Paoli DP 3400 (réf. 003400.00001)",
		"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "paoli-dp-3400",
		"label": "Référence 003400.00001",
		"distinguishingAttributes": {
			"reference": "003400.00001",
			"Masse publiée": "5,7 kg",
			"Vitesse à vide": "5500 tr/min"
		}
	},
	"editorial": {
		"overview": "Paoli DP 3400 (réf. 003400.00001). Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 5,7 kg. Vitesse à vide : 5500 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 5,7 kg.",
			"Vitesse à vide : 5500 tr/min.",
			"Diamètre intérieur du tuyau : 13 mm.",
			"Longueur publiée : 226 mm.",
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
			"value": "5,7 kg",
			"evidenceIds": [
				"october2-tools-paoli-general-p46"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "5500 tr/min",
			"evidenceIds": [
				"october2-tools-paoli-general-p46"
			]
		},
		{
			"label": "Diamètre intérieur du tuyau",
			"value": "13 mm",
			"evidenceIds": [
				"october2-tools-paoli-general-p46"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "226 mm",
			"evidenceIds": [
				"october2-tools-paoli-general-p46"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "3/4 in",
			"evidenceIds": [
				"october2-tools-paoli-general-p46"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working pressure    Pressione di utilizzo 91 psi - 6,3 bar",
			"evidenceIds": [
				"october2-tools-paoli-general-p46"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-paoli-general-p46",
			"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf#page=46",
			"sourceLabel": "Paoli, documentation technique fabricant, page PDF 46",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 4a60f1e1ab29d27422ad6cd8605948f5e32d197f27b3c300700631554a6d1352. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-paoli-general-p46"
		],
		"workingPressureBar": [
			"october2-tools-paoli-general-p46"
		],
		"demandExplanation": [
			"october2-tools-paoli-general-p46"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
