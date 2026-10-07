import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-rongpeng-rp17411",
	"slug": "cle-a-cliquet-rongpeng-rp17411",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Rongpeng RP17411",
	"brand": "Rongpeng",
	"model": "RP17411",
	"mpn": "RP17411",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-rongpeng-rp17411.webp",
		"alt": "Repères techniques : Rongpeng RP17411",
		"sourceUrl": "https://www.rongpeng.com/Ratchet-Wrench-RP17411",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rongpeng-rp17411",
		"label": "Référence RP17411",
		"distinguishingAttributes": {
			"reference": "RP17411",
			"Vitesse à vide": "160 tr/min",
			"Masse publiée": "1.2 kg"
		}
	},
	"editorial": {
		"overview": "Rongpeng RP17411. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 160 tr/min. Masse publiée : 1.2 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 160 tr/min.",
			"Masse publiée : 1.2 kg.",
			"Longueur publiée : 280 mm.",
			"Couple de travail déclaré : 67.5 Nm.",
			"Carré de sortie : 3/8 in."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Vitesse à vide",
			"value": "160 tr/min",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-108-p1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.2 kg",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-108-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "280 mm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-108-p1"
			]
		},
		{
			"label": "Couple de travail déclaré",
			"value": "67.5 Nm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-108-p1"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "3/8 in",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-108-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-108-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "114 L/min",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-108-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rongpeng-pdp-108-p1",
			"sourceUrl": "https://www.rongpeng.com/Ratchet-Wrench-RP17411",
			"sourceLabel": "Rongpeng, documentation technique fabricant",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : ecabbb5b1466588fc905f7d5eaa3e04c3a39fde7928880ee532ba19cab83480d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rongpeng-pdp-108-p1"
		],
		"workingPressureBar": [
			"october2-tools-rongpeng-pdp-108-p1"
		],
		"demandExplanation": [
			"october2-tools-rongpeng-pdp-108-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
