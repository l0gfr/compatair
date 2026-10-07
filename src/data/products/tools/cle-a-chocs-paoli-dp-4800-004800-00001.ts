import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-paoli-dp-4800-004800-00001",
	"slug": "cle-a-chocs-paoli-dp-4800-004800-00001",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Paoli DP 4800 (réf. 004800.00001)",
	"brand": "Paoli",
	"model": "DP 4800",
	"mpn": "004800.00001",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-paoli-dp-4800-004800-00001.webp",
		"alt": "Repères techniques : Paoli DP 4800 (réf. 004800.00001)",
		"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "paoli-dp-4800",
		"label": "Référence 004800.00001",
		"distinguishingAttributes": {
			"reference": "004800.00001",
			"Masse publiée": "1,98 kg",
			"Vitesse à vide": "6000 tr/min"
		}
	},
	"editorial": {
		"overview": "Paoli DP 4800 (réf. 004800.00001). Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 1,98 kg. Vitesse à vide : 6000 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 1,98 kg.",
			"Vitesse à vide : 6000 tr/min.",
			"Diamètre intérieur du tuyau : 9,5 mm.",
			"Longueur publiée : 332 mm.",
			"Carré de sortie : 1/2 in."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1,98 kg",
			"evidenceIds": [
				"october2-tools-paoli-general-p22"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "6000 tr/min",
			"evidenceIds": [
				"october2-tools-paoli-general-p22"
			]
		},
		{
			"label": "Diamètre intérieur du tuyau",
			"value": "9,5 mm",
			"evidenceIds": [
				"october2-tools-paoli-general-p22"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "332 mm",
			"evidenceIds": [
				"october2-tools-paoli-general-p22"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "1/2 in",
			"evidenceIds": [
				"october2-tools-paoli-general-p22"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working pressure    Pressione di utilizzo 6,3 bar - 90 psi",
			"evidenceIds": [
				"october2-tools-paoli-general-p22"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-paoli-general-p22",
			"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf#page=22",
			"sourceLabel": "Paoli, documentation technique fabricant, page PDF 22",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 4a60f1e1ab29d27422ad6cd8605948f5e32d197f27b3c300700631554a6d1352. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-paoli-general-p22"
		],
		"workingPressureBar": [
			"october2-tools-paoli-general-p22"
		],
		"demandExplanation": [
			"october2-tools-paoli-general-p22"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
