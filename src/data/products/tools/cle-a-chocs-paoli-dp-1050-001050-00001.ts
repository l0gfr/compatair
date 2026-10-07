import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-paoli-dp-1050-001050-00001",
	"slug": "cle-a-chocs-paoli-dp-1050-001050-00001",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Paoli DP 1050 (réf. 001050.00001)",
	"brand": "Paoli",
	"model": "DP 1050",
	"mpn": "001050.00001",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-paoli-dp-1050-001050-00001.webp",
		"alt": "Repères techniques : Paoli DP 1050 (réf. 001050.00001)",
		"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "paoli-dp-1050",
		"label": "Référence 001050.00001",
		"distinguishingAttributes": {
			"reference": "001050.00001",
			"Masse publiée": "1,3 kg",
			"Vitesse à vide": "9000 tr/min"
		}
	},
	"editorial": {
		"overview": "Paoli DP 1050 (réf. 001050.00001). Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 1,3 kg. Vitesse à vide : 9000 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 1,3 kg.",
			"Vitesse à vide : 9000 tr/min.",
			"Diamètre intérieur du tuyau : 8 mm.",
			"Longueur publiée : 110 mm.",
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
			"value": "1,3 kg",
			"evidenceIds": [
				"october2-tools-paoli-general-p30"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "9000 tr/min",
			"evidenceIds": [
				"october2-tools-paoli-general-p30"
			]
		},
		{
			"label": "Diamètre intérieur du tuyau",
			"value": "8 mm",
			"evidenceIds": [
				"october2-tools-paoli-general-p30"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "110 mm",
			"evidenceIds": [
				"october2-tools-paoli-general-p30"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "1/2 in",
			"evidenceIds": [
				"october2-tools-paoli-general-p30"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working pressure    Pressione di utilizzo 91 psi - 6,3 bar",
			"evidenceIds": [
				"october2-tools-paoli-general-p30"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-paoli-general-p30",
			"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf#page=30",
			"sourceLabel": "Paoli, documentation technique fabricant, page PDF 30",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 4a60f1e1ab29d27422ad6cd8605948f5e32d197f27b3c300700631554a6d1352. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-paoli-general-p30"
		],
		"workingPressureBar": [
			"october2-tools-paoli-general-p30"
		],
		"demandExplanation": [
			"october2-tools-paoli-general-p30"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
