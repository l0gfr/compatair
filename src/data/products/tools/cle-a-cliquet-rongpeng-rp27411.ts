import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-rongpeng-rp27411",
	"slug": "cle-a-cliquet-rongpeng-rp27411",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Rongpeng RP27411",
	"brand": "Rongpeng",
	"model": "RP27411",
	"mpn": "RP27411",
	"demandModel": "variable-volume",
	"workingPressureBar": {
		"min": 6.3,
		"typical": 6.3,
		"max": 6.3
	},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-rongpeng-rp27411.webp",
		"alt": "Repères techniques : Rongpeng RP27411",
		"sourceUrl": "https://www.rongpeng.com/Ratchet-Wrench-RP27411",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rongpeng-rp27411",
		"label": "Référence RP27411",
		"distinguishingAttributes": {
			"reference": "RP27411",
			"Vitesse à vide": "160 tr/min",
			"Masse publiée": "1.23 kg"
		}
	},
	"editorial": {
		"overview": "Rongpeng RP27411. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 160 tr/min. Masse publiée : 1.23 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 160 tr/min.",
			"Masse publiée : 1.23 kg.",
			"Longueur publiée : 282 mm."
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
				"october2-tools-rongpeng-pdp-107-p1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.23 kg",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-107-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "282 mm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-107-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Working Pressure;0.63MPA",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-107-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "4 cfm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-107-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rongpeng-pdp-107-p1",
			"sourceUrl": "https://www.rongpeng.com/Ratchet-Wrench-RP27411",
			"sourceLabel": "Rongpeng, documentation technique fabricant",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : c98424ea97ad3bf9f4540f5331fbca4ad59c229db05e3ded82108fc944f7f339. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rongpeng-pdp-107-p1"
		],
		"workingPressureBar": [
			"october2-tools-rongpeng-pdp-107-p1"
		],
		"demandExplanation": [
			"october2-tools-rongpeng-pdp-107-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
