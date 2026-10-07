import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-sumake-hawfe51200",
	"slug": "boulonneuse-sumake-hawfe51200",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Sumake HAWFE51200",
	"brand": "Sumake",
	"model": "HAWFE51200",
	"mpn": "HAWFE51200",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-sumake-hawfe51200.webp",
		"alt": "Repères techniques : Sumake HAWFE51200",
		"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-hawfe51200",
		"label": "Référence HAWFE51200",
		"distinguishingAttributes": {
			"reference": "HAWFE51200",
			"Masse publiée": "3.3 kg",
			"Vitesse à vide": "100 tr/min"
		}
	},
	"editorial": {
		"overview": "Sumake HAWFE51200. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 3.3 kg. Vitesse à vide : 100 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 3.3 kg.",
			"Vitesse à vide : 100 tr/min.",
			"Longueur hors tout : 505 mm.",
			"Plage de couple déclarée : 40~120 Nm.",
			"Pression publiée (unité originale) : 6 kg/cm²."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "3.3 kg",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p16"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "100 tr/min",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p16"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "505 mm",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p16"
			]
		},
		{
			"label": "Plage de couple déclarée",
			"value": "40~120 Nm",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p16"
			]
		},
		{
			"label": "Pression publiée (unité originale)",
			"value": "6 kg/cm²",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p16"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Air Pressure: 6 kg/cm² selon le tableau ; pression de mesure de la consommation non explicitée.",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p16"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "23 cfm",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p16"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-sumake-stsc22-p16",
			"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf#page=16",
			"sourceLabel": "Sumake, catalogue assemblage STSC22, page PDF 16",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 3990da2e2da3b47636c11cbf6860d37cba62d302c1931caa98017f0c8cd3684a. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-sumake-stsc22-p16"
		],
		"workingPressureBar": [
			"october2-tools-sumake-stsc22-p16"
		],
		"demandExplanation": [
			"october2-tools-sumake-stsc22-p16"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
