import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-paoli-dp-320-000320-00037",
	"slug": "cle-a-chocs-paoli-dp-320-000320-00037",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Paoli DP 320 (réf. 000320.00037)",
	"brand": "Paoli",
	"model": "DP 320",
	"mpn": "000320.00037",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-paoli-dp-320-000320-00037.webp",
		"alt": "Repères techniques : Paoli DP 320 (réf. 000320.00037)",
		"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "paoli-dp-320",
		"label": "Référence 000320.00037",
		"distinguishingAttributes": {
			"reference": "000320.00037",
			"Masse publiée": "10,8 kg",
			"Vitesse à vide": "3000 tr/min"
		}
	},
	"editorial": {
		"overview": "Paoli DP 320 (réf. 000320.00037). Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 10,8 kg. Vitesse à vide : 3000 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 10,8 kg.",
			"Vitesse à vide : 3000 tr/min.",
			"Diamètre intérieur du tuyau : 16 mm.",
			"Longueur publiée : 275 mm.",
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
			"value": "10,8 kg",
			"evidenceIds": [
				"october2-tools-paoli-general-p70"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "3000 tr/min",
			"evidenceIds": [
				"october2-tools-paoli-general-p70"
			]
		},
		{
			"label": "Diamètre intérieur du tuyau",
			"value": "16 mm",
			"evidenceIds": [
				"october2-tools-paoli-general-p70"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "275 mm",
			"evidenceIds": [
				"october2-tools-paoli-general-p70"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "1 in",
			"evidenceIds": [
				"october2-tools-paoli-general-p70"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working pressure    Pressione di utilizzo 91 psi - 6,3 bar",
			"evidenceIds": [
				"october2-tools-paoli-general-p70"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-paoli-general-p70",
			"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf#page=70",
			"sourceLabel": "Paoli, documentation technique fabricant, page PDF 70",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 4a60f1e1ab29d27422ad6cd8605948f5e32d197f27b3c300700631554a6d1352. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-paoli-general-p70"
		],
		"workingPressureBar": [
			"october2-tools-paoli-general-p70"
		],
		"demandExplanation": [
			"october2-tools-paoli-general-p70"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
