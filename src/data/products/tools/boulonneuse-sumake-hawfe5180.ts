import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "boulonneuse-sumake-hawfe5180",
	"slug": "boulonneuse-sumake-hawfe5180",
	"categoryId": "boulonneuse",
	"category": "boulonneuse",
	"label": "Sumake HAWFE5180",
	"brand": "Sumake",
	"model": "HAWFE5180",
	"mpn": "HAWFE5180",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/boulonneuse-sumake-hawfe5180.webp",
		"alt": "Repères techniques : Sumake HAWFE5180",
		"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-hawfe5180",
		"label": "Référence HAWFE5180",
		"distinguishingAttributes": {
			"reference": "HAWFE5180",
			"Masse publiée": "1.8 kg",
			"Vitesse à vide": "700 tr/min"
		}
	},
	"editorial": {
		"overview": "Sumake HAWFE5180. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 1.8 kg. Vitesse à vide : 700 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 1.8 kg.",
			"Vitesse à vide : 700 tr/min.",
			"Longueur hors tout : 458 mm.",
			"Plage de couple déclarée : 6 ~ 18 Nm.",
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
			"value": "1.8 kg",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p16"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "700 tr/min",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p16"
			]
		},
		{
			"label": "Longueur hors tout",
			"value": "458 mm",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p16"
			]
		},
		{
			"label": "Plage de couple déclarée",
			"value": "6 ~ 18 Nm",
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
