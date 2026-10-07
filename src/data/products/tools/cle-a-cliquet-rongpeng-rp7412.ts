import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-rongpeng-rp7412",
	"slug": "cle-a-cliquet-rongpeng-rp7412",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Rongpeng RP7412",
	"brand": "Rongpeng",
	"model": "RP7412",
	"mpn": "RP7412",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-rongpeng-rp7412.webp",
		"alt": "Repères techniques : Rongpeng RP7412",
		"sourceUrl": "https://www.rongpeng.com/Pneumatic-Ratchet-Wrench",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rongpeng-rp7412",
		"label": "Référence RP7412",
		"distinguishingAttributes": {
			"reference": "RP7412",
			"Vitesse à vide": "160 tr/min",
			"Masse publiée": "1.1 kg"
		}
	},
	"editorial": {
		"overview": "Rongpeng RP7412. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 160 tr/min. Masse publiée : 1.1 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 160 tr/min.",
			"Masse publiée : 1.1 kg.",
			"Longueur publiée : 254 mm.",
			"Couple de travail déclaré : 68 Nm.",
			"Carré de sortie : 1/2 in."
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
				"october2-tools-rongpeng-pdp-104-p1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "1.1 kg",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-104-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "254 mm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-104-p1"
			]
		},
		{
			"label": "Couple de travail déclaré",
			"value": "68 Nm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-104-p1"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "1/2 in",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-104-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-104-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "77 L/min",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-104-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rongpeng-pdp-104-p1",
			"sourceUrl": "https://www.rongpeng.com/Pneumatic-Ratchet-Wrench",
			"sourceLabel": "Rongpeng, documentation technique fabricant",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 6dd3e3f1b59f75ba06c238eb704542e9e0d9972e40636848e05f18d58327e135. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rongpeng-pdp-104-p1"
		],
		"workingPressureBar": [
			"october2-tools-rongpeng-pdp-104-p1"
		],
		"demandExplanation": [
			"october2-tools-rongpeng-pdp-104-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
