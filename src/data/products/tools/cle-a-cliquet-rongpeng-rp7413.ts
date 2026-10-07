import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "cle-a-cliquet-rongpeng-rp7413",
	"slug": "cle-a-cliquet-rongpeng-rp7413",
	"categoryId": "cle-a-cliquet",
	"category": "cle-a-cliquet",
	"label": "Rongpeng RP7413",
	"brand": "Rongpeng",
	"model": "RP7413",
	"mpn": "RP7413",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/cle-a-cliquet-rongpeng-rp7413.webp",
		"alt": "Repères techniques : Rongpeng RP7413",
		"sourceUrl": "https://www.rongpeng.com/Ratchet-Wrench-RP7413",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "rongpeng-rp7413",
		"label": "Référence RP7413",
		"distinguishingAttributes": {
			"reference": "RP7413",
			"Vitesse à vide": "240 tr/min",
			"Masse publiée": "0.5 kg"
		}
	},
	"editorial": {
		"overview": "Rongpeng RP7413. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Vitesse à vide : 240 tr/min. Masse publiée : 0.5 kg.",
		"verifiedFacts": [
			"Vitesse à vide : 240 tr/min.",
			"Masse publiée : 0.5 kg.",
			"Longueur publiée : 173 mm.",
			"Couple de travail déclaré : 35.2 Nm.",
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
			"value": "240 tr/min",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-106-p1"
			]
		},
		{
			"label": "Masse publiée",
			"value": "0.5 kg",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-106-p1"
			]
		},
		{
			"label": "Longueur publiée",
			"value": "173 mm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-106-p1"
			]
		},
		{
			"label": "Couple de travail déclaré",
			"value": "35.2 Nm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-106-p1"
			]
		},
		{
			"label": "Carré de sortie",
			"value": "3/8 in",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-106-p1"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans la fiche.",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-106-p1"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "2.5 cfm",
			"evidenceIds": [
				"october2-tools-rongpeng-pdp-106-p1"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-rongpeng-pdp-106-p1",
			"sourceUrl": "https://www.rongpeng.com/Ratchet-Wrench-RP7413",
			"sourceLabel": "Rongpeng, documentation technique fabricant",
			"sourceType": "manufacturer",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-01",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 1a31c5c7a727d5f8a177d8d162bf9bdbc4fb0a1e338de5daa1c2f79b0b420d6d. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-rongpeng-pdp-106-p1"
		],
		"workingPressureBar": [
			"october2-tools-rongpeng-pdp-106-p1"
		],
		"demandExplanation": [
			"october2-tools-rongpeng-pdp-106-p1"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
