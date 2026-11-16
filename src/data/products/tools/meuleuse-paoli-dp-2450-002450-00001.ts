import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "meuleuse-paoli-dp-2450-002450-00001",
	"slug": "meuleuse-paoli-dp-2450-002450-00001",
	"categoryId": "meuleuse",
	"category": "meuleuse",
	"label": "Paoli DP 2450 (réf. 002450.00001)",
	"brand": "Paoli",
	"model": "DP 2450",
	"mpn": "002450.00001",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
	"confidence": "B",
	"image": {
		"src": "/images/products/meuleuse-paoli-dp-2450-002450-00001-technical-20261116-reviews.svg",
		"alt": "Repères techniques : Paoli DP 2450 (réf. 002450.00001)",
		"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf",
		"sourceLabel": "Carte technique CompatAir, données fabricant relues le 16 novembre 2026"
	},
	"variant": {
		"familyId": "paoli-dp-2450",
		"label": "Référence 002450.00001",
		"distinguishingAttributes": {
			"reference": "002450.00001",
			"Vitesse à vide": "18 000 tr/min",
			"Masse publiée": "0,93 kg"
		}
	},
	"editorial": {
		"overview": "Paoli DP 2450 002450.00001 : meuleuse droite allongée à pince 6 mm, deux roulements avant et échappement latéral réglable. Le code 002450.00002 est la version à pince 1/4 pouce ; les deux montages ne sont pas interchangeables. La DP 2250 est plus courte et tourne plus vite.",
		"verifiedFacts": [
			"Vitesse à vide : 18 000 tr/min.",
			"Masse publiée : 0,93 kg.",
			"Longueur publiée : 303 mm.",
			"Puissance publiée : 372 W.",
			"Pince livrée : 6 mm.",
			"Pince livrée : 6 mm, code 002450.00001.",
			"Puissance / vitesse : 372 W / 18 000 tr/min.",
			"Longueur / masse : 303 mm / 0,93 kg.",
			"Raccord / flexible : 1/4 pouce / 9,5 mm."
		],
		"limitations": [
			"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "18 000 tr/min",
			"evidenceIds": [
				"october2-tools-paoli-general-p96"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0,93 kg",
			"evidenceIds": [
				"october2-tools-paoli-general-p96"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "303 mm",
			"evidenceIds": [
				"october2-tools-paoli-general-p96"
			]
		},
		{
			"label": "Puissance publiée",
			"value": "372 W",
			"evidenceIds": [
				"october2-tools-paoli-general-p96"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working pressure Pressione di utilizzo   90 psi - 6,3 bar 90 psi - 6,3 bar",
			"evidenceIds": [
				"october2-tools-paoli-general-p96"
			]
		},
		{
			"label": "Pince livrée",
			"value": "6 mm, code 002450.00001",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-paoli-dp-2450-002450-00001:0"
			]
		},
		{
			"label": "Puissance / vitesse",
			"value": "372 W / 18 000 tr/min",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-paoli-dp-2450-002450-00001:0"
			]
		},
		{
			"label": "Longueur / masse",
			"value": "303 mm / 0,93 kg",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-paoli-dp-2450-002450-00001:0"
			]
		},
		{
			"label": "Raccord / flexible",
			"value": "1/4 pouce / 9,5 mm",
			"evidenceIds": [
				"review:2026-11-16-reviews:meuleuse-paoli-dp-2450-002450-00001:0"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-paoli-general-p96",
			"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf#page=96",
			"sourceLabel": "Paoli, documentation technique fabricant, page PDF 96",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 4a60f1e1ab29d27422ad6cd8605948f5e32d197f27b3c300700631554a6d1352. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		},
		{
			"id": "review:2026-11-16-reviews:meuleuse-paoli-dp-2450-002450-00001:0",
			"sourceUrl": "https://www.dinopaoli.com/wp-content/uploads/PAOLI_GENERAL-CATALOGUE_2024.pdf",
			"sourceLabel": "Paoli, document constructeur relu le 16 novembre 2026",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-11-16",
			"confidence": "B",
			"notes": "Paoli DP 2450 002450.00001 : meuleuse droite allongée à pince 6 mm, deux roulements avant et échappement latéral réglable. Le code 002450.00002 est la version à pince 1/4 pouce ; les deux montages ne sont pas interchangeables. La DP 2250 est plus courte et tourne plus vite. GET complet SHA-256 4a60f1e1ab29d27422ad6cd8605948f5e32d197f27b3c300700631554a6d1352. Pages PDF lues : 96."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-paoli-general-p96"
		],
		"workingPressureBar": [
			"october2-tools-paoli-general-p96"
		],
		"demandExplanation": [
			"october2-tools-paoli-general-p96"
		]
	},
	"notes": [
		"Consommation de cette référence non établie dans la source ; aucun débit déduit de la puissance ou de la vitesse."
	]
};

export default product;
