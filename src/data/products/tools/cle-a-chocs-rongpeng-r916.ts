import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-chocs-rongpeng-r916",
	"slug": "cle-a-chocs-rongpeng-r916",
	"categoryId": "cle-a-chocs",
	"category": "cle-a-chocs",
	"label": "Rongpeng R916",
	"brand": "Rongpeng",
	"model": "R916",
	"mpn": "R916",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-chocs-rongpeng-r916.webp",
		"alt": "Repères techniques : Rongpeng R916",
		"sourceUrl": "https://www.rongpeng.com/Heavy-Duty-Air-Impact-Wrench-R916",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rongpeng-r916",
		"label": "Référence R916",
		"distinguishingAttributes": {
			"reference": "R916",
			"Vitesse à vide": "7800 tr/min",
			"Masse publiée": "2.39 kg"
		}
	},
	"editorial": {
		"overview": "Rongpeng R916. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 7800 tr/min. Masse publiée : 2.39 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 7800 tr/min.",
			"Masse publiée : 2.39 kg.",
			"Longueur publiée : 192 mm.",
			"Couple de travail déclaré : 1100 Nm.",
			"Carré de sortie : 1/2 in."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"La fiche déclare 2,35 kg dans la description et 2,39 kg dans le champ de masse ; retenir la confirmation du fabricant pour une contrainte de poids.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "7800 tr/min",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-58-p1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "2.39 kg",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-58-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "192 mm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-58-p1"
			]
		},
		{
			"label": "Couple de travail déclaré",
			"value": "1100 Nm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-58-p1"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "1/2 in",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-58-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working Pressure: 90PSI(6.3Bar",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-58-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "6.5 cfm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-58-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rongpeng-pdp-58-p1",
			"sourceUrl": "https://www.rongpeng.com/Heavy-Duty-Air-Impact-Wrench-R916",
			"sourceLabel": "Rongpeng, documentation technique fabricant",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 0fa2a632e9402693f788625e51417f23187e889dc2bb34528d31fb041fc5660e. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rongpeng-pdp-58-p1"
		],
		"workingPressureBar": [
			"october2-tools-rongpeng-pdp-58-p1"
		],
		"demandExplanation": [
			"october2-tools-rongpeng-pdp-58-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
