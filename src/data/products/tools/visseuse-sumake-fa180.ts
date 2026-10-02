const product = {
	"id": "visseuse-sumake-fa180",
	"slug": "visseuse-sumake-fa180",
	"categoryId": "visseuse",
	"category": "visseuse",
	"label": "Sumake FA180",
	"brand": "Sumake",
	"model": "FA180",
	"mpn": "FA180",
	"demandModel": "variable-volume",
	"workingPressureBar": {},
	"demandExplanation": "La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
	"confidence": "B",
	"image": {
		"src": "/images/products/visseuse-sumake-fa180.webp",
		"alt": "Repères techniques : Sumake FA180",
		"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf",
		"sourceLabel": "Carte technique CompatAir, données déclarées par le fabricant"
	},
	"variant": {
		"familyId": "sumake-fa180",
		"label": "Référence FA180",
		"distinguishingAttributes": {
			"reference": "FA180",
			"Masse publiée": "1450 g",
			"Vitesse à vide": "330 tr/min"
		}
	},
	"editorial": {
		"overview": "Sumake FA180. La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité. Masse publiée : 1450 g. Vitesse à vide : 330 tr/min.",
		"verifiedFacts": [
			"Masse publiée : 1450 g.",
			"Vitesse à vide : 330 tr/min.",
			"Plage de couple déclarée : 3-18 Nm."
		],
		"limitations": [
			"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité.",
			"Édition et source identifiées, disponibilité actuelle à confirmer. Vérifier la notice et la configuration exacte livrée."
		]
	},
	"specifications": [
		{
			"label": "Masse publiée",
			"value": "1450 g",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p7"
			]
		},
		{
			"label": "Vitesse à vide",
			"value": "330 tr/min",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p7"
			]
		},
		{
			"label": "Plage de couple déclarée",
			"value": "3-18 Nm",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p7"
			]
		},
		{
			"label": "Portée de la pression dans la source",
			"value": "Pression de mesure de la consommation non établie dans ce tableau ; aucune assimilation de kg/cm² à bar.",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p7"
			]
		},
		{
			"label": "Consommation de régime non précisé, hors calcul",
			"value": "19 cfm",
			"evidenceIds": [
				"october2-tools-sumake-stsc22-p7"
			]
		}
	],
	"evidence": [
		{
			"id": "october2-tools-sumake-stsc22-p7",
			"sourceUrl": "https://s3.hicloud.net.tw/cata/air%20tool/CATA-STSC22-All.pdf#page=7",
			"sourceLabel": "Sumake, catalogue assemblage STSC22, page PDF 7",
			"sourceType": "manual",
			"sourceRole": "primary",
			"retrievedAt": "2026-10-02",
			"confidence": "B",
			"notes": "SHA-256 de la réponse source : 3990da2e2da3b47636c11cbf6860d37cba62d302c1931caa98017f0c8cd3684a. Caractéristiques déclarées par le fabricant, sans essai physique CompatAir."
		}
	],
	"fieldSources": {
		"mpn": [
			"october2-tools-sumake-stsc22-p7"
		],
		"workingPressureBar": [
			"october2-tools-sumake-stsc22-p7"
		],
		"demandExplanation": [
			"october2-tools-sumake-stsc22-p7"
		]
	},
	"notes": [
		"La pression de mesure de la consommation n’est pas établie. Les valeurs documentaires restent hors du calcul de compatibilité."
	]
};

export default product;
