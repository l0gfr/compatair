import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-sumake-hawf5250",
	"slug": "boulonneuse-sumake-hawf5250",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Sumake HAWF5250",
	"brand": "Sumake",
	"model": "HAWF5250",
	"mpn": "HAWF5250",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-sumake-hawf5250.webp",
		"alt": "Repères techniques : Sumake HAWF5250",
		"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-hawf5250",
		"label": "Référence HAWF5250",
		"distinguishingAttributes": {
			"reference": "HAWF5250",
			"Masse publiée": "1.6 kg",
			"Vitesse à vide": "430 tr/min"
		}
	},
	"editorial": {
		"overview": "Sumake HAWF5250. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 1.6 kg. Vitesse à vide : 430 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 1.6 kg.",
			"Vitesse à vide : 430 tr/min.",
			"Longueur hors tout : 359 mm.",
			"Plage de couple déclarée : 10 ~25 Nm.",
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
			"value": "1.6 kg",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p16"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "430 tr/min",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p16"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "359 mm",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p16"
			]
		},
		{
			"label": "Plage de couple déclarée",
			"value": "10 ~25 Nm",
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
			"value": "19 cfm",
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
