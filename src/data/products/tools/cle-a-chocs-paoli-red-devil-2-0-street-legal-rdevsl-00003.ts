import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-paoli-red-devil-2-0-street-legal-rdevsl-00003",
	"slug": "cle-a-chocs-paoli-red-devil-2-0-street-legal-rdevsl-00003",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Paoli RED DEVIL 2.0 STREET LEGAL (réf. RDEVSL.00003)",
	"brand": "Paoli",
	"model": "RED DEVIL 2.0 STREET LEGAL",
	"mpn": "RDEVSL.00003",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 7,
		"typical": 7,
		"max": 7
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-paoli-red-devil-2-0-street-legal-rdevsl-00003.webp",
		"alt": "Repères techniques : Paoli RED DEVIL 2.0 STREET LEGAL (réf. RDEVSL.00003)",
		"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "paoli-red-devil-2-0-street-legal",
		"label": "Référence RDEVSL.00003",
		"distinguishingAttributes": {
			"reference": "RDEVSL.00003",
			"Masse publiée": "2,4 kg",
			"Vitesse à vide": "12000 tr/min"
		}
	},
	"editorial": {
		"overview": "Paoli RED DEVIL 2.0 STREET LEGAL (réf. RDEVSL.00003). Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse. Masse publiée : 2,4 kg. Vitesse à vide : 12000 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 2,4 kg.",
			"Vitesse à vide : 12000 tr/min.",
			"Diamètre intérieur du tuyau : 13 mm.",
			"Longueur publiée : 192,6 mm.",
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
			"value": "2,4 kg",
			"evidenceIds": [
				"october2-tools-paoli-general-p38"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "12000 tr/min",
			"evidenceIds": [
				"october2-tools-paoli-general-p38"
			]
		},
		{
			"label": "Diamètre intérieur du tuyau",
			"value": "13 mm",
			"evidenceIds": [
				"october2-tools-paoli-general-p38"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "192,6 mm",
			"evidenceIds": [
				"october2-tools-paoli-general-p38"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "1/2 in",
			"evidenceIds": [
				"october2-tools-paoli-general-p38"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working pressure    Pressione di utilizzo 101 psi - 7 bar",
			"evidenceIds": [
				"october2-tools-paoli-general-p38"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-paoli-general-p38",
			"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf#page=38",
			"sourceLabel": "Paoli, documentation technique fabricant, page PDF 38",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 4a60f1e1ab29d27422ad6cd8605948f5e32d197f27b3c300700631554a6d1352. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-paoli-general-p38"
		],
		"workingPressureBar": [
			"october2-tools-paoli-general-p38"
		],
		"demandExplanation": [
			"october2-tools-paoli-general-p38"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
