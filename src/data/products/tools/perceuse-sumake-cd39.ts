const product = {
	"id": "perceuse-sumake-cd39",
	"slug": "perceuse-sumake-cd39",
	"categoryId": "perceuse",
	"category": "perceuse",
	"label": "Sumake CD39",
	"brand": "Sumake",
	"model": "CD39",
	"mpn": "CD39",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/perceuse-sumake-cd39.webp",
		"alt": "Repères techniques : Sumake CD39",
		"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-cd39",
		"label": "Référence CD39",
		"distinguishingAttributes": {
			"reference": "CD39",
			"Masse publiée": "1022 g",
			"Vitesse à vide": "1600 tr/min"
		}
	},
	"editorial": {
		"overview": "Sumake CD39. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 1022 g. Vitesse à vide : 1600 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 1022 g.",
			"Vitesse à vide : 1600 tr/min."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1022 g",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p12"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "1600 tr/min",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p12"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans ce tableau ; aucune assimilation de kg/cm² à bar.",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p12"
			]
		},
		{
			"label": "Consommation moyenne, hors calcul",
			"value": "19 cfm",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p12"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-sumake-stsc22-p12",
			"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf#page=12",
			"sourceLabel": "Sumake, catalogue assemblage STSC22, page PDF 12",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 3990da2e2da3b47636c11cbf6860d37cba62d302c1931caa98017f0c8cd3684a. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-sumake-stsc22-p12"
		],
		"workingPressureBar": [
			"october2-tools-sumake-stsc22-p12"
		],
		"demandExplanation": [
			"october2-tools-sumake-stsc22-p12"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
