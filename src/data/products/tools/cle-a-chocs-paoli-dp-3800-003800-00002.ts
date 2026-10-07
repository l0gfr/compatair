import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-paoli-dp-3800-003800-00002",
	"slug": "cle-a-chocs-paoli-dp-3800-003800-00002",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Paoli DP 3800 (réf. 003800.00002)",
	"brand": "Paoli",
	"model": "DP 3800",
	"mpn": "003800.00002",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-paoli-dp-3800-003800-00002.webp",
		"alt": "Repères techniques : Paoli DP 3800 (réf. 003800.00002)",
		"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "paoli-dp-3800",
		"label": "Référence 003800.00002",
		"distinguishingAttributes": {
			"reference": "003800.00002",
			"Masse publiée": "11,5 kg",
			"Vitesse à vide": "3600 tr/min"
		}
	},
	"editorial": {
		"overview": "Paoli DP 3800 (réf. 003800.00002). Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 11,5 kg. Vitesse à vide : 3600 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 11,5 kg.",
			"Vitesse à vide : 3600 tr/min.",
			"Diamètre intérieur du tuyau : 13 mm.",
			"Longueur publiée : 401,5 mm.",
			"Carré de sortie : 1 in."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "11,5 kg",
			"evidenceIds": [
				"october2-tools-paoli-general-p66"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3600 tr/min",
			"evidenceIds": [
				"october2-tools-paoli-general-p66"
			]
		},
		{
			"label": "Diamètre intérieur du tuyau",
			"value": "13 mm",
			"evidenceIds": [
				"october2-tools-paoli-general-p66"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "401,5 mm",
			"evidenceIds": [
				"october2-tools-paoli-general-p66"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "1 in",
			"evidenceIds": [
				"october2-tools-paoli-general-p66"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working pressure    Pressione di utilizzo 91 psi - 6,3 bar",
			"evidenceIds": [
				"october2-tools-paoli-general-p66"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-paoli-general-p66",
			"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf#page=66",
			"sourceLabel": "Paoli, documentation technique fabricant, page PDF 66",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 4a60f1e1ab29d27422ad6cd8605948f5e32d197f27b3c300700631554a6d1352. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-paoli-general-p66"
		],
		"workingPressureBar": [
			"october2-tools-paoli-general-p66"
		],
		"demandExplanation": [
			"october2-tools-paoli-general-p66"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
