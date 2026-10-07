import type { ToolProfileInput } from '../../../domain/catalog';

const product: ToolProfileInput = {
	"id": "perceuse-sumake-acdn458",
	"slug": "perceuse-sumake-acdn458",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Sumake ACDN458",
	"brand": "Sumake",
	"model": "ACDN458",
	"mpn": "ACDN458",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-sumake-acdn458.webp",
		"alt": "Repères techniques : Sumake ACDN458",
		"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-acdn458",
		"label": "Référence ACDN458",
		"distinguishingAttributes": {
			"reference": "ACDN458",
			"Masse publiée": "1100 g",
			"Vitesse à vide": "750 tr/min"
		}
	},
	"editorial": {
		"overview": "Sumake ACDN458. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 1100 g. Vitesse à vide : 750 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 1100 g.",
			"Vitesse à vide : 750 tr/min.",
			"Dimensions (Ø × L × H) : 45 x 235 x 160 mm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1100 g",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p11"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "750 tr/min",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p11"
			]
		},
		{
			"label": "Dimensions (Ø × L × H)",
			"value": "45 x 235 x 160 mm",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p11"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans ce tableau ; aucune assimilation de kg/cm² à bar.",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p11"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "19 cfm",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p11"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-sumake-stsc22-p11",
			"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf#page=11",
			"sourceLabel": "Sumake, catalogue assemblage STSC22, page PDF 11",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 3990da2e2da3b47636c11cbf6860d37cba62d302c1931caa98017f0c8cd3684a. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-sumake-stsc22-p11"
		],
		"workingPressureBar": [
			"october2-tools-sumake-stsc22-p11"
		],
		"demandExplanation": [
			"october2-tools-sumake-stsc22-p11"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
