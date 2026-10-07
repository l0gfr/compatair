import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-paoli-dp9860-009860-00001",
	"slug": "cle-a-chocs-paoli-dp9860-009860-00001",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Paoli DP9860 (réf. 009860.00001)",
	"brand": "Paoli",
	"model": "DP9860",
	"mpn": "009860.00001",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-paoli-dp9860-009860-00001.webp",
		"alt": "Repères techniques : Paoli DP9860 (réf. 009860.00001)",
		"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "paoli-dp9860",
		"label": "Référence 009860.00001",
		"distinguishingAttributes": {
			"reference": "009860.00001",
			"Masse publiée": "1,35 kg",
			"Vitesse à vide": "8500 tr/min"
		}
	},
	"editorial": {
		"overview": "Paoli DP9860 (réf. 009860.00001). Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 1,35 kg. Vitesse à vide : 8500 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 1,35 kg.",
			"Vitesse à vide : 8500 tr/min.",
			"Diamètre intérieur du tuyau : 9,5 mm.",
			"Longueur publiée : 92 mm.",
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
			"value": "1,35 kg",
			"evidenceIds": [
				"october2-tools-paoli-general-p24"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "8500 tr/min",
			"evidenceIds": [
				"october2-tools-paoli-general-p24"
			]
		},
		{
			"label": "Diamètre intérieur du tuyau",
			"value": "9,5 mm",
			"evidenceIds": [
				"october2-tools-paoli-general-p24"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "92 mm",
			"evidenceIds": [
				"october2-tools-paoli-general-p24"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "1/2 in",
			"evidenceIds": [
				"october2-tools-paoli-general-p24"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working pressure    Pressione di utilizzo 6,3 bar - 90 psi",
			"evidenceIds": [
				"october2-tools-paoli-general-p24"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-paoli-general-p24",
			"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf#page=24",
			"sourceLabel": "Paoli, documentation technique fabricant, page PDF 24",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 4a60f1e1ab29d27422ad6cd8605948f5e32d197f27b3c300700631554a6d1352. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-paoli-general-p24"
		],
		"workingPressureBar": [
			"october2-tools-paoli-general-p24"
		],
		"demandExplanation": [
			"october2-tools-paoli-general-p24"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
